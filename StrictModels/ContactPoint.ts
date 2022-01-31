// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
export class ContactPoint extends fhirModels.Element implements fhirInterfaces.IContactPoint {
  /**
   * Time period when the contact point was/is in use.
   */
  period?: fhirModels.Period|undefined;
  /**
   * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
   */
  rank?: number|undefined;
  _rank?: fhirModels.Element|undefined;
  /**
   * Telecommunications form for contact point - what communications system is required to make use of the contact.
   */
  system?: ContactPointSystemEnum|undefined;
  _system?: fhirModels.Element|undefined;
  /**
   * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
   */
  use?: ContactPointUseEnum|undefined;
  _use?: fhirModels.Element|undefined;
  /**
   * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
   */
  value?: string|undefined;
  _value?: fhirModels.Element|undefined;
  /**
   * Default constructor for ContactPoint from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IContactPoint) {
    super(source);
    if (source["period"] !== undefined) {
      this.period = new fhirModels.Period(source.period);
    }
    if (source["rank"] !== undefined) {
      this.rank = source.rank;
    }
    if (source["_rank"] !== undefined) {
      this._rank = new fhirModels.Element(source._rank);
    }
    if (source["system"] !== undefined) {
      this.system = source.system;
    }
    if (source["_system"] !== undefined) {
      this._system = new fhirModels.Element(source._system);
    }
    if (source["use"] !== undefined) {
      this.use = source.use;
    }
    if (source["_use"] !== undefined) {
      this._use = new fhirModels.Element(source._use);
    }
    if (source["value"] !== undefined) {
      this.value = source.value;
    }
    if (source["_value"] !== undefined) {
      this._value = new fhirModels.Element(source._value);
    }
  }
}
/**
 * Code Values for the ContactPoint.system field
 */
export enum ContactPointSystemEnum {
  PHONE = "phone",
  FAX = "fax",
  EMAIL = "email",
  PAGER = "pager",
  URL = "url",
  SMS = "sms",
  OTHER = "other",
}
/**
 * Code Values for the ContactPoint.use field
 */
export enum ContactPointUseEnum {
  HOME = "home",
  WORK = "work",
  TEMP = "temp",
  OLD = "old",
  MOBILE = "mobile",
}
