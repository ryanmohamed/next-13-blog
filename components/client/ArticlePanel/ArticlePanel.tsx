"use client";
import Link from "next/link";
import ArticleTitles from "./ArticleTitles";
import { useState, useEffect, Key } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";

interface PanelItemProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

interface InteractiveBlogNavProps {
  children: React.ReactNode;
}

function PanelItem({ href, className, children, ...props }: PanelItemProps) {
  return (
    <div className="bg-red-900 p-1">
      <p className="border-white border-2 p-2 rounded w-full h-full md:border-0 md:p-0" {...props}>
        <Link href="/" className="w-4/5">
          <span className="text-md lg:text-lg xl:text-xl font-semibold whitespace-wrap break-words md:whitespace-pre-line">
            {children}
          </span>
        </Link>
      </p>
    </div>
  );
}

function Carousel() {
  const amount = 6;
  const pages = Math.floor(ArticleTitles.length / amount) - 1;
  const [page, setPage] = useState<number>(0);
  const nextPage = () => { 
    if(page+1 < pages) setPage(page+1);
    else setPage(0)
  }
  const prevPage = () => { 
    if(page-1 >= 0) setPage(page-1);
    else setPage(pages-1)
  }
  return (
    <div
      className="bg-purple-800 p-10 md:p-0 h-96 w-full md:h-full md:flex md:flex-col"
    >
      <button onClick={prevPage} className="absolute top-0 left-0 md:hidden">⏪</button>
      <div className="w-full h-full overflow-hidden md:overflow-auto md:scrollbar-hide"><PagesContainer page={page} /></div>
      <button onClick={nextPage} className="absolute top-0 right-0 md:hidden">⏩</button>
    </div>
  );
}

/* DEPENDANT ON TAILWIND MD SIZE */
function PagesContainer({page}: any) {
  const md = useMediaQuery("(min-width: 768px)");
  return (
    <div
      className={`bg-blue-500 transition h-full w-full grid grid-rows-2 md:translate-x-[0] md:flex md:flex-col md:gap-2 md:h-auto`}
      style={{ transform: `${ md ? "translateX(0)" : `translateX(calc(-100% * ${page}))` }`, gridAutoFlow: "column", gridAutoColumns: "calc(25%)" }}
    >
      {ArticleTitles.map((val: any, key: any) => (
        <PanelItem href="/" key={key}>
          {val}
        </PanelItem>
      ))}
    </div>
  );
}



export default function ArticlePanel({ children }: InteractiveBlogNavProps) {
  const [expanded, setExpanded] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     expanded
  //       ? document.body.style.setProperty("overflow", "hidden")
  //       : document.body.style.setProperty("overflow", "auto");
  //   }, 200);
  // }, [expanded]);
  return (
    <div className="relative">
      <button
        className="md:hidden transition w-full border-green-200 border-2 font-bold capitalize p-2 relative bg-black z-[90]"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Close" : "See more"}
      </button>
      <nav
        className={`bg-emerald-950 md:scrollbar-hide md:overflow-y-scroll z-[80] md:fixed md:left-0 md:w-40 lg:w-56 md:h-full 
        w-full absolute bot-0 flex p-2 transition
        ${expanded ? "translate-y-0" : "translate-y-[-100%]"}
        md:translate-y-0
        `}
      >
        <Carousel />
      </nav>
    </div>
  );
}
