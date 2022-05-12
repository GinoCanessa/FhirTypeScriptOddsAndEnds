import { Coding } from '../fhir.js';
/**
 * A coded concept indicating the current status of the Device Usage.
 */
export declare const DeviceStatementStatusValueSet: {
    /**
     * active: The device is still being used.
     */
    readonly Active: Coding;
    /**
     * completed: The device is no longer being used.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: The statement was recorded incorrectly.
     */
    readonly EnteredInError: Coding;
    /**
     * intended: The device may be used at some time in the future.
     */
    readonly Intended: Coding;
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    readonly OnHold: Coding;
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred.
     */
    readonly Stopped: Coding;
};
/**
 * A coded concept indicating the current status of the Device Usage.
 */
export declare type DeviceStatementStatusValueSetType = typeof DeviceStatementStatusValueSet;
/**
 * A coded concept indicating the current status of the Device Usage.
 */
//# sourceMappingURL=DeviceStatementStatusValueSet.d.ts.map