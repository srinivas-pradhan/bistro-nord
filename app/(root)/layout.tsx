import ClientOnly from "@/components/ClientOnly";
import CommsBar from "@/components/CommsBar";
import "../globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientOnly>
        <CommsBar/>
        {children}
    </ClientOnly>

  );
}

