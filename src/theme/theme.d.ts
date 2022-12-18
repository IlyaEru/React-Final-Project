// import original module declarations
import 'styled-components';
import { theme } from './theme';

// and extend them!
declare module 'styled-components' {
  export type Theme = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
