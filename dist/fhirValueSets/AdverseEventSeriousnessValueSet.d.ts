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
//# sourceMappingURL=AdverseEventSeriousnessValueSet.d.ts.map