import { Coding } from '../strictmodels';
/**
 * The type of process where the audit event originated from.
 */
export declare const AuditSourceType: {
    /**
     * End-user display device, diagnostic device.
     */
    audit_source_type_UserDevice: Coding;
    /**
     * Data acquisition device or instrument.
     */
    audit_source_type_DataInterface: Coding;
    /**
     * Web Server process or thread.
     */
    audit_source_type_WebServer: Coding;
    /**
     * Application Server process or thread.
     */
    audit_source_type_ApplicationServer: Coding;
    /**
     * Database Server process or thread.
     */
    audit_source_type_DatabaseServer: Coding;
    /**
     * Security server, e.g. a domain controller.
     */
    audit_source_type_SecurityServer: Coding;
    /**
     * ISO level 1-3 network component.
     */
    audit_source_type_NetworkDevice: Coding;
    /**
     * ISO level 4-6 operating software.
     */
    audit_source_type_NetworkRouter: Coding;
    /**
     * Other kind of device (defined by DICOM, but some other code/system can be used).
     */
    audit_source_type_Other: Coding;
};
//# sourceMappingURL=AuditSourceType.d.ts.map