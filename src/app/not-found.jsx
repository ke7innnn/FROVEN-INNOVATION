import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', textAlign: 'center', backgroundColor: '#f8fafc', color: '#0f2a47' }}>
      <h1 style={{ fontSize: '64px', fontWeight: '900', margin: '0 0 20px', letterSpacing: '-2px' }}>404</h1>
      <h2 style={{ fontSize: '24px', margin: '0 0 16px' }}>Page Not Found</h2>
      <p style={{ color: '#475569', marginBottom: '32px', maxWidth: '400px', lineHeight: '1.6' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <button style={{ backgroundColor: '#0f2a47', color: 'white', border: 'none', padding: '12px 24px', fontSize: '16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Back to Homepage
        </button>
      </Link>
    </div>
  );
}
