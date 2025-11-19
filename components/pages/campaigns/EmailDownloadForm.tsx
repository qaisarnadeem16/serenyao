"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle } from "lucide-react";

export default function EmailDownloadForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual email service integration
    setTimeout(() => {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Here you would:
      // 1. Send email to your email service (Mailchimp, ConvertKit, etc.)
      // 2. Trigger download link or send email with download
      // 3. Redirect to download page or show download link
      
      // For now, we'll just show success message
      // In production, you'd integrate with your email service and provide actual download
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg p-8 text-center border-2 border-secondary">
        <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
        <h4 className="text-h4 mb-4 text-primary">Thank You!</h4>
        <p className="text-body1 text-text mb-6">
          Check your email for your download link. We've sent exclusive extras and bonus content to <strong>{email}</strong>
        </p>
        <p className="text-body2 text-text">
          Can't find it? Check your spam folder or contact us for assistance.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 border border-gray">
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block text-body2 font-medium mb-2 text-primary">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-body1"
            required
          />
          <p className="text-body3 text-text mt-2">
            We'll send you a download link for your free extras. No spam, unsubscribe anytime.
          </p>
        </div>
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="w-full bg-accent text-primary hover:bg-secondary"
          disabled={isLoading}
        >
          {isLoading ? (
            "Processing..."
          ) : (
            <>
              <Download className="w-5 h-5 mr-2" />
              Get My Free Extras
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

