import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileQuickDock } from './components/MobileQuickDock';
import { AppointmentModal } from './components/AppointmentModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BridalPage } from './pages/BridalPage';
import { GalleryPage } from './pages/GalleryPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPrefilledService, setModalPrefilledService] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (serviceName?: string) => {
    setModalPrefilledService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsModalOpen(false);
    setModalPrefilledService(undefined);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0D0E12] text-[#F7F5F0] selection:bg-[#D4AF37]/30 selection:text-[#E8C172]">
        
        {/* Luxury Top Navigation */}
        <Navbar onOpenBookingModal={handleOpenBookingModal} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route
              path="/bridal-makeover"
              element={<BridalPage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route
              path="/book-appointment"
              element={<BookingPage />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="*"
              element={<HomePage onOpenBookingModal={handleOpenBookingModal} />}
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Quick Floating Dock for Mobile Thumb Usability */}
        <MobileQuickDock onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Modal Appointment Dialog */}
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={handleCloseBookingModal}
          prefilledService={modalPrefilledService}
        />
      </div>
    </Router>
  );
}

export default App;
