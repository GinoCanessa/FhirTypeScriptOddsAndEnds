import { Coding } from '../strictmodels';
/**
 * The status of the endpoint.
 */
export declare const EndpointStatus: {
    /**
     * This endpoint is expected to be active and can be used.
     */
    endpoint_status_Active: Coding;
    /**
     * This instance should not have been part of this patient's medical record.
     */
    endpoint_status_EnteredInError: Coding;
    /**
     * This endpoint has exceeded connectivity thresholds and is considered in an error state and should no longer be attempted to connect to until corrective action is taken.
     */
    endpoint_status_Error: Coding;
    /**
     * This endpoint is no longer to be used.
     */
    endpoint_status_Off: Coding;
    /**
     * This endpoint is temporarily unavailable.
     */
    endpoint_status_Suspended: Coding;
    /**
     * This endpoint is not intended for production usage.
     */
    endpoint_status_Test: Coding;
};
//# sourceMappingURL=EndpointStatus.d.ts.map