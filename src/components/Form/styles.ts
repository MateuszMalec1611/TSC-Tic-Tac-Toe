import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'src/utils/constants';

interface ButtonBoxProps {
    registerType: boolean;
}
interface ErrorProps {
    block?: boolean;
}
interface LinkBoxProps {
    loginFormType: boolean;
}
export const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
`;
export const InputBox = styled.div`
    position: relative;
    margin: 22px 0;
    display: flex;
    flex-direction: column;

    @media ${device.tabletBreakpoint} {
        margin: 24px 0;
    }
`;
export const Label = styled.label`
    position: absolute;
    bottom: 2px;
    font-size: ${({ theme }) => theme.fontSizes.XL};
    z-index: 0;
    transition: bottom 0.3s, font-size 0.3s;

    @media ${device.tabletBreakpoint} {
        font-size: ${({ theme }) => theme.fontSizes.XXL};
    }
`;
export const Input = styled.input`
    padding: 2px 5px;
    background-color: transparent;
    font-size: ${({ theme }) => theme.fontSizes.M};
    color: ${({ theme }) => theme.colors.fontColor};
    border: none;
    border-radius: 0;
    border-bottom: 1px solid white;
    z-index: 1;
    outline: none;

    &[value]:not([value='']) + label,
    &:focus + label {
        bottom: 26px;
        font-size: ${({ theme }) => theme.fontSizes.S};
        color: ${({ theme }) => theme.colors.transparentGrayColor};

        @media ${device.tabletBreakpoint} {
            bottom: 28px;
            ${({ theme }) => theme.fontSizes.M};
        }
    }

    @media ${device.tabletBreakpoint} {
        font-size: ${({ theme }) => theme.fontSizes.XL};
    }
`;
export const Error = styled.p<ErrorProps>`
    margin-top: ${({ block }) => (block ? '18px' : 'unset')};
    position: ${({ block }) => (block ? 'relative' : 'absolute')};
    bottom: ${({ block }) => (block ? 'unset' : '-80%')};
    text-align: center;
    width: 100%;
    font-size: ${({ block, theme }) => (block ? theme.fontSizes.M : theme.fontSizes.XS)};
    color: ${({ theme }) => theme.colors.redColor};
`;
export const ButtonBox = styled.div<ButtonBoxProps>`
    margin-top: 20px;
    display: flex;
    flex-direction: ${({ registerType }) => (registerType ? 'column' : 'row')};
    align-items: ${({ registerType }) => (registerType ? 'center' : 'center')};
    justify-content: ${({ registerType }) => (registerType ? 'unset' : 'space-between')};
`;
export const Button = styled.button`
    margin-right: 12px;
    padding: 6px 15px;
    height: max-content;
    font-size: ${({ theme }) => theme.fontSizes.XS};
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.transparentBlackColor};
    border: 1px solid transparent;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s, border 0.3s;

    &:hover {
        background-color: transparent;
        color: white;
        border: 1px solid ${({ theme }) => theme.colors.whiteColor};
    }

    @media ${device.tabletBreakpoint} {
        padding: 7px 16px;
        font-size: ${({ theme }) => theme.fontSizes.S};
    }
`;
export const Text = styled.a`
    display: block;
    margin-top: 5px;
    padding: 0px 10px;
    font-size: ${({ theme }) => theme.fontSizes.S};

    @media ${device.tabletBreakpoint} {
        font-size: ${({ theme }) => theme.fontSizes.M};
    }
`;

export const StyledLink = styled(Link)`
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontSizes.S};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontColor};

    @media ${device.tabletBreakpoint} {
        font-size: ${({ theme }) => theme.fontSizes.M};
    }
`;

export const LinkBox = styled.div<LinkBoxProps>`
    display: ${({ loginFormType }) => (loginFormType ? 'flex' : 'block')};
    flex-direction: ${({ loginFormType }) => (loginFormType ? 'column' : 'unset')};
`;
