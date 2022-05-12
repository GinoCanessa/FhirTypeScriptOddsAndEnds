// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/marital-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 */
export const MaritalStatusValueSet = {
  /**
   * A: Marriage contract has been declared null and to not have existed
   */
  Annulled: new Coding({
    display: "Annulled",
    code: "A",
    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
  }),
  /**
   * D: Marriage contract has been declared dissolved and inactive
   */
  Divorced: new Coding({
    display: "Divorced",
    code: "D",
    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
  }),
  /**
   * I: Subject to an Interlocutory Decree.
   */
  Interlocutory: new Coding({
    display: "Interlocutory",
    code: "I",
    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
  }),
  /**
   * L: Legally Separated
   */
  LegallySeparated: new Coding({
    display: "Legally Separated",
    code: "L",
    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
  }),
  /**
   * M: A current marriage contract is active
   */
  Married: new Coding({
    display: "Married",
    code: "M",
    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
  }),
  /**
   * P: More than 1 current spouse
   */
  Polygamous: new Coding({
    display: "Polygamous",
    code: "P",
    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
  }),
  /**
   * S: No marriage contract has ever been entered
   */
  NeverMarried: new Coding({
    display: "Never Married",
    code: "S",
    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
  }),
  /**
   * T: Person declares that a domestic partner relationship exists.
   */
  DomesticPartner: new Coding({
    display: "Domestic partner",
    code: "T",
    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
  }),
  /**
   * U: Currently not in a marriage contract.
   */
  Unmarried: new Coding({
    display: "unmarried",
    code: "U",
    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
  }),
  /**
   * UNK: Description:A proper value is applicable, but not known.
   * 
   *                         
   *                            Usage Notes: This means the actual value is not known.  If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used.  No properties should be included for a datatype with this property unless:
   * 
   *                         
   *                            Those properties themselves directly translate to a semantic of "unknown".  (E.g. a local code sent as a translation that conveys 'unknown')
   *                            Those properties further qualify the nature of what is unknown.  (E.g. specifying a use code of "H" and a URL prefix of "tel:" to convey that it is the home phone number that is unknown.)
   */
  Unknown: new Coding({
    display: "unknown",
    code: "UNK",
    system: "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
  }),
  /**
   * W: The spouse has died
   */
  Widowed: new Coding({
    display: "Widowed",
    code: "W",
    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
  }),
} as const;

/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 */
export type MaritalStatusValueSetType = typeof MaritalStatusValueSet;

/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 */
