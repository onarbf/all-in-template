import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <Wrapper as="main" className="mt-2 ">
      <Text as="h1">{t("title")}</Text>
    </Wrapper>
  );
}
