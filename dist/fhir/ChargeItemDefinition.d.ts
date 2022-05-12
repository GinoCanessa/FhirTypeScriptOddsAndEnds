import * as fhir from '../fhir.js';
import { InvoicePriceComponentTypeValueSetType } from '../fhirValueSets/InvoicePriceComponentTypeValueSet.js';
import { InvoicePriceComponentTypeValueSetEnum } from '../valueSetEnums.js';
import { PublicationStatusValueSetType } from '../fhirValueSets/PublicationStatusValueSet.js';
import { PublicationStatusValueSetEnum } from '../valueSetEnums.js';
import { ChargeitemBillingcodesValueSetType } from '../fhirValueSets/ChargeitemBillingcodesValueSet.js';
/**
 * Valid arguments for the ChargeItemDefinitionApplicability type.
 */
export interface ChargeItemDefinitionApplicabilityArgs extends fhir.BackboneElementArgs {
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions.
     */
    language?: fhir.FhirString | string | undefined;
    /**
     * Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which this definition is being applied.
     * FHIRPath expressions can traverse into other resources linked from the ChargeItem resource, however, testing rules such as that a billing code may be billed only once per encounter need a wider scope. In such scenarios, CQL may be the appropriate choice.
     */
    expression?: fhir.FhirString | string | undefined;
}
/**
 * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
 */
export declare class ChargeItemDefinitionApplicability extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A brief, natural language description of the condition that effectively communicates the intended semantics.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions.
     */
    language?: fhir.FhirString | undefined;
    /**
     * Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which this definition is being applied.
     * FHIRPath expressions can traverse into other resources linked from the ChargeItem resource, however, testing rules such as that a billing code may be billed only once per encounter need a wider scope. In such scenarios, CQL may be the appropriate choice.
     */
    expression?: fhir.FhirString | undefined;
    /**
     * Default constructor for ChargeItemDefinitionApplicability - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ChargeItemDefinitionApplicabilityArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the ChargeItemDefinitionPropertyGroupPriceComponent type.
 */
export interface ChargeItemDefinitionPropertyGroupPriceComponentArgs extends fhir.BackboneElementArgs {
    /**
     * This code identifies the type of the component.
     */
    type: InvoicePriceComponentTypeValueSetEnum | null;
    /**
     * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The factor that has been applied on the base price for calculating this component.
     */
    factor?: fhir.FhirDecimal | number | undefined;
    /**
     * The amount calculated for this component.
     */
    amount?: fhir.MoneyArgs | undefined;
}
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
 */
export declare class ChargeItemDefinitionPropertyGroupPriceComponent extends fhir.BackboneElement {
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
     * The factor that has been applied on the base price for calculating this component.
     */
    factor?: fhir.FhirDecimal | undefined;
    /**
     * The amount calculated for this component.
     */
    amount?: fhir.Money | undefined;
    /**
     * Default constructor for ChargeItemDefinitionPropertyGroupPriceComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ChargeItemDefinitionPropertyGroupPriceComponentArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the ChargeItemDefinitionPropertyGroup type.
 */
export interface ChargeItemDefinitionPropertyGroupArgs extends fhir.BackboneElementArgs {
    /**
     * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
     */
    applicability?: fhir.ChargeItemDefinitionApplicabilityArgs[] | undefined;
    /**
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
     */
    priceComponent?: fhir.ChargeItemDefinitionPropertyGroupPriceComponentArgs[] | undefined;
}
/**
 * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
 */
export declare class ChargeItemDefinitionPropertyGroup extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
     */
    applicability?: fhir.ChargeItemDefinitionApplicability[] | undefined;
    /**
     * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
     */
    priceComponent?: fhir.ChargeItemDefinitionPropertyGroupPriceComponent[] | undefined;
    /**
     * Default constructor for ChargeItemDefinitionPropertyGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ChargeItemDefinitionPropertyGroupArgs>, options?: fhir.FhirConstructorOptions);
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
 * Valid arguments for the ChargeItemDefinition type.
 */
export interface ChargeItemDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ChargeItemDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this charge item definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different charge item definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the charge item definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
     */
    derivedFromUri?: fhir.FhirUri[] | string[] | undefined;
    /**
     * A larger definition of which this particular definition is a component or step.
     */
    partOf?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
     */
    replaces?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Allows filtering of charge item definitions that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Allows filtering of charge item definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the charge item definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organization or individual primarily responsible for the maintenance and upkeep of the charge item definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the charge item definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the charge item definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the charge item definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the charge item definition is presumed to be the predominant language in the place the charge item definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the charge item definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | string | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | string | undefined;
    /**
     * The effective period for a charge item definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The defined billing details in this resource pertain to the given billing code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * In case of highly customized, individually produced or fitted devices/substances, the pricing information may be different for each instance of the product. This reference links pricing details to specific product instances.
     */
    instance?: fhir.ReferenceArgs[] | undefined;
    /**
     * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
     */
    applicability?: fhir.ChargeItemDefinitionApplicabilityArgs[] | undefined;
    /**
     * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
     */
    propertyGroup?: fhir.ChargeItemDefinitionPropertyGroupArgs[] | undefined;
}
/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
export declare class ChargeItemDefinition extends fhir.DomainResource {
    readonly __dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ChargeItemDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this charge item definition outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different charge item definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the charge item definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
     */
    derivedFromUri?: fhir.FhirUri[] | undefined;
    /**
     * A larger definition of which this particular definition is a component or step.
     */
    partOf?: fhir.FhirCanonical[] | undefined;
    /**
     * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
     */
    replaces?: fhir.FhirCanonical[] | undefined;
    /**
     * Allows filtering of charge item definitions that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Allows filtering of charge item definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the charge item definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organization or individual primarily responsible for the maintenance and upkeep of the charge item definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the charge item definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the charge item definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the charge item definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the charge item definition is presumed to be the predominant language in the place the charge item definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the charge item definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: fhir.FhirDate | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: fhir.FhirDate | undefined;
    /**
     * The effective period for a charge item definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * The defined billing details in this resource pertain to the given billing code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * In case of highly customized, individually produced or fitted devices/substances, the pricing information may be different for each instance of the product. This reference links pricing details to specific product instances.
     */
    instance?: fhir.Reference[] | undefined;
    /**
     * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
     */
    applicability?: fhir.ChargeItemDefinitionApplicability[] | undefined;
    /**
     * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
     */
    propertyGroup?: fhir.ChargeItemDefinitionPropertyGroup[] | undefined;
    /**
     * Default constructor for ChargeItemDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ChargeItemDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ChargeitemBillingcodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=ChargeItemDefinition.d.ts.map