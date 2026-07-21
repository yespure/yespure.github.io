const pages = {
  games: { number:"01", title:"Games", color:"#f04438", intro:"Playable experiences focused on systems, atmosphere and meaningful player choices.", items:[
    ["01","Project Red","Narrative Game · 2026","An experimental game about colour, identity and player interpretation.","red"],
    ["02","Unnamed World","Game Prototype · 2025","A systems-driven world built around exploration and environmental storytelling.","dark"],
    ["03","Playground","Interaction Study · 2025","Small gameplay experiments exploring movement, feedback and control.","green"] ]},
  tools: { number:"02", title:"Tools", color:"#e8cb33", intro:"Creative tools and technical experiments designed to support artists and game makers.", items:[
    ["01","Level Toolkit","Game Development Tool","A modular workflow for assembling and testing playable environments.","yellow"],
    ["02","Art Pipeline","Production Tool","Utilities for organising, previewing and exporting visual assets.","blue"],
    ["03","Prototype Lab","Creative Coding","Reusable systems for quickly testing visual and interaction ideas.","dark"] ]},
  arts: { number:"03", title:"2D Arts", color:"#b47be5", intro:"Illustrations, characters, environments and visual studies created across different styles." },
  projects: { number:"04", title:"Projects", color:"#078b3e", intro:"Selected interdisciplinary work combining art, technology, research and interaction.", items:[
    ["01","Interactive Installation","Art & Technology","A responsive experience connecting physical space with digital behaviour.","green"],
    ["02","Visual Research","Research Project","An investigation into how visual systems influence interpretation.","blue"],
    ["03","Ongoing Experiments","Personal Projects","Smaller works, prototypes and ideas currently under development.","yellow"] ]}
};

const artworks = [
  ["Images/testbackground.png","Character Study","Character Design","2026","large"],
  ["Images/testbackground.png","Quiet Landscape","Environment Art","2026","tall"],
  ["Images/testbackground.png","Red Figure","Illustration","2025","standard"],
  ["Images/testbackground.png","Shape and Motion","Visual Experiment","2025","wide"],
  ["Images/testbackground.png","Creature Study","Concept Art","2025","standard"],
  ["Images/testbackground.png","Unknown Place","Environment Art","2024","tall"]
];

const pageKey = document.body.dataset.page;
const page = pages[pageKey] || pages.projects;
const nav = [["Games","games.html","games"],["Tools","tools.html","tools"],["2D Arts","2dart.html","arts"],["Projects","projects.html","projects"],["About","about.html","about"]];

function header(){ return `<header class="site-header"><a class="brand" href="index.html"><span class="brand-mark">TL</span><span>'26</span></a><nav class="navigation" aria-label="Main navigation">${nav.map(([label,url,key])=>`<a href="${url}" ${key===pageKey?'aria-current="page"':''}>${label}</a>`).join("")}</nav><a class="contact-button" href="mailto:your-email@example.com">Contact <span>&#8599;</span></a></header>`; }

function items(){ return `<section class="collection-list page-frame">${page.items.map(([number,title,type,description,color],index)=>`<article class="collection-item"><div class="collection-art ${color}"><span>${number}</span><strong>${title}</strong></div><div class="collection-details"><small>${type}</small><h2>${title}</h2><p>${description}</p><a href="#">View project <span>&#8599;</span></a></div></article>`).join("")}</section>`; }

function gallery(){ return `<section class="gallery-section page-frame"><div class="gallery-toolbar"><p>Selected illustrations and visual studies</p><div><span>All</span><span>Characters</span><span>Environments</span><span>Experiments</span></div></div><div class="art-gallery">${artworks.map(([image,title,category,year,size],index)=>`<figure class="gallery-item gallery-item--${size}"><div class="gallery-image"><img src="${image}" alt="${title}" loading="${index<2?'eager':'lazy'}"><div class="gallery-overlay"><span>${String(index+1).padStart(2,"0")}</span><span>View artwork &#8599;</span></div></div><figcaption><div><h2>${title}</h2><p>${category}</p></div><span>${year}</span></figcaption></figure>`).join("")}</div></section>`; }

document.querySelector("#collection-page").innerHTML = `${header()}<main><section class="collection-hero page-frame" style="--collection-color:${page.color}"><p>${page.number} / PORTFOLIO</p><h1>${page.title}<em>.</em></h1><div>${page.intro}</div></section>${pageKey==="arts"?gallery():items()}</main><footer class="site-footer"><span>&copy; 2026 Tiancheng Li</span><span>Art & Game Design Portfolio</span><a href="index.html">Return home &#8593;</a></footer>`;
