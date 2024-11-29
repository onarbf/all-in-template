import Text from "@/components/Text";
import Wrapper from "@/components/Wrapper";

export default function About() {
  console.log("about rendered");
  return (
    <Wrapper as="main" className="mt-2">
      <div>
        <Text as="h2">About</Text>
      </div>
    </Wrapper>
  );
}
