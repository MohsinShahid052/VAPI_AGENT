import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ScrollArea } from '@/components/ui/scroll-area'

interface DataBoxProps {
  title: string
  value: string
  color: string
  icon: React.ReactNode
  details: Array<{
    id: number
    phoneNumber: string
    time: string
    conversation: string
  }>
}

export function DataBox({ title, value, color, icon, details }: DataBoxProps) {
  return (
    <Dialog>
      <DialogTrigger  asChild>
        <Card className={`${color} cursor-pointer transition-transform hover:scale-105`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            {icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl  font-bold">{value}</div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-zinc-700 sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className='text-white'>{title} Details</DialogTitle>
          <DialogDescription className='text-white'>A detailed view of {title} information.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] bg-zinc-800 w-full text-white rounded-md border p-4">
          <Table >
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] text-white">Phone Number</TableHead>
                <TableHead className="w-[150px] text-white">Time</TableHead>
                <TableHead className='text-white'>Conversation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {details.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.phoneNumber}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.conversation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

