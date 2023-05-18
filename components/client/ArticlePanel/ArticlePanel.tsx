"use client";
import Link from "next/link";
import ArticleTitles from "./ArticleTitles";
import { useState, useEffect } from "react";

interface PanelItemProps {
  href?: string;
  children: React.ReactNode;
}

interface InteractiveBlogNavProps {
  children: React.ReactNode;
}

function PanelItem({ href, children, ...props }: PanelItemProps) {
  return (
    <li {...props}>
      <Link href="/" className="w-4/5">
        <span className="text-md lg:text-lg xl:text-xl font-semibold whitespace-pre-line">
          {children}
        </span>
      </Link>
    </li>
  );
}

function ArticleList({ expanded }: { expanded: boolean }) {
  {
    /* slide the inner elements in on state change */
  }
  return (
    <ul
      className={`transition absolute top-full md:relative md:top-0 scrollbar-hide overflow-y-scroll md:scrollbar-default md:overflow-y-visible md:h-fit p-10 md:p-0  h-[100vh] w-full md:max-w-full bg-emerald-800 inline-flex flex-col gap-8 list-disc list-inside z-[110] ${
        expanded
          ? "translate-y-[0] opacity-100"
          : "translate-y-[-100%] opacity-0 pointer-events-none md:translate-y-[100%] md:opacity-100 md:pointer-events-auto"
      }`}
    >
      {ArticleTitles.map((val: any, key: any) => (
        <PanelItem
          href="/"
          className={`${key === ArticleTitles.length - 1 && "mb-32"}`}
        >
          {val}
        </PanelItem>
      ))}
    </ul>
  );
}

export default function ArticlePanel({ children }: InteractiveBlogNavProps) {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      expanded
        ? document.body.style.setProperty("overflow", "hidden")
        : document.body.style.setProperty("overflow", "auto");
    }, 200);
  }, [expanded]);
  return (
    <div className="relative">
      <nav
        className={`bg-emerald-950 md:scrollbar-hide md:overflow-y-scroll z-[90] flex items-center justify-center md:py-12 md:px-4 relative md:fixed md:left-0 md:w-40 lg:w-56 h-20 md:h-full`}
      >
        <ArticleList expanded={expanded} />
        <button
          className="md:hidden transition w-full border-green-200 border-2 font-bold capitalize p-2 m-2"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? "Close" : "See more"}
        </button>
      </nav>
    </div>
  );
}
