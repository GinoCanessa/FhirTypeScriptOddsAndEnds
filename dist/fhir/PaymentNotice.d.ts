import * as fhir from '../fhir.js';
import { FmStatusValueSetType } from '../fhirValueSets/FmStatusValueSet.js';
import { FmStatusValueSetEnum } from '../valueSetEnums.js';
import { PaymentStatusValueSetType } from '../fhirValueSets/PaymentStatusValueSet.js';
/**
 * Valid arguments for the PaymentNotice type.
 */
export interface PaymentNoticeArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentNotice" | undefined;
    /**
     * A unique identifier assigned to this payment notice.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Reference of resource for which payment is being made.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Reference of response to resource for which payment is being made.
     */
    response?: fhir.ReferenceArgs | undefined;
    /**
     * The date when this resource was created.
     */
    created: fhir.FhirDateTime | string | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * A reference to the payment which is the subject of this notice.
     */
    payment: fhir.ReferenceArgs | null;
    /**
     * The date when the above payment action occurred.
     */
    paymentDate?: fhir.FhirDate | string | undefined;
    /**
     * The party who will receive or has received payment that is the subject of this notification.
     */
    payee?: fhir.ReferenceArgs | undefined;
    /**
     * The party who is notified of the payment status.
     */
    recipient: fhir.ReferenceArgs | null;
    /**
     * The amount sent to the payee.
     */
    amount: fhir.MoneyArgs | null;
    /**
     * Typically paid: payment sent, cleared: payment received.
     */
    paymentStatus?: fhir.CodeableConceptArgs | undefined;
}
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export declare class PaymentNotice extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "PaymentNotice";
    /**
     * A unique identifier assigned to this payment notice.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Reference of resource for which payment is being made.
     */
    request?: fhir.Reference | undefined;
    /**
     * Reference of response to resource for which payment is being made.
     */
    response?: fhir.Reference | undefined;
    /**
     * The date when this resource was created.
     */
    created: fhir.FhirDateTime | null;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * A reference to the payment which is the subject of this notice.
     */
    payment: fhir.Reference | null;
    /**
     * The date when the above payment action occurred.
     */
    paymentDate?: fhir.FhirDate | undefined;
    /**
     * The party who will receive or has received payment that is the subject of this notification.
     */
    payee?: fhir.Reference | undefined;
    /**
     * The party who is notified of the payment status.
     */
    recipient: fhir.Reference | null;
    /**
     * The amount sent to the payee.
     */
    amount: fhir.Money | null;
    /**
     * Typically paid: payment sent, cleared: payment received.
     */
    paymentStatus?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for PaymentNotice - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PaymentNoticeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Example-bound Value Set for paymentStatus
     */
    static paymentStatusExampleValueSet(): PaymentStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=PaymentNotice.d.ts.map