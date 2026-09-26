import { Link } from "@tanstack/react-router";
import { articles } from '../data/articles';

function ArticleListPage() {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
        <li key={article.id}>
          <Link to={`/articles/${article.id}`}>{article.title}</Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ArticleListPage;