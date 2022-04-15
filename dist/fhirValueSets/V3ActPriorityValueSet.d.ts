import { Coding } from '../fhir';
/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export declare const V3ActPriorityValueSet: {
    /**
     * As soon as possible, next highest priority after stat.
     */
    v3_ActPriority_ASAP: Coding;
    /**
     * Filler should contact the placer as soon as results are available, even for preliminary results.  (Was "C" in HL7 version 2.3's reporting priority.)
     */
    v3_ActPriority_CallbackResults: Coding;
    /**
     * Filler should contact the placer (or target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    v3_ActPriority_CallbackForScheduling: Coding;
    /**
     * Filler should contact the placer to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    v3_ActPriority_CallbackPlacerForScheduling: Coding;
    /**
     * Filler should contact the service recipient (target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    v3_ActPriority_ContactRecipientForScheduling: Coding;
    /**
     * Beneficial to the patient but not essential for survival.
     */
    v3_ActPriority_Elective: Coding;
    /**
     * An unforeseen combination of circumstances or the resulting state that calls for immediate action.
     */
    v3_ActPriority_Emergency: Coding;
    /**
     * Used to indicate that a service is to be performed prior to a scheduled surgery.  When ordering a service and using the pre-op priority, a check is done to see the amount of time that must be allowed for performance of the service.  When the order is placed, a message can be generated indicating the time needed for the service so that it is not ordered in conflict with a scheduled operation.
     */
    v3_ActPriority_Preop: Coding;
    /**
     * An "as needed" order should be accompanied by a description of what constitutes a need. This description is represented by an observation service predicate as a precondition.
     */
    v3_ActPriority_AsNeeded: Coding;
    /**
     * Routine service, do at usual work hours.
     */
    v3_ActPriority_Routine: Coding;
    /**
     * A report should be prepared and sent as quickly as possible.
     */
    v3_ActPriority_RushReporting: Coding;
    /**
     * With highest priority (e.g., emergency).
     */
    v3_ActPriority_Stat: Coding;
    /**
     * It is critical to come as close as possible to the requested time (e.g., for a through antimicrobial level).
     */
    v3_ActPriority_TimingCritical: Coding;
    /**
     * Drug is to be used as directed by the prescriber.
     */
    v3_ActPriority_UseAsDirected: Coding;
    /**
     * Calls for prompt action.
     */
    v3_ActPriority_Urgent: Coding;
};
//# sourceMappingURL=V3ActPriorityValueSet.d.ts.map