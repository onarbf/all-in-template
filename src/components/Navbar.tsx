import A from "@/components/A";
import Text from "@/components/Text";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-2 md:px-2 px-0 border-b border-main-700 ">
      <div className="">
        <A href="/" styledAs="clean">
          <Text>LOGO</Text>
        </A>
      </div>
      <div>
        <ul className="flex justify-end gap-2">
          <li>
            <A href="/">
              <Text>Home</Text>
            </A>
          </li>
          <li>
            <A href="/about">
              <Text>About</Text>
            </A>
          </li>
        </ul>
      </div>
    </nav>
  );
}
