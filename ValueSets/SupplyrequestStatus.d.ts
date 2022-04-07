import { Coding } from '../strictmodels';
/**
 * Status of the supply request.
 */
export declare const SupplyrequestStatus: {
    /**
     * The request is ready to be acted upon.
     */
    supplyrequest_status_Active: Coding;
    /**
     * The authorization/request to act has been terminated prior to the full completion of the intended actions.  No further activity should occur.
     */
    supplyrequest_status_Cancelled: Coding;
    /**
     * Activity against the request has been sufficiently completed to the satisfaction of the requester.
     */
    supplyrequest_status_Completed: Coding;
    /**
     * The request has been created but is not yet complete or ready for action.
     */
    supplyrequest_status_Draft: Coding;
    /**
     * This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    supplyrequest_status_EnteredInError: Coding;
    /**
     * The authorization/request to act has been temporarily withdrawn but is expected to resume in the future.
     */
    supplyrequest_status_Suspended: Coding;
    /**
     * The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    supplyrequest_status_Unknown: Coding;
};
//# sourceMappingURL=SupplyrequestStatus.d.ts.map