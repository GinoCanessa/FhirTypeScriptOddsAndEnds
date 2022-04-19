import * as fhir from '../fhir';
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export declare type IPaymentNotice = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentNotice";
    /**
     * The amount sent to the payee.
     */
    amount: fhir.IMoney | null;
    /**
     * The date when this resource was created.
     */
    created: string | null;
    _created?: fhir.IFhirElement | undefined;
    /**
     * A unique identifier assigned to this payment notice.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The party who will receive or has received payment that is the subject of this notification.
     */
    payee?: fhir.IReference | undefined;
    /**
     * A reference to the payment which is the subject of this notice.
     */
    payment: fhir.IReference | null;
    /**
     * The date when the above payment action occurred.
     */
    paymentDate?: string | undefined;
    _paymentDate?: fhir.IFhirElement | undefined;
    /**
     * Typically paid: payment sent, cleared: payment received.
     */
    paymentStatus?: fhir.ICodeableConcept | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.IReference | undefined;
    /**
     * The party who is notified of the payment status.
     */
    recipient: fhir.IReference | null;
    /**
     * Reference of resource for which payment is being made.
     */
    request?: fhir.IReference | undefined;
    /**
     * Reference of response to resource for which payment is being made.
     */
    response?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: PaymentNoticeStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export declare class PaymentNotice extends fhir.DomainResource implements fhir.IPaymentNotice {
    /**
     * Resource Type Name
     */
    resourceType: "PaymentNotice";
    /**
     * The amount sent to the payee.
     */
    amount: fhir.Money | null;
    /**
     * The date when this resource was created.
     */
    created: string | null;
    _created?: fhir.FhirElement | undefined;
    /**
     * A unique identifier assigned to this payment notice.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The party who will receive or has received payment that is the subject of this notification.
     */
    payee?: fhir.Reference | undefined;
    /**
     * A reference to the payment which is the subject of this notice.
     */
    payment: fhir.Reference | null;
    /**
     * The date when the above payment action occurred.
     */
    paymentDate?: string | undefined;
    _paymentDate?: fhir.FhirElement | undefined;
    /**
     * Typically paid: payment sent, cleared: payment received.
     */
    paymentStatus?: fhir.CodeableConcept | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The party who is notified of the payment status.
     */
    recipient: fhir.Reference | null;
    /**
     * Reference of resource for which payment is being made.
     */
    request?: fhir.Reference | undefined;
    /**
     * Reference of response to resource for which payment is being made.
     */
    response?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: PaymentNoticeStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for PaymentNotice - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPaymentNotice>);
    /**
     * Check if the current PaymentNotice contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a PaymentNotice from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IPaymentNotice): PaymentNotice;
}
/**
 * Code Values for the PaymentNotice.status field
 */
export declare enum PaymentNoticeStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=PaymentNotice.d.ts.map