'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  change: {
    value: number
    trend: 'up' | 'down' | 'neutral'
  }
}

function MetricCard({ title, value, change }: MetricCardProps) {
  return (
    <Card className="bg-card/10 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-white ">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className={`flex items-center text-sm ${
          change.trend === 'up' 
            ? 'text-green-500' 
            : change.trend === 'down' 
              ? 'text-red-500' 
              : 'text-teal-200'
        }`}>
          {change.trend === 'up' ? (
            <ArrowUpIcon className="mr-1 h-4 w-4" />
          ) : change.trend === 'down' ? (
            <ArrowDownIcon className="mr-1 h-4 w-4" />
          ) : null}
          {change.value}%
        </div>
      </CardContent>
    </Card>
  )
}

export function MetricsDashboard() {
  const metrics = [
    {
      title: 'Total Call Minutes',
      value: '0',
      change: { value: 62.68, trend: 'down' as const }
    },
    {
      title: 'Number of Calls',
      value: '3',
      change: { value: 0, trend: 'neutral' as const }
    },
    {
      title: 'Total Spent',
      value: '$5.67',
      change: { value: 61.54, trend: 'down' as const }
    },
    {
      title: 'Average Cost per Call',
      value: '$0.02',
      change: { value: 61.54, trend: 'down' as const }
    }
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  )
}

