import * as fhir from '../fhir';
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare type IInvoiceParticipant = fhir.IBackboneElement & {
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.IReference | null;
    /**
     * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
     */
    role?: fhir.ICodeableConcept | undefined;
};
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export declare type IInvoiceLineItemPriceComponent = fhir.IBackboneElement & {
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    amount?: fhir.IMoney | undefined;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factor?: number | undefined;
    _factor?: fhir.IFhirElement | undefined;
    /**
     * This code identifies the type of the component.
     */
    type: InvoiceLineItemPriceComponentTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
export declare type IInvoiceLineItem = fhir.IBackboneElement & {
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItemReference?: fhir.IReference | undefined;
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItemCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
     */
    priceComponent?: fhir.IInvoiceLineItemPriceComponent[] | undefined;
    /**
     * Sequence in which the items appear on the invoice.
     */
    sequence?: number | undefined;
    _sequence?: fhir.IFhirElement | undefined;
};
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export declare type IInvoice = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Invoice";
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.IReference | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    cancelledReason?: string | undefined;
    _cancelledReason?: fhir.IFhirElement | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    issuer?: fhir.IReference | undefined;
    /**
     * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
     */
    lineItem?: fhir.IInvoiceLineItem[] | undefined;
    /**
     * Comments made about the invoice by the issuer, subject, or other participants.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant?: fhir.IInvoiceParticipant[] | undefined;
    /**
     * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    paymentTerms?: string | undefined;
    _paymentTerms?: fhir.IFhirElement | undefined;
    /**
     * The individual or Organization responsible for balancing of this invoice.
     */
    recipient?: fhir.IReference | undefined;
    /**
     * The current state of the Invoice.
     */
    status: InvoiceStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The individual or set of individuals receiving the goods and services billed in this invoice.
     */
    subject?: fhir.IReference | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalGross?: fhir.IMoney | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalNet?: fhir.IMoney | undefined;
    /**
     * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
     */
    totalPriceComponent?: fhir.IInvoiceLineItemPriceComponent[] | undefined;
    /**
     * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare class InvoiceParticipant extends fhir.BackboneElement implements fhir.IInvoiceParticipant {
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.Reference | null;
    /**
     * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for InvoiceParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInvoiceParticipant>);
    /**
     * Check if the current InvoiceParticipant contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a InvoiceParticipant from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IInvoiceParticipant): InvoiceParticipant;
}
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export declare class InvoiceLineItemPriceComponent extends fhir.BackboneElement implements fhir.IInvoiceLineItemPriceComponent {
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    amount?: fhir.Money | undefined;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factor?: number | undefined;
    _factor?: fhir.FhirElement | undefined;
    /**
     * This code identifies the type of the component.
     */
    type: InvoiceLineItemPriceComponentTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for InvoiceLineItemPriceComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInvoiceLineItemPriceComponent>);
    /**
     * Check if the current InvoiceLineItemPriceComponent contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a InvoiceLineItemPriceComponent from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IInvoiceLineItemPriceComponent): InvoiceLineItemPriceComponent;
}
/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
export declare class InvoiceLineItem extends fhir.BackboneElement implements fhir.IInvoiceLineItem {
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItemReference?: fhir.Reference | undefined;
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
     */
    priceComponent?: fhir.InvoiceLineItemPriceComponent[] | undefined;
    /**
     * Sequence in which the items appear on the invoice.
     */
    sequence?: number | undefined;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * Default constructor for InvoiceLineItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInvoiceLineItem>);
    /**
     * Check if the current InvoiceLineItem contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a InvoiceLineItem from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IInvoiceLineItem): InvoiceLineItem;
}
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export declare class Invoice extends fhir.DomainResource implements fhir.IInvoice {
    /**
     * Resource Type Name
     */
    resourceType: "Invoice";
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.Reference | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    cancelledReason?: string | undefined;
    _cancelledReason?: fhir.FhirElement | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    issuer?: fhir.Reference | undefined;
    /**
     * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
     */
    lineItem?: fhir.InvoiceLineItem[] | undefined;
    /**
     * Comments made about the invoice by the issuer, subject, or other participants.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant?: fhir.InvoiceParticipant[] | undefined;
    /**
     * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    paymentTerms?: string | undefined;
    _paymentTerms?: fhir.FhirElement | undefined;
    /**
     * The individual or Organization responsible for balancing of this invoice.
     */
    recipient?: fhir.Reference | undefined;
    /**
     * The current state of the Invoice.
     */
    status: InvoiceStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * The individual or set of individuals receiving the goods and services billed in this invoice.
     */
    subject?: fhir.Reference | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalGross?: fhir.Money | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalNet?: fhir.Money | undefined;
    /**
     * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
     */
    totalPriceComponent?: fhir.InvoiceLineItemPriceComponent[] | undefined;
    /**
     * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for Invoice - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IInvoice>);
    /**
     * Check if the current Invoice contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Invoice from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IInvoice): Invoice;
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