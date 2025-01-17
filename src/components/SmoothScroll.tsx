import { useEffect, useRef, type PropsWithChildren } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }: PropsWithChildren) => {
    const scrollRef = useRef(null);
  useEffect(() => {
    if(!scrollRef.current) return;
    
    const scrollEl = scrollRef.current

    const scroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        lerp: 0.1,
        multiplier: 1,
        class: 'is-reveal',
      });

    return () => {
      scroll.destroy();
    };
  }, []);

  return <div data-scroll-container ref={scrollRef}>{children}</div>;
};

export default SmoothScroll;
