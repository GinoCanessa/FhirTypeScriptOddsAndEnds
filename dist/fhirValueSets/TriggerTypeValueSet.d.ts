import { Coding } from '../fhir';
/**
 * The type of trigger.
 */
export declare const TriggerTypeValueSet: {
    /**
     * The trigger occurs whenever access to data of a particular type is completed.
     */
    trigger_type_DataAccessEnded: Coding;
    /**
     * The trigger occurs whenever data of a particular type is accessed.
     */
    trigger_type_DataAccessed: Coding;
    /**
     * The trigger occurs whenever data of a particular type is added.
     */
    trigger_type_DataAdded: Coding;
    /**
     * The trigger occurs whenever data of a particular type is changed in any way, either added, modified, or removed.
     */
    trigger_type_DataChanged: Coding;
    /**
     * The trigger occurs whenever data of a particular type is modified.
     */
    trigger_type_DataUpdated: Coding;
    /**
     * The trigger occurs whenever data of a particular type is removed.
     */
    trigger_type_DataRemoved: Coding;
    /**
     * The trigger occurs in response to a specific named event, and no other information about the trigger is specified. Named events are completely pre-coordinated, and the formal semantics of the trigger are not provided.
     */
    trigger_type_NamedEvent: Coding;
    /**
     * The trigger occurs at a specific time or periodically as described by a timing or schedule. A periodic event cannot have any data elements, but may have a name assigned as a shorthand for the event.
     */
    trigger_type_Periodic: Coding;
};
//# sourceMappingURL=TriggerTypeValueSet.d.ts.map