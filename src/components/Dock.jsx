'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence
} from 'motion/react';
import {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState
} from 'react';

import './Dock.css';

/* ---------------- DOCK ITEM ---------------- */
function DockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  label
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const distanceFromMouse = useTransform(mouseX, (x) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return distance;

    const center = rect.left + rect.width / 2;
    return x - center;
  });

  const clampedSize = useTransform(
    distanceFromMouse,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize],
    { clamp: true }
  );

  const size = useSpring(clampedSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      role="button"
      tabIndex={0}
    >
      {Children.map(children, child =>
        cloneElement(child, { isHovered })
      )}

      <DockLabel isHovered={isHovered}>{label}</DockLabel>
    </motion.div>
  );
}

/* ---------------- TOOLTIP ---------------- */
function DockLabel({ children, isHovered }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsub = isHovered.on('change', v => setVisible(v === 1));
    return () => unsub();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.18 }}
          className="dock-label"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- ICON ---------------- */
function DockIcon({ children }) {
  return <div className="dock-icon">{children}</div>;
}

/* ---------------- MAIN DOCK ---------------- */
export default function Dock({
  items,
  className = '',
  spring = { mass: 0.35, stiffness: 260, damping: 22 },
  magnification = 64,
  distance = 140,
  panelHeight = 64,
  baseItemSize = 44
}) {
  const mouseX = useMotionValue(Infinity);
  const panelRef = useRef(null);

  return (
    <motion.div className="dock-outer">
      <motion.div
        ref={panelRef}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            label={item.label}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}

