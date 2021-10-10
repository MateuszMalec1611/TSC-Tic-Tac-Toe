import React from 'react';
import { StyledBtn } from './styles';

interface ButtonProps {
    width: string;
    margin: string;
    onClick?: () => void;
    type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({ children, width, margin, onClick, type }) => (
    <>
        <StyledBtn onClick={onClick} margin={margin} width={width} type={type!}>
            {children}
        </StyledBtn>
    </>
);

export default Button;
