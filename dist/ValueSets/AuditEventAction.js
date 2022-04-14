"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEventAction = void 0;
/**
 * Indicator for type of action performed during the event that generated the event.
 */
exports.AuditEventAction = {
    /**
     * Create a new database object, such as placing an order.
     */
    audit_event_action_Create: {
        code: "C",
        display: "Create",
        system: "http://hl7.org/fhir/audit-event-action"
    },
    /**
     * Delete items, such as a doctor master file record.
     */
    audit_event_action_Delete: {
        code: "D",
        display: "Delete",
        system: "http://hl7.org/fhir/audit-event-action"
    },
    /**
     * Perform a system or application function such as log-on, program execution or use of an object's method, or perform a query/search operation.
     */
    audit_event_action_Execute: {
        code: "E",
        display: "Execute",
        system: "http://hl7.org/fhir/audit-event-action"
    },
    /**
     * Display or print data, such as a doctor census.
     */
    audit_event_action_ReadViewPrint: {
        code: "R",
        display: "Read/View/Print",
        system: "http://hl7.org/fhir/audit-event-action"
    },
    /**
     * Update data, such as revise patient information.
     */
    audit_event_action_Update: {
        code: "U",
        display: "Update",
        system: "http://hl7.org/fhir/audit-event-action"
    },
};
//# sourceMappingURL=AuditEventAction.js.map