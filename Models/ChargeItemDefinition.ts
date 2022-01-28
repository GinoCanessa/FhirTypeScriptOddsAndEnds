// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
import * as fhirInterfaces from '../interfaces'
/**
 * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
 */
export class ChargeItemDefinitionApplicability extends fhirModels.BackboneElement implements fhirInterfaces.IChargeItemDefinitionApplicability {
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which this definition is being applied.
   * FHIRPath expressions can traverse into other resources linked from the ChargeItem resource, however, testing rules such as that a billing code may be billed only once per encounter need a wider scope. In such scenarios, CQL may be the appropriate choice.
   */
  expression?: string|undefined;
  _expression?: fhirModels.Element|undefined;
  /**
   * The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions.
   */
  language?: string|undefined;
  _language?: fhirModels.Element|undefined;
  /**
   * Default constructor for ChargeItemDefinitionApplicability from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IChargeItemDefinitionApplicability>) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["expression"] !== undefined) { this.expression = source.expression; }
    if (source["_expression"] !== undefined) { this._expression = new fhirModels.Element(source._expression); }
    if (source["language"] !== undefined) { this.language = source.language; }
    if (source["_language"] !== undefined) { this._language = new fhirModels.Element(source._language); }
  }
  /**
   * Check if the current ChargeItemDefinitionApplicability contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ChargeItemDefinitionApplicability from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IChargeItemDefinitionApplicability):ChargeItemDefinitionApplicability {
    var dest:ChargeItemDefinitionApplicability = new ChargeItemDefinitionApplicability(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ChargeItemDefinitionApplicability is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
 */
export class ChargeItemDefinitionPropertyGroupPriceComponent extends fhirModels.BackboneElement implements fhirInterfaces.IChargeItemDefinitionPropertyGroupPriceComponent {
  /**
   * The amount calculated for this component.
   */
  amount?: fhirModels.Money|undefined;
  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * The factor that has been applied on the base price for calculating this component.
   */
  factor?: number|undefined;
  _factor?: fhirModels.Element|undefined;
  /**
   * This code identifies the type of the component.
   */
  type: ChargeItemDefinitionPropertyGroupPriceComponentTypeEnum|undefined;
  _type?: fhirModels.Element|undefined;
  /**
   * Default constructor for ChargeItemDefinitionPropertyGroupPriceComponent from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IChargeItemDefinitionPropertyGroupPriceComponent>) {
    super(source);
    if (source["amount"] !== undefined) { this.amount = new fhirModels.Money(source.amount); }
    if (source["code"] !== undefined) { this.code = new fhirModels.CodeableConcept(source.code); }
    if (source["factor"] !== undefined) { this.factor = source.factor; }
    if (source["_factor"] !== undefined) { this._factor = new fhirModels.Element(source._factor); }
    if (source["type"] !== undefined) { this.type = source.type; }
    if (source["_type"] !== undefined) { this._type = new fhirModels.Element(source._type); }
  }
  /**
   * Check if the current ChargeItemDefinitionPropertyGroupPriceComponent contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["type"] === undefined) { missingElements.push("type"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ChargeItemDefinitionPropertyGroupPriceComponent from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IChargeItemDefinitionPropertyGroupPriceComponent):ChargeItemDefinitionPropertyGroupPriceComponent {
    var dest:ChargeItemDefinitionPropertyGroupPriceComponent = new ChargeItemDefinitionPropertyGroupPriceComponent(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ChargeItemDefinitionPropertyGroupPriceComponent is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the ChargeItemDefinition.propertyGroup.priceComponent.type field
 */
export enum ChargeItemDefinitionPropertyGroupPriceComponentTypeEnum {
  BASE = "base",
  SURCHARGE = "surcharge",
  DEDUCTION = "deduction",
  DISCOUNT = "discount",
  TAX = "tax",
  INFORMATIONAL = "informational",
}
/**
 * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
 */
export class ChargeItemDefinitionPropertyGroup extends fhirModels.BackboneElement implements fhirInterfaces.IChargeItemDefinitionPropertyGroup {
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  applicability?: fhirModels.ChargeItemDefinitionApplicability[]|undefined;
  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
   */
  priceComponent?: fhirModels.ChargeItemDefinitionPropertyGroupPriceComponent[]|undefined;
  /**
   * Default constructor for ChargeItemDefinitionPropertyGroup from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IChargeItemDefinitionPropertyGroup>) {
    super(source);
    if (source["applicability"] !== undefined) { this.applicability = source.applicability.map((x) => new fhirModels.ChargeItemDefinitionApplicability(x)); }
    if (source["priceComponent"] !== undefined) { this.priceComponent = source.priceComponent.map((x) => new fhirModels.ChargeItemDefinitionPropertyGroupPriceComponent(x)); }
  }
  /**
   * Check if the current ChargeItemDefinitionPropertyGroup contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ChargeItemDefinitionPropertyGroup from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IChargeItemDefinitionPropertyGroup):ChargeItemDefinitionPropertyGroup {
    var dest:ChargeItemDefinitionPropertyGroup = new ChargeItemDefinitionPropertyGroup(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ChargeItemDefinitionPropertyGroup is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
export class ChargeItemDefinition extends fhirModels.DomainResource implements fhirInterfaces.IChargeItemDefinition {
  /**
   * Resource Type Name
   */
  readonly resourceType = "ChargeItemDefinition";
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  applicability?: fhirModels.ChargeItemDefinitionApplicability[]|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: string|undefined;
  _approvalDate?: fhirModels.Element|undefined;
  /**
   * The defined billing details in this resource pertain to the given billing code.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhirModels.ContactDetail[]|undefined;
  /**
   * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
   */
  copyright?: string|undefined;
  _copyright?: fhirModels.Element|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the charge item definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  _date?: fhirModels.Element|undefined;
  /**
   * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
   */
  derivedFromUri?: string[]|undefined;
  _derivedFromUri?: fhirModels.Element[]|undefined;
  /**
   * This description can be used to capture details such as why the charge item definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the charge item definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the charge item definition is presumed to be the predominant language in the place the charge item definition was created).
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * The effective period for a charge item definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhirModels.Period|undefined;
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  experimental?: boolean|undefined;
  _experimental?: fhirModels.Element|undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this charge item definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * In case of highly customized, individually produced or fitted devices/substances, the pricing information may be different for each instance of the product. This reference links pricing details to specific product instances.
   */
  instance?: fhirModels.Reference[]|undefined;
  /**
   * It may be possible for the charge item definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhirModels.CodeableConcept[]|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: string|undefined;
  _lastReviewDate?: fhirModels.Element|undefined;
  /**
   * A larger definition of which this particular definition is a component or step.
   */
  partOf?: string[]|undefined;
  _partOf?: fhirModels.Element[]|undefined;
  /**
   * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
   */
  propertyGroup?: fhirModels.ChargeItemDefinitionPropertyGroup[]|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organization or individual primarily responsible for the maintenance and upkeep of the charge item definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the charge item definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  _publisher?: fhirModels.Element|undefined;
  /**
   * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
   */
  replaces?: string[]|undefined;
  _replaces?: fhirModels.Element[]|undefined;
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  status: ChargeItemDefinitionStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string|undefined;
  _title?: fhirModels.Element|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url: string|undefined;
  _url?: fhirModels.Element|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhirModels.UsageContext[]|undefined;
  /**
   * There may be different charge item definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the charge item definition with the format [url]|[version].
   */
  version?: string|undefined;
  _version?: fhirModels.Element|undefined;
  /**
   * Default constructor for ChargeItemDefinition from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IChargeItemDefinition>) {
    super(source);
    if ((source['resourceType'] !== "ChargeItemDefinition") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a ChargeItemDefinition'; }
    if (source["applicability"] !== undefined) { this.applicability = source.applicability.map((x) => new fhirModels.ChargeItemDefinitionApplicability(x)); }
    if (source["approvalDate"] !== undefined) { this.approvalDate = source.approvalDate; }
    if (source["_approvalDate"] !== undefined) { this._approvalDate = new fhirModels.Element(source._approvalDate); }
    if (source["code"] !== undefined) { this.code = new fhirModels.CodeableConcept(source.code); }
    if (source["contact"] !== undefined) { this.contact = source.contact.map((x) => new fhirModels.ContactDetail(x)); }
    if (source["copyright"] !== undefined) { this.copyright = source.copyright; }
    if (source["_copyright"] !== undefined) { this._copyright = new fhirModels.Element(source._copyright); }
    if (source["date"] !== undefined) { this.date = source.date; }
    if (source["_date"] !== undefined) { this._date = new fhirModels.Element(source._date); }
    if (source["derivedFromUri"] !== undefined) { this.derivedFromUri = source.derivedFromUri.map((x) => (x)); }
    if (source["_derivedFromUri"] !== undefined) { this._derivedFromUri = source._derivedFromUri.map((x) => new fhirModels.Element(x)); }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["effectivePeriod"] !== undefined) { this.effectivePeriod = new fhirModels.Period(source.effectivePeriod); }
    if (source["experimental"] !== undefined) { this.experimental = source.experimental; }
    if (source["_experimental"] !== undefined) { this._experimental = new fhirModels.Element(source._experimental); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["instance"] !== undefined) { this.instance = source.instance.map((x) => new fhirModels.Reference(x)); }
    if (source["jurisdiction"] !== undefined) { this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["lastReviewDate"] !== undefined) { this.lastReviewDate = source.lastReviewDate; }
    if (source["_lastReviewDate"] !== undefined) { this._lastReviewDate = new fhirModels.Element(source._lastReviewDate); }
    if (source["partOf"] !== undefined) { this.partOf = source.partOf.map((x) => (x)); }
    if (source["_partOf"] !== undefined) { this._partOf = source._partOf.map((x) => new fhirModels.Element(x)); }
    if (source["propertyGroup"] !== undefined) { this.propertyGroup = source.propertyGroup.map((x) => new fhirModels.ChargeItemDefinitionPropertyGroup(x)); }
    if (source["publisher"] !== undefined) { this.publisher = source.publisher; }
    if (source["_publisher"] !== undefined) { this._publisher = new fhirModels.Element(source._publisher); }
    if (source["replaces"] !== undefined) { this.replaces = source.replaces.map((x) => (x)); }
    if (source["_replaces"] !== undefined) { this._replaces = source._replaces.map((x) => new fhirModels.Element(x)); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["title"] !== undefined) { this.title = source.title; }
    if (source["_title"] !== undefined) { this._title = new fhirModels.Element(source._title); }
    if (source["url"] !== undefined) { this.url = source.url; }
    if (source["_url"] !== undefined) { this._url = new fhirModels.Element(source._url); }
    if (source["useContext"] !== undefined) { this.useContext = source.useContext.map((x) => new fhirModels.UsageContext(x)); }
    if (source["version"] !== undefined) { this.version = source.version; }
    if (source["_version"] !== undefined) { this._version = new fhirModels.Element(source._version); }
  }
  /**
   * Check if the current ChargeItemDefinition contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    if (this["url"] === undefined) { missingElements.push("url"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ChargeItemDefinition from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IChargeItemDefinition):ChargeItemDefinition {
    var dest:ChargeItemDefinition = new ChargeItemDefinition(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `ChargeItemDefinition is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the ChargeItemDefinition.status field
 */
export enum ChargeItemDefinitionStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}
