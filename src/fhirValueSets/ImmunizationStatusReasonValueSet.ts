// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 */
export const ImmunizationStatusReasonValueSet = {
  ImmunizationStatusReasonValueSet_NoConsentTetanusLowDoseDiphtheriaVaccine: Coding.FromStrict({
    code: "171257003",
    display: "No consent - Tetanus/low dose diphtheria vaccine",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_PertussisVaccineRefused: Coding.FromStrict({
    code: "171265000",
    display: "Pertussis vaccine refused",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentDiphtheriaImmunization: Coding.FromStrict({
    code: "171266004",
    display: "No consent - diphtheria immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentTetanusImmunization: Coding.FromStrict({
    code: "171267008",
    display: "No consent - tetanus immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_PolioImmunizationRefused: Coding.FromStrict({
    code: "171268003",
    display: "Polio immunization refused",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentMeaslesImmunization: Coding.FromStrict({
    code: "171269006",
    display: "No consent - measles immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentRubellaImmunization: Coding.FromStrict({
    code: "171270007",
    display: "No consent - rubella immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentBCG: Coding.FromStrict({
    code: "171271006",
    display: "No consent - BCG",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentInfluenzaImmunization: Coding.FromStrict({
    code: "171272004",
    display: "No consent - influenza immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentForMMR: Coding.FromStrict({
    code: "171280006",
    display: "No consent for MMR",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentForAnyPrimaryImmunization: Coding.FromStrict({
    code: "171283008",
    display: "No consent for any primary immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentPreSchoolVaccinations: Coding.FromStrict({
    code: "171285001",
    display: "No consent - pre-school vaccinations",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentSchoolExitVaccinations: Coding.FromStrict({
    code: "171286000",
    display: "No consent - school exit vaccinations",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentHaemophilusInfluenzaeTypeBImmunization: Coding.FromStrict({
    code: "171291004",
    display: "No consent - Haemophilus influenzae type B immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentPneumococcalImmunization: Coding.FromStrict({
    code: "171292006",
    display: "No consent pneumococcal immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentForMRMeaslesRubellaVaccine: Coding.FromStrict({
    code: "171293001",
    display: "No consent for MR - Measles/rubella vaccine",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentForAnyImmunization: Coding.FromStrict({
    code: "268559007",
    display: "No consent for any immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentForMMR1: Coding.FromStrict({
    code: "310839003",
    display: "No consent for MMR1",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentForSecondMeaslesMumpsAndRubellaVaccine: Coding.FromStrict({
    code: "310840001",
    display: "No consent for second measles, mumps and rubella vaccine",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentDiphtheriaTetanusPertussisImmunization: Coding.FromStrict({
    code: "314768003",
    display: "No consent diphtheria, tetanus, pertussis immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentTetanusPlusDiphtheriaImmunization: Coding.FromStrict({
    code: "314769006",
    display: "No consent tetanus plus diphtheria immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentForMeningitisCImmunization: Coding.FromStrict({
    code: "314936001",
    display: "No consent for meningitis C immunization",
    system: "http://snomed.info/sct"
  }),
  ImmunizationStatusReasonValueSet_NoConsentFor3rdHIBBooster: Coding.FromStrict({
    code: "407598009",
    display: "No consent for 3rd HIB booster",
    system: "http://snomed.info/sct"
  }),
  /**
   * Definition:Testing has shown that the patient already has immunity to the agent targeted by the immunization.
   */
  v3_ActReason_Immunity: Coding.FromStrict({
    code: "IMMUNE",
    display: "immunity",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
  }),
  /**
   * Definition:The patient currently has a medical condition for which the vaccine is contraindicated or for which precaution is warranted.
   */
  v3_ActReason_MedicalPrecaution: Coding.FromStrict({
    code: "MEDPREC",
    display: "medical precaution",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
  }),
  /**
   * Definition:There was no supply of the product on hand to perform the service.
   */
  v3_ActReason_ProductOutOfStock: Coding.FromStrict({
    code: "OSTOCK",
    display: "product out of stock",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
  }),
  /**
   * Definition:The patient or their guardian objects to receiving the vaccine.
   */
  v3_ActReason_PatientObjection: Coding.FromStrict({
    code: "PATOBJ",
    display: "patient objection",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
  }),
};
