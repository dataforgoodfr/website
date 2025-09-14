'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export type NewsletterFormProps = {
  className?: string;
};

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  className,
  ...props
}) => {
  const t = useTranslations('components.newsletterForm');
  
  const [email, setEmail] = useState('');
  const [selectedLists, setSelectedLists] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string }>({
    type: null,
    text: ''
  });
  const [isListMenuOpen, setIsListMenuOpen] = useState(false);

  // Available lists
  const availableLists = [
    { id: '10', name: 'IA GENERATIVE' },
    { id: '13', name: 'PinkBombs' }
  ];

  // Load external styles and scripts
  useEffect(() => {
    // Load Brevo styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://sibforms.com/forms/end-form/build/sib-styles.css';
    document.head.appendChild(link);

    // Set up global variables for Brevo
    (window as any).REQUIRED_CODE_ERROR_MESSAGE = t('requiredCodeErrorMessage');
    (window as any).LOCALE = 'fr';
    (window as any).EMAIL_INVALID_MESSAGE = (window as any).SMS_INVALID_MESSAGE = t('emailInvalidMessage');
    (window as any).REQUIRED_ERROR_MESSAGE = t('requiredErrorMessage');
    (window as any).GENERIC_INVALID_MESSAGE = t('genericInvalidMessage');
    
    (window as any).translation = {
      common: {
        selectedList: t('translation.selectedList'),
        selectedLists: t('translation.selectedLists'),
        selectedOption: t('translation.selectedOption'),
        selectedOptions: t('translation.selectedOptions'),
      }
    };

    (window as any).AUTOHIDE = Boolean(0);

    // Load Brevo script
    const script = document.createElement('script');
    script.src = 'https://sibforms.com/forms/end-form/build/main.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: null, text: '' });

    try {
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('email_address_check', '');
      formData.append('locale', 'fr');
      
      // Add selected lists
      selectedLists.forEach(listId => {
        formData.append('lists_25[]', listId);
      });

      const response = await fetch(
        'https://ffb35838.sibforms.com/serve/MUIFAANCWWvajTNYJCaDvtCrXOv3CsJwR_2ytznvYD15vPAnwawJiT1Dm2gS1aEMEsSMlh6Yr1nC0MU0TLLLUcH21RoxVkGmHRQdKrW0gEuIP1HBeSD7YEaitnoh6mvTQI-DBFqhSkF_p730XmHP7L0AnsDAJ80JNNUGy6x9IF0YuDxsM_fe_kg9cQDujhxZ6dFP96yw36T4AsX6',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        setMessage({ type: 'success', text: t('successMessage') });
        setEmail('');
        setSelectedLists([]);
      } else {
        setMessage({ type: 'error', text: t('errorMessage') });
      }
    } catch (error) {
      setMessage({ type: 'error', text: t('errorMessage') });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleListToggle = (listId: string) => {
    setSelectedLists(prev => 
      prev.includes(listId) 
        ? prev.filter(id => id !== listId)
        : [...prev, listId]
    );
  };

  const handleSelectAll = () => {
    setSelectedLists(availableLists.map(list => list.id));
  };

  const handleClearAll = () => {
    setSelectedLists([]);
  };

  const handleApplySelection = () => {
    setIsListMenuOpen(false);
  };

  const getDisplayText = () => {
    if (selectedLists.length === 0) {
      return t('noListSelected');
    }
    if (selectedLists.length === 1) {
      const list = availableLists.find(l => l.id === selectedLists[0]);
      return list?.name || t('oneListSelected');
    }
    return t('multipleListsSelected', { count: selectedLists.length });
  };

  return (
    <div className={className} {...props}>
      {/* Newsletter Form */}
      <div className="sib-form text-center bg-transparent">
        <div id="sib-form-container" className="sib-form-container">
          {/* Error Message */}
          {message.type === 'error' && (
            <div 
              id="error-message" 
              className="sib-form-message-panel text-base text-left font-primary text-[#661d1d] bg-[#ffeded] rounded border-[#ff4949] max-w-[540px]"
            >
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                  <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  {message.text}
                </span>
              </div>
            </div>
          )}

          {/* Success Message */}
          {message.type === 'success' && (
            <div 
              id="success-message" 
              className="sib-form-message-panel text-base text-left font-primary text-[#085229] bg-[#e7faf0] rounded border-[#13ce66] max-w-[540px]"
            >
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  {message.text}
                </span>
              </div>
            </div>
          )}

          {/* Form Container */}
          <div 
            id="sib-container" 
            className="sib-container--large sib-container--horizontal text-center bg-transparent max-w-[540px] rounded border-0 border-[#C0CCD9] border-solid ltr"
          >
            <form 
              id="sib-form" 
              method="POST" 
              action="https://ffb35838.sibforms.com/serve/MUIFAANCWWvajTNYJCaDvtCrXOv3CsJwR_2ytznvYD15vPAnwawJiT1Dm2gS1aEMEsSMlh6Yr1nC0MU0TLLLUcH21RoxVkGmHRQdKrW0gEuIP1HBeSD7YEaitnoh6mvTQI-DBFqhSkF_p730XmHP7L0AnsDAJ80JNNUGy6x9IF0YuDxsM_fe_kg9cQDujhxZ6dFP96yw36T4AsX6" 
              data-type="subscription"
              onSubmit={handleSubmit}
            >
              {/* Lists Selection */}
              <div className="py-2">
                <div className="sib-multiselect sib-form--blockPosition sib-form-block relative" data-required="true">
                  <div className="form__entry">
                    <div className="form__label-row form__label-row--horizontal">
                      <div className="entry__field">
                        <div 
                          className="input input_display input--multiselect input--centerText pr-5 cursor-pointer relative"
                          onClick={() => setIsListMenuOpen(!isListMenuOpen)}
                        >
                          {getDisplayText()}
                        </div>
                        <input 
                          id="lists" 
                          className="input" 
                          name="lists_25[]" 
                          type="hidden" 
                          value={JSON.stringify(selectedLists)} 
                        />
                      </div>
                    </div>
                    <label 
                      className="entry__error entry__error--primary text-base text-left font-primary text-[#661d1d] bg-[#ffeded] rounded border-[#ff4949]"
                    />
                  </div>
                  
                  {isListMenuOpen && (
                    <div className="sib-menu absolute top-full left-0 right-0 bg-white border border-gray-300 rounded shadow-lg z-[1000] max-h-[200px] overflow-y-auto text-left !block">
                      <div className="sib-menu__select sib-menu__selectTextAlign py-2 px-3 border-b border-gray-200 flex gap-2">
                        <button 
                          type="button" 
                          className="clickable_link sib-menu__select-all-button bg-none border-none text-[#2BB2FC] cursor-pointer underline text-xs"
                          onClick={handleSelectAll}
                        >
                          {t('selectAll')}
                        </button>
                        <span className="sib-menu__separator">/</span>
                        <button 
                          type="button" 
                          className="clickable_link sib-menu__clear-button bg-none border-none text-[#2BB2FC] cursor-pointer underline text-xs"
                          onClick={handleClearAll}
                        >
                          {t('clear')}
                        </button>
                      </div>
                      <ul className="sib-menu__item-list list-none m-0 p-0">
                        {availableLists.map((list) => (
                          <li key={list.id} className="sib-menu__item py-2 px-3 border-b border-gray-100 last:border-b-0">
                            <div className="entry__choice" style={{ textIndent: 0 }}>
                              <label className="sib-multiselect__label flex items-center cursor-pointer text-sm">
                                <input 
                                  type="checkbox" 
                                  className="input_replaced" 
                                  data-value={list.id}
                                  checked={selectedLists.includes(list.id)}
                                  onChange={() => handleListToggle(list.id)}
                                />
                                <span className={`w-4 h-4 border border-gray-300 rounded mr-2 flex items-center justify-center ${selectedLists.includes(list.id) ? 'after:content-["✓"] after:text-black after:text-xs after:font-bold' : ''}`}></span>
                                <span className="sib-multiselect__label-text">{list.name}</span>
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="sib-menu__apply py-2 px-3 flex justify-between border-t border-gray-200">
                        <button 
                          type="button" 
                          className="sib-menu__cancel-button clickable_link bg-none border-none text-[#2BB2FC] cursor-pointer underline text-xs"
                          onClick={() => setIsListMenuOpen(false)}
                        >
                          {t('cancel')}
                        </button>
                        <button 
                          type="button" 
                          className="sib-menu__apply-button clickable_button bg-black text-white border-none py-1 px-3 rounded cursor-pointer text-xs"
                          onClick={handleApplySelection}
                        >
                          {t('apply')}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="py-2">
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row form__label-row--horizontal">
                      <div className="entry__field">
                        <input 
                          className="input" 
                          type="email" 
                          id="EMAIL" 
                          name="EMAIL" 
                          autoComplete="off" 
                          placeholder={t('emailPlaceholder')} 
                          data-required="true" 
                          required 
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                    </div>
                    <label 
                      className="entry__error entry__error--primary text-base text-left font-primary text-[#661d1d] bg-[#ffeded] rounded border-[#ff4949]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="py-2">
                <div className="sib-form-block text-left">
                  <button 
                    className="sib-form-block__button sib-form-block__button-with-loader text-base text-left font-bold font-primary text-white bg-black border-0"
                    form="sib-form" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <svg 
                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" 
                      viewBox="0 0 512 512" 
                    >
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    {isSubmitting ? t('submitButtonLoading') : t('submitButton')}
                  </button>
                </div>
              </div>

              <input 
                type="text" 
                name="email_address_check" 
                value="" 
                className="input--hidden hidden"
              />
              <input 
                type="hidden" 
                name="locale" 
                value="fr" 
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
