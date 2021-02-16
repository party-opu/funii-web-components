/// <reference types="react" />
import { ArtboardSize } from '../props';
declare type ContactFetchModalProps = {
    fetching: boolean;
    success: boolean;
    error?: string;
    open?: boolean;
    onClose?: (e: any) => void;
    artboardSize: ArtboardSize;
};
declare const ContactFetchModal: ({ fetching, success, error, open, onClose, artboardSize }: ContactFetchModalProps) => JSX.Element;
export default ContactFetchModal;
//# sourceMappingURL=contactFetchModal.d.ts.map