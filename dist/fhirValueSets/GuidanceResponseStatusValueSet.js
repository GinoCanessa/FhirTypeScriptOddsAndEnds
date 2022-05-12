// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/guidance-response-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * The status of a guidance response.
 */
export const GuidanceResponseStatusValueSet = {
    /**
     * data-requested: The request was processed successfully, but more data may result in a more complete evaluation.
     */
    DataRequested: new Coding({
        display: "Data Requested",
        code: "data-requested",
        system: "http://hl7.org/fhir/guidance-response-status",
    }),
    /**
     * data-required: The request was processed, but more data is required to complete the evaluation.
     */
    DataRequired: new Coding({
        display: "Data Required",
        code: "data-required",
        system: "http://hl7.org/fhir/guidance-response-status",
    }),
    /**
     * entered-in-error: The response was entered in error.
     */
    EnteredInError: new Coding({
        display: "Entered In Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/guidance-response-status",
    }),
    /**
     * failure: The request was not processed successfully.
     */
    Failure: new Coding({
        display: "Failure",
        code: "failure",
        system: "http://hl7.org/fhir/guidance-response-status",
    }),
    /**
     * in-progress: The request is currently being processed.
     */
    InProgress: new Coding({
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/guidance-response-status",
    }),
    /**
     * success: The request was processed successfully.
     */
    Success: new Coding({
        display: "Success",
        code: "success",
        system: "http://hl7.org/fhir/guidance-response-status",
    }),
};
/**
 * The status of a guidance response.
 */
//# sourceMappingURL=GuidanceResponseStatusValueSet.js.map