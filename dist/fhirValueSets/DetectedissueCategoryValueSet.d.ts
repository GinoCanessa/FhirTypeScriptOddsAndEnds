import { Coding } from '../fhir';
/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export declare const DetectedissueCategoryValueSet: {
    /**
     * Identifies types of detected issues regarding the administration or supply of an item to a patient.
     */
    v3_ActCode_ActSuppliedItemDetectedIssueCode: Coding;
    /**
     * Administration of the proposed therapy may be inappropriate or contraindicated as proposed
     */
    v3_ActCode_AdministrationDetectedIssueCode: Coding;
    /**
     * AppropriatenessDetectedIssueCode
     */
    v3_ActCode_AppropriatenessDetectedIssueCode: Coding;
    /**
     * InteractionDetectedIssueCode
     */
    v3_ActCode_InteractionDetectedIssueCode: Coding;
    /**
     * Supplying the product at this time may be inappropriate or indicate compliance issues with the associated therapy
     */
    v3_ActCode_SupplyDetectedIssueCode: Coding;
    /**
     * Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    v3_ActCode_TimingDetectedIssueCode: Coding;
    /**
     * Definition:The requested action has already been performed and so this request has no effect
     */
    v3_ActCode_AlreadyPerformed: Coding;
    /**
     * Definition:Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy.
     */
    v3_ActCode_EndTooLateAlert: Coding;
    /**
     * Definition:Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition.
     */
    v3_ActCode_StartTooLateAlert: Coding;
    /**
     * Description:Proposed therapy may be contraindicated or ineffective based on an existing or recent drug therapy.
     */
    v3_ActCode_DrugActionDetectedIssue: Coding;
    /**
     * Proposed therapy may interact with an existing or recent drug therapy
     */
    v3_ActCode_DrugInteractionAlert: Coding;
    /**
     * Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy
     */
    v3_ActCode_EndTooLateAlert_2: Coding;
    /**
     * Proposed therapy may interact with certain foods
     */
    v3_ActCode_FoodInteractionAlert: Coding;
    /**
     * Definition:The therapy being performed is in some way out of alignment with the requested therapy.
     */
    v3_ActCode_FulfillmentAlert: Coding;
    /**
     * Definition:There should be no actions taken in fulfillment of a request that has been held or suspended.
     */
    v3_ActCode_HeldSuspendedAlert: Coding;
    /**
     * Description: While the record was accepted in the repository, there is a more recent version of a record of this type.
     */
    v3_ActCode_RecordRecordedAsHistorical: Coding;
    /**
     * Definition:The therapy action is being performed outside the bounds of the time period requested
     */
    v3_ActCode_OutsideRequestedTime: Coding;
    /**
     * Definition:The therapy action is being performed too soon after the previous occurrence based on the requested frequency
     */
    v3_ActCode_TooSoonWithinFrequencyBasedOnTheUsage: Coding;
    /**
     * Proposed therapy may interact with existing or recent natural health product therapy
     */
    v3_ActCode_NaturalHealthProductAlert: Coding;
    /**
     * Proposed therapy may interact with a non-prescription drug (e.g. alcohol, tobacco, Aspirin)
     */
    v3_ActCode_NonPrescriptionInteractionAlert: Coding;
    /**
     * Definition:The status of the request being fulfilled has changed such that it is no longer actionable.  This may be because the request has expired, has already been completely fulfilled or has been otherwise stopped or disabled.  (Not used for 'suspended' orders.)
     */
    v3_ActCode_NoLongerActionable: Coding;
    /**
     * Definition:The therapy being performed is not sufficiently equivalent to the therapy which was requested.
     */
    v3_ActCode_NotEquivalentAlert: Coding;
    /**
     * Definition:The therapy being performed is not generically equivalent (having the identical biological action) to the therapy which was requested.
     */
    v3_ActCode_NotGenericallyEquivalentAlert: Coding;
    /**
     * Definition:The therapy being performed is not therapeutically equivalent (having the same overall patient effect) to the therapy which was requested.
     */
    v3_ActCode_NotTherapeuticallyEquivalentAlert: Coding;
    /**
     * Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.
     */
    v3_ActCode_ViolatesStatedPreferences: Coding;
    /**
     * Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.  An alternate therapy meeting those constraints is available.
     */
    v3_ActCode_ViolatesStatedPreferencesAlternateAvailable: Coding;
    /**
     * Definition:The same or similar treatment has previously been attempted with the patient without achieving a positive effect.
     */
    v3_ActCode_PreviouslyIneffective: Coding;
    /**
     * Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition
     */
    v3_ActCode_StartTooLateAlert_2: Coding;
    /**
     * Description:Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    v3_ActCode_TimingDetectedIssue: Coding;
    /**
     * Definition:The therapy is being performed at a time which diverges from the time the therapy was requested
     */
    v3_ActCode_EventTimingIncorrectAlert: Coding;
    /**
     * The patient is receiving a subsequent fill significantly later than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    v3_ActCode_RefillTooLateAlert: Coding;
    /**
     * The patient is receiving a subsequent fill significantly earlier than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    v3_ActCode_RefillTooSoonAlert: Coding;
    /**
     * Proposed therapy may interact with an existing or recent therapeutic product
     */
    v3_ActCode_TherapeuticProductAlert: Coding;
};
//# sourceMappingURL=DetectedissueCategoryValueSet.d.ts.map