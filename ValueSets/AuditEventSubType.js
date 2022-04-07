/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 */
export var AuditEventSubType = {
    /**
     * Audit event: Application Entity has started
     */
    dicom_dcim_ApplicationStart: {
        code: "110120",
        display: "Application Start",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Application Entity has stopped
     */
    dicom_dcim_ApplicationStop: {
        code: "110121",
        display: "Application Stop",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: User login has been attempted
     */
    dicom_dcim_Login: {
        code: "110122",
        display: "Login",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: User logout has been attempted
     */
    dicom_dcim_Logout: {
        code: "110123",
        display: "Logout",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Node has been attached
     */
    dicom_dcim_Attach: {
        code: "110124",
        display: "Attach",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Node has been detached
     */
    dicom_dcim_Detach: {
        code: "110125",
        display: "Detach",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Node Authentication has been attempted
     */
    dicom_dcim_NodeAuthentication: {
        code: "110126",
        display: "Node Authentication",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Emergency Override has started
     */
    dicom_dcim_EmergencyOverrideStarted: {
        code: "110127",
        display: "Emergency Override Started",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Network configuration has been changed
     */
    dicom_dcim_NetworkConfiguration: {
        code: "110128",
        display: "Network Configuration",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Security configuration has been changed
     */
    dicom_dcim_SecurityConfiguration: {
        code: "110129",
        display: "Security Configuration",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Hardware configuration has been changed
     */
    dicom_dcim_HardwareConfiguration: {
        code: "110130",
        display: "Hardware Configuration",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Software configuration has been changed
     */
    dicom_dcim_SoftwareConfiguration: {
        code: "110131",
        display: "Software Configuration",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: A use of a restricted function has been attempted
     */
    dicom_dcim_UseOfRestrictedFunction: {
        code: "110132",
        display: "Use of Restricted Function",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Audit recording has been stopped
     */
    dicom_dcim_AuditRecordingStopped: {
        code: "110133",
        display: "Audit Recording Stopped",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Audit recording has been started
     */
    dicom_dcim_AuditRecordingStarted: {
        code: "110134",
        display: "Audit Recording Started",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Security attributes of an object have been changed
     */
    dicom_dcim_ObjectSecurityAttributesChanged: {
        code: "110135",
        display: "Object Security Attributes Changed",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Security roles have been changed
     */
    dicom_dcim_SecurityRolesChanged: {
        code: "110136",
        display: "Security Roles Changed",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Security attributes of a user have been changed
     */
    dicom_dcim_UserSecurityAttributesChanged: {
        code: "110137",
        display: "User security Attributes Changed",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Emergency Override has Stopped
     */
    dicom_dcim_EmergencyOverrideStopped: {
        code: "110138",
        display: "Emergency Override Stopped",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Remote Service Operation has Begun
     */
    dicom_dcim_RemoteServiceOperationStarted: {
        code: "110139",
        display: "Remote Service Operation Started",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Remote Service Operation has Stopped
     */
    dicom_dcim_RemoteServiceOperationStopped: {
        code: "110140",
        display: "Remote Service Operation Stopped",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Local Service Operation has Begun
     */
    dicom_dcim_LocalServiceOperationStarted: {
        code: "110141",
        display: "Local Service Operation Started",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Local Service Operation Stopped
     */
    dicom_dcim_LocalServiceOperationStopped: {
        code: "110142",
        display: "Local Service Operation Stopped",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * perform a set of a separate interactions in a single http operation
     */
    restful_interaction_Batch: {
        code: "batch",
        display: "batch",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Get a Capability Statement for the system.
     */
    restful_interaction_Capabilities: {
        code: "capabilities",
        display: "capabilities",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Create a new resource with a server assigned id.
     */
    restful_interaction_Create: {
        code: "create",
        display: "create",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Delete a resource.
     */
    restful_interaction_Delete: {
        code: "delete",
        display: "delete",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Retrieve the change history for a particular resource, type of resource, or the entire system.
     */
    restful_interaction_History: {
        code: "history",
        display: "history",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Retrieve the change history for a particular resource.
     */
    restful_interaction_HistoryInstance: {
        code: "history-instance",
        display: "history-instance",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Retrieve the change history for all resources on a system.
     */
    restful_interaction_HistorySystem: {
        code: "history-system",
        display: "history-system",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Retrieve the change history for all resources of a particular type.
     */
    restful_interaction_HistoryType: {
        code: "history-type",
        display: "history-type",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Perform an operation as defined by an OperationDefinition.
     */
    restful_interaction_Operation: {
        code: "operation",
        display: "operation",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Update an existing resource by posting a set of changes to it.
     */
    restful_interaction_Patch: {
        code: "patch",
        display: "patch",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Read the current state of the resource.
     */
    restful_interaction_Read: {
        code: "read",
        display: "read",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Search a resource type or all resources based on some filter criteria.
     */
    restful_interaction_Search: {
        code: "search",
        display: "search",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Search all resources based on some filter criteria.
     */
    restful_interaction_SearchSystem: {
        code: "search-system",
        display: "search-system",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Search all resources of the specified type based on some filter criteria.
     */
    restful_interaction_SearchType: {
        code: "search-type",
        display: "search-type",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Update, create or delete a set of resources as a single transaction.
     */
    restful_interaction_Transaction: {
        code: "transaction",
        display: "transaction",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Update an existing resource by its id (or create it if it is new).
     */
    restful_interaction_Update: {
        code: "update",
        display: "update",
        system: "http://hl7.org/fhir/restful-interaction"
    },
    /**
     * Read the state of a specific version of the resource.
     */
    restful_interaction_Vread: {
        code: "vread",
        display: "vread",
        system: "http://hl7.org/fhir/restful-interaction"
    }
};
