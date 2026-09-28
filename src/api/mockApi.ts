
interface Article {
  id: string;
  name: string;
  content: string;
}

const fakeData: Record<string, Article> = {
  1: { id: '1', name: 'Article One', content: 'Content for article 1...' },
  2: { id: '2', name: 'Article Two', content: 'More content here...' },
};

export const fetchArticleById = async (id: string): Promise<Article> => {
  console.log(`API: Fetching article ${id}...`);
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (fakeData[id]) {
    console.log(`API: Found article ${id}`);
    return fakeData[id];
  } else {
    console.log(`API: Article ${id} not found`);
    throw new Error(`Article with ID not found ${id}`);
  }
};