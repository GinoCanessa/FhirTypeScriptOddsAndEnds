import { Coding } from '../strictmodels';
/**
 * A coded concept indicating the current status of the Device Usage.
 */
export declare const DeviceStatementStatus: {
    /**
     * The device is still being used.
     */
    device_statement_status_Active: Coding;
    /**
     * The device is no longer being used.
     */
    device_statement_status_Completed: Coding;
    /**
     * The statement was recorded incorrectly.
     */
    device_statement_status_EnteredInError: Coding;
    /**
     * The device may be used at some time in the future.
     */
    device_statement_status_Intended: Coding;
    /**
     * Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    device_statement_status_OnHold: Coding;
    /**
     * Actions implied by the statement have been permanently halted, before all of them occurred.
     */
    device_statement_status_Stopped: Coding;
};
//# sourceMappingURL=DeviceStatementStatus.d.ts.map