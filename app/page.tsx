import Link from "next/link";
import CodeSnippet from "../components/client-components/CodeSnippet/CodeSnippet";

export default function Home() {
  return (
    <main className="">
      <Link href="/blog">Blog</Link>
    </main>
  );
}
