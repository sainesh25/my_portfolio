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
  title: "Sainesh Patil",
  description: "Sainesh Patil | Full-Stack Developer specializing in MERN stack. Crafting seamless, responsive web solutions from front-end to back-end.",
  keywords: 'Sainesh, Patil, Sainesh Patil, Full-Stack Developer, MERN Stack Developer, Frontend Development, Backend Development, Responsive Web Solutions, Web Developer Portfolio, React.js Developer, Node.js Developer, Next.js Developer, SEO, Tailwind CSS, JavaScript Expert, Modern Web Design, Scalable Web Applications, Full-Stack Solutions, Innovative Web Development',
  openGraph:{
    title: 'Sainesh Patil',
    description: 'Sainesh Patil | Full-Stack Developer specializing in MERN stack. Crafting seamless, responsive web solutions from front-end to back-end.',
    keywords: 'Sainesh, Patil, Sainesh Patil, Full-Stack Developer, MERN Stack Developer, Frontend Development, Backend Development, Responsive Web Solutions, Web Developer Portfolio, React.js Developer, Node.js Developer, Next.js Developer, SEO, Tailwind CSS, JavaScript Expert, Modern Web Design, Scalable Web Applications, Full-Stack Solutions, Innovative Web Development'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1c1c1c]`}
      >
        {children}
      </body>
    </html>
  );
}
