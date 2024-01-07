import React from 'react';
import StyledComponentsRegistry from 'lib/registry';
import '../styles/global.css';

export const metadata = {
  title: 'Digi Dreams',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
