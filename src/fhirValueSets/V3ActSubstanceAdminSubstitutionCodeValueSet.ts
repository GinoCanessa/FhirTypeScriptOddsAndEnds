// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * No Description Provided
 */
export const V3ActSubstanceAdminSubstitutionCodeValueSet = {
  /**
   * Description: 
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
  v3_substanceAdminSubstitution_BrandComposition: new Coding({
    code: "BC",
    display: "brand composition",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
  }),
  /**
   * Description: Substitution occurred or is permitted with another bioequivalent and therapeutically equivalent product.
   */
  v3_substanceAdminSubstitution_Equivalent: new Coding({
    code: "E",
    display: "equivalent",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
  }),
  /**
   * Description: 
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
  v3_substanceAdminSubstitution_EquivalentComposition: new Coding({
    code: "EC",
    display: "equivalent composition",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
  }),
  /**
   * Description: This substitution was performed or is permitted based on formulary guidelines.
   */
  v3_substanceAdminSubstitution_Formulary: new Coding({
    code: "F",
    display: "formulary",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
  }),
  /**
   * Description: Substitution occurred or is permitted between equivalent Generics but not Brands
   * 
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Lisnopril (Lupin Corp) for Lisnopril (Wockhardt Corp)
   */
  v3_substanceAdminSubstitution_GenericComposition: new Coding({
    code: "G",
    display: "generic composition",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
  }),
  /**
   * No substitution occurred or is permitted.
   */
  v3_substanceAdminSubstitution_None: new Coding({
    code: "N",
    display: "none",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
  }),
  /**
   * Description: Substitution occurred or is permitted between therapeutically equivalent Brands but not Generics
   * &gt;
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Zantac for Tagamet
   */
  v3_substanceAdminSubstitution_TherapeuticBrand: new Coding({
    code: "TB",
    display: "therapeutic brand",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
  }),
  /**
   * Description: Substitution occurred or is permitted with another product having the same therapeutic objective and safety profile.
   * 
   *                         
   *                            Examples: 
   *                         
   * 
   *                         
   *                            ranitidine for Tagamet
   */
  v3_substanceAdminSubstitution_TherapeuticAlternative: new Coding({
    code: "TE",
    display: "therapeutic alternative",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
  }),
  /**
   * Description: Substitution occurred or is permitted between therapeutically equivalent Generics but not Brands
   * &gt;
   *                            Examples: 
   *                         
   * 
   *                         
   *                            Ranitidine  for cimetidine
   */
  v3_substanceAdminSubstitution_TherapeuticGeneric: new Coding({
    code: "TG",
    display: "therapeutic generic",
    system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
  }),
};
