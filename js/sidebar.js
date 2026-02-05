const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.sidebar a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    // 稍微增加偏置值，让激活更灵敏
    if (window.pageYOffset >= sectionTop - window.innerHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// 平滑滚动点击
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ 
        behavior: 'smooth' 
    });
  });
});