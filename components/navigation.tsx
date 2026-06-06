'use client';

import { createContext, useContext, useTransition, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type NavigationContextType = {
  navigate: (href: string) => void;
  isPending: boolean;
};

const NavigationContext = createContext<NavigationContextType>({
  navigate: () => {},
  isPending: false,
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigate = (href: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <NavigationContext.Provider value={{ navigate, isPending }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
