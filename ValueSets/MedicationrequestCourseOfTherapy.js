/**
 * MedicationRequest Course of Therapy Codes
 */
export var MedicationrequestCourseOfTherapy = {
    /**
     * A medication which the patient is only expected to consume for the duration of the current order and which is not expected to be renewed.
     */
    medicationrequest_course_of_therapy_ShortCourseAcuteTherapy: {
        code: "acute",
        display: "Short course (acute) therapy",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy"
    },
    /**
     * A medication which is expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped.
     */
    medicationrequest_course_of_therapy_ContinuousLongTermTherapy: {
        code: "continuous",
        display: "Continuous long term therapy",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy"
    },
    /**
     * A medication which is expected to be used on a part time basis at certain times of the year
     */
    medicationrequest_course_of_therapy_Seasonal: {
        code: "seasonal",
        display: "Seasonal",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy"
    }
};
