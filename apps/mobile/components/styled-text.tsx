import { Text, TextProps } from "./themed";

export function MonoText(properties: TextProps) {
  return (
    <Text
      {...properties}
      style={[properties.style, { fontFamily: "spaceMono" }]}
    />
  );
}
