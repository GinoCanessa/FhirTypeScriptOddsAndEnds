// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-subject-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * Indicates the progression of a study subject through a study.
 */
export const ResearchSubjectStatusValueSet = {
  /**
   * candidate: An identified person that can be considered for inclusion in a study.
   */
  Candidate: new Coding({
    display: "Candidate",
    code: "candidate",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * eligible: A person that has met the eligibility criteria for inclusion in a study.
   */
  Eligible: new Coding({
    display: "Eligible",
    code: "eligible",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * follow-up: A person is no longer receiving study intervention and/or being evaluated with tests and procedures according to the protocol, but they are being monitored on a protocol-prescribed schedule.
   */
  FollowUp: new Coding({
    display: "Follow-up",
    code: "follow-up",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * ineligible: A person who did not meet one or more criteria required for participation in a study is considered to have failed screening or
   * is ineligible for the study.
   */
  Ineligible: new Coding({
    display: "Ineligible",
    code: "ineligible",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * not-registered: A person for whom registration was not completed.
   */
  NotRegistered: new Coding({
    display: "Not Registered",
    code: "not-registered",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * off-study: A person that has ended their participation on a study either because their treatment/observation is complete or through not
   * responding, withdrawal, non-compliance and/or adverse event.
   */
  OffStudy: new Coding({
    display: "Off-study",
    code: "off-study",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * on-study: A person that is enrolled or registered on a study.
   */
  OnStudy: new Coding({
    display: "On-study",
    code: "on-study",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * on-study-intervention: The person is receiving the treatment or participating in an activity (e.g. yoga, diet, etc.) that the study is evaluating.
   */
  OnStudyIntervention: new Coding({
    display: "On-study-intervention",
    code: "on-study-intervention",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * on-study-observation: The subject is being evaluated via tests and assessments according to the study calendar, but is not receiving any intervention. Note that this state is study-dependent and might not exist in all studies.  A synonym for this is "short-term follow-up".
   */
  OnStudyObservation: new Coding({
    display: "On-study-observation",
    code: "on-study-observation",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * pending-on-study: A person is pre-registered for a study.
   */
  PendingOnStudy: new Coding({
    display: "Pending on-study",
    code: "pending-on-study",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * potential-candidate: A person that is potentially eligible for participation in the study.
   */
  PotentialCandidate: new Coding({
    display: "Potential Candidate",
    code: "potential-candidate",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * screening: A person who is being evaluated for eligibility for a study.
   */
  Screening: new Coding({
    display: "Screening",
    code: "screening",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
  /**
   * withdrawn: The person has withdrawn their participation in the study before registration.
   */
  Withdrawn: new Coding({
    display: "Withdrawn",
    code: "withdrawn",
    system: "http://hl7.org/fhir/research-subject-status",
  }),
} as const;

/**
 * Indicates the progression of a study subject through a study.
 */
export type ResearchSubjectStatusValueSetType = typeof ResearchSubjectStatusValueSet;

/**
 * Indicates the progression of a study subject through a study.
 */
export enum ResearchSubjectStatusValueSetEnum {
  /**
   * candidate: An identified person that can be considered for inclusion in a study.
   */
  Candidate = "candidate",
  /**
   * eligible: A person that has met the eligibility criteria for inclusion in a study.
   */
  Eligible = "eligible",
  /**
   * follow-up: A person is no longer receiving study intervention and/or being evaluated with tests and procedures according to the protocol, but they are being monitored on a protocol-prescribed schedule.
   */
  FollowUp = "follow-up",
  /**
   * ineligible: A person who did not meet one or more criteria required for participation in a study is considered to have failed screening or
   * is ineligible for the study.
   */
  Ineligible = "ineligible",
  /**
   * not-registered: A person for whom registration was not completed.
   */
  NotRegistered = "not-registered",
  /**
   * off-study: A person that has ended their participation on a study either because their treatment/observation is complete or through not
   * responding, withdrawal, non-compliance and/or adverse event.
   */
  OffStudy = "off-study",
  /**
   * on-study: A person that is enrolled or registered on a study.
   */
  OnStudy = "on-study",
  /**
   * on-study-intervention: The person is receiving the treatment or participating in an activity (e.g. yoga, diet, etc.) that the study is evaluating.
   */
  OnStudyIntervention = "on-study-intervention",
  /**
   * on-study-observation: The subject is being evaluated via tests and assessments according to the study calendar, but is not receiving any intervention. Note that this state is study-dependent and might not exist in all studies.  A synonym for this is "short-term follow-up".
   */
  OnStudyObservation = "on-study-observation",
  /**
   * pending-on-study: A person is pre-registered for a study.
   */
  PendingOnStudy = "pending-on-study",
  /**
   * potential-candidate: A person that is potentially eligible for participation in the study.
   */
  PotentialCandidate = "potential-candidate",
  /**
   * screening: A person who is being evaluated for eligibility for a study.
   */
  Screening = "screening",
  /**
   * withdrawn: The person has withdrawn their participation in the study before registration.
   */
  Withdrawn = "withdrawn",
}
