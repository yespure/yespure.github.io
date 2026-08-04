(() => {
  const sections = [...document.querySelectorAll("[data-section]")];

  if (sections.length) {
    const rail = document.createElement("nav");
    rail.className = "section-rail";
    rail.setAttribute("aria-label", "Page sections");
    rail.innerHTML = sections.map((section, index) => {
      if (!section.id) section.id = `section-${index + 1}`;
      const label = section.dataset.section || `Section ${index + 1}`;
      return `<a href="#${section.id}" aria-label="Go to ${label}"><span>${label}</span></a>`;
    }).join("");
    document.body.appendChild(rail);

    const links = [...rail.querySelectorAll("a")];
    const setActive = section => {
      links.forEach((link, index) => link.classList.toggle("is-active", sections[index] === section));
    };
    setActive(sections[0]);

    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target);
    }, { rootMargin: "-25% 0px -45%", threshold: [0, .2, .5] });
    sections.forEach(section => observer.observe(section));
  }

})();
