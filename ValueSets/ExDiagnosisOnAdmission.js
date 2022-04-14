"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExDiagnosisOnAdmission = void 0;
/**
 * This value set includes example Diagnosis on Admission codes.
 */
exports.ExDiagnosisOnAdmission = {
    /**
     * Diagnosis was not present at time of inpatient admission.
     */
    ex_diagnosis_on_admission_No: {
        code: "n",
        display: "No",
        system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission"
    },
    /**
     * Documentation insufficient to determine if condition was present at the time of inpatient admission.
     */
    ex_diagnosis_on_admission_Unknown: {
        code: "u",
        display: "Unknown",
        system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission"
    },
    /**
     * Clinically undetermined. Provider unable to clinically determine whether the condition was present at the time of inpatient admission.
     */
    ex_diagnosis_on_admission_Undetermined: {
        code: "w",
        display: "Undetermined",
        system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission"
    },
    /**
     * Diagnosis was present at time of inpatient admission.
     */
    ex_diagnosis_on_admission_Yes: {
        code: "y",
        display: "Yes",
        system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission"
    },
};
//# sourceMappingURL=ExDiagnosisOnAdmission.js.map