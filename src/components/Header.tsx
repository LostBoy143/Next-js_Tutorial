"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Docs", href: "/docs" },
    { name: "Products", href: "/products" },
  ];
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <div className="h-[70px] bg-slate-400 flex items-center justify-around w-full ">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) &&
              link.href !== "/");
          return (
            <Link
              key={link.name}
              href={link.href}
              className={
                isActive
                  ? "font-bold text-red-800"
                  : "text-blue-600"
              }
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
