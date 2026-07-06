/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import EmiCalculator from './components/EmiCalculator';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <EmiCalculator />
      </main>

      <Footer />
    </div>
  );
}
