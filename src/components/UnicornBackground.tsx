import React, { useEffect, useState, useRef } from 'react';

declare global {
  interface Window {
    UnicornStudio: any;
  }
}

interface UnicornBackgroundProps {
  projectId?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  hideOnMobile?: boolean;
  delayInit?: number;
}

export default React.memo(function UnicornBackground({ 
  projectId = "b6GFRsHM7mhh80x4vsB2",
  width = "100%",
  height = "100%",
  className = "fixed inset-0 z-0 pointer-events-none overflow-hidden",
  hideOnMobile = true,
  delayInit = 600 // Default 600ms delay to allow page transition animations to finish smoothly
}: UnicornBackgroundProps) {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hideOnMobile) return;
    const checkIsDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, [hideOnMobile]);

  useEffect(() => {
    if (hideOnMobile && !isDesktop) return;

    setIsLoaded(false);
    let timeoutId: NodeJS.Timeout;

    const initUnicorn = () => {
      if (window.UnicornStudio && containerRef.current) {
        // Only init if it hasn't been initialized yet (no canvas child)
        if (!containerRef.current.querySelector('canvas')) {
          window.UnicornStudio.init();
        }
        // Fade in slightly after init to prevent sudden pop-in
        setTimeout(() => setIsLoaded(true), 100);
      }
    };

    const scriptId = 'unicorn-studio-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = () => {
        timeoutId = setTimeout(initUnicorn, delayInit);
      };
      document.body.appendChild(script);
    } else {
      // If script is already loaded, init after the delay
      if (window.UnicornStudio) {
        timeoutId = setTimeout(initUnicorn, delayInit);
      } else {
        script.addEventListener('load', () => {
          timeoutId = setTimeout(initUnicorn, delayInit);
        });
      }
    }

    return () => {
      clearTimeout(timeoutId);
      if (window.UnicornStudio && typeof window.UnicornStudio.destroy === 'function') {
        try {
          window.UnicornStudio.destroy();
        } catch (e) {
          console.error("Error destroying UnicornStudio:", e);
        }
      }
      // Manually clean up the container to ensure WebGL contexts/canvases are removed
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [projectId, isDesktop, hideOnMobile, delayInit]);

  if (hideOnMobile && !isDesktop) {
    return <div className={`${className} bg-[#050505]`} />;
  }

  return (
    <div className={className}>
      <div className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div ref={containerRef} style={{ width, height }} data-us-project={projectId}></div>
      </div>
    </div>
  );
});
