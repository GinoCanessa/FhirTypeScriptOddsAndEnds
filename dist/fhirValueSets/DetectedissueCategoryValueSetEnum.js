// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/detectedissue-category|4.0.1
/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export var DetectedissueCategoryValueSetEnum;
(function (DetectedissueCategoryValueSetEnum) {
    /**
     * _ActSuppliedItemDetectedIssueCode: Identifies types of detected issues regarding the administration or supply of an item to a patient.
     */
    DetectedissueCategoryValueSetEnum["ActSuppliedItemDetectedIssueCode"] = "_ActSuppliedItemDetectedIssueCode";
    /**
     * _AdministrationDetectedIssueCode: Administration of the proposed therapy may be inappropriate or contraindicated as proposed
     */
    DetectedissueCategoryValueSetEnum["AdministrationDetectedIssueCode"] = "_AdministrationDetectedIssueCode";
    /**
     * _AppropriatenessDetectedIssueCode: AppropriatenessDetectedIssueCode
     */
    DetectedissueCategoryValueSetEnum["AppropriatenessDetectedIssueCode"] = "_AppropriatenessDetectedIssueCode";
    /**
     * _InteractionDetectedIssueCode: InteractionDetectedIssueCode
     */
    DetectedissueCategoryValueSetEnum["InteractionDetectedIssueCode"] = "_InteractionDetectedIssueCode";
    /**
     * _SupplyDetectedIssueCode: Supplying the product at this time may be inappropriate or indicate compliance issues with the associated therapy
     */
    DetectedissueCategoryValueSetEnum["SupplyDetectedIssueCode"] = "_SupplyDetectedIssueCode";
    /**
     * _TimingDetectedIssueCode: Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    DetectedissueCategoryValueSetEnum["TimingDetectedIssueCode"] = "_TimingDetectedIssueCode";
    /**
     * ALLDONE: Definition:The requested action has already been performed and so this request has no effect
     */
    DetectedissueCategoryValueSetEnum["AlreadyPerformed"] = "ALLDONE";
    /**
     * ALRTENDLATE: Definition:Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy.
     */
    DetectedissueCategoryValueSetEnum["EndTooLateAlert"] = "ALRTENDLATE";
    /**
     * ALRTSTRTLATE: Definition:Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition.
     */
    DetectedissueCategoryValueSetEnum["StartTooLateAlert"] = "ALRTSTRTLATE";
    /**
     * DACT: Description:Proposed therapy may be contraindicated or ineffective based on an existing or recent drug therapy.
     */
    DetectedissueCategoryValueSetEnum["DrugActionDetectedIssue"] = "DACT";
    /**
     * DRG: Proposed therapy may interact with an existing or recent drug therapy
     */
    DetectedissueCategoryValueSetEnum["DrugInteractionAlert"] = "DRG";
    /**
     * ENDLATE: Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy
     */
    DetectedissueCategoryValueSetEnum["EndTooLateAlertENDLATE"] = "ENDLATE";
    /**
     * FOOD: Proposed therapy may interact with certain foods
     */
    DetectedissueCategoryValueSetEnum["FoodInteractionAlert"] = "FOOD";
    /**
     * FULFIL: Definition:The therapy being performed is in some way out of alignment with the requested therapy.
     */
    DetectedissueCategoryValueSetEnum["FulfillmentAlert"] = "FULFIL";
    /**
     * HELD: Definition:There should be no actions taken in fulfillment of a request that has been held or suspended.
     */
    DetectedissueCategoryValueSetEnum["HeldSuspendedAlert"] = "HELD";
    /**
     * HISTORIC: Description: While the record was accepted in the repository, there is a more recent version of a record of this type.
     */
    DetectedissueCategoryValueSetEnum["RecordRecordedAsHistorical"] = "HISTORIC";
    /**
     * INTERVAL: Definition:The therapy action is being performed outside the bounds of the time period requested
     */
    DetectedissueCategoryValueSetEnum["OutsideRequestedTime"] = "INTERVAL";
    /**
     * MINFREQ: Definition:The therapy action is being performed too soon after the previous occurrence based on the requested frequency
     */
    DetectedissueCategoryValueSetEnum["TooSoonWithinFrequencyBasedOnTheUsage"] = "MINFREQ";
    /**
     * NHP: Proposed therapy may interact with existing or recent natural health product therapy
     */
    DetectedissueCategoryValueSetEnum["NaturalHealthProductAlert"] = "NHP";
    /**
     * NONRX: Proposed therapy may interact with a non-prescription drug (e.g. alcohol, tobacco, Aspirin)
     */
    DetectedissueCategoryValueSetEnum["NonPrescriptionInteractionAlert"] = "NONRX";
    /**
     * NOTACTN: Definition:The status of the request being fulfilled has changed such that it is no longer actionable.  This may be because the request has expired, has already been completely fulfilled or has been otherwise stopped or disabled.  (Not used for 'suspended' orders.)
     */
    DetectedissueCategoryValueSetEnum["NoLongerActionable"] = "NOTACTN";
    /**
     * NOTEQUIV: Definition:The therapy being performed is not sufficiently equivalent to the therapy which was requested.
     */
    DetectedissueCategoryValueSetEnum["NotEquivalentAlert"] = "NOTEQUIV";
    /**
     * NOTEQUIVGEN: Definition:The therapy being performed is not generically equivalent (having the identical biological action) to the therapy which was requested.
     */
    DetectedissueCategoryValueSetEnum["NotGenericallyEquivalentAlert"] = "NOTEQUIVGEN";
    /**
     * NOTEQUIVTHER: Definition:The therapy being performed is not therapeutically equivalent (having the same overall patient effect) to the therapy which was requested.
     */
    DetectedissueCategoryValueSetEnum["NotTherapeuticallyEquivalentAlert"] = "NOTEQUIVTHER";
    /**
     * PATPREF: Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.
     */
    DetectedissueCategoryValueSetEnum["ViolatesStatedPreferences"] = "PATPREF";
    /**
     * PATPREFALT: Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.  An alternate therapy meeting those constraints is available.
     */
    DetectedissueCategoryValueSetEnum["ViolatesStatedPreferencesAlternateAvailable"] = "PATPREFALT";
    /**
     * PREVINEF: Definition:The same or similar treatment has previously been attempted with the patient without achieving a positive effect.
     */
    DetectedissueCategoryValueSetEnum["PreviouslyIneffective"] = "PREVINEF";
    /**
     * STRTLATE: Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition
     */
    DetectedissueCategoryValueSetEnum["StartTooLateAlertSTRTLATE"] = "STRTLATE";
    /**
     * TIME: Description:Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    DetectedissueCategoryValueSetEnum["TimingDetectedIssue"] = "TIME";
    /**
     * TIMING: Definition:The therapy is being performed at a time which diverges from the time the therapy was requested
     */
    DetectedissueCategoryValueSetEnum["EventTimingIncorrectAlert"] = "TIMING";
    /**
     * TOOLATE: The patient is receiving a subsequent fill significantly later than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    DetectedissueCategoryValueSetEnum["RefillTooLateAlert"] = "TOOLATE";
    /**
     * TOOSOON: The patient is receiving a subsequent fill significantly earlier than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    DetectedissueCategoryValueSetEnum["RefillTooSoonAlert"] = "TOOSOON";
    /**
     * TPROD: Proposed therapy may interact with an existing or recent therapeutic product
     */
    DetectedissueCategoryValueSetEnum["TherapeuticProductAlert"] = "TPROD";
})(DetectedissueCategoryValueSetEnum || (DetectedissueCategoryValueSetEnum = {}));
//# sourceMappingURL=DetectedissueCategoryValueSetEnum.js.map