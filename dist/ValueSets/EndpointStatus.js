"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointStatus = void 0;
/**
 * The status of the endpoint.
 */
exports.EndpointStatus = {
    /**
     * This endpoint is expected to be active and can be used.
     */
    endpoint_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/endpoint-status"
    },
    /**
     * This instance should not have been part of this patient's medical record.
     */
    endpoint_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in error",
        system: "http://hl7.org/fhir/endpoint-status"
    },
    /**
     * This endpoint has exceeded connectivity thresholds and is considered in an error state and should no longer be attempted to connect to until corrective action is taken.
     */
    endpoint_status_Error: {
        code: "error",
        display: "Error",
        system: "http://hl7.org/fhir/endpoint-status"
    },
    /**
     * This endpoint is no longer to be used.
     */
    endpoint_status_Off: {
        code: "off",
        display: "Off",
        system: "http://hl7.org/fhir/endpoint-status"
    },
    /**
     * This endpoint is temporarily unavailable.
     */
    endpoint_status_Suspended: {
        code: "suspended",
        display: "Suspended",
        system: "http://hl7.org/fhir/endpoint-status"
    },
    /**
     * This endpoint is not intended for production usage.
     */
    endpoint_status_Test: {
        code: "test",
        display: "Test",
        system: "http://hl7.org/fhir/endpoint-status"
    },
};
//# sourceMappingURL=EndpointStatus.js.map