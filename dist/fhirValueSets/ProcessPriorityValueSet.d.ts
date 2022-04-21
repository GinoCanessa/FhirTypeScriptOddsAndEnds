import { Coding } from '../fhir.js';
/**
 * This value set includes the financial processing priority codes.
 */
export declare const ProcessPriorityValueSet: {
    /**
     * deferred: Later, when possible.
     */
    readonly Deferred: Coding;
    /**
     * normal: With best effort.
     */
    readonly Normal: Coding;
    /**
     * stat: Immediately in real time.
     */
    readonly Immediate: Coding;
};
/**
 * This value set includes the financial processing priority codes.
 */
export declare type ProcessPriorityValueSetType = typeof ProcessPriorityValueSet;
/**
 * This value set includes the financial processing priority codes.
 */
export declare enum ProcessPriorityValueSetEnum {
    /**
     * deferred: Later, when possible.
     */
    Deferred = "deferred",
    /**
     * normal: With best effort.
     */
    Normal = "normal",
    /**
     * stat: Immediately in real time.
     */
    Immediate = "stat"
}
//# sourceMappingURL=ProcessPriorityValueSet.d.ts.map