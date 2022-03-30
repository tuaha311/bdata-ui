const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export type ContainerDefinition = keyof typeof container;
export default container;
