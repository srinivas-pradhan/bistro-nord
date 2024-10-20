import ClientOnly from "@/components/ClientOnly";
import CommsBar from "@/components/CommsBar";
import MenuBar from "@/components/MenuBar";
import Hero from "@/components/Hero";
import MobileSubHero from "@/components/MobileSubHero";
import BrowseMenu from "@/components/BrowseMenu";
import MoreAboutUs from "@/components/MoreAboutUs";
import Events from "@/components/Events";

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
        <Hero/>
        <MobileSubHero/>
        <BrowseMenu/>
        <MoreAboutUs/>
        <Events/>
        {children}
    </ClientOnly>

  );
}

