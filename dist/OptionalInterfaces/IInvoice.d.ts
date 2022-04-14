import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Indicates who or what performed or participated in the charged service.
 */
export interface IInvoiceParticipant extends fhirInterfaces.IBackboneElement {
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor?: fhirInterfaces.IReference | undefined;
    /**
     * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
     */
    role?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export interface IInvoiceLineItemPriceComponent extends fhirInterfaces.IBackboneElement {
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    amount?: fhirInterfaces.IMoney | undefined;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factor?: number | undefined;
    _factor?: fhirInterfaces.IElement | undefined;
    /**
     * This code identifies the type of the component.
     */
    type?: InvoiceLineItemPriceComponentTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Invoice.lineItem.priceComponent.type field
 */
export declare enum InvoiceLineItemPriceComponentTypeEnum {
    BASE = "base",
    SURCHARGE = "surcharge",
    DEDUCTION = "deduction",
    DISCOUNT = "discount",
    TAX = "tax",
    INFORMATIONAL = "informational"
}
/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
export interface IInvoiceLineItem extends fhirInterfaces.IBackboneElement {
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItemReference?: fhirInterfaces.IReference | undefined;
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItemCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
     */
    priceComponent?: fhirInterfaces.IInvoiceLineItemPriceComponent[] | undefined;
    /**
     * Sequence in which the items appear on the invoice.
     */
    sequence?: number | undefined;
    _sequence?: fhirInterfaces.IElement | undefined;
}
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export interface IInvoice extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Invoice";
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhirInterfaces.IReference | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    cancelledReason?: string | undefined;
    _cancelledReason?: fhirInterfaces.IElement | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    issuer?: fhirInterfaces.IReference | undefined;
    /**
     * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
     */
    lineItem?: fhirInterfaces.IInvoiceLineItem[] | undefined;
    /**
     * Comments made about the invoice by the issuer, subject, or other participants.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant?: fhirInterfaces.IInvoiceParticipant[] | undefined;
    /**
     * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    paymentTerms?: string | undefined;
    _paymentTerms?: fhirInterfaces.IElement | undefined;
    /**
     * The individual or Organization responsible for balancing of this invoice.
     */
    recipient?: fhirInterfaces.IReference | undefined;
    /**
     * The current state of the Invoice.
     */
    status?: InvoiceStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The individual or set of individuals receiving the goods and services billed in this invoice.
     */
    subject?: fhirInterfaces.IReference | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalGross?: fhirInterfaces.IMoney | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalNet?: fhirInterfaces.IMoney | undefined;
    /**
     * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
     */
    totalPriceComponent?: fhirInterfaces.IInvoiceLineItemPriceComponent[] | undefined;
    /**
     * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Code Values for the Invoice.status field
 */
export declare enum InvoiceStatusEnum {
    DRAFT = "draft",
    ISSUED = "issued",
    BALANCED = "balanced",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=IInvoice.d.ts.map