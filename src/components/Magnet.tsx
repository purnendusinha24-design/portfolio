import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: CSSProperties;
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    const withinRangeX = Math.abs(distX) < rect.width / 2 + padding;
    const withinRangeY = Math.abs(distY) < rect.height / 2 + padding;

    if (withinRangeX && withinRangeY) {
      setIsActive(true);
      setTranslate({ x: distX / strength, y: distY / strength });
    } else {
      setIsActive(false);
      setTranslate({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    const listener = (e: MouseEvent) => handleMouseMove(e);
    window.addEventListener('mousemove', listener);
    return () => window.removeEventListener('mousemove', listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
