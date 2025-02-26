// export { captureException as reportException } from "@sentry/nextjs";
export const reportException = (error: Error) => {
  console.error("reportException", error);
};
