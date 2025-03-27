// src/app/global.d.ts

declare global {
    interface Window {
      dataLayer: any[]; // You can replace `any` with a more specific type if desired
    }
  }
  
  export {};
  