// `useEffect` is not invoked during server rendering, meaning

import { useEffect, useState } from "react";

// we can use this to determine if we're on the server or not.
export function useClientOnlyValue<TS, TC>(server: TS, client: TC): TS | TC {
  const [value, setValue] = useState<TS | TC>(server);
  useEffect(() => {
    setValue(client);
  }, [client]);

  return value;
}
