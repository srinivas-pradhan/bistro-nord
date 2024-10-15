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
    
}

export default LargeButton;
