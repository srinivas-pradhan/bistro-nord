'use client';

interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    fill?: false
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    label,
    fill
}) => {
    return ( 
        <div className="
                rounded-full
                text-nowrap
                transition 
                ease-in-out 
                delay-15
                hover:-translate-y-1 
                hover:scale-110
                duration-300
                h-12
                lg:h-10 
                px-2
                m-1
                md:m-2
                border-solid
                border-2
                hover:border-red-700
                text-red-700
                font-dm-sans-medium
               lg:hover:border-rose-950
                lg:text-emerald-950 
                lg:hover:text-red-700
                cursor-pointer
        ">
            <div className="
                mt-1
            ">
                {label}
            </div>
        </div>
    );
}
 
export default Button;
