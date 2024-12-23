// 'use client'
// import React, { useState } from 'react';
// import { 
//   Download, 
//   Share2, 
//   Pencil, 
//   Copy,
//   Layout,
//   ChevronRight,
//   ChevronLeft,
//   Check
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// const ResumeShowcase = () => {
//   const [currentTemplate, setCurrentTemplate] = useState(0);
//   const [showShareOptions, setShowShareOptions] = useState(false);
//   const [copied, setCopied] = useState(false);

//   // Sample templates - replace with your actual templates
//   const templates = [
//     { id: 1, name: 'Professional', color: 'bg-blue-100' },
//     { id: 2, name: 'Modern', color: 'bg-green-100' },
//     { id: 3, name: 'Creative', color: 'bg-purple-100' },
//     { id: 4, name: 'Minimal', color: 'bg-gray-100' },
//   ];

//   const handleShare = () => {
//     setShowShareOptions(!showShareOptions);
//   };

//   const handleCopyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleDownload = () => {
//     // Implement download functionality
//     console.log('Downloading resume...');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 pt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Top Action Bar */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">My Professional Resume</h1>
//             <p className="text-gray-600">Last edited: {new Date().toLocaleDateString()}</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <Button
//                 variant="outline"
//                 className="flex items-center gap-2"
//                 onClick={handleShare}
//               >
//                 <Share2 className="h-4 w-4" />
//                 Share
//               </Button>
              
//               {showShareOptions && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
//                   <button
//                     className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     onClick={handleCopyLink}
//                   >
//                     {copied ? (
//                       <>
//                         <Check className="h-4 w-4 mr-2" />
//                         Copied!
//                       </>
//                     ) : (
//                       <>
//                         <Copy className="h-4 w-4 mr-2" />
//                         Copy Link
//                       </>
//                     )}
//                   </button>
//                 </div>
//               )}
//             </div>
            
//             <Button
//               variant="outline"
//               className="flex items-center gap-2"
//               onClick={handleDownload}
//             >
//               <Download className="h-4 w-4" />
//               Download PDF
//             </Button>
            
//             <Link href="/edit-resume">
//               <Button className="flex items-center gap-2">
//                 <Pencil className="h-4 w-4" />
//                 Edit Resume
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Main Content Area */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Resume Preview */}
//           <div className="flex-grow bg-white rounded-lg shadow-sm border border-gray-200 p-8 min-h-[842px] relative">
//             {/* A4 size container for resume */}
//             <div className="w-full h-full">
//               {/* Your resume content goes here */}
//               <div className="text-center text-gray-500">
//                 [Resume Content Will Be Displayed Here]
//               </div>
//             </div>
//           </div>

//           {/* Templates Sidebar */}
//           <div className="lg:w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="font-semibold text-gray-900">Templates</h2>
//               <Layout className="h-4 w-4 text-gray-600" />
//             </div>

//             <div className="space-y-3">
//               {templates.map((template, index) => (
//                 <div
//                   key={template.id}
//                   className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
//                     currentTemplate === index
//                       ? 'border-2 border-blue-500'
//                       : 'border border-gray-200 hover:border-blue-300'
//                   }`}
//                   onClick={() => setCurrentTemplate(index)}
//                 >
//                   <div className={`${template.color} rounded-md h-24 mb-2`}></div>
//                   <p className="text-sm font-medium text-gray-700">{template.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Template Navigation (Mobile) */}
//         <div className="lg:hidden flex justify-center items-center gap-4 mt-6">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setCurrentTemplate(Math.max(0, currentTemplate - 1))}
//             disabled={currentTemplate === 0}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           <span className="text-sm text-gray-600">
//             Template {currentTemplate + 1} of {templates.length}
//           </span>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setCurrentTemplate(Math.min(templates.length - 1, currentTemplate + 1))}
//             disabled={currentTemplate === templates.length - 1}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeShowcase;