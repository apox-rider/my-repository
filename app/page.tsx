'use client'
import Footer from "@/Components/Footer/footer";
import Navbar from "@/Components/Header/navbar";
import Hero from "@/Components/Hero/hero";
import { useEffect, useState } from "react";





export default function Home() {
   
  return ( 
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  
  );
}

