// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export const ImmunizationRoute = {
  /**
   * Injection, intradermal
   */
  v3_RouteOfAdministration_InjectionIntradermal: {
    code: "IDINJ",
    display: "Injection, intradermal",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration"
  } as Coding,
  /**
   * Injection, intramuscular
   */
  v3_RouteOfAdministration_InjectionIntramuscular: {
    code: "IM",
    display: "Injection, intramuscular",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration"
  } as Coding,
  /**
   * Injection, intravenous
   */
  v3_RouteOfAdministration_InjectionIntravenous: {
    code: "IVINJ",
    display: "Injection, intravenous",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration"
  } as Coding,
  /**
   * Inhalation, nasal, prongs
   */
  v3_RouteOfAdministration_InhalationNasalCannula: {
    code: "NASINHLC",
    display: "Inhalation, nasal cannula",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration"
  } as Coding,
  /**
   * Injection, subcutaneous
   */
  v3_RouteOfAdministration_InjectionSubcutaneous: {
    code: "SQ",
    display: "Injection, subcutaneous",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration"
  } as Coding,
  /**
   * Transdermal
   */
  v3_RouteOfAdministration_Transdermal: {
    code: "TRNSDERM",
    display: "Transdermal",
    system: "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration"
  } as Coding,
};
