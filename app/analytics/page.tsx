'use client'

import { Users, DollarSign, Briefcase, BarChart, Calendar } from 'lucide-react'
import { DataBox } from '@/components/data-box'
import { MetricsDashboard } from '@/components/metrics-dashboard'


const analyticsData = [
  {
    title: 'Leads',
    value: '',
    color: 'bg-teal-300',
    icon: <Users className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Total leads: 500' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Qualified leads: 200' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Conversion rate: 15%' },
    ]
  },
  {
    title: 'Agent',
    value: '',
    color: 'bg-teal-300',
    icon: <DollarSign className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Total agents: 50' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Top performer: John Doe' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Average deals/month: 3' },
    ]
  },
  {
    title: 'Buy',
    value: '',
    color: 'bg-teal-300',
    icon: <Briefcase className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Properties viewed: 150' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Offers made: 30' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Closed deals: 10' },
    ]
  },
  {
    title: 'Sell',
    value: '',
    color: 'bg-teal-300',
    icon: <BarChart className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Active listings: 75' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Avg. days on market: 45' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Sold properties: 25' },
    ]
  },
  {
    title: 'Booking',
    value: '',
    color: 'bg-teal-300',
    icon: <Calendar className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Total bookings: 200' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Viewing requests: 150' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Open house reservations: 50' },
    ]
  },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Client 2</h1>
      <MetricsDashboard />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {analyticsData.map((box) => (
          <DataBox key={box.title} {...box} />
        ))}
      </div>
    </div>
  )
}

