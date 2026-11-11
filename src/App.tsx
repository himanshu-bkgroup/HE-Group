/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { HousekeepingPage } from './pages/HousekeepingPage';
import { SecurityPage } from './pages/SecurityPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Synchronize with hash on load and hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      const validPages = [
        'home', 'about', 'services', 'housekeeping', 'security', 
        'leadership', 'industries', 'careers', 'contact', 'quote', 
        'privacy', 'terms', 'admin'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string, serviceTitle?: string) => {
    setCurrentPage(page);
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7F6] text-[#17251E] antialiased">
      {/* Top Navigation */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'housekeeping' && (
          <HousekeepingPage 
            onNavigate={navigateTo} 
            onSelectServiceForQuote={(srv) => navigateTo('quote', srv)} 
          />
        )}
        {currentPage === 'security' && (
          <SecurityPage 
            onNavigate={navigateTo} 
            onSelectServiceForQuote={(srv) => navigateTo('quote', srv)} 
          />
        )}
        {currentPage === 'leadership' && <LeadershipPage onNavigate={navigateTo} />}
        {currentPage === 'industries' && (
          <IndustriesPage 
            onNavigate={navigateTo} 
            onSelectIndustryForQuote={(ind) => navigateTo('quote', ind)} 
          />
        )}
        {currentPage === 'careers' && <CareersPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
        {currentPage === 'quote' && (
          <QuotePage 
            onNavigate={navigateTo} 
            preselectedService={preselectedService} 
          />
        )}
        {currentPage === 'privacy' && <PrivacyPage onNavigate={navigateTo} />}
        {currentPage === 'terms' && <TermsPage onNavigate={navigateTo} />}
        {currentPage === 'admin' && <AdminDashboardPage onNavigate={navigateTo} />}
      </main>

      {/* Persistent Corporate Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Context-Aware WhatsApp Desk */}
      <WhatsAppFloating currentPage={currentPage} />
    </div>
  );
}
