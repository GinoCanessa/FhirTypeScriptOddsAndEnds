import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare class InvoiceParticipant extends fhirModels.BackboneElement implements fhirInterfaces.IInvoiceParticipant {
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor?: fhirModels.Reference | undefined;
    /**
     * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
     */
    role?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for InvoiceParticipant from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IInvoiceParticipant>);
    /**
     * Factory function to create a InvoiceParticipant from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IInvoiceParticipant): InvoiceParticipant;
    /**
     * Check if the current InvoiceParticipant contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export declare class InvoiceLineItemPriceComponent extends fhirModels.BackboneElement implements fhirInterfaces.IInvoiceLineItemPriceComponent {
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    amount?: fhirModels.Money | undefined;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factor?: number | undefined;
    _factor?: fhirModels.Element | undefined;
    /**
     * This code identifies the type of the component.
     */
    type?: InvoiceLineItemPriceComponentTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for InvoiceLineItemPriceComponent from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IInvoiceLineItemPriceComponent>);
    /**
     * Factory function to create a InvoiceLineItemPriceComponent from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IInvoiceLineItemPriceComponent): InvoiceLineItemPriceComponent;
    /**
     * Check if the current InvoiceLineItemPriceComponent contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class InvoiceLineItem extends fhirModels.BackboneElement implements fhirInterfaces.IInvoiceLineItem {
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItemReference?: fhirModels.Reference | undefined;
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItemCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
     */
    priceComponent?: fhirModels.InvoiceLineItemPriceComponent[] | undefined;
    /**
     * Sequence in which the items appear on the invoice.
     */
    sequence?: number | undefined;
    _sequence?: fhirModels.Element | undefined;
    /**
     * Default constructor for InvoiceLineItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IInvoiceLineItem>);
    /**
     * Factory function to create a InvoiceLineItem from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IInvoiceLineItem): InvoiceLineItem;
    /**
     * Check if the current InvoiceLineItem contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export declare class Invoice extends fhirModels.DomainResource implements fhirInterfaces.IInvoice {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Invoice";
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhirModels.Reference | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    cancelledReason?: string | undefined;
    _cancelledReason?: fhirModels.Element | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    issuer?: fhirModels.Reference | undefined;
    /**
     * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
     */
    lineItem?: fhirModels.InvoiceLineItem[] | undefined;
    /**
     * Comments made about the invoice by the issuer, subject, or other participants.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant?: fhirModels.InvoiceParticipant[] | undefined;
    /**
     * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    paymentTerms?: string | undefined;
    _paymentTerms?: fhirModels.Element | undefined;
    /**
     * The individual or Organization responsible for balancing of this invoice.
     */
    recipient?: fhirModels.Reference | undefined;
    /**
     * The current state of the Invoice.
     */
    status?: InvoiceStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * The individual or set of individuals receiving the goods and services billed in this invoice.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalGross?: fhirModels.Money | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalNet?: fhirModels.Money | undefined;
    /**
     * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
     */
    totalPriceComponent?: fhirModels.InvoiceLineItemPriceComponent[] | undefined;
    /**
     * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for Invoice from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IInvoice>);
    /**
     * Factory function to create a Invoice from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IInvoice): Invoice;
    /**
     * Check if the current Invoice contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=Invoice.d.ts.map