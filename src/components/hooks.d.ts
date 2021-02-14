import { Text, Image, Button, FieldItem } from './props';
export declare const useRouting: (push?: ((internal: boolean, href: string) => void) | undefined) => (node: FieldItem | Text | Image | Button, paths: string[]) => void;
export declare const useExistLink: () => (node: FieldItem | Text | Image | Button, paths: string[]) => boolean;
//# sourceMappingURL=hooks.d.ts.map