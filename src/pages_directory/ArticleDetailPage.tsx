import { useParams, Link } from "@tanstack/react-router";

function ArticleDetailPage() {
  const { articleId } = useParams({ from: '/articles/$articleId' });

  return (
    <div>
      <h1>Article Details</h1>
      <p>Shows details for article ID: {articleId}</p>
      <Link to='/articles'>Back to Articles</Link>
    </div>
  );
};

export default ArticleDetailPage;