import { useEffect } from "react";

export default function useStopScroll() {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
}

// Here is a custom hook to prevent scroll where needed.
