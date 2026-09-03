/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { Location } from './components/sections/Location';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Location />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
