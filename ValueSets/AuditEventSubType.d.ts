import { Coding } from '../strictmodels';
/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export declare const AuditEventSubType: {
    /**
     * Audit event: Application Entity has started
     */
    dicom_dcim_ApplicationStart: Coding;
    /**
     * Audit event: Application Entity has stopped
     */
    dicom_dcim_ApplicationStop: Coding;
    /**
     * Audit event: User login has been attempted
     */
    dicom_dcim_Login: Coding;
    /**
     * Audit event: User logout has been attempted
     */
    dicom_dcim_Logout: Coding;
    /**
     * Audit event: Node has been attached
     */
    dicom_dcim_Attach: Coding;
    /**
     * Audit event: Node has been detached
     */
    dicom_dcim_Detach: Coding;
    /**
     * Audit event: Node Authentication has been attempted
     */
    dicom_dcim_NodeAuthentication: Coding;
    /**
     * Audit event: Emergency Override has started
     */
    dicom_dcim_EmergencyOverrideStarted: Coding;
    /**
     * Audit event: Network configuration has been changed
     */
    dicom_dcim_NetworkConfiguration: Coding;
    /**
     * Audit event: Security configuration has been changed
     */
    dicom_dcim_SecurityConfiguration: Coding;
    /**
     * Audit event: Hardware configuration has been changed
     */
    dicom_dcim_HardwareConfiguration: Coding;
    /**
     * Audit event: Software configuration has been changed
     */
    dicom_dcim_SoftwareConfiguration: Coding;
    /**
     * Audit event: A use of a restricted function has been attempted
     */
    dicom_dcim_UseOfRestrictedFunction: Coding;
    /**
     * Audit event: Audit recording has been stopped
     */
    dicom_dcim_AuditRecordingStopped: Coding;
    /**
     * Audit event: Audit recording has been started
     */
    dicom_dcim_AuditRecordingStarted: Coding;
    /**
     * Audit event: Security attributes of an object have been changed
     */
    dicom_dcim_ObjectSecurityAttributesChanged: Coding;
    /**
     * Audit event: Security roles have been changed
     */
    dicom_dcim_SecurityRolesChanged: Coding;
    /**
     * Audit event: Security attributes of a user have been changed
     */
    dicom_dcim_UserSecurityAttributesChanged: Coding;
    /**
     * Audit event: Emergency Override has Stopped
     */
    dicom_dcim_EmergencyOverrideStopped: Coding;
    /**
     * Audit event: Remote Service Operation has Begun
     */
    dicom_dcim_RemoteServiceOperationStarted: Coding;
    /**
     * Audit event: Remote Service Operation has Stopped
     */
    dicom_dcim_RemoteServiceOperationStopped: Coding;
    /**
     * Audit event: Local Service Operation has Begun
     */
    dicom_dcim_LocalServiceOperationStarted: Coding;
    /**
     * Audit event: Local Service Operation Stopped
     */
    dicom_dcim_LocalServiceOperationStopped: Coding;
    /**
     * perform a set of a separate interactions in a single http operation
     */
    restful_interaction_Batch: Coding;
    /**
     * Get a Capability Statement for the system.
     */
    restful_interaction_Capabilities: Coding;
    /**
     * Create a new resource with a server assigned id.
     */
    restful_interaction_Create: Coding;
    /**
     * Delete a resource.
     */
    restful_interaction_Delete: Coding;
    /**
     * Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    restful_interaction_History: Coding;
    /**
     * Retrieve the change history for a particular resource.
     */
    restful_interaction_HistoryInstance: Coding;
    /**
     * Retrieve the change history for all resources on a system.
     */
    restful_interaction_HistorySystem: Coding;
    /**
     * Retrieve the change history for all resources of a particular type.
     */
    restful_interaction_HistoryType: Coding;
    /**
     * Perform an operation as defined by an OperationDefinition.
     */
    restful_interaction_Operation: Coding;
    /**
     * Update an existing resource by posting a set of changes to it.
     */
    restful_interaction_Patch: Coding;
    /**
     * Read the current state of the resource.
     */
    restful_interaction_Read: Coding;
    /**
     * Search a resource type or all resources based on some filter criteria.
     */
    restful_interaction_Search: Coding;
    /**
     * Search all resources based on some filter criteria.
     */
    restful_interaction_SearchSystem: Coding;
    /**
     * Search all resources of the specified type based on some filter criteria.
     */
    restful_interaction_SearchType: Coding;
    /**
     * Update, create or delete a set of resources as a single transaction.
     */
    restful_interaction_Transaction: Coding;
    /**
     * Update an existing resource by its id (or create it if it is new).
     */
    restful_interaction_Update: Coding;
    /**
     * Read the state of a specific version of the resource.
     */
    restful_interaction_Vread: Coding;
};
//# sourceMappingURL=AuditEventSubType.d.ts.map