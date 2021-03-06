// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/issue-severity|4.0.1
/**
 * How the issue affects the success of the action.
 */
export var IssueSeverityValueSetEnum;
(function (IssueSeverityValueSetEnum) {
    /**
     * error: The issue is sufficiently important to cause the action to fail.
     */
    IssueSeverityValueSetEnum["Error"] = "error";
    /**
     * fatal: The issue caused the action to fail and no further checking could be performed.
     */
    IssueSeverityValueSetEnum["Fatal"] = "fatal";
    /**
     * information: The issue has no relation to the degree of success of the action.
     */
    IssueSeverityValueSetEnum["Information"] = "information";
    /**
     * warning: The issue is not important enough to cause the action to fail but may cause it to be performed suboptimally or in a way that is not as desired.
     */
    IssueSeverityValueSetEnum["Warning"] = "warning";
})(IssueSeverityValueSetEnum || (IssueSeverityValueSetEnum = {}));
//# sourceMappingURL=IssueSeverityValueSetEnum.js.map