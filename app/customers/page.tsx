'use client'

import { Users, DollarSign, Briefcase, BarChart, Calendar } from 'lucide-react'
import { DataBox } from '@/components/data-box'
import { MetricsDashboard } from '@/components/metrics-dashboard'


const customersData = [
  {
    title: 'Leads',
    value: '',
    color: 'bg-teal-300',
    icon: <Users className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: '+1 (555) 123-4567', time: '2023-04-01', conversation: 'New lead from website' },
      { id: 2, phoneNumber: '+1 (555) 987-6543', time: '2023-04-01', conversation: 'Referral lead' },
      { id: 3, phoneNumber: '+1 (555) 246-8135', time: '2023-04-01', conversation: 'Social media lead' },
    ]
  },
  {
    title: 'Agent',
    value: '',
    color: 'bg-teal-300',
    icon: <DollarSign className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: '+1 (555) 369-2580', time: '2023-04-01', conversation: 'Agent performance review' },
      { id: 2, phoneNumber: '+1 (555) 741-8520', time: '2023-04-01', conversation: 'New agent onboarding' },
      { id: 3, phoneNumber: '+1 (555) 159-7530', time: '2023-04-01', conversation: 'Agent training session' },
    ]
  },
  {
    title: 'Buy',
    value: '',
    color: 'bg-teal-300',
    icon: <Briefcase className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: '+1 (555) 852-9630', time: '2023-04-01', conversation: 'Property search initiated' },
      { id: 2, phoneNumber: '+1 (555) 741-9630', time: '2023-04-01', conversation: 'Offer submitted' },
      { id: 3, phoneNumber: '+1 (555) 963-7410', time: '2023-04-01', conversation: 'Mortgage application' },
    ]
  },
  {
    title: 'Sell',
    value: '',
    color: 'bg-teal-300',
    icon: <BarChart className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: '+1 (555) 147-2580', time: '2023-04-01', conversation: 'Property valuation request' },
      { id: 2, phoneNumber: '+1 (555) 369-1470', time: '2023-04-01', conversation: 'Listing created' },
      { id: 3, phoneNumber: '+1 (555) 789-4560', time: '2023-04-01', conversation: 'Offer negotiation' },
    ]
  },
  {
    title: 'Booking',
    value: '',
    color: 'bg-teal-300',
    icon: <Calendar className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: '+1 (555) 123-4567', time: '2023-04-01', conversation: 'Property viewing scheduled' },
      { id: 2, phoneNumber: '+1 (555) 987-6543', time: '2023-04-01', conversation: 'Open house reservation' },
      { id: 3, phoneNumber: '+1 (555) 246-8135', time: '2023-04-01', conversation: 'Virtual tour booked' },
    ]
  },
]

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Client 3</h1>
      <MetricsDashboard />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {customersData.map((box) => (
          <DataBox key={box.title} {...box} />
        ))}
      </div>
    </div>
  )
}

