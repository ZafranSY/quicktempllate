"use client";
import React, { useState, useRef, useCallback } from "react";
import TemplatePage from "./TemplatePage";
import InputPanel from "./InputPanel";
import { useEffect } from 'react';

interface TemplateData {
  name: string;
  image: string;
  extraMessage: string;
  language: string;
  boolExtraMessage: boolean;
  dateOfDeath: string;
}

const MainPage: React.FC = () => {
  const initialData: TemplateData = {
    name: "",
    image: "",
    extraMessage: "",
    language: "Malay",
    boolExtraMessage: false,
    dateOfDeath: "",
  };

  // Removed currentData state since it's not used.
  const [finalData, setFinalData] = useState<TemplateData>(initialData);
  const [showInputPanel, setShowInputPanel] = useState(true);
  const [isDownloading,setIsDownloading] = useState(false);
  const templateRef = useRef<HTMLDivElement>(null);

  // Add timeout protection for download state
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    
    if (isDownloading) {
      // Auto-reset after 10 seconds if still loading
      timeoutId = setTimeout(() => {
        setIsDownloading(false);
        console.warn("Download process timed out and was reset");
      }, 10000);
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isDownloading]);
  // Fix for ESLint error: remove unused parameter
  const handleDataChange = () => {
    // No-op
  };
  // const handleDownload()=>
  // {
  //   setIsDownloading(true);
  // }

  // When "Generate Card" is clicked, update finalData.
  const handleGenerateTemplate = (data: TemplateData) => {
    setFinalData({ ...data });
    if (window.innerWidth < 1024) {
      setShowInputPanel(false);
    }
  };

  const handleDownload = useCallback(() =>{
    // Prevent multiple clicks or processing if already downloading
    if (!templateRef.current || isDownloading) return;
    
    try {
      // Set loading state
      setIsDownloading(true);
      
      // Save current inline styles and remove constraints
      const originalStyle = templateRef.current.style.cssText;
      templateRef.current.style.height = "auto";
      templateRef.current.style.overflow = "visible";

      // Use setTimeout to ensure the DOM updates before capturing
      setTimeout(async () => {
        try {
          // Capture the template using html2canvas
          const html2canvasModule = await import('html2canvas');
          const html2canvas = html2canvasModule.default;

          const canvas = await html2canvas(templateRef.current!, {
            backgroundColor: null,
            scale: 2,
            useCORS: true,
            allowTaint: false,
          });
          
          // Convert canvas to image and trigger download
          const image = canvas.toDataURL("image/jpeg", 1.0);
          const link = document.createElement("a");
          link.href = image;
          link.download = `${finalData.name || "takziah-card"}.jpg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error("Error during canvas rendering:", error);
          alert("There was an error generating the download. Please try again.");
        } finally {
          // Always restore original styles and reset loading state
          if (templateRef.current) {
            templateRef.current.style.cssText = originalStyle;
          }
          setIsDownloading(false);
        }
      }, 100);
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("There was an error generating the download. Please try again.");
      setIsDownloading(false);
    }
  }, [templateRef, isDownloading, finalData.name]);

  const handleReset = useCallback(() =>{
    setFinalData(initialData);
    setShowInputPanel(true);
  },[initialData]);

  const toggleView =useCallback(() =>{
    setShowInputPanel(!showInputPanel);
  },[showInputPanel]);

  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col lg:flex-row h-screen overflow-hidden relative">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleView}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        {showInputPanel ? (
          // Eye icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z 
                 M2.458 12C3.732 7.943 7.523 5 
                 12 5c4.478 0 8.268 2.943 
                 9.542 7-1.274 4.057-5.064 
                 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ) : (
          // Pencil icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536
                 m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        )}
      </button>

      {/* Input Panel */}
      <div className={`${showInputPanel ? "flex" : "hidden"} lg:flex lg:w-1/3 w-full h-screen`}>
        <InputPanel
          onDataChange={handleDataChange}
          onGenerateCard={handleGenerateTemplate}
        />
      </div>

      {/* Template Preview */}
      <div className={`${!showInputPanel ? "flex" : "hidden"} lg:flex lg:w-2/3 w-full h-screen overflow-auto`}>
        <div className="max-h-screen w-full bg-gray-100 dark:bg-gray-800 p-4 flex justify-center">
          <div className="max-w-4xl w-full mx-auto flex flex-col h-full justify-center items-center">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col min-h-fit justify-center items-center">
              {/* The TemplatePage container */}
              <div className="flex-auto mb-6" ref={templateRef}>
                <TemplatePage data={finalData} />
              </div>

              {/* Buttons container */}
              <div className="flex justify-center gap-2 md:gap-4 pt-0 md:pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
  onClick={handleDownload}
  disabled={isDownloading}
  className={`bg-green-500 text-white py-2 px-6 rounded-lg shadow-md 
    ${isDownloading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-600'} 
    transition-colors h-10 flex items-center justify-center`}
>
  {isDownloading ? (
    <>
      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Processing...
    </>
  ) : "Download"}
</button>
                <button
                  onClick={handleReset}
                  className="bg-gray-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-600 transition-colors h-10"
                >
                  Reset
                </button>
                {!showInputPanel && (
                  <button
                    onClick={toggleView}
                    className="lg:hidden bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors h-10"
                  >
                    Back
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;