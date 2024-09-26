import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jadvpur University E-Cell",};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta keywords="Entrepreneurship Cell,JU E-Cell,IIC JU,Startup Cell JU,Institute Innovation Council JU,Entrepreneurship Cell Jadavpur University,Startup Cell Jadavpur University,Institute Innovation Council Jadavpur University"/>
      <meta name="author" content="Jadavpur University Entrepreneurship Cell"/>
      <meta name="description" content="Jadavpur University Entrepreneurship Cell, a platform to inspire the minds, to ignite the flames and to take charge of your dreams"/>
      {metadata.title && <title>{metadata.title}</title>}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
