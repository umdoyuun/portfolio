'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  FileText
} from 'lucide-react'
import { BlogPost } from '@/types/blog'
import { blogCategories } from '@/data/blogCategories'

interface PostListProps {
  posts: BlogPost[];
  selectedPost: BlogPost | null;
  onPostSelect: (post: BlogPost) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
}

const PostList = ({ 
  posts, 
  selectedPost, 
  onPostSelect, 
  currentPage, 
  totalPages, 
  onPageChange,
  isLoading = false 
}: PostListProps) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryInfo = (categoryId: string) => {
    return blogCategories.find(cat => cat.id === categoryId) || blogCategories.find(cat => cat.id === 'etc')!;
  };

  // HTML 태그를 제거한 후 텍스트를 자르는 함수
  const stripHtml = (html: string): string => {
    return html.replace(/<[^>]*>/g, '');
  };

  const truncateText = (text: string, maxLength: number = 120): string => {
    const cleanText = stripHtml(text);
    if (cleanText.length <= maxLength) return cleanText;
    return cleanText.substring(0, maxLength) + '...';
  };

  if (isLoading) {
    return (
      <Card className="h-full border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-4 bg-secondary rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-secondary rounded w-1/2 mb-1"></div>
                <div className="h-3 bg-secondary rounded w-full"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-lg">
      <CardContent className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-bold text-lg text-foreground">블로그 글</h3>
          </div>
          <Badge variant="outline" className="text-xs">
            {posts.length}개 글
          </Badge>
        </div>

        {/* Post List */}
        <div className="flex-1 space-y-3 mb-6 overflow-y-auto">
          {posts.length === 0 ? (
            <div className="flex items-center justify-center h-32 text-muted-foreground">
              <div className="text-center">
                <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">선택한 카테고리에 글이 없습니다.</p>
              </div>
            </div>
          ) : (
            posts.map((post, index) => {
              const isSelected = selectedPost?.id === post.id;
              const categoryInfo = getCategoryInfo(post.category);
              
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'bg-primary/10 border-primary/50 shadow-md' 
                        : 'bg-card/50 hover:bg-card/80 border-border hover:border-primary/30'
                    }`}
                    onClick={() => onPostSelect(post)}
                  >
                    <CardContent className="p-4">
                      {/* Post Title */}
                      <h4 className={`font-medium text-sm mb-2 line-clamp-2 ${
                        isSelected ? 'text-primary' : 'text-foreground'
                      }`}>
                        {post.title}
                      </h4>
                      
                      {/* Post Description */}
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {truncateText(post.description)}
                      </p>
                      
                      {/* Post Meta */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{formatDate(post.pubDate)}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant="outline" 
                            className={`text-xs bg-gradient-to-r ${categoryInfo.color} text-white border-none`}
                          >
                            {categoryInfo.name}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="p-1 h-6 w-6 opacity-60 hover:opacity-100"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(post.link, '_blank');
                            }}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 pt-4 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center space-x-1">
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                const isCurrentPage = page === currentPage;
                
                // 페이지 번호 표시 로직 (현재 페이지 기준 ±2 페이지만 표시)
                if (
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={page}
                      variant={isCurrentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => onPageChange(page)}
                      className={`w-8 h-8 p-0 text-xs ${
                        isCurrentPage ? 'bg-primary text-primary-foreground' : ''
                      }`}
                    >
                      {page}
                    </Button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="text-muted-foreground text-xs px-1">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PostList;