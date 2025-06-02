
import React, { useState, useEffect } from 'react';
import Maintenance from '@/pages/Maintenance';

interface MaintenanceCheckerProps {
  children: React.ReactNode;
}

const MaintenanceChecker: React.FC<MaintenanceCheckerProps> = ({ children }) => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMaintenanceMode = () => {
      console.log('Checking maintenance mode...');
      const maintenanceStatus = localStorage.getItem('maintenance-mode');
      const adminAuth = localStorage.getItem('admin-authenticated');
      
      console.log('Maintenance status:', maintenanceStatus);
      console.log('Admin auth:', adminAuth);
      
      setIsMaintenanceMode(maintenanceStatus === 'true');
      setIsAdminAuthenticated(adminAuth === 'true');
      setIsLoading(false);
    };

    checkMaintenanceMode();

    // Listen for storage changes to update maintenance mode in real-time
    const handleStorageChange = (e: StorageEvent) => {
      console.log('Storage change detected:', e.key, e.newValue);
      if (e.key === 'maintenance-mode' || e.key === 'admin-authenticated') {
        checkMaintenanceMode();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically in case of same-tab changes
    const interval = setInterval(checkMaintenanceMode, 2000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // Show loading while checking status
  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-xl">Loading...</div>
    </div>;
  }

  console.log('Final render decision:', { isMaintenanceMode, isAdminAuthenticated });

  // Show maintenance page if maintenance mode is on and user is not admin
  if (isMaintenanceMode && !isAdminAuthenticated) {
    console.log('Showing maintenance page');
    return <Maintenance />;
  }

  console.log('Showing normal website');
  return <>{children}</>;
};

export default MaintenanceChecker;
