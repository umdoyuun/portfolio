import type { NextApiRequest, NextApiResponse } from 'next';

interface UpdateResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UpdateResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  // 간단한 관리자 인증 (실제 프로덕션에서는 더 강력한 인증 필요)
  const { adminKey } = req.body;
  const ADMIN_KEY = process.env.BLOG_ADMIN_KEY || 'dev-admin-key';

  if (adminKey !== ADMIN_KEY) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  try {
    // RSS 업데이트 로직
    // 실제로는 캐시 무효화나 백그라운드 작업 트리거 등을 수행
    const rssUrl = 'https://doyun98.tistory.com/rss';
    const response = await fetch(rssUrl, { cache: 'no-store' });
    
    if (!response.ok) {
      throw new Error(`RSS update failed: ${response.status}`);
    }

    // 업데이트 성공
    res.status(200).json({ 
      success: true, 
      message: 'RSS 데이터가 성공적으로 업데이트되었습니다.' 
    });
  } catch (error) {
    console.error('RSS update error:', error);
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'RSS update failed' 
    });
  }
}