// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/series-performer-function|4.0.1

import { Coding } from '../fhir.js'

/**
 * Performer function of an agent in an imaging study series
 */
export const SeriesPerformerFunctionValueSet = {
  /**
   * CON: An advisor participating in the service by performing evaluations and making recommendations.
   */
  Consultant: new Coding({
    display: "consultant",
    code: "CON",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
  /**
   * PRF: Definition: A person, non-person living subject, organization or device that who actually and principally carries out the action. Device should only be assigned as a performer in circumstances where the device is performing independent of human intervention.  Need not be the principal responsible actor.
   * 
   *                         
   *                            Exampe: A surgery resident operating under supervision of attending surgeon, a search and rescue dog locating survivors, an electronic laboratory analyzer or the laboratory discipline requested to perform a laboratory test. The performer may also be the patient in self-care, e.g. fingerstick blood sugar. The traditional order filler is a performer. This information should accompany every service event.
   * 
   *                         
   *                            Note: that existing HL7 designs assign an organization as the playing entity of the Role that is the performer.  These designs should be revised in subsequent releases to make this the scooping entity for the role involved.
   */
  Performer: new Coding({
    display: "performer",
    code: "PRF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
  /**
   * REF: A person having referred the subject of the service to the performer (referring physician).  Typically, a referring physician will receive a report.
   */
  Referrer: new Coding({
    display: "referrer",
    code: "REF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
  /**
   * SPRF: A person assisting in an act through his substantial presence and involvement   This includes: assistants, technicians, associates, or whatever the job titles may be.
   */
  SecondaryPerformer: new Coding({
    display: "secondary performer",
    code: "SPRF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
  /**
   * VRF: A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.
   */
  Verifier: new Coding({
    display: "verifier",
    code: "VRF",
    system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
  }),
} as const;

/**
 * Performer function of an agent in an imaging study series
 */
export type SeriesPerformerFunctionValueSetType = typeof SeriesPerformerFunctionValueSet;

/**
 * Performer function of an agent in an imaging study series
 */
