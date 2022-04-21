// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/namingsystem-identifier-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export const NamingsystemIdentifierTypeValueSet = {
  /**
   * oid: An ISO object identifier; e.g. 1.2.3.4.5.
   */
  OID: new Coding({
    display: "OID",
    code: "oid",
    system: "http://hl7.org/fhir/namingsystem-identifier-type",
  }),
  /**
   * other: Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.
   */
  Other: new Coding({
    display: "Other",
    code: "other",
    system: "http://hl7.org/fhir/namingsystem-identifier-type",
  }),
  /**
   * uri: A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.
   */
  URI: new Coding({
    display: "URI",
    code: "uri",
    system: "http://hl7.org/fhir/namingsystem-identifier-type",
  }),
  /**
   * uuid: A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.
   */
  UUID: new Coding({
    display: "UUID",
    code: "uuid",
    system: "http://hl7.org/fhir/namingsystem-identifier-type",
  }),
} as const;

/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export type NamingsystemIdentifierTypeValueSetType = typeof NamingsystemIdentifierTypeValueSet;

/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export enum NamingsystemIdentifierTypeValueSetEnum {
  /**
   * oid: An ISO object identifier; e.g. 1.2.3.4.5.
   */
  OID = "oid",
  /**
   * other: Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.
   */
  Other = "other",
  /**
   * uri: A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.
   */
  URI = "uri",
  /**
   * uuid: A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.
   */
  UUID = "uuid",
}
