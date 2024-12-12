import React, { ReactElement, useEffect, useRef } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 * @param ref The ref to the element to watch for clicks outside of
 * @returns A cleanup function to remove the event listener
 */
function useOutsideAlerter(
  ref: React.RefObject<HTMLElement>,
  outsideCallback: () => void,
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     * @param event The event that triggered the click
     */
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        outsideCallback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

interface Props {
  children: ReactElement;
  outsideCallback: () => void;
}

/**
 * Component that alerts if you click outside of it
 * @param {React.PropsWithChildren} props The props to pass to the component
 * @returns {React.ReactElement} The component
 */
export default function OutsideAlerter({
  children,
  outsideCallback,
}: Props): React.ReactElement {
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, outsideCallback);

  return <div ref={wrapperRef}>{children}</div>;
}
