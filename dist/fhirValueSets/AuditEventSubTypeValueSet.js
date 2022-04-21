// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/audit-event-sub-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export const AuditEventSubTypeValueSet = {
    /**
     * 110120: Audit event: Application Entity has started
     */
    ApplicationStart: new Coding({
        display: "Application Start",
        code: "110120",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110121: Audit event: Application Entity has stopped
     */
    ApplicationStop: new Coding({
        display: "Application Stop",
        code: "110121",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110122: Audit event: User login has been attempted
     */
    Login: new Coding({
        display: "Login",
        code: "110122",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110123: Audit event: User logout has been attempted
     */
    Logout: new Coding({
        display: "Logout",
        code: "110123",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110124: Audit event: Node has been attached
     */
    Attach: new Coding({
        display: "Attach",
        code: "110124",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110125: Audit event: Node has been detached
     */
    Detach: new Coding({
        display: "Detach",
        code: "110125",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110126: Audit event: Node Authentication has been attempted
     */
    NodeAuthentication: new Coding({
        display: "Node Authentication",
        code: "110126",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110127: Audit event: Emergency Override has started
     */
    EmergencyOverrideStarted: new Coding({
        display: "Emergency Override Started",
        code: "110127",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110128: Audit event: Network configuration has been changed
     */
    NetworkConfiguration: new Coding({
        display: "Network Configuration",
        code: "110128",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110129: Audit event: Security configuration has been changed
     */
    SecurityConfiguration: new Coding({
        display: "Security Configuration",
        code: "110129",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110130: Audit event: Hardware configuration has been changed
     */
    HardwareConfiguration: new Coding({
        display: "Hardware Configuration",
        code: "110130",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110131: Audit event: Software configuration has been changed
     */
    SoftwareConfiguration: new Coding({
        display: "Software Configuration",
        code: "110131",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110132: Audit event: A use of a restricted function has been attempted
     */
    UseOfRestrictedFunction: new Coding({
        display: "Use of Restricted Function",
        code: "110132",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110133: Audit event: Audit recording has been stopped
     */
    AuditRecordingStopped: new Coding({
        display: "Audit Recording Stopped",
        code: "110133",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110134: Audit event: Audit recording has been started
     */
    AuditRecordingStarted: new Coding({
        display: "Audit Recording Started",
        code: "110134",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110135: Audit event: Security attributes of an object have been changed
     */
    ObjectSecurityAttributesChanged: new Coding({
        display: "Object Security Attributes Changed",
        code: "110135",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110136: Audit event: Security roles have been changed
     */
    SecurityRolesChanged: new Coding({
        display: "Security Roles Changed",
        code: "110136",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110137: Audit event: Security attributes of a user have been changed
     */
    UserSecurityAttributesChanged: new Coding({
        display: "User security Attributes Changed",
        code: "110137",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110138: Audit event: Emergency Override has Stopped
     */
    EmergencyOverrideStopped: new Coding({
        display: "Emergency Override Stopped",
        code: "110138",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110139: Audit event: Remote Service Operation has Begun
     */
    RemoteServiceOperationStarted: new Coding({
        display: "Remote Service Operation Started",
        code: "110139",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110140: Audit event: Remote Service Operation has Stopped
     */
    RemoteServiceOperationStopped: new Coding({
        display: "Remote Service Operation Stopped",
        code: "110140",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110141: Audit event: Local Service Operation has Begun
     */
    LocalServiceOperationStarted: new Coding({
        display: "Local Service Operation Started",
        code: "110141",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * 110142: Audit event: Local Service Operation Stopped
     */
    LocalServiceOperationStopped: new Coding({
        display: "Local Service Operation Stopped",
        code: "110142",
        system: "http://dicom.nema.org/resources/ontology/DCM",
    }),
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    Batch: new Coding({
        display: "batch",
        code: "batch",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * capabilities: Get a Capability Statement for the system.
     */
    Capabilities: new Coding({
        display: "capabilities",
        code: "capabilities",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * create: Create a new resource with a server assigned id.
     */
    Create: new Coding({
        display: "create",
        code: "create",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * delete: Delete a resource.
     */
    Delete: new Coding({
        display: "delete",
        code: "delete",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * history: Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    History: new Coding({
        display: "history",
        code: "history",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    HistoryInstance: new Coding({
        display: "history-instance",
        code: "history-instance",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    HistorySystem: new Coding({
        display: "history-system",
        code: "history-system",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    HistoryType: new Coding({
        display: "history-type",
        code: "history-type",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * operation: Perform an operation as defined by an OperationDefinition.
     */
    Operation: new Coding({
        display: "operation",
        code: "operation",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    Patch: new Coding({
        display: "patch",
        code: "patch",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * read: Read the current state of the resource.
     */
    Read: new Coding({
        display: "read",
        code: "read",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * search: Search a resource type or all resources based on some filter criteria.
     */
    Search: new Coding({
        display: "search",
        code: "search",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    SearchSystem: new Coding({
        display: "search-system",
        code: "search-system",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    SearchType: new Coding({
        display: "search-type",
        code: "search-type",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction: new Coding({
        display: "transaction",
        code: "transaction",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    Update: new Coding({
        display: "update",
        code: "update",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * vread: Read the state of a specific version of the resource.
     */
    Vread: new Coding({
        display: "vread",
        code: "vread",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
};
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export var AuditEventSubTypeValueSetEnum;
(function (AuditEventSubTypeValueSetEnum) {
    /**
     * 110120: Audit event: Application Entity has started
     */
    AuditEventSubTypeValueSetEnum["ApplicationStart"] = "110120";
    /**
     * 110121: Audit event: Application Entity has stopped
     */
    AuditEventSubTypeValueSetEnum["ApplicationStop"] = "110121";
    /**
     * 110122: Audit event: User login has been attempted
     */
    AuditEventSubTypeValueSetEnum["Login"] = "110122";
    /**
     * 110123: Audit event: User logout has been attempted
     */
    AuditEventSubTypeValueSetEnum["Logout"] = "110123";
    /**
     * 110124: Audit event: Node has been attached
     */
    AuditEventSubTypeValueSetEnum["Attach"] = "110124";
    /**
     * 110125: Audit event: Node has been detached
     */
    AuditEventSubTypeValueSetEnum["Detach"] = "110125";
    /**
     * 110126: Audit event: Node Authentication has been attempted
     */
    AuditEventSubTypeValueSetEnum["NodeAuthentication"] = "110126";
    /**
     * 110127: Audit event: Emergency Override has started
     */
    AuditEventSubTypeValueSetEnum["EmergencyOverrideStarted"] = "110127";
    /**
     * 110128: Audit event: Network configuration has been changed
     */
    AuditEventSubTypeValueSetEnum["NetworkConfiguration"] = "110128";
    /**
     * 110129: Audit event: Security configuration has been changed
     */
    AuditEventSubTypeValueSetEnum["SecurityConfiguration"] = "110129";
    /**
     * 110130: Audit event: Hardware configuration has been changed
     */
    AuditEventSubTypeValueSetEnum["HardwareConfiguration"] = "110130";
    /**
     * 110131: Audit event: Software configuration has been changed
     */
    AuditEventSubTypeValueSetEnum["SoftwareConfiguration"] = "110131";
    /**
     * 110132: Audit event: A use of a restricted function has been attempted
     */
    AuditEventSubTypeValueSetEnum["UseOfRestrictedFunction"] = "110132";
    /**
     * 110133: Audit event: Audit recording has been stopped
     */
    AuditEventSubTypeValueSetEnum["AuditRecordingStopped"] = "110133";
    /**
     * 110134: Audit event: Audit recording has been started
     */
    AuditEventSubTypeValueSetEnum["AuditRecordingStarted"] = "110134";
    /**
     * 110135: Audit event: Security attributes of an object have been changed
     */
    AuditEventSubTypeValueSetEnum["ObjectSecurityAttributesChanged"] = "110135";
    /**
     * 110136: Audit event: Security roles have been changed
     */
    AuditEventSubTypeValueSetEnum["SecurityRolesChanged"] = "110136";
    /**
     * 110137: Audit event: Security attributes of a user have been changed
     */
    AuditEventSubTypeValueSetEnum["UserSecurityAttributesChanged"] = "110137";
    /**
     * 110138: Audit event: Emergency Override has Stopped
     */
    AuditEventSubTypeValueSetEnum["EmergencyOverrideStopped"] = "110138";
    /**
     * 110139: Audit event: Remote Service Operation has Begun
     */
    AuditEventSubTypeValueSetEnum["RemoteServiceOperationStarted"] = "110139";
    /**
     * 110140: Audit event: Remote Service Operation has Stopped
     */
    AuditEventSubTypeValueSetEnum["RemoteServiceOperationStopped"] = "110140";
    /**
     * 110141: Audit event: Local Service Operation has Begun
     */
    AuditEventSubTypeValueSetEnum["LocalServiceOperationStarted"] = "110141";
    /**
     * 110142: Audit event: Local Service Operation Stopped
     */
    AuditEventSubTypeValueSetEnum["LocalServiceOperationStopped"] = "110142";
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    AuditEventSubTypeValueSetEnum["Batch"] = "batch";
    /**
     * capabilities: Get a Capability Statement for the system.
     */
    AuditEventSubTypeValueSetEnum["Capabilities"] = "capabilities";
    /**
     * create: Create a new resource with a server assigned id.
     */
    AuditEventSubTypeValueSetEnum["Create"] = "create";
    /**
     * delete: Delete a resource.
     */
    AuditEventSubTypeValueSetEnum["Delete"] = "delete";
    /**
     * history: Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    AuditEventSubTypeValueSetEnum["History"] = "history";
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    AuditEventSubTypeValueSetEnum["HistoryInstance"] = "history-instance";
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    AuditEventSubTypeValueSetEnum["HistorySystem"] = "history-system";
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    AuditEventSubTypeValueSetEnum["HistoryType"] = "history-type";
    /**
     * operation: Perform an operation as defined by an OperationDefinition.
     */
    AuditEventSubTypeValueSetEnum["Operation"] = "operation";
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    AuditEventSubTypeValueSetEnum["Patch"] = "patch";
    /**
     * read: Read the current state of the resource.
     */
    AuditEventSubTypeValueSetEnum["Read"] = "read";
    /**
     * search: Search a resource type or all resources based on some filter criteria.
     */
    AuditEventSubTypeValueSetEnum["Search"] = "search";
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    AuditEventSubTypeValueSetEnum["SearchSystem"] = "search-system";
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    AuditEventSubTypeValueSetEnum["SearchType"] = "search-type";
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    AuditEventSubTypeValueSetEnum["Transaction"] = "transaction";
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    AuditEventSubTypeValueSetEnum["Update"] = "update";
    /**
     * vread: Read the state of a specific version of the resource.
     */
    AuditEventSubTypeValueSetEnum["Vread"] = "vread";
})(AuditEventSubTypeValueSetEnum || (AuditEventSubTypeValueSetEnum = {}));
//# sourceMappingURL=AuditEventSubTypeValueSet.js.map