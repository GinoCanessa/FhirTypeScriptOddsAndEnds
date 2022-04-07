import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export declare class PaymentNotice extends fhirModels.DomainResource implements fhirInterfaces.IPaymentNotice {
    /**
     * Resource Type Name
     */
    readonly resourceType = "PaymentNotice";
    /**
     * The amount sent to the payee.
     */
    amount?: fhirModels.Money | undefined;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    _created?: fhirModels.Element | undefined;
    /**
     * A unique identifier assigned to this payment notice.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The party who will receive or has received payment that is the subject of this notification.
     */
    payee?: fhirModels.Reference | undefined;
    /**
     * A reference to the payment which is the subject of this notice.
     */
    payment?: fhirModels.Reference | undefined;
    /**
     * The date when the above payment action occurred.
     */
    paymentDate?: string | undefined;
    _paymentDate?: fhirModels.Element | undefined;
    /**
     * Typically paid: payment sent, cleared: payment received.
     */
    paymentStatus?: fhirModels.CodeableConcept | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhirModels.Reference | undefined;
    /**
     * The party who is notified of the payment status.
     */
    recipient?: fhirModels.Reference | undefined;
    /**
     * Reference of resource for which payment is being made.
     */
    request?: fhirModels.Reference | undefined;
    /**
     * Reference of response to resource for which payment is being made.
     */
    response?: fhirModels.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: PaymentNoticeStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for PaymentNotice from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPaymentNotice>);
    /**
     * Factory function to create a PaymentNotice from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPaymentNotice): PaymentNotice;
    /**
     * Check if the current PaymentNotice contains all required elements.
     */
    checkRequiredElements(): string[];
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