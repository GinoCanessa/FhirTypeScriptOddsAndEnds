import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export interface IPaymentReconciliationDetail extends fhirInterfaces.IBackboneElement {
    /**
     * The monetary amount allocated from the total payment to the payable.
     */
    amount?: fhirInterfaces.IMoney | undefined;
    /**
     * The date from the response resource containing a commitment to pay.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * Unique identifier for the current payment item for the referenced payable.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The party which is receiving the payment.
     */
    payee?: fhirInterfaces.IReference | undefined;
    /**
     * Unique identifier for the prior payment item for the referenced payable.
     */
    predecessor?: fhirInterfaces.IIdentifier | undefined;
    /**
     * A resource, such as a Claim, the evaluation of which could lead to payment.
     */
    request?: fhirInterfaces.IReference | undefined;
    /**
     * A resource, such as a ClaimResponse, which contains a commitment to payment.
     */
    response?: fhirInterfaces.IReference | undefined;
    /**
     * A reference to the individual who is responsible for inquiries regarding the response and its payment.
     */
    responsible?: fhirInterfaces.IReference | undefined;
    /**
     * The party which submitted the claim or financial transaction.
     */
    submitter?: fhirInterfaces.IReference | undefined;
    /**
     * For example: payment, adjustment, funds advance, etc.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * A note that describes or explains the processing in a human readable form.
 */
export interface IPaymentReconciliationProcessNote extends fhirInterfaces.IBackboneElement {
    /**
     * The explanation or description associated with the processing.
     */
    text?: string | undefined;
    _text?: fhirInterfaces.IElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: PaymentReconciliationProcessNoteTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the PaymentReconciliation.processNote.type field
 */
export declare enum PaymentReconciliationProcessNoteTypeEnum {
    DISPLAY = "display",
    PRINT = "print",
    PRINTOPER = "printoper"
}
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export interface IPaymentReconciliation extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "PaymentReconciliation";
    /**
     * The date when the resource was created.
     */
    created?: string | undefined;
    _created?: fhirInterfaces.IElement | undefined;
    /**
     * Distribution of the payment amount for a previously acknowledged payable.
     */
    detail?: fhirInterfaces.IPaymentReconciliationDetail[] | undefined;
    /**
     * A human readable description of the status of the request for the reconciliation.
     */
    disposition?: string | undefined;
    _disposition?: fhirInterfaces.IElement | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this payment reconciliation.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: PaymentReconciliationOutcomeEnum | undefined;
    _outcome?: fhirInterfaces.IElement | undefined;
    /**
     * Total payment amount as indicated on the financial instrument.
     */
    paymentAmount?: fhirInterfaces.IMoney | undefined;
    /**
     * The date of payment as indicated on the financial instrument.
     */
    paymentDate?: string | undefined;
    _paymentDate?: fhirInterfaces.IElement | undefined;
    /**
     * For example: EFT number or check number.
     */
    paymentIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * This party is also responsible for the reconciliation.
     */
    paymentIssuer?: fhirInterfaces.IReference | undefined;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * A note that describes or explains the processing in a human readable form.
     */
    processNote?: fhirInterfaces.IPaymentReconciliationProcessNote[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhirInterfaces.IReference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestor?: fhirInterfaces.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: PaymentReconciliationStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the PaymentReconciliation.outcome field
 */
export declare enum PaymentReconciliationOutcomeEnum {
    QUEUED = "queued",
    COMPLETE = "complete",
    ERROR = "error",
    PARTIAL = "partial"
}
/**
 * Code Values for the PaymentReconciliation.status field
 */
export declare enum PaymentReconciliationStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=IPaymentReconciliation.d.ts.map