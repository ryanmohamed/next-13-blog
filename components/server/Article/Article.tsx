interface ArticleProps {
  title: string;
  author: string;
  date: string;
  img: string;
  children: React.ReactNode;
}

export default function Article({
  title,
  author,
  date,
  img,
  children,
}: ArticleProps) {
  return (
    <article className="flex flex-col">
      <h1 className="text-4xl lg:text-5xl mb-1 font-bold">{title}</h1>
      <address className="w-full flex justify-between items-center mb-2 not-italic">
        <p className="text-lg">{author}</p>
        <p className="text-sm">
          Written <time dateTime={date}>{date}</time>
        </p>
      </address>
      <img
        className="max-w-[100%] h-auto self-center mb-10"
        src={img}
        alt="article image"
      />
      {children}
    </article>
  );
}
