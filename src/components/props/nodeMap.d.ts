/// <reference types="react" />
import { Action } from './action';
export declare type StyleMode = 'common' | 'responsive';
export interface BaseNode {
    id: string;
    label: string;
    type: string;
    thumbnailURL: string;
}
export interface ComponentSetMap extends BaseNode {
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
export declare type ImageSizeType = 'percentage' | 'pixel';
export interface ImageMap extends BaseNode {
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
export interface TextMap extends BaseNode {
    value: string;
    styleMode: StyleMode;
    style: React.CSSProperties;
    styleMb: React.CSSProperties;
    styleTb: React.CSSProperties;
    actions: Action[];
}
export interface SpaceMap extends BaseNode {
    styleMode: StyleMode;
    style: React.CSSProperties;
    styleMb: React.CSSProperties;
    styleTb: React.CSSProperties;
}
export interface ButtonMap extends BaseNode {
    value: string;
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
    buttonSizeType: ButtonSizeType;
    actions: Action[];
}
export declare type ButtonSizeType = 'percentage' | 'pixel';
export declare type BasicNodeMap = ImageMap | TextMap | SpaceMap | ButtonMap;
export interface FrameMap extends BaseNode {
    type: 'frame';
    styleMode: StyleMode;
    style: React.CSSProperties;
    styleMb: React.CSSProperties;
    styleTb: React.CSSProperties;
}
export declare type NodeMap = FrameMap | ComponentSetMap | BasicNodeMap;
//# sourceMappingURL=nodeMap.d.ts.map