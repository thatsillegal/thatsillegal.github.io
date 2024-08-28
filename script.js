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
    const loadMoreButton = document.getElementById('load-more');
    const worksSection = document.getElementById('works');
    const header = worksSection.querySelector('h2');
    let itemsDisplayed = 0;
    const rowsToShow = 1; // 每次加载的行数

    function getItemsPerRow() {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.style.visibility = 'hidden'; // 隐藏虚拟元素
        gallery.appendChild(item);
        const itemWidth = item.getBoundingClientRect().width;
        gallery.removeChild(item);

        const galleryWidth = gallery.getBoundingClientRect().width;
        return Math.floor(galleryWidth / itemWidth);
    }

    function loadWorks() {
        const itemsPerRow = getItemsPerRow();
        const itemsToLoad = rowsToShow * itemsPerRow;
        const fragment = document.createDocumentFragment();

        for (let i = itemsDisplayed; i < itemsDisplayed + itemsToLoad && i < works.length; i++) {
            const item = document.createElement('div');
            item.classList.add('gallery-item');
            item.innerHTML = `
                <a href="./works/work-template.html?work=${i}">
                    <img src="${works[i].image}" alt="${works[i].title}">
                </a>
                <h3>${works[i].title}</h3>
                <p>${works[i].description}</p>
            `;
            fragment.appendChild(item);
        }
        gallery.appendChild(fragment);
        itemsDisplayed += itemsToLoad;

        // 调整 gallery 和 works 的高度
        adjustHeight();

        // 检查是否还有未展示的作品，决定是否显示“查看更多”按钮
        checkIfMoreItemsToShow();
    }

    function adjustHeight() {
        const galleryHeight = gallery.height;
        const headerHeight = header.height;
        const buttonHeight = loadMoreButton.height;

        // 获取 worksSection 的内边距和外边距
        const worksStyles = window.getComputedStyle(worksSection);
        const paddingTop = parseFloat(worksStyles.paddingTop);
        const paddingBottom = parseFloat(worksStyles.paddingBottom);
        const marginTop = parseFloat(worksStyles.marginTop);
        const marginBottom = parseFloat(worksStyles.marginBottom);

        const totalPaddingMargin = paddingTop + paddingBottom + marginTop + marginBottom;

        // 计算总高度
        const totalHeight = galleryHeight + headerHeight + buttonHeight + totalPaddingMargin;

        // 设置 worksSection 的最大高度
        worksSection.style.maxHeight = `${totalHeight}px`;
        // gallery.style.maxHeight = `${galleryHeight}px`; // 同步调整 gallery 的高度
    }

    function checkIfMoreItemsToShow() {
        // 如果还有未展示的作品，显示“查看更多”按钮
        if (itemsDisplayed < works.length) {
            loadMoreButton.style.display = 'block';
        } else {
            loadMoreButton.style.display = 'none';
        }
    }

    // 初始加载2行
    loadWorks();

    // 点击按钮加载更多作品
    loadMoreButton.addEventListener('click', function() {
        loadWorks(); // 每次加载指定行数的作品
    });

    // 在窗口大小调整时重新检查
    window.addEventListener('resize', checkIfMoreItemsToShow);
});
