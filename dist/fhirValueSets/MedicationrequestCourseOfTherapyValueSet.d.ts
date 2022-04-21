import { Coding } from '../fhir.js';
/**
 * MedicationRequest Course of Therapy Codes
 */
export declare const MedicationrequestCourseOfTherapyValueSet: {
    /**
     * acute: A medication which the patient is only expected to consume for the duration of the current order and which is not expected to be renewed.
     */
    readonly ShortCourseAcuteTherapy: Coding;
    /**
     * continuous: A medication which is expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped.
     */
    readonly ContinuousLongTermTherapy: Coding;
    /**
     * seasonal: A medication which is expected to be used on a part time basis at certain times of the year
     */
    readonly Seasonal: Coding;
};
/**
 * MedicationRequest Course of Therapy Codes
 */
export declare type MedicationrequestCourseOfTherapyValueSetType = typeof MedicationrequestCourseOfTherapyValueSet;
/**
 * MedicationRequest Course of Therapy Codes
 */
export declare enum MedicationrequestCourseOfTherapyValueSetEnum {
    /**
     * acute: A medication which the patient is only expected to consume for the duration of the current order and which is not expected to be renewed.
     */
    ShortCourseAcuteTherapy = "acute",
    /**
     * continuous: A medication which is expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped.
     */
    ContinuousLongTermTherapy = "continuous",
    /**
     * seasonal: A medication which is expected to be used on a part time basis at certain times of the year
     */
    Seasonal = "seasonal"
}
//# sourceMappingURL=MedicationrequestCourseOfTherapyValueSet.d.ts.map