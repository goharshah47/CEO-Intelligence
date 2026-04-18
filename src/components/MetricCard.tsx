import React from 'react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface MetricCardProps {
  value: string;
  label: string;
  accentColor?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  value, 
  label, 
  accentColor = '#3B82F6', 
  className,
  size = 'md'
}) => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={cn(
        "bg-panel-elevated border border-line p-5 rounded-3xl relative overflow-hidden flex flex-col justify-end min-h-[140px]",
        size === 'lg' && "min-h-[180px] p-6",
        size === 'sm' && "min-h-[120px] p-4",
        className
      )}
    >
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-[70%] rounded-full"
        style={{ backgroundColor: accentColor }}
      />
      <div className="pl-4">
        <div className={cn(
          "font-bold text-white tracking-tight",
          size === 'lg' ? "text-5xl" : size === 'md' ? "text-4xl" : "text-3xl"
        )}>
          {value}
        </div>
        <div className={cn(
          "text-muted font-medium mt-1",
          size === 'lg' ? "text-lg" : "text-sm"
        )}>
          {label}
        </div>
      </div>
    </motion.div>
  );
};
