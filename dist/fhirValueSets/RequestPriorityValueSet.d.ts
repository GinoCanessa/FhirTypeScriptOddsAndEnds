import { Coding } from '../fhir.js';
/**
 * The clinical priority of a diagnostic order.
 */
export declare const RequestPriorityValueSet: {
    /**
     * asap: The request should be actioned as soon as possible - higher priority than urgent.
     */
    readonly ASAP: Coding;
    /**
     * routine: The request has normal priority.
     */
    readonly Routine: Coding;
    /**
     * stat: The request should be actioned immediately - highest possible priority.  E.g. an emergency.
     */
    readonly STAT: Coding;
    /**
     * urgent: The request should be actioned promptly - higher priority than routine.
     */
    readonly Urgent: Coding;
};
/**
 * The clinical priority of a diagnostic order.
 */
export declare type RequestPriorityValueSetType = typeof RequestPriorityValueSet;
/**
 * The clinical priority of a diagnostic order.
 */
//# sourceMappingURL=RequestPriorityValueSet.d.ts.map