'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  RefreshCw,
  Folder,
  FolderOpen,
  Hash
} from 'lucide-react'
import { blogCategories } from '@/data/blogCategories'
import { BlogPost } from '@/types/blog'

interface CategorySidebarProps {
  posts: BlogPost[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
  isAdmin?: boolean;
  onUpdate?: () => void;
  isUpdating?: boolean;
}

const CategorySidebar = ({ 
  posts, 
  selectedCategory, 
  onCategorySelect, 
  isAdmin = false, 
  onUpdate,
  isUpdating = false 
}: CategorySidebarProps) => {
  // 각 카테고리별 글 개수 계산
  const getCategoryCount = (categoryId: string): number => {
    if (categoryId === 'all') return posts.length;
    return posts.filter(post => post.category === categoryId).length;
  };

  return (
    <Card className="h-full border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg shadow-lg">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Folder className="h-5 w-5 text-primary mr-2" />
          <h3 className="font-bold text-lg text-foreground">카테고리</h3>
        </div>

        {/* Category List */}
        <div className="space-y-2 mb-8">
          {blogCategories.map((category) => {
            const count = getCategoryCount(category.id);
            const isSelected = selectedCategory === category.id;
            
            return (
              <motion.div
                key={category.id}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant={isSelected ? "default" : "ghost"}
                  className={`w-full justify-between p-3 h-auto text-left ${
                    isSelected 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'hover:bg-secondary/80'
                  }`}
                  onClick={() => onCategorySelect(category.id)}
                >
                  <div className="flex items-center space-x-3">
                    {isSelected ? (
                      <FolderOpen className="h-4 w-4" />
                    ) : (
                      <Folder className="h-4 w-4" />
                    )}
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-xs ${
                        isSelected ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {category.description}
                      </span>
                    </div>
                  </div>
                  <Badge 
                    variant={isSelected ? "secondary" : "outline"} 
                    className={`ml-2 ${
                      isSelected 
                        ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30' 
                        : ''
                    }`}
                  >
                    {count}
                  </Badge>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mb-6 p-4 bg-secondary/30 rounded-lg">
          <div className="flex items-center mb-2">
            <Hash className="h-4 w-4 text-primary mr-2" />
            <span className="font-medium text-sm text-foreground">통계</span>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>전체 글</span>
              <span className="font-medium">{posts.length}개</span>
            </div>
            <div className="flex justify-between">
              <span>카테고리</span>
              <span className="font-medium">{blogCategories.length - 1}개</span>
            </div>
          </div>
        </div>

        {/* Admin Update Button */}
        {isAdmin && onUpdate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={onUpdate}
              disabled={isUpdating}
              className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              size="sm"
            >
              {isUpdating ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  업데이트 중...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  RSS 업데이트
                </>
              )}
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

export default CategorySidebar;