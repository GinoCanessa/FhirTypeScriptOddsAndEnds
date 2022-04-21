import { Coding } from '../fhir.js';
/**
 * This value set includes example Diagnosis Type codes.
 */
export declare const ExDiagnosistypeValueSet: {
    /**
     * admitting: The diagnosis given as the reason why the patient was admitted to the hospital.
     */
    readonly AdmittingDiagnosis: Coding;
    /**
     * clinical: A diagnosis made on the basis of medical signs and patient-reported symptoms, rather than diagnostic tests.
     */
    readonly ClinicalDiagnosis: Coding;
    /**
     * differential: One of a set of the possible diagnoses that could be connected to the signs, symptoms, and lab findings.
     */
    readonly DifferentialDiagnosis: Coding;
    /**
     * discharge: The diagnosis given when the patient is discharged from the hospital.
     */
    readonly DischargeDiagnosis: Coding;
    /**
     * laboratory: A diagnosis based significantly on laboratory reports or test results, rather than the physical examination of the patient.
     */
    readonly LaboratoryDiagnosis: Coding;
    /**
     * nursing: A diagnosis which identifies people's responses to situations in their lives, such as a readiness to change or a willingness to accept assistance.
     */
    readonly NursingDiagnosis: Coding;
    /**
     * prenatal: A diagnosis determined prior to birth.
     */
    readonly PrenatalDiagnosis: Coding;
    /**
     * principal: The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment.
     */
    readonly PrincipalDiagnosis: Coding;
    /**
     * radiology: A diagnosis based primarily on the results from medical imaging studies.
     */
    readonly RadiologyDiagnosis: Coding;
    /**
     * remote: A diagnosis determined using telemedicine techniques.
     */
    readonly RemoteDiagnosis: Coding;
    /**
     * retrospective: The labeling of an illness in a specific historical event using modern knowledge, methods and disease classifications.
     */
    readonly RetrospectiveDiagnosis: Coding;
    /**
     * self: A diagnosis determined by the patient.
     */
    readonly SelfDiagnosis: Coding;
};
/**
 * This value set includes example Diagnosis Type codes.
 */
export declare type ExDiagnosistypeValueSetType = typeof ExDiagnosistypeValueSet;
/**
 * This value set includes example Diagnosis Type codes.
 */
export declare enum ExDiagnosistypeValueSetEnum {
    /**
     * admitting: The diagnosis given as the reason why the patient was admitted to the hospital.
     */
    AdmittingDiagnosis = "admitting",
    /**
     * clinical: A diagnosis made on the basis of medical signs and patient-reported symptoms, rather than diagnostic tests.
     */
    ClinicalDiagnosis = "clinical",
    /**
     * differential: One of a set of the possible diagnoses that could be connected to the signs, symptoms, and lab findings.
     */
    DifferentialDiagnosis = "differential",
    /**
     * discharge: The diagnosis given when the patient is discharged from the hospital.
     */
    DischargeDiagnosis = "discharge",
    /**
     * laboratory: A diagnosis based significantly on laboratory reports or test results, rather than the physical examination of the patient.
     */
    LaboratoryDiagnosis = "laboratory",
    /**
     * nursing: A diagnosis which identifies people's responses to situations in their lives, such as a readiness to change or a willingness to accept assistance.
     */
    NursingDiagnosis = "nursing",
    /**
     * prenatal: A diagnosis determined prior to birth.
     */
    PrenatalDiagnosis = "prenatal",
    /**
     * principal: The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment.
     */
    PrincipalDiagnosis = "principal",
    /**
     * radiology: A diagnosis based primarily on the results from medical imaging studies.
     */
    RadiologyDiagnosis = "radiology",
    /**
     * remote: A diagnosis determined using telemedicine techniques.
     */
    RemoteDiagnosis = "remote",
    /**
     * retrospective: The labeling of an illness in a specific historical event using modern knowledge, methods and disease classifications.
     */
    RetrospectiveDiagnosis = "retrospective",
    /**
     * self: A diagnosis determined by the patient.
     */
    SelfDiagnosis = "self"
}
//# sourceMappingURL=ExDiagnosistypeValueSet.d.ts.map