'use client';

interface LargeButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    fill?: false
}

const LargeButton: React.FC<LargeButtonProps> = ({
    onClick,
    label,
    fill
}) => {
    return ( 
        <div className={`
            ${fill ? "bg-burgundy text-white" : "text-black"}
            rounded-full
            text-nowrap
            transition 
            ease-in-out 
            delay-15
            hover:-translate-y-1 
            hover:scale-110
            duration-300
            h-12
            px-4
            m-1
            lg:h-20
            lg:px-6
            lg:m-4
            font-dm-sans-medium
            border-2
            border-solid 
            border-black
            cursor-pointer
        `}>
            <div className="
                lg:mt-6
                mt-3
            ">
                {label}
            </div>
        </div>
    );
}

export default LargeButton;
