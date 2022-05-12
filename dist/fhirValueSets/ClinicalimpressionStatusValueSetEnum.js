// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/clinicalimpression-status|4.0.1
/**
 * Codes that reflect the current state of a clinical impression within its overall lifecycle.
 */
export var ClinicalimpressionStatusValueSetEnum;
(function (ClinicalimpressionStatusValueSetEnum) {
    /**
     * completed: The event has now concluded.
     */
    ClinicalimpressionStatusValueSetEnum["Completed"] = "completed";
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    ClinicalimpressionStatusValueSetEnum["EnteredInError"] = "entered-in-error";
    /**
     * in-progress: The event is currently occurring.
     */
    ClinicalimpressionStatusValueSetEnum["InProgress"] = "in-progress";
})(ClinicalimpressionStatusValueSetEnum || (ClinicalimpressionStatusValueSetEnum = {}));
//# sourceMappingURL=ClinicalimpressionStatusValueSetEnum.js.map