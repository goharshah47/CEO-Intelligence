import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { MetricCard } from './MetricCard';
import { cn } from '@/src/lib/utils';
import { AlertCircle, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Q1', value: 80 },
  { name: 'Q2', value: 110 },
  { name: 'Q3', value: 95 },
  { name: 'Q4', value: 140 },
  { name: 'Q5', value: 135 },
  { name: 'Q6', value: 170 },
  { name: 'Q7', value: 160 },
  { name: 'Q8', value: 210 },
];

export const Dashboard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("bg-panel-elevated border border-line p-8 rounded-[32px] w-full max-w-6xl", className)}>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold">Executive Dashboard Overview</h3>
        <span className="text-xs font-mono text-muted tracking-widest uppercase bg-panel px-3 py-1 rounded-full border border-line">
          Live Intelligence
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard value="15M+" label="Deliveries / year" accentColor="#3B82F6" size="sm" />
        <MetricCard value="1,500+" label="Employees" accentColor="#22C55E" size="sm" />
        <MetricCard value="1,000+" label="Vehicles" accentColor="#F59E0B" size="sm" />
        <MetricCard value="50+" label="Dist. centers" accentColor="#EF4444" size="sm" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-panel border border-line rounded-2xl p-6">
          <h4 className="text-muted text-sm font-medium mb-6">Performance Trend</h4>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#A1A1AA', fontSize: 12 }}
                  dy={10}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                  contentStyle={{ 
                    backgroundColor: '#18181F', 
                    border: '1px solid #1F1F23',
                    borderRadius: '12px',
                    color: '#fff' 
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#3B82F6" 
                  radius={[10, 10, 0, 0]} 
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-panel border border-line rounded-2xl p-6 flex flex-col justify-between h-1/2">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm">Risk Signals</span>
              <AlertCircle size={14} className="text-red-500" />
            </div>
            <div>
              <div className="text-red-500 text-3xl font-bold">3 active</div>
              <div className="text-muted text-xs uppercase tracking-wider font-semibold">Priority Alerts</div>
            </div>
          </div>
          
          <div className="bg-panel border border-line rounded-2xl p-6 flex flex-col justify-between h-1/2">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm">Opportunities</span>
              <TrendingUp size={14} className="text-green-500" />
            </div>
            <div>
              <div className="text-green-500 text-2xl font-bold leading-tight">2 markets trending up</div>
              <div className="text-muted text-xs uppercase tracking-wider font-semibold">Growth Trend</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
