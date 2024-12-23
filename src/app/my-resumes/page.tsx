'use client'
import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Search,
  Plus,
  Pencil,
  Trash2,
  Filter,
  ArrowUpDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const MyResumes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('lastEdited');
  const [sortOrder, setSortOrder] = useState('desc');

  // Sample data - replace with real data from your backend
  const resumes = [
    { 
      id: 1, 
      title: 'Software Developer Resume', 
      lastEdited: '2024-03-20', 
      views: 23, 
      downloads: 5,
      template: 'Professional',
      status: 'Complete'
    },
    { 
      id: 2, 
      title: 'Product Manager Resume', 
      lastEdited: '2024-03-15', 
      views: 15, 
      downloads: 3,
      template: 'Modern',
      status: 'In Progress'
    },
    { 
      id: 3, 
      title: 'UX Designer Resume', 
      lastEdited: '2024-03-10', 
      views: 7, 
      downloads: 4,
      template: 'Creative',
      status: 'Complete'
    },
  ];

  const handleSort = (field:any) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const handleDelete = (id:any) => {
    // Implement delete functionality
    console.log('Deleting resume:', id);
  };

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Resumes</h1>
            <p className="text-gray-600">Manage and organize all your resumes</p>
          </div>
          <Link href="/create-resume">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create New Resume
            </Button>
          </Link>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search resumes..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4" />
                Sort
              </Button>
            </div>
          </div>
        </div>

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumes.map((resume) => (
            <div 
              key={resume.id} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-gray-100 rounded">
                    <FileText className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{resume.title}</h3>
                    <p className="text-sm text-gray-500">Template: {resume.template}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(resume.status)}`}>
                  {resume.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>Last edited: {new Date(resume.lastEdited).toLocaleDateString()}</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{resume.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{resume.downloads}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    className="p-1 hover:bg-gray-100 rounded transition-colors duration-200" 
                    onClick={() => handleDelete(resume.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                  <Link href={`/edit-resume/${resume.id}`}>
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors duration-200">
                      <Pencil className="h-4 w-4 text-gray-600" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyResumes;