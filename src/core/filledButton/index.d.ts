import React from 'react';
declare type ButtonSize = 's' | 'm' | 'l' | 'xl';
declare type FilledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ButtonSize;
    color?: string;
    text?: string;
    textColor?: string;
};
declare const FilledButton: React.FC<FilledButtonProps>;
export default FilledButton;
//# sourceMappingURL=index.d.ts.map