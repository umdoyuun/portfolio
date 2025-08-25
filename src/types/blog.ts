export interface BlogPost {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  category: string;
  content: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  color: string;
  keywords: string[];
  description: string;
}

export interface BlogState {
  posts: BlogPost[];
  categories: BlogCategory[];
  selectedCategory: string;
  selectedPost: BlogPost | null;
  isLoading: boolean;
  error: string | null;
}