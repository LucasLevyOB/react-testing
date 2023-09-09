import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(props => ({
  'body': {
    backgroundColor: props.theme.colors.background,
    color: props.theme.colors.text,
    fontFamily: props.theme.font.family.body,
    fontWeight: props.theme.font.weight.regular,
    letterSpacing: props.theme.font.letterSpacing.xl,
    fontSize: props.theme.font.size.md,
  },
}));

export default GlobalStyle;