// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adverse-event-causality-assess|4.0.1

import { Coding } from '../fhir.js'

/**
 * Codes for the assessment of whether the entity caused the event.
 */
export const AdverseEventCausalityAssessValueSet = {
  /**
   * Certain: i) Event or laboratory test abnormality, with plausible time relationship to drug intake; ii) Cannot be explained by disease or other drugs; iii) Response to withdrawal plausible (pharmacologically, pathologically); iv) Event definitive pharmacologically or phenomenologically (i.e. an objective and specific medical disorder or a recognized pharmacological phenomenon); or v) Re-challenge satisfactory, if necessary.
   */
  Certain: new Coding({
    display: "Certain",
    code: "Certain",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess",
  }),
  /**
   * Conditional-Classified: i) Event or laboratory test abnormality; ii) More data for proper assessment needed; or iii) Additional data under examination.
   */
  ConditionalClassified: new Coding({
    display: "Conditional/Classified",
    code: "Conditional-Classified",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess",
  }),
  /**
   * Possible: i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Could also be explained by disease or other drugs; or iii) Information on drug withdrawal may be lacking or unclear.
   */
  Possible: new Coding({
    display: "Possible",
    code: "Possible",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess",
  }),
  /**
   * Probably-Likely: i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Unlikely to be attributed to disease or other drugs; iii) Response to withdrawal clinically reasonable; or iv) Re-challenge not required.
   */
  ProbablyLikely: new Coding({
    display: "Probably/Likely",
    code: "Probably-Likely",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess",
  }),
  /**
   * Unassessable-Unclassifiable: i) Report suggesting an adverse reaction; ii) Cannot be judged because information is insufficient or contradictory; or iii) Data cannot be supplemented or verified.
   */
  UnassessableUnclassifiable: new Coding({
    display: "Unassessable/Unclassifiable",
    code: "Unassessable-Unclassifiable",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess",
  }),
  /**
   * Unlikely: i) Event or laboratory test abnormality, with a time to drug intake that makes a relationship improbable (but not impossible); or ii) Disease or other drugs provide plausible explanations.
   */
  Unlikely: new Coding({
    display: "Unlikely",
    code: "Unlikely",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess",
  }),
} as const;

/**
 * Codes for the assessment of whether the entity caused the event.
 */
export type AdverseEventCausalityAssessValueSetType = typeof AdverseEventCausalityAssessValueSet;

/**
 * Codes for the assessment of whether the entity caused the event.
 */
export enum AdverseEventCausalityAssessValueSetEnum {
  /**
   * Certain: i) Event or laboratory test abnormality, with plausible time relationship to drug intake; ii) Cannot be explained by disease or other drugs; iii) Response to withdrawal plausible (pharmacologically, pathologically); iv) Event definitive pharmacologically or phenomenologically (i.e. an objective and specific medical disorder or a recognized pharmacological phenomenon); or v) Re-challenge satisfactory, if necessary.
   */
  Certain = "Certain",
  /**
   * Conditional-Classified: i) Event or laboratory test abnormality; ii) More data for proper assessment needed; or iii) Additional data under examination.
   */
  ConditionalClassified = "Conditional-Classified",
  /**
   * Possible: i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Could also be explained by disease or other drugs; or iii) Information on drug withdrawal may be lacking or unclear.
   */
  Possible = "Possible",
  /**
   * Probably-Likely: i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Unlikely to be attributed to disease or other drugs; iii) Response to withdrawal clinically reasonable; or iv) Re-challenge not required.
   */
  ProbablyLikely = "Probably-Likely",
  /**
   * Unassessable-Unclassifiable: i) Report suggesting an adverse reaction; ii) Cannot be judged because information is insufficient or contradictory; or iii) Data cannot be supplemented or verified.
   */
  UnassessableUnclassifiable = "Unassessable-Unclassifiable",
  /**
   * Unlikely: i) Event or laboratory test abnormality, with a time to drug intake that makes a relationship improbable (but not impossible); or ii) Disease or other drugs provide plausible explanations.
   */
  Unlikely = "Unlikely",
}
