// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ex-diagnosis-on-admission|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes example Diagnosis on Admission codes.
 */
export const ExDiagnosisOnAdmissionValueSet = {
    /**
     * n: Diagnosis was not present at time of inpatient admission.
     */
    No: new Coding({
        display: "No",
        code: "n",
        system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission",
    }),
    /**
     * u: Documentation insufficient to determine if condition was present at the time of inpatient admission.
     */
    Unknown: new Coding({
        display: "Unknown",
        code: "u",
        system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission",
    }),
    /**
     * w: Clinically undetermined. Provider unable to clinically determine whether the condition was present at the time of inpatient admission.
     */
    Undetermined: new Coding({
        display: "Undetermined",
        code: "w",
        system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission",
    }),
    /**
     * y: Diagnosis was present at time of inpatient admission.
     */
    Yes: new Coding({
        display: "Yes",
        code: "y",
        system: "http://terminology.hl7.org/CodeSystem/ex-diagnosis-on-admission",
    }),
};
/**
 * This value set includes example Diagnosis on Admission codes.
 */
//# sourceMappingURL=ExDiagnosisOnAdmissionValueSet.js.map