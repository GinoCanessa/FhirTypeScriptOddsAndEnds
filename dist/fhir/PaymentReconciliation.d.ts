import * as fhir from '../fhir.js';
import { PaymentTypeValueSetType } from '../fhirValueSets/PaymentTypeValueSet.js';
import { NoteTypeValueSetType, NoteTypeValueSetEnum } from '../fhirValueSets/NoteTypeValueSet.js';
import { FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js';
import { RemittanceOutcomeValueSetType, RemittanceOutcomeValueSetEnum } from '../fhirValueSets/RemittanceOutcomeValueSet.js';
import { FormsValueSetType } from '../fhirValueSets/FormsValueSet.js';
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export declare type IPaymentReconciliationDetail = fhir.IBackboneElement & {
    /**
     * Unique identifier for the current payment item for the referenced payable.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Unique identifier for the prior payment item for the referenced payable.
     */
    predecessor?: fhir.IIdentifier | undefined;
    /**
     * For example: payment, adjustment, funds advance, etc.
     */
    type: fhir.ICodeableConcept | null;
    /**
     * A resource, such as a Claim, the evaluation of which could lead to payment.
     */
    request?: fhir.IReference | undefined;
    /**
     * The party which submitted the claim or financial transaction.
     */
    submitter?: fhir.IReference | undefined;
    /**
     * A resource, such as a ClaimResponse, which contains a commitment to payment.
     */
    response?: fhir.IReference | undefined;
    /**
     * The date from the response resource containing a commitment to pay.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.detail.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * A reference to the individual who is responsible for inquiries regarding the response and its payment.
     */
    responsible?: fhir.IReference | undefined;
    /**
     * The party which is receiving the payment.
     */
    payee?: fhir.IReference | undefined;
    /**
     * The monetary amount allocated from the total payment to the payable.
     */
    amount?: fhir.IMoney | undefined;
};
/**
 * A note that describes or explains the processing in a human readable form.
 */
export declare type IPaymentReconciliationProcessNote = fhir.IBackboneElement & {
    /**
     * The business purpose of the note text.
     */
    type?: NoteTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.processNote.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.processNote.text
     */
    _text?: fhir.IFhirElement | undefined;
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
     * A unique identifier assigned to this payment reconciliation.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: PaymentReconciliation.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * The date when the resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: PaymentReconciliation.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * This party is also responsible for the reconciliation.
     */
    paymentIssuer?: fhir.IReference | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.IReference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestor?: fhir.IReference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: RemittanceOutcomeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.outcome
     */
    _outcome?: fhir.IFhirElement | undefined;
    /**
     * A human readable description of the status of the request for the reconciliation.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.disposition
     */
    _disposition?: fhir.IFhirElement | undefined;
    /**
     * The date of payment as indicated on the financial instrument.
     */
    paymentDate: string | null;
    /**
     * Extended properties for primitive element: PaymentReconciliation.paymentDate
     */
    _paymentDate?: fhir.IFhirElement | undefined;
    /**
     * Total payment amount as indicated on the financial instrument.
     */
    paymentAmount: fhir.IMoney | null;
    /**
     * For example: EFT number or check number.
     */
    paymentIdentifier?: fhir.IIdentifier | undefined;
    /**
     * Distribution of the payment amount for a previously acknowledged payable.
     */
    detail?: fhir.IPaymentReconciliationDetail[] | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.ICodeableConcept | undefined;
    /**
     * A note that describes or explains the processing in a human readable form.
     */
    processNote?: fhir.IPaymentReconciliationProcessNote[] | undefined;
};
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export declare class PaymentReconciliationDetail extends fhir.BackboneElement implements IPaymentReconciliationDetail {
    /**
     * Unique identifier for the current payment item for the referenced payable.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Unique identifier for the prior payment item for the referenced payable.
     */
    predecessor?: fhir.Identifier | undefined;
    /**
     * For example: payment, adjustment, funds advance, etc.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A resource, such as a Claim, the evaluation of which could lead to payment.
     */
    request?: fhir.Reference | undefined;
    /**
     * The party which submitted the claim or financial transaction.
     */
    submitter?: fhir.Reference | undefined;
    /**
     * A resource, such as a ClaimResponse, which contains a commitment to payment.
     */
    response?: fhir.Reference | undefined;
    /**
     * The date from the response resource containing a commitment to pay.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.detail.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * A reference to the individual who is responsible for inquiries regarding the response and its payment.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * The party which is receiving the payment.
     */
    payee?: fhir.Reference | undefined;
    /**
     * The monetary amount allocated from the total payment to the payable.
     */
    amount?: fhir.Money | undefined;
    /**
     * Default constructor for PaymentReconciliationDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPaymentReconciliationDetail>);
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): PaymentTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A note that describes or explains the processing in a human readable form.
 */
export declare class PaymentReconciliationProcessNote extends fhir.BackboneElement implements IPaymentReconciliationProcessNote {
    /**
     * The business purpose of the note text.
     */
    type?: NoteTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.processNote.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.processNote.text
     */
    _text?: fhir.FhirElement | undefined;
    /**
     * Default constructor for PaymentReconciliationProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPaymentReconciliationProcessNote>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): NoteTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export declare class PaymentReconciliation extends fhir.DomainResource implements IPaymentReconciliation {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentReconciliation";
    /**
     * A unique identifier assigned to this payment reconciliation.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: PaymentReconciliation.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.Period | undefined;
    /**
     * The date when the resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: PaymentReconciliation.created
     */
    _created?: fhir.FhirElement | undefined;
    /**
     * This party is also responsible for the reconciliation.
     */
    paymentIssuer?: fhir.Reference | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestor?: fhir.Reference | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: RemittanceOutcomeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.outcome
     */
    _outcome?: fhir.FhirElement | undefined;
    /**
     * A human readable description of the status of the request for the reconciliation.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentReconciliation.disposition
     */
    _disposition?: fhir.FhirElement | undefined;
    /**
     * The date of payment as indicated on the financial instrument.
     */
    paymentDate: string | null;
    /**
     * Extended properties for primitive element: PaymentReconciliation.paymentDate
     */
    _paymentDate?: fhir.FhirElement | undefined;
    /**
     * Total payment amount as indicated on the financial instrument.
     */
    paymentAmount: fhir.Money | null;
    /**
     * For example: EFT number or check number.
     */
    paymentIdentifier?: fhir.Identifier | undefined;
    /**
     * Distribution of the payment amount for a previously acknowledged payable.
     */
    detail?: fhir.PaymentReconciliationDetail[] | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.CodeableConcept | undefined;
    /**
     * A note that describes or explains the processing in a human readable form.
     */
    processNote?: fhir.PaymentReconciliationProcessNote[] | undefined;
    /**
     * Default constructor for PaymentReconciliation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPaymentReconciliation>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Required-bound Value Set for outcome
     */
    outcomeRequiredValueSet(): RemittanceOutcomeValueSetType;
    /**
     * Example-bound Value Set for formCode
     */
    formCodeExampleValueSet(): FormsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=PaymentReconciliation.d.ts.map