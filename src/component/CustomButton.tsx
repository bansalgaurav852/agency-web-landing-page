// src/components/CustomButton.tsx
import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, color, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            {...props}
        >
            {text}
        </button>
    );
};

export default CustomButton;
