import './components/Header/ThemeTogglerColors.css'


export const theme = {
  colors: {
    primary: '#3E85F3',
    secondary: '#2B78EF',
    lightBlue: '#E3F3FF',
    darkBlue: '#CAE8FF',
    bgBlue: '#DCEBF7',
    background: '#FFFFFF',
    white: '#FFFFFF',
    blackTitle: '#171820',
    black: '#111111',
    text: '#343434',
    mainYellow: '#F3B249',
    lightYellow: '#FCF0D4',
    redError: '#DA1414',
    mainRed: '#EA3D65',
    lightRed: '#FFD2DD',
    greenValid: '#3CBC81',
    muted: '#F7F6F9',
    closeButton: '#111111',


    background_mode: 'var(--background)',
    // #EAEAEA   ---->>>>>   #171820 

    second_backgrond_mode: 'var(--second-backgrond)',
    // #FFFFFF   ---->>>>>   #21222C

    third_background_mode: 'var(--third-background)',
    // #FFFFFF   ---->>>>>   #13151A
    
    primary_text_mode: 'var(--primary-text)',
    // #111111  ---->>>>>   #FFFFFF

    second_text_mode: 'var(--second-text)',
    // #34343480  ---->>>>>   #FFFFFF

    third_text_mode: 'var(--third-text)',
    // #343434  ---->>>>>   #FFFFFF

    background_button: 'var(--background-button)',
    // #E3F3FF  ---->>>>>   #3E85F3
    
  },
  fonts: {
    body: 'Coolvetica',
    heading: 'Inter',
    text: 'Inter',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '40px',
    xl: '120px',
  },
  fontWeights: {
    normal: 500,
    medium: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.25,
    heading: 1.1,
  },
  radii: {
    none: '0',
    small: '8px',
    medium: '14px',
    big: '16px',
    round: '50%',
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  shadows: {
    boxShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
    modalShadow: '0px 4px 57px rgba(17, 17, 17, 0.05)',
  },
  breakpoints: {
    mobile: '375px',
    table: '768px',
    desktop: '1440px',
  },
};
