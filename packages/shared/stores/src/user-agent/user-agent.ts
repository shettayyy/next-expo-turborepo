import { create } from "zustand";

interface UserAgentState {
  platform: {
    userAgent: string | null;
    isIOS: boolean | null;
    isAndroid: boolean | null;
    isInstalled: boolean | null;
    userAgentString: string | null;
  };
  isStandalone: boolean | null;
  isLoading: boolean;
}

interface IUserAgentActions {
  actions: {
    setUserAgent: (userAgent: UserAgentState["platform"]) => void;
    setIsStandalone: (isStandalone: boolean) => void;
    setIsLoading: (isLoading: boolean) => void;
  };
}

const initialState: UserAgentState = {
  platform: {
    userAgent: null,
    isIOS: null,
    isAndroid: null,
    isInstalled: null,
    userAgentString: null,
  },
  isStandalone: null,
  isLoading: true,
};

const useUserAgentStore = create<UserAgentState & IUserAgentActions>(set => ({
  ...initialState,
  actions: {
    setUserAgent: (userAgent: UserAgentState["platform"]) => {
      set(state => ({
        platform: {
          ...state.platform,
          ...userAgent,
        },
      }));
    },
    setIsStandalone: (isStandalone: boolean) => {
      set(() => ({
        isStandalone,
      }));
    },
    setIsLoading: (isLoading: boolean) => {
      set(() => ({
        isLoading,
      }));
    },
  },
}));

export const useUserAgentActions = () =>
  useUserAgentStore(state => state.actions);

export const useUserAgentPlatform = () =>
  useUserAgentStore(state => state.platform);

export const useIsStandalone = () =>
  useUserAgentStore(state => state.isStandalone);

export const useUserAgentIsLoading = () =>
  useUserAgentStore(state => state.isLoading);
