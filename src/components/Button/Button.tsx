import React from 'react';
import { ButtonTypes } from 'src/types/buttonTypes';
import { StyledBtn, StyledLink } from './styles';

interface ButtonProps {
    typeOf: ButtonTypes;
    width: string;
    margin: string;
    path?: string;
    type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({ children, typeOf, width, margin, path, type }) => {
    return (
        <>
            {typeOf === ButtonTypes.BUTTON ? (
                <StyledBtn margin={margin} width={width} type={type!}>
                    {children}
                </StyledBtn>
            ) : (
                <StyledLink margin={margin} width={width} to={path!}>
                    {children}
                </StyledLink>
            )}
        </>
    );
};

export default Button;
