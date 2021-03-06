// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Address

import * as fhir from '../fhir.js';

import { AddressUseValueSet, AddressUseValueSetType,} from '../fhirValueSets/AddressUseValueSet.js';
import { AddressUseValueSetEnum } from '../valueSetEnums.js';
import { AddressTypeValueSet, AddressTypeValueSetType,} from '../fhirValueSets/AddressTypeValueSet.js';
import { AddressTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the Address type.
 */
export interface AddressArgs extends fhir.FhirElementArgs {
  /**
   * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
   */
  use?: AddressUseValueSetEnum|undefined;
  /**
   * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
   */
  type?: AddressTypeValueSetEnum|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  text?: fhir.FhirString|string|undefined;
  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  line?: fhir.FhirString[]|string[]|undefined;
  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  city?: fhir.FhirString|string|undefined;
  /**
   * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
   */
  district?: fhir.FhirString|string|undefined;
  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  state?: fhir.FhirString|string|undefined;
  /**
   * A postal code designating a region defined by the postal service.
   */
  postalCode?: fhir.FhirString|string|undefined;
  /**
   * ISO 3166 3 letter codes can be used in place of a human readable country name.
   */
  country?: fhir.FhirString|string|undefined;
  /**
   * Time period when address was/is in use.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 */
export class Address extends fhir.FhirElement {
  readonly __dataType:string = 'Address';
  /**
   * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
   */
  public use?: AddressUseValueSetEnum|undefined;
  /**
   * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a location that can be visited as well as being a valid delivery destination, and Postal addresses are often used as proxies for physical locations (also see the [Location](location.html#) resource).
   */
  public type?: AddressTypeValueSetEnum|undefined;
  /**
   * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  public text?: fhir.FhirString|undefined;
  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  public line?: fhir.FhirString[]|undefined = [];
  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  public city?: fhir.FhirString|undefined;
  /**
   * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
   */
  public district?: fhir.FhirString|undefined;
  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  public state?: fhir.FhirString|undefined;
  /**
   * A postal code designating a region defined by the postal service.
   */
  public postalCode?: fhir.FhirString|undefined;
  /**
   * ISO 3166 3 letter codes can be used in place of a human readable country name.
   */
  public country?: fhir.FhirString|undefined;
  /**
   * Time period when address was/is in use.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for Address - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AddressArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['use']) { this.use = source.use; }
    if (source['type']) { this.type = source.type; }
    if (source['text']) { this.text = new fhir.FhirString({value: source.text}); }
    if (source['line']) { this.line = source.line.map((x) => new fhir.FhirString({value: x})); }
    if (source['city']) { this.city = new fhir.FhirString({value: source.city}); }
    if (source['district']) { this.district = new fhir.FhirString({value: source.district}); }
    if (source['state']) { this.state = new fhir.FhirString({value: source.state}); }
    if (source['postalCode']) { this.postalCode = new fhir.FhirString({value: source.postalCode}); }
    if (source['country']) { this.country = new fhir.FhirString({value: source.country}); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
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
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["text"]) { outcome.issue!.push(...this.text.doModelValidation().issue!); }
    if (this["line"]) { this.line.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["city"]) { outcome.issue!.push(...this.city.doModelValidation().issue!); }
    if (this["district"]) { outcome.issue!.push(...this.district.doModelValidation().issue!); }
    if (this["state"]) { outcome.issue!.push(...this.state.doModelValidation().issue!); }
    if (this["postalCode"]) { outcome.issue!.push(...this.postalCode.doModelValidation().issue!); }
    if (this["country"]) { outcome.issue!.push(...this.country.doModelValidation().issue!); }
    if (this["period"]) { outcome.issue!.push(...this.period.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
