import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

const useInterval = (cb: () => void, delay: number | null) => {
  const savedCallback = useRef(cb);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (delay === null) {
      return;
    }

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;