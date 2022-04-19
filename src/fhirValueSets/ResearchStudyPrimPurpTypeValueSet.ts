// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Codes for the main intent of the study.
 */
export const ResearchStudyPrimPurpTypeValueSet = {
  /**
   * One or more interventions for examining the basic mechanism of action (for example, physiology or biomechanics of an intervention).
   */
  research_study_prim_purp_type_BasicScience: new Coding({
    code: "basic-science",
    display: "Basic Science",
    system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type"
  }),
  /**
   * An intervention of a device product is being evaluated to determine the feasibility of the product or to test a prototype device and not health outcomes. Such studies are conducted to confirm the design and operating specifications of a device before beginning a full clinical trial.
   */
  research_study_prim_purp_type_DeviceFeasibility: new Coding({
    code: "device-feasibility",
    display: "Device Feasibility",
    system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type"
  }),
  /**
   * One or more interventions are being evaluated for identifying a disease or health condition.
   */
  research_study_prim_purp_type_Diagnostic: new Coding({
    code: "diagnostic",
    display: "Diagnostic",
    system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type"
  }),
  /**
   * One or more interventions for evaluating the delivery, processes, management, organization, or financing of healthcare.
   */
  research_study_prim_purp_type_HealthServicesResearch: new Coding({
    code: "health-services-research",
    display: "Health Services Research",
    system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type"
  }),
  /**
   * One or more interventions are being assessed for preventing the development of a specific disease or health condition.
   */
  research_study_prim_purp_type_Prevention: new Coding({
    code: "prevention",
    display: "Prevention",
    system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type"
  }),
  /**
   * One or more interventions are assessed or examined for identifying a condition, or risk factors for a condition, in people who are not yet known to have the condition or risk factor.
   */
  research_study_prim_purp_type_Screening: new Coding({
    code: "screening",
    display: "Screening",
    system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type"
  }),
  /**
   * One or more interventions are evaluated for maximizing comfort, minimizing side effects, or mitigating against a decline in the participant's health or function.
   */
  research_study_prim_purp_type_SupportiveCare: new Coding({
    code: "supportive-care",
    display: "Supportive Care",
    system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type"
  }),
  /**
   * One or more interventions are being evaluated for treating a disease, syndrome, or condition.
   */
  research_study_prim_purp_type_Treatment: new Coding({
    code: "treatment",
    display: "Treatment",
    system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type"
  }),
};
