// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set includes sample Revenue Center codes.
 */
export const ExRevenueCenterValueSet = {
    /**
     * Vision Clinic
     */
    ex_revenue_center_VisionClinic: Coding.FromStrict({
        code: "0010",
        display: "Vision Clinic",
        system: "http://terminology.hl7.org/CodeSystem/ex-revenue-center"
    }),
    /**
     * Anaesthesia.
     */
    ex_revenue_center_Anaesthesia: Coding.FromStrict({
        code: "0370",
        display: "Anaesthesia",
        system: "http://terminology.hl7.org/CodeSystem/ex-revenue-center"
    }),
    /**
     * Physical Therapy.
     */
    ex_revenue_center_PhysicalTherapy: Coding.FromStrict({
        code: "0420",
        display: "Physical Therapy",
        system: "http://terminology.hl7.org/CodeSystem/ex-revenue-center"
    }),
    /**
     * Physical Therapy - visit charge.
     */
    ex_revenue_center_PhysicalTherapy_2: Coding.FromStrict({
        code: "0421",
        display: "Physical Therapy - ",
        system: "http://terminology.hl7.org/CodeSystem/ex-revenue-center"
    }),
    /**
     * Speech-Language Pathology.
     */
    ex_revenue_center_SpeechLanguagePathology: Coding.FromStrict({
        code: "0440",
        display: "Speech-Language Pathology",
        system: "http://terminology.hl7.org/CodeSystem/ex-revenue-center"
    }),
    /**
     * Speech-Language Pathology- visit charge
     */
    ex_revenue_center_SpeechLanguagePathologyVisit: Coding.FromStrict({
        code: "0441",
        display: "Speech-Language Pathology - Visit",
        system: "http://terminology.hl7.org/CodeSystem/ex-revenue-center"
    }),
    /**
     * Emergency Room
     */
    ex_revenue_center_EmergencyRoom: Coding.FromStrict({
        code: "0450",
        display: "Emergency Room",
        system: "http://terminology.hl7.org/CodeSystem/ex-revenue-center"
    }),
    /**
     * Emergency Room - EM/EMTALA
     */
    ex_revenue_center_EmergencyRoomEMEMTALA: Coding.FromStrict({
        code: "0451",
        display: "Emergency Room - EM/EMTALA",
        system: "http://terminology.hl7.org/CodeSystem/ex-revenue-center"
    }),
    /**
     * Emergency Room - beyond EMTALA
     */
    ex_revenue_center_EmergencyRoomBeyondEMTALA: Coding.FromStrict({
        code: "0452",
        display: "Emergency Room - beyond EMTALA",
        system: "http://terminology.hl7.org/CodeSystem/ex-revenue-center"
    }),
};
//# sourceMappingURL=ExRevenueCenterValueSet.js.map