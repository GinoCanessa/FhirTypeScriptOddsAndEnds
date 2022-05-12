/**
 * Indicator for type of action performed during the event that generated the event.
 */
export declare enum AuditEventActionValueSetEnum {
    /**
     * C: Create a new database object, such as placing an order.
     */
    Create = "C",
    /**
     * D: Delete items, such as a doctor master file record.
     */
    Delete = "D",
    /**
     * E: Perform a system or application function such as log-on, program execution or use of an object's method, or perform a query/search operation.
     */
    Execute = "E",
    /**
     * R: Display or print data, such as a doctor census.
     */
    ReadViewPrint = "R",
    /**
     * U: Update data, such as revise patient information.
     */
    Update = "U"
}
//# sourceMappingURL=AuditEventActionValueSetEnum.d.ts.map