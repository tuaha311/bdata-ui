import * as Icon from 'react-feather';

export type IconName = keyof typeof Icon;
export const iconOptionsArray = Object.keys(Icon) as IconName[];

export interface IconProps extends Icon.IconProps {
  /**
   * The name of the icon being displayed.The names are all written in PascalCase.
   */
  name: IconName;
  /**
   * The color of the icon. Color can be defined either as a plain string with the name written in camelCase, like `color='red'` or `color='lightBlue'`. Color can also be defined with hex code values, like `color='#2493FF'`.
   */
  color?: string;
  /**
   * Determines the size of the icon. Can be passed either a number `'75'`, a pixel value `'75px'`, or rem units `'10rem'`.
   */
  size?: string;
  /**
   * Determines the stroke width of the icon. strokeWidth accepts the same values as `size`.
   */
  strokeWidth?: string;
  /**
   * The alt tag does not have any predetermined values and can be freely set with whatever text you want.
   */
  alt?: string;
}

const IconComponent = ({ name, ...props }: IconProps) => {
  const IconRenderer = Icon[name];
  return <IconRenderer {...props} />;
};

export default IconComponent;
