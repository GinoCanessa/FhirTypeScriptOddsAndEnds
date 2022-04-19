// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the patient's eligibility for a vaccination program. This value set is provided as a suggestive example.
 */
export const ImmunizationProgramEligibilityValueSet = {
    /**
     * The patient is not eligible for the funding program.
     */
    immunization_program_eligibility_NotEligible: Coding.FromStrict({
        code: "ineligible",
        display: "Not Eligible",
        system: "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility"
    }),
    /**
     * The patient is eligible for the funding program because they are uninsured.
     */
    immunization_program_eligibility_Uninsured: Coding.FromStrict({
        code: "uninsured",
        display: "Uninsured",
        system: "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility"
    }),
};
//# sourceMappingURL=ImmunizationProgramEligibilityValueSet.js.map