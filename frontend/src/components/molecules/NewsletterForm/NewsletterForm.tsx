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
      {/* Brevo Form Styles */}
      <style jsx>{`
        @font-face {
          font-display: block;
          font-family: Roboto;
          src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff");
        }

        @font-face {
          font-display: fallback;
          font-family: Roboto;
          font-weight: 600;
          src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff");
        }

        @font-face {
          font-display: fallback;
          font-family: Roboto;
          font-weight: 700;
          src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff");
        }

        #sib-container input:-ms-input-placeholder {
          text-align: left;
          font-family: Helvetica, sans-serif;
          color: #c0ccda;
        }

        #sib-container input::placeholder {
          text-align: left;
          font-family: Helvetica, sans-serif;
          color: #c0ccda;
        }

        #sib-container textarea::placeholder {
          text-align: left;
          font-family: Helvetica, sans-serif;
          color: #c0ccda;
        }

        #sib-container a {
          text-decoration: underline;
          color: #2BB2FC;
        }

        .sib-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #ccc;
          border-radius: 3px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          max-height: 200px;
          overflow-y: auto;
        }

        .sib-menu__item-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .sib-menu__item {
          padding: 8px 12px;
          border-bottom: 1px solid #f0f0f0;
        }

        .sib-menu__item:last-child {
          border-bottom: none;
        }

        .sib-multiselect__label {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 14px;
        }

        .checkbox {
          width: 16px;
          height: 16px;
          border: 1px solid #ccc;
          border-radius: 2px;
          margin-right: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .checkbox_tick_positive::after {
          content: '✓';
          color: #000;
          font-size: 12px;
          font-weight: bold;
        }

        .sib-menu__select {
          padding: 8px 12px;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          gap: 8px;
        }

        .clickable_link {
          background: none;
          border: none;
          color: #2BB2FC;
          cursor: pointer;
          text-decoration: underline;
          font-size: 12px;
        }

        .sib-menu__apply {
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #f0f0f0;
        }

        .clickable_button {
          background: #000;
          color: white;
          border: none;
          padding: 4px 12px;
          border-radius: 3px;
          cursor: pointer;
          font-size: 12px;
        }

        .input_display {
          cursor: pointer;
          position: relative;
        }

        .input_display::after {
          content: '▼';
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 10px;
          color: #666;
        }
      `}</style>

      {/* Newsletter Form */}
      <div 
        className="sib-form" 
        style={{ 
          textAlign: 'center',
          backgroundColor: 'transparent'
        }}
      >
        <div id="sib-form-container" className="sib-form-container">
          {/* Error Message */}
          {message.type === 'error' && (
            <div 
              id="error-message" 
              className="sib-form-message-panel" 
              style={{
                fontSize: '16px',
                textAlign: 'left',
                fontFamily: 'Helvetica, sans-serif',
                color: '#661d1d',
                backgroundColor: '#ffeded',
                borderRadius: '3px',
                borderColor: '#ff4949',
                maxWidth: '540px'
              }}
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
              className="sib-form-message-panel" 
              style={{
                fontSize: '16px',
                textAlign: 'left',
                fontFamily: 'Helvetica, sans-serif',
                color: '#085229',
                backgroundColor: '#e7faf0',
                borderRadius: '3px',
                borderColor: '#13ce66',
                maxWidth: '540px'
              }}
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
            className="sib-container--large sib-container--horizontal" 
            style={{
              textAlign: 'center',
              backgroundColor: 'transparent',
              maxWidth: '540px',
              borderRadius: '3px',
              borderWidth: '0px',
              borderColor: '#C0CCD9',
              borderStyle: 'solid',
              direction: 'ltr'
            }}
          >
            <form 
              id="sib-form" 
              method="POST" 
              action="https://ffb35838.sibforms.com/serve/MUIFAANCWWvajTNYJCaDvtCrXOv3CsJwR_2ytznvYD15vPAnwawJiT1Dm2gS1aEMEsSMlh6Yr1nC0MU0TLLLUcH21RoxVkGmHRQdKrW0gEuIP1HBeSD7YEaitnoh6mvTQI-DBFqhSkF_p730XmHP7L0AnsDAJ80JNNUGy6x9IF0YuDxsM_fe_kg9cQDujhxZ6dFP96yw36T4AsX6" 
              data-type="subscription"
              onSubmit={handleSubmit}
            >
              {/* Lists Selection */}
              <div style={{ padding: '8px 0' }}>
                <div className="sib-multiselect sib-form--blockPosition sib-form-block" data-required="true" style={{ position: 'relative' }}>
                  <div className="form__entry">
                    <div className="form__label-row form__label-row--horizontal">
                      <div className="entry__field">
                        <div 
                          className="input input_display input--multiselect input--centerText" 
                          style={{ paddingRight: '20px' }}
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
                      className="entry__error entry__error--primary" 
                      style={{
                        fontSize: '16px',
                        textAlign: 'left',
                        fontFamily: 'Helvetica, sans-serif',
                        color: '#661d1d',
                        backgroundColor: '#ffeded',
                        borderRadius: '3px',
                        borderColor: '#ff4949'
                      }}
                    />
                  </div>
                  
                  {isListMenuOpen && (
                    <div className="sib-menu" style={{ textAlign: 'left', display: 'block' }}>
                      <div className="sib-menu__select sib-menu__selectTextAlign">
                        <button 
                          type="button" 
                          className="clickable_link sib-menu__select-all-button"
                          onClick={handleSelectAll}
                        >
                          {t('selectAll')}
                        </button>
                        <span className="sib-menu__separator">/</span>
                        <button 
                          type="button" 
                          className="clickable_link sib-menu__clear-button"
                          onClick={handleClearAll}
                        >
                          {t('clear')}
                        </button>
                      </div>
                      <ul className="sib-menu__item-list">
                        {availableLists.map((list) => (
                          <li key={list.id} className="sib-menu__item">
                            <div className="entry__choice" style={{ textIndent: 0 }}>
                              <label className="sib-multiselect__label">
                                <input 
                                  type="checkbox" 
                                  className="input_replaced" 
                                  data-value={list.id}
                                  checked={selectedLists.includes(list.id)}
                                  onChange={() => handleListToggle(list.id)}
                                />
                                <span className={`checkbox ${selectedLists.includes(list.id) ? 'checkbox_tick_positive' : ''}`}></span>
                                <span className="sib-multiselect__label-text">{list.name}</span>
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="sib-menu__apply">
                        <button 
                          type="button" 
                          className="sib-menu__cancel-button clickable_link"
                          onClick={() => setIsListMenuOpen(false)}
                        >
                          {t('cancel')}
                        </button>
                        <button 
                          type="button" 
                          className="sib-menu__apply-button clickable_button"
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
              <div style={{ padding: '8px 0' }}>
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
                      className="entry__error entry__error--primary" 
                      style={{
                        fontSize: '16px',
                        textAlign: 'left',
                        fontFamily: 'Helvetica, sans-serif',
                        color: '#661d1d',
                        backgroundColor: '#ffeded',
                        borderRadius: '3px',
                        borderColor: '#ff4949'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ textAlign: 'left' }}>
                  <button 
                    className="sib-form-block__button sib-form-block__button-with-loader" 
                    style={{
                      fontSize: '16px',
                      textAlign: 'left',
                      fontWeight: '700',
                      fontFamily: 'Helvetica, sans-serif',
                      color: '#FFFFFF',
                      backgroundColor: '#000000',
                      borderWidth: '0px'
                    }}
                    form="sib-form" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <svg 
                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" 
                      viewBox="0 0 512 512" 
                      style={{}}
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
                className="input--hidden" 
                style={{ display: 'none' }}
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
