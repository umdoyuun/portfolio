'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  Rss,
  ExternalLink,
  AlertCircle,
  Loader2
} from 'lucide-react'
import { BlogPost } from '@/types/blog'
import CategorySidebar from '@/components/blog/CategorySidebar'
import PostList from '@/components/blog/PostList'
import PostContent from '@/components/blog/PostContent'

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // RSS 데이터 로드
  const loadPosts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/blog/rss');
      const data = await response.json();
      
      if (data.success && data.data) {
        setPosts(data.data);
      } else {
        setError(data.error || 'RSS 데이터를 불러오는데 실패했습니다.');
      }
    } catch (err) {
      setError('네트워크 오류가 발생했습니다.');
      console.error('RSS load error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // RSS 업데이트 (관리자용)
  const handleUpdate = async () => {
    try {
      setIsUpdating(true);
      
      const response = await fetch('/api/blog/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminKey: 'dev-admin-key' })
      });
      
      const data = await response.json();
      
      if (data.success) {
        await loadPosts(); // 데이터 다시 로드
      } else {
        setError(data.error || 'RSS 업데이트에 실패했습니다.');
      }
    } catch (err) {
      setError('업데이트 중 오류가 발생했습니다.');
      console.error('RSS update error:', err);
    } finally {
      setIsUpdating(false);
    }
  };

  // 카테고리별 글 필터링
  const getFilteredPosts = (): BlogPost[] => {
    if (selectedCategory === 'all') return posts;
    return posts.filter(post => post.category === selectedCategory);
  };

  // 페이지네이션 처리
  const getPaginatedPosts = (): BlogPost[] => {
    const filteredPosts = getFilteredPosts();
    const startIndex = (currentPage - 1) * 10;
    return filteredPosts.slice(startIndex, startIndex + 10);
  };

  // 카테고리 변경 시 처리
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    setSelectedPost(null);
    
    // 총 페이지 수 계산
    const filteredPosts = categoryId === 'all' ? posts : posts.filter(p => p.category === categoryId);
    setTotalPages(Math.ceil(filteredPosts.length / 10));
  };

  // 페이지 변경 시 처리
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedPost(null);
  };

  // 글 선택 시 처리
  const handlePostSelect = (post: BlogPost) => {
    setSelectedPost(post);
  };

  // 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    loadPosts();
  }, []);

  // 카테고리 변경 시 총 페이지 수 업데이트
  useEffect(() => {
    const filteredPosts = getFilteredPosts();
    setTotalPages(Math.ceil(filteredPosts.length / 10));
  }, [selectedCategory, posts]);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tech <span className="text-primary">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            기술 블로그에서 임베디드, Matter, 알고리즘 등 다양한 개발 경험과 
            학습 내용을 공유합니다. 실제 프로젝트에서 얻은 인사이트를 확인해보세요.
          </p>
        </motion.div>

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <Card className="border-red-500/50 bg-red-500/10">
              <CardContent className="p-4">
                <div className="flex items-center text-red-600">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">{error}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Blog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
          {/* Left Sidebar - Categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <CategorySidebar
              posts={posts}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategoryChange}
              isAdmin={true} // 개발 환경에서는 true, 실제 배포시에는 환경변수로 관리
              onUpdate={handleUpdate}
              isUpdating={isUpdating}
            />
          </motion.div>

          {/* Center Content - Post List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <PostList
              posts={getPaginatedPosts()}
              selectedPost={selectedPost}
              onPostSelect={handlePostSelect}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              isLoading={isLoading}
            />
          </motion.div>

          {/* Right Content - Post Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            {selectedPost ? (
              <PostContent post={selectedPost} />
            ) : (
              <Card className="h-full border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-lg">
                <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      글을 선택해주세요
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      왼쪽 목록에서 읽고 싶은 글을 클릭하면 <br />
                      이곳에서 내용을 확인할 수 있습니다.
                    </p>
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://doyun98.tistory.com', '_blank')}
                    className="border-primary/20 hover:bg-primary/5 hover:border-primary/50"
                  >
                    <Rss className="h-4 w-4 mr-2" />
                    블로그 방문하기
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="border-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5 backdrop-blur-lg shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Rss className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                더 많은 기술 콘텐츠가 궁금하신가요?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                티스토리 블로그에서 더 다양한 기술 포스팅과 프로젝트 경험담을 만나보세요. 
                임베디드부터 웹 개발까지 폭넓은 개발 여정을 공유하고 있습니다.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://doyun98.tistory.com', '_blank')}
              >
                <Rss className="h-5 w-5 mr-2" />
                블로그 방문하기
                <ExternalLink className="h-5 w-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;