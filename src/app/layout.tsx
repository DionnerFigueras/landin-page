import './global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Bienestar Digital</title>
      </head>
      <body className="bg-color-de-fondo">{children}</body>
    </html>
  );
}
