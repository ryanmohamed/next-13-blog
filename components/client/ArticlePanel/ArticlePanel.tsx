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
    <div className="p-4 box-border h-full ">
      <p className="border-white border-2 p-2 sm:p-2 rounded w-full h-full md:border-0 md:p-0" {...props}>
        <Link href="/" className="w-4/5">
          <span className="text-sm sm:text-sm lg:text-lg xl:text-xl font-semibold whitespace-wrap break-words md:whitespace-pre-line">
            {children}
          </span>
        </Link>
      </p>
    </div>
  );
}

function ArticlePanelContent() {
  const md = useMediaQuery("(min-width: 768px)");
  const amount = 6;
  const pages = Math.ceil(ArticleTitles.length / amount);
  return (
    <div className="box-border md:p-0 w-full h-fit md:h-full md:flex md:flex-col">
      {!md ? <Carousel md={md}/> : <p> hi</p>}
    </div>
  );
}

/* DEPENDANT ON TAILWIND MD SIZE */
function Carousel ({md}:any) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const sm = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    if (sm) setNumPerPage(6);
    else setNumPerPage(4);
  }, [sm])

  const pages = [];
  const [numPerPage, setNumPerPage] = useState(4);
  const numPages = Math.ceil(ArticleTitles.length / numPerPage);
  let startIndex = 0

  // sub arrays, each length = numPerPage
  for(let i = 0; i < numPages; i++){
    pages.push(<Page pages={ArticleTitles.slice(startIndex, startIndex+6)}/>);
    startIndex += numPerPage
  }

  // wraps first page to end 
  const nextPage = () => { 
    setCurrentPage((currentPage+1)%numPages)
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

  // wraps last page to start 
  const prevPage = () => {
    if(currentPage-1 < 0) setCurrentPage(numPages-1);
    else setCurrentPage(currentPage-1);

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
    <div className="w-full h-full">
      <div className="bg-emerald-800 flex justify-between items-center p-4 px-6">
        <button onClick={prevPage} className="h-min md:hidden">Previous</button>
        <div className="mb-4 p-2 px-2 h-1 w-full flex flex-wrap justify-center items-center gap-1" style={{ gridRow: "2/3", gridColumn: "1/4" }}>
          { pages.map((page: any, key: Key) => <div className={`h-1 w-1/12 rounded-sm ${key === currentPage ? "bg-slate-600" : "bg-slate-200"}`}></div> ) }
        </div>
        <button onClick={nextPage} className="h-min md:hidden">Next</button>
      </div>
      <div className=" w-full h-full overflow-hidden">
        <div
          ref={containerRef}
          className={`h-min transition grid md:translate-x-[0] relative`}
          style={{ transform: `${ md ? "opacity-0" : "opacity-100"}`, gridAutoFlow: "column", gridAutoColumns: "100%" }}
        >
          {pages}
        </div>
      </div>
    </div>
  );
}

function Page ({pages}: {pages: string[]}) {
  return (
    <div
      className={`bg-emerald-800 w-full h-fit grid xs:grid-cols-3 grid-cols-2 xs:grid-row-2 grid-row-3`}
      style={{ gridAutoRows: "max-content"}}
    >
        {pages.map((val: any, key: any) => (
          <PanelItem href="/" key={key}>
            {val}
          </PanelItem>
        ))}
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
        className={`md:bg-emerald-800 md:scrollbar-hide md:overflow-y-scroll z-[80] md:fixed md:left-0 md:w-40 lg:w-56 md:h-full 
        w-full absolute bot-0 flex transition
        ${expanded ? "translate-y-0" : "translate-y-[-100%]"}
        md:translate-y-0
        `}
      >
        <ArticlePanelContent />
      </nav>
    </div>
  );
}
