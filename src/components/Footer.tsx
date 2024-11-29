"use client";
import LanguageSelector from "@/components/LanguageSelector";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="grid grid-cols-2 md:px-2 border-y border-main-700 mt-2">
      <div className="">Template | {date}</div>
      <div className="">
        <ul className="flex gap-2 justify-end ">
          <li>
            <LanguageSelector />
          </li>
          <li>{<ThemeSwitcher />}</li>
        </ul>
      </div>
    </footer>
  );
}
