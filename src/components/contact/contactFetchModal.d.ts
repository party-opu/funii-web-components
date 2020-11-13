/// <reference types="react" />
declare type ContactFetchModalProps = {
    fetching: boolean;
    success: boolean;
    error?: string;
    open?: boolean;
    onClose?: (e: any) => void;
};
declare const ContactFetchModal: ({ fetching, success, error, open, onClose }: ContactFetchModalProps) => JSX.Element;
export default ContactFetchModal;
//# sourceMappingURL=contactFetchModal.d.ts.map