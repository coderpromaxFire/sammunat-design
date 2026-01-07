import {
  Camera,
  Mesh,
  Plane,
  Program,
  Renderer,
  Texture,
  Transform
} from "ogl";
import { useEffect, useRef } from "react";
import "./CircularGallery.css";

/* ================= HELPERS ================= */

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

function autoBind(instance) {
  const proto = Object.getPrototypeOf(instance);
  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (key !== "constructor" && typeof instance[key] === "function") {
      instance[key] = instance[key].bind(instance);
    }
  });
}

function createTextTexture(
  gl,
  text,
  font = "bold 30px monospace",
  color = "black"
) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  ctx.font = font;
  const metrics = ctx.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(parseInt(font, 10) * 1.2);

  canvas.width = textWidth + 20;
  canvas.height = textHeight + 20;

  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;

  return { texture, width: canvas.width, height: canvas.height };
}

/* ================= TITLE ================= */

class Title {
  constructor({ gl, plane, text, textColor, font }) {
    autoBind(this);
    this.gl = gl;
    this.plane = plane;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
    this.createMesh();
  }

  createMesh() {
    const { texture, width, height } = createTextTexture(
      this.gl,
      this.text,
      this.font,
      this.textColor
    );

    const geometry = new Plane(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tMap, vUv);
          if (c.a < 0.1) discard;
          gl_FragColor = c;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true
    });

    this.mesh = new Mesh(this.gl, { geometry, program });

    const aspect = width / height;
    const textHeight = this.plane.scale.y * 0.15;
    const textWidth = textHeight * aspect;

    this.mesh.scale.set(textWidth, textHeight, 1);
    this.mesh.position.y =
      -this.plane.scale.y * 0.5 - textHeight * 0.6;

    this.mesh.setParent(this.plane);
  }
}

/* ================= MEDIA ================= */

class Media {
  constructor({
    geometry,
    gl,
    image,
    index,
    length,
    scene,
    screen,
    text,
    viewport,
    bend,
    textColor,
    borderRadius,
    font,
    isMobile
  }) {
    this.geometry = geometry;
    this.gl = gl;
    this.image = image;
    this.index = index;
    this.length = length;
    this.scene = scene;
    this.screen = screen;
    this.text = text;
    this.viewport = viewport;
    this.bend = bend;
    this.textColor = textColor;
    this.borderRadius = borderRadius;
    this.font = font;
    this.isMobile = isMobile;
    this.extra = 0;

    this.createShader();
    this.createMesh();
    this.createTitle();
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: true });

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z += sin(p.x * 4.0 + uTime) * (0.2 + uSpeed);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;

        float rounded(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d,0.0)) + min(max(d.x,d.y),0.0) - r;
        }

        void main() {
          vec4 c = texture2D(tMap, vUv);
          float d = rounded(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float alpha = 1.0 - smoothstep(-0.003, 0.003, d);
          gl_FragColor = vec4(c.rgb, alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uSpeed: { value: 0 },
        uTime: { value: Math.random() * 100 },
        uBorderRadius: { value: this.borderRadius }
      },
      transparent: true
    });

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = this.image;
    img.onload = () => (texture.image = img);
  }

  createMesh() {
    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    });
    this.plane.setParent(this.scene);
  }

  createTitle() {
    new Title({
      gl: this.gl,
      plane: this.plane,
      text: this.text,
      textColor: this.textColor,
      font: this.font
    });
  }

  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) this.viewport = viewport;

    const scale = (this.screen.height / 1500) * (this.isMobile ? 0.65 : 1);

    this.plane.scale.y =
      (this.viewport.height * (900 * scale)) / this.screen.height;
    this.plane.scale.x =
      (this.viewport.width * (700 * scale)) / this.screen.width;

    this.padding = 2;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }

  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;
    this.program.uniforms.uTime.value += 0.03;
    this.program.uniforms.uSpeed.value = scroll.current - scroll.last;

    const offset = this.viewport.width / 2;
    const planeOffset = this.plane.scale.x / 2;

    if (direction === "right" && this.plane.position.x + planeOffset < -offset) {
      this.extra -= this.widthTotal;
    }
    if (direction === "left" && this.plane.position.x - planeOffset > offset) {
      this.extra += this.widthTotal;
    }
  }
}

/* ================= APP ================= */

class App {
  constructor(container, opts) {
    this.container = container;
    this.opts = opts;
    this.isMobile = window.innerWidth < 768;

    this.scroll = { current: 0, target: 0, last: 0, ease: opts.scrollEase };

    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createGeometry();
    this.createMedias();

    this.update();
    this.addEvents();
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(
        window.devicePixelRatio || 1,
        this.isMobile ? 1.5 : 2
      )
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.position.z = 20;
  }

  createScene() {
    this.scene = new Transform();
  }

  createGeometry() {
    this.geometry = new Plane(this.gl, {
      widthSegments: this.isMobile ? 40 : 100,
      heightSegments: this.isMobile ? 20 : 50
    });
  }

  createMedias() {
    const items = this.opts.items;
    this.medias = items.concat(items).map(
      (data, i) =>
        new Media({
          geometry: this.geometry,
          gl: this.gl,
          image: data.image,
          index: i,
          length: items.length * 2,
          scene: this.scene,
          screen: this.screen,
          text: data.text,
          viewport: this.viewport,
          bend: this.opts.bend,
          textColor: this.opts.textColor,
          borderRadius: this.opts.borderRadius,
          font: this.opts.font,
          isMobile: this.isMobile
        })
    );
  }

  onResize() {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({
      aspect: this.screen.width / this.screen.height
    });

    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    this.viewport = { width: height * this.camera.aspect, height };

    this.medias?.forEach((m) =>
      m.onResize({ screen: this.screen, viewport: this.viewport })
    );
  }

  update() {
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease
    );

    const dir =
      this.scroll.current > this.scroll.last ? "right" : "left";

    this.medias.forEach((m) => m.update(this.scroll, dir));

    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = requestAnimationFrame(this.update.bind(this));
  }

  addEvents() {
    window.addEventListener("resize", () => this.onResize());
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    this.container.innerHTML = "";
  }
}

/* ================= REACT WRAPPER ================= */

export default function CircularGallery({
  items,
  bend = 3,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "bold 30px Figtree",
  scrollSpeed = 2,
  scrollEase = 0.05
}) {
  const ref = useRef(null);

  useEffect(() => {
    const app = new App(ref.current, {
      items,
      bend,
      textColor,
      borderRadius,
      font,
      scrollSpeed,
      scrollEase
    });
    return () => app.destroy();
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);

  return <div ref={ref} className="circular-gallery" />;
}
