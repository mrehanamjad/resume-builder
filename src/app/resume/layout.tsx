'use client'
import React, { useState } from 'react';
import { 
  Download, 
  Share2, 
  Pencil, 
  Copy,
  Layout,
  ChevronRight,
  ChevronLeft,
  Check,
  Menu,
  X,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ResumeShowcase = ({children}:{children:React.ReactNode}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scale, setScale] = useState(1);

  const templates = [
    { id: 1, name: 'Professional', color: 'bg-blue-100' },
    { id: 2, name: 'Modern', color: 'bg-green-100' },
    { id: 3, name: 'Creative', color: 'bg-purple-100' },
    { id: 4, name: 'Minimal', color: 'bg-gray-100' },
  ];

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleZoom = (direction:any) => {
    setScale(prev => direction === 'in' ? Math.min(prev + 0.1, 1.5) : Math.max(prev - 0.1, 0.5));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Mobile Header */}
        <div className="flex items-center justify-between lg:hidden mb-4">
          <h1 className="text-xl font-bold text-gray-900">My Resume</h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Action Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="space-y-4 mt-12">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Link href="/edit-resume" className="block w-full">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Pencil className="h-4 w-4" />
                    Edit Resume
                  </Button>
                </Link>

                {/* Mobile Template Selection */}
                <div className="mt-8">
                  <h2 className="font-semibold text-gray-900 mb-4">Templates</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {templates.map((template, index) => (
                      <div
                        key={template.id}
                        className={`p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          currentTemplate === index
                            ? 'border-2 border-blue-500'
                            : 'border border-gray-200'
                        }`}
                        onClick={() => setCurrentTemplate(index)}
                      >
                        <div className={`${template.color} rounded-md h-20 mb-2`}></div>
                        <p className="text-sm font-medium text-gray-700">{template.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden lg:flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Professional Resume</h1>
            <p className="text-gray-600">Last edited: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              
              {showShareOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Link
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
            
            <Button
              variant="outline"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            
            <Link href="/edit-resume">
              <Button className="flex items-center gap-2">
                <Pencil className="h-4 w-4" />
                Edit Resume
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Resume Preview with Zoom Controls */}
          <div className="flex-grow">
            <div className="sticky top-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                <div className="flex justify-end gap-2 p-2 border-b">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleZoom('out')}
                    className="p-1"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleZoom('in')}
                    className="p-1"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4 overflow-auto">
                  <div 
                    style={{ 
                      transform: `scale(${scale})`,
                      transformOrigin: 'top center',
                      minHeight: '842px',
                      width: '100%'
                    }}
                    className="transition-transform duration-200"
                  >
                    {/* Your resume content goes here */}
                    <div className="text-center text-gray-500">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Templates Sidebar */}
          <div className="hidden lg:block lg:w-64">
            <div className="sticky top-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-gray-900">Templates</h2>
                  <Layout className="h-4 w-4 text-gray-600" />
                </div>

                <div className="space-y-3">
                  {templates.map((template, index) => (
                    <div
                      key={template.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        currentTemplate === index
                          ? 'border-2 border-blue-500'
                          : 'border border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setCurrentTemplate(index)}
                    >
                      <div className={`${template.color} rounded-md h-24 mb-2`}></div>
                      <p className="text-sm font-medium text-gray-700">{template.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Template Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden">
          <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentTemplate(Math.max(0, currentTemplate - 1))}
              disabled={currentTemplate === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-600">
              Template {currentTemplate + 1} of {templates.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentTemplate(Math.min(templates.length - 1, currentTemplate + 1))}
              disabled={currentTemplate === templates.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeShowcase;