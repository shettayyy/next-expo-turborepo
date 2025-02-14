/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from "react-native";

import Colors from "@/constants/colors";

import { useColorScheme } from "./use-color-scheme";

interface IThemeProperties {
  lightColor?: string;
  darkColor?: string;
}

export type TextProps = IThemeProperties & DefaultText["props"];
export type ViewProps = IThemeProperties & DefaultView["props"];

export function useThemeColor(
  properties: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light,
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProperties = properties[theme];

  if (colorFromProperties !== undefined) {
    return colorFromProperties;
  }
  return Colors[theme][colorName];
}

export function Text(properties: TextProps) {
  const { style, lightColor, darkColor, ...otherProperties } = properties;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProperties} />;
}

export function View(properties: ViewProps) {
  const { style, lightColor, darkColor, ...otherProperties } = properties;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return (
    <DefaultView style={[{ backgroundColor }, style]} {...otherProperties} />
  );
}
