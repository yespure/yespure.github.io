// 确保 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    const section3 = document.querySelector('#section3');
    const backBgLayer = section3.querySelector('.section-bg-back');
    const frontBgLayer = section3.querySelector('.section-bg-front');
    const galleryItems = document.querySelectorAll('#section3 .item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // 获取后景图片路径
            const backBgUrl = this.getAttribute('data-back-bg');
            // 获取前景图片路径
            const frontBgUrl = this.getAttribute('data-front-bg');

            // 设置后景
            if (backBgUrl) {
                backBgLayer.style.backgroundImage = backBgUrl;
                backBgLayer.classList.add('is-active');
            }

            // 设置前景
            if (frontBgUrl) {
                frontBgLayer.style.backgroundImage = frontBgUrl;
                frontBgLayer.classList.add('is-active');
            }
        });

        item.addEventListener('mouseleave', function() {
            // 鼠标离开时移除激活类，背景图会渐隐
            backBgLayer.classList.remove('is-active');
            frontBgLayer.classList.remove('is-active');
            
            // 可以选择在这里清空 backgroundImage，以释放内存或防止不必要的显示
            // setTimeout(() => {
            //     backBgLayer.style.backgroundImage = 'none';
            //     frontBgLayer.style.backgroundImage = 'none';
            // }, 600); // 确保在过渡结束后清空
        });
    });
});