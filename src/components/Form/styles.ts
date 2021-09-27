import styled from 'styled-components';
import { device } from 'src/utils/constants';

interface ButtonBoxProps {
    registerType: boolean;
}
interface ErrorProps {
    block?: boolean;
}

export const FormContainer = styled.div`
    padding: 20px;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    background-color: ${({ theme }) => theme.colors.lightGrayColor};
    border-radius: 4px;
    box-shadow: 3px 3px 14px black;
`;
export const Title = styled.h2`
    margin: 20px 0;
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media ${device.tabletBreakpoint} {
        font-size: 36px;
    }
`;
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
    font-size: 20px;
    z-index: 0;
    transition: bottom 0.3s, font-size 0.3s;

    @media ${device.tabletBreakpoint} {
        font-size: 22px;
    }
`;
export const Input = styled.input`
    padding: 2px 5px;
    background-color: transparent;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.fontColor};
    border: none;
    border-bottom: 1px solid white;
    z-index: 1;
    outline: none;

    &[value]:not([value='']) + label,
    &:focus + label {
        bottom: 26px;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.transparentGrayColor};

        @media ${device.tabletBreakpoint} {
            bottom: 28px;
            font-size: 18px;
        }
    }

    @media ${device.tabletBreakpoint} {
        font-size: 20px;
    }
`;
export const Error = styled.a<ErrorProps>`
    margin-top: ${({ block }) => (block ? '18px' : 'unset')};
    position: ${({ block }) => (block ? 'relative' : 'absolute')};
    bottom: ${({ block }) => (block ? 'unset' : '-80%')};
    text-align: center;
    width: 100%;
    font-size: ${({ block }) => (block ? '18px' : '14px')};
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
    font-size: 14px;
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
        font-size: 16px;
    }
`;
export const Link = styled.a`
    padding: 10px;
    font-size: 16px;

    @media ${device.tabletBreakpoint} {
        font-size: 18px;
    }
`;
