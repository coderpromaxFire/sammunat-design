import { Renderer, Program, Mesh, Triangle } from "ogl";
import { useEffect, useRef } from "react";
import "./RippleGrid.css";

/* ================================
   SAFE HEX → RGB CONVERTER
   ================================ */
function hexToRgb(hex) {
  if (!hex || typeof hex !== "string") return [1, 1, 1];

  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h
      .split("")
      .map(c => c + c)
      .join("");
  }

  const num = parseInt(h, 16);
  if (Number.isNaN(num)) return [1, 1, 1];

  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

/* ================================
   SHADERS
   ================================ */
const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  vec3 color;
  if (uv.x < 0.5) {
    color = mix(uColorStops[0], uColorStops[1], uv.x * 2.0);
  } else {
    color = mix(uColorStops[1], uColorStops[2], (uv.x - 0.5) * 2.0);
  }

  float height = snoise(vec2(uv.x * 2.0 + uTime, uTime * 0.25));
  height = exp(height * uAmplitude);

  float intensity = smoothstep(0.0, uBlend, uv.y - height * 0.25);
  gl_FragColor = vec4(color * intensity, intensity);
}
`;

/* ================================
   COMPONENT
   ================================ */
export default function RippleGrid({
  colorStops = ["#136530ff", "#a51943ff", "#6a0d0dff"],
  amplitude = 0.1,
  blend = 0.6,
  speed = 0.4,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({ alpha: true, dpr: 2 });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    containerRef.current.appendChild(gl.canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uBlend: { value: blend },
        uResolution: { value: [1, 1] },
        uColorStops: {
          value: colorStops.map(hexToRgb),
        },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value = [w, h];
    };

    resize();
    window.addEventListener("resize", resize);

    let raf;
    const animate = t => {
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (gl.canvas && gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
      }
    };
  }, [colorStops, amplitude, blend, speed]);

  return <div ref={containerRef} className="ripple-grid-container" />;
}

