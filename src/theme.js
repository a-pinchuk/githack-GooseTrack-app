import './components/Header/ThemeTogglerColors.css';

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
    redErrorLight: '#E74A3B',
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
    // #FFFFFF   ---->>>>>   #13151Af

    primary_text_mode: 'var(--primary-text)',
    // #111111  ---->>>>>   #FFFFFF

    second_text_mode: 'var(--second-text)',
    // #34343480  ---->>>>>   #FFFFFF

    third_text_mode: 'var(--third-text)',
    // #343434  ---->>>>>   #FFFFFF

    background_button: 'var(--background-button)',
    // #E3F3FF  ---->>>>>   #3E85F3

    hover_button: 'var(--color-button-content-hover)',
    // 3e85f3 ---->>>>>   #FFFFFF

    user_label_color: 'var(--user-label-color)',
    // #111111  ---->>>>> rgba(250, 250, 250, 0.3);

    user_input_border: 'var(--user-input-border)',
    // 1px solid rgba(17, 17, 17, 0.1) ---->>>>>  1px solid rgba(255, 255, 255, 0.15);

    calendar_out_border: 'var(--calendar-out-border)',
    // 1px solid rgba(220, 227, 229, 0.8) ---->>>>> 1px solid rgba(255, 255, 255, 0.15);

    calendar_inner_background: 'var(--calendar-inner-background)',
    // rgba(220, 227, 229, 0.8) ---->>>>> rgba(255, 255, 255, 0.15);

    period_type_btn_active: 'var(--period-type-btn-active)',
    //CAE8FF ---->>>>> #3E85F3

    period_type_btn_not_active: 'var(--period-type-btn-not-active)',
    // #E3F3FF ---->>>>> 21222C

    period_type_btn_active_content: 'var(--period-type-btn-active-content)',
    // 3e85f3 ---->>>>>   #FFFFFF

    task_list_item_background: 'var(--task-list-item-background)',
    // FFFFFF ---->>>>>   #111111

    modal_window: 'var(--modal-window)',
    // #FFFFFF   ---->>>>>   #171820

    modal_form_content: 'var(--modal-form-content)',
    // rgba(52, 52, 52, 0.8) ---->>>>>   #FFFFFF

    modal_form_label: 'var(--modal-form-label)',
    // rgba(52, 52, 52, 0.8) ---->>>>>   #rgba(250, 250, 250, 0.3);
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
