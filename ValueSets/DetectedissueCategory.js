/**
 * Kinds of issues or contraindications, such as 'drug-drug interaction', 'duplicate therapy', etc.
 */
export var DetectedissueCategory = {
    /**
     * Identifies types of detected issues regarding the administration or supply of an item to a patient.
     */
    v3_ActCode_ActSuppliedItemDetectedIssueCode: {
        code: "_ActSuppliedItemDetectedIssueCode",
        display: "ActSuppliedItemDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Administration of the proposed therapy may be inappropriate or contraindicated as proposed
     */
    v3_ActCode_AdministrationDetectedIssueCode: {
        code: "_AdministrationDetectedIssueCode",
        display: "AdministrationDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * AppropriatenessDetectedIssueCode
     */
    v3_ActCode_AppropriatenessDetectedIssueCode: {
        code: "_AppropriatenessDetectedIssueCode",
        display: "AppropriatenessDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * InteractionDetectedIssueCode
     */
    v3_ActCode_InteractionDetectedIssueCode: {
        code: "_InteractionDetectedIssueCode",
        display: "InteractionDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Supplying the product at this time may be inappropriate or indicate compliance issues with the associated therapy
     */
    v3_ActCode_SupplyDetectedIssueCode: {
        code: "_SupplyDetectedIssueCode",
        display: "SupplyDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    v3_ActCode_TimingDetectedIssueCode: {
        code: "_TimingDetectedIssueCode",
        display: "TimingDetectedIssueCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The requested action has already been performed and so this request has no effect
     */
    v3_ActCode_AlreadyPerformed: {
        code: "ALLDONE",
        display: "already performed",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy.
     */
    v3_ActCode_EndTooLateAlert: {
        code: "ALRTENDLATE",
        display: "end too late alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition.
     */
    v3_ActCode_StartTooLateAlert: {
        code: "ALRTSTRTLATE",
        display: "start too late alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Description:Proposed therapy may be contraindicated or ineffective based on an existing or recent drug therapy.
     */
    v3_ActCode_DrugActionDetectedIssue: {
        code: "DACT",
        display: "drug action detected issue",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Proposed therapy may interact with an existing or recent drug therapy
     */
    v3_ActCode_DrugInteractionAlert: {
        code: "DRG",
        display: "Drug Interaction Alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy
     */
    v3_ActCode_EndTooLateAlert_2: {
        code: "ENDLATE",
        display: "End Too Late Alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Proposed therapy may interact with certain foods
     */
    v3_ActCode_FoodInteractionAlert: {
        code: "FOOD",
        display: "Food Interaction Alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The therapy being performed is in some way out of alignment with the requested therapy.
     */
    v3_ActCode_FulfillmentAlert: {
        code: "FULFIL",
        display: "fulfillment alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:There should be no actions taken in fulfillment of a request that has been held or suspended.
     */
    v3_ActCode_HeldSuspendedAlert: {
        code: "HELD",
        display: "held/suspended alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Description: While the record was accepted in the repository, there is a more recent version of a record of this type.
     */
    v3_ActCode_RecordRecordedAsHistorical: {
        code: "HISTORIC",
        display: "record recorded as historical",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The therapy action is being performed outside the bounds of the time period requested
     */
    v3_ActCode_OutsideRequestedTime: {
        code: "INTERVAL",
        display: "outside requested time",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The therapy action is being performed too soon after the previous occurrence based on the requested frequency
     */
    v3_ActCode_TooSoonWithinFrequencyBasedOnTheUsage: {
        code: "MINFREQ",
        display: "too soon within frequency based on the usage",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Proposed therapy may interact with existing or recent natural health product therapy
     */
    v3_ActCode_NaturalHealthProductAlert: {
        code: "NHP",
        display: "Natural Health Product Alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Proposed therapy may interact with a non-prescription drug (e.g. alcohol, tobacco, Aspirin)
     */
    v3_ActCode_NonPrescriptionInteractionAlert: {
        code: "NONRX",
        display: "Non-Prescription Interaction Alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The status of the request being fulfilled has changed such that it is no longer actionable.  This may be because the request has expired, has already been completely fulfilled or has been otherwise stopped or disabled.  (Not used for 'suspended' orders.)
     */
    v3_ActCode_NoLongerActionable: {
        code: "NOTACTN",
        display: "no longer actionable",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The therapy being performed is not sufficiently equivalent to the therapy which was requested.
     */
    v3_ActCode_NotEquivalentAlert: {
        code: "NOTEQUIV",
        display: "not equivalent alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The therapy being performed is not generically equivalent (having the identical biological action) to the therapy which was requested.
     */
    v3_ActCode_NotGenericallyEquivalentAlert: {
        code: "NOTEQUIVGEN",
        display: "not generically equivalent alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The therapy being performed is not therapeutically equivalent (having the same overall patient effect) to the therapy which was requested.
     */
    v3_ActCode_NotTherapeuticallyEquivalentAlert: {
        code: "NOTEQUIVTHER",
        display: "not therapeutically equivalent alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.
     */
    v3_ActCode_ViolatesStatedPreferences: {
        code: "PATPREF",
        display: "violates stated preferences",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.  An alternate therapy meeting those constraints is available.
     */
    v3_ActCode_ViolatesStatedPreferencesAlternateAvailable: {
        code: "PATPREFALT",
        display: "violates stated preferences, alternate available",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The same or similar treatment has previously been attempted with the patient without achieving a positive effect.
     */
    v3_ActCode_PreviouslyIneffective: {
        code: "PREVINEF",
        display: "previously ineffective",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition
     */
    v3_ActCode_StartTooLateAlert_2: {
        code: "STRTLATE",
        display: "Start Too Late Alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Description:Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    v3_ActCode_TimingDetectedIssue: {
        code: "TIME",
        display: "timing detected issue",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition:The therapy is being performed at a time which diverges from the time the therapy was requested
     */
    v3_ActCode_EventTimingIncorrectAlert: {
        code: "TIMING",
        display: "event timing incorrect alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * The patient is receiving a subsequent fill significantly later than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    v3_ActCode_RefillTooLateAlert: {
        code: "TOOLATE",
        display: "Refill Too Late Alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * The patient is receiving a subsequent fill significantly earlier than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    v3_ActCode_RefillTooSoonAlert: {
        code: "TOOSOON",
        display: "Refill Too Soon Alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Proposed therapy may interact with an existing or recent therapeutic product
     */
    v3_ActCode_TherapeuticProductAlert: {
        code: "TPROD",
        display: "Therapeutic Product Alert",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    }
};
