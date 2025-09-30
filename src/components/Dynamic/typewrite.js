import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Anchor } from "../anchor";

export const Typewriter = ({ isLink, link, className, text, fontSize, speed = 50, startDelay = 0 }) => {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef(null);
  const indexRef = useRef(-1);
  const hasPlayed = useRef(false);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasPlayed.current) return;

    hasPlayed.current = true;
    setDisplayed("");
    indexRef.current = -1;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1;

        if (indexRef.current >= text.length) {
          clearInterval(interval);
          return;
        }

        setDisplayed((prev) => prev + text.charAt(indexRef.current));
      }, speed);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [isInView, text, speed, startDelay]);

  if (isLink){
    return <span ref={ref}>
            <Anchor fontSize={fontSize} link={link} text={displayed}></Anchor>
        </span>
    }
  return <span className={className} ref={ref}>{displayed}</span>;
};