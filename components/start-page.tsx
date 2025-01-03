import { Users, DollarSign, Briefcase, BarChart, Calendar } from 'lucide-react'
import { DataBox } from '@/components/data-box'
import { MetricsDashboard } from './metrics-dashboard'

const boxesData = [
  {
    title: 'Leads',
    value: '',
    color: 'bg-teal-300',
    icon: <Users className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: '+1 (555) 123-4567', time: '2023-04-01 10:30 AM', conversation: 'New lead registration' },
      { id: 2, phoneNumber: '+1 (555) 987-6543', time: '2023-04-01 11:45 AM', conversation: 'Lead follow-up' },
      { id: 3, phoneNumber: '+1 (555) 246-8135', time: '2023-04-01 02:15 PM', conversation: 'Lead qualification' },
      { id: 4, phoneNumber: '+1 (555) 369-2580', time: '2023-04-01 03:30 PM', conversation: 'Lead conversion' },
      { id: 5, phoneNumber: '+1 (555) 159-7530', time: '2023-04-01 04:45 PM', conversation: 'Lead nurturing' },
    ]
  },
  {
    title: 'Agent',
    value: '',
    color: 'bg-teal-300',
    icon: <DollarSign className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: '+1 (555) 369-2580', time: '2023-04-01 09:15 AM', conversation: 'Agent onboarding' },
      { id: 2, phoneNumber: '+1 (555) 741-8520', time: '2023-04-01 01:30 PM', conversation: 'Agent training session' },
      { id: 3, phoneNumber: '+1 (555) 159-7530', time: '2023-04-01 04:45 PM', conversation: 'Agent performance review' },
      { id: 4, phoneNumber: '+1 (555) 852-9630', time: '2023-04-01 10:00 AM', conversation: 'Agent support request' },
      { id: 5, phoneNumber: '+1 (555) 753-9510', time: '2023-04-01 02:15 PM', conversation: 'Agent commission payout' },
    ]
  },
  {
    title: 'Buy',
    value: '',
    color: 'bg-teal-300',
    icon: <Briefcase className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: '+1 (555) 852-9630', time: '2023-04-01 11:00 AM', conversation: 'Property viewing request' },
      { id: 2, phoneNumber: '+1 (555) 741-9630', time: '2023-04-01 02:30 PM', conversation: 'Offer submission' },
      { id: 3, phoneNumber: '+1 (555) 963-7410', time: '2023-04-01 04:00 PM', conversation: 'Mortgage pre-approval' },
      { id: 4, phoneNumber: '+1 (555) 147-2580', time: '2023-04-01 09:45 AM', conversation: 'Home inspection scheduled' },
      { id: 5, phoneNumber: '+1 (555) 369-1470', time: '2023-04-01 03:15 PM', conversation: 'Closing process initiated' },
    ]
  },
  {
    title: 'Sell',
    value: '',
    color: 'bg-teal-300',
    icon: <BarChart className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: '+1 (555) 147-2580', time: '2023-04-01 10:00 AM', conversation: 'Property listing created' },
      { id: 2, phoneNumber: '+1 (555) 369-1470', time: '2023-04-01 01:45 PM', conversation: 'Open house scheduled' },
      { id: 3, phoneNumber: '+1 (555) 789-4560', time: '2023-04-01 03:30 PM', conversation: 'Offer received' },
      { id: 4, phoneNumber: '+1 (555) 951-7530', time: '2023-04-01 11:15 AM', conversation: 'Negotiation in progress' },
      { id: 5, phoneNumber: '+1 (555) 357-1590', time: '2023-04-01 02:00 PM', conversation: 'Sale finalized' },
    ]
  },
  {
    title: 'Booking',
    value: '',
    color: 'bg-teal-300',
    icon: <Calendar className="h-4 w-4 text-black" />,
    details: [
      { id: 1, phoneNumber: '+1 (555) 123-4567', time: '2023-04-01 09:00 AM', conversation: 'Property viewing booked' },
      { id: 2, phoneNumber: '+1 (555) 987-6543', time: '2023-04-01 11:30 AM', conversation: 'Home inspection scheduled' },
      { id: 3, phoneNumber: '+1 (555) 246-8135', time: '2023-04-01 02:00 PM', conversation: 'Agent meeting arranged' },
      { id: 4, phoneNumber: '+1 (555) 369-2580', time: '2023-04-01 04:30 PM', conversation: 'Open house reservation' },
      { id: 5, phoneNumber: '+1 (555) 159-7530', time: '2023-04-01 10:45 AM', conversation: 'Virtual tour booked' },
    ]
  },
]

export function StartPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Client 1</h1>
      <MetricsDashboard />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {boxesData.map((box) => (
          <DataBox  key={box.title} {...box} />
        ))}
      </div>
    </div>
  )
}

