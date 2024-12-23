"use client";

import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    setupSF: (
      formId: string,
      trackCode: string,
      param3: boolean,
      param4: string,
      param5: boolean,
      param6: string
    ) => void;
    runOnFormSubmit_sf3z9f5764ea15cc38964264a0efb104f120075862b211144d617be07a45c2692347: (th: any) => void;
  }
}

export default function SignupForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const popupRef = useRef<Window | null>(null);
  const [emailError, setEmailError] = useState<string>("");

  useEffect(() => {
    window.runOnFormSubmit_sf3z9f5764ea15cc38964264a0efb104f120075862b211144d617be07a45c2692347 = (th) => {
      return true;
    };

    const script = document.createElement("script");
    script.src = "https://vlvqfc-cmpzourl.maillist-manage.com/js/optin.min.js";
    script.async = true;

    script.onload = () => {
      if (window.setupSF) {
        window.setupSF(
          "sf3z9f5764ea15cc38964264a0efb104f120075862b211144d617be07a45c2692347",
          "ZCFORMVIEW",
          false,
          "acc",
          false,
          "2"
        );
      }
    };

    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
        if (popupRef.current) {
          popupRef.current.close();
        }
      } catch (error) {
        console.warn("Cleanup failed:", error);
      }
    };
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    setEmailError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailInput = document.getElementById('EMBED_FORM_EMAIL_LABEL') as HTMLInputElement;
    const email = emailInput?.value || '';

    if (!validateEmail(email)) {
      const errorDiv = document.getElementById('errorMsgDiv');
      if (errorDiv) {
        errorDiv.style.display = 'block';
        errorDiv.textContent = emailError;
      }
      return;
    }

    try {
      const errorDiv = document.getElementById('errorMsgDiv');
      if (errorDiv) {
        errorDiv.style.display = 'none';
      }

      const width = Math.min(550, window.innerWidth - 20);
      const height = Math.min(300, window.innerHeight - 20);
      const left = (window.screen.width - width) / 2;
      const top = (window.screen.height - height) / 2;
      
      popupRef.current = window.open(
        'about:blank',
        '_zcSignup',
        `width=${width},height=${height},left=${left},top=${top}`
      );

      if (formRef.current && popupRef.current) {
        formRef.current.submit();
      } else {
        console.warn('Popup blocked. Please allow popups for this site.');
        if (formRef.current) {
          formRef.current.submit();
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      if (formRef.current) {
        formRef.current.submit();
      }
    }
  };

  return (
    <div
      id="sf3z9f5764ea15cc38964264a0efb104f120075862b211144d617be07a45c2692347"
      data-type="signupform"
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Join Our Newsletter
          </h2>
          
          <div className="relative mb-4">
            <div
              id="Zc_SignupSuccess"
              className="hidden absolute w-full bg-green-50 border border-green-200 p-3 rounded-md"
            >
              <div className="flex items-center space-x-2">
                <img
                  className="w-6 h-6"
                  src="https://vlvqfc-cmpzourl.maillist-manage.com/images/challangeiconenable.jpg"
                  alt="Success"
                />
                <span className="text-green-700 text-sm">
                  Thank you for Signing Up
                </span>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            method="POST"
            id="zcampaignOptinForm"
            action="https://vlvqfc-cmpzourl.maillist-manage.com/weboptin.zc"
            target="_zcSignup"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div
              id="errorMsgDiv"
              className="hidden bg-red-50 border border-red-200 p-3 rounded-md text-sm text-red-600"
            >
              {emailError || "Please correct the marked field(s) below."}
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <input
                  type="text"
                  className={`w-full px-3 py-2 border ${
                    emailError ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400`}
                  placeholder="Email"
                  data-changeitem="SIGNUP_FORM_FIELD"
                  name="CONTACT_EMAIL"
                  id="EMBED_FORM_EMAIL_LABEL"
                  onChange={() => setEmailError("")}
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-md transition-colors"
                name="SIGNUP_SUBMIT_BUTTON"
                id="zcWebOptin"
              >
                Join Now
              </button>
            </div>

            {/* Hidden fields */}
            <input type="hidden" id="fieldBorder" value="" />
            <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
            <input type="hidden" id="emailReportId" name="emailReportId" value="" />
            <input type="hidden" id="formType" name="formType" value="QuickForm" />
            <input type="hidden" name="zx" id="cmpZuid" value="13418f8aa" />
            <input type="hidden" name="zcvers" value="3.0" />
            <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
            <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
            <input type="hidden" id="zcld" name="zcld" value="113409ae67f5cac27" />
            <input type="hidden" id="zctd" name="zctd" value="" />
            <input type="hidden" id="document_domain" value="" />
            <input type="hidden" id="zc_Url" value="vlvqfc-cmpzourl.maillist-manage.com" />
            <input type="hidden" id="new_optin_response_in" value="0" />
            <input type="hidden" id="duplicate_optin_response_in" value="0" />
            <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
            <input
              type="hidden"
              id="zc_formIx"
              name="zc_formIx"
              value="3z9f5764ea15cc38964264a0efb104f120075862b211144d617be07a45c2692347"
            />
            <input type="hidden" id="viewFrom" value="URL_ACTION" />
          </form>
        </div>
      </div>
    </div>
  );
}