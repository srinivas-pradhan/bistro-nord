'use client';
import React from "react";
import { usePathname } from "next/navigation";

interface MenuItemProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    url?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    url
}) => {
    const pathname = usePathname();
    var isActive = false;

    if (pathname === url) {
        isActive = true;
    }

    return (
        <div
            onClick={onClick}
            className={`
                ${isActive ? "lg:bg-olive-green" : ""}
                lg:text-black
                lg:border-none
                lg:rounded-full
                lg:px-4
                delay-15
                hover:-translate-y-1 
                hover:scale-110
                duration-300
                cursor-pointer
                text-red-700
                font-dm-sans-medium`}
        >
            {label}
        </div>
    );

}

export default MenuItem;
