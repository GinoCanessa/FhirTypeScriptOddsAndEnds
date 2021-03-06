// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationrequest-course-of-therapy|4.0.1
import { Coding } from '../fhir.js';
/**
 * MedicationRequest Course of Therapy Codes
 */
export const MedicationrequestCourseOfTherapyValueSet = {
    /**
     * acute: A medication which the patient is only expected to consume for the duration of the current order and which is not expected to be renewed.
     */
    ShortCourseAcuteTherapy: new Coding({
        display: "Short course (acute) therapy",
        code: "acute",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
    }),
    /**
     * continuous: A medication which is expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped.
     */
    ContinuousLongTermTherapy: new Coding({
        display: "Continuous long term therapy",
        code: "continuous",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
    }),
    /**
     * seasonal: A medication which is expected to be used on a part time basis at certain times of the year
     */
    Seasonal: new Coding({
        display: "Seasonal",
        code: "seasonal",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy",
    }),
};
/**
 * MedicationRequest Course of Therapy Codes
 */
//# sourceMappingURL=MedicationrequestCourseOfTherapyValueSet.js.map