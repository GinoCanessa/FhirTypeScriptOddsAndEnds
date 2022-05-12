import { Coding } from '../fhir.js';
/**
 * The status of a guidance response.
 */
export declare const GuidanceResponseStatusValueSet: {
    /**
     * data-requested: The request was processed successfully, but more data may result in a more complete evaluation.
     */
    readonly DataRequested: Coding;
    /**
     * data-required: The request was processed, but more data is required to complete the evaluation.
     */
    readonly DataRequired: Coding;
    /**
     * entered-in-error: The response was entered in error.
     */
    readonly EnteredInError: Coding;
    /**
     * failure: The request was not processed successfully.
     */
    readonly Failure: Coding;
    /**
     * in-progress: The request is currently being processed.
     */
    readonly InProgress: Coding;
    /**
     * success: The request was processed successfully.
     */
    readonly Success: Coding;
};
/**
 * The status of a guidance response.
 */
export declare type GuidanceResponseStatusValueSetType = typeof GuidanceResponseStatusValueSet;
/**
 * The status of a guidance response.
 */
//# sourceMappingURL=GuidanceResponseStatusValueSet.d.ts.map