import * as fhir from '../fhir.js';
import { PaymentTypeValueSetType } from '../fhirValueSets/PaymentTypeValueSet.js';
import { NoteTypeValueSetType } from '../fhirValueSets/NoteTypeValueSet.js';
import { NoteTypeValueSetEnum } from '../valueSetEnums.js';
import { FmStatusValueSetType } from '../fhirValueSets/FmStatusValueSet.js';
import { FmStatusValueSetEnum } from '../valueSetEnums.js';
import { RemittanceOutcomeValueSetType } from '../fhirValueSets/RemittanceOutcomeValueSet.js';
import { RemittanceOutcomeValueSetEnum } from '../valueSetEnums.js';
import { FormsValueSetType } from '../fhirValueSets/FormsValueSet.js';
/**
 * Valid arguments for the PaymentReconciliationDetail type.
 */
export interface PaymentReconciliationDetailArgs extends fhir.BackboneElementArgs {
    /**
     * Unique identifier for the current payment item for the referenced payable.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Unique identifier for the prior payment item for the referenced payable.
     */
    predecessor?: fhir.IdentifierArgs | undefined;
    /**
     * For example: payment, adjustment, funds advance, etc.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * A resource, such as a Claim, the evaluation of which could lead to payment.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * The party which submitted the claim or financial transaction.
     */
    submitter?: fhir.ReferenceArgs | undefined;
    /**
     * A resource, such as a ClaimResponse, which contains a commitment to payment.
     */
    response?: fhir.ReferenceArgs | undefined;
    /**
     * The date from the response resource containing a commitment to pay.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * A reference to the individual who is responsible for inquiries regarding the response and its payment.
     */
    responsible?: fhir.ReferenceArgs | undefined;
    /**
     * The party which is receiving the payment.
     */
    payee?: fhir.ReferenceArgs | undefined;
    /**
     * The monetary amount allocated from the total payment to the payable.
     */
    amount?: fhir.MoneyArgs | undefined;
}
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
export declare class PaymentReconciliationDetail extends fhir.BackboneElement {
    readonly __dataType: string;
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
    date?: fhir.FhirDate | undefined;
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
    constructor(source?: Partial<PaymentReconciliationDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): PaymentTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the PaymentReconciliationProcessNote type.
 */
export interface PaymentReconciliationProcessNoteArgs extends fhir.BackboneElementArgs {
    /**
     * The business purpose of the note text.
     */
    type?: NoteTypeValueSetEnum | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text?: fhir.FhirString | string | undefined;
}
/**
 * A note that describes or explains the processing in a human readable form.
 */
export declare class PaymentReconciliationProcessNote extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The business purpose of the note text.
     */
    type?: NoteTypeValueSetEnum | undefined;
    /**
     * The explanation or description associated with the processing.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for PaymentReconciliationProcessNote - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PaymentReconciliationProcessNoteArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): NoteTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the PaymentReconciliation type.
 */
export interface PaymentReconciliationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentReconciliation" | undefined;
    /**
     * A unique identifier assigned to this payment reconciliation.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * The date when the resource was created.
     */
    created: fhir.FhirDateTime | string | undefined;
    /**
     * This party is also responsible for the reconciliation.
     */
    paymentIssuer?: fhir.ReferenceArgs | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestor?: fhir.ReferenceArgs | undefined;
    /**
     * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
     */
    outcome?: RemittanceOutcomeValueSetEnum | undefined;
    /**
     * A human readable description of the status of the request for the reconciliation.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * The date of payment as indicated on the financial instrument.
     */
    paymentDate: fhir.FhirDate | string | undefined;
    /**
     * Total payment amount as indicated on the financial instrument.
     */
    paymentAmount: fhir.MoneyArgs | null;
    /**
     * For example: EFT number or check number.
     */
    paymentIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Distribution of the payment amount for a previously acknowledged payable.
     */
    detail?: fhir.PaymentReconciliationDetailArgs[] | undefined;
    /**
     * May be needed to identify specific jurisdictional forms.
     */
    formCode?: fhir.CodeableConceptArgs | undefined;
    /**
     * A note that describes or explains the processing in a human readable form.
     */
    processNote?: fhir.PaymentReconciliationProcessNoteArgs[] | undefined;
}
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export declare class PaymentReconciliation extends fhir.DomainResource {
    readonly __dataType: string;
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
     * The period of time for which payments have been gathered into this bulk payment for settlement.
     */
    period?: fhir.Period | undefined;
    /**
     * The date when the resource was created.
     */
    created: fhir.FhirDateTime | null;
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
     * A human readable description of the status of the request for the reconciliation.
     */
    disposition?: fhir.FhirString | undefined;
    /**
     * The date of payment as indicated on the financial instrument.
     */
    paymentDate: fhir.FhirDate | null;
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
    constructor(source?: Partial<PaymentReconciliationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Required-bound Value Set for outcome
     */
    static outcomeRequiredValueSet(): RemittanceOutcomeValueSetType;
    /**
     * Example-bound Value Set for formCode
     */
    static formCodeExampleValueSet(): FormsValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=PaymentReconciliation.d.ts.map