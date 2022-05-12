// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/guidance-response-status|4.0.1
/**
 * The status of a guidance response.
 */
export var GuidanceResponseStatusValueSetEnum;
(function (GuidanceResponseStatusValueSetEnum) {
    /**
     * data-requested: The request was processed successfully, but more data may result in a more complete evaluation.
     */
    GuidanceResponseStatusValueSetEnum["DataRequested"] = "data-requested";
    /**
     * data-required: The request was processed, but more data is required to complete the evaluation.
     */
    GuidanceResponseStatusValueSetEnum["DataRequired"] = "data-required";
    /**
     * entered-in-error: The response was entered in error.
     */
    GuidanceResponseStatusValueSetEnum["EnteredInError"] = "entered-in-error";
    /**
     * failure: The request was not processed successfully.
     */
    GuidanceResponseStatusValueSetEnum["Failure"] = "failure";
    /**
     * in-progress: The request is currently being processed.
     */
    GuidanceResponseStatusValueSetEnum["InProgress"] = "in-progress";
    /**
     * success: The request was processed successfully.
     */
    GuidanceResponseStatusValueSetEnum["Success"] = "success";
})(GuidanceResponseStatusValueSetEnum || (GuidanceResponseStatusValueSetEnum = {}));
//# sourceMappingURL=GuidanceResponseStatusValueSetEnum.js.map