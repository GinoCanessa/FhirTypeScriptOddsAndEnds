// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/evidence-quality|4.0.1
import { Coding } from '../fhir.js';
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
export const EvidenceQualityValueSet = {
    /**
     * high: High quality evidence.
     */
    HighQuality: new Coding({
        display: "High quality",
        code: "high",
        system: "http://terminology.hl7.org/CodeSystem/evidence-quality",
    }),
    /**
     * low: Low quality evidence.
     */
    LowQuality: new Coding({
        display: "Low quality",
        code: "low",
        system: "http://terminology.hl7.org/CodeSystem/evidence-quality",
    }),
    /**
     * moderate: Moderate quality evidence.
     */
    ModerateQuality: new Coding({
        display: "Moderate quality",
        code: "moderate",
        system: "http://terminology.hl7.org/CodeSystem/evidence-quality",
    }),
    /**
     * very-low: Very low quality evidence.
     */
    VeryLowQuality: new Coding({
        display: "Very low quality",
        code: "very-low",
        system: "http://terminology.hl7.org/CodeSystem/evidence-quality",
    }),
};
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
//# sourceMappingURL=EvidenceQualityValueSet.js.map