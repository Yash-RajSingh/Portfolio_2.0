import { useEffect, useRef, useState } from "react";
import { appReady } from "@/preloader";

export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(typeof IntersectionObserver === "undefined");

  useEffect(() => {
    if (inView) return;
    let observer: IntersectionObserver | undefined;
    let cancelled = false;

    appReady.then(() => {
      const el = ref.current;
      if (cancelled || !el) return;
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer?.disconnect();
          }
        },
        { threshold },
      );
      observer.observe(el);
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
    };
  }, [inView, threshold]);

  return [ref, inView] as const;
}
