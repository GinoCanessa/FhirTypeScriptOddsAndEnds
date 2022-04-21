// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/assert-operator-codes|4.0.1

import { Coding } from '../fhir.js'

/**
 * The type of operator to use for assertion.
 */
export const AssertOperatorCodesValueSet = {
  /**
   * contains: Compare value string contains a known value.
   */
  Contains: new Coding({
    display: "contains",
    code: "contains",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
  /**
   * empty: Compare value is empty.
   */
  Empty: new Coding({
    display: "empty",
    code: "empty",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
  /**
   * equals: Default value. Equals comparison.
   */
  Equals: new Coding({
    display: "equals",
    code: "equals",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
  /**
   * eval: Evaluate the FHIRPath expression as a boolean condition.
   */
  Evaluate: new Coding({
    display: "evaluate",
    code: "eval",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
  /**
   * greaterThan: Compare value to be greater than a known value.
   */
  GreaterThan: new Coding({
    display: "greaterThan",
    code: "greaterThan",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
  /**
   * in: Compare value within a known set of values.
   */
  In: new Coding({
    display: "in",
    code: "in",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
  /**
   * lessThan: Compare value to be less than a known value.
   */
  LessThan: new Coding({
    display: "lessThan",
    code: "lessThan",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
  /**
   * notContains: Compare value string does not contain a known value.
   */
  NotContains: new Coding({
    display: "notContains",
    code: "notContains",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
  /**
   * notEmpty: Compare value is not empty.
   */
  NotEmpty: new Coding({
    display: "notEmpty",
    code: "notEmpty",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
  /**
   * notEquals: Not equals comparison.
   */
  NotEquals: new Coding({
    display: "notEquals",
    code: "notEquals",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
  /**
   * notIn: Compare value not within a known set of values.
   */
  NotIn: new Coding({
    display: "notIn",
    code: "notIn",
    system: "http://hl7.org/fhir/assert-operator-codes",
  }),
} as const;

/**
 * The type of operator to use for assertion.
 */
export type AssertOperatorCodesValueSetType = typeof AssertOperatorCodesValueSet;

/**
 * The type of operator to use for assertion.
 */
export enum AssertOperatorCodesValueSetEnum {
  /**
   * contains: Compare value string contains a known value.
   */
  Contains = "contains",
  /**
   * empty: Compare value is empty.
   */
  Empty = "empty",
  /**
   * equals: Default value. Equals comparison.
   */
  Equals = "equals",
  /**
   * eval: Evaluate the FHIRPath expression as a boolean condition.
   */
  Evaluate = "eval",
  /**
   * greaterThan: Compare value to be greater than a known value.
   */
  GreaterThan = "greaterThan",
  /**
   * in: Compare value within a known set of values.
   */
  In = "in",
  /**
   * lessThan: Compare value to be less than a known value.
   */
  LessThan = "lessThan",
  /**
   * notContains: Compare value string does not contain a known value.
   */
  NotContains = "notContains",
  /**
   * notEmpty: Compare value is not empty.
   */
  NotEmpty = "notEmpty",
  /**
   * notEquals: Not equals comparison.
   */
  NotEquals = "notEquals",
  /**
   * notIn: Compare value not within a known set of values.
   */
  NotIn = "notIn",
}
