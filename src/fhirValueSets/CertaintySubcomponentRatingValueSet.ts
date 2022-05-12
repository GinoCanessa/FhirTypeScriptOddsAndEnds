// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/certainty-subcomponent-rating|4.0.1

import { Coding } from '../fhir.js'

/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export const CertaintySubcomponentRatingValueSet = {
  /**
   * absent: possible reason for increasing quality rating was checked and found to be absent.
   */
  Absent: new Coding({
    display: "absent",
    code: "absent",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
  /**
   * critical-concern: critical concern.
   */
  CriticalConcern: new Coding({
    display: "critical concern",
    code: "critical-concern",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
  /**
   * downcode1: reduce quality rating by 1.
   */
  ReduceRating1: new Coding({
    display: "reduce rating: -1",
    code: "downcode1",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
  /**
   * downcode2: reduce quality rating by 2.
   */
  ReduceRating2: new Coding({
    display: "reduce rating: -2",
    code: "downcode2",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
  /**
   * downcode3: reduce quality rating by 3.
   */
  ReduceRating3: new Coding({
    display: "reduce rating: -3",
    code: "downcode3",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
  /**
   * no-change: no change to quality rating.
   */
  NoChangeToRating: new Coding({
    display: "no change to rating",
    code: "no-change",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
  /**
   * no-concern: no serious concern.
   */
  NoSeriousConcern: new Coding({
    display: "no serious concern",
    code: "no-concern",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
  /**
   * present: possible reason for increasing quality rating was checked and found to bepresent.
   */
  Present: new Coding({
    display: "present",
    code: "present",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
  /**
   * serious-concern: serious concern.
   */
  SeriousConcern: new Coding({
    display: "serious concern",
    code: "serious-concern",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
  /**
   * upcode1: increase quality rating by 1.
   */
  IncreaseRatingPlus1: new Coding({
    display: "increase rating: +1",
    code: "upcode1",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
  /**
   * upcode2: increase quality rating by 2.
   */
  IncreaseRatingPlus2: new Coding({
    display: "increase rating: +2",
    code: "upcode2",
    system: "http://terminology.hl7.org/CodeSystem/certainty-subcomponent-rating",
  }),
} as const;

/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
export type CertaintySubcomponentRatingValueSetType = typeof CertaintySubcomponentRatingValueSet;

/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 */
