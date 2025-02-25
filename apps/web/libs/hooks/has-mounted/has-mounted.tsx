import { useEffect, useState } from "react";

/**
 * Custom hook to determine if a component has mounted on the client side.
 * Useful for preventing hydration mismatches and handling client-side only code.
 *
 * @returns {boolean} Whether the component has mounted
 *
 * @example
 * const Component = () => {
 *   const hasMounted = useHasMounted();
 *
 *   if (!hasMounted) {
 *     return null;
 *   }
 *
 *   return <div>Client-side only content</div>;
 * };
 */
export const useHasMounted = (): boolean => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};
