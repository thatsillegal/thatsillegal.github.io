const works = [
    {
        "title": "作品1",
        "description": "这是第一个作品的描述。",
        "image": "images/work1.jpg"
    },
    {
        "title": "作品2",
        "description": "这是第二个作品的描述。",
        "image": "images/work2.jpg"
    },
    {
        "title": "作品3",
        "description": "这是第三个作品的描述。",
        "image": "images/work3.jpg"
    },
    {
        "title": "作品4",
        "description": "这是第四个作品的描述。",
        "image": "images/work4.jpg"
    },
    {
        "title": "作品5",
        "description": "这是第五个作品的描述。",
        "image": "images/work5.jpg"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // 首页作品展示部分
    const gallery = document.querySelector('.gallery');
    works.forEach((work, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        
        item.innerHTML = `
            <img src="${work.image}" alt="${work.title}">
            <h3>${work.title}</h3>
            <p>${work.description}</p>
        `;
        
        item.addEventListener('click', function() {
            window.location.href = `work-template.html?work=${index}`;
        });

        gallery.appendChild(item);
    });
});
