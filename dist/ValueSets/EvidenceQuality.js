"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceQuality = void 0;
/**
 * A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.
 */
exports.EvidenceQuality = {
    /**
     * High quality evidence.
     */
    evidence_quality_HighQuality: {
        code: "high",
        display: "High quality",
        system: "http://terminology.hl7.org/CodeSystem/evidence-quality"
    },
    /**
     * Low quality evidence.
     */
    evidence_quality_LowQuality: {
        code: "low",
        display: "Low quality",
        system: "http://terminology.hl7.org/CodeSystem/evidence-quality"
    },
    /**
     * Moderate quality evidence.
     */
    evidence_quality_ModerateQuality: {
        code: "moderate",
        display: "Moderate quality",
        system: "http://terminology.hl7.org/CodeSystem/evidence-quality"
    },
    /**
     * Very low quality evidence.
     */
    evidence_quality_VeryLowQuality: {
        code: "very-low",
        display: "Very low quality",
        system: "http://terminology.hl7.org/CodeSystem/evidence-quality"
    },
};
//# sourceMappingURL=EvidenceQuality.js.map