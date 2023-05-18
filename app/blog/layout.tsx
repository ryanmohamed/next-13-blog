import "../globals.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const ArticlePanel = dynamic(
  () =>
    import("@/components/client/ArticlePanel/ArticlePanel").then(
      (mod) => mod.default
    ),
  { ssr: false }
);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="md:pl-40 lg:pl-56">
      {ArticlePanel && <ArticlePanel />}
      {children}
    </main>
  );
}
