"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const TRANSITION_VIDEO = "/page-loader.mp4";
const TRANSITION_FALLBACK_MS = 5200;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement>(null);
  const previousPathname = useRef(pathname);
  const isProgrammaticNavigation = useRef(false);
  const transitionTimer = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [logoFlight, setLogoFlight] = useState<{
    from: { x: number; y: number; width: number; height: number };
    to: { x: number; y: number; width: number; height: number };
  } | null>(null);

  const clearTransitionTimer = useCallback(() => {
    if (transitionTimer.current !== null) {
      window.clearTimeout(transitionTimer.current);
      transitionTimer.current = null;
    }
  }, []);

  const finishTransition = useCallback(() => {
    clearTransitionTimer();
    setIsPlaying(false);

    // Run the logo handoff after every loader, targeting the navbar that is
    // already present on the newly navigated page behind the overlay.
    const target = document.querySelector<HTMLElement>("[data-brand-logo]")?.getBoundingClientRect();
    if (target) {
      const size = Math.min(180, window.innerWidth * 0.38);
      setLogoFlight({
        from: {
          x: window.innerWidth / 2 - size / 2,
          y: window.innerHeight / 2 - size / 2,
          width: size,
          height: size,
        },
        to: { x: target.left, y: target.top, width: target.width, height: target.height },
      });
    }
  }, [clearTransitionTimer]);

  const restartVideo = useCallback(
    (withSound: boolean) => {
      clearTransitionTimer();
      setLogoFlight(null);
      setIsPlaying(true);
      setSoundEnabled(withSound);

      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.volume = 0.8;
        video.muted = !withSound;

        void video.play().catch(() => {
          // If a browser rejects audio playback, continue the transition muted.
          video.muted = true;
          setSoundEnabled(false);
          void video.play().catch(finishTransition);
        });
      }

      transitionTimer.current = window.setTimeout(finishTransition, TRANSITION_FALLBACK_MS);
    },
    [clearTransitionTimer, finishTransition],
  );

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextValue = !soundEnabled;
    video.muted = !nextValue;
    video.volume = 0.8;
    setSoundEnabled(nextValue);
    if (nextValue) {
      void video.play().catch(() => {
        video.muted = true;
        setSoundEnabled(false);
      });
    }
  };

  useEffect(() => {
    // The first visit autoplays muted; this guarantees completion if a browser
    // throttles the media event while the tab is in the background.
    transitionTimer.current = window.setTimeout(finishTransition, TRANSITION_FALLBACK_MS);
    return clearTransitionTimer;
  }, [clearTransitionTimer, finishTransition]);

  useEffect(() => {
    const interceptInternalLink = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (
        !anchor ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.dataset.noPageTransition === "true"
      ) {
        return;
      }

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);
      if (
        destination.origin !== current.origin ||
        destination.href === current.href ||
        (destination.pathname === current.pathname && destination.search === current.search)
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      // A link click is a user gesture, so audio is normally allowed. Begin the
      // loader and navigation together; the destination renders behind it.
      isProgrammaticNavigation.current = true;
      restartVideo(true);
      router.push(`${destination.pathname}${destination.search}${destination.hash}`);
    };

    document.addEventListener("click", interceptInternalLink, true);
    return () => document.removeEventListener("click", interceptInternalLink, true);
  }, [restartVideo, router]);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    if (isProgrammaticNavigation.current) {
      isProgrammaticNavigation.current = false;
      return;
    }

    // Browser back/forward has already changed the route, so play over the new page.
    restartVideo(false);
  }, [pathname, restartVideo]);

  return (
    <>
      {children}
      <div
        className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-300 ${
          isPlaying ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isPlaying}
        aria-label="Loading GamersTechRepublic"
        role="status"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={TRANSITION_VIDEO}
          autoPlay
          muted={!soundEnabled}
          playsInline
          preload="auto"
          onEnded={finishTransition}
          onError={finishTransition}
        />

        <button
          type="button"
          onClick={toggleSound}
          className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur transition hover:border-gtr-neon-red"
          aria-label={soundEnabled ? "Mute transition sound" : "Enable transition sound"}
        >
          {soundEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
          {soundEnabled ? "Sound on" : "Enable sound"}
        </button>
        <span className="sr-only">Loading GamersTechRepublic</span>
      </div>

      {logoFlight && (
        <motion.div
          data-testid="logo-flight"
          className="pointer-events-none fixed left-0 top-0 z-[10000] overflow-hidden rounded-md"
          initial={logoFlight.from}
          animate={logoFlight.to}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={() => setLogoFlight(null)}
        >
          <img src="/gamerstechrepublic-hero-logo.png" alt="" className="h-full w-full object-contain" />
        </motion.div>
      )}
    </>
  );
}
