window.addEventListener('scroll', () => {
    const section4 = document.querySelector('#section4');
    if (!section4) return;

    const bg = section4.querySelector('.parallax-bg');
    const content = section4.querySelector('.parallax-content');
    const rect = section4.getBoundingClientRect();
    
    // 判断 Section 4 是否进入视口
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        
        // 计算滚动进度：0 代表刚刚出现在屏幕底部，1 代表完全离开屏幕顶部
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

        // --- 背景位移逻辑 ---
        // 效果：缓慢向下移动。200 是移动总距离（像素）
        const bgY = scrollProgress * 200; 
        if (bg) {
            bg.style.transform = `translate3d(0, ${bgY}px, 0)`;
        }

        // --- 文字位移逻辑 ---
        // 效果：向上漂浮。我们让它从 150px 的位置移动到 -150px
        // 这样它在经过屏幕中心时，位移接近 0，视觉最自然
        const contentY = 150 - (scrollProgress * 300); 
        if (content) {
            content.style.transform = `translate3d(0, ${contentY}px, 0)`;
        }
    }
});