"use client";

import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
      <h2 className="text-h2 md:text-h2-tablet mb-8 text-center">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-body2 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-body2 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-body2 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-body2 font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-body2 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            required
          />
        </div>
        <Button type="submit" variant="default" size="lg" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}

