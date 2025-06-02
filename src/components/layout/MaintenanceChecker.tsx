
import React, { useState, useEffect } from 'react';
import Maintenance from '@/pages/Maintenance';

interface MaintenanceCheckerProps {
  children: React.ReactNode;
}

const MaintenanceChecker: React.FC<MaintenanceCheckerProps> = ({ children }) => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMaintenanceMode = () => {
      console.log('Checking maintenance mode...');
      const maintenanceStatus = localStorage.getItem('maintenance-mode');
      
      console.log('Maintenance status:', maintenanceStatus);
      
      const isMaintenance = maintenanceStatus === 'true';
      
      setIsMaintenanceMode(isMaintenance);
      setIsLoading(false);
      
      console.log('Setting maintenance state:', { isMaintenance });
    };

    // Initial check
    checkMaintenanceMode();

    // Listen for storage changes
    const handleStorageChange = (e: StorageEvent) => {
      console.log('Storage change detected:', e.key, e.newValue);
      if (e.key === 'maintenance-mode') {
        checkMaintenanceMode();
      }
    };

    // Listen for custom events dispatched from admin panel
    const handleCustomEvent = (e: CustomEvent) => {
      console.log('Custom maintenance event detected:', e.detail);
      checkMaintenanceMode();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('maintenanceToggle', handleCustomEvent as EventListener);
    
    // Check periodically for same-tab changes
    const interval = setInterval(checkMaintenanceMode, 2000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('maintenanceToggle', handleCustomEvent as EventListener);
      clearInterval(interval);
    };
  }, []);

  console.log('MaintenanceChecker render:', { isLoading, isMaintenanceMode });

  // Show loading while checking status
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Show maintenance page if maintenance mode is on
  if (isMaintenanceMode) {
    console.log('Showing maintenance page');
    return <Maintenance />;
  }

  console.log('Showing normal website');
  return <>{children}</>;
};

export default MaintenanceChecker;
