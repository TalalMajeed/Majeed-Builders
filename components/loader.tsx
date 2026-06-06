'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from './navigation-provider';

export default function TopLoader() {
  const { isPending } = useNavigation();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;

    if (isPending) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      setWidth(20);
      t1 = setTimeout(() => setWidth(50), 150);
      t2 = setTimeout(() => setWidth(75), 500);
      t3 = setTimeout(() => setWidth(88), 1200);
    } else {
      setWidth(100);
      t1 = setTimeout(() => {
        setVisible(false);
        setWidth(0);
      }, 350);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isPending]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9999] h-[3px] bg-amber-600"
      style={{
        width: `${width}%`,
        transition: width === 100 ? 'width 0.2s ease-out' : 'width 0.4s ease-in-out',
      }}
    />
  );
}
