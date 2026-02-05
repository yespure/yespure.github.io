// 确保 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    const section3 = document.querySelector('#section3');
    const items = document.querySelectorAll('#section3 .item');

    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // 明确获取 data-hover-bg 的值
            const customBg = this.getAttribute('data-hover-bg');
            if (customBg) {
                section3.style.backgroundImage = customBg;
                section3.style.backgroundSize = 'cover';
                section3.style.backgroundPosition = 'center';
            }
        });

        item.addEventListener('mouseleave', function() {
            // 鼠标离开时清空背景
            section3.style.backgroundImage = 'none';
        });
    });
});