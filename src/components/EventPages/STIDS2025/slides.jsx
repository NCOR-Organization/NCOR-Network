import React from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';

export default function SlidesPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const file = params.get('file');

  const pdfUrl = file
    ? `/presentations/stids2026/${encodeURIComponent(file)}`
    : null;

  return (
    <Layout title="STIDS 2026 Slides">
      <main style={{ padding: '2rem' }}>
        <h1>STIDS 2026 Slides</h1>

        {!pdfUrl ? (
          <p>No slide file was specified.</p>
        ) : (
          <>
            <p>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                Open PDF in a new tab
              </a>
            </p>

            <iframe
              src={pdfUrl}
              title={file}
              style={{
                width: '100%',
                height: '80vh',
                border: '1px solid #ddd',
                borderRadius: '6px',
              }}
            />
          </>
        )}
      </main>
    </Layout>
  );
}