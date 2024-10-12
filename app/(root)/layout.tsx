
import ClientOnly from "@/components/ClientOnly";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientOnly>
        {children}
    </ClientOnly>
  );
}
