// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * FHIR Value set/code system definition for HL7 v2 table 0916 ( Relevant Clincial Information)
 */
export const V20916ValueSet = {
    v2_0916_PatientWasFastingPriorToTheProcedure: new Coding({
        code: "F",
        display: "Patient was fasting prior to the procedure.",
        system: "http://terminology.hl7.org/CodeSystem/v2-0916"
    }),
    v2_0916_ThePatientIndicatedTheyDidNotFastPriorToTheProcedure: new Coding({
        code: "NF",
        display: "The patient indicated they did not fast prior to the procedure.",
        system: "http://terminology.hl7.org/CodeSystem/v2-0916"
    }),
    v2_0916_NotGivenPatientWasNotAskedAtTheTimeOfTheProcedure: new Coding({
        code: "NG",
        display: "Not Given - Patient was not asked at the time of the procedure.",
        system: "http://terminology.hl7.org/CodeSystem/v2-0916"
    }),
};
//# sourceMappingURL=V20916ValueSet.js.map