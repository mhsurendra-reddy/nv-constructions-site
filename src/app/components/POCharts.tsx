import { PurchaseOrder } from '../App';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface POChartsProps {
  orders: PurchaseOrder[];
}

export function POCharts({ orders }: POChartsProps) {
  // Status distribution data
  const statusData = [
    { name: 'Pending', value: orders.filter(o => o.status === 'pending').length, color: '#f97316' },
    { name: 'Approved', value: orders.filter(o => o.status === 'approved').length, color: '#22c55e' },
    { name: 'Completed', value: orders.filter(o => o.status === 'completed').length, color: '#3b82f6' },
    { name: 'Rejected', value: orders.filter(o => o.status === 'rejected').length, color: '#ef4444' },
    { name: 'Draft', value: orders.filter(o => o.status === 'draft').length, color: '#6b7280' },
  ];

  // Category spending data
  const categoryMap = new Map<string, number>();
  orders.forEach(order => {
    const current = categoryMap.get(order.category) || 0;
    categoryMap.set(order.category, current + order.amount);
  });
  
  const categoryData = Array.from(categoryMap.entries())
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount);

  // Monthly trend data (mock data based on dates)
  const monthlyMap = new Map<string, { amount: number; count: number }>();
  orders.forEach(order => {
    const date = new Date(order.date);
    const monthKey = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const current = monthlyMap.get(monthKey) || { amount: 0, count: 0 };
    monthlyMap.set(monthKey, { 
      amount: current.amount + order.amount,
      count: current.count + 1,
    });
  });

  const monthlyData = Array.from(monthlyMap.entries())
    .map(([month, data]) => ({ month, amount: data.amount / 1000, count: data.count }))
    .reverse();

  // Top vendors by spending
  const vendorMap = new Map<string, number>();
  orders.forEach(order => {
    const current = vendorMap.get(order.vendor) || 0;
    vendorMap.set(order.vendor, current + order.amount);
  });
  
  const topVendors = Array.from(vendorMap.entries())
    .map(([vendor, amount]) => ({ vendor, amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 6);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Monthly Spending Trend */}
      <Card className="lg:col-span-2 shadow-sm">
        <CardHeader>
          <CardTitle>Monthly Spending Trend</CardTitle>
          <CardDescription>Purchase order amounts over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" label={{ value: 'Amount ($K)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                formatter={(value: number) => `$${value}K`}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="amount" 
                stroke="#3b82f6" 
                strokeWidth={2}
                name="Amount"
                dot={{ fill: '#3b82f6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Spending */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Spending by Category</CardTitle>
          <CardDescription>Total spending across categories</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" angle={-45} textAnchor="end" height={100} />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                formatter={(value: number) => `$${value.toLocaleString()}`}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Bar dataKey="amount" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Status Distribution */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Order Status Distribution</CardTitle>
          <CardDescription>Breakdown of purchase orders by status</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Vendors */}
      <Card className="lg:col-span-2 shadow-sm">
        <CardHeader>
          <CardTitle>Top Vendors by Spending</CardTitle>
          <CardDescription>Highest spending vendors</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topVendors} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="vendor" type="category" stroke="#6b7280" width={120} />
              <Tooltip 
                formatter={(value: number) => `$${value.toLocaleString()}`}
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Bar dataKey="amount" fill="#10b981" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}