(() => {
  const params = new URLSearchParams(location.search);
  const category = params.get('category');
  const slug = params.get('project');
  const navigation = [['Games','games.html','games'],['Tools','tools.html','tools'],['2D Art','2dart.html','arts'],['Projects','projects.html','projects'],['Blogs','blogs.html','blogs'],['About','about.html','about']];
  const section = navigation.find(entry => entry[2] === category);
  const entries = category === 'arts' ? artworks.map(([image,title,type,year]) => ({image,title,type:`${type} · ${year}`})) : (Object.prototype.hasOwnProperty.call(pages,category) ? (pages[category].items || []).map(([number,title,type,description,color]) => ({number,title,type,description,color})) : []);
  const project = entries.find(entry => projectSlug(entry.title) === slug);
  const header = `<header class="site-header"><a class="brand" href="index.html"><span class="brand-mark">TL</span><span>Tiancheng Li</span></a><nav class="navigation" aria-label="Main navigation">${navigation.map(([label,url,key])=>`<a href="${url}" ${key===category?'aria-current="page"':''}>${label}</a>`).join('')}</nav></header>`;
  const footer = `<footer class="site-footer"><span>© 2026 Tiancheng Li</span><span>Art & Game Design Portfolio</span><a href="index.html">Return home ↑</a></footer>`;
  let content;
  if (!project || !section) {
    document.title = 'Project not found — Tiancheng Li';
    content = '<main><section class="project-detail"><h1>Project not found</h1><p>This project link is unavailable.</p><a href="projects.html">Back to Projects →</a></section></main>';
  } else {
    document.title = `${project.title} — Tiancheng Li`;
    const back = `<a href="${section[1]}">← Back to ${section[0]}</a>`;
    const media = project.image ? `<img src="${project.image}" alt="${project.title}">` : `<div class="collection-art ${project.color}"><span>${project.number}</span><strong>${project.title}</strong></div>`;
    content = `<main><article class="project-detail"><div class="detail-back">${back}</div><header class="detail-heading"><small>${project.type}</small><h1>${project.title}</h1></header><div class="detail-media">${media}</div>${project.description ? `<section class="detail-copy"><h2>About this project</h2><p>${project.description}</p></section>` : ''}<div class="detail-bottom">${back}</div></article></main>`;
  }
  document.querySelector('#detail-page').innerHTML = header + content + footer;
})();
