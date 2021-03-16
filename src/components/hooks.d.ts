import { Text, Image, Button, FieldItem } from './props';
declare type Push = (url: string) => Promise<void> | void;
export declare const useActionForItem: (push: Push | undefined, paths: string[]) => (item: FieldItem) => Promise<void>;
export declare const useExistActionForItem: (paths: string[]) => (item: FieldItem) => boolean;
export declare const useAction: (node: Text | Image | Button, push: Push | undefined, paths: string[]) => () => Promise<void>;
export declare const useExistAction: (node: Text | Image | Button, paths: string[]) => boolean;
export {};
//# sourceMappingURL=hooks.d.ts.map