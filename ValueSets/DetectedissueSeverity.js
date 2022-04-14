"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectedissueSeverity = void 0;
/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
exports.DetectedissueSeverity = {
    /**
     * Indicates the issue may be life-threatening or has the potential to cause permanent injury.
     */
    detectedissue_severity_High: {
        code: "high",
        display: "High",
        system: "http://hl7.org/fhir/detectedissue-severity"
    },
    /**
     * Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.
     */
    detectedissue_severity_Low: {
        code: "low",
        display: "Low",
        system: "http://hl7.org/fhir/detectedissue-severity"
    },
    /**
     * Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.
     */
    detectedissue_severity_Moderate: {
        code: "moderate",
        display: "Moderate",
        system: "http://hl7.org/fhir/detectedissue-severity"
    },
};
//# sourceMappingURL=DetectedissueSeverity.js.map