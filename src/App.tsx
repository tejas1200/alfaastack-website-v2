import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { Layout } from "@/components/site/Layout";

import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Pricing from "./pages/Pricing.tsx";
import ProcessPage from "./pages/Process.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

import TejasPortfolio from "./pages/TejasPortfolio.tsx";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

/*
 * AlfaaStack company website routes.
 *
 * These routes continue using:
 * - AlfaaStack Navbar
 * - AlfaaStack Footer
 * - WhatsApp Button
 */
function CompanyRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* Company website catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}


/*
 * Main application.
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Routes>

            {/*
             * PERSONAL DEVELOPER PORTFOLIO
             *
             * IMPORTANT:
             * This route is OUTSIDE Layout.
             *
             * Therefore it does NOT receive:
             * - AlfaaStack Navbar
             * - AlfaaStack Footer
             * - WhatsApp Button
             */}
            <Route
              path="/tejas-portfolio"
              element={<TejasPortfolio />}
            />

            {/*
             * ALL ALFAAStack COMPANY ROUTES
             */}
            <Route
              path="*"
              element={<CompanyRoutes />}
            />

          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;