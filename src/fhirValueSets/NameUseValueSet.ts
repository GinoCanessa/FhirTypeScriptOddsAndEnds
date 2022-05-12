// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/name-use|4.0.1

import { Coding } from '../fhir.js'

/**
 * The use of a human name.
 */
export const NameUseValueSet = {
  /**
   * anonymous: Anonymous assigned name, alias, or pseudonym (used to protect a person's identity for privacy reasons).
   */
  Anonymous: new Coding({
    display: "Anonymous",
    code: "anonymous",
    system: "http://hl7.org/fhir/name-use",
  }),
  /**
   * maiden: A name used prior to changing name because of marriage. This name use is for use by applications that collect and store names that were used prior to a marriage. Marriage naming customs vary greatly around the world, and are constantly changing. This term is not gender specific. The use of this term does not imply any particular history for a person's name.
   */
  NameChangedForMarriage: new Coding({
    display: "Name changed for Marriage",
    code: "maiden",
    system: "http://hl7.org/fhir/name-use",
  }),
  /**
   * nickname: A name that is used to address the person in an informal manner, but is not part of their formal or usual name.
   */
  Nickname: new Coding({
    display: "Nickname",
    code: "nickname",
    system: "http://hl7.org/fhir/name-use",
  }),
  /**
   * official: The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name".
   */
  Official: new Coding({
    display: "Official",
    code: "official",
    system: "http://hl7.org/fhir/name-use",
  }),
  /**
   * old: This name is no longer in use (or was never correct, but retained for records).
   */
  Old: new Coding({
    display: "Old",
    code: "old",
    system: "http://hl7.org/fhir/name-use",
  }),
  /**
   * temp: A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.
   */
  Temp: new Coding({
    display: "Temp",
    code: "temp",
    system: "http://hl7.org/fhir/name-use",
  }),
  /**
   * usual: Known as/conventional/the one you normally use.
   */
  Usual: new Coding({
    display: "Usual",
    code: "usual",
    system: "http://hl7.org/fhir/name-use",
  }),
} as const;

/**
 * The use of a human name.
 */
export type NameUseValueSetType = typeof NameUseValueSet;

/**
 * The use of a human name.
 */
