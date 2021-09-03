import buttons from './Buttons/buttons';
import colors from './Colors/colors';
import fontStyles from './Fonts/fontStyles';
import globalRootStyles from './globalRootStyles';

export const theme = {
  breakpoints: ['480px', '767px', '1024px', '1200px', '1500px', '1800px'],
  space: [
    '0rem',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.5rem',
    '3rem',
    '3.5rem',
  ],
  ...fontStyles,
  ...colors,
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      textTransform: 'capitalize',
    },
  },
  ...globalRootStyles,
  ...buttons,
};
