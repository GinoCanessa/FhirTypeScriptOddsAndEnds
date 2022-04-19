import { Coding } from '../fhir';
/**
 * Indicator for type of action performed during the event that generated the event.
 */
export declare const AuditEventActionValueSet: {
    /**
     * Create a new database object, such as placing an order.
     */
    audit_event_action_Create: Coding;
    /**
     * Delete items, such as a doctor master file record.
     */
    audit_event_action_Delete: Coding;
    /**
     * Perform a system or application function such as log-on, program execution or use of an object's method, or perform a query/search operation.
     */
    audit_event_action_Execute: Coding;
    /**
     * Display or print data, such as a doctor census.
     */
    audit_event_action_ReadViewPrint: Coding;
    /**
     * Update data, such as revise patient information.
     */
    audit_event_action_Update: Coding;
};
//# sourceMappingURL=AuditEventActionValueSet.d.ts.map