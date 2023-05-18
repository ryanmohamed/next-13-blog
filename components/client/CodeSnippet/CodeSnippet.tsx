"use client";
import { Suspense } from "react";
// async light version of prism from rsh
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  css,
  javascript,
  typescript,
  jsx,
  tsx,
  python,
  ruby,
  cpp,
  c,
  sql,
  java,
  markdown,
  bash,
  http,
} from "react-syntax-highlighter/dist/cjs/languages/prism/";

import dark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import materialOceanic from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";
import vsc from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";

type LanguageType = { [key: string]: any };
const languages: LanguageType = {
  css: css,
  javascript: javascript,
  typescript: typescript,
  jsx: jsx,
  tsx: tsx,
  python: python,
  ruby: ruby,
  cpp: cpp,
  c: c,
  sql: sql,
  java: java,
  markdown: markdown,
  bash: bash,
  http: http,
};

const languageKeys = Object.keys(languages);

for (let language in languages) {
  SyntaxHighlighter.registerLanguage(language, languages[language]);
}

interface CodeSnippetProps {
  language: (typeof languageKeys)[number];
  snippet: string;
  style?: React.CSSProperties;
}

type StyleType = { [key: string]: React.CSSProperties };

export default function CodeSnippet({
  language,
  snippet,
  style,
}: CodeSnippetProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SyntaxHighlighter
          language={language as string}
          style={vsc as StyleType}
          customStyle={style}
          showLineNumbers
        >
          {snippet}
        </SyntaxHighlighter>
      </Suspense>
    </div>
  );
}
