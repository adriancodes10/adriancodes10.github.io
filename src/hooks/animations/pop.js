import React from 'react';
import { useSpring } from 'react-spring';
// UPDATE this path to your copy of the hook!
// Source here: https://joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion
import usePrefersReducedMotion from '@hooks/use-prefers-reduced-motion.hook';
function usePop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isPoped, setIsPopped] = React.useState(false);
  const style = useSpring({
    transform: isPoped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });
  React.useEffect(() => {
    if (!isPopped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsPopped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isPopped]);
  const trigger = React.useCallback(() => {
    setIsPopped(true);
  }, []);
  let appliedStyle = prefersReducedMotion ? {} : style;
  return [appliedStyle, trigger];
}
export default usePop;