import { Coding } from '../fhir.js';
/**
 * The status of the endpoint.
 */
export declare const EndpointStatusValueSet: {
    /**
     * active: This endpoint is expected to be active and can be used.
     */
    readonly Active: Coding;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: Coding;
    /**
     * error: This endpoint has exceeded connectivity thresholds and is considered in an error state and should no longer be attempted to connect to until corrective action is taken.
     */
    readonly Error: Coding;
    /**
     * off: This endpoint is no longer to be used.
     */
    readonly Off: Coding;
    /**
     * suspended: This endpoint is temporarily unavailable.
     */
    readonly Suspended: Coding;
    /**
     * test: This endpoint is not intended for production usage.
     */
    readonly Test: Coding;
};
/**
 * The status of the endpoint.
 */
export declare type EndpointStatusValueSetType = typeof EndpointStatusValueSet;
/**
 * The status of the endpoint.
 */
export declare enum EndpointStatusValueSetEnum {
    /**
     * active: This endpoint is expected to be active and can be used.
     */
    Active = "active",
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError = "entered-in-error",
    /**
     * error: This endpoint has exceeded connectivity thresholds and is considered in an error state and should no longer be attempted to connect to until corrective action is taken.
     */
    Error = "error",
    /**
     * off: This endpoint is no longer to be used.
     */
    Off = "off",
    /**
     * suspended: This endpoint is temporarily unavailable.
     */
    Suspended = "suspended",
    /**
     * test: This endpoint is not intended for production usage.
     */
    Test = "test"
}
//# sourceMappingURL=EndpointStatusValueSet.d.ts.map