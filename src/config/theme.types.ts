import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            fontColor: string;
            whiteColor: string;
            blackColor: string;
            redColor: string;
            greenColor: string;
            lightGrayColor: string;
            darkerGrayColor: string;
            transparentBlackColor: string;
            transparentGrayColor: string;
        };
        fontSizes: {
            XS: string;
            S: string;
            M: string;
            L: string;
            XL: string;
            XXL: string;
            XXXL: string;
            XXXXL: string;
            ExtraLarge: string;
        };
    }
}
