import "../styles/globals.css";

export const metadata = {
  title: "NextJS-Nhost",
  description: "Setup Nhost with NextJS 13 app router",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
