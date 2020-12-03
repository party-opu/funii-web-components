/// <reference types="react" />
export declare type FieldItem = {
    label: string;
    type: 'text' | 'image';
    value: string;
    order: number;
    externalLink: string | null;
    internalLink: string | null;
    style?: React.CSSProperties;
};
export declare type Section = {
    fields: {
        [key: string]: FieldItem;
    };
};
export declare type SectionGroup = {
    id: string;
    label: string;
    order: number;
    type: string;
    sections: Section[];
};
export declare type ComponentProps = {
    sections: Section[];
    push?: (internal: boolean, href: string) => void;
    preview?: boolean;
};
export declare type WrappedComponentProps = {
    type: string;
    sections: Section[];
    push?: (internal: boolean, href: string) => void;
    preview?: boolean;
};
//# sourceMappingURL=props.d.ts.map