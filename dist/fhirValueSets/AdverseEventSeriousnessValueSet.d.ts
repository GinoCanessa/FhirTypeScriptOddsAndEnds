import { Coding } from '../fhir.js';
/**
 * Overall seriousness of this event for the patient.
 */
export declare const AdverseEventSeriousnessValueSet: {
    /**
     * Non-serious: Non-serious.
     */
    readonly NonSerious: Coding;
    /**
     * Serious: Serious.
     */
    readonly Serious: Coding;
    /**
     * SeriousIsBirthDefect: Is a congenital anomaly/birth defect.
     */
    readonly IsACongenitalAnomalyBirthDefect: Coding;
    /**
     * SeriousIsLifeThreatening: Is Life-threatening.
     */
    readonly IsLifeThreatening: Coding;
    /**
     * SeriousRequiresPreventImpairment: Requires intervention to prevent permanent impairment or damage (i.e., an important medical event that requires medical judgement).
     */
    readonly RequiresInterventionToPreventPermanentImpairment: Coding;
    /**
     * SeriousResultsInDeath: Results in death.
     */
    readonly ResultsInDeath: Coding;
    /**
     * SeriousResultsInDisability: Results in persistent or significant disability/incapacity.
     */
    readonly ResultsInPersistentOrSignificantDisabilityIncapacity: Coding;
    /**
     * SeriousResultsInHospitalization: Requires inpatient hospitalization or causes prolongation of existing hospitalization.
     */
    readonly RequiresOrProlongsInpatientHospitalization: Coding;
};
/**
 * Overall seriousness of this event for the patient.
 */
export declare type AdverseEventSeriousnessValueSetType = typeof AdverseEventSeriousnessValueSet;
/**
 * Overall seriousness of this event for the patient.
 */
export declare enum AdverseEventSeriousnessValueSetEnum {
    /**
     * Non-serious: Non-serious.
     */
    NonSerious = "Non-serious",
    /**
     * Serious: Serious.
     */
    Serious = "Serious",
    /**
     * SeriousIsBirthDefect: Is a congenital anomaly/birth defect.
     */
    IsACongenitalAnomalyBirthDefect = "SeriousIsBirthDefect",
    /**
     * SeriousIsLifeThreatening: Is Life-threatening.
     */
    IsLifeThreatening = "SeriousIsLifeThreatening",
    /**
     * SeriousRequiresPreventImpairment: Requires intervention to prevent permanent impairment or damage (i.e., an important medical event that requires medical judgement).
     */
    RequiresInterventionToPreventPermanentImpairment = "SeriousRequiresPreventImpairment",
    /**
     * SeriousResultsInDeath: Results in death.
     */
    ResultsInDeath = "SeriousResultsInDeath",
    /**
     * SeriousResultsInDisability: Results in persistent or significant disability/incapacity.
     */
    ResultsInPersistentOrSignificantDisabilityIncapacity = "SeriousResultsInDisability",
    /**
     * SeriousResultsInHospitalization: Requires inpatient hospitalization or causes prolongation of existing hospitalization.
     */
    RequiresOrProlongsInpatientHospitalization = "SeriousResultsInHospitalization"
}
//# sourceMappingURL=AdverseEventSeriousnessValueSet.d.ts.map