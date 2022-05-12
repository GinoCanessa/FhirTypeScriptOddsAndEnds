// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/event-status|4.0.1
/**
 * Codes identifying the lifecycle stage of an event.
 */
export var EventStatusValueSetEnum;
(function (EventStatusValueSetEnum) {
    /**
     * completed: The event has now concluded.
     */
    EventStatusValueSetEnum["Completed"] = "completed";
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "stopped" rather than "entered-in-error".).
     */
    EventStatusValueSetEnum["EnteredInError"] = "entered-in-error";
    /**
     * in-progress: The event is currently occurring.
     */
    EventStatusValueSetEnum["InProgress"] = "in-progress";
    /**
     * not-done: The event was terminated prior to any activity beyond preparation.  I.e. The 'main' activity has not yet begun.  The boundary between preparatory and the 'main' activity is context-specific.
     */
    EventStatusValueSetEnum["NotDone"] = "not-done";
    /**
     * on-hold: The event has been temporarily stopped but is expected to resume in the future.
     */
    EventStatusValueSetEnum["OnHold"] = "on-hold";
    /**
     * preparation: The core event has not started yet, but some staging activities have begun (e.g. surgical suite preparation).  Preparation stages may be tracked for billing purposes.
     */
    EventStatusValueSetEnum["Preparation"] = "preparation";
    /**
     * stopped: The event was terminated prior to the full completion of the intended activity but after at least some of the 'main' activity (beyond preparation) has occurred.
     */
    EventStatusValueSetEnum["Stopped"] = "stopped";
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this event.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
     */
    EventStatusValueSetEnum["Unknown"] = "unknown";
})(EventStatusValueSetEnum || (EventStatusValueSetEnum = {}));
//# sourceMappingURL=EventStatusValueSetEnum.js.map