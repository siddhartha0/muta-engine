import { useEffect, useRef, RefObject } from "react";

export const useOutsideClick = (
  callback: () => void,
  ignoreRef?: RefObject<HTMLDivElement>
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!ignoreRef?.current ||
          !ignoreRef.current.contains(event.target as Node))
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ignoreRef]);

  return ref;
};
