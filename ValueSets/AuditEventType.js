/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export var AuditEventType = {
    /**
     * Audit event: Application Activity has taken place
     */
    dicom_dcim_ApplicationActivity: {
        code: "110100",
        display: "Application Activity",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Audit Log has been used
     */
    dicom_dcim_AuditLogUsed: {
        code: "110101",
        display: "Audit Log Used",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Storage of DICOM Instances has begun
     */
    dicom_dcim_BeginTransferringDICOMInstances: {
        code: "110102",
        display: "Begin Transferring DICOM Instances",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: DICOM Instances have been created, read, updated, or deleted
     */
    dicom_dcim_DICOMInstancesAccessed: {
        code: "110103",
        display: "DICOM Instances Accessed",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Storage of DICOM Instances has been completed
     */
    dicom_dcim_DICOMInstancesTransferred: {
        code: "110104",
        display: "DICOM Instances Transferred",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Entire Study has been deleted
     */
    dicom_dcim_DICOMStudyDeleted: {
        code: "110105",
        display: "DICOM Study Deleted",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Data has been exported out of the system
     */
    dicom_dcim_Export: {
        code: "110106",
        display: "Export",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Data has been imported into the system
     */
    dicom_dcim_Import: {
        code: "110107",
        display: "Import",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: System has joined or left network
     */
    dicom_dcim_NetworkEntry: {
        code: "110108",
        display: "Network Entry",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Order has been created, read, updated or deleted
     */
    dicom_dcim_OrderRecord: {
        code: "110109",
        display: "Order Record",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Patient Record has been created, read, updated, or deleted
     */
    dicom_dcim_PatientRecord: {
        code: "110110",
        display: "Patient Record",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Procedure Record has been created, read, updated, or deleted
     */
    dicom_dcim_ProcedureRecord: {
        code: "110111",
        display: "Procedure Record",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Query has been made
     */
    dicom_dcim_Query: {
        code: "110112",
        display: "Query",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: Security Alert has been raised
     */
    dicom_dcim_SecurityAlert: {
        code: "110113",
        display: "Security Alert",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit event: User Authentication has been attempted
     */
    dicom_dcim_UserAuthentication: {
        code: "110114",
        display: "User Authentication",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Occurs when an agent causes the system to obtain and open a record entry for inspection or review.
     */
    iso_21089_lifecycle_AccessViewRecordLifecycleEvent: {
        code: "access",
        display: "Access/View Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent makes any change to record entry content currently residing in storage considered permanent (persistent).
     */
    iso_21089_lifecycle_AmendUpdateRecordLifecycleEvent: {
        code: "amend",
        display: "Amend (Update) Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage.
     */
    iso_21089_lifecycle_ArchiveRecordLifecycleEvent: {
        code: "archive",
        display: "Archive Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content.
     */
    iso_21089_lifecycle_AttestRecordLifecycleEvent: {
        code: "attest",
        display: "Attest Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to decode record entry content from a cipher.
     */
    iso_21089_lifecycle_DecryptRecordLifecycleEvent: {
        code: "decrypt",
        display: "Decrypt Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that might or might not be reversible.
     */
    iso_21089_lifecycle_DeIdentifyAnononymizeRecordLifecycleEvent: {
        code: "deidentify",
        display: "De-Identify (Anononymize) Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use.
     */
    iso_21089_lifecycle_DeprecateRecordLifecycleEvent: {
        code: "deprecate",
        display: "Deprecate Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to permanently erase record entry content from the system.
     */
    iso_21089_lifecycle_DestroyDeleteRecordLifecycleEvent: {
        code: "destroy",
        display: "Destroy/Delete Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to release, transfer, provision access to, or otherwise divulge record entry content.
     */
    iso_21089_lifecycle_DiscloseRecordLifecycleEvent: {
        code: "disclose",
        display: "Disclose Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to encode record entry content in a cipher.
     */
    iso_21089_lifecycle_EncryptRecordLifecycleEvent: {
        code: "encrypt",
        display: "Encrypt Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to selectively pull out a subset of record entry content, based on explicit criteria.
     */
    iso_21089_lifecycle_ExtractRecordLifecycleEvent: {
        code: "extract",
        display: "Extract Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of “duty to preserve”.
     */
    iso_21089_lifecycle_AddLegalHoldRecordLifecycleEvent: {
        code: "hold",
        display: "Add Legal Hold Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to connect related record entries.
     */
    iso_21089_lifecycle_LinkRecordLifecycleEvent: {
        code: "link",
        display: "Link Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to combine or join content from two or more record entries, resulting in a single logical record entry.
     */
    iso_21089_lifecycle_MergeRecordLifecycleEvent: {
        code: "merge",
        display: "Merge Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record.
     */
    iso_21089_lifecycle_OriginateRetainRecordLifecycleEvent: {
        code: "originate",
        display: "Originate/Retain Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible.
     */
    iso_21089_lifecycle_PseudonymizeRecordLifecycleEvent: {
        code: "pseudonymize",
        display: "Pseudonymize Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to recreate or restore full status to record entries previously deleted or deprecated.
     */
    iso_21089_lifecycle_ReActivateRecordLifecycleEvent: {
        code: "reactivate",
        display: "Re-activate Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record.
     */
    iso_21089_lifecycle_ReceiveRetainRecordLifecycleEvent: {
        code: "receive",
        display: "Receive/Retain Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to restore information to data that allows identification of information source and/or information subject.
     */
    iso_21089_lifecycle_ReIdentifyRecordLifecycleEvent: {
        code: "reidentify",
        display: "Re-identify Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to produce and deliver record entry content in a particular form and manner.
     */
    iso_21089_lifecycle_ReportOutputRecordLifecycleEvent: {
        code: "report",
        display: "Report (Output) Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Audit Event: Execution of a RESTful operation as defined by FHIR.
     */
    audit_event_type_RESTfulOperation: {
        code: "rest",
        display: "RESTful Operation",
        system: "http://terminology.hl7.org/CodeSystem/audit-event-type"
    },
    /**
     * Occurs when an agent causes the system to recreate record entries and their content from a previous created archive artefact.
     */
    iso_21089_lifecycle_RestoreRecordLifecycleEvent: {
        code: "restore",
        display: "Restore Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to change the form, language or code system used to represent record entry content.
     */
    iso_21089_lifecycle_TransformTranslateRecordLifecycleEvent: {
        code: "transform",
        display: "Transform/Translate Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to send record entry content from one (EHR/PHR/other) system to another.
     */
    iso_21089_lifecycle_TransmitRecordLifecycleEvent: {
        code: "transmit",
        display: "Transmit Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of “duty to preserve”.
     */
    iso_21089_lifecycle_RemoveLegalHoldRecordLifecycleEvent: {
        code: "unhold",
        display: "Remove Legal Hold Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again.
     */
    iso_21089_lifecycle_UnlinkRecordLifecycleEvent: {
        code: "unlink",
        display: "Unlink Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to reverse a previous record entry merge operation, rendering them separate again.
     */
    iso_21089_lifecycle_UnmergeRecordLifecycleEvent: {
        code: "unmerge",
        display: "Unmerge Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    },
    /**
     * Occurs when an agent causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy.
     */
    iso_21089_lifecycle_VerifyRecordLifecycleEvent: {
        code: "verify",
        display: "Verify Record Lifecycle Event",
        system: "http://terminology.hl7.org/CodeSystem/iso-21089-lifecycle"
    }
};
