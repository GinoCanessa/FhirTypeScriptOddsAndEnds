import { Coding } from '../strictmodels';
/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
export declare const InvoiceStatus: {
    /**
     * the invoice has been balaced / completely paid.
     */
    invoice_status_Balanced: Coding;
    /**
     * the invoice was cancelled.
     */
    invoice_status_Cancelled: Coding;
    /**
     * the invoice has been prepared but not yet finalized.
     */
    invoice_status_Draft: Coding;
    /**
     * the invoice was determined as entered in error before it was issued.
     */
    invoice_status_EnteredInError: Coding;
    /**
     * the invoice has been finalized and sent to the recipient.
     */
    invoice_status_Issued: Coding;
};
//# sourceMappingURL=InvoiceStatus.d.ts.map