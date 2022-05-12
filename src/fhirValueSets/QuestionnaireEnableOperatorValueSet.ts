// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/questionnaire-enable-operator|4.0.1

import { Coding } from '../fhir.js'

/**
 * The criteria by which a question is enabled.
 */
export const QuestionnaireEnableOperatorValueSet = {
  /**
   * !=: True if whether at least no answer has a value that is equal to the enableWhen answer.
   */
  NotEquals: new Coding({
    display: "Not Equals",
    code: "!=",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  }),
  /**
   * &lt;: True if whether at least no answer has a value that is less than the enableWhen answer.
   */
  LessThan: new Coding({
    display: "Less Than",
    code: "<",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  }),
  /**
   * &lt;=: True if whether at least no answer has a value that is less or equal to the enableWhen answer.
   */
  LessOrEquals: new Coding({
    display: "Less or Equals",
    code: "<=",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  }),
  /**
   * =: True if whether at least one answer has a value that is equal to the enableWhen answer.
   */
  Equals: new Coding({
    display: "Equals",
    code: "=",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  }),
  /**
   * &gt;: True if whether at least no answer has a value that is greater than the enableWhen answer.
   */
  GreaterThan: new Coding({
    display: "Greater Than",
    code: ">",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  }),
  /**
   * &gt;=: True if whether at least no answer has a value that is greater or equal to the enableWhen answer.
   */
  GreaterOrEquals: new Coding({
    display: "Greater or Equals",
    code: ">=",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  }),
  /**
   * exists: True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).
   */
  Exists: new Coding({
    display: "Exists",
    code: "exists",
    system: "http://hl7.org/fhir/questionnaire-enable-operator",
  }),
} as const;

/**
 * The criteria by which a question is enabled.
 */
export type QuestionnaireEnableOperatorValueSetType = typeof QuestionnaireEnableOperatorValueSet;

/**
 * The criteria by which a question is enabled.
 */
