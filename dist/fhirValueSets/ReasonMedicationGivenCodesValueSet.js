// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 */
export const ReasonMedicationGivenCodesValueSet = {
    /**
     * No reason known.
     */
    reason_medication_given_codes_None: Coding.FromStrict({
        code: "a",
        display: "None",
        system: "http://terminology.hl7.org/CodeSystem/reason-medication-given"
    }),
    /**
     * The administration was following an ordered protocol.
     */
    reason_medication_given_codes_GivenAsOrdered: Coding.FromStrict({
        code: "b",
        display: "Given as Ordered",
        system: "http://terminology.hl7.org/CodeSystem/reason-medication-given"
    }),
    /**
     * The administration was needed to treat an emergency.
     */
    reason_medication_given_codes_Emergency: Coding.FromStrict({
        code: "c",
        display: "Emergency",
        system: "http://terminology.hl7.org/CodeSystem/reason-medication-given"
    }),
};
//# sourceMappingURL=ReasonMedicationGivenCodesValueSet.js.map