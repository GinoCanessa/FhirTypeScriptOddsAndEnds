import * as fhir from '../fhir.js';
import { FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js';
import { PaymentStatusValueSetType } from '../fhirValueSets/PaymentStatusValueSet.js';
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export declare type IPaymentNotice = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentNotice";
    /**
     * A unique identifier assigned to this payment notice.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: PaymentNotice.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Reference of resource for which payment is being made.
     */
    request?: fhir.IReference | undefined;
    /**
     * Reference of response to resource for which payment is being made.
     */
    response?: fhir.IReference | undefined;
    /**
     * The date when this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: PaymentNotice.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.IReference | undefined;
    /**
     * A reference to the payment which is the subject of this notice.
     */
    payment: fhir.IReference | null;
    /**
     * The date when the above payment action occurred.
     */
    paymentDate?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentNotice.paymentDate
     */
    _paymentDate?: fhir.IFhirElement | undefined;
    /**
     * The party who will receive or has received payment that is the subject of this notification.
     */
    payee?: fhir.IReference | undefined;
    /**
     * The party who is notified of the payment status.
     */
    recipient: fhir.IReference | null;
    /**
     * The amount sent to the payee.
     */
    amount: fhir.IMoney | null;
    /**
     * Typically paid: payment sent, cleared: payment received.
     */
    paymentStatus?: fhir.ICodeableConcept | undefined;
};
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export declare class PaymentNotice extends fhir.DomainResource implements IPaymentNotice {
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
     * Extended properties for primitive element: PaymentNotice.status
     */
    _status?: fhir.FhirElement | undefined;
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
    created: string | null;
    /**
     * Extended properties for primitive element: PaymentNotice.created
     */
    _created?: fhir.FhirElement | undefined;
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
    paymentDate?: string | undefined;
    /**
     * Extended properties for primitive element: PaymentNotice.paymentDate
     */
    _paymentDate?: fhir.FhirElement | undefined;
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
    constructor(source?: Partial<IPaymentNotice>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Example-bound Value Set for paymentStatus
     */
    paymentStatusExampleValueSet(): PaymentStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=PaymentNotice.d.ts.map