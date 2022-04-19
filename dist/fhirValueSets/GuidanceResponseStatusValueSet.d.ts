import { Coding } from '../fhir';
/**
 * The status of a guidance response.
 */
export declare const GuidanceResponseStatusValueSet: {
    /**
     * The request was processed successfully, but more data may result in a more complete evaluation.
     */
    guidance_response_status_DataRequested: Coding;
    /**
     * The request was processed, but more data is required to complete the evaluation.
     */
    guidance_response_status_DataRequired: Coding;
    /**
     * The response was entered in error.
     */
    guidance_response_status_EnteredInError: Coding;
    /**
     * The request was not processed successfully.
     */
    guidance_response_status_Failure: Coding;
    /**
     * The request is currently being processed.
     */
    guidance_response_status_InProgress: Coding;
    /**
     * The request was processed successfully.
     */
    guidance_response_status_Success: Coding;
};
//# sourceMappingURL=GuidanceResponseStatusValueSet.d.ts.map