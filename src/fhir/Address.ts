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
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export interface IAddress extends fhir.IFhirElement {
  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  city?: string|undefined;
  _city?: fhir.IFhirElement|undefined;
  /**
   * ISO 3166 3 letter codes can be used in place of a human readable country name.
   */
  country?: string|undefined;
  _country?: fhir.IFhirElement|undefined;
  /**
   * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
   */
  district?: string|undefined;
  _district?: fhir.IFhirElement|undefined;
  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  line?: string[]|undefined;
  _line?: fhir.IFhirElement[]|undefined;
  /**
   * Time period when address was/is in use.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * A postal code designating a region defined by the postal service.
   */
  postalCode?: string|undefined;
  _postalCode?: fhir.IFhirElement|undefined;
  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  state?: string|undefined;
  _state?: fhir.IFhirElement|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  text?: string|undefined;
  _text?: fhir.IFhirElement|undefined;
  /**
   * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
   */
  type?: AddressTypeEnum|undefined;
  _type?: fhir.IFhirElement|undefined;
  /**
   * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
   */
  use?: AddressUseEnum|undefined;
  _use?: fhir.IFhirElement|undefined;
}
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export class Address extends fhir.FhirElement implements fhir.IAddress {
  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  public city?: string|undefined;
  public _city?: fhir.FhirElement|undefined;
  /**
   * ISO 3166 3 letter codes can be used in place of a human readable country name.
   */
  public country?: string|undefined;
  public _country?: fhir.FhirElement|undefined;
  /**
   * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
   */
  public district?: string|undefined;
  public _district?: fhir.FhirElement|undefined;
  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  public line?: string[]|undefined;
  public _line?: fhir.FhirElement[]|undefined;
  /**
   * Time period when address was/is in use.
   */
  public period?: fhir.Period|undefined;
  /**
   * A postal code designating a region defined by the postal service.
   */
  public postalCode?: string|undefined;
  public _postalCode?: fhir.FhirElement|undefined;
  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  public state?: string|undefined;
  public _state?: fhir.FhirElement|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  public text?: string|undefined;
  public _text?: fhir.FhirElement|undefined;
  /**
   * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
   */
  public type?: AddressTypeEnum|undefined;
  public _type?: fhir.FhirElement|undefined;
  /**
   * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
   */
  public use?: AddressUseEnum|undefined;
  public _use?: fhir.FhirElement|undefined;
  /**
   * Default constructor for Address - initializes required elements to null.
   */
  constructor() {
    super();
  }
  /**
   * Factory function to create a Address from an object that MAY NOT contain all required elements.
   */
  static override FactoryCreate(source:Partial<fhir.IAddress>):Address {
    var dest:Partial<Address> = super.FactoryCreate(source) as Partial<Address>;
    if (source["city"] !== undefined) { dest.city = source.city; }
    if (source["_city"] !== undefined) { dest._city = fhir.FhirElement.FactoryCreate(source._city!); }
    if (source["country"] !== undefined) { dest.country = source.country; }
    if (source["_country"] !== undefined) { dest._country = fhir.FhirElement.FactoryCreate(source._country!); }
    if (source["district"] !== undefined) { dest.district = source.district; }
    if (source["_district"] !== undefined) { dest._district = fhir.FhirElement.FactoryCreate(source._district!); }
    if (source["line"] !== undefined) { dest.line = source.line.map((x) => (x)); }
    if (source["_line"] !== undefined) { dest._line = source._line.map((x:Partial<fhir.IFhirElement>) => fhir.FhirElement.FactoryCreate(x)); }
    if (source["period"] !== undefined) { dest.period = fhir.Period.FactoryCreate(source.period!); }
    if (source["postalCode"] !== undefined) { dest.postalCode = source.postalCode; }
    if (source["_postalCode"] !== undefined) { dest._postalCode = fhir.FhirElement.FactoryCreate(source._postalCode!); }
    if (source["state"] !== undefined) { dest.state = source.state; }
    if (source["_state"] !== undefined) { dest._state = fhir.FhirElement.FactoryCreate(source._state!); }
    if (source["text"] !== undefined) { dest.text = source.text; }
    if (source["_text"] !== undefined) { dest._text = fhir.FhirElement.FactoryCreate(source._text!); }
    if (source["type"] !== undefined) { dest.type = source.type; }
    if (source["_type"] !== undefined) { dest._type = fhir.FhirElement.FactoryCreate(source._type!); }
    if (source["use"] !== undefined) { dest.use = source.use; }
    if (source["_use"] !== undefined) { dest._use = fhir.FhirElement.FactoryCreate(source._use!); }
    return dest as Address;
  }
  /**
   * Check if the current Address contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Address from an object that MUST contain all required elements.
   */
  static override FactoryCreateStrict(source:fhir.IAddress):Address {
    var dest:Address = this.FactoryCreate(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Address is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the Address.type field
 */
export enum AddressTypeEnum {
  POSTAL = "postal",
  PHYSICAL = "physical",
  BOTH = "both",
}
/**
 * Code Values for the Address.use field
 */
export enum AddressUseEnum {
  HOME = "home",
  WORK = "work",
  TEMP = "temp",
  OLD = "old",
  BILLING = "billing",
}