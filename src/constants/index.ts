import styles from "@/constants/styles";

const _ = {
  styles,
  defaultLocale: "en" as const,
  locales: ["en", "de", "es"] as const,
} as const;

export default _;
