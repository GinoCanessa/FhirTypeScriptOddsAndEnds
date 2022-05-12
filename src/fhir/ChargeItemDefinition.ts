// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ChargeItemDefinition

import * as fhir from '../fhir.js';

import { InvoicePriceComponentTypeValueSet, InvoicePriceComponentTypeValueSetType,} from '../fhirValueSets/InvoicePriceComponentTypeValueSet.js';
import { InvoicePriceComponentTypeValueSetEnum } from '../valueSetEnums.js';
import { PublicationStatusValueSet, PublicationStatusValueSetType,} from '../fhirValueSets/PublicationStatusValueSet.js';
import { PublicationStatusValueSetEnum } from '../valueSetEnums.js';
import { ChargeitemBillingcodesValueSet, ChargeitemBillingcodesValueSetType,} from '../fhirValueSets/ChargeitemBillingcodesValueSet.js';
import { ChargeitemBillingcodesValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the ChargeItemDefinitionApplicability type.
 */
export interface ChargeItemDefinitionApplicabilityArgs extends fhir.BackboneElementArgs {
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions.
   */
  language?: fhir.FhirString|string|undefined;
  /**
   * Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which this definition is being applied.
   * FHIRPath expressions can traverse into other resources linked from the ChargeItem resource, however, testing rules such as that a billing code may be billed only once per encounter need a wider scope. In such scenarios, CQL may be the appropriate choice.
   */
  expression?: fhir.FhirString|string|undefined;
}

/**
 * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
 */
export class ChargeItemDefinitionApplicability extends fhir.BackboneElement {
  readonly __dataType:string = 'ChargeItemDefinitionApplicability';
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions.
   */
  public language?: fhir.FhirString|undefined;
  /**
   * Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which this definition is being applied.
   * FHIRPath expressions can traverse into other resources linked from the ChargeItem resource, however, testing rules such as that a billing code may be billed only once per encounter need a wider scope. In such scenarios, CQL may be the appropriate choice.
   */
  public expression?: fhir.FhirString|undefined;
  /**
   * Default constructor for ChargeItemDefinitionApplicability - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ChargeItemDefinitionApplicabilityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['language']) { this.language = new fhir.FhirString({value: source.language}); }
    if (source['expression']) { this.expression = new fhir.FhirString({value: source.expression}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["language"]) { outcome.issue!.push(...this.language.doModelValidation().issue!); }
    if (this["expression"]) { outcome.issue!.push(...this.expression.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the ChargeItemDefinitionPropertyGroupPriceComponent type.
 */
export interface ChargeItemDefinitionPropertyGroupPriceComponentArgs extends fhir.BackboneElementArgs {
  /**
   * This code identifies the type of the component.
   */
  type: InvoicePriceComponentTypeValueSetEnum|null;
  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * The factor that has been applied on the base price for calculating this component.
   */
  factor?: fhir.FhirDecimal|number|undefined;
  /**
   * The amount calculated for this component.
   */
  amount?: fhir.MoneyArgs|undefined;
}

/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
 */
export class ChargeItemDefinitionPropertyGroupPriceComponent extends fhir.BackboneElement {
  readonly __dataType:string = 'ChargeItemDefinitionPropertyGroupPriceComponent';
  /**
   * This code identifies the type of the component.
   */
  public type: InvoicePriceComponentTypeValueSetEnum|null;
  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The factor that has been applied on the base price for calculating this component.
   */
  public factor?: fhir.FhirDecimal|undefined;
  /**
   * The amount calculated for this component.
   */
  public amount?: fhir.Money|undefined;
  /**
   * Default constructor for ChargeItemDefinitionPropertyGroupPriceComponent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ChargeItemDefinitionPropertyGroupPriceComponentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = source.type; }
    else { this.type = null; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['factor']) { this.factor = new fhir.FhirDecimal({value: source.factor}); }
    if (source['amount']) { this.amount = new fhir.Money(source.amount); }
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():InvoicePriceComponentTypeValueSetType {
    return InvoicePriceComponentTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property type:InvoicePriceComponentTypeValueSetEnum fhir: ChargeItemDefinition.propertyGroup.priceComponent.type:code", }));
    }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["factor"]) { outcome.issue!.push(...this.factor.doModelValidation().issue!); }
    if (this["amount"]) { outcome.issue!.push(...this.amount.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the ChargeItemDefinitionPropertyGroup type.
 */
export interface ChargeItemDefinitionPropertyGroupArgs extends fhir.BackboneElementArgs {
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  applicability?: fhir.ChargeItemDefinitionApplicabilityArgs[]|undefined;
  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
   */
  priceComponent?: fhir.ChargeItemDefinitionPropertyGroupPriceComponentArgs[]|undefined;
}

/**
 * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
 */
export class ChargeItemDefinitionPropertyGroup extends fhir.BackboneElement {
  readonly __dataType:string = 'ChargeItemDefinitionPropertyGroup';
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  public applicability?: fhir.ChargeItemDefinitionApplicability[]|undefined = [];
  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
   */
  public priceComponent?: fhir.ChargeItemDefinitionPropertyGroupPriceComponent[]|undefined = [];
  /**
   * Default constructor for ChargeItemDefinitionPropertyGroup - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ChargeItemDefinitionPropertyGroupArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['applicability']) { this.applicability = source.applicability.map((x) => new fhir.ChargeItemDefinitionApplicability(x)); }
    if (source['priceComponent']) { this.priceComponent = source.priceComponent.map((x) => new fhir.ChargeItemDefinitionPropertyGroupPriceComponent(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["applicability"]) { this.applicability.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["priceComponent"]) { this.priceComponent.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the ChargeItemDefinition type.
 */
export interface ChargeItemDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ChargeItemDefinition"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this charge item definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be different charge item definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the charge item definition with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
   */
  derivedFromUri?: fhir.FhirUri[]|string[]|undefined;
  /**
   * A larger definition of which this particular definition is a component or step.
   */
  partOf?: fhir.FhirCanonical[]|string[]|undefined;
  /**
   * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
   */
  replaces?: fhir.FhirCanonical[]|string[]|undefined;
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  status: PublicationStatusValueSetEnum|null;
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the charge item definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organization or individual primarily responsible for the maintenance and upkeep of the charge item definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the charge item definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the charge item definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the charge item definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the charge item definition is presumed to be the predominant language in the place the charge item definition was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the charge item definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
   */
  copyright?: fhir.FhirMarkdown|string|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: fhir.FhirDate|string|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: fhir.FhirDate|string|undefined;
  /**
   * The effective period for a charge item definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * The defined billing details in this resource pertain to the given billing code.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * In case of highly customized, individually produced or fitted devices/substances, the pricing information may be different for each instance of the product. This reference links pricing details to specific product instances.
   */
  instance?: fhir.ReferenceArgs[]|undefined;
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  applicability?: fhir.ChargeItemDefinitionApplicabilityArgs[]|undefined;
  /**
   * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
   */
  propertyGroup?: fhir.ChargeItemDefinitionPropertyGroupArgs[]|undefined;
}

/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
export class ChargeItemDefinition extends fhir.DomainResource {
  readonly __dataType:string = 'ChargeItemDefinition';
  /**
   * Resource Type Name
   */
  public resourceType: "ChargeItemDefinition";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url: fhir.FhirUri|null;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this charge item definition outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * There may be different charge item definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the charge item definition with the format [url]|[version].
   */
  public version?: fhir.FhirString|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
   */
  public derivedFromUri?: fhir.FhirUri[]|undefined = [];
  /**
   * A larger definition of which this particular definition is a component or step.
   */
  public partOf?: fhir.FhirCanonical[]|undefined = [];
  /**
   * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
   */
  public replaces?: fhir.FhirCanonical[]|undefined = [];
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  public status: PublicationStatusValueSetEnum|null;
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the charge item definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organization or individual primarily responsible for the maintenance and upkeep of the charge item definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the charge item definition. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact?: fhir.ContactDetail[]|undefined = [];
  /**
   * This description can be used to capture details such as why the charge item definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the charge item definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the charge item definition is presumed to be the predominant language in the place the charge item definition was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext?: fhir.UsageContext[]|undefined = [];
  /**
   * It may be possible for the charge item definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction?: fhir.CodeableConcept[]|undefined = [];
  /**
   * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
   */
  public copyright?: fhir.FhirMarkdown|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  public approvalDate?: fhir.FhirDate|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  public lastReviewDate?: fhir.FhirDate|undefined;
  /**
   * The effective period for a charge item definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * The defined billing details in this resource pertain to the given billing code.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * In case of highly customized, individually produced or fitted devices/substances, the pricing information may be different for each instance of the product. This reference links pricing details to specific product instances.
   */
  public instance?: fhir.Reference[]|undefined = [];
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  public applicability?: fhir.ChargeItemDefinitionApplicability[]|undefined = [];
  /**
   * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
   */
  public propertyGroup?: fhir.ChargeItemDefinitionPropertyGroup[]|undefined = [];
  /**
   * Default constructor for ChargeItemDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ChargeItemDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ChargeItemDefinition';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    else { this.url = null; }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['derivedFromUri']) { this.derivedFromUri = source.derivedFromUri.map((x) => new fhir.FhirUri({value: x})); }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.FhirCanonical({value: x})); }
    if (source['replaces']) { this.replaces = source.replaces.map((x) => new fhir.FhirCanonical({value: x})); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['experimental']) { this.experimental = new fhir.FhirBoolean({value: source.experimental}); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['publisher']) { this.publisher = new fhir.FhirString({value: source.publisher}); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    if (source['description']) { this.description = new fhir.FhirMarkdown({value: source.description}); }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    if (source['copyright']) { this.copyright = new fhir.FhirMarkdown({value: source.copyright}); }
    if (source['approvalDate']) { this.approvalDate = new fhir.FhirDate({value: source.approvalDate}); }
    if (source['lastReviewDate']) { this.lastReviewDate = new fhir.FhirDate({value: source.lastReviewDate}); }
    if (source['effectivePeriod']) { this.effectivePeriod = new fhir.Period(source.effectivePeriod); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['instance']) { this.instance = source.instance.map((x) => new fhir.Reference(x)); }
    if (source['applicability']) { this.applicability = source.applicability.map((x) => new fhir.ChargeItemDefinitionApplicability(x)); }
    if (source['propertyGroup']) { this.propertyGroup = source.propertyGroup.map((x) => new fhir.ChargeItemDefinitionPropertyGroup(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():PublicationStatusValueSetType {
    return PublicationStatusValueSet;
  }
  /**
   * Example-bound Value Set for code
   */
  public static codeExampleValueSet():ChargeitemBillingcodesValueSetType {
    return ChargeitemBillingcodesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'ChargeItemDefinition' fhir: ChargeItemDefinition.resourceType:'ChargeItemDefinition'", }));
    }
    if (!this['url']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property url:fhir.FhirUri fhir: ChargeItemDefinition.url:uri", }));
    }
    if (this["url"]) { outcome.issue!.push(...this.url.doModelValidation().issue!); }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["version"]) { outcome.issue!.push(...this.version.doModelValidation().issue!); }
    if (this["title"]) { outcome.issue!.push(...this.title.doModelValidation().issue!); }
    if (this["derivedFromUri"]) { this.derivedFromUri.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["partOf"]) { this.partOf.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["replaces"]) { this.replaces.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: ChargeItemDefinition.status:code", }));
    }
    if (this["experimental"]) { outcome.issue!.push(...this.experimental.doModelValidation().issue!); }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["publisher"]) { outcome.issue!.push(...this.publisher.doModelValidation().issue!); }
    if (this["contact"]) { this.contact.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["useContext"]) { this.useContext.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["jurisdiction"]) { this.jurisdiction.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["copyright"]) { outcome.issue!.push(...this.copyright.doModelValidation().issue!); }
    if (this["approvalDate"]) { outcome.issue!.push(...this.approvalDate.doModelValidation().issue!); }
    if (this["lastReviewDate"]) { outcome.issue!.push(...this.lastReviewDate.doModelValidation().issue!); }
    if (this["effectivePeriod"]) { outcome.issue!.push(...this.effectivePeriod.doModelValidation().issue!); }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["instance"]) { this.instance.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["applicability"]) { this.applicability.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["propertyGroup"]) { this.propertyGroup.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
