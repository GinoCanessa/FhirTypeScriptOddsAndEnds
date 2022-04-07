import { Coding } from '../strictmodels';
/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export declare const EncounterAdmitSource: {
    /**
     * The patient is a newborn and the encounter will track the baby related activities (as opposed to the Mothers encounter - that may be associated using the newborn encounters partof property)
     */
    encounter_admit_source_BornInHospital: Coding;
    /**
     * The patient has been transferred from the emergency department within the hospital. This is typically used in the transition to an inpatient encounter
     */
    encounter_admit_source_FromAccidentEmergencyDepartment: Coding;
    /**
     * The patient has been admitted due to a referred from a General Practitioner.
     */
    encounter_admit_source_GeneralPractitionerReferral: Coding;
    /**
     * The Patient has been transferred from another hospital for this encounter.
     */
    encounter_admit_source_TransferredFromOtherHospital: Coding;
    /**
     * The patient has been admitted due to a referred from a Specialist (as opposed to a General Practitioner).
     */
    encounter_admit_source_MedicalPractitionerPhysicianReferral: Coding;
    /**
     * The patient has been transferred from a nursing home.
     */
    encounter_admit_source_FromNursingHome: Coding;
    /**
     * The patient has been admitted from a source otherwise not specified here.
     */
    encounter_admit_source_Other: Coding;
    /**
     * The patient has been transferred from an outpatient department within the hospital.
     */
    encounter_admit_source_FromOutpatientDepartment: Coding;
    /**
     * The patient has been transferred from a psychiatric facility.
     */
    encounter_admit_source_FromPsychiatricHospital: Coding;
    /**
     * The patient has been transferred from a rehabilitation facility or clinic.
     */
    encounter_admit_source_FromRehabilitationFacility: Coding;
};
//# sourceMappingURL=EncounterAdmitSource.d.ts.map