/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export declare enum DetectedissueCategoryValueSetEnum {
    /**
     * _ActSuppliedItemDetectedIssueCode: Identifies types of detected issues regarding the administration or supply of an item to a patient.
     */
    ActSuppliedItemDetectedIssueCode = "_ActSuppliedItemDetectedIssueCode",
    /**
     * _AdministrationDetectedIssueCode: Administration of the proposed therapy may be inappropriate or contraindicated as proposed
     */
    AdministrationDetectedIssueCode = "_AdministrationDetectedIssueCode",
    /**
     * _AppropriatenessDetectedIssueCode: AppropriatenessDetectedIssueCode
     */
    AppropriatenessDetectedIssueCode = "_AppropriatenessDetectedIssueCode",
    /**
     * _InteractionDetectedIssueCode: InteractionDetectedIssueCode
     */
    InteractionDetectedIssueCode = "_InteractionDetectedIssueCode",
    /**
     * _SupplyDetectedIssueCode: Supplying the product at this time may be inappropriate or indicate compliance issues with the associated therapy
     */
    SupplyDetectedIssueCode = "_SupplyDetectedIssueCode",
    /**
     * _TimingDetectedIssueCode: Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    TimingDetectedIssueCode = "_TimingDetectedIssueCode",
    /**
     * ALLDONE: Definition:The requested action has already been performed and so this request has no effect
     */
    AlreadyPerformed = "ALLDONE",
    /**
     * ALRTENDLATE: Definition:Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy.
     */
    EndTooLateAlert = "ALRTENDLATE",
    /**
     * ALRTSTRTLATE: Definition:Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition.
     */
    StartTooLateAlert = "ALRTSTRTLATE",
    /**
     * DACT: Description:Proposed therapy may be contraindicated or ineffective based on an existing or recent drug therapy.
     */
    DrugActionDetectedIssue = "DACT",
    /**
     * DRG: Proposed therapy may interact with an existing or recent drug therapy
     */
    DrugInteractionAlert = "DRG",
    /**
     * ENDLATE: Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy
     */
    EndTooLateAlertENDLATE = "ENDLATE",
    /**
     * FOOD: Proposed therapy may interact with certain foods
     */
    FoodInteractionAlert = "FOOD",
    /**
     * FULFIL: Definition:The therapy being performed is in some way out of alignment with the requested therapy.
     */
    FulfillmentAlert = "FULFIL",
    /**
     * HELD: Definition:There should be no actions taken in fulfillment of a request that has been held or suspended.
     */
    HeldSuspendedAlert = "HELD",
    /**
     * HISTORIC: Description: While the record was accepted in the repository, there is a more recent version of a record of this type.
     */
    RecordRecordedAsHistorical = "HISTORIC",
    /**
     * INTERVAL: Definition:The therapy action is being performed outside the bounds of the time period requested
     */
    OutsideRequestedTime = "INTERVAL",
    /**
     * MINFREQ: Definition:The therapy action is being performed too soon after the previous occurrence based on the requested frequency
     */
    TooSoonWithinFrequencyBasedOnTheUsage = "MINFREQ",
    /**
     * NHP: Proposed therapy may interact with existing or recent natural health product therapy
     */
    NaturalHealthProductAlert = "NHP",
    /**
     * NONRX: Proposed therapy may interact with a non-prescription drug (e.g. alcohol, tobacco, Aspirin)
     */
    NonPrescriptionInteractionAlert = "NONRX",
    /**
     * NOTACTN: Definition:The status of the request being fulfilled has changed such that it is no longer actionable.  This may be because the request has expired, has already been completely fulfilled or has been otherwise stopped or disabled.  (Not used for 'suspended' orders.)
     */
    NoLongerActionable = "NOTACTN",
    /**
     * NOTEQUIV: Definition:The therapy being performed is not sufficiently equivalent to the therapy which was requested.
     */
    NotEquivalentAlert = "NOTEQUIV",
    /**
     * NOTEQUIVGEN: Definition:The therapy being performed is not generically equivalent (having the identical biological action) to the therapy which was requested.
     */
    NotGenericallyEquivalentAlert = "NOTEQUIVGEN",
    /**
     * NOTEQUIVTHER: Definition:The therapy being performed is not therapeutically equivalent (having the same overall patient effect) to the therapy which was requested.
     */
    NotTherapeuticallyEquivalentAlert = "NOTEQUIVTHER",
    /**
     * PATPREF: Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.
     */
    ViolatesStatedPreferences = "PATPREF",
    /**
     * PATPREFALT: Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.  An alternate therapy meeting those constraints is available.
     */
    ViolatesStatedPreferencesAlternateAvailable = "PATPREFALT",
    /**
     * PREVINEF: Definition:The same or similar treatment has previously been attempted with the patient without achieving a positive effect.
     */
    PreviouslyIneffective = "PREVINEF",
    /**
     * STRTLATE: Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition
     */
    StartTooLateAlertSTRTLATE = "STRTLATE",
    /**
     * TIME: Description:Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    TimingDetectedIssue = "TIME",
    /**
     * TIMING: Definition:The therapy is being performed at a time which diverges from the time the therapy was requested
     */
    EventTimingIncorrectAlert = "TIMING",
    /**
     * TOOLATE: The patient is receiving a subsequent fill significantly later than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    RefillTooLateAlert = "TOOLATE",
    /**
     * TOOSOON: The patient is receiving a subsequent fill significantly earlier than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    RefillTooSoonAlert = "TOOSOON",
    /**
     * TPROD: Proposed therapy may interact with an existing or recent therapeutic product
     */
    TherapeuticProductAlert = "TPROD"
}
//# sourceMappingURL=DetectedissueCategoryValueSetEnum.d.ts.map