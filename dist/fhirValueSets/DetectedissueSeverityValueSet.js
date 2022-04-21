// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/detectedissue-severity|4.0.1
import { Coding } from '../fhir.js';
/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export const DetectedissueSeverityValueSet = {
    /**
     * high: Indicates the issue may be life-threatening or has the potential to cause permanent injury.
     */
    High: new Coding({
        display: "High",
        code: "high",
        system: "http://hl7.org/fhir/detectedissue-severity",
    }),
    /**
     * low: Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.
     */
    Low: new Coding({
        display: "Low",
        code: "low",
        system: "http://hl7.org/fhir/detectedissue-severity",
    }),
    /**
     * moderate: Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.
     */
    Moderate: new Coding({
        display: "Moderate",
        code: "moderate",
        system: "http://hl7.org/fhir/detectedissue-severity",
    }),
};
/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 */
export var DetectedissueSeverityValueSetEnum;
(function (DetectedissueSeverityValueSetEnum) {
    /**
     * high: Indicates the issue may be life-threatening or has the potential to cause permanent injury.
     */
    DetectedissueSeverityValueSetEnum["High"] = "high";
    /**
     * low: Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.
     */
    DetectedissueSeverityValueSetEnum["Low"] = "low";
    /**
     * moderate: Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.
     */
    DetectedissueSeverityValueSetEnum["Moderate"] = "moderate";
})(DetectedissueSeverityValueSetEnum || (DetectedissueSeverityValueSetEnum = {}));
//# sourceMappingURL=DetectedissueSeverityValueSet.js.map