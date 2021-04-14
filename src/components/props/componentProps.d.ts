import { Node, Action } from '@party-opu/funii-assist-types';
export declare type ArtboardSize = 'desktop' | 'tablet' | 'mobile';
export declare const DESKTOP_MIN_WIDTH = 1200;
export declare const TABLET_MIN_WIDTH = 700;
export declare type ActionHandler = (action: Action) => Promise<void> | void;
export declare type ComponentProps = {
    node: Node;
    actionHandler?: ActionHandler;
    paths?: string[];
    preview?: boolean;
    onSend?: (value: CreateContact) => Promise<void>;
    artboardSize?: ArtboardSize;
};
export declare type Contact = {
    id: string;
    fields: {
        label: string;
        value: string;
        order: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
};
export declare type CreateContact = Omit<Contact, 'id' | 'createdAt' | 'updatedAt'> & {
    createdAt?: Date;
    updatedAt?: Date;
};
//# sourceMappingURL=componentProps.d.ts.map