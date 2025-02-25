import clgl, { ClassValue } from "class-glue";
import { twMerge } from "tailwind-merge";

export function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clgl(inputs));
}
