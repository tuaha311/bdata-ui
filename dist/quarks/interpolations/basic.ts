import { css, DefaultTheme } from 'styled-components';
import { Properties } from 'csstype';
import { parseProps, handleResponsiveness, handlePseudoClasses, GetAllPropTypes } from './utilities';
import shadow, { ShadowDefinition } from '../../atoms/shadows/shadows';
import { margin, padding, MarginDefinition, PaddingDefinition } from '../../atoms/spacing/spacing';
import { getColor, GetColorDefinition } from '../../atoms/colors/colors';
import {
  fontFamily,
  FontFamilyDefinition,
  lineHeight,
  LineHeightDefinition,
  letterSpacing,
  LetterSpacingDefinition,
  fontSize,
  FontSizeDefinition,
  fontWeight,
  FontWeightDefinition,
} from '../../atoms/typography/typography';

const basicCSS = {
  height: (value: string) => css`
    height: ${value};
  `,
  maxHeight: (value: string) => css`
    max-height: ${value};
  `,
  minHeight: (value: string) => css`
    min-height: ${value};
  `,
  width: (value: string) => css`
    width: ${value};
  `,
  maxWidth: (value: string) => css`
    max-width: ${value};
  `,
  minWidth: (value: string) => css`
    min-width: ${value};
  `,
  position: (value: Properties['position']) => css`
    position: ${value};
  `,
  top: (value: Properties['top']) => css`
    top: ${value};
  `,
  left: (value: Properties['left']) => css`
    left: ${value};
  `,
  bottom: (value: Properties['bottom']) => css`
    bottom: ${value};
  `,
  right: (value: Properties['right']) => css`
    right: ${value};
  `,
  zIndex: (value: Properties['zIndex']) => css`
    z-index: ${value};
  `,
  marginAll: (value: MarginDefinition) => css`
    margin: ${margin[value]};
  `,
  marginX: (value: MarginDefinition) => css`
    margin-left: ${margin[value]};
    margin-right: ${margin[value]};
  `,
  marginY: (value: MarginDefinition) => css`
    margin-top: ${margin[value]};
    margin-bottom: ${margin[value]};
  `,
  marginTop: (value: MarginDefinition) => css`
    margin-top: ${margin[value]};
  `,
  marginBottom: (value: MarginDefinition) => css`
    margin-bottom: ${margin[value]};
  `,
  marginLeft: (value: MarginDefinition) => css`
    margin-left: ${margin[value]};
  `,
  marginRight: (value: MarginDefinition) => css`
    margin-right: ${margin[value]};
  `,
  paddingAll: (value: PaddingDefinition) => css`
    padding: ${padding[value]};
  `,
  paddingX: (value: PaddingDefinition) => css`
    padding-left: ${padding[value]};
    padding-right: ${padding[value]};
  `,
  paddingY: (value: PaddingDefinition) => css`
    padding-top: ${padding[value]};
    padding-bottom: ${padding[value]};
  `,
  paddingTop: (value: PaddingDefinition) => css`
    padding-top: ${padding[value]};
  `,
  paddingBottom: (value: PaddingDefinition) => css`
    padding-bottom: ${padding[value]};
  `,
  paddingLeft: (value: PaddingDefinition) => css`
    padding-left: ${padding[value]};
  `,
  paddingRight: (value: PaddingDefinition) => css`
    padding-right: ${padding[value]};
  `,
  backgroundImage: (value: string) => css`
    background-image: url(${value});
  `,
  backgroundPosition: (value: Properties['backgroundPosition']) => css`
    background-position: ${value};
  `,
  backgroundRepeat: (value: Properties['backgroundRepeat']) => css`
    background-repeat: ${value};
  `,
  backgroundOrigin: (value: Properties['backgroundOrigin']) => css`
    background-origin: ${value};
  `,
  backgroundClip: (value: Properties['backgroundClip']) => css`
    background-clip: ${value};
  `,
  backgroundAttachment: (value: Properties['backgroundAttachment']) => css`
    background-attachment: ${value};
  `,
  backgroundSize: (value: Properties['backgroundSize']) => css`
    background-size: ${value};
  `,
  backgroundColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    background-color: ${getColor(palette, value)};
  `,
  border: (value: Properties['border']) => css`
    border: ${value};
  `,
  borderLeft: (value: Properties['borderLeft']) => css`
    border-left: ${value};
  `,
  borderRight: (value: Properties['borderRight']) => css`
    border-right: ${value};
  `,
  borderTop: (value: Properties['borderTop']) => css`
    border-top: ${value};
  `,
  borderBottom: (value: Properties['borderBottom']) => css`
    border-bottom: ${value};
  `,
  borderColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    border-color: ${getColor(palette, value)};
  `,
  borderBottomColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    border-bottom-color: ${getColor(palette, value)};
  `,
  borderTopColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    border-top-color: ${getColor(palette, value)};
  `,
  borderLeftColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    border-left-color: ${getColor(palette, value)};
  `,
  borderRightColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    border-right-color: ${getColor(palette, value)};
  `,
  borderBottomLeftRadius: (value: Properties['borderBottomLeftRadius']) => css`
    border-bottom-left-radius: ${value};
  `,
  borderBottomRightRadius: (value: Properties['borderBottomRightRadius']) => css`
    border-bottom-right-radius: ${value};
  `,
  borderTopLeftRadius: (value: Properties['borderTopLeftRadius']) => css`
    border-top-left-radius: ${value};
  `,
  borderTopRightRadius: (value: Properties['borderTopRightRadius']) => css`
    border-top-right-radius: ${value};
  `,
  borderRadius: (value: Properties['borderRadius']) => css`
    border-radius: ${value};
  `,
  borderCollapse: (value: Properties['borderCollapse']) => css`
    border-collapse: ${value};
  `,
  borderWidth: (value: Properties['borderWidth']) => css`
    border-width: ${value};
  `,
  borderStyle: (value: Properties['borderStyle']) => css`
    border-style: ${value};
  `,
  textColor: (value: GetColorDefinition, palette: DefaultTheme['palette']) => css`
    color: ${getColor(palette, value)};
  `,
  cursor: (value: Properties['cursor']) => css`
    cursor: ${value};
  `,
  opacity: (value: Properties['opacity']) => css`
    opacity: ${value};
  `,
  filter: (value: Properties['filter']) => css`
    filter: ${value};
  `,
  transform: (value: Properties['transform']) => css`
    transform: ${value};
  `,
  transition: (value: Properties['transition']) => css`
    transition: ${value};
  `,
  animation: (value: Properties['animation']) => css`
    animation: ${value};
  `,
  mixBlendMode: (value: Properties['mixBlendMode']) => css`
    mix-blend-mode: ${value};
  `,
  backgroundBlendMode: (value: Properties['backgroundBlendMode']) => css`
    background-blend-mode: ${value};
  `,
  boxShadow: (value: ShadowDefinition) => css`
    box-shadow: ${shadow[value]};
  `,
  visibility: (value: Properties['visibility']) => css`
    visibility: ${value};
  `,
  display: (value: Properties['display']) => css`
    display: ${value};
  `,
  overflowX: (value: Properties['overflowX']) => css`
    overflow-x: ${value};
  `,
  overflowY: (value: Properties['overflowY']) => css`
    overflow-y: ${value};
  `,
  textOverflow: (value: Properties['textOverflow']) => css`
    text-overflow: ${value};
  `,
  boxSizing: (value: Properties['boxSizing']) => css`
    box-sizing: ${value};
  `,
  float: (value: Properties['float']) => css`
    float: ${value};
  `,
  objectFit: (value: Properties['objectFit']) => css`
    object-fit: ${value};
  `,
  objectPosition: (value: Properties['objectPosition']) => css`
    object-position: ${value};
  `,
  alignSelf: (value: Properties['alignSelf']) => css`
    align-self: ${value};
  `,
  flex: (value: Properties['flex']) => css`
    flex: ${value};
  `,
  justifySelf: (value: Properties['justifySelf']) => css`
    justify-self: ${value};
  `,
  fontSize: (value: FontSizeDefinition) => css`
    font-size: ${fontSize[value]};
  `,
  fontWeight: (value: FontWeightDefinition) => css`
    font-weight: ${fontWeight[value]};
  `,
  fontFamily: (value: FontFamilyDefinition) => css`
    font-family: ${fontFamily[value]};
  `,
  letterSpacing: (value: LetterSpacingDefinition) => css`
    letter-spacing: ${letterSpacing[value]};
  `,
  lineHeight: (value: LineHeightDefinition) => css`
    line-height: ${lineHeight[value]};
  `,
  fontStyle: (value: Properties['fontStyle']) => css`
    font-style: ${value};
  `,
  lineClamp: (value: Properties['lineClamp']) => css`
    line-clamp: ${value};
  `,
  fontVariant: (value: Properties['fontVariant']) => css`
    font-variant: ${value};
  `,
  textAlign: (value: Properties['textAlign']) => css`
    text-align: ${value};
  `,
  textDecoration: (value: Properties['textDecoration']) => css`
    text-decoration: ${value};
  `,
};

export type BasicProps = GetAllPropTypes<typeof basicCSS>;

export const basic = css<BasicProps>`
  ${props => props && parseProps(props, basicCSS, props.theme.palette)}

  ${props => handleResponsiveness(props, basicCSS)}

  ${props => handlePseudoClasses(props, basicCSS)}
`;
