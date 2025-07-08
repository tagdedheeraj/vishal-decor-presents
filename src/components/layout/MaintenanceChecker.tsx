
import React, { useState, useEffect } from 'react';
import Maintenance from '@/pages/Maintenance';

interface MaintenanceCheckerProps {
  children: React.ReactNode;
}

const MaintenanceChecker: React.FC<MaintenanceCheckerProps> = ({ children }) => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    const checkMaintenanceMode = () => {
      const maintenanceStatus = localStorage.getItem('maintenance-mode');
      const adminAuth = localStorage.getItem('admin-authenticated');
      
      setIsMaintenanceMode(maintenanceStatus === 'true');
      setIsAdminAuthenticated(adminAuth === 'true');
    };

    checkMaintenanceMode();

    // Listen for storage changes to update maintenance mode in real-time
    const handleStorageChange = () => {
      checkMaintenanceMode();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also check periodically in case of same-tab changes
    const interval = setInterval(checkMaintenanceMode, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // Show maintenance page if maintenance mode is on and user is not admin
  if (isMaintenanceMode && !isAdminAuthenticated) {
    return <Maintenance />;
  }

  return <>{children}</>;
};

export default MaintenanceChecker;
