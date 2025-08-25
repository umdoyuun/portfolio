import type { NextApiRequest, NextApiResponse } from 'next';
import { BlogPost } from '@/types/blog';
import { blogCategories } from '@/data/blogCategories';

interface CategoryResponse {
  success: boolean;
  data?: {
    posts: BlogPost[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
    category: string;
  };
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoryResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { category = 'all', page = '1', limit = '10' } = req.query;
  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);

  try {
    // RSS 데이터 가져오기 (내부 API 호출)
    const rssResponse = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/blog/rss`);
    const rssData = await rssResponse.json();

    if (!rssData.success || !rssData.data) {
      throw new Error('Failed to fetch RSS data');
    }

    let posts: BlogPost[] = rssData.data;

    // 카테고리 필터링
    if (category !== 'all') {
      posts = posts.filter(post => post.category === category);
    }

    // 페이지네이션
    const totalCount = posts.length;
    const totalPages = Math.ceil(totalCount / limitNum);
    const startIndex = (pageNum - 1) * limitNum;
    const paginatedPosts = posts.slice(startIndex, startIndex + limitNum);

    res.status(200).json({
      success: true,
      data: {
        posts: paginatedPosts,
        totalCount,
        currentPage: pageNum,
        totalPages,
        category: category as string
      }
    });
  } catch (error) {
    console.error('Category API error:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Category API failed'
    });
  }
}