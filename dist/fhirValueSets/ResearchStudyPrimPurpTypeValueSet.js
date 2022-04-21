// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-study-prim-purp-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * Codes for the main intent of the study.
 */
export const ResearchStudyPrimPurpTypeValueSet = {
    /**
     * basic-science: One or more interventions for examining the basic mechanism of action (for example, physiology or biomechanics of an intervention).
     */
    BasicScience: new Coding({
        display: "Basic Science",
        code: "basic-science",
        system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
    }),
    /**
     * device-feasibility: An intervention of a device product is being evaluated to determine the feasibility of the product or to test a prototype device and not health outcomes. Such studies are conducted to confirm the design and operating specifications of a device before beginning a full clinical trial.
     */
    DeviceFeasibility: new Coding({
        display: "Device Feasibility",
        code: "device-feasibility",
        system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
    }),
    /**
     * diagnostic: One or more interventions are being evaluated for identifying a disease or health condition.
     */
    Diagnostic: new Coding({
        display: "Diagnostic",
        code: "diagnostic",
        system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
    }),
    /**
     * health-services-research: One or more interventions for evaluating the delivery, processes, management, organization, or financing of healthcare.
     */
    HealthServicesResearch: new Coding({
        display: "Health Services Research",
        code: "health-services-research",
        system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
    }),
    /**
     * prevention: One or more interventions are being assessed for preventing the development of a specific disease or health condition.
     */
    Prevention: new Coding({
        display: "Prevention",
        code: "prevention",
        system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
    }),
    /**
     * screening: One or more interventions are assessed or examined for identifying a condition, or risk factors for a condition, in people who are not yet known to have the condition or risk factor.
     */
    Screening: new Coding({
        display: "Screening",
        code: "screening",
        system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
    }),
    /**
     * supportive-care: One or more interventions are evaluated for maximizing comfort, minimizing side effects, or mitigating against a decline in the participant's health or function.
     */
    SupportiveCare: new Coding({
        display: "Supportive Care",
        code: "supportive-care",
        system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
    }),
    /**
     * treatment: One or more interventions are being evaluated for treating a disease, syndrome, or condition.
     */
    Treatment: new Coding({
        display: "Treatment",
        code: "treatment",
        system: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
    }),
};
/**
 * Codes for the main intent of the study.
 */
export var ResearchStudyPrimPurpTypeValueSetEnum;
(function (ResearchStudyPrimPurpTypeValueSetEnum) {
    /**
     * basic-science: One or more interventions for examining the basic mechanism of action (for example, physiology or biomechanics of an intervention).
     */
    ResearchStudyPrimPurpTypeValueSetEnum["BasicScience"] = "basic-science";
    /**
     * device-feasibility: An intervention of a device product is being evaluated to determine the feasibility of the product or to test a prototype device and not health outcomes. Such studies are conducted to confirm the design and operating specifications of a device before beginning a full clinical trial.
     */
    ResearchStudyPrimPurpTypeValueSetEnum["DeviceFeasibility"] = "device-feasibility";
    /**
     * diagnostic: One or more interventions are being evaluated for identifying a disease or health condition.
     */
    ResearchStudyPrimPurpTypeValueSetEnum["Diagnostic"] = "diagnostic";
    /**
     * health-services-research: One or more interventions for evaluating the delivery, processes, management, organization, or financing of healthcare.
     */
    ResearchStudyPrimPurpTypeValueSetEnum["HealthServicesResearch"] = "health-services-research";
    /**
     * prevention: One or more interventions are being assessed for preventing the development of a specific disease or health condition.
     */
    ResearchStudyPrimPurpTypeValueSetEnum["Prevention"] = "prevention";
    /**
     * screening: One or more interventions are assessed or examined for identifying a condition, or risk factors for a condition, in people who are not yet known to have the condition or risk factor.
     */
    ResearchStudyPrimPurpTypeValueSetEnum["Screening"] = "screening";
    /**
     * supportive-care: One or more interventions are evaluated for maximizing comfort, minimizing side effects, or mitigating against a decline in the participant's health or function.
     */
    ResearchStudyPrimPurpTypeValueSetEnum["SupportiveCare"] = "supportive-care";
    /**
     * treatment: One or more interventions are being evaluated for treating a disease, syndrome, or condition.
     */
    ResearchStudyPrimPurpTypeValueSetEnum["Treatment"] = "treatment";
})(ResearchStudyPrimPurpTypeValueSetEnum || (ResearchStudyPrimPurpTypeValueSetEnum = {}));
//# sourceMappingURL=ResearchStudyPrimPurpTypeValueSet.js.map