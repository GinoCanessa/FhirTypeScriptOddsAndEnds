// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/assert-response-code-types|4.0.1

import { Coding } from '../fhir.js'

/**
 * The type of response code to use for assertion.
 */
export const AssertResponseCodeTypesValueSet = {
  /**
   * bad: Response code is 400.
   */
  Bad: new Coding({
    display: "bad",
    code: "bad",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * conflict: Response code is 409.
   */
  Conflict: new Coding({
    display: "conflict",
    code: "conflict",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * created: Response code is 201.
   */
  Created: new Coding({
    display: "created",
    code: "created",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * forbidden: Response code is 403.
   */
  Forbidden: new Coding({
    display: "forbidden",
    code: "forbidden",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * gone: Response code is 410.
   */
  Gone: new Coding({
    display: "gone",
    code: "gone",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * methodNotAllowed: Response code is 405.
   */
  MethodNotAllowed: new Coding({
    display: "methodNotAllowed",
    code: "methodNotAllowed",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * noContent: Response code is 204.
   */
  NoContent: new Coding({
    display: "noContent",
    code: "noContent",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * notFound: Response code is 404.
   */
  NotFound: new Coding({
    display: "notFound",
    code: "notFound",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * notModified: Response code is 304.
   */
  NotModified: new Coding({
    display: "notModified",
    code: "notModified",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * okay: Response code is 200.
   */
  Okay: new Coding({
    display: "okay",
    code: "okay",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * preconditionFailed: Response code is 412.
   */
  PreconditionFailed: new Coding({
    display: "preconditionFailed",
    code: "preconditionFailed",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
  /**
   * unprocessable: Response code is 422.
   */
  Unprocessable: new Coding({
    display: "unprocessable",
    code: "unprocessable",
    system: "http://hl7.org/fhir/assert-response-code-types",
  }),
} as const;

/**
 * The type of response code to use for assertion.
 */
export type AssertResponseCodeTypesValueSetType = typeof AssertResponseCodeTypesValueSet;

/**
 * The type of response code to use for assertion.
 */
