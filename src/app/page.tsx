import React from 'react';
import { ArrowRight, FileText, Zap, Shield, Star, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from "next/link";


export default function Home() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "This resume builder helped me land my dream job at a top tech company. The templates are incredibly professional!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "The best resume builder I've ever used. Clean, professional templates and an intuitive interface.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      content: "Got three interview calls within a week of using my new resume. Highly recommended!",
      rating: 5
    }
  ];

  const features = [
    {
      title: "AI-Powered Suggestions",
      description: "Get smart content suggestions tailored to your industry and role",
      icon: Zap
    },
    {
      title: "ATS-Optimized",
      description: "Ensure your resume passes Applicant Tracking Systems every time",
      icon: Shield
    },
    {
      title: "Premium Templates",
      description: "Access to 50+ professionally designed and HR-approved templates",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Create a Professional Resume</span>
              <span className="block text-[#509799]">in Minutes, Not Hours</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-lg text-gray-500 sm:max-w-3xl">
              Build your job-winning resume with our AI-powered builder. Professional templates, expert suggestions, and ATS-friendly formats to help you land your dream job.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href={'/build-resume/personal-info'}>
              <Button size="lg" variant={'cadetblue'} className="px-8 py-3">
                Build My Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button></Link>
              <Button size="lg" variant="outline" className="px-8 py-3">
                View Templates
              </Button>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-2 text-sm text-gray-500">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Free templates available</span>
              <span className="mx-2">•</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>ATS-friendly formats</span>
            </div>
          </div>
        </div>

        {/* Preview Image */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1 bg-gradient-to-b from-white to-gray-50"></div>
            <div className="flex-1 w-full bg-gradient-to-t from-blue-50 to-gray-50"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <img
              className="relative rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="/res.png"
              alt="Resume builder interface"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">100K+</div>
              <div className="mt-2 text-lg text-blue-100">Resumes Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">85%</div>
              <div className="mt-2 text-lg text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">4.9/5</div>
              <div className="mt-2 text-lg text-blue-100">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our comprehensive tools and features help you create the perfect resume.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-0 top-0 h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by Thousands
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              See what our users have to say about their experience
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Take the Next Step?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of professionals who've already built their perfect resume
            </p>
            <Button size="lg" className="mt-8 bg-white text-blue-600 hover:bg-blue-50">
              Start Building Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
