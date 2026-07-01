import React, { useEffect, useRef, useState } from "react";

const Reveal = ({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  eager = false,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    if (eager) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    if (typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "48px", threshold: 0.08 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [eager]);

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
