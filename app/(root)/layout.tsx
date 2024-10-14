import ClientOnly from "@/components/ClientOnly";
import CommsBar from "@/components/CommsBar";
import MenuBar from "@/components/MenuBar";
import "../globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientOnly>
        <CommsBar/>
        <MenuBar/>
        {children}
    </ClientOnly>

  );
}

