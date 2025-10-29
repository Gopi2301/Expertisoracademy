// src/pages/AuthSuccess.jsx

import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const AuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // --- 1. Extract Tokens from the URL ---
    const appToken = searchParams.get('appToken');
    // ✅ FIX: Changed 'ssoToken' to 'graphyToken' to match the server's redirect URL.
    const graphyToken = searchParams.get('graphyToken');

    // --- 2. Validate and Store Tokens ---
    // Check if both required tokens are present in the URL.
    if (appToken && graphyToken) {
      console.log('Tokens received successfully. Storing and redirecting.');
      
      const userInfo = {
        appToken: appToken,
        graphyToken: graphyToken,
      };

      // Store the tokens in localStorage so the rest of the app can use them.
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      // --- 3. Redirect to the User Dashboard or Homepage ---
      // The `replace: true` option is important to clear the auth success page from browser history.
      navigate('/', { replace: true });

    } else {
      // --- 4. Handle Failure ---
      console.error("AuthSuccess page reached without 'appToken' or 'graphyToken' URL parameters.");
      navigate('/?error=frontend_token_missing', { replace: true });
    }
  }, [searchParams, navigate]);

  // --- 5. Render a Loading State ---
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      color: 'white',
      backgroundColor: 'black'
    }}>
      <h2>Finalizing Login...</h2>
      <p>Please wait, you will be redirected shortly.</p>
    </div>
  );
};

export default AuthSuccess;