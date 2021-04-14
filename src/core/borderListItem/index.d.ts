import React from 'react';
import { ArtboardSize } from '../../components/props';
declare type BorderListItemProps = {
    label?: string;
    value?: string;
    onClickLabel?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
    onClickValue?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
    existLabelLink?: boolean;
    existValueLink?: boolean;
    artboardSize: ArtboardSize;
};
declare const BorderListItem: React.FC<BorderListItemProps>;
export default BorderListItem;
//# sourceMappingURL=index.d.ts.map