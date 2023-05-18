import Link from "next/link";

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="text-xl lg:text-2xl font-extrabold m-2">
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default function Nav() {
  return (
    <nav className="fixed top-0 z-[100] w-full h-10 bg-emerald-800 flex items-center justify-between p-4">
      <h1 className="whitespace-nowrap text-2xl lg:text-3xl font-extrabold">
        Welcome! 🤠
      </h1>
      <ul className="min-w-20 h-full flex justify-between items-center">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/blog">Blog</NavItem>
      </ul>
    </nav>
  );
}
