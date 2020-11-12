declare type FieldItem = {
    label: string;
    type: 'text' | 'image';
    value: string;
    order: number;
};
export declare type Section = {
    label: string;
    type: string;
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
export {};
//# sourceMappingURL=sectionGroup.d.ts.map