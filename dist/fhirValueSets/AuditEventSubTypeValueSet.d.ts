import { Coding } from '../fhir.js';
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export declare const AuditEventSubTypeValueSet: {
    /**
     * 110120: Audit event: Application Entity has started
     */
    readonly ApplicationStart: Coding;
    /**
     * 110121: Audit event: Application Entity has stopped
     */
    readonly ApplicationStop: Coding;
    /**
     * 110122: Audit event: User login has been attempted
     */
    readonly Login: Coding;
    /**
     * 110123: Audit event: User logout has been attempted
     */
    readonly Logout: Coding;
    /**
     * 110124: Audit event: Node has been attached
     */
    readonly Attach: Coding;
    /**
     * 110125: Audit event: Node has been detached
     */
    readonly Detach: Coding;
    /**
     * 110126: Audit event: Node Authentication has been attempted
     */
    readonly NodeAuthentication: Coding;
    /**
     * 110127: Audit event: Emergency Override has started
     */
    readonly EmergencyOverrideStarted: Coding;
    /**
     * 110128: Audit event: Network configuration has been changed
     */
    readonly NetworkConfiguration: Coding;
    /**
     * 110129: Audit event: Security configuration has been changed
     */
    readonly SecurityConfiguration: Coding;
    /**
     * 110130: Audit event: Hardware configuration has been changed
     */
    readonly HardwareConfiguration: Coding;
    /**
     * 110131: Audit event: Software configuration has been changed
     */
    readonly SoftwareConfiguration: Coding;
    /**
     * 110132: Audit event: A use of a restricted function has been attempted
     */
    readonly UseOfRestrictedFunction: Coding;
    /**
     * 110133: Audit event: Audit recording has been stopped
     */
    readonly AuditRecordingStopped: Coding;
    /**
     * 110134: Audit event: Audit recording has been started
     */
    readonly AuditRecordingStarted: Coding;
    /**
     * 110135: Audit event: Security attributes of an object have been changed
     */
    readonly ObjectSecurityAttributesChanged: Coding;
    /**
     * 110136: Audit event: Security roles have been changed
     */
    readonly SecurityRolesChanged: Coding;
    /**
     * 110137: Audit event: Security attributes of a user have been changed
     */
    readonly UserSecurityAttributesChanged: Coding;
    /**
     * 110138: Audit event: Emergency Override has Stopped
     */
    readonly EmergencyOverrideStopped: Coding;
    /**
     * 110139: Audit event: Remote Service Operation has Begun
     */
    readonly RemoteServiceOperationStarted: Coding;
    /**
     * 110140: Audit event: Remote Service Operation has Stopped
     */
    readonly RemoteServiceOperationStopped: Coding;
    /**
     * 110141: Audit event: Local Service Operation has Begun
     */
    readonly LocalServiceOperationStarted: Coding;
    /**
     * 110142: Audit event: Local Service Operation Stopped
     */
    readonly LocalServiceOperationStopped: Coding;
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    readonly Batch: Coding;
    /**
     * capabilities: Get a Capability Statement for the system.
     */
    readonly Capabilities: Coding;
    /**
     * create: Create a new resource with a server assigned id.
     */
    readonly Create: Coding;
    /**
     * delete: Delete a resource.
     */
    readonly Delete: Coding;
    /**
     * history: Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    readonly History: Coding;
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    readonly HistoryInstance: Coding;
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    readonly HistorySystem: Coding;
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    readonly HistoryType: Coding;
    /**
     * operation: Perform an operation as defined by an OperationDefinition.
     */
    readonly Operation: Coding;
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    readonly Patch: Coding;
    /**
     * read: Read the current state of the resource.
     */
    readonly Read: Coding;
    /**
     * search: Search a resource type or all resources based on some filter criteria.
     */
    readonly Search: Coding;
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    readonly SearchSystem: Coding;
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    readonly SearchType: Coding;
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    readonly Transaction: Coding;
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    readonly Update: Coding;
    /**
     * vread: Read the state of a specific version of the resource.
     */
    readonly Vread: Coding;
};
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export declare type AuditEventSubTypeValueSetType = typeof AuditEventSubTypeValueSet;
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export declare enum AuditEventSubTypeValueSetEnum {
    /**
     * 110120: Audit event: Application Entity has started
     */
    ApplicationStart = "110120",
    /**
     * 110121: Audit event: Application Entity has stopped
     */
    ApplicationStop = "110121",
    /**
     * 110122: Audit event: User login has been attempted
     */
    Login = "110122",
    /**
     * 110123: Audit event: User logout has been attempted
     */
    Logout = "110123",
    /**
     * 110124: Audit event: Node has been attached
     */
    Attach = "110124",
    /**
     * 110125: Audit event: Node has been detached
     */
    Detach = "110125",
    /**
     * 110126: Audit event: Node Authentication has been attempted
     */
    NodeAuthentication = "110126",
    /**
     * 110127: Audit event: Emergency Override has started
     */
    EmergencyOverrideStarted = "110127",
    /**
     * 110128: Audit event: Network configuration has been changed
     */
    NetworkConfiguration = "110128",
    /**
     * 110129: Audit event: Security configuration has been changed
     */
    SecurityConfiguration = "110129",
    /**
     * 110130: Audit event: Hardware configuration has been changed
     */
    HardwareConfiguration = "110130",
    /**
     * 110131: Audit event: Software configuration has been changed
     */
    SoftwareConfiguration = "110131",
    /**
     * 110132: Audit event: A use of a restricted function has been attempted
     */
    UseOfRestrictedFunction = "110132",
    /**
     * 110133: Audit event: Audit recording has been stopped
     */
    AuditRecordingStopped = "110133",
    /**
     * 110134: Audit event: Audit recording has been started
     */
    AuditRecordingStarted = "110134",
    /**
     * 110135: Audit event: Security attributes of an object have been changed
     */
    ObjectSecurityAttributesChanged = "110135",
    /**
     * 110136: Audit event: Security roles have been changed
     */
    SecurityRolesChanged = "110136",
    /**
     * 110137: Audit event: Security attributes of a user have been changed
     */
    UserSecurityAttributesChanged = "110137",
    /**
     * 110138: Audit event: Emergency Override has Stopped
     */
    EmergencyOverrideStopped = "110138",
    /**
     * 110139: Audit event: Remote Service Operation has Begun
     */
    RemoteServiceOperationStarted = "110139",
    /**
     * 110140: Audit event: Remote Service Operation has Stopped
     */
    RemoteServiceOperationStopped = "110140",
    /**
     * 110141: Audit event: Local Service Operation has Begun
     */
    LocalServiceOperationStarted = "110141",
    /**
     * 110142: Audit event: Local Service Operation Stopped
     */
    LocalServiceOperationStopped = "110142",
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    Batch = "batch",
    /**
     * capabilities: Get a Capability Statement for the system.
     */
    Capabilities = "capabilities",
    /**
     * create: Create a new resource with a server assigned id.
     */
    Create = "create",
    /**
     * delete: Delete a resource.
     */
    Delete = "delete",
    /**
     * history: Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    History = "history",
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    HistoryInstance = "history-instance",
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    HistorySystem = "history-system",
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    HistoryType = "history-type",
    /**
     * operation: Perform an operation as defined by an OperationDefinition.
     */
    Operation = "operation",
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    Patch = "patch",
    /**
     * read: Read the current state of the resource.
     */
    Read = "read",
    /**
     * search: Search a resource type or all resources based on some filter criteria.
     */
    Search = "search",
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    SearchSystem = "search-system",
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    SearchType = "search-type",
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction = "transaction",
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    Update = "update",
    /**
     * vread: Read the state of a specific version of the resource.
     */
    Vread = "vread"
}
//# sourceMappingURL=AuditEventSubTypeValueSet.d.ts.map