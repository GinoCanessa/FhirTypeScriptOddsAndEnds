"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisRole = void 0;
/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 */
exports.DiagnosisRole = {
    diagnosis_role_AdmissionDiagnosis: {
        code: "AD",
        display: "Admission diagnosis",
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role"
    },
    diagnosis_role_Billing: {
        code: "billing",
        display: "Billing",
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role"
    },
    diagnosis_role_ChiefComplaint: {
        code: "CC",
        display: "Chief complaint",
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role"
    },
    diagnosis_role_ComorbidityDiagnosis: {
        code: "CM",
        display: "Comorbidity diagnosis",
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role"
    },
    diagnosis_role_DischargeDiagnosis: {
        code: "DD",
        display: "Discharge diagnosis",
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role"
    },
    diagnosis_role_PostOpDiagnosis: {
        code: "post-op",
        display: "post-op diagnosis",
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role"
    },
    diagnosis_role_PreOpDiagnosis: {
        code: "pre-op",
        display: "pre-op diagnosis",
        system: "http://terminology.hl7.org/CodeSystem/diagnosis-role"
    },
};
//# sourceMappingURL=DiagnosisRole.js.map