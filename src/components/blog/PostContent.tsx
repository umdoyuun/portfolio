'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar,
  ExternalLink,
  Tag,
  BookOpen,
  ArrowUpRight
} from 'lucide-react'
import { BlogPost } from '@/types/blog'
import { blogCategories } from '@/data/blogCategories'

interface PostContentProps {
  post: BlogPost;
}

const PostContent = ({ post }: PostContentProps) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  const getCategoryInfo = (categoryId: string) => {
    return blogCategories.find(cat => cat.id === categoryId) || blogCategories.find(cat => cat.id === 'etc')!;
  };

  const categoryInfo = getCategoryInfo(post.category);

  // HTML 태그를 제거하는 함수
  const stripHtml = (html: string): string => {
    return html.replace(/<[^>]*>/g, '');
  };

  // 간단한 HTML 태그를 처리하는 함수
  const formatContent = (content: string): string => {
    return content
      .replace(/\n/g, '<br />')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-secondary px-1 py-0.5 rounded text-sm">$1</code>');
  };

  return (
    <Card className="h-full border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-lg">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Badge */}
            <Badge 
              className={`mb-3 bg-gradient-to-r ${categoryInfo.color} text-white border-none`}
            >
              <Tag className="h-3 w-3 mr-1" />
              {categoryInfo.name}
            </Badge>

            {/* Title */}
            <h1 className="text-xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(post.pubDate)}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>doyun98.tistory.com</span>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(post.link, '_blank')}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                원문 보기
                <ArrowUpRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Description/Summary */}
            {post.description && (
              <div className="mb-6 p-4 bg-secondary/30 rounded-lg border-l-4 border-primary">
                <h3 className="font-medium text-sm text-foreground mb-2 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  글 요약
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stripHtml(post.description)}
                </p>
              </div>
            )}

            {/* Main Content */}
            <div className="prose prose-sm max-w-none">
              <div 
                className="text-sm text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: formatContent(post.content) 
                }}
              />
            </div>

            {/* Content Footer */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  <p>이 글은 {categoryInfo.name} 카테고리에 속합니다.</p>
                  <p className="mt-1">{categoryInfo.description}</p>
                </div>
                
                <Button
                  variant="default"
                  onClick={() => window.open(post.link, '_blank')}
                  className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  전체 글 읽기
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostContent;