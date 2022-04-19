// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Degree of preference of a type of conditioned specimen.
 */
export const SpecimenContainedPreferenceValueSet = {
    /**
     * This type of conditioned specimen is an alternate.
     */
    specimen_contained_preference_Alternate: Coding.FromStrict({
        code: "alternate",
        display: "Alternate",
        system: "http://hl7.org/fhir/specimen-contained-preference"
    }),
    /**
     * This type of contained specimen is preferred to collect this kind of specimen.
     */
    specimen_contained_preference_Preferred: Coding.FromStrict({
        code: "preferred",
        display: "Preferred",
        system: "http://hl7.org/fhir/specimen-contained-preference"
    }),
};
//# sourceMappingURL=SpecimenContainedPreferenceValueSet.js.map