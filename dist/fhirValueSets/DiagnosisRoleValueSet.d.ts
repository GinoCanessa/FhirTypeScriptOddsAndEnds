import { Coding } from '../fhir.js';
/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export declare const DiagnosisRoleValueSet: {
    /**
     * Code: AD
     */
    readonly AdmissionDiagnosis: Coding;
    /**
     * Code: billing
     */
    readonly Billing: Coding;
    /**
     * Code: CC
     */
    readonly ChiefComplaint: Coding;
    /**
     * Code: CM
     */
    readonly ComorbidityDiagnosis: Coding;
    /**
     * Code: DD
     */
    readonly DischargeDiagnosis: Coding;
    /**
     * Code: post-op
     */
    readonly PostOpDiagnosis: Coding;
    /**
     * Code: pre-op
     */
    readonly PreOpDiagnosis: Coding;
};
/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export declare type DiagnosisRoleValueSetType = typeof DiagnosisRoleValueSet;
/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
export declare enum DiagnosisRoleValueSetEnum {
    /**
     * Code: AD
     */
    AdmissionDiagnosis = "AD",
    /**
     * Code: billing
     */
    Billing = "billing",
    /**
     * Code: CC
     */
    ChiefComplaint = "CC",
    /**
     * Code: CM
     */
    ComorbidityDiagnosis = "CM",
    /**
     * Code: DD
     */
    DischargeDiagnosis = "DD",
    /**
     * Code: post-op
     */
    PostOpDiagnosis = "post-op",
    /**
     * Code: pre-op
     */
    PreOpDiagnosis = "pre-op"
}
//# sourceMappingURL=DiagnosisRoleValueSet.d.ts.map