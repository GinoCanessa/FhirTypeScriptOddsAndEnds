// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Address

import * as fhir from '../fhir.js'

import { AddressUseValueSet, AddressUseValueSetType, AddressUseValueSetEnum } from '../fhirValueSets/AddressUseValueSet.js'
import { AddressTypeValueSet, AddressTypeValueSetType, AddressTypeValueSetEnum } from '../fhirValueSets/AddressTypeValueSet.js'

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export type IAddress = fhir.IFhirElement & { 
  /**
   * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
   */
  use?: AddressUseValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Address.use
   */
  _use?: fhir.IFhirElement|undefined;
  /**
   * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
   */
  type?: AddressTypeValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Address.type
   */
  _type?: fhir.IFhirElement|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  text?: string|undefined;
  /**
   * Extended properties for primitive element: Address.text
   */
  _text?: fhir.IFhirElement|undefined;
  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  line?: string[]|undefined;
  /**
   * Extended properties for primitive element: Address.line
   */
  _line?: fhir.IFhirElement[]|undefined;
  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  city?: string|undefined;
  /**
   * Extended properties for primitive element: Address.city
   */
  _city?: fhir.IFhirElement|undefined;
  /**
   * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
   */
  district?: string|undefined;
  /**
   * Extended properties for primitive element: Address.district
   */
  _district?: fhir.IFhirElement|undefined;
  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  state?: string|undefined;
  /**
   * Extended properties for primitive element: Address.state
   */
  _state?: fhir.IFhirElement|undefined;
  /**
   * A postal code designating a region defined by the postal service.
   */
  postalCode?: string|undefined;
  /**
   * Extended properties for primitive element: Address.postalCode
   */
  _postalCode?: fhir.IFhirElement|undefined;
  /**
   * ISO 3166 3 letter codes can be used in place of a human readable country name.
   */
  country?: string|undefined;
  /**
   * Extended properties for primitive element: Address.country
   */
  _country?: fhir.IFhirElement|undefined;
  /**
   * Time period when address was/is in use.
   */
  period?: fhir.IPeriod|undefined;
}

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export class Address extends fhir.FhirElement implements IAddress {
  /**
   * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
   */
  public use?: AddressUseValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Address.use
   */
  public _use?: fhir.FhirElement|undefined;
  /**
   * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
   */
  public type?: AddressTypeValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Address.type
   */
  public _type?: fhir.FhirElement|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  public text?: string|undefined;
  /**
   * Extended properties for primitive element: Address.text
   */
  public _text?: fhir.FhirElement|undefined;
  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  public line?: string[]|undefined;
  /**
   * Extended properties for primitive element: Address.line
   */
  public _line?: fhir.FhirElement[]|undefined;
  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  public city?: string|undefined;
  /**
   * Extended properties for primitive element: Address.city
   */
  public _city?: fhir.FhirElement|undefined;
  /**
   * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
   */
  public district?: string|undefined;
  /**
   * Extended properties for primitive element: Address.district
   */
  public _district?: fhir.FhirElement|undefined;
  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  public state?: string|undefined;
  /**
   * Extended properties for primitive element: Address.state
   */
  public _state?: fhir.FhirElement|undefined;
  /**
   * A postal code designating a region defined by the postal service.
   */
  public postalCode?: string|undefined;
  /**
   * Extended properties for primitive element: Address.postalCode
   */
  public _postalCode?: fhir.FhirElement|undefined;
  /**
   * ISO 3166 3 letter codes can be used in place of a human readable country name.
   */
  public country?: string|undefined;
  /**
   * Extended properties for primitive element: Address.country
   */
  public _country?: fhir.FhirElement|undefined;
  /**
   * Time period when address was/is in use.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for Address - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IAddress> = { }) {
    super(source);
    if (source['use']) { this.use = source.use; }
    if (source['_use']) { this._use = new fhir.FhirElement(source._use!); }
    if (source['type']) { this.type = source.type; }
    if (source['_type']) { this._type = new fhir.FhirElement(source._type!); }
    if (source['text']) { this.text = source.text; }
    if (source['_text']) { this._text = new fhir.FhirElement(source._text!); }
    if (source['line']) { this.line = source.line.map((x) => (x)); }
    if (source['_line']) { this._line = source._line.map((x) => new fhir.FhirElement(x)); }
    if (source['city']) { this.city = source.city; }
    if (source['_city']) { this._city = new fhir.FhirElement(source._city!); }
    if (source['district']) { this.district = source.district; }
    if (source['_district']) { this._district = new fhir.FhirElement(source._district!); }
    if (source['state']) { this.state = source.state; }
    if (source['_state']) { this._state = new fhir.FhirElement(source._state!); }
    if (source['postalCode']) { this.postalCode = source.postalCode; }
    if (source['_postalCode']) { this._postalCode = new fhir.FhirElement(source._postalCode!); }
    if (source['country']) { this.country = source.country; }
    if (source['_country']) { this._country = new fhir.FhirElement(source._country!); }
    if (source['period']) { this.period = new fhir.Period(source.period!); }
  }
  /**
   * Required-bound Value Set for use
   */
  public static useRequiredValueSet():AddressUseValueSetType {
    return AddressUseValueSet;
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():AddressTypeValueSetType {
    return AddressTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_use"]) { results.push(...this._use.doModelValidation()); }
    if (this["_type"]) { results.push(...this._type.doModelValidation()); }
    if (this["_text"]) { results.push(...this._text.doModelValidation()); }
    if (this["_line"]) { this._line.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_city"]) { results.push(...this._city.doModelValidation()); }
    if (this["_district"]) { results.push(...this._district.doModelValidation()); }
    if (this["_state"]) { results.push(...this._state.doModelValidation()); }
    if (this["_postalCode"]) { results.push(...this._postalCode.doModelValidation()); }
    if (this["_country"]) { results.push(...this._country.doModelValidation()); }
    if (this["period"]) { results.push(...this.period.doModelValidation()); }
    return results;
  }
}
