"use client"

import MainPage  from "./component/mainPage";

export const dynamic = 'force-static';
export const revalidate = 3600; 
export default function Home() {

  return (
  <main>
    <MainPage/>
  </main>
  );
}
