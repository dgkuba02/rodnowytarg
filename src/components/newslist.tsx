import React from "react";
import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";

type Props = {
  showAll?: boolean;
};

const NewsList: React.FC<Props> = ({ showAll = false }) => {
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const itemsToShow = showAll ? sortedNews : sortedNews.slice(0, 3);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Aktualności</h2>
      <div className="space-y-4">
        {itemsToShow.map((news) => (
          <article key={news.id} className="border-b pb-4">
            <h3 className="text-xl font-semibold">{news.title}</h3>
            <p className="text-gray-500 text-sm mb-2">{news.date}</p>
            <p>{news.content}</p>
          </article>
        ))}
      </div>

      {!showAll && (
        <div className="mt-6 text-right">
          <Link
            to="/aktualnosci"
            className="text-blue-600 hover:underline font-medium"
          >
            Zobacz wszystkie →
          </Link>
        </div>
      )}
    </section>
  );
};

export default NewsList;
