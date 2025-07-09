export type Variants = "primary" | "secondary" | "bg" | "bgSecondary";
type Color = Record<Variants, string>;

export const colorsScheme: Color = {
  primary: "bg-indigo-500",
  secondary: "bg-zinc-700",
  bg: "bg-zinc-950",
  bgSecondary: "bg-zinc-800",
};
