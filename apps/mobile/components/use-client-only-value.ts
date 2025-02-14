// This function is web-only as native doesn't currently support server (or build-time) rendering.
export function useClientOnlyValue<TS, TC>(_: TS, client: TC): TS | TC {
  return client;
}
