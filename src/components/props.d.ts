/// <reference types="react" />
export interface BaseNode {
    id: string;
    label: string;
    order: number;
    type: string;
}
export declare type ArtboardSize = 'desktop' | 'tablet' | 'mobile';
export interface ComponentSet extends BaseNode {
    sections: Section[];
}
export declare type Section = {
    fields: {
        [key: string]: FieldItem;
    };
};
export declare type FieldItem = {
    label: string;
    type: 'text' | 'image';
    value: string;
    order: number;
    externalLink: string | null;
    internalLink: string | null;
    linkType: LinkType;
    style?: React.CSSProperties;
};
export declare type LinkType = 'internal' | 'external';
export interface Image extends BaseNode {
    imageURL: string;
    styleMode: StyleMode;
    style: React.CSSProperties;
    styleMb: React.CSSProperties;
    styleTb: React.CSSProperties;
    containerStyle: React.CSSProperties;
    containerStyleMb: React.CSSProperties;
    containerStyleTb: React.CSSProperties;
    imageSizeType: ImageSizeType;
    externalLink: string | null;
    internalLink: string | null;
    linkType: LinkType;
}
export declare type ImageSizeType = 'percentage' | 'pixel';
export declare type StyleMode = 'common' | 'responsive';
export declare const DESKTOP_MIN_WIDTH = 1200;
export declare const TABLET_MIN_WIDTH = 700;
export interface Text extends BaseNode {
    value: string;
    style: React.CSSProperties;
    externalLink: string | null;
    internalLink: string | null;
    linkType: LinkType;
}
export declare type BasicNode = Image | Text;
export interface Frame extends BaseNode {
    type: 'frame';
    style: React.CSSProperties;
    children: Node[];
}
export declare type Node = Frame | ComponentSet | BasicNode;
export declare type ComponentProps = {
    node: Node;
    push?: (internal: boolean, href: string) => void;
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
//# sourceMappingURL=props.d.ts.map