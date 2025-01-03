'use client'

import { Users, DollarSign, Briefcase, BarChart, Calendar } from 'lucide-react'
import { DataBox } from '@/components/data-box'
import { MetricsDashboard } from '@/components/metrics-dashboard'

const settingsData = [
  {
    title: 'Leads',
    value: '',
    color: 'bg-teal-300',
    icon: <Users className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Lead capture settings' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Lead scoring rules' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Lead distribution settings' },
    ]
  },
  {
    title: 'Agent',
    value: '',
    color: 'bg-teal-300',
    icon: <DollarSign className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Agent profile settings' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Commission structure' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Performance metrics' },
    ]
  },
  {
    title: 'Buy',
    value: '',
    color: 'bg-teal-300',
    icon: <Briefcase className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Property search filters' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Offer template settings' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Buyer preferences' },
    ]
  },
  {
    title: 'Sell',
    value: '',
    color: 'bg-teal-300',
    icon: <BarChart className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Listing visibility options' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Pricing strategy tools' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Marketing automation' },
    ]
  },
  {
    title: 'Booking',
    value: '',
    color: 'bg-teal-300',
    icon: <Calendar className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Appointment types' },
      { id: 2, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Availability settings' },
      { id: 3, phoneNumber: 'N/A', time: '2023-04-01', conversation: 'Notification preferences' },
    ]
  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Client 4</h1>
      <MetricsDashboard />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {settingsData.map((box) => (
          <DataBox key={box.title} {...box} />
        ))}
      </div>
    </div>
  )
}

