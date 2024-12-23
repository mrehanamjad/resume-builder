"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Globe, Copy, Check, AlertCircle, ArrowRight } from 'lucide-react';

const CustomResumeUrl = () => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [isChecking, setIsChecking] = React.useState(false);
  const baseUrl = 'resume.yoursite.com/';

  const {
    register,
    watch,
    formState: { errors, isValid },
    trigger
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      urlSlug: ''
    }
  });

  const urlSlug = watch('urlSlug');

  const validateUrl = async (value:any) => {
    if (value.length < 3) return 'URL must be at least 3 characters';
    if (!/^[a-z0-9-]+$/.test(value)) return 'Only lowercase letters, numbers, and hyphens allowed';
    setIsChecking(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsChecking(false);
    return true;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${baseUrl}${urlSlug}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex items-center gap-3 text-2xl font-bold mb-2">
            <Link className="w-6 h-6" />
            Create Your Personal Resume Link
          </div>
          <p className="text-blue-100">
            Choose a custom URL for easy sharing of your professional resume
          </p>
        </div>
        
        {/* Main Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <label htmlFor="custom-url" className="text-sm font-medium text-gray-700 block">
              Your Custom URL
            </label>
            
            <div className="relative">
              <div className="flex rounded-lg shadow-sm">
                <div className="flex items-center bg-gray-100 px-4 rounded-l-lg border border-r-0 border-gray-300">
                  <span className="text-gray-500 whitespace-nowrap">{baseUrl}</span>
                </div>
                <input
                  {...register('urlSlug', {
                    required: 'URL is required',
                    validate: validateUrl,
                    onChange: (e) => {
                      e.target.value = e.target.value.toLowerCase()
                        .replace(/[^a-z0-9-]/g, '-')
                        .replace(/-+/g, '-')
                        .replace(/^-+|-+$/g, '');
                      trigger('urlSlug');
                    }
                  })}
                  placeholder="your-name"
                  className="flex-1 px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              {isChecking && (
                <div className="absolute right-3 top-3">
                  <div className="w-5 h-5 border-t-2 border-blue-500 rounded-full animate-spin" />
                </div>
              )}
            </div>

            {errors.urlSlug && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 border border-red-200 text-red-600">
                <AlertCircle className="w-4 h-4" />
                <p className="text-sm">{errors.urlSlug.message}</p>
              </div>
            )}

            {urlSlug && isValid && !isChecking && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-green-50 border border-green-200 text-green-600">
                <Globe className="w-4 h-4" />
                <p className="text-sm">This URL is available and ready to use!</p>
              </div>
            )}
          </div>

          {urlSlug && isValid && !isChecking && (
            <div className="mt-6 animate-fade-in">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{baseUrl}{urlSlug}</span>
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                      isCopied 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy URL
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t">
            <p className="text-sm text-gray-600">
              Step 1 of 4: Create URL
            </p>
            <a
              href="/build-resume/personal-info"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                isValid && urlSlug
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              Next: Personal Info
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Globe className="w-4 h-4" />
            Your resume will be publicly accessible at this URL
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomResumeUrl;