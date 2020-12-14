/// <reference types="react" />
export declare type FieldItem = {
    label: string;
    type: 'text' | 'image';
    value: string;
    order: number;
    externalLink: string | null;
    internalLink: string | null;
    linkType: 'internal' | 'external';
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
    paths?: string[];
    preview?: boolean;
};
export declare type WrappedComponentProps = {
    type: string;
    sections: Section[];
    push?: (internal: boolean, href: string) => void;
    paths?: string[];
    preview?: boolean;
};
export declare type Contact = {
    id: string;
    companyName: string | null;
    department: string | null;
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
};
export declare type CreateContact = Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>;
//# sourceMappingURL=props.d.ts.map