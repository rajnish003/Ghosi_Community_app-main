import React, { useState } from 'react';
import Card from "../components/Card"; 
import { BarChart, Users, FileWarning, Search } from "lucide-react";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      
      {/* Search Bar */}
      <div className="mb-6 flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Search user profiles..." 
          value={searchTerm} 
          onChange={handleSearch} 
          className="p-2 border rounded w-full md:w-1/3"
        />
        <Search size={24} className="text-gray-500" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Registered Users */}
        <Card className="p-4 flex items-center justify-between">
          <Users size={32} className="text-blue-500" />
          <div>
            <p className="text-xl font-semibold">100</p>
            <p className="text-gray-500">Total Registered Users</p>
          </div>
        </Card>

        {/* Match Analytics */}
        <Card className="p-4 flex items-center justify-between">
          <BarChart size={32} className="text-green-500" />
          <div>
            <p className="text-xl font-semibold">320</p>
            <p className="text-gray-500">New Matches</p>
          </div>
        </Card>

        {/* Reports & Complaints */}
        <Card className="p-4 flex items-center justify-between">
          <FileWarning size={32} className="text-red-500" />
          <div>
            <p className="text-xl font-semibold">15</p>
            <p className="text-gray-500">Pending Reports</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;