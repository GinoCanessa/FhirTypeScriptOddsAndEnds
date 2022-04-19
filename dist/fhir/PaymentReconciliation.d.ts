import * as fhir from '../fhir';
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export declare type IPaymentReconciliationDetail = fhir.IBackboneElement & {
    /**
     * The monetary amount allocated from the total payment to the payable.
     */
    amount?: fhir.IMoney | undefined;
    /**
     * The date from the response resource containing a commitment to pay.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * Unique identifier for the current payment item for the referenced payable.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * The party which is receiving the payment.
     */
    payee?: fhir.IReference | undefined;
    /**
     * Unique identifier for the prior payment item for the referenced payable.
     */
    predecessor?: fhir.IIdentifier | undefined;
    /**
     * A resource, such as a Claim, the evaluation of which could lead to payment.
     */
    request?: fhir.IReference | undefined;
    /**
     * A resource, such as a ClaimResponse, which contains a commitment to payment.
     */
    response?: fhir.IReference | undefined;
    /**
     * A reference to the individual who is responsible for inquiries regarding the response and its payment.
     */
    responsible?: fhir.IReference | undefined;
    /**
     * The party which submitted the claim or financial transaction.
     */
    submitter?: fhir.IReference | undefined;
    /**
     * For example: payment, adjustment, funds advance, etc.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * A note that describes or explains the processing in a human readable form.
 */
export declare type IPaymentReconciliationProcessNote = fhir.IBackboneElement & {
    /**
     * The explanation or description associated with the processing.
     */
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: PaymentReconciliationProcessNoteTypeEnum | undefined;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export declare type IPaymentReconciliation = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentReconciliation";
    /**
     * The date when the resource was created.
     */
    created: string | null;
    _created?: fhir.IFhirElement | undefined;
    /**
     * Distribution of the payment amount for a previously acknowledged payable.
     */
    detail?: fhir.IPaymentReconciliationDetail[] | undefined;
    /**
     * A human readable description of the status of the request for the reconciliation.
     */
    disposition?: string | undefined;
    _disposition?: fhir.IFhirElement | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.ICodeableConcept | undefined;
    /**
     * A unique identifier assigned to this payment reconciliation.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: PaymentReconciliationOutcomeEnum | undefined;
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * Total payment amount as indicated on the financial instrument.
     */
    paymentAmount: fhir.IMoney | null;
    /**
     * The date of payment as indicated on the financial instrument.
     */
    paymentDate: string | null;
    _paymentDate?: fhir.IFhirElement | undefined;
    /**
     * For example: EFT number or check number.
     */
    paymentIdentifier?: fhir.IIdentifier | undefined;
    /**
     * This party is also responsible for the reconciliation.
     */
    paymentIssuer?: fhir.IReference | undefined;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * A note that describes or explains the processing in a human readable form.
     */
    processNote?: fhir.IPaymentReconciliationProcessNote[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.IReference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestor?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: PaymentReconciliationStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export declare class PaymentReconciliationDetail extends fhir.BackboneElement implements fhir.IPaymentReconciliationDetail {
    /**
     * The monetary amount allocated from the total payment to the payable.
     */
    amount?: fhir.Money | undefined;
    /**
     * The date from the response resource containing a commitment to pay.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * Unique identifier for the current payment item for the referenced payable.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The party which is receiving the payment.
     */
    payee?: fhir.Reference | undefined;
    /**
     * Unique identifier for the prior payment item for the referenced payable.
     */
    predecessor?: fhir.Identifier | undefined;
    /**
     * A resource, such as a Claim, the evaluation of which could lead to payment.
     */
    request?: fhir.Reference | undefined;
    /**
     * A resource, such as a ClaimResponse, which contains a commitment to payment.
     */
    response?: fhir.Reference | undefined;
    /**
     * A reference to the individual who is responsible for inquiries regarding the response and its payment.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * The party which submitted the claim or financial transaction.
     */
    submitter?: fhir.Reference | undefined;
    /**
     * For example: payment, adjustment, funds advance, etc.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for PaymentReconciliationDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPaymentReconciliationDetail>);
    /**
     * Check if the current PaymentReconciliationDetail contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a PaymentReconciliationDetail from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IPaymentReconciliationDetail): PaymentReconciliationDetail;
}
/**
 * A note that describes or explains the processing in a human readable form.
 */
export declare class PaymentReconciliationProcessNote extends fhir.BackboneElement implements fhir.IPaymentReconciliationProcessNote {
    /**
     * The explanation or description associated with the processing.
     */
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * The business purpose of the note text.
     */
    type?: PaymentReconciliationProcessNoteTypeEnum | undefined;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for PaymentReconciliationProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPaymentReconciliationProcessNote>);
    /**
     * Check if the current PaymentReconciliationProcessNote contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a PaymentReconciliationProcessNote from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IPaymentReconciliationProcessNote): PaymentReconciliationProcessNote;
}
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export declare class PaymentReconciliation extends fhir.DomainResource implements fhir.IPaymentReconciliation {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentReconciliation";
    /**
     * The date when the resource was created.
     */
    created: string | null;
    _created?: fhir.FhirElement | undefined;
    /**
     * Distribution of the payment amount for a previously acknowledged payable.
     */
    detail?: fhir.PaymentReconciliationDetail[] | undefined;
    /**
     * A human readable description of the status of the request for the reconciliation.
     */
    disposition?: string | undefined;
    _disposition?: fhir.FhirElement | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.CodeableConcept | undefined;
    /**
     * A unique identifier assigned to this payment reconciliation.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: PaymentReconciliationOutcomeEnum | undefined;
    _outcome?: fhir.FhirElement | undefined;
    /**
     * Total payment amount as indicated on the financial instrument.
     */
    paymentAmount: fhir.Money | null;
    /**
     * The date of payment as indicated on the financial instrument.
     */
    paymentDate: string | null;
    _paymentDate?: fhir.FhirElement | undefined;
    /**
     * For example: EFT number or check number.
     */
    paymentIdentifier?: fhir.Identifier | undefined;
    /**
     * This party is also responsible for the reconciliation.
     */
    paymentIssuer?: fhir.Reference | undefined;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.Period | undefined;
    /**
     * A note that describes or explains the processing in a human readable form.
     */
    processNote?: fhir.PaymentReconciliationProcessNote[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestor?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: PaymentReconciliationStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for PaymentReconciliation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPaymentReconciliation>);
    /**
     * Check if the current PaymentReconciliation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a PaymentReconciliation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IPaymentReconciliation): PaymentReconciliation;
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