/**
 * The type of process where the audit event originated from.
 */
export declare enum AuditSourceTypeValueSetEnum {
    /**
     * 1: End-user display device, diagnostic device.
     */
    UserDevice = "1",
    /**
     * 2: Data acquisition device or instrument.
     */
    DataInterface = "2",
    /**
     * 3: Web Server process or thread.
     */
    WebServer = "3",
    /**
     * 4: Application Server process or thread.
     */
    ApplicationServer = "4",
    /**
     * 5: Database Server process or thread.
     */
    DatabaseServer = "5",
    /**
     * 6: Security server, e.g. a domain controller.
     */
    SecurityServer = "6",
    /**
     * 7: ISO level 1-3 network component.
     */
    NetworkDevice = "7",
    /**
     * 8: ISO level 4-6 operating software.
     */
    NetworkRouter = "8",
    /**
     * 9: Other kind of device (defined by DICOM, but some other code/system can be used).
     */
    Other = "9"
}
//# sourceMappingURL=AuditSourceTypeValueSetEnum.d.ts.map