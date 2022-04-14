import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export declare class PaymentReconciliationDetail extends fhirModels.BackboneElement implements fhirInterfaces.IPaymentReconciliationDetail {
    /**
     * The monetary amount allocated from the total payment to the payable.
     */
    amount?: fhirModels.Money | undefined;
    /**
     * The date from the response resource containing a commitment to pay.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * Unique identifier for the current payment item for the referenced payable.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * The party which is receiving the payment.
     */
    payee?: fhirModels.Reference | undefined;
    /**
     * Unique identifier for the prior payment item for the referenced payable.
     */
    predecessor?: fhirModels.Identifier | undefined;
    /**
     * A resource, such as a Claim, the evaluation of which could lead to payment.
     */
    request?: fhirModels.Reference | undefined;
    /**
     * A resource, such as a ClaimResponse, which contains a commitment to payment.
     */
    response?: fhirModels.Reference | undefined;
    /**
     * A reference to the individual who is responsible for inquiries regarding the response and its payment.
     */
    responsible?: fhirModels.Reference | undefined;
    /**
     * The party which submitted the claim or financial transaction.
     */
    submitter?: fhirModels.Reference | undefined;
    /**
     * For example: payment, adjustment, funds advance, etc.
     */
    type: fhirModels.CodeableConcept;
    /**
     * Default constructor for PaymentReconciliationDetail from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IPaymentReconciliationDetail);
}
/**
 * A note that describes or explains the processing in a human readable form.
 */
export declare class PaymentReconciliationProcessNote extends fhirModels.BackboneElement implements fhirInterfaces.IPaymentReconciliationProcessNote {
    /**
     * The explanation or description associated with the processing.
     */
    text?: string | undefined;
    _text?: fhirModels.Element | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: PaymentReconciliationProcessNoteTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for PaymentReconciliationProcessNote from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IPaymentReconciliationProcessNote);
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
export declare class PaymentReconciliation extends fhirModels.DomainResource implements fhirInterfaces.IPaymentReconciliation {
    /**
     * Resource Type Name
     */
    readonly resourceType = "PaymentReconciliation";
    /**
     * The date when the resource was created.
     */
    created: string;
    _created?: fhirModels.Element | undefined;
    /**
     * Distribution of the payment amount for a previously acknowledged payable.
     */
    detail?: fhirModels.PaymentReconciliationDetail[] | undefined;
    /**
     * A human readable description of the status of the request for the reconciliation.
     */
    disposition?: string | undefined;
    _disposition?: fhirModels.Element | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhirModels.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this payment reconciliation.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: PaymentReconciliationOutcomeEnum | undefined;
    _outcome?: fhirModels.Element | undefined;
    /**
     * Total payment amount as indicated on the financial instrument.
     */
    paymentAmount: fhirModels.Money;
    /**
     * The date of payment as indicated on the financial instrument.
     */
    paymentDate: string;
    _paymentDate?: fhirModels.Element | undefined;
    /**
     * For example: EFT number or check number.
     */
    paymentIdentifier?: fhirModels.Identifier | undefined;
    /**
     * This party is also responsible for the reconciliation.
     */
    paymentIssuer?: fhirModels.Reference | undefined;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhirModels.Period | undefined;
    /**
     * A note that describes or explains the processing in a human readable form.
     */
    processNote?: fhirModels.PaymentReconciliationProcessNote[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhirModels.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestor?: fhirModels.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: PaymentReconciliationStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for PaymentReconciliation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IPaymentReconciliation);
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
//# sourceMappingURL=PaymentReconciliation.d.ts.map