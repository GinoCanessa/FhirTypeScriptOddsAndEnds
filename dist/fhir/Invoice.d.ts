import * as fhir from '../fhir.js';
import { InvoicePriceComponentTypeValueSetType, InvoicePriceComponentTypeValueSetEnum } from '../fhirValueSets/InvoicePriceComponentTypeValueSet.js';
import { InvoiceStatusValueSetType, InvoiceStatusValueSetEnum } from '../fhirValueSets/InvoiceStatusValueSet.js';
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare type IInvoiceParticipant = fhir.IBackboneElement & {
    /**
     * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
     */
    role?: fhir.ICodeableConcept | undefined;
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.IReference | null;
};
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export declare type IInvoiceLineItemPriceComponent = fhir.IBackboneElement & {
    /**
     * This code identifies the type of the component.
     */
    type: InvoicePriceComponentTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: Invoice.lineItem.priceComponent.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Invoice.lineItem.priceComponent.factor
     */
    _factor?: fhir.IFhirElement | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    amount?: fhir.IMoney | undefined;
};
/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
export declare type IInvoiceLineItem = fhir.IBackboneElement & {
    /**
     * Sequence in which the items appear on the invoice.
     */
    sequence?: number | undefined;
    /**
     * Extended properties for primitive element: Invoice.lineItem.sequence
     */
    _sequence?: fhir.IFhirElement | undefined;
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
     * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The current state of the Invoice.
     */
    status: InvoiceStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Invoice.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    cancelledReason?: string | undefined;
    /**
     * Extended properties for primitive element: Invoice.cancelledReason
     */
    _cancelledReason?: fhir.IFhirElement | undefined;
    /**
     * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The individual or set of individuals receiving the goods and services billed in this invoice.
     */
    subject?: fhir.IReference | undefined;
    /**
     * The individual or Organization responsible for balancing of this invoice.
     */
    recipient?: fhir.IReference | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Invoice.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant?: fhir.IInvoiceParticipant[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    issuer?: fhir.IReference | undefined;
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.IReference | undefined;
    /**
     * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
     */
    lineItem?: fhir.IInvoiceLineItem[] | undefined;
    /**
     * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
     */
    totalPriceComponent?: fhir.IInvoiceLineItemPriceComponent[] | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalNet?: fhir.IMoney | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalGross?: fhir.IMoney | undefined;
    /**
     * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    paymentTerms?: string | undefined;
    /**
     * Extended properties for primitive element: Invoice.paymentTerms
     */
    _paymentTerms?: fhir.IFhirElement | undefined;
    /**
     * Comments made about the invoice by the issuer, subject, or other participants.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare class InvoiceParticipant extends fhir.BackboneElement implements IInvoiceParticipant {
    /**
     * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
     */
    role?: fhir.CodeableConcept | undefined;
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for InvoiceParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInvoiceParticipant>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export declare class InvoiceLineItemPriceComponent extends fhir.BackboneElement implements IInvoiceLineItemPriceComponent {
    /**
     * This code identifies the type of the component.
     */
    type: InvoicePriceComponentTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: Invoice.lineItem.priceComponent.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factor?: number | undefined;
    /**
     * Extended properties for primitive element: Invoice.lineItem.priceComponent.factor
     */
    _factor?: fhir.FhirElement | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    amount?: fhir.Money | undefined;
    /**
     * Default constructor for InvoiceLineItemPriceComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInvoiceLineItemPriceComponent>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): InvoicePriceComponentTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
export declare class InvoiceLineItem extends fhir.BackboneElement implements IInvoiceLineItem {
    /**
     * Sequence in which the items appear on the invoice.
     */
    sequence?: number | undefined;
    /**
     * Extended properties for primitive element: Invoice.lineItem.sequence
     */
    _sequence?: fhir.FhirElement | undefined;
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
     * Default constructor for InvoiceLineItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInvoiceLineItem>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export declare class Invoice extends fhir.DomainResource implements IInvoice {
    /**
     * Resource Type Name
     */
    resourceType: "Invoice";
    /**
     * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The current state of the Invoice.
     */
    status: InvoiceStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Invoice.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    cancelledReason?: string | undefined;
    /**
     * Extended properties for primitive element: Invoice.cancelledReason
     */
    _cancelledReason?: fhir.FhirElement | undefined;
    /**
     * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The individual or set of individuals receiving the goods and services billed in this invoice.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The individual or Organization responsible for balancing of this invoice.
     */
    recipient?: fhir.Reference | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Invoice.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant?: fhir.InvoiceParticipant[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    issuer?: fhir.Reference | undefined;
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.Reference | undefined;
    /**
     * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
     */
    lineItem?: fhir.InvoiceLineItem[] | undefined;
    /**
     * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
     */
    totalPriceComponent?: fhir.InvoiceLineItemPriceComponent[] | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalNet?: fhir.Money | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalGross?: fhir.Money | undefined;
    /**
     * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    paymentTerms?: string | undefined;
    /**
     * Extended properties for primitive element: Invoice.paymentTerms
     */
    _paymentTerms?: fhir.FhirElement | undefined;
    /**
     * Comments made about the invoice by the issuer, subject, or other participants.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for Invoice - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IInvoice>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): InvoiceStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Invoice.d.ts.map