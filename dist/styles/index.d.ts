import { ThemeProps } from '../theme';
declare type MakeOptional<T> = {
    [P in keyof T]?: MakeOptional<T[P]>;
};
export declare function createTheme(newTheme?: MakeOptional<ThemeProps>): {
    fontSans: {
        fontFamily: string;
    };
    fontSansItalic: {
        fontFamily: string;
        fontStyle?: undefined;
    } | {
        fontStyle: "italic";
        fontFamily: string;
    };
    fontSansMedium: {
        fontFamily: string;
        fontWeight?: undefined;
    } | {
        fontWeight: "500";
        fontFamily: string;
    };
    fontSansMediumItalic: {
        fontFamily: string;
        fontWeight?: undefined;
        fontStyle?: undefined;
    } | {
        fontWeight: "500";
        fontStyle: "italic";
        fontFamily: string;
    };
    fontSansBold: {
        fontFamily: string;
        fontWeight?: undefined;
    } | {
        fontWeight: "bold";
        fontFamily: string;
    };
    fontSansBoldItalic: {
        fontFamily: string;
        fontWeight?: undefined;
        fontStyle?: undefined;
    } | {
        fontWeight: "bold";
        fontStyle: "italic";
        fontFamily: string;
    };
    fontMono: {
        fontFamily: string;
    };
    fontMonoItalic: {
        fontFamily: string;
        fontStyle?: undefined;
    } | {
        fontStyle: "italic";
        fontFamily: string;
    };
    fontMonoMedium: {
        fontFamily: string;
        fontWeight?: undefined;
    } | {
        fontWeight: "500";
        fontFamily: string;
    };
    fontMonoMediumItalic: {
        fontFamily: string;
        fontWeight?: undefined;
        fontStyle?: undefined;
    } | {
        fontWeight: "500";
        fontStyle: "italic";
        fontFamily: string;
    };
    fontMonoBold: {
        fontFamily: string;
        fontWeight?: undefined;
    } | {
        fontWeight: "bold";
        fontFamily: string;
    };
    fontMonoBoldItalic: {
        fontFamily: string;
        fontWeight?: undefined;
        fontStyle?: undefined;
    } | {
        fontWeight: "bold";
        fontStyle: "italic";
        fontFamily: string;
    };
    fontSerif: {
        fontFamily: string;
    };
    fontSerifItalic: {
        fontFamily: string;
        fontStyle?: undefined;
    } | {
        fontStyle: "italic";
        fontFamily: string;
    };
    fontSerifMedium: {
        fontFamily: string;
        fontWeight?: undefined;
    } | {
        fontWeight: "500";
        fontFamily: string;
    };
    fontSerifMediumItalic: {
        fontFamily: string;
        fontWeight?: undefined;
        fontStyle?: undefined;
    } | {
        fontWeight: "500";
        fontStyle: "italic";
        fontFamily: string;
    };
    fontSerifBold: {
        fontFamily: string;
        fontWeight?: undefined;
    } | {
        fontWeight: "bold";
        fontFamily: string;
    };
    fontSerifBoldItalic: {
        fontFamily: string;
        fontWeight?: undefined;
        fontStyle?: undefined;
    } | {
        fontWeight: "bold";
        fontStyle: "italic";
        fontFamily: string;
    };
    textXxs: {
        fontSize: number;
    };
    textXs: {
        fontSize: number;
    };
    textSm: {
        fontSize: number;
    };
    textBase: {
        fontSize: number;
    };
    textLg: {
        fontSize: number;
    };
    textXl: {
        fontSize: number;
    };
    text2xl: {
        fontSize: number;
    };
    text3xl: {
        fontSize: number;
    };
    text4xl: {
        fontSize: number;
    };
    text5xl: {
        fontSize: number;
    };
    fontNormal: {
        fontWeight: "normal";
    };
    trackingTighter: {
        letterSpacing: number;
    };
    trackingTight: {
        letterSpacing: number;
    };
    trackingNormal: {
        letterSpacing: number;
    };
    trackingWide: {
        letterSpacing: number;
    };
    trackingWider: {
        letterSpacing: number;
    };
    trackingWidest: {
        letterSpacing: number;
    };
    leadingNone: {
        lineHeight: number;
    };
    leadingTight: {
        lineHeight: number;
    };
    leadingSnug: {
        lineHeight: number;
    };
    leadingNormal: {
        lineHeight: number;
    };
    leadingRelaxed: {
        lineHeight: number;
    };
    leadingLoose: {
        lineHeight: number;
    };
    leading3: {
        lineHeight: number;
    };
    leading4: {
        lineHeight: number;
    };
    leading5: {
        lineHeight: number;
    };
    leading6: {
        lineHeight: number;
    };
    leading7: {
        lineHeight: number;
    };
    leading8: {
        lineHeight: number;
    };
    leading9: {
        lineHeight: number;
    };
    leading10: {
        lineHeight: number;
    };
    leading11: {
        lineHeight: number;
    };
    leading12: {
        lineHeight: number;
    };
    leading14: {
        lineHeight: number;
    };
    leading16: {
        lineHeight: number;
    };
    leading20: {
        lineHeight: number;
    };
    leading24: {
        lineHeight: number;
    };
    leading28: {
        lineHeight: number;
    };
    leading32: {
        lineHeight: number;
    };
    leading36: {
        lineHeight: number;
    };
    leading40: {
        lineHeight: number;
    };
    leading44: {
        lineHeight: number;
    };
    leading48: {
        lineHeight: number;
    };
    leading52: {
        lineHeight: number;
    };
    leading56: {
        lineHeight: number;
    };
    leading60: {
        lineHeight: number;
    };
    leading64: {
        lineHeight: number;
    };
    leading72: {
        lineHeight: number;
    };
    leading80: {
        lineHeight: number;
    };
    leading96: {
        lineHeight: number;
    };
    textAuto: {
        textAlign: "auto";
    };
    textLeft: {
        textAlign: "left";
    };
    textRight: {
        textAlign: "right";
    };
    textCenter: {
        textAlign: "center";
    };
    textJustify: {
        textAlign: "justify";
    };
    textPrimary: {
        color: string;
    };
    textPrimaryLight: {
        color: string;
    };
    textPrimaryDark: {
        color: string;
    };
    textPrimaryContrast: {
        color: string;
    };
    textSecondary: {
        color: string;
    };
    textSecondaryLight: {
        color: string;
    };
    textSecondaryDark: {
        color: string;
    };
    textSecondaryContrast: {
        color: string;
    };
    textInfo: {
        color: string;
    };
    textInfoLight: {
        color: string;
    };
    textInfoDark: {
        color: string;
    };
    textInfoContrast: {
        color: string;
    };
    textSuccess: {
        color: string;
    };
    textSuccessLight: {
        color: string;
    };
    textSuccessDark: {
        color: string;
    };
    textSuccessContrast: {
        color: string;
    };
    textError: {
        color: string;
    };
    textErrorLight: {
        color: string;
    };
    textErrorDark: {
        color: string;
    };
    textErrorContrast: {
        color: string;
    };
    textWarning: {
        color: string;
    };
    textWarningLight: {
        color: string;
    };
    textWarningDark: {
        color: string;
    };
    textWarningContrast: {
        color: string;
    };
    textPaper: {
        color: string;
    };
    textSelected: {
        color: string;
    };
    textDisabled: {
        color: string;
    };
    textFocused: {
        color: string;
    };
    textMuted: {
        color: string;
    };
    textWhite: {
        color: string;
    };
    textGray100: {
        color: string;
    };
    textGray200: {
        color: string;
    };
    textGray300: {
        color: string;
    };
    textGray400: {
        color: string;
    };
    textGray500: {
        color: string;
    };
    textGray600: {
        color: string;
    };
    textGray700: {
        color: string;
    };
    textGray800: {
        color: string;
    };
    textGray900: {
        color: string;
    };
    textBlack: {
        color: string;
    };
    textTransparent: {
        color: string;
    };
    noUnderline: {
        textDecorationLine: "none";
    };
    underline: {
        textDecorationLine: "underline";
    };
    lineThrough: {
        textDecorationLine: "line-through";
    };
    underlineLineThrough: {
        textDecorationLine: "underline line-through";
    };
    normalCase: {
        textTransform: "none";
    };
    uppercase: {
        textTransform: "uppercase";
    };
    lowercase: {
        textTransform: "lowercase";
    };
    capitalize: {
        textTransform: "capitalize";
    };
    alignAuto: {
        textAlignVertical: "auto";
    };
    alignTop: {
        textAlignVertical: "top";
    };
    alignBottom: {
        textAlignVertical: "bottom";
    };
    alignCenter: {
        textAlignVertical: "center";
    };
    pAuto: {
        padding: "auto";
    };
    p0: {
        padding: number;
    };
    pPx: {
        padding: number;
    };
    p0_5: {
        padding: number;
    };
    p1: {
        padding: number;
    };
    p2: {
        padding: number;
    };
    p3: {
        padding: number;
    };
    p4: {
        padding: number;
    };
    p5: {
        padding: number;
    };
    p6: {
        padding: number;
    };
    p7: {
        padding: number;
    };
    p8: {
        padding: number;
    };
    p9: {
        padding: number;
    };
    p10: {
        padding: number;
    };
    p11: {
        padding: number;
    };
    p12: {
        padding: number;
    };
    p14: {
        padding: number;
    };
    p16: {
        padding: number;
    };
    p20: {
        padding: number;
    };
    p24: {
        padding: number;
    };
    p28: {
        padding: number;
    };
    p32: {
        padding: number;
    };
    p36: {
        padding: number;
    };
    p40: {
        padding: number;
    };
    p44: {
        padding: number;
    };
    p48: {
        padding: number;
    };
    p52: {
        padding: number;
    };
    p56: {
        padding: number;
    };
    p60: {
        padding: number;
    };
    p64: {
        padding: number;
    };
    p72: {
        padding: number;
    };
    p80: {
        padding: number;
    };
    p96: {
        padding: number;
    };
    pTAuto: {
        paddingTop: "auto";
    };
    pT0: {
        paddingTop: number;
    };
    pTPx: {
        paddingTop: number;
    };
    pT0_5: {
        paddingTop: number;
    };
    pT1: {
        paddingTop: number;
    };
    pT2: {
        paddingTop: number;
    };
    pT3: {
        paddingTop: number;
    };
    pT4: {
        paddingTop: number;
    };
    pT5: {
        paddingTop: number;
    };
    pT6: {
        paddingTop: number;
    };
    pT7: {
        paddingTop: number;
    };
    pT8: {
        paddingTop: number;
    };
    pT9: {
        paddingTop: number;
    };
    pT10: {
        paddingTop: number;
    };
    pT11: {
        paddingTop: number;
    };
    pT12: {
        paddingTop: number;
    };
    pT14: {
        paddingTop: number;
    };
    pT16: {
        paddingTop: number;
    };
    pT20: {
        paddingTop: number;
    };
    pT24: {
        paddingTop: number;
    };
    pT28: {
        paddingTop: number;
    };
    pT32: {
        paddingTop: number;
    };
    pT36: {
        paddingTop: number;
    };
    pT40: {
        paddingTop: number;
    };
    pT44: {
        paddingTop: number;
    };
    pT48: {
        paddingTop: number;
    };
    pT52: {
        paddingTop: number;
    };
    pT56: {
        paddingTop: number;
    };
    pT60: {
        paddingTop: number;
    };
    pT64: {
        paddingTop: number;
    };
    pT72: {
        paddingTop: number;
    };
    pT80: {
        paddingTop: number;
    };
    pT96: {
        paddingTop: number;
    };
    pBAuto: {
        paddingBottom: "auto";
    };
    pB0: {
        paddingBottom: number;
    };
    pBPx: {
        paddingBottom: number;
    };
    pB0_5: {
        paddingBottom: number;
    };
    pB1: {
        paddingBottom: number;
    };
    pB2: {
        paddingBottom: number;
    };
    pB3: {
        paddingBottom: number;
    };
    pB4: {
        paddingBottom: number;
    };
    pB5: {
        paddingBottom: number;
    };
    pB6: {
        paddingBottom: number;
    };
    pB7: {
        paddingBottom: number;
    };
    pB8: {
        paddingBottom: number;
    };
    pB9: {
        paddingBottom: number;
    };
    pB10: {
        paddingBottom: number;
    };
    pB11: {
        paddingBottom: number;
    };
    pB12: {
        paddingBottom: number;
    };
    pB14: {
        paddingBottom: number;
    };
    pB16: {
        paddingBottom: number;
    };
    pB20: {
        paddingBottom: number;
    };
    pB24: {
        paddingBottom: number;
    };
    pB28: {
        paddingBottom: number;
    };
    pB32: {
        paddingBottom: number;
    };
    pB36: {
        paddingBottom: number;
    };
    pB40: {
        paddingBottom: number;
    };
    pB44: {
        paddingBottom: number;
    };
    pB48: {
        paddingBottom: number;
    };
    pB52: {
        paddingBottom: number;
    };
    pB56: {
        paddingBottom: number;
    };
    pB60: {
        paddingBottom: number;
    };
    pB64: {
        paddingBottom: number;
    };
    pB72: {
        paddingBottom: number;
    };
    pB80: {
        paddingBottom: number;
    };
    pB96: {
        paddingBottom: number;
    };
    pLAuto: {
        paddingLeft: "auto";
    };
    pL0: {
        paddingLeft: number;
    };
    pLPx: {
        paddingLeft: number;
    };
    pL0_5: {
        paddingLeft: number;
    };
    pL1: {
        paddingLeft: number;
    };
    pL2: {
        paddingLeft: number;
    };
    pL3: {
        paddingLeft: number;
    };
    pL4: {
        paddingLeft: number;
    };
    pL5: {
        paddingLeft: number;
    };
    pL6: {
        paddingLeft: number;
    };
    pL7: {
        paddingLeft: number;
    };
    pL8: {
        paddingLeft: number;
    };
    pL9: {
        paddingLeft: number;
    };
    pL10: {
        paddingLeft: number;
    };
    pL11: {
        paddingLeft: number;
    };
    pL12: {
        paddingLeft: number;
    };
    pL14: {
        paddingLeft: number;
    };
    pL16: {
        paddingLeft: number;
    };
    pL20: {
        paddingLeft: number;
    };
    pL24: {
        paddingLeft: number;
    };
    pL28: {
        paddingLeft: number;
    };
    pL32: {
        paddingLeft: number;
    };
    pL36: {
        paddingLeft: number;
    };
    pL40: {
        paddingLeft: number;
    };
    pL44: {
        paddingLeft: number;
    };
    pL48: {
        paddingLeft: number;
    };
    pL52: {
        paddingLeft: number;
    };
    pL56: {
        paddingLeft: number;
    };
    pL60: {
        paddingLeft: number;
    };
    pL64: {
        paddingLeft: number;
    };
    pL72: {
        paddingLeft: number;
    };
    pL80: {
        paddingLeft: number;
    };
    pL96: {
        paddingLeft: number;
    };
    pRAuto: {
        paddingRight: "auto";
    };
    pR0: {
        paddingRight: number;
    };
    pRPx: {
        paddingRight: number;
    };
    pR0_5: {
        paddingRight: number;
    };
    pR1: {
        paddingRight: number;
    };
    pR2: {
        paddingRight: number;
    };
    pR3: {
        paddingRight: number;
    };
    pR4: {
        paddingRight: number;
    };
    pR5: {
        paddingRight: number;
    };
    pR6: {
        paddingRight: number;
    };
    pR7: {
        paddingRight: number;
    };
    pR8: {
        paddingRight: number;
    };
    pR9: {
        paddingRight: number;
    };
    pR10: {
        paddingRight: number;
    };
    pR11: {
        paddingRight: number;
    };
    pR12: {
        paddingRight: number;
    };
    pR14: {
        paddingRight: number;
    };
    pR16: {
        paddingRight: number;
    };
    pR20: {
        paddingRight: number;
    };
    pR24: {
        paddingRight: number;
    };
    pR28: {
        paddingRight: number;
    };
    pR32: {
        paddingRight: number;
    };
    pR36: {
        paddingRight: number;
    };
    pR40: {
        paddingRight: number;
    };
    pR44: {
        paddingRight: number;
    };
    pR48: {
        paddingRight: number;
    };
    pR52: {
        paddingRight: number;
    };
    pR56: {
        paddingRight: number;
    };
    pR60: {
        paddingRight: number;
    };
    pR64: {
        paddingRight: number;
    };
    pR72: {
        paddingRight: number;
    };
    pR80: {
        paddingRight: number;
    };
    pR96: {
        paddingRight: number;
    };
    pXAuto: {
        paddingHorizontal: "auto";
    };
    pX0: {
        paddingHorizontal: number;
    };
    pXPx: {
        paddingHorizontal: number;
    };
    pX0_5: {
        paddingHorizontal: number;
    };
    pX1: {
        paddingHorizontal: number;
    };
    pX2: {
        paddingHorizontal: number;
    };
    pX3: {
        paddingHorizontal: number;
    };
    pX4: {
        paddingHorizontal: number;
    };
    pX5: {
        paddingHorizontal: number;
    };
    pX6: {
        paddingHorizontal: number;
    };
    pX7: {
        paddingHorizontal: number;
    };
    pX8: {
        paddingHorizontal: number;
    };
    pX9: {
        paddingHorizontal: number;
    };
    pX10: {
        paddingHorizontal: number;
    };
    pX11: {
        paddingHorizontal: number;
    };
    pX12: {
        paddingHorizontal: number;
    };
    pX14: {
        paddingHorizontal: number;
    };
    pX16: {
        paddingHorizontal: number;
    };
    pX20: {
        paddingHorizontal: number;
    };
    pX24: {
        paddingHorizontal: number;
    };
    pX28: {
        paddingHorizontal: number;
    };
    pX32: {
        paddingHorizontal: number;
    };
    pX36: {
        paddingHorizontal: number;
    };
    pX40: {
        paddingHorizontal: number;
    };
    pX44: {
        paddingHorizontal: number;
    };
    pX48: {
        paddingHorizontal: number;
    };
    pX52: {
        paddingHorizontal: number;
    };
    pX56: {
        paddingHorizontal: number;
    };
    pX60: {
        paddingHorizontal: number;
    };
    pX64: {
        paddingHorizontal: number;
    };
    pX72: {
        paddingHorizontal: number;
    };
    pX80: {
        paddingHorizontal: number;
    };
    pX96: {
        paddingHorizontal: number;
    };
    pYAuto: {
        paddingVertical: "auto";
    };
    pY0: {
        paddingVertical: number;
    };
    pYPx: {
        paddingVertical: number;
    };
    pY0_5: {
        paddingVertical: number;
    };
    pY1: {
        paddingVertical: number;
    };
    pY2: {
        paddingVertical: number;
    };
    pY3: {
        paddingVertical: number;
    };
    pY4: {
        paddingVertical: number;
    };
    pY5: {
        paddingVertical: number;
    };
    pY6: {
        paddingVertical: number;
    };
    pY7: {
        paddingVertical: number;
    };
    pY8: {
        paddingVertical: number;
    };
    pY9: {
        paddingVertical: number;
    };
    pY10: {
        paddingVertical: number;
    };
    pY11: {
        paddingVertical: number;
    };
    pY12: {
        paddingVertical: number;
    };
    pY14: {
        paddingVertical: number;
    };
    pY16: {
        paddingVertical: number;
    };
    pY20: {
        paddingVertical: number;
    };
    pY24: {
        paddingVertical: number;
    };
    pY28: {
        paddingVertical: number;
    };
    pY32: {
        paddingVertical: number;
    };
    pY36: {
        paddingVertical: number;
    };
    pY40: {
        paddingVertical: number;
    };
    pY44: {
        paddingVertical: number;
    };
    pY48: {
        paddingVertical: number;
    };
    pY52: {
        paddingVertical: number;
    };
    pY56: {
        paddingVertical: number;
    };
    pY60: {
        paddingVertical: number;
    };
    pY64: {
        paddingVertical: number;
    };
    pY72: {
        paddingVertical: number;
    };
    pY80: {
        paddingVertical: number;
    };
    pY96: {
        paddingVertical: number;
    };
    pSAuto: {
        paddingStart: "auto";
    };
    pS0: {
        paddingStart: number;
    };
    pSPx: {
        paddingStart: number;
    };
    pS0_5: {
        paddingStart: number;
    };
    pS1: {
        paddingStart: number;
    };
    pS2: {
        paddingStart: number;
    };
    pS3: {
        paddingStart: number;
    };
    pS4: {
        paddingStart: number;
    };
    pS5: {
        paddingStart: number;
    };
    pS6: {
        paddingStart: number;
    };
    pS7: {
        paddingStart: number;
    };
    pS8: {
        paddingStart: number;
    };
    pS9: {
        paddingStart: number;
    };
    pS10: {
        paddingStart: number;
    };
    pS11: {
        paddingStart: number;
    };
    pS12: {
        paddingStart: number;
    };
    pS14: {
        paddingStart: number;
    };
    pS16: {
        paddingStart: number;
    };
    pS20: {
        paddingStart: number;
    };
    pS24: {
        paddingStart: number;
    };
    pS28: {
        paddingStart: number;
    };
    pS32: {
        paddingStart: number;
    };
    pS36: {
        paddingStart: number;
    };
    pS40: {
        paddingStart: number;
    };
    pS44: {
        paddingStart: number;
    };
    pS48: {
        paddingStart: number;
    };
    pS52: {
        paddingStart: number;
    };
    pS56: {
        paddingStart: number;
    };
    pS60: {
        paddingStart: number;
    };
    pS64: {
        paddingStart: number;
    };
    pS72: {
        paddingStart: number;
    };
    pS80: {
        paddingStart: number;
    };
    pS96: {
        paddingStart: number;
    };
    pEAuto: {
        paddingEnd: "auto";
    };
    pE0: {
        paddingEnd: number;
    };
    pEPx: {
        paddingEnd: number;
    };
    pE0_5: {
        paddingEnd: number;
    };
    pE1: {
        paddingEnd: number;
    };
    pE2: {
        paddingEnd: number;
    };
    pE3: {
        paddingEnd: number;
    };
    pE4: {
        paddingEnd: number;
    };
    pE5: {
        paddingEnd: number;
    };
    pE6: {
        paddingEnd: number;
    };
    pE7: {
        paddingEnd: number;
    };
    pE8: {
        paddingEnd: number;
    };
    pE9: {
        paddingEnd: number;
    };
    pE10: {
        paddingEnd: number;
    };
    pE11: {
        paddingEnd: number;
    };
    pE12: {
        paddingEnd: number;
    };
    pE14: {
        paddingEnd: number;
    };
    pE16: {
        paddingEnd: number;
    };
    pE20: {
        paddingEnd: number;
    };
    pE24: {
        paddingEnd: number;
    };
    pE28: {
        paddingEnd: number;
    };
    pE32: {
        paddingEnd: number;
    };
    pE36: {
        paddingEnd: number;
    };
    pE40: {
        paddingEnd: number;
    };
    pE44: {
        paddingEnd: number;
    };
    pE48: {
        paddingEnd: number;
    };
    pE52: {
        paddingEnd: number;
    };
    pE56: {
        paddingEnd: number;
    };
    pE60: {
        paddingEnd: number;
    };
    pE64: {
        paddingEnd: number;
    };
    pE72: {
        paddingEnd: number;
    };
    pE80: {
        paddingEnd: number;
    };
    pE96: {
        paddingEnd: number;
    };
    _pPx: {
        padding: number;
    };
    _p0_5: {
        padding: number;
    };
    _p1: {
        padding: number;
    };
    _p2: {
        padding: number;
    };
    _p3: {
        padding: number;
    };
    _p4: {
        padding: number;
    };
    _p5: {
        padding: number;
    };
    _p6: {
        padding: number;
    };
    _p7: {
        padding: number;
    };
    _p8: {
        padding: number;
    };
    _p9: {
        padding: number;
    };
    _p10: {
        padding: number;
    };
    _p11: {
        padding: number;
    };
    _p12: {
        padding: number;
    };
    _p14: {
        padding: number;
    };
    _p16: {
        padding: number;
    };
    _p20: {
        padding: number;
    };
    _p24: {
        padding: number;
    };
    _p28: {
        padding: number;
    };
    _p32: {
        padding: number;
    };
    _p36: {
        padding: number;
    };
    _p40: {
        padding: number;
    };
    _p44: {
        padding: number;
    };
    _p48: {
        padding: number;
    };
    _p52: {
        padding: number;
    };
    _p56: {
        padding: number;
    };
    _p60: {
        padding: number;
    };
    _p64: {
        padding: number;
    };
    _p72: {
        padding: number;
    };
    _p80: {
        padding: number;
    };
    _p96: {
        padding: number;
    };
    _pTPx: {
        paddingTop: number;
    };
    _pT0_5: {
        paddingTop: number;
    };
    _pT1: {
        paddingTop: number;
    };
    _pT2: {
        paddingTop: number;
    };
    _pT3: {
        paddingTop: number;
    };
    _pT4: {
        paddingTop: number;
    };
    _pT5: {
        paddingTop: number;
    };
    _pT6: {
        paddingTop: number;
    };
    _pT7: {
        paddingTop: number;
    };
    _pT8: {
        paddingTop: number;
    };
    _pT9: {
        paddingTop: number;
    };
    _pT10: {
        paddingTop: number;
    };
    _pT11: {
        paddingTop: number;
    };
    _pT12: {
        paddingTop: number;
    };
    _pT14: {
        paddingTop: number;
    };
    _pT16: {
        paddingTop: number;
    };
    _pT20: {
        paddingTop: number;
    };
    _pT24: {
        paddingTop: number;
    };
    _pT28: {
        paddingTop: number;
    };
    _pT32: {
        paddingTop: number;
    };
    _pT36: {
        paddingTop: number;
    };
    _pT40: {
        paddingTop: number;
    };
    _pT44: {
        paddingTop: number;
    };
    _pT48: {
        paddingTop: number;
    };
    _pT52: {
        paddingTop: number;
    };
    _pT56: {
        paddingTop: number;
    };
    _pT60: {
        paddingTop: number;
    };
    _pT64: {
        paddingTop: number;
    };
    _pT72: {
        paddingTop: number;
    };
    _pT80: {
        paddingTop: number;
    };
    _pT96: {
        paddingTop: number;
    };
    _pBPx: {
        paddingBottom: number;
    };
    _pB0_5: {
        paddingBottom: number;
    };
    _pB1: {
        paddingBottom: number;
    };
    _pB2: {
        paddingBottom: number;
    };
    _pB3: {
        paddingBottom: number;
    };
    _pB4: {
        paddingBottom: number;
    };
    _pB5: {
        paddingBottom: number;
    };
    _pB6: {
        paddingBottom: number;
    };
    _pB7: {
        paddingBottom: number;
    };
    _pB8: {
        paddingBottom: number;
    };
    _pB9: {
        paddingBottom: number;
    };
    _pB10: {
        paddingBottom: number;
    };
    _pB11: {
        paddingBottom: number;
    };
    _pB12: {
        paddingBottom: number;
    };
    _pB14: {
        paddingBottom: number;
    };
    _pB16: {
        paddingBottom: number;
    };
    _pB20: {
        paddingBottom: number;
    };
    _pB24: {
        paddingBottom: number;
    };
    _pB28: {
        paddingBottom: number;
    };
    _pB32: {
        paddingBottom: number;
    };
    _pB36: {
        paddingBottom: number;
    };
    _pB40: {
        paddingBottom: number;
    };
    _pB44: {
        paddingBottom: number;
    };
    _pB48: {
        paddingBottom: number;
    };
    _pB52: {
        paddingBottom: number;
    };
    _pB56: {
        paddingBottom: number;
    };
    _pB60: {
        paddingBottom: number;
    };
    _pB64: {
        paddingBottom: number;
    };
    _pB72: {
        paddingBottom: number;
    };
    _pB80: {
        paddingBottom: number;
    };
    _pB96: {
        paddingBottom: number;
    };
    _pLPx: {
        paddingLeft: number;
    };
    _pL0_5: {
        paddingLeft: number;
    };
    _pL1: {
        paddingLeft: number;
    };
    _pL2: {
        paddingLeft: number;
    };
    _pL3: {
        paddingLeft: number;
    };
    _pL4: {
        paddingLeft: number;
    };
    _pL5: {
        paddingLeft: number;
    };
    _pL6: {
        paddingLeft: number;
    };
    _pL7: {
        paddingLeft: number;
    };
    _pL8: {
        paddingLeft: number;
    };
    _pL9: {
        paddingLeft: number;
    };
    _pL10: {
        paddingLeft: number;
    };
    _pL11: {
        paddingLeft: number;
    };
    _pL12: {
        paddingLeft: number;
    };
    _pL14: {
        paddingLeft: number;
    };
    _pL16: {
        paddingLeft: number;
    };
    _pL20: {
        paddingLeft: number;
    };
    _pL24: {
        paddingLeft: number;
    };
    _pL28: {
        paddingLeft: number;
    };
    _pL32: {
        paddingLeft: number;
    };
    _pL36: {
        paddingLeft: number;
    };
    _pL40: {
        paddingLeft: number;
    };
    _pL44: {
        paddingLeft: number;
    };
    _pL48: {
        paddingLeft: number;
    };
    _pL52: {
        paddingLeft: number;
    };
    _pL56: {
        paddingLeft: number;
    };
    _pL60: {
        paddingLeft: number;
    };
    _pL64: {
        paddingLeft: number;
    };
    _pL72: {
        paddingLeft: number;
    };
    _pL80: {
        paddingLeft: number;
    };
    _pL96: {
        paddingLeft: number;
    };
    _pRPx: {
        paddingRight: number;
    };
    _pR0_5: {
        paddingRight: number;
    };
    _pR1: {
        paddingRight: number;
    };
    _pR2: {
        paddingRight: number;
    };
    _pR3: {
        paddingRight: number;
    };
    _pR4: {
        paddingRight: number;
    };
    _pR5: {
        paddingRight: number;
    };
    _pR6: {
        paddingRight: number;
    };
    _pR7: {
        paddingRight: number;
    };
    _pR8: {
        paddingRight: number;
    };
    _pR9: {
        paddingRight: number;
    };
    _pR10: {
        paddingRight: number;
    };
    _pR11: {
        paddingRight: number;
    };
    _pR12: {
        paddingRight: number;
    };
    _pR14: {
        paddingRight: number;
    };
    _pR16: {
        paddingRight: number;
    };
    _pR20: {
        paddingRight: number;
    };
    _pR24: {
        paddingRight: number;
    };
    _pR28: {
        paddingRight: number;
    };
    _pR32: {
        paddingRight: number;
    };
    _pR36: {
        paddingRight: number;
    };
    _pR40: {
        paddingRight: number;
    };
    _pR44: {
        paddingRight: number;
    };
    _pR48: {
        paddingRight: number;
    };
    _pR52: {
        paddingRight: number;
    };
    _pR56: {
        paddingRight: number;
    };
    _pR60: {
        paddingRight: number;
    };
    _pR64: {
        paddingRight: number;
    };
    _pR72: {
        paddingRight: number;
    };
    _pR80: {
        paddingRight: number;
    };
    _pR96: {
        paddingRight: number;
    };
    _pXPx: {
        paddingHorizontal: number;
    };
    _pX0_5: {
        paddingHorizontal: number;
    };
    _pX1: {
        paddingHorizontal: number;
    };
    _pX2: {
        paddingHorizontal: number;
    };
    _pX3: {
        paddingHorizontal: number;
    };
    _pX4: {
        paddingHorizontal: number;
    };
    _pX5: {
        paddingHorizontal: number;
    };
    _pX6: {
        paddingHorizontal: number;
    };
    _pX7: {
        paddingHorizontal: number;
    };
    _pX8: {
        paddingHorizontal: number;
    };
    _pX9: {
        paddingHorizontal: number;
    };
    _pX10: {
        paddingHorizontal: number;
    };
    _pX11: {
        paddingHorizontal: number;
    };
    _pX12: {
        paddingHorizontal: number;
    };
    _pX14: {
        paddingHorizontal: number;
    };
    _pX16: {
        paddingHorizontal: number;
    };
    _pX20: {
        paddingHorizontal: number;
    };
    _pX24: {
        paddingHorizontal: number;
    };
    _pX28: {
        paddingHorizontal: number;
    };
    _pX32: {
        paddingHorizontal: number;
    };
    _pX36: {
        paddingHorizontal: number;
    };
    _pX40: {
        paddingHorizontal: number;
    };
    _pX44: {
        paddingHorizontal: number;
    };
    _pX48: {
        paddingHorizontal: number;
    };
    _pX52: {
        paddingHorizontal: number;
    };
    _pX56: {
        paddingHorizontal: number;
    };
    _pX60: {
        paddingHorizontal: number;
    };
    _pX64: {
        paddingHorizontal: number;
    };
    _pX72: {
        paddingHorizontal: number;
    };
    _pX80: {
        paddingHorizontal: number;
    };
    _pX96: {
        paddingHorizontal: number;
    };
    _pYPx: {
        paddingVertical: number;
    };
    _pY0_5: {
        paddingVertical: number;
    };
    _pY1: {
        paddingVertical: number;
    };
    _pY2: {
        paddingVertical: number;
    };
    _pY3: {
        paddingVertical: number;
    };
    _pY4: {
        paddingVertical: number;
    };
    _pY5: {
        paddingVertical: number;
    };
    _pY6: {
        paddingVertical: number;
    };
    _pY7: {
        paddingVertical: number;
    };
    _pY8: {
        paddingVertical: number;
    };
    _pY9: {
        paddingVertical: number;
    };
    _pY10: {
        paddingVertical: number;
    };
    _pY11: {
        paddingVertical: number;
    };
    _pY12: {
        paddingVertical: number;
    };
    _pY14: {
        paddingVertical: number;
    };
    _pY16: {
        paddingVertical: number;
    };
    _pY20: {
        paddingVertical: number;
    };
    _pY24: {
        paddingVertical: number;
    };
    _pY28: {
        paddingVertical: number;
    };
    _pY32: {
        paddingVertical: number;
    };
    _pY36: {
        paddingVertical: number;
    };
    _pY40: {
        paddingVertical: number;
    };
    _pY44: {
        paddingVertical: number;
    };
    _pY48: {
        paddingVertical: number;
    };
    _pY52: {
        paddingVertical: number;
    };
    _pY56: {
        paddingVertical: number;
    };
    _pY60: {
        paddingVertical: number;
    };
    _pY64: {
        paddingVertical: number;
    };
    _pY72: {
        paddingVertical: number;
    };
    _pY80: {
        paddingVertical: number;
    };
    _pY96: {
        paddingVertical: number;
    };
    _pSPx: {
        paddingStart: number;
    };
    _pS0_5: {
        paddingStart: number;
    };
    _pS1: {
        paddingStart: number;
    };
    _pS2: {
        paddingStart: number;
    };
    _pS3: {
        paddingStart: number;
    };
    _pS4: {
        paddingStart: number;
    };
    _pS5: {
        paddingStart: number;
    };
    _pS6: {
        paddingStart: number;
    };
    _pS7: {
        paddingStart: number;
    };
    _pS8: {
        paddingStart: number;
    };
    _pS9: {
        paddingStart: number;
    };
    _pS10: {
        paddingStart: number;
    };
    _pS11: {
        paddingStart: number;
    };
    _pS12: {
        paddingStart: number;
    };
    _pS14: {
        paddingStart: number;
    };
    _pS16: {
        paddingStart: number;
    };
    _pS20: {
        paddingStart: number;
    };
    _pS24: {
        paddingStart: number;
    };
    _pS28: {
        paddingStart: number;
    };
    _pS32: {
        paddingStart: number;
    };
    _pS36: {
        paddingStart: number;
    };
    _pS40: {
        paddingStart: number;
    };
    _pS44: {
        paddingStart: number;
    };
    _pS48: {
        paddingStart: number;
    };
    _pS52: {
        paddingStart: number;
    };
    _pS56: {
        paddingStart: number;
    };
    _pS60: {
        paddingStart: number;
    };
    _pS64: {
        paddingStart: number;
    };
    _pS72: {
        paddingStart: number;
    };
    _pS80: {
        paddingStart: number;
    };
    _pS96: {
        paddingStart: number;
    };
    _pEPx: {
        paddingEnd: number;
    };
    _pE0_5: {
        paddingEnd: number;
    };
    _pE1: {
        paddingEnd: number;
    };
    _pE2: {
        paddingEnd: number;
    };
    _pE3: {
        paddingEnd: number;
    };
    _pE4: {
        paddingEnd: number;
    };
    _pE5: {
        paddingEnd: number;
    };
    _pE6: {
        paddingEnd: number;
    };
    _pE7: {
        paddingEnd: number;
    };
    _pE8: {
        paddingEnd: number;
    };
    _pE9: {
        paddingEnd: number;
    };
    _pE10: {
        paddingEnd: number;
    };
    _pE11: {
        paddingEnd: number;
    };
    _pE12: {
        paddingEnd: number;
    };
    _pE14: {
        paddingEnd: number;
    };
    _pE16: {
        paddingEnd: number;
    };
    _pE20: {
        paddingEnd: number;
    };
    _pE24: {
        paddingEnd: number;
    };
    _pE28: {
        paddingEnd: number;
    };
    _pE32: {
        paddingEnd: number;
    };
    _pE36: {
        paddingEnd: number;
    };
    _pE40: {
        paddingEnd: number;
    };
    _pE44: {
        paddingEnd: number;
    };
    _pE48: {
        paddingEnd: number;
    };
    _pE52: {
        paddingEnd: number;
    };
    _pE56: {
        paddingEnd: number;
    };
    _pE60: {
        paddingEnd: number;
    };
    _pE64: {
        paddingEnd: number;
    };
    _pE72: {
        paddingEnd: number;
    };
    _pE80: {
        paddingEnd: number;
    };
    _pE96: {
        paddingEnd: number;
    };
    mAuto: {
        margin: "auto";
    };
    m0: {
        margin: number;
    };
    mPx: {
        margin: number;
    };
    m0_5: {
        margin: number;
    };
    m1: {
        margin: number;
    };
    m2: {
        margin: number;
    };
    m3: {
        margin: number;
    };
    m4: {
        margin: number;
    };
    m5: {
        margin: number;
    };
    m6: {
        margin: number;
    };
    m7: {
        margin: number;
    };
    m8: {
        margin: number;
    };
    m9: {
        margin: number;
    };
    m10: {
        margin: number;
    };
    m11: {
        margin: number;
    };
    m12: {
        margin: number;
    };
    m14: {
        margin: number;
    };
    m16: {
        margin: number;
    };
    m20: {
        margin: number;
    };
    m24: {
        margin: number;
    };
    m28: {
        margin: number;
    };
    m32: {
        margin: number;
    };
    m36: {
        margin: number;
    };
    m40: {
        margin: number;
    };
    m44: {
        margin: number;
    };
    m48: {
        margin: number;
    };
    m52: {
        margin: number;
    };
    m56: {
        margin: number;
    };
    m60: {
        margin: number;
    };
    m64: {
        margin: number;
    };
    m72: {
        margin: number;
    };
    m80: {
        margin: number;
    };
    m96: {
        margin: number;
    };
    mTAuto: {
        marginTop: "auto";
    };
    mT0: {
        marginTop: number;
    };
    mTPx: {
        marginTop: number;
    };
    mT0_5: {
        marginTop: number;
    };
    mT1: {
        marginTop: number;
    };
    mT2: {
        marginTop: number;
    };
    mT3: {
        marginTop: number;
    };
    mT4: {
        marginTop: number;
    };
    mT5: {
        marginTop: number;
    };
    mT6: {
        marginTop: number;
    };
    mT7: {
        marginTop: number;
    };
    mT8: {
        marginTop: number;
    };
    mT9: {
        marginTop: number;
    };
    mT10: {
        marginTop: number;
    };
    mT11: {
        marginTop: number;
    };
    mT12: {
        marginTop: number;
    };
    mT14: {
        marginTop: number;
    };
    mT16: {
        marginTop: number;
    };
    mT20: {
        marginTop: number;
    };
    mT24: {
        marginTop: number;
    };
    mT28: {
        marginTop: number;
    };
    mT32: {
        marginTop: number;
    };
    mT36: {
        marginTop: number;
    };
    mT40: {
        marginTop: number;
    };
    mT44: {
        marginTop: number;
    };
    mT48: {
        marginTop: number;
    };
    mT52: {
        marginTop: number;
    };
    mT56: {
        marginTop: number;
    };
    mT60: {
        marginTop: number;
    };
    mT64: {
        marginTop: number;
    };
    mT72: {
        marginTop: number;
    };
    mT80: {
        marginTop: number;
    };
    mT96: {
        marginTop: number;
    };
    mBAuto: {
        marginBottom: "auto";
    };
    mB0: {
        marginBottom: number;
    };
    mBPx: {
        marginBottom: number;
    };
    mB0_5: {
        marginBottom: number;
    };
    mB1: {
        marginBottom: number;
    };
    mB2: {
        marginBottom: number;
    };
    mB3: {
        marginBottom: number;
    };
    mB4: {
        marginBottom: number;
    };
    mB5: {
        marginBottom: number;
    };
    mB6: {
        marginBottom: number;
    };
    mB7: {
        marginBottom: number;
    };
    mB8: {
        marginBottom: number;
    };
    mB9: {
        marginBottom: number;
    };
    mB10: {
        marginBottom: number;
    };
    mB11: {
        marginBottom: number;
    };
    mB12: {
        marginBottom: number;
    };
    mB14: {
        marginBottom: number;
    };
    mB16: {
        marginBottom: number;
    };
    mB20: {
        marginBottom: number;
    };
    mB24: {
        marginBottom: number;
    };
    mB28: {
        marginBottom: number;
    };
    mB32: {
        marginBottom: number;
    };
    mB36: {
        marginBottom: number;
    };
    mB40: {
        marginBottom: number;
    };
    mB44: {
        marginBottom: number;
    };
    mB48: {
        marginBottom: number;
    };
    mB52: {
        marginBottom: number;
    };
    mB56: {
        marginBottom: number;
    };
    mB60: {
        marginBottom: number;
    };
    mB64: {
        marginBottom: number;
    };
    mB72: {
        marginBottom: number;
    };
    mB80: {
        marginBottom: number;
    };
    mB96: {
        marginBottom: number;
    };
    mLAuto: {
        marginLeft: "auto";
    };
    mL0: {
        marginLeft: number;
    };
    mLPx: {
        marginLeft: number;
    };
    mL0_5: {
        marginLeft: number;
    };
    mL1: {
        marginLeft: number;
    };
    mL2: {
        marginLeft: number;
    };
    mL3: {
        marginLeft: number;
    };
    mL4: {
        marginLeft: number;
    };
    mL5: {
        marginLeft: number;
    };
    mL6: {
        marginLeft: number;
    };
    mL7: {
        marginLeft: number;
    };
    mL8: {
        marginLeft: number;
    };
    mL9: {
        marginLeft: number;
    };
    mL10: {
        marginLeft: number;
    };
    mL11: {
        marginLeft: number;
    };
    mL12: {
        marginLeft: number;
    };
    mL14: {
        marginLeft: number;
    };
    mL16: {
        marginLeft: number;
    };
    mL20: {
        marginLeft: number;
    };
    mL24: {
        marginLeft: number;
    };
    mL28: {
        marginLeft: number;
    };
    mL32: {
        marginLeft: number;
    };
    mL36: {
        marginLeft: number;
    };
    mL40: {
        marginLeft: number;
    };
    mL44: {
        marginLeft: number;
    };
    mL48: {
        marginLeft: number;
    };
    mL52: {
        marginLeft: number;
    };
    mL56: {
        marginLeft: number;
    };
    mL60: {
        marginLeft: number;
    };
    mL64: {
        marginLeft: number;
    };
    mL72: {
        marginLeft: number;
    };
    mL80: {
        marginLeft: number;
    };
    mL96: {
        marginLeft: number;
    };
    mRAuto: {
        marginRight: "auto";
    };
    mR0: {
        marginRight: number;
    };
    mRPx: {
        marginRight: number;
    };
    mR0_5: {
        marginRight: number;
    };
    mR1: {
        marginRight: number;
    };
    mR2: {
        marginRight: number;
    };
    mR3: {
        marginRight: number;
    };
    mR4: {
        marginRight: number;
    };
    mR5: {
        marginRight: number;
    };
    mR6: {
        marginRight: number;
    };
    mR7: {
        marginRight: number;
    };
    mR8: {
        marginRight: number;
    };
    mR9: {
        marginRight: number;
    };
    mR10: {
        marginRight: number;
    };
    mR11: {
        marginRight: number;
    };
    mR12: {
        marginRight: number;
    };
    mR14: {
        marginRight: number;
    };
    mR16: {
        marginRight: number;
    };
    mR20: {
        marginRight: number;
    };
    mR24: {
        marginRight: number;
    };
    mR28: {
        marginRight: number;
    };
    mR32: {
        marginRight: number;
    };
    mR36: {
        marginRight: number;
    };
    mR40: {
        marginRight: number;
    };
    mR44: {
        marginRight: number;
    };
    mR48: {
        marginRight: number;
    };
    mR52: {
        marginRight: number;
    };
    mR56: {
        marginRight: number;
    };
    mR60: {
        marginRight: number;
    };
    mR64: {
        marginRight: number;
    };
    mR72: {
        marginRight: number;
    };
    mR80: {
        marginRight: number;
    };
    mR96: {
        marginRight: number;
    };
    mXAuto: {
        marginHorizontal: "auto";
    };
    mX0: {
        marginHorizontal: number;
    };
    mXPx: {
        marginHorizontal: number;
    };
    mX0_5: {
        marginHorizontal: number;
    };
    mX1: {
        marginHorizontal: number;
    };
    mX2: {
        marginHorizontal: number;
    };
    mX3: {
        marginHorizontal: number;
    };
    mX4: {
        marginHorizontal: number;
    };
    mX5: {
        marginHorizontal: number;
    };
    mX6: {
        marginHorizontal: number;
    };
    mX7: {
        marginHorizontal: number;
    };
    mX8: {
        marginHorizontal: number;
    };
    mX9: {
        marginHorizontal: number;
    };
    mX10: {
        marginHorizontal: number;
    };
    mX11: {
        marginHorizontal: number;
    };
    mX12: {
        marginHorizontal: number;
    };
    mX14: {
        marginHorizontal: number;
    };
    mX16: {
        marginHorizontal: number;
    };
    mX20: {
        marginHorizontal: number;
    };
    mX24: {
        marginHorizontal: number;
    };
    mX28: {
        marginHorizontal: number;
    };
    mX32: {
        marginHorizontal: number;
    };
    mX36: {
        marginHorizontal: number;
    };
    mX40: {
        marginHorizontal: number;
    };
    mX44: {
        marginHorizontal: number;
    };
    mX48: {
        marginHorizontal: number;
    };
    mX52: {
        marginHorizontal: number;
    };
    mX56: {
        marginHorizontal: number;
    };
    mX60: {
        marginHorizontal: number;
    };
    mX64: {
        marginHorizontal: number;
    };
    mX72: {
        marginHorizontal: number;
    };
    mX80: {
        marginHorizontal: number;
    };
    mX96: {
        marginHorizontal: number;
    };
    mYAuto: {
        marginVertical: "auto";
    };
    mY0: {
        marginVertical: number;
    };
    mYPx: {
        marginVertical: number;
    };
    mY0_5: {
        marginVertical: number;
    };
    mY1: {
        marginVertical: number;
    };
    mY2: {
        marginVertical: number;
    };
    mY3: {
        marginVertical: number;
    };
    mY4: {
        marginVertical: number;
    };
    mY5: {
        marginVertical: number;
    };
    mY6: {
        marginVertical: number;
    };
    mY7: {
        marginVertical: number;
    };
    mY8: {
        marginVertical: number;
    };
    mY9: {
        marginVertical: number;
    };
    mY10: {
        marginVertical: number;
    };
    mY11: {
        marginVertical: number;
    };
    mY12: {
        marginVertical: number;
    };
    mY14: {
        marginVertical: number;
    };
    mY16: {
        marginVertical: number;
    };
    mY20: {
        marginVertical: number;
    };
    mY24: {
        marginVertical: number;
    };
    mY28: {
        marginVertical: number;
    };
    mY32: {
        marginVertical: number;
    };
    mY36: {
        marginVertical: number;
    };
    mY40: {
        marginVertical: number;
    };
    mY44: {
        marginVertical: number;
    };
    mY48: {
        marginVertical: number;
    };
    mY52: {
        marginVertical: number;
    };
    mY56: {
        marginVertical: number;
    };
    mY60: {
        marginVertical: number;
    };
    mY64: {
        marginVertical: number;
    };
    mY72: {
        marginVertical: number;
    };
    mY80: {
        marginVertical: number;
    };
    mY96: {
        marginVertical: number;
    };
    mSAuto: {
        marginStart: "auto";
    };
    mS0: {
        marginStart: number;
    };
    mSPx: {
        marginStart: number;
    };
    mS0_5: {
        marginStart: number;
    };
    mS1: {
        marginStart: number;
    };
    mS2: {
        marginStart: number;
    };
    mS3: {
        marginStart: number;
    };
    mS4: {
        marginStart: number;
    };
    mS5: {
        marginStart: number;
    };
    mS6: {
        marginStart: number;
    };
    mS7: {
        marginStart: number;
    };
    mS8: {
        marginStart: number;
    };
    mS9: {
        marginStart: number;
    };
    mS10: {
        marginStart: number;
    };
    mS11: {
        marginStart: number;
    };
    mS12: {
        marginStart: number;
    };
    mS14: {
        marginStart: number;
    };
    mS16: {
        marginStart: number;
    };
    mS20: {
        marginStart: number;
    };
    mS24: {
        marginStart: number;
    };
    mS28: {
        marginStart: number;
    };
    mS32: {
        marginStart: number;
    };
    mS36: {
        marginStart: number;
    };
    mS40: {
        marginStart: number;
    };
    mS44: {
        marginStart: number;
    };
    mS48: {
        marginStart: number;
    };
    mS52: {
        marginStart: number;
    };
    mS56: {
        marginStart: number;
    };
    mS60: {
        marginStart: number;
    };
    mS64: {
        marginStart: number;
    };
    mS72: {
        marginStart: number;
    };
    mS80: {
        marginStart: number;
    };
    mS96: {
        marginStart: number;
    };
    mEAuto: {
        marginEnd: "auto";
    };
    mE0: {
        marginEnd: number;
    };
    mEPx: {
        marginEnd: number;
    };
    mE0_5: {
        marginEnd: number;
    };
    mE1: {
        marginEnd: number;
    };
    mE2: {
        marginEnd: number;
    };
    mE3: {
        marginEnd: number;
    };
    mE4: {
        marginEnd: number;
    };
    mE5: {
        marginEnd: number;
    };
    mE6: {
        marginEnd: number;
    };
    mE7: {
        marginEnd: number;
    };
    mE8: {
        marginEnd: number;
    };
    mE9: {
        marginEnd: number;
    };
    mE10: {
        marginEnd: number;
    };
    mE11: {
        marginEnd: number;
    };
    mE12: {
        marginEnd: number;
    };
    mE14: {
        marginEnd: number;
    };
    mE16: {
        marginEnd: number;
    };
    mE20: {
        marginEnd: number;
    };
    mE24: {
        marginEnd: number;
    };
    mE28: {
        marginEnd: number;
    };
    mE32: {
        marginEnd: number;
    };
    mE36: {
        marginEnd: number;
    };
    mE40: {
        marginEnd: number;
    };
    mE44: {
        marginEnd: number;
    };
    mE48: {
        marginEnd: number;
    };
    mE52: {
        marginEnd: number;
    };
    mE56: {
        marginEnd: number;
    };
    mE60: {
        marginEnd: number;
    };
    mE64: {
        marginEnd: number;
    };
    mE72: {
        marginEnd: number;
    };
    mE80: {
        marginEnd: number;
    };
    mE96: {
        marginEnd: number;
    };
    _mPx: {
        margin: number;
    };
    _m0_5: {
        margin: number;
    };
    _m1: {
        margin: number;
    };
    _m2: {
        margin: number;
    };
    _m3: {
        margin: number;
    };
    _m4: {
        margin: number;
    };
    _m5: {
        margin: number;
    };
    _m6: {
        margin: number;
    };
    _m7: {
        margin: number;
    };
    _m8: {
        margin: number;
    };
    _m9: {
        margin: number;
    };
    _m10: {
        margin: number;
    };
    _m11: {
        margin: number;
    };
    _m12: {
        margin: number;
    };
    _m14: {
        margin: number;
    };
    _m16: {
        margin: number;
    };
    _m20: {
        margin: number;
    };
    _m24: {
        margin: number;
    };
    _m28: {
        margin: number;
    };
    _m32: {
        margin: number;
    };
    _m36: {
        margin: number;
    };
    _m40: {
        margin: number;
    };
    _m44: {
        margin: number;
    };
    _m48: {
        margin: number;
    };
    _m52: {
        margin: number;
    };
    _m56: {
        margin: number;
    };
    _m60: {
        margin: number;
    };
    _m64: {
        margin: number;
    };
    _m72: {
        margin: number;
    };
    _m80: {
        margin: number;
    };
    _m96: {
        margin: number;
    };
    _mTPx: {
        marginTop: number;
    };
    _mT0_5: {
        marginTop: number;
    };
    _mT1: {
        marginTop: number;
    };
    _mT2: {
        marginTop: number;
    };
    _mT3: {
        marginTop: number;
    };
    _mT4: {
        marginTop: number;
    };
    _mT5: {
        marginTop: number;
    };
    _mT6: {
        marginTop: number;
    };
    _mT7: {
        marginTop: number;
    };
    _mT8: {
        marginTop: number;
    };
    _mT9: {
        marginTop: number;
    };
    _mT10: {
        marginTop: number;
    };
    _mT11: {
        marginTop: number;
    };
    _mT12: {
        marginTop: number;
    };
    _mT14: {
        marginTop: number;
    };
    _mT16: {
        marginTop: number;
    };
    _mT20: {
        marginTop: number;
    };
    _mT24: {
        marginTop: number;
    };
    _mT28: {
        marginTop: number;
    };
    _mT32: {
        marginTop: number;
    };
    _mT36: {
        marginTop: number;
    };
    _mT40: {
        marginTop: number;
    };
    _mT44: {
        marginTop: number;
    };
    _mT48: {
        marginTop: number;
    };
    _mT52: {
        marginTop: number;
    };
    _mT56: {
        marginTop: number;
    };
    _mT60: {
        marginTop: number;
    };
    _mT64: {
        marginTop: number;
    };
    _mT72: {
        marginTop: number;
    };
    _mT80: {
        marginTop: number;
    };
    _mT96: {
        marginTop: number;
    };
    _mBPx: {
        marginBottom: number;
    };
    _mB0_5: {
        marginBottom: number;
    };
    _mB1: {
        marginBottom: number;
    };
    _mB2: {
        marginBottom: number;
    };
    _mB3: {
        marginBottom: number;
    };
    _mB4: {
        marginBottom: number;
    };
    _mB5: {
        marginBottom: number;
    };
    _mB6: {
        marginBottom: number;
    };
    _mB7: {
        marginBottom: number;
    };
    _mB8: {
        marginBottom: number;
    };
    _mB9: {
        marginBottom: number;
    };
    _mB10: {
        marginBottom: number;
    };
    _mB11: {
        marginBottom: number;
    };
    _mB12: {
        marginBottom: number;
    };
    _mB14: {
        marginBottom: number;
    };
    _mB16: {
        marginBottom: number;
    };
    _mB20: {
        marginBottom: number;
    };
    _mB24: {
        marginBottom: number;
    };
    _mB28: {
        marginBottom: number;
    };
    _mB32: {
        marginBottom: number;
    };
    _mB36: {
        marginBottom: number;
    };
    _mB40: {
        marginBottom: number;
    };
    _mB44: {
        marginBottom: number;
    };
    _mB48: {
        marginBottom: number;
    };
    _mB52: {
        marginBottom: number;
    };
    _mB56: {
        marginBottom: number;
    };
    _mB60: {
        marginBottom: number;
    };
    _mB64: {
        marginBottom: number;
    };
    _mB72: {
        marginBottom: number;
    };
    _mB80: {
        marginBottom: number;
    };
    _mB96: {
        marginBottom: number;
    };
    _mLPx: {
        marginLeft: number;
    };
    _mL0_5: {
        marginLeft: number;
    };
    _mL1: {
        marginLeft: number;
    };
    _mL2: {
        marginLeft: number;
    };
    _mL3: {
        marginLeft: number;
    };
    _mL4: {
        marginLeft: number;
    };
    _mL5: {
        marginLeft: number;
    };
    _mL6: {
        marginLeft: number;
    };
    _mL7: {
        marginLeft: number;
    };
    _mL8: {
        marginLeft: number;
    };
    _mL9: {
        marginLeft: number;
    };
    _mL10: {
        marginLeft: number;
    };
    _mL11: {
        marginLeft: number;
    };
    _mL12: {
        marginLeft: number;
    };
    _mL14: {
        marginLeft: number;
    };
    _mL16: {
        marginLeft: number;
    };
    _mL20: {
        marginLeft: number;
    };
    _mL24: {
        marginLeft: number;
    };
    _mL28: {
        marginLeft: number;
    };
    _mL32: {
        marginLeft: number;
    };
    _mL36: {
        marginLeft: number;
    };
    _mL40: {
        marginLeft: number;
    };
    _mL44: {
        marginLeft: number;
    };
    _mL48: {
        marginLeft: number;
    };
    _mL52: {
        marginLeft: number;
    };
    _mL56: {
        marginLeft: number;
    };
    _mL60: {
        marginLeft: number;
    };
    _mL64: {
        marginLeft: number;
    };
    _mL72: {
        marginLeft: number;
    };
    _mL80: {
        marginLeft: number;
    };
    _mL96: {
        marginLeft: number;
    };
    _mRPx: {
        marginRight: number;
    };
    _mR0_5: {
        marginRight: number;
    };
    _mR1: {
        marginRight: number;
    };
    _mR2: {
        marginRight: number;
    };
    _mR3: {
        marginRight: number;
    };
    _mR4: {
        marginRight: number;
    };
    _mR5: {
        marginRight: number;
    };
    _mR6: {
        marginRight: number;
    };
    _mR7: {
        marginRight: number;
    };
    _mR8: {
        marginRight: number;
    };
    _mR9: {
        marginRight: number;
    };
    _mR10: {
        marginRight: number;
    };
    _mR11: {
        marginRight: number;
    };
    _mR12: {
        marginRight: number;
    };
    _mR14: {
        marginRight: number;
    };
    _mR16: {
        marginRight: number;
    };
    _mR20: {
        marginRight: number;
    };
    _mR24: {
        marginRight: number;
    };
    _mR28: {
        marginRight: number;
    };
    _mR32: {
        marginRight: number;
    };
    _mR36: {
        marginRight: number;
    };
    _mR40: {
        marginRight: number;
    };
    _mR44: {
        marginRight: number;
    };
    _mR48: {
        marginRight: number;
    };
    _mR52: {
        marginRight: number;
    };
    _mR56: {
        marginRight: number;
    };
    _mR60: {
        marginRight: number;
    };
    _mR64: {
        marginRight: number;
    };
    _mR72: {
        marginRight: number;
    };
    _mR80: {
        marginRight: number;
    };
    _mR96: {
        marginRight: number;
    };
    _mXPx: {
        marginHorizontal: number;
    };
    _mX0_5: {
        marginHorizontal: number;
    };
    _mX1: {
        marginHorizontal: number;
    };
    _mX2: {
        marginHorizontal: number;
    };
    _mX3: {
        marginHorizontal: number;
    };
    _mX4: {
        marginHorizontal: number;
    };
    _mX5: {
        marginHorizontal: number;
    };
    _mX6: {
        marginHorizontal: number;
    };
    _mX7: {
        marginHorizontal: number;
    };
    _mX8: {
        marginHorizontal: number;
    };
    _mX9: {
        marginHorizontal: number;
    };
    _mX10: {
        marginHorizontal: number;
    };
    _mX11: {
        marginHorizontal: number;
    };
    _mX12: {
        marginHorizontal: number;
    };
    _mX14: {
        marginHorizontal: number;
    };
    _mX16: {
        marginHorizontal: number;
    };
    _mX20: {
        marginHorizontal: number;
    };
    _mX24: {
        marginHorizontal: number;
    };
    _mX28: {
        marginHorizontal: number;
    };
    _mX32: {
        marginHorizontal: number;
    };
    _mX36: {
        marginHorizontal: number;
    };
    _mX40: {
        marginHorizontal: number;
    };
    _mX44: {
        marginHorizontal: number;
    };
    _mX48: {
        marginHorizontal: number;
    };
    _mX52: {
        marginHorizontal: number;
    };
    _mX56: {
        marginHorizontal: number;
    };
    _mX60: {
        marginHorizontal: number;
    };
    _mX64: {
        marginHorizontal: number;
    };
    _mX72: {
        marginHorizontal: number;
    };
    _mX80: {
        marginHorizontal: number;
    };
    _mX96: {
        marginHorizontal: number;
    };
    _mYPx: {
        marginVertical: number;
    };
    _mY0_5: {
        marginVertical: number;
    };
    _mY1: {
        marginVertical: number;
    };
    _mY2: {
        marginVertical: number;
    };
    _mY3: {
        marginVertical: number;
    };
    _mY4: {
        marginVertical: number;
    };
    _mY5: {
        marginVertical: number;
    };
    _mY6: {
        marginVertical: number;
    };
    _mY7: {
        marginVertical: number;
    };
    _mY8: {
        marginVertical: number;
    };
    _mY9: {
        marginVertical: number;
    };
    _mY10: {
        marginVertical: number;
    };
    _mY11: {
        marginVertical: number;
    };
    _mY12: {
        marginVertical: number;
    };
    _mY14: {
        marginVertical: number;
    };
    _mY16: {
        marginVertical: number;
    };
    _mY20: {
        marginVertical: number;
    };
    _mY24: {
        marginVertical: number;
    };
    _mY28: {
        marginVertical: number;
    };
    _mY32: {
        marginVertical: number;
    };
    _mY36: {
        marginVertical: number;
    };
    _mY40: {
        marginVertical: number;
    };
    _mY44: {
        marginVertical: number;
    };
    _mY48: {
        marginVertical: number;
    };
    _mY52: {
        marginVertical: number;
    };
    _mY56: {
        marginVertical: number;
    };
    _mY60: {
        marginVertical: number;
    };
    _mY64: {
        marginVertical: number;
    };
    _mY72: {
        marginVertical: number;
    };
    _mY80: {
        marginVertical: number;
    };
    _mY96: {
        marginVertical: number;
    };
    _mSPx: {
        marginStart: number;
    };
    _mS0_5: {
        marginStart: number;
    };
    _mS1: {
        marginStart: number;
    };
    _mS2: {
        marginStart: number;
    };
    _mS3: {
        marginStart: number;
    };
    _mS4: {
        marginStart: number;
    };
    _mS5: {
        marginStart: number;
    };
    _mS6: {
        marginStart: number;
    };
    _mS7: {
        marginStart: number;
    };
    _mS8: {
        marginStart: number;
    };
    _mS9: {
        marginStart: number;
    };
    _mS10: {
        marginStart: number;
    };
    _mS11: {
        marginStart: number;
    };
    _mS12: {
        marginStart: number;
    };
    _mS14: {
        marginStart: number;
    };
    _mS16: {
        marginStart: number;
    };
    _mS20: {
        marginStart: number;
    };
    _mS24: {
        marginStart: number;
    };
    _mS28: {
        marginStart: number;
    };
    _mS32: {
        marginStart: number;
    };
    _mS36: {
        marginStart: number;
    };
    _mS40: {
        marginStart: number;
    };
    _mS44: {
        marginStart: number;
    };
    _mS48: {
        marginStart: number;
    };
    _mS52: {
        marginStart: number;
    };
    _mS56: {
        marginStart: number;
    };
    _mS60: {
        marginStart: number;
    };
    _mS64: {
        marginStart: number;
    };
    _mS72: {
        marginStart: number;
    };
    _mS80: {
        marginStart: number;
    };
    _mS96: {
        marginStart: number;
    };
    _mEPx: {
        marginEnd: number;
    };
    _mE0_5: {
        marginEnd: number;
    };
    _mE1: {
        marginEnd: number;
    };
    _mE2: {
        marginEnd: number;
    };
    _mE3: {
        marginEnd: number;
    };
    _mE4: {
        marginEnd: number;
    };
    _mE5: {
        marginEnd: number;
    };
    _mE6: {
        marginEnd: number;
    };
    _mE7: {
        marginEnd: number;
    };
    _mE8: {
        marginEnd: number;
    };
    _mE9: {
        marginEnd: number;
    };
    _mE10: {
        marginEnd: number;
    };
    _mE11: {
        marginEnd: number;
    };
    _mE12: {
        marginEnd: number;
    };
    _mE14: {
        marginEnd: number;
    };
    _mE16: {
        marginEnd: number;
    };
    _mE20: {
        marginEnd: number;
    };
    _mE24: {
        marginEnd: number;
    };
    _mE28: {
        marginEnd: number;
    };
    _mE32: {
        marginEnd: number;
    };
    _mE36: {
        marginEnd: number;
    };
    _mE40: {
        marginEnd: number;
    };
    _mE44: {
        marginEnd: number;
    };
    _mE48: {
        marginEnd: number;
    };
    _mE52: {
        marginEnd: number;
    };
    _mE56: {
        marginEnd: number;
    };
    _mE60: {
        marginEnd: number;
    };
    _mE64: {
        marginEnd: number;
    };
    _mE72: {
        marginEnd: number;
    };
    _mE80: {
        marginEnd: number;
    };
    _mE96: {
        marginEnd: number;
    };
    wFull: {
        width: "100%";
    };
    w0: {
        width: number;
    };
    wPx: {
        width: number;
    };
    w0_5: {
        width: number;
    };
    w1: {
        width: number;
    };
    w2: {
        width: number;
    };
    w3: {
        width: number;
    };
    w4: {
        width: number;
    };
    w5: {
        width: number;
    };
    w6: {
        width: number;
    };
    w7: {
        width: number;
    };
    w8: {
        width: number;
    };
    w9: {
        width: number;
    };
    w10: {
        width: number;
    };
    w11: {
        width: number;
    };
    w12: {
        width: number;
    };
    w14: {
        width: number;
    };
    w16: {
        width: number;
    };
    w20: {
        width: number;
    };
    w24: {
        width: number;
    };
    w28: {
        width: number;
    };
    w32: {
        width: number;
    };
    w36: {
        width: number;
    };
    w40: {
        width: number;
    };
    w44: {
        width: number;
    };
    w48: {
        width: number;
    };
    w52: {
        width: number;
    };
    w56: {
        width: number;
    };
    w60: {
        width: number;
    };
    w64: {
        width: number;
    };
    w72: {
        width: number;
    };
    w80: {
        width: number;
    };
    w96: {
        width: number;
    };
    w1_2: {
        width: "50%";
    };
    w1_3: {
        width: "33.333333%";
    };
    w2_3: {
        width: "66.666667%";
    };
    w1_4: {
        width: "25%";
    };
    w2_4: {
        width: "50%";
    };
    w3_4: {
        width: "75%";
    };
    w1_5: {
        width: "20%";
    };
    w2_5: {
        width: "40%";
    };
    w3_5: {
        width: "60%";
    };
    w4_5: {
        width: "80%";
    };
    w1_6: {
        width: "16.666667%";
    };
    w2_6: {
        width: "33.333333%";
    };
    w3_6: {
        width: "50%";
    };
    w4_6: {
        width: "66.666667%";
    };
    w5_6: {
        width: "83.333333%";
    };
    minW0: {
        minWidth: number;
    };
    minWPx: {
        minWidth: number;
    };
    minW0_5: {
        minWidth: number;
    };
    minW1: {
        minWidth: number;
    };
    minW2: {
        minWidth: number;
    };
    minW3: {
        minWidth: number;
    };
    minW4: {
        minWidth: number;
    };
    minW5: {
        minWidth: number;
    };
    minW6: {
        minWidth: number;
    };
    minW7: {
        minWidth: number;
    };
    minW8: {
        minWidth: number;
    };
    minW9: {
        minWidth: number;
    };
    minW10: {
        minWidth: number;
    };
    minW11: {
        minWidth: number;
    };
    minW12: {
        minWidth: number;
    };
    minW14: {
        minWidth: number;
    };
    minW16: {
        minWidth: number;
    };
    minW20: {
        minWidth: number;
    };
    minW24: {
        minWidth: number;
    };
    minW28: {
        minWidth: number;
    };
    minW32: {
        minWidth: number;
    };
    minW36: {
        minWidth: number;
    };
    minW40: {
        minWidth: number;
    };
    minW44: {
        minWidth: number;
    };
    minW48: {
        minWidth: number;
    };
    minW52: {
        minWidth: number;
    };
    minW56: {
        minWidth: number;
    };
    minW60: {
        minWidth: number;
    };
    minW64: {
        minWidth: number;
    };
    minW72: {
        minWidth: number;
    };
    minW80: {
        minWidth: number;
    };
    minW96: {
        minWidth: number;
    };
    minWFull: {
        minWidth: "100%";
    };
    maxW0: {
        maxWidth: number;
    };
    maxWPx: {
        maxWidth: number;
    };
    maxW0_5: {
        maxWidth: number;
    };
    maxW1: {
        maxWidth: number;
    };
    maxW2: {
        maxWidth: number;
    };
    maxW3: {
        maxWidth: number;
    };
    maxW4: {
        maxWidth: number;
    };
    maxW5: {
        maxWidth: number;
    };
    maxW6: {
        maxWidth: number;
    };
    maxW7: {
        maxWidth: number;
    };
    maxW8: {
        maxWidth: number;
    };
    maxW9: {
        maxWidth: number;
    };
    maxW10: {
        maxWidth: number;
    };
    maxW11: {
        maxWidth: number;
    };
    maxW12: {
        maxWidth: number;
    };
    maxW14: {
        maxWidth: number;
    };
    maxW16: {
        maxWidth: number;
    };
    maxW20: {
        maxWidth: number;
    };
    maxW24: {
        maxWidth: number;
    };
    maxW28: {
        maxWidth: number;
    };
    maxW32: {
        maxWidth: number;
    };
    maxW36: {
        maxWidth: number;
    };
    maxW40: {
        maxWidth: number;
    };
    maxW44: {
        maxWidth: number;
    };
    maxW48: {
        maxWidth: number;
    };
    maxW52: {
        maxWidth: number;
    };
    maxW56: {
        maxWidth: number;
    };
    maxW60: {
        maxWidth: number;
    };
    maxW64: {
        maxWidth: number;
    };
    maxW72: {
        maxWidth: number;
    };
    maxW80: {
        maxWidth: number;
    };
    maxW96: {
        maxWidth: number;
    };
    maxW1_2: {
        maxWidth: "50%";
    };
    maxW1_3: {
        maxWidth: "33.333333%";
    };
    maxW2_3: {
        maxWidth: "66.666667%";
    };
    maxW1_4: {
        maxWidth: "25%";
    };
    maxW2_4: {
        maxWidth: "50%";
    };
    maxW3_4: {
        maxWidth: "75%";
    };
    maxW1_5: {
        maxWidth: "20%";
    };
    maxW2_5: {
        maxWidth: "40%";
    };
    maxW3_5: {
        maxWidth: "60%";
    };
    maxW4_5: {
        maxWidth: "80%";
    };
    maxW1_6: {
        maxWidth: "16.666667%";
    };
    maxW2_6: {
        maxWidth: "33.333333%";
    };
    maxW3_6: {
        maxWidth: "50%";
    };
    maxW4_6: {
        maxWidth: "66.666667%";
    };
    maxW5_6: {
        maxWidth: "83.333333%";
    };
    maxWFull: {
        maxWidth: "100%";
    };
    maxWScreenSm: {
        maxWidth: number;
    };
    maxWScreenMd: {
        maxWidth: number;
    };
    maxWScreenLg: {
        maxWidth: number;
    };
    maxWScreenXl: {
        maxWidth: number;
    };
    maxWScreen2xl: {
        maxWidth: number;
    };
    hFull: {
        height: "100%";
    };
    hScreen: {
        height: number;
    };
    h0: {
        height: number;
    };
    hPx: {
        height: number;
    };
    h0_5: {
        height: number;
    };
    h1: {
        height: number;
    };
    h2: {
        height: number;
    };
    h3: {
        height: number;
    };
    h4: {
        height: number;
    };
    h5: {
        height: number;
    };
    h6: {
        height: number;
    };
    h7: {
        height: number;
    };
    h8: {
        height: number;
    };
    h9: {
        height: number;
    };
    h10: {
        height: number;
    };
    h11: {
        height: number;
    };
    h12: {
        height: number;
    };
    h14: {
        height: number;
    };
    h16: {
        height: number;
    };
    h20: {
        height: number;
    };
    h24: {
        height: number;
    };
    h28: {
        height: number;
    };
    h32: {
        height: number;
    };
    h36: {
        height: number;
    };
    h40: {
        height: number;
    };
    h44: {
        height: number;
    };
    h48: {
        height: number;
    };
    h52: {
        height: number;
    };
    h56: {
        height: number;
    };
    h60: {
        height: number;
    };
    h64: {
        height: number;
    };
    h72: {
        height: number;
    };
    h80: {
        height: number;
    };
    h96: {
        height: number;
    };
    minHFull: {
        minHeight: "100%";
    };
    minH0: {
        minHeight: number;
    };
    maxHFull: {
        maxHeight: "100%";
    };
    maxH0: {
        maxHeight: number;
    };
    maxHPx: {
        maxHeight: number;
    };
    maxH0_5: {
        maxHeight: number;
    };
    maxH1: {
        maxHeight: number;
    };
    maxH2: {
        maxHeight: number;
    };
    maxH3: {
        maxHeight: number;
    };
    maxH4: {
        maxHeight: number;
    };
    maxH5: {
        maxHeight: number;
    };
    maxH6: {
        maxHeight: number;
    };
    maxH7: {
        maxHeight: number;
    };
    maxH8: {
        maxHeight: number;
    };
    maxH9: {
        maxHeight: number;
    };
    maxH10: {
        maxHeight: number;
    };
    maxH11: {
        maxHeight: number;
    };
    maxH12: {
        maxHeight: number;
    };
    maxH14: {
        maxHeight: number;
    };
    maxH16: {
        maxHeight: number;
    };
    maxH20: {
        maxHeight: number;
    };
    maxH24: {
        maxHeight: number;
    };
    maxH28: {
        maxHeight: number;
    };
    maxH32: {
        maxHeight: number;
    };
    maxH36: {
        maxHeight: number;
    };
    maxH40: {
        maxHeight: number;
    };
    maxH44: {
        maxHeight: number;
    };
    maxH48: {
        maxHeight: number;
    };
    maxH52: {
        maxHeight: number;
    };
    maxH56: {
        maxHeight: number;
    };
    maxH60: {
        maxHeight: number;
    };
    maxH64: {
        maxHeight: number;
    };
    maxH72: {
        maxHeight: number;
    };
    maxH80: {
        maxHeight: number;
    };
    maxH96: {
        maxHeight: number;
    };
    flex: {
        display: "flex";
    };
    hidden: {
        display: "none";
    };
    resizeContain: {
        resizeMode: "contain";
    };
    resizeCover: {
        resizeMode: "cover";
    };
    resizeStretch: {
        resizeMode: "stretch";
    };
    resizeCenter: {
        resizeMode: "center";
    };
    resizeRepeat: {
        resizeMode: "repeat";
    };
    overflowVisible: {
        overflow: "visible";
    };
    overflowHidden: {
        overflow: "hidden";
    };
    relative: {
        position: "relative";
    };
    absolute: {
        position: "absolute";
    };
    inset0: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    insetPx: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset0_5: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset1: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset2: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset3: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset4: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset5: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset6: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset7: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset8: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset9: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset10: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset11: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset12: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset14: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset16: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset20: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset24: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset28: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset32: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset36: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset40: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset44: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset48: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset52: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset56: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset60: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset64: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset72: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset80: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset96: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    inset1_2: {
        top: "50%";
        bottom: "50%";
        left: "50%";
        right: "50%";
    };
    inset1_3: {
        top: "33.333333%";
        bottom: "33.333333%";
        left: "33.333333%";
        right: "33.333333%";
    };
    inset2_3: {
        top: "66.666667%";
        bottom: "66.666667%";
        left: "66.666667%";
        right: "66.666667%";
    };
    inset1_4: {
        top: "25%";
        bottom: "25%";
        left: "25%";
        right: "25%";
    };
    inset2_4: {
        top: "50%";
        bottom: "50%";
        left: "50%";
        right: "50%";
    };
    inset3_4: {
        top: "75%";
        bottom: "75%";
        left: "75%";
        right: "75%";
    };
    inset1_5: {
        top: "20%";
        bottom: "20%";
        left: "20%";
        right: "20%";
    };
    inset2_5: {
        top: "40%";
        bottom: "40%";
        left: "40%";
        right: "40%";
    };
    inset3_5: {
        top: "60%";
        bottom: "60%";
        left: "60%";
        right: "60%";
    };
    inset4_5: {
        top: "80%";
        bottom: "80%";
        left: "80%";
        right: "80%";
    };
    insetY0: {
        top: number;
        bottom: number;
    };
    insetYPx: {
        top: number;
        bottom: number;
    };
    insetY0_5: {
        top: number;
        bottom: number;
    };
    insetY1: {
        top: number;
        bottom: number;
    };
    insetY2: {
        top: number;
        bottom: number;
    };
    insetY3: {
        top: number;
        bottom: number;
    };
    insetY4: {
        top: number;
        bottom: number;
    };
    insetY5: {
        top: number;
        bottom: number;
    };
    insetY6: {
        top: number;
        bottom: number;
    };
    insetY7: {
        top: number;
        bottom: number;
    };
    insetY8: {
        top: number;
        bottom: number;
    };
    insetY9: {
        top: number;
        bottom: number;
    };
    insetY10: {
        top: number;
        bottom: number;
    };
    insetY11: {
        top: number;
        bottom: number;
    };
    insetY12: {
        top: number;
        bottom: number;
    };
    insetY14: {
        top: number;
        bottom: number;
    };
    insetY16: {
        top: number;
        bottom: number;
    };
    insetY20: {
        top: number;
        bottom: number;
    };
    insetY24: {
        top: number;
        bottom: number;
    };
    insetY28: {
        top: number;
        bottom: number;
    };
    insetY32: {
        top: number;
        bottom: number;
    };
    insetY36: {
        top: number;
        bottom: number;
    };
    insetY40: {
        top: number;
        bottom: number;
    };
    insetY44: {
        top: number;
        bottom: number;
    };
    insetY48: {
        top: number;
        bottom: number;
    };
    insetY52: {
        top: number;
        bottom: number;
    };
    insetY56: {
        top: number;
        bottom: number;
    };
    insetY60: {
        top: number;
        bottom: number;
    };
    insetY64: {
        top: number;
        bottom: number;
    };
    insetY72: {
        top: number;
        bottom: number;
    };
    insetY80: {
        top: number;
        bottom: number;
    };
    insetY96: {
        top: number;
        bottom: number;
    };
    insetX0: {
        left: number;
        right: number;
    };
    insetXPx: {
        left: number;
        right: number;
    };
    insetX0_5: {
        left: number;
        right: number;
    };
    insetX1: {
        left: number;
        right: number;
    };
    insetX2: {
        left: number;
        right: number;
    };
    insetX3: {
        left: number;
        right: number;
    };
    insetX4: {
        left: number;
        right: number;
    };
    insetX5: {
        left: number;
        right: number;
    };
    insetX6: {
        left: number;
        right: number;
    };
    insetX7: {
        left: number;
        right: number;
    };
    insetX8: {
        left: number;
        right: number;
    };
    insetX9: {
        left: number;
        right: number;
    };
    insetX10: {
        left: number;
        right: number;
    };
    insetX11: {
        left: number;
        right: number;
    };
    insetX12: {
        left: number;
        right: number;
    };
    insetX14: {
        left: number;
        right: number;
    };
    insetX16: {
        left: number;
        right: number;
    };
    insetX20: {
        left: number;
        right: number;
    };
    insetX24: {
        left: number;
        right: number;
    };
    insetX28: {
        left: number;
        right: number;
    };
    insetX32: {
        left: number;
        right: number;
    };
    insetX36: {
        left: number;
        right: number;
    };
    insetX40: {
        left: number;
        right: number;
    };
    insetX44: {
        left: number;
        right: number;
    };
    insetX48: {
        left: number;
        right: number;
    };
    insetX52: {
        left: number;
        right: number;
    };
    insetX56: {
        left: number;
        right: number;
    };
    insetX60: {
        left: number;
        right: number;
    };
    insetX64: {
        left: number;
        right: number;
    };
    insetX72: {
        left: number;
        right: number;
    };
    insetX80: {
        left: number;
        right: number;
    };
    insetX96: {
        left: number;
        right: number;
    };
    _inset0: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _insetPx: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset0_5: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset1: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset2: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset3: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset4: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset5: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset6: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset7: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset8: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset9: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset10: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset11: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset12: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset14: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset16: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset20: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset24: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset28: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset32: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset36: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset40: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset44: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset48: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset52: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset56: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset60: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset64: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset72: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset80: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset96: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    _inset1_2: {
        top: "-50%";
        bottom: "-50%";
        left: "-50%";
        right: "-50%";
    };
    _inset1_3: {
        top: "-33.333333%";
        bottom: "-33.333333%";
        left: "-33.333333%";
        right: "-33.333333%";
    };
    _inset2_3: {
        top: "-66.666667%";
        bottom: "-66.666667%";
        left: "-66.666667%";
        right: "-66.666667%";
    };
    _inset1_4: {
        top: "-25%";
        bottom: "-25%";
        left: "-25%";
        right: "-25%";
    };
    _inset2_4: {
        top: "-50%";
        bottom: "-50%";
        left: "-50%";
        right: "-50%";
    };
    _inset3_4: {
        top: "-75%";
        bottom: "-75%";
        left: "-75%";
        right: "-75%";
    };
    _inset1_5: {
        top: "-20%";
        bottom: "-20%";
        left: "-20%";
        right: "-20%";
    };
    _inset2_5: {
        top: "-40%";
        bottom: "-40%";
        left: "-40%";
        right: "-40%";
    };
    _inset3_5: {
        top: "-60%";
        bottom: "-60%";
        left: "-60%";
        right: "-60%";
    };
    _inset4_5: {
        top: "-80%";
        bottom: "-80%";
        left: "-80%";
        right: "-80%";
    };
    _insetY0: {
        top: number;
        bottom: number;
    };
    _insetYPx: {
        top: number;
        bottom: number;
    };
    _insetY0_5: {
        top: number;
        bottom: number;
    };
    _insetY1: {
        top: number;
        bottom: number;
    };
    _insetY2: {
        top: number;
        bottom: number;
    };
    _insetY3: {
        top: number;
        bottom: number;
    };
    _insetY4: {
        top: number;
        bottom: number;
    };
    _insetY5: {
        top: number;
        bottom: number;
    };
    _insetY6: {
        top: number;
        bottom: number;
    };
    _insetY7: {
        top: number;
        bottom: number;
    };
    _insetY8: {
        top: number;
        bottom: number;
    };
    _insetY9: {
        top: number;
        bottom: number;
    };
    _insetY10: {
        top: number;
        bottom: number;
    };
    _insetY11: {
        top: number;
        bottom: number;
    };
    _insetY12: {
        top: number;
        bottom: number;
    };
    _insetY14: {
        top: number;
        bottom: number;
    };
    _insetY16: {
        top: number;
        bottom: number;
    };
    _insetY20: {
        top: number;
        bottom: number;
    };
    _insetY24: {
        top: number;
        bottom: number;
    };
    _insetY28: {
        top: number;
        bottom: number;
    };
    _insetY32: {
        top: number;
        bottom: number;
    };
    _insetY36: {
        top: number;
        bottom: number;
    };
    _insetY40: {
        top: number;
        bottom: number;
    };
    _insetY44: {
        top: number;
        bottom: number;
    };
    _insetY48: {
        top: number;
        bottom: number;
    };
    _insetY52: {
        top: number;
        bottom: number;
    };
    _insetY56: {
        top: number;
        bottom: number;
    };
    _insetY60: {
        top: number;
        bottom: number;
    };
    _insetY64: {
        top: number;
        bottom: number;
    };
    _insetY72: {
        top: number;
        bottom: number;
    };
    _insetY80: {
        top: number;
        bottom: number;
    };
    _insetY96: {
        top: number;
        bottom: number;
    };
    _insetX0: {
        left: number;
        right: number;
    };
    _insetXPx: {
        left: number;
        right: number;
    };
    _insetX0_5: {
        left: number;
        right: number;
    };
    _insetX1: {
        left: number;
        right: number;
    };
    _insetX2: {
        left: number;
        right: number;
    };
    _insetX3: {
        left: number;
        right: number;
    };
    _insetX4: {
        left: number;
        right: number;
    };
    _insetX5: {
        left: number;
        right: number;
    };
    _insetX6: {
        left: number;
        right: number;
    };
    _insetX7: {
        left: number;
        right: number;
    };
    _insetX8: {
        left: number;
        right: number;
    };
    _insetX9: {
        left: number;
        right: number;
    };
    _insetX10: {
        left: number;
        right: number;
    };
    _insetX11: {
        left: number;
        right: number;
    };
    _insetX12: {
        left: number;
        right: number;
    };
    _insetX14: {
        left: number;
        right: number;
    };
    _insetX16: {
        left: number;
        right: number;
    };
    _insetX20: {
        left: number;
        right: number;
    };
    _insetX24: {
        left: number;
        right: number;
    };
    _insetX28: {
        left: number;
        right: number;
    };
    _insetX32: {
        left: number;
        right: number;
    };
    _insetX36: {
        left: number;
        right: number;
    };
    _insetX40: {
        left: number;
        right: number;
    };
    _insetX44: {
        left: number;
        right: number;
    };
    _insetX48: {
        left: number;
        right: number;
    };
    _insetX52: {
        left: number;
        right: number;
    };
    _insetX56: {
        left: number;
        right: number;
    };
    _insetX60: {
        left: number;
        right: number;
    };
    _insetX64: {
        left: number;
        right: number;
    };
    _insetX72: {
        left: number;
        right: number;
    };
    _insetX80: {
        left: number;
        right: number;
    };
    _insetX96: {
        left: number;
        right: number;
    };
    top0: {
        top: number;
    };
    topPx: {
        top: number;
    };
    top0_5: {
        top: number;
    };
    top1: {
        top: number;
    };
    top2: {
        top: number;
    };
    top3: {
        top: number;
    };
    top4: {
        top: number;
    };
    top5: {
        top: number;
    };
    top6: {
        top: number;
    };
    top7: {
        top: number;
    };
    top8: {
        top: number;
    };
    top9: {
        top: number;
    };
    top10: {
        top: number;
    };
    top11: {
        top: number;
    };
    top12: {
        top: number;
    };
    top14: {
        top: number;
    };
    top16: {
        top: number;
    };
    top20: {
        top: number;
    };
    top24: {
        top: number;
    };
    top28: {
        top: number;
    };
    top32: {
        top: number;
    };
    top36: {
        top: number;
    };
    top40: {
        top: number;
    };
    top44: {
        top: number;
    };
    top48: {
        top: number;
    };
    top52: {
        top: number;
    };
    top56: {
        top: number;
    };
    top60: {
        top: number;
    };
    top64: {
        top: number;
    };
    top72: {
        top: number;
    };
    top80: {
        top: number;
    };
    top96: {
        top: number;
    };
    top1_2: {
        top: "50%";
    };
    top1_3: {
        top: "33.333333%";
    };
    top2_3: {
        top: "66.666667%";
    };
    top1_4: {
        top: "25%";
    };
    top2_4: {
        top: "50%";
    };
    top3_4: {
        top: "75%";
    };
    top1_5: {
        top: "20%";
    };
    top2_5: {
        top: "40%";
    };
    top3_5: {
        top: "60%";
    };
    top4_5: {
        top: "80%";
    };
    top1_6: {
        top: "16.666667%";
    };
    top2_6: {
        top: "33.333333%";
    };
    top3_6: {
        top: "50%";
    };
    top4_6: {
        top: "66.666667%";
    };
    top5_6: {
        top: "83.333333%";
    };
    topFull: {
        top: "100%";
    };
    _top0: {
        top: number;
    };
    _topPx: {
        top: number;
    };
    _top0_5: {
        top: number;
    };
    _top1: {
        top: number;
    };
    _top2: {
        top: number;
    };
    _top3: {
        top: number;
    };
    _top4: {
        top: number;
    };
    _top5: {
        top: number;
    };
    _top6: {
        top: number;
    };
    _top7: {
        top: number;
    };
    _top8: {
        top: number;
    };
    _top9: {
        top: number;
    };
    _top10: {
        top: number;
    };
    _top11: {
        top: number;
    };
    _top12: {
        top: number;
    };
    _top14: {
        top: number;
    };
    _top16: {
        top: number;
    };
    _top20: {
        top: number;
    };
    _top24: {
        top: number;
    };
    _top28: {
        top: number;
    };
    _top32: {
        top: number;
    };
    _top36: {
        top: number;
    };
    _top40: {
        top: number;
    };
    _top44: {
        top: number;
    };
    _top48: {
        top: number;
    };
    _top52: {
        top: number;
    };
    _top56: {
        top: number;
    };
    _top60: {
        top: number;
    };
    _top64: {
        top: number;
    };
    _top72: {
        top: number;
    };
    _top80: {
        top: number;
    };
    _top96: {
        top: number;
    };
    _top1_2: {
        top: "-50%";
    };
    _top1_3: {
        top: "-33.333333%";
    };
    _top2_3: {
        top: "-66.666667%";
    };
    _top1_4: {
        top: "-25%";
    };
    _top2_4: {
        top: "-50%";
    };
    _top3_4: {
        top: "-75%";
    };
    _top1_5: {
        top: "-20%";
    };
    _top2_5: {
        top: "-40%";
    };
    _top3_5: {
        top: "-60%";
    };
    _top4_5: {
        top: "-80%";
    };
    _top1_6: {
        top: "-16.666667%";
    };
    _top2_6: {
        top: "-33.333333%";
    };
    _top3_6: {
        top: "-50%";
    };
    _top4_6: {
        top: "-66.666667%";
    };
    _top5_6: {
        top: "-83.333333%";
    };
    _topFull: {
        top: "-100%";
    };
    right0: {
        right: number;
    };
    rightPx: {
        right: number;
    };
    right0_5: {
        right: number;
    };
    right1: {
        right: number;
    };
    right2: {
        right: number;
    };
    right3: {
        right: number;
    };
    right4: {
        right: number;
    };
    right5: {
        right: number;
    };
    right6: {
        right: number;
    };
    right7: {
        right: number;
    };
    right8: {
        right: number;
    };
    right9: {
        right: number;
    };
    right10: {
        right: number;
    };
    right11: {
        right: number;
    };
    right12: {
        right: number;
    };
    right14: {
        right: number;
    };
    right16: {
        right: number;
    };
    right20: {
        right: number;
    };
    right24: {
        right: number;
    };
    right28: {
        right: number;
    };
    right32: {
        right: number;
    };
    right36: {
        right: number;
    };
    right40: {
        right: number;
    };
    right44: {
        right: number;
    };
    right48: {
        right: number;
    };
    right52: {
        right: number;
    };
    right56: {
        right: number;
    };
    right60: {
        right: number;
    };
    right64: {
        right: number;
    };
    right72: {
        right: number;
    };
    right80: {
        right: number;
    };
    right96: {
        right: number;
    };
    right1_2: {
        right: "50%";
    };
    right1_3: {
        right: "33.333333%";
    };
    right2_3: {
        right: "66.666667%";
    };
    right1_4: {
        right: "25%";
    };
    right2_4: {
        right: "50%";
    };
    right3_4: {
        right: "75%";
    };
    right1_5: {
        right: "20%";
    };
    right2_5: {
        right: "40%";
    };
    right3_5: {
        right: "60%";
    };
    right4_5: {
        right: "80%";
    };
    right1_6: {
        right: "16.666667%";
    };
    right2_6: {
        right: "33.333333%";
    };
    right3_6: {
        right: "50%";
    };
    right4_6: {
        right: "66.666667%";
    };
    right5_6: {
        right: "83.333333%";
    };
    rightFull: {
        right: "100%";
    };
    _right0: {
        right: number;
    };
    _rightPx: {
        right: number;
    };
    _right0_5: {
        right: number;
    };
    _right1: {
        right: number;
    };
    _right2: {
        right: number;
    };
    _right3: {
        right: number;
    };
    _right4: {
        right: number;
    };
    _right5: {
        right: number;
    };
    _right6: {
        right: number;
    };
    _right7: {
        right: number;
    };
    _right8: {
        right: number;
    };
    _right9: {
        right: number;
    };
    _right10: {
        right: number;
    };
    _right11: {
        right: number;
    };
    _right12: {
        right: number;
    };
    _right14: {
        right: number;
    };
    _right16: {
        right: number;
    };
    _right20: {
        right: number;
    };
    _right24: {
        right: number;
    };
    _right28: {
        right: number;
    };
    _right32: {
        right: number;
    };
    _right36: {
        right: number;
    };
    _right40: {
        right: number;
    };
    _right44: {
        right: number;
    };
    _right48: {
        right: number;
    };
    _right52: {
        right: number;
    };
    _right56: {
        right: number;
    };
    _right60: {
        right: number;
    };
    _right64: {
        right: number;
    };
    _right72: {
        right: number;
    };
    _right80: {
        right: number;
    };
    _right96: {
        right: number;
    };
    _right1_2: {
        right: "-50%";
    };
    _right1_3: {
        right: "-33.333333%";
    };
    _right2_3: {
        right: "-66.666667%";
    };
    _right1_4: {
        right: "-25%";
    };
    _right2_4: {
        right: "-50%";
    };
    _right3_4: {
        right: "-75%";
    };
    _right1_5: {
        right: "-20%";
    };
    _right2_5: {
        right: "-40%";
    };
    _right3_5: {
        right: "-60%";
    };
    _right4_5: {
        right: "-80%";
    };
    _right1_6: {
        right: "-16.666667%";
    };
    _right2_6: {
        right: "-33.333333%";
    };
    _right3_6: {
        right: "-50%";
    };
    _right4_6: {
        right: "-66.666667%";
    };
    _right5_6: {
        right: "-83.333333%";
    };
    _rightFull: {
        right: "-100%";
    };
    bottom0: {
        bottom: number;
    };
    bottomPx: {
        bottom: number;
    };
    bottom0_5: {
        bottom: number;
    };
    bottom1: {
        bottom: number;
    };
    bottom2: {
        bottom: number;
    };
    bottom3: {
        bottom: number;
    };
    bottom4: {
        bottom: number;
    };
    bottom5: {
        bottom: number;
    };
    bottom6: {
        bottom: number;
    };
    bottom7: {
        bottom: number;
    };
    bottom8: {
        bottom: number;
    };
    bottom9: {
        bottom: number;
    };
    bottom10: {
        bottom: number;
    };
    bottom11: {
        bottom: number;
    };
    bottom12: {
        bottom: number;
    };
    bottom14: {
        bottom: number;
    };
    bottom16: {
        bottom: number;
    };
    bottom20: {
        bottom: number;
    };
    bottom24: {
        bottom: number;
    };
    bottom28: {
        bottom: number;
    };
    bottom32: {
        bottom: number;
    };
    bottom36: {
        bottom: number;
    };
    bottom40: {
        bottom: number;
    };
    bottom44: {
        bottom: number;
    };
    bottom48: {
        bottom: number;
    };
    bottom52: {
        bottom: number;
    };
    bottom56: {
        bottom: number;
    };
    bottom60: {
        bottom: number;
    };
    bottom64: {
        bottom: number;
    };
    bottom72: {
        bottom: number;
    };
    bottom80: {
        bottom: number;
    };
    bottom96: {
        bottom: number;
    };
    bottom1_2: {
        bottom: "50%";
    };
    bottom1_3: {
        bottom: "33.333333%";
    };
    bottom2_3: {
        bottom: "66.666667%";
    };
    bottom1_4: {
        bottom: "25%";
    };
    bottom2_4: {
        bottom: "50%";
    };
    bottom3_4: {
        bottom: "75%";
    };
    bottom1_5: {
        bottom: "20%";
    };
    bottom2_5: {
        bottom: "40%";
    };
    bottom3_5: {
        bottom: "60%";
    };
    bottom4_5: {
        bottom: "80%";
    };
    bottom1_6: {
        bottom: "16.666667%";
    };
    bottom2_6: {
        bottom: "33.333333%";
    };
    bottom3_6: {
        bottom: "50%";
    };
    bottom4_6: {
        bottom: "66.666667%";
    };
    bottom5_6: {
        bottom: "83.333333%";
    };
    bottomFull: {
        bottom: "100%";
    };
    _bottom0: {
        bottom: number;
    };
    _bottomPx: {
        bottom: number;
    };
    _bottom0_5: {
        bottom: number;
    };
    _bottom1: {
        bottom: number;
    };
    _bottom2: {
        bottom: number;
    };
    _bottom3: {
        bottom: number;
    };
    _bottom4: {
        bottom: number;
    };
    _bottom5: {
        bottom: number;
    };
    _bottom6: {
        bottom: number;
    };
    _bottom7: {
        bottom: number;
    };
    _bottom8: {
        bottom: number;
    };
    _bottom9: {
        bottom: number;
    };
    _bottom10: {
        bottom: number;
    };
    _bottom11: {
        bottom: number;
    };
    _bottom12: {
        bottom: number;
    };
    _bottom14: {
        bottom: number;
    };
    _bottom16: {
        bottom: number;
    };
    _bottom20: {
        bottom: number;
    };
    _bottom24: {
        bottom: number;
    };
    _bottom28: {
        bottom: number;
    };
    _bottom32: {
        bottom: number;
    };
    _bottom36: {
        bottom: number;
    };
    _bottom40: {
        bottom: number;
    };
    _bottom44: {
        bottom: number;
    };
    _bottom48: {
        bottom: number;
    };
    _bottom52: {
        bottom: number;
    };
    _bottom56: {
        bottom: number;
    };
    _bottom60: {
        bottom: number;
    };
    _bottom64: {
        bottom: number;
    };
    _bottom72: {
        bottom: number;
    };
    _bottom80: {
        bottom: number;
    };
    _bottom96: {
        bottom: number;
    };
    _bottom1_2: {
        bottom: "-50%";
    };
    _bottom1_3: {
        bottom: "-33.333333%";
    };
    _bottom2_3: {
        bottom: "-66.666667%";
    };
    _bottom1_4: {
        bottom: "-25%";
    };
    _bottom2_4: {
        bottom: "-50%";
    };
    _bottom3_4: {
        bottom: "-75%";
    };
    _bottom1_5: {
        bottom: "-20%";
    };
    _bottom2_5: {
        bottom: "-40%";
    };
    _bottom3_5: {
        bottom: "-60%";
    };
    _bottom4_5: {
        bottom: "-80%";
    };
    _bottom1_6: {
        bottom: "-16.666667%";
    };
    _bottom2_6: {
        bottom: "-33.333333%";
    };
    _bottom3_6: {
        bottom: "-50%";
    };
    _bottom4_6: {
        bottom: "-66.666667%";
    };
    _bottom5_6: {
        bottom: "-83.333333%";
    };
    _bottomFull: {
        bottom: "-100%";
    };
    left0: {
        left: number;
    };
    leftPx: {
        left: number;
    };
    left0_5: {
        left: number;
    };
    left1: {
        left: number;
    };
    left2: {
        left: number;
    };
    left3: {
        left: number;
    };
    left4: {
        left: number;
    };
    left5: {
        left: number;
    };
    left6: {
        left: number;
    };
    left7: {
        left: number;
    };
    left8: {
        left: number;
    };
    left9: {
        left: number;
    };
    left10: {
        left: number;
    };
    left11: {
        left: number;
    };
    left12: {
        left: number;
    };
    left14: {
        left: number;
    };
    left16: {
        left: number;
    };
    left20: {
        left: number;
    };
    left24: {
        left: number;
    };
    left28: {
        left: number;
    };
    left32: {
        left: number;
    };
    left36: {
        left: number;
    };
    left40: {
        left: number;
    };
    left44: {
        left: number;
    };
    left48: {
        left: number;
    };
    left52: {
        left: number;
    };
    left56: {
        left: number;
    };
    left60: {
        left: number;
    };
    left64: {
        left: number;
    };
    left72: {
        left: number;
    };
    left80: {
        left: number;
    };
    left96: {
        left: number;
    };
    left1_2: {
        left: "50%";
    };
    left1_3: {
        left: "33.333333%";
    };
    left2_3: {
        left: "66.666667%";
    };
    left1_4: {
        left: "25%";
    };
    left2_4: {
        left: "50%";
    };
    left3_4: {
        left: "75%";
    };
    left1_5: {
        left: "20%";
    };
    left2_5: {
        left: "40%";
    };
    left3_5: {
        left: "60%";
    };
    left4_5: {
        left: "80%";
    };
    left1_6: {
        left: "16.666667%";
    };
    left2_6: {
        left: "33.333333%";
    };
    left3_6: {
        left: "50%";
    };
    left4_6: {
        left: "66.666667%";
    };
    left5_6: {
        left: "83.333333%";
    };
    leftFull: {
        left: "100%";
    };
    _left0: {
        left: number;
    };
    _leftPx: {
        left: number;
    };
    _left0_5: {
        left: number;
    };
    _left1: {
        left: number;
    };
    _left2: {
        left: number;
    };
    _left3: {
        left: number;
    };
    _left4: {
        left: number;
    };
    _left5: {
        left: number;
    };
    _left6: {
        left: number;
    };
    _left7: {
        left: number;
    };
    _left8: {
        left: number;
    };
    _left9: {
        left: number;
    };
    _left10: {
        left: number;
    };
    _left11: {
        left: number;
    };
    _left12: {
        left: number;
    };
    _left14: {
        left: number;
    };
    _left16: {
        left: number;
    };
    _left20: {
        left: number;
    };
    _left24: {
        left: number;
    };
    _left28: {
        left: number;
    };
    _left32: {
        left: number;
    };
    _left36: {
        left: number;
    };
    _left40: {
        left: number;
    };
    _left44: {
        left: number;
    };
    _left48: {
        left: number;
    };
    _left52: {
        left: number;
    };
    _left56: {
        left: number;
    };
    _left60: {
        left: number;
    };
    _left64: {
        left: number;
    };
    _left72: {
        left: number;
    };
    _left80: {
        left: number;
    };
    _left96: {
        left: number;
    };
    _left1_2: {
        left: "-50%";
    };
    _left1_3: {
        left: "-33.333333%";
    };
    _left2_3: {
        left: "-66.666667%";
    };
    _left1_4: {
        left: "-25%";
    };
    _left2_4: {
        left: "-50%";
    };
    _left3_4: {
        left: "-75%";
    };
    _left1_5: {
        left: "-20%";
    };
    _left2_5: {
        left: "-40%";
    };
    _left3_5: {
        left: "-60%";
    };
    _left4_5: {
        left: "-80%";
    };
    _left1_6: {
        left: "-16.666667%";
    };
    _left2_6: {
        left: "-33.333333%";
    };
    _left3_6: {
        left: "-50%";
    };
    _left4_6: {
        left: "-66.666667%";
    };
    _left5_6: {
        left: "-83.333333%";
    };
    _leftFull: {
        left: "-100%";
    };
    start0: {
        start: number;
    };
    startPx: {
        start: number;
    };
    start0_5: {
        start: number;
    };
    start1: {
        start: number;
    };
    start2: {
        start: number;
    };
    start3: {
        start: number;
    };
    start4: {
        start: number;
    };
    start5: {
        start: number;
    };
    start6: {
        start: number;
    };
    start7: {
        start: number;
    };
    start8: {
        start: number;
    };
    start9: {
        start: number;
    };
    start10: {
        start: number;
    };
    start11: {
        start: number;
    };
    start12: {
        start: number;
    };
    start14: {
        start: number;
    };
    start16: {
        start: number;
    };
    start20: {
        start: number;
    };
    start24: {
        start: number;
    };
    start28: {
        start: number;
    };
    start32: {
        start: number;
    };
    start36: {
        start: number;
    };
    start40: {
        start: number;
    };
    start44: {
        start: number;
    };
    start48: {
        start: number;
    };
    start52: {
        start: number;
    };
    start56: {
        start: number;
    };
    start60: {
        start: number;
    };
    start64: {
        start: number;
    };
    start72: {
        start: number;
    };
    start80: {
        start: number;
    };
    start96: {
        start: number;
    };
    start1_2: {
        start: "50%";
    };
    start1_3: {
        start: "33.333333%";
    };
    start2_3: {
        start: "66.666667%";
    };
    start1_4: {
        start: "25%";
    };
    start2_4: {
        start: "50%";
    };
    start3_4: {
        start: "75%";
    };
    start1_5: {
        start: "20%";
    };
    start2_5: {
        start: "40%";
    };
    start3_5: {
        start: "60%";
    };
    start4_5: {
        start: "80%";
    };
    start1_6: {
        start: "16.666667%";
    };
    start2_6: {
        start: "33.333333%";
    };
    start3_6: {
        start: "50%";
    };
    start4_6: {
        start: "66.666667%";
    };
    start5_6: {
        start: "83.333333%";
    };
    startFull: {
        start: "100%";
    };
    _start0: {
        start: number;
    };
    _startPx: {
        start: number;
    };
    _start0_5: {
        start: number;
    };
    _start1: {
        start: number;
    };
    _start2: {
        start: number;
    };
    _start3: {
        start: number;
    };
    _start4: {
        start: number;
    };
    _start5: {
        start: number;
    };
    _start6: {
        start: number;
    };
    _start7: {
        start: number;
    };
    _start8: {
        start: number;
    };
    _start9: {
        start: number;
    };
    _start10: {
        start: number;
    };
    _start11: {
        start: number;
    };
    _start12: {
        start: number;
    };
    _start14: {
        start: number;
    };
    _start16: {
        start: number;
    };
    _start20: {
        start: number;
    };
    _start24: {
        start: number;
    };
    _start28: {
        start: number;
    };
    _start32: {
        start: number;
    };
    _start36: {
        start: number;
    };
    _start40: {
        start: number;
    };
    _start44: {
        start: number;
    };
    _start48: {
        start: number;
    };
    _start52: {
        start: number;
    };
    _start56: {
        start: number;
    };
    _start60: {
        start: number;
    };
    _start64: {
        start: number;
    };
    _start72: {
        start: number;
    };
    _start80: {
        start: number;
    };
    _start96: {
        start: number;
    };
    _start1_2: {
        start: "-50%";
    };
    _start1_3: {
        start: "-33.333333%";
    };
    _start2_3: {
        start: "-66.666667%";
    };
    _start1_4: {
        start: "-25%";
    };
    _start2_4: {
        start: "-50%";
    };
    _start3_4: {
        start: "-75%";
    };
    _start1_5: {
        start: "-20%";
    };
    _start2_5: {
        start: "-40%";
    };
    _start3_5: {
        start: "-60%";
    };
    _start4_5: {
        start: "-80%";
    };
    _start1_6: {
        start: "-16.666667%";
    };
    _start2_6: {
        start: "-33.333333%";
    };
    _start3_6: {
        start: "-50%";
    };
    _start4_6: {
        start: "-66.666667%";
    };
    _start5_6: {
        start: "-83.333333%";
    };
    _startFull: {
        start: "-100%";
    };
    end0: {
        end: number;
    };
    endPx: {
        end: number;
    };
    end0_5: {
        end: number;
    };
    end1: {
        end: number;
    };
    end2: {
        end: number;
    };
    end3: {
        end: number;
    };
    end4: {
        end: number;
    };
    end5: {
        end: number;
    };
    end6: {
        end: number;
    };
    end7: {
        end: number;
    };
    end8: {
        end: number;
    };
    end9: {
        end: number;
    };
    end10: {
        end: number;
    };
    end11: {
        end: number;
    };
    end12: {
        end: number;
    };
    end14: {
        end: number;
    };
    end16: {
        end: number;
    };
    end20: {
        end: number;
    };
    end24: {
        end: number;
    };
    end28: {
        end: number;
    };
    end32: {
        end: number;
    };
    end36: {
        end: number;
    };
    end40: {
        end: number;
    };
    end44: {
        end: number;
    };
    end48: {
        end: number;
    };
    end52: {
        end: number;
    };
    end56: {
        end: number;
    };
    end60: {
        end: number;
    };
    end64: {
        end: number;
    };
    end72: {
        end: number;
    };
    end80: {
        end: number;
    };
    end96: {
        end: number;
    };
    end1_2: {
        end: "50%";
    };
    end1_3: {
        end: "33.333333%";
    };
    end2_3: {
        end: "66.666667%";
    };
    end1_4: {
        end: "25%";
    };
    end2_4: {
        end: "50%";
    };
    end3_4: {
        end: "75%";
    };
    end1_5: {
        end: "20%";
    };
    end2_5: {
        end: "40%";
    };
    end3_5: {
        end: "60%";
    };
    end4_5: {
        end: "80%";
    };
    end1_6: {
        end: "16.666667%";
    };
    end2_6: {
        end: "33.333333%";
    };
    end3_6: {
        end: "50%";
    };
    end4_6: {
        end: "66.666667%";
    };
    end5_6: {
        end: "83.333333%";
    };
    endFull: {
        end: "100%";
    };
    _end0: {
        end: number;
    };
    _endPx: {
        end: number;
    };
    _end0_5: {
        end: number;
    };
    _end1: {
        end: number;
    };
    _end2: {
        end: number;
    };
    _end3: {
        end: number;
    };
    _end4: {
        end: number;
    };
    _end5: {
        end: number;
    };
    _end6: {
        end: number;
    };
    _end7: {
        end: number;
    };
    _end8: {
        end: number;
    };
    _end9: {
        end: number;
    };
    _end10: {
        end: number;
    };
    _end11: {
        end: number;
    };
    _end12: {
        end: number;
    };
    _end14: {
        end: number;
    };
    _end16: {
        end: number;
    };
    _end20: {
        end: number;
    };
    _end24: {
        end: number;
    };
    _end28: {
        end: number;
    };
    _end32: {
        end: number;
    };
    _end36: {
        end: number;
    };
    _end40: {
        end: number;
    };
    _end44: {
        end: number;
    };
    _end48: {
        end: number;
    };
    _end52: {
        end: number;
    };
    _end56: {
        end: number;
    };
    _end60: {
        end: number;
    };
    _end64: {
        end: number;
    };
    _end72: {
        end: number;
    };
    _end80: {
        end: number;
    };
    _end96: {
        end: number;
    };
    _end1_2: {
        end: "-50%";
    };
    _end1_3: {
        end: "-33.333333%";
    };
    _end2_3: {
        end: "-66.666667%";
    };
    _end1_4: {
        end: "-25%";
    };
    _end2_4: {
        end: "-50%";
    };
    _end3_4: {
        end: "-75%";
    };
    _end1_5: {
        end: "-20%";
    };
    _end2_5: {
        end: "-40%";
    };
    _end3_5: {
        end: "-60%";
    };
    _end4_5: {
        end: "-80%";
    };
    _end1_6: {
        end: "-16.666667%";
    };
    _end2_6: {
        end: "-33.333333%";
    };
    _end3_6: {
        end: "-50%";
    };
    _end4_6: {
        end: "-66.666667%";
    };
    _end5_6: {
        end: "-83.333333%";
    };
    _endFull: {
        end: "-100%";
    };
    tintPrimary: {
        tintColor: string;
    };
    tintPrimaryLight: {
        tintColor: string;
    };
    tintPrimaryDark: {
        tintColor: string;
    };
    tintPrimaryContrast: {
        tintColor: string;
    };
    tintSecondary: {
        tintColor: string;
    };
    tintSecondaryLight: {
        tintColor: string;
    };
    tintSecondaryDark: {
        tintColor: string;
    };
    tintSecondaryContrast: {
        tintColor: string;
    };
    tintInfo: {
        tintColor: string;
    };
    tintInfoLight: {
        tintColor: string;
    };
    tintInfoDark: {
        tintColor: string;
    };
    tintInfoContrast: {
        tintColor: string;
    };
    tintSuccess: {
        tintColor: string;
    };
    tintSuccessLight: {
        tintColor: string;
    };
    tintSuccessDark: {
        tintColor: string;
    };
    tintSuccessContrast: {
        tintColor: string;
    };
    tintError: {
        tintColor: string;
    };
    tintErrorLight: {
        tintColor: string;
    };
    tintErrorDark: {
        tintColor: string;
    };
    tintErrorContrast: {
        tintColor: string;
    };
    tintWarning: {
        tintColor: string;
    };
    tintWarningLight: {
        tintColor: string;
    };
    tintWarningDark: {
        tintColor: string;
    };
    tintWarningContrast: {
        tintColor: string;
    };
    tintPaper: {
        tintColor: string;
    };
    tintSelected: {
        tintColor: string;
    };
    tintDisabled: {
        tintColor: string;
    };
    tintFocused: {
        tintColor: string;
    };
    tintMuted: {
        tintColor: string;
    };
    tintWhite: {
        tintColor: string;
    };
    tintGray100: {
        tintColor: string;
    };
    tintGray200: {
        tintColor: string;
    };
    tintGray300: {
        tintColor: string;
    };
    tintGray400: {
        tintColor: string;
    };
    tintGray500: {
        tintColor: string;
    };
    tintGray600: {
        tintColor: string;
    };
    tintGray700: {
        tintColor: string;
    };
    tintGray800: {
        tintColor: string;
    };
    tintGray900: {
        tintColor: string;
    };
    tintBlack: {
        tintColor: string;
    };
    tintTransparent: {
        tintColor: string;
    };
    z0: {
        zIndex: number;
    };
    z10: {
        zIndex: number;
    };
    z20: {
        zIndex: number;
    };
    z30: {
        zIndex: number;
    };
    z40: {
        zIndex: number;
    };
    z50: {
        zIndex: number;
    };
    flexCol: {
        flexDirection: "column";
    };
    flexRow: {
        flexDirection: "row";
    };
    flexColReverse: {
        flexDirection: "column-reverse";
    };
    flexRowReverse: {
        flexDirection: "row-reverse";
    };
    flexWrap: {
        flexWrap: "wrap";
    };
    flexWrapReverse: {
        flexWrap: "wrap-reverse";
    };
    flexNoWrap: {
        flexWrap: "nowrap";
    };
    itemsStart: {
        alignItems: "flex-start";
    };
    itemsEnd: {
        alignItems: "flex-end";
    };
    itemsCenter: {
        alignItems: "center";
    };
    itemsStretch: {
        alignItems: "stretch";
    };
    itemsBaseline: {
        alignItems: "baseline";
    };
    contentStart: {
        alignContent: "flex-start";
    };
    contentEnd: {
        alignContent: "flex-end";
    };
    contentCenter: {
        alignContent: "center";
    };
    contentStretch: {
        alignContent: "stretch";
    };
    contentBetween: {
        alignContent: "space-between";
    };
    contentAround: {
        alignContent: "space-around";
    };
    selfAuto: {
        alignSelf: "auto";
    };
    selfStart: {
        alignSelf: "flex-start";
    };
    selfEnd: {
        alignSelf: "flex-end";
    };
    selfCenter: {
        alignSelf: "center";
    };
    selfStretch: {
        alignSelf: "stretch";
    };
    selfBaseline: {
        alignSelf: "baseline";
    };
    justifyStart: {
        justifyContent: "flex-start";
    };
    justifyEnd: {
        justifyContent: "flex-end";
    };
    justifyCenter: {
        justifyContent: "center";
    };
    justifyBetween: {
        justifyContent: "space-between";
    };
    justifyAround: {
        justifyContent: "space-around";
    };
    justifyEvenly: {
        justifyContent: "space-evenly";
    };
    flexNone: {
        flex: number;
    };
    flex1: {
        flex: number;
    };
    flex2: {
        flex: number;
    };
    flex3: {
        flex: number;
    };
    flex4: {
        flex: number;
    };
    flexGrow: {
        flexGrow: number;
    };
    flexGrow0: {
        flexGrow: number;
    };
    flexGrow1: {
        flexGrow: number;
    };
    flexGrow2: {
        flexGrow: number;
    };
    flexGrow3: {
        flexGrow: number;
    };
    flexGrow4: {
        flexGrow: number;
    };
    flexShrink: {
        flexShrink: number;
    };
    flexShrink0: {
        flexShrink: number;
    };
    flexShrink1: {
        flexShrink: number;
    };
    flexShrink2: {
        flexShrink: number;
    };
    flexShrink3: {
        flexShrink: number;
    };
    flexShrink4: {
        flexShrink: number;
    };
    shadow: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowRadius: number;
        elevation: number;
    };
    shadowMd: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowRadius: number;
        elevation: number;
    };
    shadowLg: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowRadius: number;
        elevation: number;
    };
    shadowXl: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowRadius: number;
        elevation: number;
    };
    shadow2xl: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowRadius: number;
        elevation: number;
    };
    shadowInner: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowRadius: number;
        elevation: number;
    };
    shadowOutline: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowRadius: number;
        elevation: number;
    };
    shadowNone: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowRadius: number;
        elevation: number;
    };
    textShadow: {
        textShadowColor: string;
        textShadowOffset: {
            width: number;
            height: number;
        };
        textShadowRadius: number;
    };
    textShadowMd: {
        textShadowColor: string;
        textShadowOffset: {
            width: number;
            height: number;
        };
        textShadowRadius: number;
    };
    textShadowLg: {
        textShadowColor: string;
        textShadowOffset: {
            width: number;
            height: number;
        };
        textShadowRadius: number;
    };
    textShadowXl: {
        textShadowColor: string;
        textShadowOffset: {
            width: number;
            height: number;
        };
        textShadowRadius: number;
    };
    textShadow2xl: {
        textShadowColor: string;
        textShadowOffset: {
            width: number;
            height: number;
        };
        textShadowRadius: number;
    };
    textShadowInner: {
        textShadowColor: string;
        textShadowOffset: {
            width: number;
            height: number;
        };
        textShadowRadius: number;
    };
    textShadowOutline: {
        textShadowColor: string;
        textShadowOffset: {
            width: number;
            height: number;
        };
        textShadowRadius: number;
    };
    textShadowNone: {
        textShadowColor: string;
        textShadowOffset: {
            width: number;
            height: number;
        };
        textShadowRadius: number;
    };
    opacity100: {
        opacity: number;
    };
    opacity90: {
        opacity: number;
    };
    opacity80: {
        opacity: number;
    };
    opacity75: {
        opacity: number;
    };
    opacity70: {
        opacity: number;
    };
    opacity60: {
        opacity: number;
    };
    opacity50: {
        opacity: number;
    };
    opacity40: {
        opacity: number;
    };
    opacity30: {
        opacity: number;
    };
    opacity25: {
        opacity: number;
    };
    opacity20: {
        opacity: number;
    };
    opacity10: {
        opacity: number;
    };
    opacity0: {
        opacity: number;
    };
    borderPrimary: {
        borderColor: string;
    };
    borderPrimaryLight: {
        borderColor: string;
    };
    borderPrimaryDark: {
        borderColor: string;
    };
    borderPrimaryContrast: {
        borderColor: string;
    };
    borderSecondary: {
        borderColor: string;
    };
    borderSecondaryLight: {
        borderColor: string;
    };
    borderSecondaryDark: {
        borderColor: string;
    };
    borderSecondaryContrast: {
        borderColor: string;
    };
    borderInfo: {
        borderColor: string;
    };
    borderInfoLight: {
        borderColor: string;
    };
    borderInfoDark: {
        borderColor: string;
    };
    borderInfoContrast: {
        borderColor: string;
    };
    borderSuccess: {
        borderColor: string;
    };
    borderSuccessLight: {
        borderColor: string;
    };
    borderSuccessDark: {
        borderColor: string;
    };
    borderSuccessContrast: {
        borderColor: string;
    };
    borderError: {
        borderColor: string;
    };
    borderErrorLight: {
        borderColor: string;
    };
    borderErrorDark: {
        borderColor: string;
    };
    borderErrorContrast: {
        borderColor: string;
    };
    borderWarning: {
        borderColor: string;
    };
    borderWarningLight: {
        borderColor: string;
    };
    borderWarningDark: {
        borderColor: string;
    };
    borderWarningContrast: {
        borderColor: string;
    };
    borderPaper: {
        borderColor: string;
    };
    borderSelected: {
        borderColor: string;
    };
    borderDisabled: {
        borderColor: string;
    };
    borderFocused: {
        borderColor: string;
    };
    borderMuted: {
        borderColor: string;
    };
    borderWhite: {
        borderColor: string;
    };
    borderGray100: {
        borderColor: string;
    };
    borderGray200: {
        borderColor: string;
    };
    borderGray300: {
        borderColor: string;
    };
    borderGray400: {
        borderColor: string;
    };
    borderGray500: {
        borderColor: string;
    };
    borderGray600: {
        borderColor: string;
    };
    borderGray700: {
        borderColor: string;
    };
    borderGray800: {
        borderColor: string;
    };
    borderGray900: {
        borderColor: string;
    };
    borderBlack: {
        borderColor: string;
    };
    borderTransparent: {
        borderColor: string;
    };
    borderSolid: {
        borderStyle: "solid";
    };
    borderDotted: {
        borderStyle: "dotted";
    };
    borderDashed: {
        borderStyle: "dashed";
    };
    border: {
        borderWidth: number;
    };
    border0_5: {
        borderWidth: number;
    };
    border0: {
        borderWidth: number;
    };
    border1: {
        borderWidth: number;
    };
    border2: {
        borderWidth: number;
    };
    border3: {
        borderWidth: number;
    };
    border4: {
        borderWidth: number;
    };
    border5: {
        borderWidth: number;
    };
    border6: {
        borderWidth: number;
    };
    border7: {
        borderWidth: number;
    };
    border8: {
        borderWidth: number;
    };
    borderX: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT: {
        borderTopWidth: number;
    };
    borderR: {
        borderRightWidth: number;
    };
    borderB: {
        borderBottomWidth: number;
    };
    borderL: {
        borderLeftWidth: number;
    };
    borderE: {
        borderEndWidth: number;
    };
    borderS: {
        borderStartWidth: number;
    };
    borderX0: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY0: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT0: {
        borderTopWidth: number;
    };
    borderR0: {
        borderRightWidth: number;
    };
    borderB0: {
        borderBottomWidth: number;
    };
    borderL0: {
        borderLeftWidth: number;
    };
    borderE0: {
        borderEndWidth: number;
    };
    borderS0: {
        borderStartWidth: number;
    };
    borderX0_5: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY0_5: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT0_5: {
        borderTopWidth: number;
    };
    borderR0_5: {
        borderRightWidth: number;
    };
    borderB0_5: {
        borderBottomWidth: number;
    };
    borderL0_5: {
        borderLeftWidth: number;
    };
    borderE0_5: {
        borderEndWidth: number;
    };
    borderS0_5: {
        borderStartWidth: number;
    };
    borderX1: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY1: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT1: {
        borderTopWidth: number;
    };
    borderR1: {
        borderRightWidth: number;
    };
    borderB1: {
        borderBottomWidth: number;
    };
    borderL1: {
        borderLeftWidth: number;
    };
    borderE1: {
        borderEndWidth: number;
    };
    borderS1: {
        borderStartWidth: number;
    };
    borderX2: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY2: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT2: {
        borderTopWidth: number;
    };
    borderR2: {
        borderRightWidth: number;
    };
    borderB2: {
        borderBottomWidth: number;
    };
    borderL2: {
        borderLeftWidth: number;
    };
    borderE2: {
        borderEndWidth: number;
    };
    borderS2: {
        borderStartWidth: number;
    };
    borderX3: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY3: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT3: {
        borderTopWidth: number;
    };
    borderR3: {
        borderRightWidth: number;
    };
    borderB3: {
        borderBottomWidth: number;
    };
    borderL3: {
        borderLeftWidth: number;
    };
    borderE3: {
        borderEndWidth: number;
    };
    borderS3: {
        borderStartWidth: number;
    };
    borderX4: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY4: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT4: {
        borderTopWidth: number;
    };
    borderR4: {
        borderRightWidth: number;
    };
    borderB4: {
        borderBottomWidth: number;
    };
    borderL4: {
        borderLeftWidth: number;
    };
    borderE4: {
        borderEndWidth: number;
    };
    borderS4: {
        borderStartWidth: number;
    };
    borderX5: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY5: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT5: {
        borderTopWidth: number;
    };
    borderR5: {
        borderRightWidth: number;
    };
    borderB5: {
        borderBottomWidth: number;
    };
    borderL5: {
        borderLeftWidth: number;
    };
    borderE5: {
        borderEndWidth: number;
    };
    borderS5: {
        borderStartWidth: number;
    };
    borderX6: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY6: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT6: {
        borderTopWidth: number;
    };
    borderR6: {
        borderRightWidth: number;
    };
    borderB6: {
        borderBottomWidth: number;
    };
    borderL6: {
        borderLeftWidth: number;
    };
    borderE6: {
        borderEndWidth: number;
    };
    borderS6: {
        borderStartWidth: number;
    };
    borderX7: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY7: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT7: {
        borderTopWidth: number;
    };
    borderR7: {
        borderRightWidth: number;
    };
    borderB7: {
        borderBottomWidth: number;
    };
    borderL7: {
        borderLeftWidth: number;
    };
    borderE7: {
        borderEndWidth: number;
    };
    borderS7: {
        borderStartWidth: number;
    };
    borderX8: {
        borderRightWidth: number;
        borderLeftWidth: number;
    };
    borderY8: {
        borderTopWidth: number;
        borderBottomWidth: number;
    };
    borderT8: {
        borderTopWidth: number;
    };
    borderR8: {
        borderRightWidth: number;
    };
    borderB8: {
        borderBottomWidth: number;
    };
    borderL8: {
        borderLeftWidth: number;
    };
    borderE8: {
        borderEndWidth: number;
    };
    borderS8: {
        borderStartWidth: number;
    };
    roundedNone: {
        borderRadius: number;
    };
    roundedSm: {
        borderRadius: number;
    };
    rounded: {
        borderRadius: number;
    };
    roundedLg: {
        borderRadius: number;
    };
    roundedFull: {
        borderRadius: number;
    };
    roundedTNone: {
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
    };
    roundedRNone: {
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
    };
    roundedBNone: {
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
    roundedLNone: {
        borderTopLeftRadius: number;
        borderBottomLeftRadius: number;
    };
    roundedTlNone: {
        borderTopLeftRadius: number;
    };
    roundedTrNone: {
        borderTopRightRadius: number;
    };
    roundedBrNone: {
        borderBottomRightRadius: number;
    };
    roundedBlNone: {
        borderBottomLeftRadius: number;
    };
    roundedSNone: {
        borderTopStartRadius: number;
        borderBottomStartRadius: number;
    };
    roundedENone: {
        borderTopEndRadius: number;
        borderBottomEndRadius: number;
    };
    roundedTsNone: {
        borderTopStartRadius: number;
    };
    roundedTeNone: {
        borderTopEndRadius: number;
    };
    roundedBeNone: {
        borderBottomEndRadius: number;
    };
    roundedBsNone: {
        borderBottomStartRadius: number;
    };
    roundedTSm: {
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
    };
    roundedRSm: {
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
    };
    roundedBSm: {
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
    roundedLSm: {
        borderTopLeftRadius: number;
        borderBottomLeftRadius: number;
    };
    roundedTlSm: {
        borderTopLeftRadius: number;
    };
    roundedTrSm: {
        borderTopRightRadius: number;
    };
    roundedBrSm: {
        borderBottomRightRadius: number;
    };
    roundedBlSm: {
        borderBottomLeftRadius: number;
    };
    roundedSSm: {
        borderTopStartRadius: number;
        borderBottomStartRadius: number;
    };
    roundedESm: {
        borderTopEndRadius: number;
        borderBottomEndRadius: number;
    };
    roundedTsSm: {
        borderTopStartRadius: number;
    };
    roundedTeSm: {
        borderTopEndRadius: number;
    };
    roundedBeSm: {
        borderBottomEndRadius: number;
    };
    roundedBsSm: {
        borderBottomStartRadius: number;
    };
    roundedT: {
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
    };
    roundedR: {
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
    };
    roundedB: {
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
    roundedL: {
        borderTopLeftRadius: number;
        borderBottomLeftRadius: number;
    };
    roundedTl: {
        borderTopLeftRadius: number;
    };
    roundedTr: {
        borderTopRightRadius: number;
    };
    roundedBr: {
        borderBottomRightRadius: number;
    };
    roundedBl: {
        borderBottomLeftRadius: number;
    };
    roundedS: {
        borderTopStartRadius: number;
        borderBottomStartRadius: number;
    };
    roundedE: {
        borderTopEndRadius: number;
        borderBottomEndRadius: number;
    };
    roundedTs: {
        borderTopStartRadius: number;
    };
    roundedTe: {
        borderTopEndRadius: number;
    };
    roundedBe: {
        borderBottomEndRadius: number;
    };
    roundedBs: {
        borderBottomStartRadius: number;
    };
    roundedTLg: {
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
    };
    roundedRLg: {
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
    };
    roundedBLg: {
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
    roundedLLg: {
        borderTopLeftRadius: number;
        borderBottomLeftRadius: number;
    };
    roundedTlLg: {
        borderTopLeftRadius: number;
    };
    roundedTrLg: {
        borderTopRightRadius: number;
    };
    roundedBrLg: {
        borderBottomRightRadius: number;
    };
    roundedBlLg: {
        borderBottomLeftRadius: number;
    };
    roundedSLg: {
        borderTopStartRadius: number;
        borderBottomStartRadius: number;
    };
    roundedELg: {
        borderTopEndRadius: number;
        borderBottomEndRadius: number;
    };
    roundedTsLg: {
        borderTopStartRadius: number;
    };
    roundedTeLg: {
        borderTopEndRadius: number;
    };
    roundedBeLg: {
        borderBottomEndRadius: number;
    };
    roundedBsLg: {
        borderBottomStartRadius: number;
    };
    roundedTXl: {
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
    };
    roundedRXl: {
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
    };
    roundedBXl: {
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
    roundedLXl: {
        borderTopLeftRadius: number;
        borderBottomLeftRadius: number;
    };
    roundedTlXl: {
        borderTopLeftRadius: number;
    };
    roundedTrXl: {
        borderTopRightRadius: number;
    };
    roundedBrXl: {
        borderBottomRightRadius: number;
    };
    roundedBlXl: {
        borderBottomLeftRadius: number;
    };
    roundedSXl: {
        borderTopStartRadius: number;
        borderBottomStartRadius: number;
    };
    roundedEXl: {
        borderTopEndRadius: number;
        borderBottomEndRadius: number;
    };
    roundedTsXl: {
        borderTopStartRadius: number;
    };
    roundedTeXl: {
        borderTopEndRadius: number;
    };
    roundedBeXl: {
        borderBottomEndRadius: number;
    };
    roundedBsXl: {
        borderBottomStartRadius: number;
    };
    roundedTFull: {
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
    };
    roundedRFull: {
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
    };
    roundedBFull: {
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
    roundedLFull: {
        borderTopLeftRadius: number;
        borderBottomLeftRadius: number;
    };
    roundedTlFull: {
        borderTopLeftRadius: number;
    };
    roundedTrFull: {
        borderTopRightRadius: number;
    };
    roundedBrFull: {
        borderBottomRightRadius: number;
    };
    roundedBlFull: {
        borderBottomLeftRadius: number;
    };
    roundedSFull: {
        borderTopStartRadius: number;
        borderBottomStartRadius: number;
    };
    roundedEFull: {
        borderTopEndRadius: number;
        borderBottomEndRadius: number;
    };
    roundedTsFull: {
        borderTopStartRadius: number;
    };
    roundedTeFull: {
        borderTopEndRadius: number;
    };
    roundedBeFull: {
        borderBottomEndRadius: number;
    };
    roundedBsFull: {
        borderBottomStartRadius: number;
    };
    bgPrimary: {
        backgroundColor: string;
    };
    bgPrimaryLight: {
        backgroundColor: string;
    };
    bgPrimaryDark: {
        backgroundColor: string;
    };
    bgPrimaryContrast: {
        backgroundColor: string;
    };
    bgSecondary: {
        backgroundColor: string;
    };
    bgSecondaryLight: {
        backgroundColor: string;
    };
    bgSecondaryDark: {
        backgroundColor: string;
    };
    bgSecondaryContrast: {
        backgroundColor: string;
    };
    bgInfo: {
        backgroundColor: string;
    };
    bgInfoLight: {
        backgroundColor: string;
    };
    bgInfoDark: {
        backgroundColor: string;
    };
    bgInfoContrast: {
        backgroundColor: string;
    };
    bgSuccess: {
        backgroundColor: string;
    };
    bgSuccessLight: {
        backgroundColor: string;
    };
    bgSuccessDark: {
        backgroundColor: string;
    };
    bgSuccessContrast: {
        backgroundColor: string;
    };
    bgError: {
        backgroundColor: string;
    };
    bgErrorLight: {
        backgroundColor: string;
    };
    bgErrorDark: {
        backgroundColor: string;
    };
    bgErrorContrast: {
        backgroundColor: string;
    };
    bgWarning: {
        backgroundColor: string;
    };
    bgWarningLight: {
        backgroundColor: string;
    };
    bgWarningDark: {
        backgroundColor: string;
    };
    bgWarningContrast: {
        backgroundColor: string;
    };
    bgPaper: {
        backgroundColor: string;
    };
    bgSelected: {
        backgroundColor: string;
    };
    bgDisabled: {
        backgroundColor: string;
    };
    bgFocused: {
        backgroundColor: string;
    };
    bgMuted: {
        backgroundColor: string;
    };
    bgWhite: {
        backgroundColor: string;
    };
    bgGray100: {
        backgroundColor: string;
    };
    bgGray200: {
        backgroundColor: string;
    };
    bgGray300: {
        backgroundColor: string;
    };
    bgGray400: {
        backgroundColor: string;
    };
    bgGray500: {
        backgroundColor: string;
    };
    bgGray600: {
        backgroundColor: string;
    };
    bgGray700: {
        backgroundColor: string;
    };
    bgGray800: {
        backgroundColor: string;
    };
    bgGray900: {
        backgroundColor: string;
    };
    bgBlack: {
        backgroundColor: string;
    };
    bgTransparent: {
        backgroundColor: string;
    };
};
export {};
