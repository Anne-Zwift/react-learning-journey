import { articlesRoute } from '../router';

function ArticleDisplayPage() {
  const { article } = articlesRoute.useLoaderData();

  return (
    <div>
      <h1>{article.name}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDisplayPage;