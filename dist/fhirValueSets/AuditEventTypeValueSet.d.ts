import { Coding } from '../fhir';
/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 */
export declare const AuditEventTypeValueSet: {
    /**
     * Audit event: Application Activity has taken place
     */
    dicom_dcim_ApplicationActivity: Coding;
    /**
     * Audit event: Audit Log has been used
     */
    dicom_dcim_AuditLogUsed: Coding;
    /**
     * Audit event: Storage of DICOM Instances has begun
     */
    dicom_dcim_BeginTransferringDICOMInstances: Coding;
    /**
     * Audit event: DICOM Instances have been created, read, updated, or deleted
     */
    dicom_dcim_DICOMInstancesAccessed: Coding;
    /**
     * Audit event: Storage of DICOM Instances has been completed
     */
    dicom_dcim_DICOMInstancesTransferred: Coding;
    /**
     * Audit event: Entire Study has been deleted
     */
    dicom_dcim_DICOMStudyDeleted: Coding;
    /**
     * Audit event: Data has been exported out of the system
     */
    dicom_dcim_Export: Coding;
    /**
     * Audit event: Data has been imported into the system
     */
    dicom_dcim_Import: Coding;
    /**
     * Audit event: System has joined or left network
     */
    dicom_dcim_NetworkEntry: Coding;
    /**
     * Audit event: Order has been created, read, updated or deleted
     */
    dicom_dcim_OrderRecord: Coding;
    /**
     * Audit event: Patient Record has been created, read, updated, or deleted
     */
    dicom_dcim_PatientRecord: Coding;
    /**
     * Audit event: Procedure Record has been created, read, updated, or deleted
     */
    dicom_dcim_ProcedureRecord: Coding;
    /**
     * Audit event: Query has been made
     */
    dicom_dcim_Query: Coding;
    /**
     * Audit event: Security Alert has been raised
     */
    dicom_dcim_SecurityAlert: Coding;
    /**
     * Audit event: User Authentication has been attempted
     */
    dicom_dcim_UserAuthentication: Coding;
    /**
     * Occurs when an agent causes the system to obtain and open a record entry for inspection or review.
     */
    iso_21089_lifecycle_AccessViewRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent makes any change to record entry content currently residing in storage considered permanent (persistent).
     */
    iso_21089_lifecycle_AmendUpdateRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to create and move archive artifacts containing record entry content, typically to long-term offline storage.
     */
    iso_21089_lifecycle_ArchiveRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to capture the agent’s digital signature (or equivalent indication) during formal validation of record entry content.
     */
    iso_21089_lifecycle_AttestRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to decode record entry content from a cipher.
     */
    iso_21089_lifecycle_DecryptRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to scrub record entry content to reduce the association between a set of identifying data and the data subject in a way that might or might not be reversible.
     */
    iso_21089_lifecycle_DeIdentifyAnononymizeRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to tag record entry(ies) as obsolete, erroneous or untrustworthy, to warn against its future use.
     */
    iso_21089_lifecycle_DeprecateRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to permanently erase record entry content from the system.
     */
    iso_21089_lifecycle_DestroyDeleteRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to release, transfer, provision access to, or otherwise divulge record entry content.
     */
    iso_21089_lifecycle_DiscloseRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to encode record entry content in a cipher.
     */
    iso_21089_lifecycle_EncryptRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to selectively pull out a subset of record entry content, based on explicit criteria.
     */
    iso_21089_lifecycle_ExtractRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to tag or otherwise indicate special access management and suspension of record entry deletion/destruction, if deemed relevant to a lawsuit or which are reasonably anticipated to be relevant or to fulfill organizational policy under the legal doctrine of “duty to preserve”.
     */
    iso_21089_lifecycle_AddLegalHoldRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to connect related record entries.
     */
    iso_21089_lifecycle_LinkRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to combine or join content from two or more record entries, resulting in a single logical record entry.
     */
    iso_21089_lifecycle_MergeRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to: a) initiate capture of potential record content, and b) incorporate that content into the storage considered a permanent part of the health record.
     */
    iso_21089_lifecycle_OriginateRetainRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to remove record entry content to reduce the association between a set of identifying data and the data subject in a way that may be reversible.
     */
    iso_21089_lifecycle_PseudonymizeRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to recreate or restore full status to record entries previously deleted or deprecated.
     */
    iso_21089_lifecycle_ReActivateRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to a) initiate capture of data content from elsewhere, and b) incorporate that content into the storage considered a permanent part of the health record.
     */
    iso_21089_lifecycle_ReceiveRetainRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to restore information to data that allows identification of information source and/or information subject.
     */
    iso_21089_lifecycle_ReIdentifyRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to produce and deliver record entry content in a particular form and manner.
     */
    iso_21089_lifecycle_ReportOutputRecordLifecycleEvent: Coding;
    /**
     * Audit Event: Execution of a RESTful operation as defined by FHIR.
     */
    audit_event_type_RESTfulOperation: Coding;
    /**
     * Occurs when an agent causes the system to recreate record entries and their content from a previous created archive artefact.
     */
    iso_21089_lifecycle_RestoreRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to change the form, language or code system used to represent record entry content.
     */
    iso_21089_lifecycle_TransformTranslateRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to send record entry content from one (EHR/PHR/other) system to another.
     */
    iso_21089_lifecycle_TransmitRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to remove a tag or other cues for special access management had required to fulfill organizational policy under the legal doctrine of “duty to preserve”.
     */
    iso_21089_lifecycle_RemoveLegalHoldRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to disconnect two or more record entries previously connected, rendering them separate (disconnected) again.
     */
    iso_21089_lifecycle_UnlinkRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to reverse a previous record entry merge operation, rendering them separate again.
     */
    iso_21089_lifecycle_UnmergeRecordLifecycleEvent: Coding;
    /**
     * Occurs when an agent causes the system to confirm compliance of data or data objects with regulations, requirements, specifications, or other imposed conditions based on organizational policy.
     */
    iso_21089_lifecycle_VerifyRecordLifecycleEvent: Coding;
};
//# sourceMappingURL=AuditEventTypeValueSet.d.ts.map