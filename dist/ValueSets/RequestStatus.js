"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestStatus = void 0;
/**
 * Codes identifying the lifecycle stage of a request.
 */
exports.RequestStatus = {
    /**
     * The request is in force and ready to be acted upon.
     */
    request_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/request-status"
    },
    /**
     * The activity described by the request has been fully performed.  No further activity will occur.
     */
    request_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/request-status"
    },
    /**
     * The request has been created but is not yet complete or ready for action.
     */
    request_status_Draft: {
        code: "draft",
        display: "Draft",
        system: "http://hl7.org/fhir/request-status"
    },
    /**
     * This request should never have existed and should be considered 'void'.  (It is possible that real-world decisions were based on it.  If real-world activity has occurred, the status should be "revoked" rather than "entered-in-error".).
     */
    request_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/request-status"
    },
    /**
     * The request (and any implicit authorization to act) has been temporarily withdrawn but is expected to resume in the future.
     */
    request_status_OnHold: {
        code: "on-hold",
        display: "On Hold",
        system: "http://hl7.org/fhir/request-status"
    },
    /**
     * The request (and any implicit authorization to act) has been terminated prior to the known full completion of the intended actions.  No further activity should occur.
     */
    request_status_Revoked: {
        code: "revoked",
        display: "Revoked",
        system: "http://hl7.org/fhir/request-status"
    },
    /**
     * The authoring/source system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
     */
    request_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/request-status"
    },
};
//# sourceMappingURL=RequestStatus.js.map