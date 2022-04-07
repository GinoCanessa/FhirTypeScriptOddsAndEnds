/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 */
export var ImmunizationStatusReason = {
    ImmunizationStatusReason_NoConsentTetanusLowDoseDiphtheriaVaccine: {
        code: "171257003",
        display: "No consent - Tetanus/low dose diphtheria vaccine",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_PertussisVaccineRefused: {
        code: "171265000",
        display: "Pertussis vaccine refused",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentDiphtheriaImmunization: {
        code: "171266004",
        display: "No consent - diphtheria immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentTetanusImmunization: {
        code: "171267008",
        display: "No consent - tetanus immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_PolioImmunizationRefused: {
        code: "171268003",
        display: "Polio immunization refused",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentMeaslesImmunization: {
        code: "171269006",
        display: "No consent - measles immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentRubellaImmunization: {
        code: "171270007",
        display: "No consent - rubella immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentBCG: {
        code: "171271006",
        display: "No consent - BCG",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentInfluenzaImmunization: {
        code: "171272004",
        display: "No consent - influenza immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentForMMR: {
        code: "171280006",
        display: "No consent for MMR",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentForAnyPrimaryImmunization: {
        code: "171283008",
        display: "No consent for any primary immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentPreSchoolVaccinations: {
        code: "171285001",
        display: "No consent - pre-school vaccinations",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentSchoolExitVaccinations: {
        code: "171286000",
        display: "No consent - school exit vaccinations",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentHaemophilusInfluenzaeTypeBImmunization: {
        code: "171291004",
        display: "No consent - Haemophilus influenzae type B immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentPneumococcalImmunization: {
        code: "171292006",
        display: "No consent pneumococcal immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentForMRMeaslesRubellaVaccine: {
        code: "171293001",
        display: "No consent for MR - Measles/rubella vaccine",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentForAnyImmunization: {
        code: "268559007",
        display: "No consent for any immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentForMMR1: {
        code: "310839003",
        display: "No consent for MMR1",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentForSecondMeaslesMumpsAndRubellaVaccine: {
        code: "310840001",
        display: "No consent for second measles, mumps and rubella vaccine",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentDiphtheriaTetanusPertussisImmunization: {
        code: "314768003",
        display: "No consent diphtheria, tetanus, pertussis immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentTetanusPlusDiphtheriaImmunization: {
        code: "314769006",
        display: "No consent tetanus plus diphtheria immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentForMeningitisCImmunization: {
        code: "314936001",
        display: "No consent for meningitis C immunization",
        system: "http://snomed.info/sct"
    },
    ImmunizationStatusReason_NoConsentFor3rdHIBBooster: {
        code: "407598009",
        display: "No consent for 3rd HIB booster",
        system: "http://snomed.info/sct"
    },
    /**
     * Definition:Testing has shown that the patient already has immunity to the agent targeted by the immunization.
     */
    v3_ActReason_Immunity: {
        code: "IMMUNE",
        display: "immunity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The patient currently has a medical condition for which the vaccine is contraindicated or for which precaution is warranted.
     */
    v3_ActReason_MedicalPrecaution: {
        code: "MEDPREC",
        display: "medical precaution",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:There was no supply of the product on hand to perform the service.
     */
    v3_ActReason_ProductOutOfStock: {
        code: "OSTOCK",
        display: "product out of stock",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The patient or their guardian objects to receiving the vaccine.
     */
    v3_ActReason_PatientObjection: {
        code: "PATOBJ",
        display: "patient objection",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    }
};
