"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerType = void 0;
/**
 * The type of trigger.
 */
exports.TriggerType = {
    /**
     * The trigger occurs whenever access to data of a particular type is completed.
     */
    trigger_type_DataAccessEnded: {
        code: "data-access-ended",
        display: "Data Access Ended",
        system: "http://hl7.org/fhir/trigger-type"
    },
    /**
     * The trigger occurs whenever data of a particular type is accessed.
     */
    trigger_type_DataAccessed: {
        code: "data-accessed",
        display: "Data Accessed",
        system: "http://hl7.org/fhir/trigger-type"
    },
    /**
     * The trigger occurs whenever data of a particular type is added.
     */
    trigger_type_DataAdded: {
        code: "data-added",
        display: "Data Added",
        system: "http://hl7.org/fhir/trigger-type"
    },
    /**
     * The trigger occurs whenever data of a particular type is changed in any way, either added, modified, or removed.
     */
    trigger_type_DataChanged: {
        code: "data-changed",
        display: "Data Changed",
        system: "http://hl7.org/fhir/trigger-type"
    },
    /**
     * The trigger occurs whenever data of a particular type is modified.
     */
    trigger_type_DataUpdated: {
        code: "data-modified",
        display: "Data Updated",
        system: "http://hl7.org/fhir/trigger-type"
    },
    /**
     * The trigger occurs whenever data of a particular type is removed.
     */
    trigger_type_DataRemoved: {
        code: "data-removed",
        display: "Data Removed",
        system: "http://hl7.org/fhir/trigger-type"
    },
    /**
     * The trigger occurs in response to a specific named event, and no other information about the trigger is specified. Named events are completely pre-coordinated, and the formal semantics of the trigger are not provided.
     */
    trigger_type_NamedEvent: {
        code: "named-event",
        display: "Named Event",
        system: "http://hl7.org/fhir/trigger-type"
    },
    /**
     * The trigger occurs at a specific time or periodically as described by a timing or schedule. A periodic event cannot have any data elements, but may have a name assigned as a shorthand for the event.
     */
    trigger_type_Periodic: {
        code: "periodic",
        display: "Periodic",
        system: "http://hl7.org/fhir/trigger-type"
    },
};
//# sourceMappingURL=TriggerType.js.map