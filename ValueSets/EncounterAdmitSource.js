/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export var EncounterAdmitSource = {
    /**
     * The patient is a newborn and the encounter will track the baby related activities (as opposed to the Mothers encounter - that may be associated using the newborn encounters partof property)
     */
    encounter_admit_source_BornInHospital: {
        code: "born",
        display: "Born in hospital",
        system: "http://terminology.hl7.org/CodeSystem/admit-source"
    },
    /**
     * The patient has been transferred from the emergency department within the hospital. This is typically used in the transition to an inpatient encounter
     */
    encounter_admit_source_FromAccidentEmergencyDepartment: {
        code: "emd",
        display: "From accident/emergency department",
        system: "http://terminology.hl7.org/CodeSystem/admit-source"
    },
    /**
     * The patient has been admitted due to a referred from a General Practitioner.
     */
    encounter_admit_source_GeneralPractitionerReferral: {
        code: "gp",
        display: "General Practitioner referral",
        system: "http://terminology.hl7.org/CodeSystem/admit-source"
    },
    /**
     * The Patient has been transferred from another hospital for this encounter.
     */
    encounter_admit_source_TransferredFromOtherHospital: {
        code: "hosp-trans",
        display: "Transferred from other hospital",
        system: "http://terminology.hl7.org/CodeSystem/admit-source"
    },
    /**
     * The patient has been admitted due to a referred from a Specialist (as opposed to a General Practitioner).
     */
    encounter_admit_source_MedicalPractitionerPhysicianReferral: {
        code: "mp",
        display: "Medical Practitioner/physician referral",
        system: "http://terminology.hl7.org/CodeSystem/admit-source"
    },
    /**
     * The patient has been transferred from a nursing home.
     */
    encounter_admit_source_FromNursingHome: {
        code: "nursing",
        display: "From nursing home",
        system: "http://terminology.hl7.org/CodeSystem/admit-source"
    },
    /**
     * The patient has been admitted from a source otherwise not specified here.
     */
    encounter_admit_source_Other: {
        code: "other",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/admit-source"
    },
    /**
     * The patient has been transferred from an outpatient department within the hospital.
     */
    encounter_admit_source_FromOutpatientDepartment: {
        code: "outp",
        display: "From outpatient department",
        system: "http://terminology.hl7.org/CodeSystem/admit-source"
    },
    /**
     * The patient has been transferred from a psychiatric facility.
     */
    encounter_admit_source_FromPsychiatricHospital: {
        code: "psych",
        display: "From psychiatric hospital",
        system: "http://terminology.hl7.org/CodeSystem/admit-source"
    },
    /**
     * The patient has been transferred from a rehabilitation facility or clinic.
     */
    encounter_admit_source_FromRehabilitationFacility: {
        code: "rehab",
        display: "From rehabilitation facility",
        system: "http://terminology.hl7.org/CodeSystem/admit-source"
    }
};
