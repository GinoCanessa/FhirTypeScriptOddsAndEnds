// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
  // Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A human's name with the ability to identify parts and usage.
 */
export interface IHumanName extends fhir.IFhirElement {
  /**
   * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
   */
  family?: string|undefined;
  _family?: fhir.IFhirElement|undefined;
  /**
   * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
   */
  given?: string[]|undefined;
  _given?: fhir.IFhirElement[]|undefined;
  /**
   * Indicates the period of time when this name was valid for the named person.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
   */
  prefix?: string[]|undefined;
  _prefix?: fhir.IFhirElement[]|undefined;
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
   */
  suffix?: string[]|undefined;
  _suffix?: fhir.IFhirElement[]|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  text?: string|undefined;
  _text?: fhir.IFhirElement|undefined;
  /**
   * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
   */
  use?: HumanNameUseEnum|undefined;
  _use?: fhir.IFhirElement|undefined;
}
/**
 * A human's name with the ability to identify parts and usage.
 */
export class HumanName extends fhir.FhirElement implements fhir.IHumanName {
  /**
   * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
   */
  public family?: string|undefined;
  public _family?: fhir.FhirElement|undefined;
  /**
   * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is not called "first name" since given names do not always come first.
   */
  public given?: string[]|undefined;
  public _given?: fhir.FhirElement[]|undefined;
  /**
   * Indicates the period of time when this name was valid for the named person.
   */
  public period?: fhir.Period|undefined;
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
   */
  public prefix?: string[]|undefined;
  public _prefix?: fhir.FhirElement[]|undefined;
  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
   */
  public suffix?: string[]|undefined;
  public _suffix?: fhir.FhirElement[]|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  public text?: string|undefined;
  public _text?: fhir.FhirElement|undefined;
  /**
   * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
   */
  public use?: HumanNameUseEnum|undefined;
  public _use?: fhir.FhirElement|undefined;
  /**
   * Default constructor for HumanName - initializes required elements to null.
   */
  constructor() {
    super();
  }
  /**
   * Factory function to create a HumanName from an object that MAY NOT contain all required elements.
   */
  static override FactoryCreate(source:Partial<fhir.IHumanName>):HumanName {
    var dest:Partial<HumanName> = super.FactoryCreate(source) as Partial<HumanName>;
    if (source["family"] !== undefined) { dest.family = source.family; }
    if (source["_family"] !== undefined) { dest._family = fhir.FhirElement.FactoryCreate(source._family!); }
    if (source["given"] !== undefined) { dest.given = source.given.map((x) => (x)); }
    if (source["_given"] !== undefined) { dest._given = source._given.map((x:Partial<fhir.IFhirElement>) => fhir.FhirElement.FactoryCreate(x)); }
    if (source["period"] !== undefined) { dest.period = fhir.Period.FactoryCreate(source.period!); }
    if (source["prefix"] !== undefined) { dest.prefix = source.prefix.map((x) => (x)); }
    if (source["_prefix"] !== undefined) { dest._prefix = source._prefix.map((x:Partial<fhir.IFhirElement>) => fhir.FhirElement.FactoryCreate(x)); }
    if (source["suffix"] !== undefined) { dest.suffix = source.suffix.map((x) => (x)); }
    if (source["_suffix"] !== undefined) { dest._suffix = source._suffix.map((x:Partial<fhir.IFhirElement>) => fhir.FhirElement.FactoryCreate(x)); }
    if (source["text"] !== undefined) { dest.text = source.text; }
    if (source["_text"] !== undefined) { dest._text = fhir.FhirElement.FactoryCreate(source._text!); }
    if (source["use"] !== undefined) { dest.use = source.use; }
    if (source["_use"] !== undefined) { dest._use = fhir.FhirElement.FactoryCreate(source._use!); }
    return dest as HumanName;
  }
  /**
   * Check if the current HumanName contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a HumanName from an object that MUST contain all required elements.
   */
  static override FactoryCreateStrict(source:fhir.IHumanName):HumanName {
    var dest:HumanName = this.FactoryCreate(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `HumanName is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the HumanName.use field
 */
export enum HumanNameUseEnum {
  USUAL = "usual",
  OFFICIAL = "official",
  TEMP = "temp",
  NICKNAME = "nickname",
  ANONYMOUS = "anonymous",
  OLD = "old",
  MAIDEN = "maiden",
}
