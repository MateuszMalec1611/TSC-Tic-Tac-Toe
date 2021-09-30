import styled from 'styled-components';

export const BackDrop = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
`;
export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%);
`;
export const Header = styled.h2`
    width: 100%;
    font-size: 40px;
    text-transform: uppercase;
`;
