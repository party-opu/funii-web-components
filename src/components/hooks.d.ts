import { Text, Image, Button, FieldItem, Action } from '@party-opu/funii-assist-types';
declare type ActionHandler = (action: Action) => Promise<void> | void;
export declare const useActionForItem: (paths: string[], internalLinkActionHandler?: ActionHandler, externalLinkActionHandler?: ActionHandler, apiActionHandler?: ActionHandler) => (item: FieldItem) => Promise<void>;
export declare const useExistActionForItem: (paths: string[]) => (item: FieldItem) => boolean;
export declare const useAction: (node: Text | Image | Button, paths: string[], internalLinkActionHandler?: ActionHandler, externalLinkActionHandler?: ActionHandler, apiActionHandler?: ActionHandler) => () => Promise<void>;
export declare const useExistAction: (node: Text | Image | Button, paths: string[]) => boolean;
export {};
//# sourceMappingURL=hooks.d.ts.map