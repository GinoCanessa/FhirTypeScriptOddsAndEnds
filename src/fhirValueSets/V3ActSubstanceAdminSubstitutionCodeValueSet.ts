// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActSubstanceAdminSubstitutionCode|2014-03-26

import { Coding } from '../fhir.js'

/**
 * No Description Provided
 */
export const V3ActSubstanceAdminSubstitutionCodeValueSet = {
  /**
   * BC: Description: 
   *                         
   * 
   *                         Substitution occurred or is permitted between equivalent Brands but not Generics
   * 
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Zestril  for Prinivil
   *                            Coumadin for Jantoven
   */
  BrandComposition: new Coding({
    display: "brand composition",
    code: "BC",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
  }),
  /**
   * E: Description: Substitution occurred or is permitted with another bioequivalent and therapeutically equivalent product.
   */
  Equivalent: new Coding({
    display: "equivalent",
    code: "E",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
  }),
  /**
   * EC: Description: 
   *                         
   * 
   *                         Substitution occurred or is permitted with another product that is a:
   * 
   *                         
   *                            pharmaceutical alternative containing the same active ingredient but is formulated with different salt, ester
   *                            pharmaceutical equivalent that has the same active ingredient, strength, dosage form and route of administration
   *                         
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            
   *                               Pharmaceutical alternative: Erythromycin Ethylsuccinate for Erythromycin Stearate
   *                            
   *                               Pharmaceutical equivalent: Lisonpril for Zestril
   */
  EquivalentComposition: new Coding({
    display: "equivalent composition",
    code: "EC",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
  }),
  /**
   * F: Description: This substitution was performed or is permitted based on formulary guidelines.
   */
  Formulary: new Coding({
    display: "formulary",
    code: "F",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
  }),
  /**
   * G: Description: Substitution occurred or is permitted between equivalent Generics but not Brands
   * 
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Lisnopril (Lupin Corp) for Lisnopril (Wockhardt Corp)
   */
  GenericComposition: new Coding({
    display: "generic composition",
    code: "G",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
  }),
  /**
   * N: No substitution occurred or is permitted.
   */
  None: new Coding({
    display: "none",
    code: "N",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
  }),
  /**
   * TB: Description: Substitution occurred or is permitted between therapeutically equivalent Brands but not Generics
   * &gt;
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Zantac for Tagamet
   */
  TherapeuticBrand: new Coding({
    display: "therapeutic brand",
    code: "TB",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
  }),
  /**
   * TE: Description: Substitution occurred or is permitted with another product having the same therapeutic objective and safety profile.
   * 
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            ranitidine for Tagamet
   */
  TherapeuticAlternative: new Coding({
    display: "therapeutic alternative",
    code: "TE",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
  }),
  /**
   * TG: Description: Substitution occurred or is permitted between therapeutically equivalent Generics but not Brands
   * &gt;
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Ranitidine  for cimetidine
   */
  TherapeuticGeneric: new Coding({
    display: "therapeutic generic",
    code: "TG",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution",
  }),
} as const;

/**
 * No Description Provided
 */
export type V3ActSubstanceAdminSubstitutionCodeValueSetType = typeof V3ActSubstanceAdminSubstitutionCodeValueSet;

/**
 * No Description Provided
 */
export enum V3ActSubstanceAdminSubstitutionCodeValueSetEnum {
  /**
   * BC: Description: 
   *                         
   * 
   *                         Substitution occurred or is permitted between equivalent Brands but not Generics
   * 
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Zestril  for Prinivil
   *                            Coumadin for Jantoven
   */
  BrandComposition = "BC",
  /**
   * E: Description: Substitution occurred or is permitted with another bioequivalent and therapeutically equivalent product.
   */
  Equivalent = "E",
  /**
   * EC: Description: 
   *                         
   * 
   *                         Substitution occurred or is permitted with another product that is a:
   * 
   *                         
   *                            pharmaceutical alternative containing the same active ingredient but is formulated with different salt, ester
   *                            pharmaceutical equivalent that has the same active ingredient, strength, dosage form and route of administration
   *                         
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            
   *                               Pharmaceutical alternative: Erythromycin Ethylsuccinate for Erythromycin Stearate
   *                            
   *                               Pharmaceutical equivalent: Lisonpril for Zestril
   */
  EquivalentComposition = "EC",
  /**
   * F: Description: This substitution was performed or is permitted based on formulary guidelines.
   */
  Formulary = "F",
  /**
   * G: Description: Substitution occurred or is permitted between equivalent Generics but not Brands
   * 
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Lisnopril (Lupin Corp) for Lisnopril (Wockhardt Corp)
   */
  GenericComposition = "G",
  /**
   * N: No substitution occurred or is permitted.
   */
  None = "N",
  /**
   * TB: Description: Substitution occurred or is permitted between therapeutically equivalent Brands but not Generics
   * &gt;
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Zantac for Tagamet
   */
  TherapeuticBrand = "TB",
  /**
   * TE: Description: Substitution occurred or is permitted with another product having the same therapeutic objective and safety profile.
   * 
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            ranitidine for Tagamet
   */
  TherapeuticAlternative = "TE",
  /**
   * TG: Description: Substitution occurred or is permitted between therapeutically equivalent Generics but not Brands
   * &gt;
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Ranitidine  for cimetidine
   */
  TherapeuticGeneric = "TG",
}
