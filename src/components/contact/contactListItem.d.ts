import { ArtboardSize } from '../props';
declare type ContractListItem = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    required?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    rows?: number;
    artboardSize: ArtboardSize;
};
declare const ContractListItem: ({ label, value, onChangeText, required, disabled, multiple, rows, artboardSize }: ContractListItem) => JSX.Element;
export default ContractListItem;
//# sourceMappingURL=contactListItem.d.ts.map