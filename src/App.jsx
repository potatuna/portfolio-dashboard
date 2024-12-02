import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, Users, ShoppingCart } from 'lucide-react';

const Dashboard = () => {
  const data = [
    { name: 'Ene', ventas: 45000, clientes: 120 },
    { name: 'Feb', ventas: 52000, clientes: 145 },
    { name: 'Mar', ventas: 78000, clientes: 180 },
    { name: 'Abr', ventas: 91000, clientes: 210 },
    { name: 'May', ventas: 85000, clientes: 195 },
    { name: 'Jun', ventas: 98000, clientes: 230 },
  ];

  const stats = [
    {
      title: "Ingresos Totales",
      value: "449,000€",
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      change: "+15% vs mes anterior"
    },
    {
      title: "Conversión",
      value: "3.2%",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      change: "+0.4% vs mes anterior"
    },
    {
      title: "Clientes Nuevos",
      value: "230",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      change: "+18% vs mes anterior"
    },
    {
      title: "Ticket Medio",
      value: "426€",
      icon: <ShoppingCart className="h-6 w-6 text-orange-600" />,
      change: "+5% vs mes anterior"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard de Ventas y Marketing</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  {stat.icon}
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.change}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Evolución de Ventas y Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="ventas" fill="#10b981" name="Ventas (€)" />
                  <Bar yAxisId="right" dataKey="clientes" fill="#3b82f6" name="Nuevos Clientes" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
