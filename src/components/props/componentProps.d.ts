import { Node } from './node';
export declare type ArtboardSize = 'desktop' | 'tablet' | 'mobile';
export declare const DESKTOP_MIN_WIDTH = 1200;
export declare const TABLET_MIN_WIDTH = 700;
export declare type ComponentProps = {
    node: Node;
    push?: (url: string) => void;
    paths?: string[];
    preview?: boolean;
    onSend?: (value: CreateContact) => Promise<void>;
    artboardSize?: ArtboardSize;
};
export declare type Contact = {
    id: string;
    tableName: string | null;
    department: string | null;
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
};
export declare type CreateContact = {
    label: string;
    value: string;
    order: number;
}[];
//# sourceMappingURL=componentProps.d.ts.map