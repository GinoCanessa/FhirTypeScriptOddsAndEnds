/**
 * The type of trigger.
 */
export declare enum TriggerTypeValueSetEnum {
    /**
     * data-access-ended: The trigger occurs whenever access to data of a particular type is completed.
     */
    DataAccessEnded = "data-access-ended",
    /**
     * data-accessed: The trigger occurs whenever data of a particular type is accessed.
     */
    DataAccessed = "data-accessed",
    /**
     * data-added: The trigger occurs whenever data of a particular type is added.
     */
    DataAdded = "data-added",
    /**
     * data-changed: The trigger occurs whenever data of a particular type is changed in any way, either added, modified, or removed.
     */
    DataChanged = "data-changed",
    /**
     * data-modified: The trigger occurs whenever data of a particular type is modified.
     */
    DataUpdated = "data-modified",
    /**
     * data-removed: The trigger occurs whenever data of a particular type is removed.
     */
    DataRemoved = "data-removed",
    /**
     * named-event: The trigger occurs in response to a specific named event, and no other information about the trigger is specified. Named events are completely pre-coordinated, and the formal semantics of the trigger are not provided.
     */
    NamedEvent = "named-event",
    /**
     * periodic: The trigger occurs at a specific time or periodically as described by a timing or schedule. A periodic event cannot have any data elements, but may have a name assigned as a shorthand for the event.
     */
    Periodic = "periodic"
}
//# sourceMappingURL=TriggerTypeValueSetEnum.d.ts.map