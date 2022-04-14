"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditSourceType = void 0;
/**
 * The type of process where the audit event originated from.
 */
exports.AuditSourceType = {
    /**
     * End-user display device, diagnostic device.
     */
    audit_source_type_UserDevice: {
        code: "1",
        display: "User Device",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type"
    },
    /**
     * Data acquisition device or instrument.
     */
    audit_source_type_DataInterface: {
        code: "2",
        display: "Data Interface",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type"
    },
    /**
     * Web Server process or thread.
     */
    audit_source_type_WebServer: {
        code: "3",
        display: "Web Server",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type"
    },
    /**
     * Application Server process or thread.
     */
    audit_source_type_ApplicationServer: {
        code: "4",
        display: "Application Server",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type"
    },
    /**
     * Database Server process or thread.
     */
    audit_source_type_DatabaseServer: {
        code: "5",
        display: "Database Server",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type"
    },
    /**
     * Security server, e.g. a domain controller.
     */
    audit_source_type_SecurityServer: {
        code: "6",
        display: "Security Server",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type"
    },
    /**
     * ISO level 1-3 network component.
     */
    audit_source_type_NetworkDevice: {
        code: "7",
        display: "Network Device",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type"
    },
    /**
     * ISO level 4-6 operating software.
     */
    audit_source_type_NetworkRouter: {
        code: "8",
        display: "Network Router",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type"
    },
    /**
     * Other kind of device (defined by DICOM, but some other code/system can be used).
     */
    audit_source_type_Other: {
        code: "9",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type"
    },
};
//# sourceMappingURL=AuditSourceType.js.map