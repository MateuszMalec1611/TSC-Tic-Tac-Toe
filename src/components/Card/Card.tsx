import React from 'react';
import { pageProps, pageTransition, pageVariants } from 'src/utils/constants';
import * as S from './styles';

const Card: React.FC = ({ children }) => {
    return (
        <S.Card {...pageProps} variants={pageVariants} transition={pageTransition}>
            {children}
        </S.Card>
    );
};

export default Card;
