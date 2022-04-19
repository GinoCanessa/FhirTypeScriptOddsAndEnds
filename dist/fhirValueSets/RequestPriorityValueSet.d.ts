import { Coding } from '../fhir';
/**
 * The clinical priority of a diagnostic order.
 */
export declare const RequestPriorityValueSet: {
    /**
     * The request should be actioned as soon as possible - higher priority than urgent.
     */
    request_priority_ASAP: Coding;
    /**
     * The request has normal priority.
     */
    request_priority_Routine: Coding;
    /**
     * The request should be actioned immediately - highest possible priority.  E.g. an emergency.
     */
    request_priority_STAT: Coding;
    /**
     * The request should be actioned promptly - higher priority than routine.
     */
    request_priority_Urgent: Coding;
};
//# sourceMappingURL=RequestPriorityValueSet.d.ts.map