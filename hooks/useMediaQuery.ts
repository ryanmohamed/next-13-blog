import {useEffect, useState} from 'react';

// see web dev simplified article
// https://blog.webdevsimplified.com/2022-03/debounce-vs-throttle/

// ideally we only want to update our state once
// we have a stable screen, meaning we shouldn't call this 
// if the screen is resized rapidly, and instead wait 
// a moment after the last change

export default function useMediaQuery (query: string) {
    const mediaMatch: MediaQueryList = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);
    useEffect(() => {
      const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
      mediaMatch.addEventListener("change", handler);
      return () => mediaMatch.removeEventListener("change", handler);
    }, [])
    return matches;
};