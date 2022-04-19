// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Indicates the progression of a study subject through a study.
 */
export const ResearchSubjectStatusValueSet = {
  /**
   * An identified person that can be considered for inclusion in a study.
   */
  research_subject_status_Candidate: Coding.FromStrict({
    code: "candidate",
    display: "Candidate",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * A person that has met the eligibility criteria for inclusion in a study.
   */
  research_subject_status_Eligible: Coding.FromStrict({
    code: "eligible",
    display: "Eligible",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * A person is no longer receiving study intervention and/or being evaluated with tests and procedures according to the protocol, but they are being monitored on a protocol-prescribed schedule.
   */
  research_subject_status_FollowUp: Coding.FromStrict({
    code: "follow-up",
    display: "Follow-up",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * A person who did not meet one or more criteria required for participation in a study is considered to have failed screening or
   * is ineligible for the study.
   */
  research_subject_status_Ineligible: Coding.FromStrict({
    code: "ineligible",
    display: "Ineligible",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * A person for whom registration was not completed.
   */
  research_subject_status_NotRegistered: Coding.FromStrict({
    code: "not-registered",
    display: "Not Registered",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * A person that has ended their participation on a study either because their treatment/observation is complete or through not
   * responding, withdrawal, non-compliance and/or adverse event.
   */
  research_subject_status_OffStudy: Coding.FromStrict({
    code: "off-study",
    display: "Off-study",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * A person that is enrolled or registered on a study.
   */
  research_subject_status_OnStudy: Coding.FromStrict({
    code: "on-study",
    display: "On-study",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * The person is receiving the treatment or participating in an activity (e.g. yoga, diet, etc.) that the study is evaluating.
   */
  research_subject_status_OnStudyIntervention: Coding.FromStrict({
    code: "on-study-intervention",
    display: "On-study-intervention",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * The subject is being evaluated via tests and assessments according to the study calendar, but is not receiving any intervention. Note that this state is study-dependent and might not exist in all studies.  A synonym for this is "short-term follow-up".
   */
  research_subject_status_OnStudyObservation: Coding.FromStrict({
    code: "on-study-observation",
    display: "On-study-observation",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * A person is pre-registered for a study.
   */
  research_subject_status_PendingOnStudy: Coding.FromStrict({
    code: "pending-on-study",
    display: "Pending on-study",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * A person that is potentially eligible for participation in the study.
   */
  research_subject_status_PotentialCandidate: Coding.FromStrict({
    code: "potential-candidate",
    display: "Potential Candidate",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * A person who is being evaluated for eligibility for a study.
   */
  research_subject_status_Screening: Coding.FromStrict({
    code: "screening",
    display: "Screening",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
  /**
   * The person has withdrawn their participation in the study before registration.
   */
  research_subject_status_Withdrawn: Coding.FromStrict({
    code: "withdrawn",
    display: "Withdrawn",
    system: "http://hl7.org/fhir/research-subject-status"
  }),
};