/**
 * Codes identifying the lifecycle stage of an Invoice.
 */
export var InvoiceStatus = {
    /**
     * the invoice has been balaced / completely paid.
     */
    invoice_status_Balanced: {
        code: "balanced",
        display: "balanced",
        system: "http://hl7.org/fhir/invoice-status"
    },
    /**
     * the invoice was cancelled.
     */
    invoice_status_Cancelled: {
        code: "cancelled",
        display: "cancelled",
        system: "http://hl7.org/fhir/invoice-status"
    },
    /**
     * the invoice has been prepared but not yet finalized.
     */
    invoice_status_Draft: {
        code: "draft",
        display: "draft",
        system: "http://hl7.org/fhir/invoice-status"
    },
    /**
     * the invoice was determined as entered in error before it was issued.
     */
    invoice_status_EnteredInError: {
        code: "entered-in-error",
        display: "entered in error",
        system: "http://hl7.org/fhir/invoice-status"
    },
    /**
     * the invoice has been finalized and sent to the recipient.
     */
    invoice_status_Issued: {
        code: "issued",
        display: "issued",
        system: "http://hl7.org/fhir/invoice-status"
    }
};
