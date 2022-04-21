// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/trigger-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * The type of trigger.
 */
export const TriggerTypeValueSet = {
    /**
     * data-access-ended: The trigger occurs whenever access to data of a particular type is completed.
     */
    DataAccessEnded: new Coding({
        display: "Data Access Ended",
        code: "data-access-ended",
        system: "http://hl7.org/fhir/trigger-type",
    }),
    /**
     * data-accessed: The trigger occurs whenever data of a particular type is accessed.
     */
    DataAccessed: new Coding({
        display: "Data Accessed",
        code: "data-accessed",
        system: "http://hl7.org/fhir/trigger-type",
    }),
    /**
     * data-added: The trigger occurs whenever data of a particular type is added.
     */
    DataAdded: new Coding({
        display: "Data Added",
        code: "data-added",
        system: "http://hl7.org/fhir/trigger-type",
    }),
    /**
     * data-changed: The trigger occurs whenever data of a particular type is changed in any way, either added, modified, or removed.
     */
    DataChanged: new Coding({
        display: "Data Changed",
        code: "data-changed",
        system: "http://hl7.org/fhir/trigger-type",
    }),
    /**
     * data-modified: The trigger occurs whenever data of a particular type is modified.
     */
    DataUpdated: new Coding({
        display: "Data Updated",
        code: "data-modified",
        system: "http://hl7.org/fhir/trigger-type",
    }),
    /**
     * data-removed: The trigger occurs whenever data of a particular type is removed.
     */
    DataRemoved: new Coding({
        display: "Data Removed",
        code: "data-removed",
        system: "http://hl7.org/fhir/trigger-type",
    }),
    /**
     * named-event: The trigger occurs in response to a specific named event, and no other information about the trigger is specified. Named events are completely pre-coordinated, and the formal semantics of the trigger are not provided.
     */
    NamedEvent: new Coding({
        display: "Named Event",
        code: "named-event",
        system: "http://hl7.org/fhir/trigger-type",
    }),
    /**
     * periodic: The trigger occurs at a specific time or periodically as described by a timing or schedule. A periodic event cannot have any data elements, but may have a name assigned as a shorthand for the event.
     */
    Periodic: new Coding({
        display: "Periodic",
        code: "periodic",
        system: "http://hl7.org/fhir/trigger-type",
    }),
};
/**
 * The type of trigger.
 */
export var TriggerTypeValueSetEnum;
(function (TriggerTypeValueSetEnum) {
    /**
     * data-access-ended: The trigger occurs whenever access to data of a particular type is completed.
     */
    TriggerTypeValueSetEnum["DataAccessEnded"] = "data-access-ended";
    /**
     * data-accessed: The trigger occurs whenever data of a particular type is accessed.
     */
    TriggerTypeValueSetEnum["DataAccessed"] = "data-accessed";
    /**
     * data-added: The trigger occurs whenever data of a particular type is added.
     */
    TriggerTypeValueSetEnum["DataAdded"] = "data-added";
    /**
     * data-changed: The trigger occurs whenever data of a particular type is changed in any way, either added, modified, or removed.
     */
    TriggerTypeValueSetEnum["DataChanged"] = "data-changed";
    /**
     * data-modified: The trigger occurs whenever data of a particular type is modified.
     */
    TriggerTypeValueSetEnum["DataUpdated"] = "data-modified";
    /**
     * data-removed: The trigger occurs whenever data of a particular type is removed.
     */
    TriggerTypeValueSetEnum["DataRemoved"] = "data-removed";
    /**
     * named-event: The trigger occurs in response to a specific named event, and no other information about the trigger is specified. Named events are completely pre-coordinated, and the formal semantics of the trigger are not provided.
     */
    TriggerTypeValueSetEnum["NamedEvent"] = "named-event";
    /**
     * periodic: The trigger occurs at a specific time or periodically as described by a timing or schedule. A periodic event cannot have any data elements, but may have a name assigned as a shorthand for the event.
     */
    TriggerTypeValueSetEnum["Periodic"] = "periodic";
})(TriggerTypeValueSetEnum || (TriggerTypeValueSetEnum = {}));
//# sourceMappingURL=TriggerTypeValueSet.js.map