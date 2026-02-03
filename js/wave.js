function Noise(e){this.p=new Uint8Array(256),this.reset(e)}Noise.prototype.reset=function(e){for(var t=0;t<256;t++)this.p[t]=t;for(t=255;t>0;t--){var r=Math.floor(Math.random()*(t+1)),o=this.p[t];this.p[t]=this.p[r],this.p[r]=o}},Noise.prototype.perlin2=function(e,t){var r=Math.floor(e)&255,o=Math.floor(t)&255;e-=Math.floor(e),t-=Math.floor(t);var n=function(e){return e*e*e*(e*(6*e-15)+10)},a=n(e),i=n(t),l=this.p[r]+o,s=this.p[r+1]+o,p=this.p[l],f=this.p[l+1],d=this.p[s],h=this.p[s+1];return function(e,t,r){return t+e*(r-t)}(i,function(e,t,r){return t+e*(r-t)}(a,function(e,t,r){var o=15&e;return(o<8?t:r)*(1&o?-1:1)+(o<4?r:12==o||14==o?t:0)*(2&o?-1:1)}(p,e,t),function(e,t,r){var o=15&e;return(o<8?t:r)*(1&o?-1:1)+(o<4?r:12==o||14==o?t:0)*(2&o?-1:1)}(d,e-1,t)),function(e,t,r){return t+e*(r-t)}(a,function(e,t,r){var o=15&e;return(o<8?t:r)*(1&o?-1:1)+(o<4?r:12==o||14==o?t:0)*(2&o?-1:1)}(f,e,t-1),function(e,t,r){var o=15&e;return(o<8?t:r)*(1&o?-1:1)+(o<4?r:12==o||14==o?t:0)*(2&o?-1:1)}(h,e-1,t-1)))};


// AWaves Web Component 逻辑 (保持不变，但现在有了 Noise 类它能跑了)
class AWaves extends HTMLElement {
  connectedCallback() {
    this.canvas = this.querySelector(".js-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.mouse = { x: -100, y: -100, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false };
    this.lines = [];
    this.noise = new Noise(Math.random());
    this.setSize();
    this.setLines();
    this.bindEvents();
    requestAnimationFrame(this.tick.bind(this));
  }
  bindEvents() {
    window.addEventListener("resize", this.onResize.bind(this));
  }
  onResize() { this.setSize(); this.setLines(); }
  onMouseMove(e) { this.updateMousePosition(e.clientX, e.clientY); }
  updateMousePosition(x, y) {
    const b = this.getBoundingClientRect();
    this.mouse.x = x - b.left;
    this.mouse.y = y - b.top;
    if (!this.mouse.set) {
      this.mouse.sx = this.mouse.lx = this.mouse.x;
      this.mouse.sy = this.mouse.ly = this.mouse.y;
      this.mouse.set = true;
    }
  }
  setSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  setLines() {
    const { width, height } = this.canvas;
    this.lines = [];
    const xGap = 15, yGap = 35;
    const rows = Math.ceil(height / yGap) + 2;
    const cols = Math.ceil(width / xGap) + 2;
    for (let i = 0; i < cols; i++) {
      const points = [];
      for (let j = 0; j < rows; j++) {
        points.push({ x: i * xGap, y: j * yGap, wave: { x: 0, y: 0 }, cursor: { x: 0, y: 0, vx: 0, vy: 0 } });
      }
      this.lines.push(points);
    }
  }

  tick(time) {

      if (time - this.lastTick < 33) { 
        requestAnimationFrame(this.tick.bind(this));
        return; 
    }
    this.lastTick = time;
    const { mouse, ctx, canvas } = this;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0,0,0,0.15)"; // 调淡一点，更好看

    this.lines.forEach(points => {
      points.forEach((p, i) => {
        const move = this.noise.perlin2((p.x + time * 0.01) * 0.002, (p.y + time * 0.005) * 0.002) * 10;
        p.wave.x = Math.cos(move) * 20;
        p.wave.y = Math.sin(move) * 10;
        

        const finalX = p.x + p.wave.x + p.cursor.x;
        const finalY = p.y + p.wave.y + p.cursor.y;
        if (i === 0) ctx.moveTo(finalX, finalY); else ctx.lineTo(finalX, finalY);
      });
    });
    ctx.stroke();
    requestAnimationFrame(this.tick.bind(this));
  }
}
customElements.define("a-waves", AWaves);
