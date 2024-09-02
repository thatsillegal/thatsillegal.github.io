//works

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('works-container');

    // 动态加载作品
    fetch('/api/works')
        .then(response => response.json())
        .then(works => {
            works.forEach(work => {
                const workItem = document.createElement('div');
                workItem.classList.add('work-item');

                const img = document.createElement('img');
                img.src = work.image;
                workItem.appendChild(img);

                container.appendChild(workItem);
            });
        })
        .catch(error => console.error('Error fetching works:', error));

    // 监听滚轮事件，将垂直滚动转换为水平滚动
    container.addEventListener('wheel', function(event) {
        if (event.deltaY !== 0) {
            event.preventDefault(); // 阻止垂直滚动
            container.scrollLeft += event.deltaY; // 将滚动量应用到水平滚动上
        }
    });
});

//photos
document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    let works = [];

    // 获取作品数据
    fetch('/api/photography')
        .then(response => response.json())
        .then(data => {
            works = data;
            if (works.length > 0) {
                displayWork(currentIndex); // 显示第一张作品
            } else {
                console.error('No photography works found.');
            }
        })
        .catch(error => console.error('Error fetching photography works:', error));

    // 显示当前作品
    function displayWork(index) {
        const work = works[index];
        if (work) {
            document.getElementById('photo').src = work.image;
            document.getElementById('photo-title').textContent = work.title;
            document.getElementById('photo-description').textContent = work.description;
        }
    }

    // 监听滚轮事件，切换作品
    document.addEventListener('wheel', function(event) {
        if (event.target.closest('#photography-section')) {
            if (event.deltaY > 0) {
                currentIndex = (currentIndex + 1) % works.length; // 下一个作品
            } else {
                currentIndex = (currentIndex - 1 + works.length) % works.length; // 上一个作品
            }
            displayWork(currentIndex);
        }
    });

    // 监听触摸事件，切换作品
    const photoContainer = document.querySelector('.photo-container');
    let startX = 0;

    photoContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX;
    });

    photoContainer.addEventListener('touchend', function(e) {
        const endX = e.changedTouches[0].pageX;
        if (startX - endX > 50) {
            // 向左滑动，下一个作品
            currentIndex = (currentIndex + 1) % works.length;
        } else if (endX - startX > 50) {
            // 向右滑动，上一个作品
            currentIndex = (currentIndex - 1 + works.length) % works.length;
        }
        displayWork(currentIndex);
    });
});
