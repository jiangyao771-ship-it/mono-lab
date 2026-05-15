/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedWorks from "./components/FeaturedWorks";
import Philosophy from "./components/Philosophy";
import Process from "./components/Process";
import SocialNotes from "./components/SocialNotes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg min-h-screen selection:bg-neon selection:text-bg overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedWorks />
        <Philosophy />
        <Process />
        <SocialNotes />
        <Contact />
      </main>
      <Footer />
      
      {/* Decorative Glow Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
