import { useEffect, useRef, useState } from "react";

export default function Reveal({ as = "div", className = "", children, ...props }) {
  const Element = as;
  const ref = useRef(null);
  const [visible, setVisible] = useState(() => !("IntersectionObserver" in window));

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Element
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </Element>
  );
}
