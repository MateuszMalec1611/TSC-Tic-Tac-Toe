import React from 'react';
import { ButtonTypes } from 'src/types/button.types';
import { StyledBtn, StyledLink } from './styles';

interface ButtonProps {
    typeOf: ButtonTypes;
    width: string;
    margin: string;
    onClick?: () => void;
    path?: string;
    type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({
    children,
    typeOf,
    width,
    margin,
    onClick,
    path,
    type,
}) => (
    <>
        {typeOf === ButtonTypes.BUTTON ? (
            <StyledBtn onClick={onClick} margin={margin} width={width} type={type!}>
                {children}
            </StyledBtn>
        ) : (
            <StyledLink margin={margin} width={width} to={path!}>
                {children}
            </StyledLink>
        )}
    </>
);

export default Button;
