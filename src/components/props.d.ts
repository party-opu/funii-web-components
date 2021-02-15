/// <reference types="react" />
export interface BaseAction {
    trigger: 'click';
    type: 'externalLink' | 'internalLink';
}
export interface LinkAction extends BaseAction {
    type: 'externalLink' | 'internalLink';
    value: string;
}
export declare type Action = LinkAction;
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
    actions: Action[];
    style?: React.CSSProperties;
};
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
    actions: Action[];
}
export declare type ImageSizeType = 'percentage' | 'pixel';
export declare type StyleMode = 'common' | 'responsive';
export declare const DESKTOP_MIN_WIDTH = 1200;
export declare const TABLET_MIN_WIDTH = 700;
export interface Text extends BaseNode {
    value: string;
    styleMode: StyleMode;
    style: React.CSSProperties;
    styleMb: React.CSSProperties;
    styleTb: React.CSSProperties;
    actions: Action[];
}
export interface Space extends BaseNode {
    styleMode: StyleMode;
    style: React.CSSProperties;
    styleMb: React.CSSProperties;
    styleTb: React.CSSProperties;
}
export interface Button extends BaseNode {
    value: string;
    buttonSizeType: ButtonSizeType;
    styleMode: StyleMode;
    style: React.CSSProperties;
    styleMb: React.CSSProperties;
    styleTb: React.CSSProperties;
    textStyle: React.CSSProperties;
    textStyleMb: React.CSSProperties;
    textStyleTb: React.CSSProperties;
    containerStyle: React.CSSProperties;
    containerStyleMb: React.CSSProperties;
    containerStyleTb: React.CSSProperties;
    actions: Action[];
}
export declare type ButtonSizeType = 'percentage' | 'pixel';
export declare type BasicNode = Image | Text | Space | Button;
export interface Frame extends BaseNode {
    type: 'frame';
    styleMode: StyleMode;
    style: React.CSSProperties;
    styleMb: React.CSSProperties;
    styleTb: React.CSSProperties;
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