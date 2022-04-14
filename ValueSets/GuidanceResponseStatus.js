"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidanceResponseStatus = void 0;
/**
 * The status of a guidance response.
 */
exports.GuidanceResponseStatus = {
    /**
     * The request was processed successfully, but more data may result in a more complete evaluation.
     */
    guidance_response_status_DataRequested: {
        code: "data-requested",
        display: "Data Requested",
        system: "http://hl7.org/fhir/guidance-response-status"
    },
    /**
     * The request was processed, but more data is required to complete the evaluation.
     */
    guidance_response_status_DataRequired: {
        code: "data-required",
        display: "Data Required",
        system: "http://hl7.org/fhir/guidance-response-status"
    },
    /**
     * The response was entered in error.
     */
    guidance_response_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered In Error",
        system: "http://hl7.org/fhir/guidance-response-status"
    },
    /**
     * The request was not processed successfully.
     */
    guidance_response_status_Failure: {
        code: "failure",
        display: "Failure",
        system: "http://hl7.org/fhir/guidance-response-status"
    },
    /**
     * The request is currently being processed.
     */
    guidance_response_status_InProgress: {
        code: "in-progress",
        display: "In Progress",
        system: "http://hl7.org/fhir/guidance-response-status"
    },
    /**
     * The request was processed successfully.
     */
    guidance_response_status_Success: {
        code: "success",
        display: "Success",
        system: "http://hl7.org/fhir/guidance-response-status"
    },
};
//# sourceMappingURL=GuidanceResponseStatus.js.map