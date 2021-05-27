import { ReactNode } from 'react';

import { ButtonContainer } from '../styles/components/Button';

interface ButtonProps {
    children?: ReactNode;
    name: string;
    type?: "button" | "submit";
}

export function Button({
    name,
    type,
    children,
}: ButtonProps) {
    return (
        <ButtonContainer>
            <button className="button" type={type}>
                {children}
                <strong>{name}</strong> 
            </button>
        </ButtonContainer>
    );
}