'use client'

import { Users, DollarSign, Briefcase, BarChart, Calendar } from 'lucide-react'
import { DataBox } from '@/components/data-box'
import { MetricsDashboard } from '@/components/metrics-dashboard'

const helpData = [
  {
    title: 'Leads',
    value: '',
    color: 'bg-teal-300',
    icon: <Users className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Lead management guide' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Lead nurturing best practices' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Lead conversion tips' },
    ]
  },
  {
    title: 'Agent',
    value: '',
    color: 'bg-teal-300',
    icon: <DollarSign className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Agent onboarding process' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Commission structure explanation' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Performance improvement strategies' },
    ]
  },
  {
    title: 'Buy',
    value: '',
    color: 'bg-teal-300',
    icon: <Briefcase className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Property search tutorial' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Offer submission process' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Buyers guide' }
    ]
  },
  {
    title: 'Sell',
    value: '',
    color: 'bg-teal-300',
    icon: <BarChart className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Listing creation guide' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Pricing strategy advice' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Home staging tips' },
    ]
  },
  {
    title: 'Booking',
    value: '',
    color: 'bg-teal-300',
    icon: <Calendar className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Scheduling system tutorial' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Managing appointments' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Booking cancellation policy' },
    ]
  },
]

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Client 5</h1>
      <MetricsDashboard />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {helpData.map((box) => (
          <DataBox key={box.title} {...box} />
        ))}
      </div>
    </div>
  )
}

