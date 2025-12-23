import { PurchaseOrder } from '../App';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Eye, Edit, MoreHorizontal, TrendingUp } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface POTableProps {
  orders: PurchaseOrder[];
  viewType: 'po' | 'container';
}

const statusConfig = {
  pending: { label: 'Pending', className: 'bg-orange-100 text-orange-800 hover:bg-orange-100' },
  approved: { label: 'Approved', className: 'bg-green-100 text-green-800 hover:bg-green-100' },
  completed: { label: 'Completed', className: 'bg-blue-100 text-blue-800 hover:bg-blue-100' },
  rejected: { label: 'Rejected', className: 'bg-red-100 text-red-800 hover:bg-red-100' },
  draft: { label: 'Draft', className: 'bg-gray-100 text-gray-800 hover:bg-gray-100' },
};

export function POTable({ orders, viewType }: POTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
        <h2 className="text-white">
          {viewType === 'po' ? 'P O/Containers List' : 'Container List'}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-emerald-500 hover:bg-emerald-500">
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">PO</TableHead>
              <TableHead className="text-white">Cont #</TableHead>
              <TableHead className="text-white">Order #</TableHead>
              <TableHead className="text-white">No. of Items</TableHead>
              <TableHead className="text-white">Total CBM</TableHead>
              <TableHead className="text-white">Status in %</TableHead>
              <TableHead className="text-white">CBM Completed</TableHead>
              <TableHead className="text-right text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                  No purchase orders found
                </TableCell>
              </TableRow>
            ) : (
              orders.map((order, index) => (
                <TableRow 
                  key={order.id} 
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                >
                  <TableCell>
                    <span className="text-gray-900">{formatDate(order.date)}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-gray-900">{order.poNumber}</span>
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {order.containerNumber || '-'}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {order.orderNumber || '-'}
                  </TableCell>
                  <TableCell className="text-gray-900 text-center">{order.items}</TableCell>
                  <TableCell className="text-gray-900">
                    {order.totalCBM?.toFixed(3) || '-'}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900">{order.statusPercent || 0}%</span>
                      </div>
                      <Progress value={order.statusPercent || 0} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      <span className="text-gray-900">{order.cbmCompleted || 0}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}