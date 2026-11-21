export const TRA_SUA_TOKENS = {
  colors: {
    brand: {
      teaGreen: "#1B4332",
    },
    cta: {
      peachOrange: "#FF6B35",
      peachOrangeHover: "#E85A25",
    },
    background: {
      mainCream: "#FFFDF9",
      frameGreen: "#1B4332",
    },
    surface: {
      cardBeige: "#F4EFE6",
      white: "#FFFFFF",
      navPrev: "#E0E0E0",
    },
    text: {
      primary: "#000000",
      brandGreen: "#1B4332",
      muted: "#52525B",
      inverse: "#FFFFFF",
      placeholder: "#CCCCCC",
    },
    border: {
      streetBlack: "#141414",
      solidBlack: "#000000",
      mutedGray: "#D9D9D9",
    },
  },
  typography: {
    fontFamily: {
      sans: "'Be Vietnam Pro', system-ui, -apple-system, sans-serif",
      displayLogo: "'Bebas Neue', sans-serif",
      displayHero: "'Bevan', serif",
      displayBanner: "'Barlow', sans-serif",
    },
    logo: {
      fontSize: "56px",
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: "-1.12px",
    },
    h1Hero: {
      fontSize: "60px",
      fontWeight: 400,
      lineHeight: 1.15,
      letterSpacing: "1.2px",
    },
    subtitleHero: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: "-0.64px",
    },
    h2Section: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3Card: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    price: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    bodyRegular: {
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    labelButton: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: 1.0,
    },
  },
  effects: {
    streetHardShadow: "3px 3px 0px #141414",
    streetHardBoxShadow: "3px 3px 0px 0px #141414",
    bannerBoxShadow: "3.544px 3.544px 0px 0px #141414",
    textStrokeHeroCta: {
      WebkitTextStroke: "2.5px #141414",
      paintOrder: "stroke fill",
      textShadow: "3px 3px 0px #141414",
    },
    textStrokeGroupTitle: {
      WebkitTextStroke: "2.8px #141414",
      paintOrder: "stroke fill",
      textShadow: "3px 3px 0px #141414",
    },
    textStrokeGroupSubtitle: {
      WebkitTextStroke: "2.4px #141414",
      paintOrder: "stroke fill",
      textShadow: "2.5px 2.5px 0px #141414",
    },
  },
  layout: {
    figmaFrameWidth: 1440,
    figmaFrameHeight: 1024,
    creamCardWidth: 1394,
    creamCardHeight: 905,
    headerHeight: 99,
    borderSidePx: 23,
    borderBottomPx: 20,
    creamCardBottomRadiusPx: 36,
  },
} as const;
