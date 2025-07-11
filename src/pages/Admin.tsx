
import React, { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Settings, Shield, Lock } from 'lucide-react';

const Admin = () => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const ADMIN_PASSWORD = 'admin123'; // Simple password for demo

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('admin-authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    // Load maintenance mode status
    const maintenanceStatus = localStorage.getItem('maintenance-mode');
    if (maintenanceStatus === 'true') {
      setIsMaintenanceMode(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin-authenticated', 'true');
      toast({
        title: "Login Successful",
        description: "Welcome to admin panel",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin-authenticated');
    setPassword('');
    toast({
      title: "Logged Out",
      description: "You have been logged out",
    });
  };

  const toggleMaintenanceMode = () => {
    const newStatus = !isMaintenanceMode;
    setIsMaintenanceMode(newStatus);
    localStorage.setItem('maintenance-mode', newStatus.toString());
    
    toast({
      title: newStatus ? "Maintenance Mode Enabled" : "Maintenance Mode Disabled",
      description: newStatus 
        ? "Website is now in maintenance mode" 
        : "Website is now live",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Shield className="mx-auto h-12 w-12 text-orange-500" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Admin Panel
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your password to access the admin panel
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                    placeholder="Enter admin password"
                  />
                </div>
                <Button onClick={handleLogin} className="w-full bg-orange-500 hover:bg-orange-600">
                  <Lock className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Settings className="mr-3 h-8 w-8 text-orange-500" />
              Admin Panel
            </h1>
            <p className="mt-2 text-gray-600">Manage your website settings</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-orange-500" />
                Maintenance Mode
              </CardTitle>
              <CardDescription>
                Enable maintenance mode to temporarily disable access to the website for all visitors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">
                    {isMaintenanceMode ? 'Maintenance Mode Active' : 'Website Live'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isMaintenanceMode 
                      ? 'Visitors will see a maintenance page' 
                      : 'Website is accessible to all visitors'
                    }
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="maintenance-toggle">
                    {isMaintenanceMode ? 'Disable' : 'Enable'}
                  </Label>
                  <Switch
                    id="maintenance-toggle"
                    checked={isMaintenanceMode}
                    onCheckedChange={toggleMaintenanceMode}
                  />
                </div>
              </div>
              
              {isMaintenanceMode && (
                <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-orange-800 font-medium">
                    ⚠️ Warning: Maintenance mode is currently active
                  </p>
                  <p className="text-orange-700 text-sm mt-1">
                    All visitors will see the maintenance page instead of the normal website
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>System overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800">Status</h3>
                  <p className="text-green-600">
                    {isMaintenanceMode ? 'Maintenance' : 'Online'}
                  </p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800">Mode</h3>
                  <p className="text-blue-600">Admin Panel</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
