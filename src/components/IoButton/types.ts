export type IoButtonType = 'filled' | 'elevated' | 'outlined' | 'text';
export type IoButtonColor = 'primary' | 'secondary' | 'tertiary' | 'error';
export type IoButtonElevation = 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2' | '3' | '4' | '5';
export type IoButtonSize = 'medium' | 'small' | 'large';
export type IoButtonOnClick = (e: MouseEvent) => void;

// export interface IoButtonProps {
//   type?: IoButtonType;
//   color?: IoButtonColor;
//   elevation?: IoButtonElevation;
//   round?: boolean;
//   size?: IoButtonSize;
//   disabled?: boolean;
//   loading?: boolean;
//   onClick?: IoButtonOnClick,
// }