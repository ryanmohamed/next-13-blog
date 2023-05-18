"use client";
import Link from "next/link";
import ArticleTitles from "./ArticleTitles";
import { useState, useEffect, useRef, Key } from "react";

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
    <div className="p-1">
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
  const pages = Math.ceil(ArticleTitles.length / amount);

  return (
    <div
      className="bg-purple-800 p-10 md:p-0 h-96 w-full md:h-full md:flex md:flex-col"
    >
     
      <div className="w-full h-full overflow-hidden  md:overflow-auto md:scrollbar-hide">

      <Container />

      </div>
     
    </div>
  );
}

/* DEPENDANT ON TAILWIND MD SIZE */
function Container () {
  const md = useMediaQuery("(min-width: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);

  const pages = [];
  const numPerPage = 6;
  const numPages = Math.ceil(ArticleTitles.length / numPerPage);
  let startIndex = 0
  for(let i = 0; i < numPages; i++){
    pages.push(<Page pages={ArticleTitles.slice(startIndex, startIndex+6)}/>);
    startIndex += numPerPage
  }

  const [currentPage, setCurrentPage] = useState<number>(0);

  const nextPage = () => { 
    const firstItem = containerRef?.current?.children[0] as HTMLLIElement;
    const firstItemWidth = Math.floor(firstItem?.offsetWidth) || 0;

    // apply transition to animate scroll
    containerRef?.current?.style?.setProperty("transition",`100ms`);

    // scroll
    containerRef?.current?.style.setProperty("transform",`translateX(-${firstItemWidth}px)`);

    // wrap first element and remove transition for seamlessness
    containerRef?.current?.addEventListener("transitionend", function handleTransitionEnd(){
      containerRef?.current?.appendChild(firstItem);
      containerRef?.current?.style?.setProperty("transition", "none");
      containerRef?.current?.style.setProperty("transform", `translateX(0)`);
      containerRef?.current?.removeEventListener("transitionend", handleTransitionEnd);
    });
  }

  const prevPage = () => {
    const container = containerRef?.current;
    const lastItem = container?.children[container.children.length - 1] as HTMLLIElement;
    const lastItemWidth = Math.floor(lastItem?.offsetWidth) || 0;
  
    // remove transition to seamlessly prepend the last element
    container?.style?.setProperty("transition", "none");
    container?.prepend(lastItem);
  
    // scroll to appear motionless
    container?.style.setProperty("transform", `translateX(-${lastItemWidth}px)`);
  
    // force reflow before applying transition
    void container?.offsetWidth;
  
    // apply transition
    container?.style?.setProperty("transition", "100ms");
    container?.style.setProperty("transform", "translateX(0)");
  };

  return (
    <>
    <button onClick={prevPage} className="absolute top-0 left-0 md:hidden">⏪</button>
    <div
      ref={containerRef}
      className={`bg-blue-500 transition grid h-full w-full md:translate-x-[0] md:flex md:flex-col md:gap-2 md:h-auto`}
      style={{ transform: `${ md ? "translateX(0)" : ""}`, gridAutoFlow: "column", gridAutoColumns: "100%" }}
    >
      {pages}
    </div>
    <button onClick={nextPage} className="absolute top-0 right-0 md:hidden">⏩</button>
    </>
  );
}

function Page ({pages}: {pages: string[]}) {
  return (
    <div className="bg-cyan-900 h-full w-full">
      <div
        className={`h-full w-full inline-grid grid-cols-3 grid-rows-2`}
        >
          {pages.map((val: any, key: any) => (
            <PanelItem href="/" key={key}>
              {val}
            </PanelItem>
          ))}
        </div>
    </div>
  )
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
        w-full absolute bot-0 flex transition
        ${expanded ? "translate-y-0" : "translate-y-[-100%]"}
        md:translate-y-0
        `}
      >
        <Carousel />
      </nav>
    </div>
  );
}
