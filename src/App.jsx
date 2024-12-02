import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Users, Code, Star } from 'lucide-react';

const Dashboard = () => {
  const data = [
    { name: 'Ene', projects: 4, commits: 45 },
    { name: 'Feb', projects: 3, commits: 52 },
    { name: 'Mar', projects: 5, commits: 78 },
    { name: 'Abr', projects: 6, commits: 91 },
  ];

  const stats = [
    {
      title: "Proyectos Totales",
      value: "18",
      icon: <Code className="h-6 w-6 text-blue-600" />,
      change: "+3 este mes"
    },
    {
      title: "Commits",
      value: "266",
      icon: <Activity className="h-6 w-6 text-green-600" />,
      change: "+91 este mes"
    },
    {
      title: "Estrellas GitHub",
      value: "24",
      icon: <Star className="h-6 w-6 text-yellow-600" />,
      change: "+5 este mes"
    },
    {
      title: "Seguidores",
      value: "156",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      change: "+12 este mes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Portfolio Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                {stat.icon}
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.change}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Actividad de Desarrollo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="projects" fill="#3b82f6" name="Proyectos" />
                <Bar dataKey="commits" fill="#10b981" name="Commits" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
