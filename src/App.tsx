
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Marketing from "./pages/Marketing";
import { LanguageProvider } from "./contexts/LanguageContext";
import BlogSection from "./components/blog/BlogSection";
import BlogPost from "./components/blog/BlogPost";
import BlogAdminPanel from "./components/blog/BlogAdminPanel";
import BlogDetails from "./components/blog/BlogDetails";
import { Terms, Careers, Privacy } from "./pages/Footer";
import Pricing from "./pages/Pricing";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Layout component for pages that need consistent header/footer
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" closeButton={true} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}>
              <Route path="dashboard" element={null} />
              <Route path="banking" element={null} />
              <Route path="goals" element={null} />
              <Route path="chat" element={null} />
              <Route path="notifications" element={null} />
              <Route path="onboarding" element={null} />
              <Route path="goal-selection" element={null} />
              <Route path="budget" element={null} />
              <Route path="saving-recommendations" element={null} />
              <Route path="analytics" element={null} />
              <Route path="landing" element={null} />
              <Route path="login" element={null} />
              <Route path="signup" element={null} />
              <Route path="profile" element={null} />
              <Route path="saved-nudges" element={null} />
              <Route path="transactions" element={null} />
              <Route path="subscription" element={null} />
              <Route path="advisor" element={null} />
              <Route path="festival-planning" element={null} />
              <Route path="investment-intelligence" element={null} />
              <Route path="family-management" element={null} />
              <Route path="learning-center" element={null} />
              <Route index element={<Navigate to="/landing" replace />} />
            </Route>
            
            {/* Marketing Landing Page - no header/footer as it has its own */}
            <Route path="/marketing" element={<Marketing />} />
            
            {/* Blog routes with consistent header/footer */}
            <Route path="/blog" element={
              <PublicLayout>
                <BlogSection />
              </PublicLayout>
            } />
            <Route path="/blog/:slug" element={
              <PublicLayout>
                <BlogDetails />
              </PublicLayout>
            } />
            <Route path="/blog/admin" element={
              <PublicLayout>
                <BlogAdminPanel />
              </PublicLayout>
            } />
            
            {/* Footer Pages with consistent header/footer */}
            <Route path="/terms" element={
              <PublicLayout>
                <Terms />
              </PublicLayout>
            } />
            <Route path="/careers" element={
              <PublicLayout>
                <Careers />
              </PublicLayout>
            } />
            <Route path="/pricing" element={
              <PublicLayout>
                <Pricing />
              </PublicLayout>
            } />
            <Route path="/privacy" element={
              <PublicLayout>
                <Privacy />
              </PublicLayout>
            } />
            
            {/* About page */}
            <Route path="/about" element={
              <PublicLayout>
                <div className="container mx-auto py-16">
                  <h1 className="text-3xl font-bold mb-6">About Us</h1>
                  <p className="mb-4">India's first agentic Wealth Operating System, designed to act as a Proactive Wealth Companion for Indian families.</p>
                </div>
              </PublicLayout>
            } />
            
            {/* Services page */}
            <Route path="/services" element={
              <PublicLayout>
                <div className="container mx-auto py-16">
                  <h1 className="text-3xl font-bold mb-6">Our Services</h1>
                  <p className="mb-4">Comprehensive financial services tailored for Indian families.</p>
                </div>
              </PublicLayout>
            } />
            
            {/* Features page */}
            <Route path="/features" element={
              <PublicLayout>
                <div className="container mx-auto py-16">
                  <h1 className="text-3xl font-bold mb-6">Features</h1>
                  <p className="mb-4">Explore the powerful features of Wealthवाणी.</p>
                </div>
              </PublicLayout>
            } />
            
            {/* Fallback route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
