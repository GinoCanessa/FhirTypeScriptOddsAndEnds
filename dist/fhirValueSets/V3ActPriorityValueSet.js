// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export const V3ActPriorityValueSet = {
    /**
     * As soon as possible, next highest priority after stat.
     */
    v3_ActPriority_ASAP: Coding.FromStrict({
        code: "A",
        display: "ASAP",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * Filler should contact the placer as soon as results are available, even for preliminary results.  (Was "C" in HL7 version 2.3's reporting priority.)
     */
    v3_ActPriority_CallbackResults: Coding.FromStrict({
        code: "CR",
        display: "callback results",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * Filler should contact the placer (or target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    v3_ActPriority_CallbackForScheduling: Coding.FromStrict({
        code: "CS",
        display: "callback for scheduling",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * Filler should contact the placer to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    v3_ActPriority_CallbackPlacerForScheduling: Coding.FromStrict({
        code: "CSP",
        display: "callback placer for scheduling",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * Filler should contact the service recipient (target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    v3_ActPriority_ContactRecipientForScheduling: Coding.FromStrict({
        code: "CSR",
        display: "contact recipient for scheduling",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * Beneficial to the patient but not essential for survival.
     */
    v3_ActPriority_Elective: Coding.FromStrict({
        code: "EL",
        display: "elective",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * An unforeseen combination of circumstances or the resulting state that calls for immediate action.
     */
    v3_ActPriority_Emergency: Coding.FromStrict({
        code: "EM",
        display: "emergency",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * Used to indicate that a service is to be performed prior to a scheduled surgery.  When ordering a service and using the pre-op priority, a check is done to see the amount of time that must be allowed for performance of the service.  When the order is placed, a message can be generated indicating the time needed for the service so that it is not ordered in conflict with a scheduled operation.
     */
    v3_ActPriority_Preop: Coding.FromStrict({
        code: "P",
        display: "preop",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * An "as needed" order should be accompanied by a description of what constitutes a need. This description is represented by an observation service predicate as a precondition.
     */
    v3_ActPriority_AsNeeded: Coding.FromStrict({
        code: "PRN",
        display: "as needed",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * Routine service, do at usual work hours.
     */
    v3_ActPriority_Routine: Coding.FromStrict({
        code: "R",
        display: "routine",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * A report should be prepared and sent as quickly as possible.
     */
    v3_ActPriority_RushReporting: Coding.FromStrict({
        code: "RR",
        display: "rush reporting",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * With highest priority (e.g., emergency).
     */
    v3_ActPriority_Stat: Coding.FromStrict({
        code: "S",
        display: "stat",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * It is critical to come as close as possible to the requested time (e.g., for a through antimicrobial level).
     */
    v3_ActPriority_TimingCritical: Coding.FromStrict({
        code: "T",
        display: "timing critical",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * Drug is to be used as directed by the prescriber.
     */
    v3_ActPriority_UseAsDirected: Coding.FromStrict({
        code: "UD",
        display: "use as directed",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
    /**
     * Calls for prompt action.
     */
    v3_ActPriority_Urgent: Coding.FromStrict({
        code: "UR",
        display: "urgent",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActPriority"
    }),
};
//# sourceMappingURL=V3ActPriorityValueSet.js.map