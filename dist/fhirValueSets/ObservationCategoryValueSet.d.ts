import { Coding } from '../fhir';
/**
 * Observation Category codes.
 */
export declare const ObservationCategoryValueSet: {
    /**
     * Observations that measure or record any bodily activity that enhances or maintains physical fitness and overall health and wellness.  Not under direct supervision of practitioner such as a physical therapist. (e.g., laps swum, steps, sleep data)
     */
    observation_category_Activity: Coding;
    /**
     * Observations generated by physical exam findings including direct observations made by a clinician and use of simple instruments and the result of simple maneuvers performed directly on the patient's body.
     */
    observation_category_Exam: Coding;
    /**
     * Observations generated by imaging. The scope includes observations regarding plain x-ray, ultrasound, CT, MRI, angiography, echocardiography, and nuclear medicine.
     */
    observation_category_Imaging: Coding;
    /**
     * The results of observations generated by laboratories.  Laboratory results are typically generated by laboratories providing analytic services in areas such as chemistry, hematology, serology, histology, cytology, anatomic pathology (including digital pathology), microbiology, and/or virology. These observations are based on analysis of specimens obtained from the patient and submitted to the laboratory.
     */
    observation_category_Laboratory: Coding;
    /**
     * Observations generated by other procedures.  This category includes observations resulting from interventional and non-interventional procedures excluding laboratory and imaging (e.g., cardiology catheterization, endoscopy, electrodiagnostics, etc.).  Procedure results are typically generated by a clinician to provide more granular information about component observations made during a procedure.  An example would be when a gastroenterologist reports the size of a polyp observed during a colonoscopy.
     */
    observation_category_Procedure: Coding;
    /**
     * Social History Observations define the patient's occupational, personal (e.g., lifestyle), social, familial, and environmental history and health risk factors that may impact the patient's health.
     */
    observation_category_SocialHistory: Coding;
    /**
     * Assessment tool/survey instrument observations (e.g., Apgar Scores, Montreal Cognitive Assessment (MoCA)).
     */
    observation_category_Survey: Coding;
    /**
     * Observations generated by non-interventional treatment protocols (e.g. occupational, physical, radiation, nutritional and medication therapy)
     */
    observation_category_Therapy: Coding;
    /**
     *  Clinical observations measure the body's basic functions such as blood pressure, heart rate, respiratory rate, height, weight, body mass index, head circumference, pulse oximetry, temperature, and body surface area.
     */
    observation_category_VitalSigns: Coding;
};
//# sourceMappingURL=ObservationCategoryValueSet.d.ts.map