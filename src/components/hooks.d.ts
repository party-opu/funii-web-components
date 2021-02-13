import { Text, Image, FieldItem } from './props';
export declare const useRouting: (push?: ((internal: boolean, href: string) => void) | undefined) => (node: FieldItem | Text | Image, paths: string[]) => void;
export declare const useExistLink: () => (node: FieldItem | Text | Image, paths: string[]) => boolean;
//# sourceMappingURL=hooks.d.ts.map