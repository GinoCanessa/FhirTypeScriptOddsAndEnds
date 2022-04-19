// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 */
export const EntformulaAdditiveValueSet = {
  /**
   * Modular carbohydrate enteral formula component
   */
  entformula_additive_Carbohydrate: new Coding({
    code: "carbohydrate",
    display: "Carbohydrate",
    system: "http://terminology.hl7.org/CodeSystem/entformula-additive"
  }),
  /**
   * Modular fiber enteral formula component
   */
  entformula_additive_Fiber: new Coding({
    code: "fiber",
    display: "Fiber",
    system: "http://terminology.hl7.org/CodeSystem/entformula-additive"
  }),
  /**
   * Modular lipid enteral formula component
   */
  entformula_additive_Lipid: new Coding({
    code: "lipid",
    display: "Lipid",
    system: "http://terminology.hl7.org/CodeSystem/entformula-additive"
  }),
  /**
   * Modular protein enteral formula component
   */
  entformula_additive_Protein: new Coding({
    code: "protein",
    display: "Protein",
    system: "http://terminology.hl7.org/CodeSystem/entformula-additive"
  }),
  /**
   * Added water
   */
  entformula_additive_Water: new Coding({
    code: "water",
    display: "Water",
    system: "http://terminology.hl7.org/CodeSystem/entformula-additive"
  }),
};
