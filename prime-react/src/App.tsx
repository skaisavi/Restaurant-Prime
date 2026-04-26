import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import GiftVouchersPage from './pages/GiftVouchersPage';
import MenusPage from './pages/MenusPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import PrivateDiningPage from './pages/PrivateDiningPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants/:slug" element={<RestaurantPage />} />
          <Route path="/menus" element={<MenusPage />} />
          <Route path="/gift-vouchers" element={<GiftVouchersPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/private-dining" element={<PrivateDiningPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}
