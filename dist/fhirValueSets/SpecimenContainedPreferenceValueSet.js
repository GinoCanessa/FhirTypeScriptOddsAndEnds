// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/specimen-contained-preference|4.0.1
import { Coding } from '../fhir.js';
/**
 * Degree of preference of a type of conditioned specimen.
 */
export const SpecimenContainedPreferenceValueSet = {
    /**
     * alternate: This type of conditioned specimen is an alternate.
     */
    Alternate: new Coding({
        display: "Alternate",
        code: "alternate",
        system: "http://hl7.org/fhir/specimen-contained-preference",
    }),
    /**
     * preferred: This type of contained specimen is preferred to collect this kind of specimen.
     */
    Preferred: new Coding({
        display: "Preferred",
        code: "preferred",
        system: "http://hl7.org/fhir/specimen-contained-preference",
    }),
};
/**
 * Degree of preference of a type of conditioned specimen.
 */
//# sourceMappingURL=SpecimenContainedPreferenceValueSet.js.map