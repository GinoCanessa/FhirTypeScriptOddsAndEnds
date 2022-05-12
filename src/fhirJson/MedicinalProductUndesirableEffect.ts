// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProductUndesirableEffect

import * as fhir from '../fhirJson.js';


/**
 * Describe the undesirable effects of the medicinal product.
 */
export interface MedicinalProductUndesirableEffect extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProductUndesirableEffect";
  /**
   * The medication for which this is an indication.
   */
  subject?: fhir.Reference[]|undefined;
  /**
   * The symptom, condition or undesirable effect.
   */
  symptomConditionEffect?: fhir.CodeableConcept|undefined;
  /**
   * Classification of the effect.
   */
  classification?: fhir.CodeableConcept|undefined;
  /**
   * The frequency of occurrence of the effect.
   */
  frequencyOfOccurrence?: fhir.CodeableConcept|undefined;
  /**
   * The population group to which this applies.
   */
  population?: fhir.Population[]|undefined;
}
