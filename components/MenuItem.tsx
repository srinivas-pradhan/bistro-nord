'use client';
import React from "react";

interface MenuItemProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return (
        <div
            onClick={onClick}
            className="
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
                font-dm-sans-medium"
        >
            {label}
        </div>
    );

}

export default MenuItem;
