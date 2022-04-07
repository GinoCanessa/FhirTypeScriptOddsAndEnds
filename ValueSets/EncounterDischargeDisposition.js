/**
 * This value set defines a set of codes that can be used to where the patient left the hospital.
 */
export var EncounterDischargeDisposition = {
    /**
     * The patient self discharged against medical advice.
     */
    encounter_discharge_disposition_LeftAgainstAdvice: {
        code: "aadvice",
        display: "Left against advice",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    },
    /**
     * The patient was discharged and has indicated that they are going to return home afterwards, but not the patient's home - e.g. a family member's home.
     */
    encounter_discharge_disposition_AlternativeHome: {
        code: "alt-home",
        display: "Alternative home",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    },
    /**
     * The patient has deceased during this encounter.
     */
    encounter_discharge_disposition_Expired: {
        code: "exp",
        display: "Expired",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    },
    /**
     * The patient was dicharged and has indicated that they are going to return home afterwards.
     */
    encounter_discharge_disposition_Home: {
        code: "home",
        display: "Home",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    },
    /**
     * The patient has been discharged into palliative care.
     */
    encounter_discharge_disposition_Hospice: {
        code: "hosp",
        display: "Hospice",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    },
    /**
     * The patient has been discharged into long-term care where is likely to be monitored through an ongoing episode-of-care.
     */
    encounter_discharge_disposition_LongTermCare: {
        code: "long",
        display: "Long-term care",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    },
    /**
     * The discharge disposition has not otherwise defined.
     */
    encounter_discharge_disposition_Other: {
        code: "oth",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    },
    /**
     * The patient was transferred to another healthcare facility.
     */
    encounter_discharge_disposition_OtherHealthcareFacility: {
        code: "other-hcf",
        display: "Other healthcare facility",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    },
    /**
     * The patient has been transferred to a psychiatric facility.
     */
    encounter_discharge_disposition_PsychiatricHospital: {
        code: "psy",
        display: "Psychiatric hospital",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    },
    /**
     * The patient was discharged and is to receive post acute care rehabilitation services.
     */
    encounter_discharge_disposition_Rehabilitation: {
        code: "rehab",
        display: "Rehabilitation",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    },
    /**
     * The patient has been discharged to a skilled nursing facility for the patient to receive additional care.
     */
    encounter_discharge_disposition_SkilledNursingFacility: {
        code: "snf",
        display: "Skilled nursing facility",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition"
    }
};
