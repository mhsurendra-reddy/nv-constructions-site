import { PurchaseOrder } from '../App';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TrendingUp, TrendingDown, ShoppingCart, CheckCircle, Clock, XCircle, FileText, Package } from 'lucide-react';

interface DashboardStatsProps {
  orders: PurchaseOrder[];
}

export function DashboardStats({ orders }: DashboardStatsProps) {
  const totalAmount = orders.reduce((sum, po) => sum + po.amount, 0);
  const pendingOrders = orders.filter(po => po.status === 'pending').length;
  const approvedOrders = orders.filter(po => po.status === 'approved').length;
  const completedOrders = orders.filter(po => po.status === 'completed').length;
  const rejectedOrders = orders.filter(po => po.status === 'rejected').length;
  const draftOrders = orders.filter(po => po.status === 'draft').length;

  const pendingAmount = orders
    .filter(po => po.status === 'pending')
    .reduce((sum, po) => sum + po.amount, 0);

  const approvedAmount = orders
    .filter(po => po.status === 'approved')
    .reduce((sum, po) => sum + po.amount, 0);

  const totalItems = orders.reduce((sum, po) => sum + po.items, 0);

  const stats = [
    {
      title: 'Total Orders',
      value: orders.length,
      subtitle: `$${totalAmount.toLocaleString()}`,
      icon: ShoppingCart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: '+12.5%',
      trendUp: true,
    },
    {
      title: 'Total Items',
      value: totalItems,
      subtitle: 'Across all orders',
      icon: Package,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: '+8.2%',
      trendUp: true,
    },
    {
      title: 'Pending Review',
      value: pendingOrders,
      subtitle: `$${pendingAmount.toLocaleString()}`,
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      trend: '-3.1%',
      trendUp: false,
    },
    {
      title: 'Approved',
      value: approvedOrders,
      subtitle: `$${approvedAmount.toLocaleString()}`,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: '+15.3%',
      trendUp: true,
    },
    {
      title: 'Completed',
      value: completedOrders,
      subtitle: `${((completedOrders / orders.length) * 100).toFixed(0)}% completion rate`,
      icon: TrendingUp,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      trend: '+5.7%',
      trendUp: true,
    },
    {
      title: 'Rejected',
      value: rejectedOrders,
      subtitle: rejectedOrders > 0 ? 'Needs attention' : 'All good',
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      trend: rejectedOrders > 0 ? '+2' : '0',
      trendUp: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-gray-600">{stat.title}</CardTitle>
            <div className={`${stat.bgColor} p-2.5 rounded-lg shadow-sm`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 mb-1">{stat.value}</div>
            <div className="flex items-center justify-between">
              <p className="text-gray-500">{stat.subtitle}</p>
              <span className={`flex items-center gap-1 ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trendUp ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span className="text-xs">{stat.trend}</span>
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}