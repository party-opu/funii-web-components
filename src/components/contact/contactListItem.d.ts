/// <reference types="react" />
declare type ContractListItem = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    required?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    rows?: number;
};
declare const ContractListItem: ({ label, value, onChangeText, required, disabled, multiple, rows }: ContractListItem) => JSX.Element;
export default ContractListItem;
//# sourceMappingURL=contactListItem.d.ts.map