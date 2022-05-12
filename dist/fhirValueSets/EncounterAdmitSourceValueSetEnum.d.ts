/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export declare enum EncounterAdmitSourceValueSetEnum {
    /**
     * born: The patient is a newborn and the encounter will track the baby related activities (as opposed to the Mothers encounter - that may be associated using the newborn encounters partof property)
     */
    BornInHospital = "born",
    /**
     * emd: The patient has been transferred from the emergency department within the hospital. This is typically used in the transition to an inpatient encounter
     */
    FromAccidentEmergencyDepartment = "emd",
    /**
     * gp: The patient has been admitted due to a referred from a General Practitioner.
     */
    GeneralPractitionerReferral = "gp",
    /**
     * hosp-trans: The Patient has been transferred from another hospital for this encounter.
     */
    TransferredFromOtherHospital = "hosp-trans",
    /**
     * mp: The patient has been admitted due to a referred from a Specialist (as opposed to a General Practitioner).
     */
    MedicalPractitionerPhysicianReferral = "mp",
    /**
     * nursing: The patient has been transferred from a nursing home.
     */
    FromNursingHome = "nursing",
    /**
     * other: The patient has been admitted from a source otherwise not specified here.
     */
    Other = "other",
    /**
     * outp: The patient has been transferred from an outpatient department within the hospital.
     */
    FromOutpatientDepartment = "outp",
    /**
     * psych: The patient has been transferred from a psychiatric facility.
     */
    FromPsychiatricHospital = "psych",
    /**
     * rehab: The patient has been transferred from a rehabilitation facility or clinic.
     */
    FromRehabilitationFacility = "rehab"
}
//# sourceMappingURL=EncounterAdmitSourceValueSetEnum.d.ts.map