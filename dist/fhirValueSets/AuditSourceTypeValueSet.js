// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/audit-source-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * The type of process where the audit event originated from.
 */
export const AuditSourceTypeValueSet = {
    /**
     * 1: End-user display device, diagnostic device.
     */
    UserDevice: new Coding({
        display: "User Device",
        code: "1",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
    }),
    /**
     * 2: Data acquisition device or instrument.
     */
    DataInterface: new Coding({
        display: "Data Interface",
        code: "2",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
    }),
    /**
     * 3: Web Server process or thread.
     */
    WebServer: new Coding({
        display: "Web Server",
        code: "3",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
    }),
    /**
     * 4: Application Server process or thread.
     */
    ApplicationServer: new Coding({
        display: "Application Server",
        code: "4",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
    }),
    /**
     * 5: Database Server process or thread.
     */
    DatabaseServer: new Coding({
        display: "Database Server",
        code: "5",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
    }),
    /**
     * 6: Security server, e.g. a domain controller.
     */
    SecurityServer: new Coding({
        display: "Security Server",
        code: "6",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
    }),
    /**
     * 7: ISO level 1-3 network component.
     */
    NetworkDevice: new Coding({
        display: "Network Device",
        code: "7",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
    }),
    /**
     * 8: ISO level 4-6 operating software.
     */
    NetworkRouter: new Coding({
        display: "Network Router",
        code: "8",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
    }),
    /**
     * 9: Other kind of device (defined by DICOM, but some other code/system can be used).
     */
    Other: new Coding({
        display: "Other",
        code: "9",
        system: "http://terminology.hl7.org/CodeSystem/security-source-type",
    }),
};
/**
 * The type of process where the audit event originated from.
 */
export var AuditSourceTypeValueSetEnum;
(function (AuditSourceTypeValueSetEnum) {
    /**
     * 1: End-user display device, diagnostic device.
     */
    AuditSourceTypeValueSetEnum["UserDevice"] = "1";
    /**
     * 2: Data acquisition device or instrument.
     */
    AuditSourceTypeValueSetEnum["DataInterface"] = "2";
    /**
     * 3: Web Server process or thread.
     */
    AuditSourceTypeValueSetEnum["WebServer"] = "3";
    /**
     * 4: Application Server process or thread.
     */
    AuditSourceTypeValueSetEnum["ApplicationServer"] = "4";
    /**
     * 5: Database Server process or thread.
     */
    AuditSourceTypeValueSetEnum["DatabaseServer"] = "5";
    /**
     * 6: Security server, e.g. a domain controller.
     */
    AuditSourceTypeValueSetEnum["SecurityServer"] = "6";
    /**
     * 7: ISO level 1-3 network component.
     */
    AuditSourceTypeValueSetEnum["NetworkDevice"] = "7";
    /**
     * 8: ISO level 4-6 operating software.
     */
    AuditSourceTypeValueSetEnum["NetworkRouter"] = "8";
    /**
     * 9: Other kind of device (defined by DICOM, but some other code/system can be used).
     */
    AuditSourceTypeValueSetEnum["Other"] = "9";
})(AuditSourceTypeValueSetEnum || (AuditSourceTypeValueSetEnum = {}));
//# sourceMappingURL=AuditSourceTypeValueSet.js.map