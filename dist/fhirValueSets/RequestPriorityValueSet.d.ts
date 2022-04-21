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
export declare enum RequestPriorityValueSetEnum {
    /**
     * asap: The request should be actioned as soon as possible - higher priority than urgent.
     */
    ASAP = "asap",
    /**
     * routine: The request has normal priority.
     */
    Routine = "routine",
    /**
     * stat: The request should be actioned immediately - highest possible priority.  E.g. an emergency.
     */
    STAT = "stat",
    /**
     * urgent: The request should be actioned promptly - higher priority than routine.
     */
    Urgent = "urgent"
}
//# sourceMappingURL=RequestPriorityValueSet.d.ts.map