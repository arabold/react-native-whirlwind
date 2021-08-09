export default interface Theme {
    colors: {
        black: string;
        white: string;
        primary: string;
        secondary: string;
        link: string;
        success: string;
        error: string;
        warning: string;
        gray5: string;
        gray4: string;
        gray3: string;
        gray2: string;
        gray1: string;
        gray0: string;
        transparent: string;
    };
    fontFamilies: {
        sans: string;
        sansItalic: string;
        sansMedium: string;
        sansMediumItalic: string;
        sansBold: string;
        sansBoldItalic: string;
    };
    fontSizes: {
        xs2: number;
        xs: number;
        sm: number;
        base: number;
        lg: number;
        xl: number;
        xl2: number;
        xl3: number;
        xl4: number;
        xl5: number;
    };
    spacing: {
        xs2: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xl2: number;
        xl3: number;
        xl4: number;
        xl5: number;
    };
}
