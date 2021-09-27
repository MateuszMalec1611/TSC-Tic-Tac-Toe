import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            fontColor: string;
            whiteColor: string;
            blackColor: string;
            lightGrayColor: string;
            transparentBlackColor: string;
            transparentGrayColor: string;
        };
    }
}