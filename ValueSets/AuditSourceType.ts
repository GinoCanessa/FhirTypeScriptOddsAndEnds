// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * The type of process where the audit event originated from.
 */
export const AuditSourceType = {
  /**
   * End-user display device, diagnostic device.
   */
  audit_source_type_UserDevice: {
    code: "1",
    display: "User Device",
    system: "http://terminology.hl7.org/CodeSystem/security-source-type"
  } as Coding,
  /**
   * Data acquisition device or instrument.
   */
  audit_source_type_DataInterface: {
    code: "2",
    display: "Data Interface",
    system: "http://terminology.hl7.org/CodeSystem/security-source-type"
  } as Coding,
  /**
   * Web Server process or thread.
   */
  audit_source_type_WebServer: {
    code: "3",
    display: "Web Server",
    system: "http://terminology.hl7.org/CodeSystem/security-source-type"
  } as Coding,
  /**
   * Application Server process or thread.
   */
  audit_source_type_ApplicationServer: {
    code: "4",
    display: "Application Server",
    system: "http://terminology.hl7.org/CodeSystem/security-source-type"
  } as Coding,
  /**
   * Database Server process or thread.
   */
  audit_source_type_DatabaseServer: {
    code: "5",
    display: "Database Server",
    system: "http://terminology.hl7.org/CodeSystem/security-source-type"
  } as Coding,
  /**
   * Security server, e.g. a domain controller.
   */
  audit_source_type_SecurityServer: {
    code: "6",
    display: "Security Server",
    system: "http://terminology.hl7.org/CodeSystem/security-source-type"
  } as Coding,
  /**
   * ISO level 1-3 network component.
   */
  audit_source_type_NetworkDevice: {
    code: "7",
    display: "Network Device",
    system: "http://terminology.hl7.org/CodeSystem/security-source-type"
  } as Coding,
  /**
   * ISO level 4-6 operating software.
   */
  audit_source_type_NetworkRouter: {
    code: "8",
    display: "Network Router",
    system: "http://terminology.hl7.org/CodeSystem/security-source-type"
  } as Coding,
  /**
   * Other kind of device (defined by DICOM, but some other code/system can be used).
   */
  audit_source_type_Other: {
    code: "9",
    display: "Other",
    system: "http://terminology.hl7.org/CodeSystem/security-source-type"
  } as Coding,
};
