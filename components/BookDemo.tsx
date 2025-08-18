'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Calendar, 
  Clock,
  Users, 
} from 'lucide-react';

interface BookDemoProps {
  children: React.ReactNode;
}

export default function BookDemo({ children }: BookDemoProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    program: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {      
      const payload = {
        formName: 'Consultation Booking',
        data: formData,
        email: formData.email,
        phone: formData.phone,
        status: 'new',
        source: 'Jabin International Website',
        tags: 'consultation-request'
      };
            
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      
      // API returns the created record directly, not wrapped in success object
      if (result.id) {
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setOpen(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            organization: '',
            role: '',
            program: '',
            message: ''
          });
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Full error object:', error);
      
      let errorMessage = 'Failed to submit demo request. Please try again.';
      
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        errorMessage = 'Network error: Unable to connect to the server. This might be due to CORS restrictions or network connectivity issues.';
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={handleOpenDialog}>
        {children}
      </DialogTrigger>
      <DialogContent className="w-screen h-screen max-w-none max-h-none m-0 p-0 bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="min-h-screen p-6 sm:p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            <DialogHeader className="text-left mb-8">
              <DialogTitle className="flex items-center gap-2 text-2xl sm:text-3xl text-gray-900 dark:text-white">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                Book a Consultation
              </DialogTitle>
              <DialogDescription className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
                Schedule a free consultation to see how Jabin International can help transform your business with our comprehensive solutions.
              </DialogDescription>
            </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-green-800 dark:text-green-300 mb-3">Consultation Booked Successfully!</h3>
            <p className="text-base sm:text-lg text-green-600 dark:text-green-400">We&apos;ll contact you within 24 hours to schedule your free consultation session.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Mobile: Single column, Desktop: Two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-1">
                <Label htmlFor="name" className="text-base font-medium text-gray-900 dark:text-gray-100">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="mt-2 h-12 text-base bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div className="lg:col-span-1">
                <Label htmlFor="email" className="text-base font-medium text-gray-900 dark:text-gray-100">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="mt-2 h-12 text-base bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-1">
                <Label htmlFor="phone" className="text-base font-medium text-gray-900 dark:text-gray-100">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9876543210"
                  className="mt-2 h-12 text-base bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="lg:col-span-1">
                <Label htmlFor="role" className="text-base font-medium text-gray-900 dark:text-gray-100">Your Role</Label>
                <Select value={formData.role} onValueChange={(value) => handleSelectChange('role', value)}>
                  <SelectTrigger className="mt-2 h-12 text-base bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                    <SelectItem value="business-owner" className="text-gray-900 dark:text-gray-100">Business Owner</SelectItem>
                    <SelectItem value="ceo" className="text-gray-900 dark:text-gray-100">CEO/Founder</SelectItem>
                    <SelectItem value="manager" className="text-gray-900 dark:text-gray-100">Manager</SelectItem>
                    <SelectItem value="marketing" className="text-gray-900 dark:text-gray-100">Marketing Professional</SelectItem>
                    <SelectItem value="entrepreneur" className="text-gray-900 dark:text-gray-100">Entrepreneur</SelectItem>
                    <SelectItem value="freelancer" className="text-gray-900 dark:text-gray-100">Freelancer</SelectItem>
                    <SelectItem value="other" className="text-gray-900 dark:text-gray-100">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="organization" className="text-base font-medium text-gray-900 dark:text-gray-100">Business/Organization *</Label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="Your business or organization name"
                className="mt-2 h-12 text-base bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                required
              />
            </div>

            <div>
              <Label htmlFor="program" className="text-base font-medium text-gray-900 dark:text-gray-100">Service of Interest</Label>
              <Select value={formData.program} onValueChange={(value) => handleSelectChange('program', value)}>
                <SelectTrigger className="mt-2 h-12 text-base bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                  <SelectItem value="web-solutions" className="text-gray-900 dark:text-gray-100">Jabin Web Solutions</SelectItem>
                  <SelectItem value="store-products" className="text-gray-900 dark:text-gray-100">Jabin Store Products</SelectItem>
                  <SelectItem value="consultancy" className="text-gray-900 dark:text-gray-100">Business Consultancy</SelectItem>
                  <SelectItem value="training" className="text-gray-900 dark:text-gray-100">Technology Training</SelectItem>
                  <SelectItem value="all-services" className="text-gray-900 dark:text-gray-100">All Services</SelectItem>
                  <SelectItem value="custom" className="text-gray-900 dark:text-gray-100">Custom Solution</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-base font-medium text-gray-900 dark:text-gray-100">Message (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your business needs or questions..."
                rows={4}
                className="mt-2 text-base bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 resize-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-600 dark:text-red-400 text-base">{error}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="w-full sm:flex-1 h-12 text-base border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full sm:flex-1 h-12 text-base bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                disabled={isSubmitting}
              >
                <Clock className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Book Consultation'}
              </Button>
            </div>
          </form>
        )}

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 text-lg">What to expect:</h4>
              <ul className="text-base text-blue-700 dark:text-blue-300 mt-2 space-y-2">
                <li>• 30-minute free consultation session</li>
                <li>• Service overview and customization options</li>
                <li>• Business strategy and solution discussion</li>
                <li>• Q&A with our business specialists</li>
              </ul>
            </div>
          </div>
        </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
