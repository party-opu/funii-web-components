declare type TextFieldProps = {
    disabled?: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
    multiple?: boolean;
    rows?: number;
};
declare const TextField: ({ value, onChangeText, disabled, multiple, rows }: TextFieldProps) => JSX.Element;
export default TextField;
//# sourceMappingURL=index.d.ts.map