import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import Splash from '@/pages/Splash';
import Home from '@/pages/Home';
import Selection from '@/pages/Selection';
import Upload from '@/pages/Upload';
import Analysis from '@/pages/Analysis';
import ThankYou from '@/pages/ThankYou';
import ScamTypes from '@/pages/ScamTypes';
import TechTips from '@/pages/TechTips';
import AnalysisHistory from '@/pages/AnalysisHistory';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/select" element={<Selection />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/scam-types" element={<ScamTypes />} />
      <Route path="/tech-tips" element={<TechTips />} />
      <Route path="/history" element={<AnalysisHistory />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <ThemeProvider>
          <Router>
            <ScrollToTop />
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
