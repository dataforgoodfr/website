'use client';

import React, { useState, useId } from 'react';
import { useTranslations } from 'next-intl';
import { Input, Checkbox, Button } from '@/components/atoms';

export type NewsletterFormProps = {
  className?: string;
  formId?: string;
};

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  className,
  formId,
  ...props
}) => {
  const t = useTranslations('components.newsletterForm');
  const generatedId = useId();
  const uniqueId = formId || generatedId;
  
  const [email, setEmail] = useState('');
  const [selectedNewsletters, setSelectedNewsletters] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({
    type: null,
    text: ''
  });
  const [errors, setErrors] = useState<{
    email?: string;
    newsletters?: string;
  }>({});

  // Available newsletter lists
  const newsletterLists = [
    { id: '10', name: t('newsletterLists.iaGenerative') },
    { id: '13', name: t('newsletterLists.pinkBombs') },
    { id: '15', name: t('newsletterLists.dataForGood') }
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: { email?: string; newsletters?: string } = {};

    // Validate email
    if (!email.trim()) {
      newErrors.email = t('emailRequiredError');
    } else if (!validateEmail(email)) {
      newErrors.email = t('emailInvalidError');
    }

    // Validate newsletter selection
    if (selectedNewsletters.length === 0) {
      newErrors.newsletters = t('newsletterRequiredError');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: null, text: '' });

    try {
      // Use environment variable for Brevo API key
      const brevoApiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;
      if (!brevoApiKey) {
        throw new Error('Brevo API key not configured');
      }

      console.log("selectedNewsletters", selectedNewsletters);

      // Prepare data for Brevo API
      const contactData = {
        email: email,
        listIds: selectedNewsletters.map(id => parseInt(id)), // Convert to numbers
        updateEnabled: true
      };

      // Use Brevo API REST endpoint
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': brevoApiKey,
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: t('successMessage') });
        setEmail('');
        setSelectedNewsletters([]);
        setErrors({});
      } else {
        const errorData = await response.json();
        console.error("Brevo API error:", errorData);
        setMessage({ type: 'error', text: t('errorMessage') });
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setMessage({ type: 'error', text: t('errorMessage') });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: undefined }));
    }
  };

  const handleNewsletterChange = (newsletterId: string) => {
    setSelectedNewsletters(prev => 
      prev.includes(newsletterId) 
        ? prev.filter(id => id !== newsletterId)
        : [...prev, newsletterId]
    );
    if (errors.newsletters) {
      setErrors(prev => ({ ...prev, newsletters: undefined }));
    }
  };

  return (
    <div className={className} {...props}>
      <div className="max-w-md mx-auto">
        {/* Error Message */}
        {message.type === 'error' && (
          <div 
            id={`newsletter-error-${uniqueId}`}
            className="mb-4 p-4 text-red-800 bg-red-100 border border-red-300 rounded-md"
            role="alert"
            aria-live="polite"
          >
            {message.text}
          </div>
        )}

        {/* Success Message */}
        {message.type === 'success' && (
          <div 
            id={`newsletter-success-${uniqueId}`}
            className="mb-4 p-4 text-green-800 bg-green-100 border border-green-300 rounded-md"
            role="alert"
            aria-live="polite"
          >
            {message.text}
          </div>
        )}

        <form id={`newsletter-form-${uniqueId}`} onSubmit={handleSubmit} noValidate>
          {/* Newsletter Selection Fieldset */}
          <fieldset className="mb-6">
            <legend className="text-sm font-medium text-gray-700 mb-3">
              {t('newsletterChoice')}
            </legend>
            <div className="space-y-3">
              {newsletterLists.map((newsletter) => (
                <div key={newsletter.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={`newsletter-${newsletter.id}-${uniqueId}`}
                    name={`newsletters-${uniqueId}`}
                    value={newsletter.id}
                    checked={selectedNewsletters.includes(newsletter.id)}
                    onChange={() => handleNewsletterChange(newsletter.id)}
                    error={!!errors.newsletters}
                    errorMessage={errors.newsletters}
                  />
                  <label 
                    htmlFor={`newsletter-${newsletter.id}-${uniqueId}`}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {newsletter.name}
                  </label>
                </div>
              ))}
            </div>
            {errors.newsletters && (
              <div id={`newsletter-error-${uniqueId}`} className="mt-2 text-sm text-red-600" role="alert">
                {errors.newsletters}
              </div>
            )}
          </fieldset>

          {/* Email Input */}
          <div className="mb-6">
            <label 
              htmlFor={`email-${uniqueId}`}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {t('emailLabel')}
            </label>
            <Input
              id={`email-${uniqueId}`}
              name="EMAIL"
              type="email"
              value={email}
              placeholder={t('emailPlaceholder')}
              required
              onChange={handleEmailChange}
              error={!!errors.email}
              errorMessage={errors.email}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              hasArrow={false}
            >
              {isSubmitting ? t('submitButtonLoading') : t('submitButton')}
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
