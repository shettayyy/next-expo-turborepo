"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useNavigateBack = (href = "/") => {
  const router = useRouter();

  const goBack = useCallback(() => {
    if (globalThis.history?.length > 1) {
      return router.back();
    }

    return router.replace(href);
  }, [href, router]);

  return goBack;
};
