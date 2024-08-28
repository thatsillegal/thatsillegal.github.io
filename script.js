const works = [
    {
        "title": "作品1",
        "description": "这是第一个作品的描述。",
        "image": "works/images/work1.jpg"
    },
    {
        "title": "作品2",
        "description": "这是第二个作品的描述。",
        "image": "works/images/work2.jpg"
    },
    {
        "title": "作品3",
        "description": "这是第三个作品的描述。",
        "image": "works/images/work3.jpg"
    },
    {
        "title": "作品4",
        "description": "这是第四个作品的描述。",
        "image": "works/images/work4.jpg"
    },
    {
        "title": "作品5",
        "description": "这是第五个作品的描述。",
        "image": "works/images/work5.jpg"
    },
    {
        "title": "作品6",
        "description": "这是第五个作品的描述。",
        "image": "works/images/work6.jpg"
    },
    {
        "title": "作品7",
        "description": "这是第五个作品的描述。",
        "image": "works/images/work7.jpg"
    },
    {
        "title": "作品8",
        "description": "这是第五个作品的描述。",
        "image": "works/images/work8.jpg"
    },

];


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    function adjustSectionHeights() {
        const viewportHeight = window.innerHeight;
        sections.forEach(section => {
            section.style.height = `${viewportHeight - navbarHeight}px`;
        });
    }

    adjustSectionHeights();
    window.addEventListener('resize', adjustSectionHeights);

    const gallery = document.querySelector('.gallery');
    works.forEach(work => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.innerHTML = `
            <a href="work-template.html?work=${works.indexOf(work)}">
                <img src="${work.image}" alt="${work.title}">
            </a>
            <h3>${work.title}</h3>
            <p>${work.description}</p>
        `;
        gallery.appendChild(item);
    });

    // 添加 works 部分的左右箭头点击事件
    const worksArrowLeft = document.querySelector('#works .arrow-left');
    const worksArrowRight = document.querySelector('#works .arrow-right');

    worksArrowLeft.addEventListener('click', () => {
        gallery.scrollBy({ left: -300, behavior: 'smooth' });
    });

    worksArrowRight.addEventListener('click', () => {
        gallery.scrollBy({ left: 300, behavior: 'smooth' });
    });

    // 添加左右箭头点击事件
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const aboutContent = document.querySelector('.about-content');

    let currentIndex = 0;

    function showContent(index) {
        const paragraphs = aboutContent.querySelectorAll('p');
        paragraphs.forEach((p, i) => {
            p.style.display = i === index ? 'block' : 'none';
        });
    }

    arrowLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showContent(currentIndex);
        }
    });

    arrowRight.addEventListener('click', () => {
        const total = aboutContent.querySelectorAll('p').length;
        if (currentIndex < total - 1) {
            currentIndex++;
            showContent(currentIndex);
        }
    });

    showContent(currentIndex);
    
    // 鼠标滚轮滚动事件 (用于 works 和 about)
    gallery.addEventListener('wheel', (event) => {
        event.preventDefault();
        gallery.scrollBy({ left: event.deltaY < 0 ? -100 : 100 });
    });
});
