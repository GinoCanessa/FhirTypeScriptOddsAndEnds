// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/concept-property-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * The type of a property value.
 */
export const ConceptPropertyTypeValueSet = {
  /**
   * boolean: The property value is a boolean true | false.
   */
  VALBoolean: new Coding({
    display: "boolean",
    code: "boolean",
    system: "http://hl7.org/fhir/concept-property-type",
  }),
  /**
   * code: The property value is a code that identifies a concept defined in the code system.
   */
  CodeInternalReference: new Coding({
    display: "code (internal reference)",
    code: "code",
    system: "http://hl7.org/fhir/concept-property-type",
  }),
  /**
   * Coding: The property  value is a code defined in an external code system. This may be used for translations, but is not the intent.
   */
  CodingExternalReference: new Coding({
    display: "Coding (external reference)",
    code: "Coding",
    system: "http://hl7.org/fhir/concept-property-type",
  }),
  /**
   * dateTime: The property is a date or a date + time.
   */
  DateTime: new Coding({
    display: "dateTime",
    code: "dateTime",
    system: "http://hl7.org/fhir/concept-property-type",
  }),
  /**
   * decimal: The property value is a decimal number.
   */
  Decimal: new Coding({
    display: "decimal",
    code: "decimal",
    system: "http://hl7.org/fhir/concept-property-type",
  }),
  /**
   * integer: The property value is a string (often used to assign ranking values to concepts for supporting score assessments).
   */
  Integer: new Coding({
    display: "integer",
    code: "integer",
    system: "http://hl7.org/fhir/concept-property-type",
  }),
  /**
   * string: The property value is a string.
   */
  VALString: new Coding({
    display: "string",
    code: "string",
    system: "http://hl7.org/fhir/concept-property-type",
  }),
} as const;

/**
 * The type of a property value.
 */
export type ConceptPropertyTypeValueSetType = typeof ConceptPropertyTypeValueSet;

/**
 * The type of a property value.
 */
