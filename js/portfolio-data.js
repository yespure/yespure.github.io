const pages = {
  blogs: { number:"05", title:"Blogs", color:"#191919", intro:"Notes on art, games and the process of making things.", items:[] },
  games: { number:"01", title:"Games", color:"#f04438", intro:"Playable experiences focused on systems, atmosphere and meaningful player choices.", items:[
    ["01","Project Red","Narrative Game · 2026","An experimental game about colour, identity and player interpretation.","red"],
    ["02","Unnamed World","Game Prototype · 2025","A systems-driven world built around exploration and environmental storytelling.","dark"],
    ["03","Playground","Interaction Study · 2025","Small gameplay experiments exploring movement, feedback and control.","green"] ]},
  tools: { number:"02", title:"Tools", color:"#e8cb33", intro:"Creative tools and technical experiments designed to support artists and game makers.", items:[
    ["01","Level Toolkit","Game Development Tool","A modular workflow for assembling and testing playable environments.","yellow"],
    ["02","Art Pipeline","Production Tool","Utilities for organising, previewing and exporting visual assets.","blue"],
    ["03","Prototype Lab","Creative Coding","Reusable systems for quickly testing visual and interaction ideas.","dark"] ]},
  arts: { number:"03", title:"2D Art", color:"#b47be5", intro:"Illustrations, characters, environments and visual studies created across different styles." },
  projects: { number:"04", title:"Projects", color:"#078b3e", intro:"Selected interdisciplinary work combining art, technology, research and interaction.", items:[
    ["01","Interactive Installation","Art & Technology","A responsive experience connecting physical space with digital behaviour.","green"],
    ["02","Visual Research","Research Project","An investigation into how visual systems influence interpretation.","blue"],
    ["03","Ongoing Experiments","Personal Projects","Smaller works, prototypes and ideas currently under development.","yellow"] ]}
};

const artworks = [
  ["Images/room-concept.png","Room Concept","Environment Study","2026","large"],
  ["Images/testbackground.png","Quiet Landscape","Environment Art","2026","tall"],
  ["Images/testbackground.png","Red Figure","Illustration","2025","standard"],
  ["Images/testbackground.png","Shape and Motion","Visual Experiment","2025","wide"],
  ["Images/testbackground.png","Creature Study","Concept Art","2025","standard"],
  ["Images/testbackground.png","Unknown Place","Environment Art","2024","tall"]
];

const projectSlug = title => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const detailUrl = (category, title) => `detail.html?category=${encodeURIComponent(category)}&project=${encodeURIComponent(projectSlug(title))}`;
