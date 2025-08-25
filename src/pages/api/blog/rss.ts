import type { NextApiRequest, NextApiResponse } from 'next';
import { BlogPost } from '@/types/blog';
import { categorizeBlogPost } from '@/data/blogCategories';

interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  'content:encoded'?: string;
}

interface RSSResponse {
  success: boolean;
  data?: BlogPost[];
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RSSResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const rssUrl = 'https://doyun98.tistory.com/rss';
    const response = await fetch(rssUrl);
    
    if (!response.ok) {
      throw new Error(`RSS fetch failed: ${response.status}`);
    }

    const rssText = await response.text();
    const posts = parseRSSFeed(rssText);
    
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.error('RSS fetch error:', error);
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'RSS fetch failed' 
    });
  }
}

function parseRSSFeed(rssText: string): BlogPost[] {
  try {
    // RSS XML 파싱 (간단한 정규식 사용)
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items: BlogPost[] = [];
    let match;

    while ((match = itemRegex.exec(rssText)) !== null && items.length < 20) {
      const itemContent = match[1];
      
      const title = extractTag(itemContent, 'title');
      const description = extractTag(itemContent, 'description');
      const link = extractTag(itemContent, 'link');
      const pubDate = extractTag(itemContent, 'pubDate');
      const content = extractTag(itemContent, 'content:encoded') || description;

      if (title && link && pubDate) {
        const category = categorizeBlogPost(title, description);
        
        items.push({
          id: link, // link를 고유 ID로 사용
          title: cleanHtml(title),
          description: cleanHtml(description),
          link,
          pubDate,
          category,
          content: cleanHtml(content)
        });
      }
    }

    return items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  } catch (error) {
    console.error('RSS parsing error:', error);
    return [];
  }
}

function extractTag(content: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

function cleanHtml(htmlString: string): string {
  if (!htmlString) return '';
  
  return htmlString
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1') // CDATA 제거
    .replace(/<[^>]*>/g, '') // HTML 태그 제거
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}