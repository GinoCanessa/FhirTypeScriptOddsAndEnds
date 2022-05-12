import * as fhir from '../fhir.js';
import { InvoicePriceComponentTypeValueSetType } from '../fhirValueSets/InvoicePriceComponentTypeValueSet.js';
import { InvoicePriceComponentTypeValueSetEnum } from '../valueSetEnums.js';
import { InvoiceStatusValueSetType } from '../fhirValueSets/InvoiceStatusValueSet.js';
import { InvoiceStatusValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the InvoiceParticipant type.
 */
export interface InvoiceParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, the Participant may be a billing engine or another kind of device.
     */
    role?: fhir.CodeableConceptArgs | undefined;
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.ReferenceArgs | null;
}
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare class InvoiceParticipant extends fhir.BackboneElement {
    readonly __dataType: string;
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
    constructor(source?: Partial<InvoiceParticipantArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the InvoiceLineItemPriceComponent type.
 */
export interface InvoiceLineItemPriceComponentArgs extends fhir.BackboneElementArgs {
    /**
     * This code identifies the type of the component.
     */
    type: InvoicePriceComponentTypeValueSetEnum | null;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    amount?: fhir.MoneyArgs | undefined;
}
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
export declare class InvoiceLineItemPriceComponent extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * This code identifies the type of the component.
     */
    type: InvoicePriceComponentTypeValueSetEnum | null;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    amount?: fhir.Money | undefined;
    /**
     * Default constructor for InvoiceLineItemPriceComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<InvoiceLineItemPriceComponentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): InvoicePriceComponentTypeValueSetType;
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
 * Valid arguments for the InvoiceLineItem type.
 */
export interface InvoiceLineItemArgs extends fhir.BackboneElementArgs {
    /**
     * Sequence in which the items appear on the invoice.
     */
    sequence?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItem?: fhir.Reference | fhir.CodeableConcept | undefined;
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItemReference?: fhir.ReferenceArgs | undefined;
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItemCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
     */
    priceComponent?: fhir.InvoiceLineItemPriceComponentArgs[] | undefined;
}
/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
export declare class InvoiceLineItem extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Sequence in which the items appear on the invoice.
     */
    sequence?: fhir.FhirPositiveInt | undefined;
    /**
     * The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
     */
    chargeItem: (fhir.Reference | fhir.CodeableConcept) | null;
    readonly __chargeItemIsChoice: true;
    /**
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
     */
    priceComponent?: fhir.InvoiceLineItemPriceComponent[] | undefined;
    /**
     * Default constructor for InvoiceLineItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<InvoiceLineItemArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the Invoice type.
 */
export interface InvoiceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Invoice" | undefined;
    /**
     * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The current state of the Invoice.
     */
    status: InvoiceStatusValueSetEnum | null;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    cancelledReason?: fhir.FhirString | string | undefined;
    /**
     * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The individual or set of individuals receiving the goods and services billed in this invoice.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The individual or Organization responsible for balancing of this invoice.
     */
    recipient?: fhir.ReferenceArgs | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    participant?: fhir.InvoiceParticipantArgs[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    issuer?: fhir.ReferenceArgs | undefined;
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.ReferenceArgs | undefined;
    /**
     * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
     */
    lineItem?: fhir.InvoiceLineItemArgs[] | undefined;
    /**
     * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
     */
    totalPriceComponent?: fhir.InvoiceLineItemPriceComponentArgs[] | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalNet?: fhir.MoneyArgs | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    totalGross?: fhir.MoneyArgs | undefined;
    /**
     * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    paymentTerms?: fhir.FhirMarkdown | string | undefined;
    /**
     * Comments made about the invoice by the issuer, subject, or other participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export declare class Invoice extends fhir.DomainResource {
    readonly __dataType: string;
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
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    cancelledReason?: fhir.FhirString | undefined;
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
    date?: fhir.FhirDateTime | undefined;
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
    paymentTerms?: fhir.FhirMarkdown | undefined;
    /**
     * Comments made about the invoice by the issuer, subject, or other participants.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for Invoice - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<InvoiceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): InvoiceStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Invoice.d.ts.map