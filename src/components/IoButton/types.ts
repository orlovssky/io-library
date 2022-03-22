export type IoButtonType = 'filled' | 'elevated' | 'outlined' | 'text';
export type IoButtonColor = 'primary' | 'secondary' | 'tertiary' | 'error';
export type IoButtonElevation = 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2' | '3' | '4' | '5';
export type IoButtonRound = boolean;
export type IoButtonSize = 'medium' | 'small' | 'large';
export type IoButtonDisabled = boolean;
export type IoButtonLoading = boolean;
export type IoButtonOnClick = (e: MouseEvent) => void;

// export interface IoButtonProps {
//   type?: IoButtonType;
//   color?: IoButtonColor;
//   elevation?: IoButtonElevation;
//   round?: IoButtonRound;
//   size?: IoButtonSize;
//   disabled?: IoButtonDisabled;
//   loading?: IoButtonLoading;
//   onClick?: IoButtonOnClick,
// }