// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/servicerequest-category|4.0.1

import { Coding } from '../fhir.js'

/**
 * An example value set of SNOMED CT concepts that can classify a requested service
 */
export const ServicerequestCategoryValueSet = {
  /**
   * Code: 108252007
   */
  LaboratoryProcedure: new Coding({
    display: "Laboratory procedure",
    code: "108252007",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 363679005
   */
  Imaging: new Coding({
    display: "Imaging",
    code: "363679005",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 387713003
   */
  SurgicalProcedure: new Coding({
    display: "Surgical procedure",
    code: "387713003",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 409063005
   */
  Counselling: new Coding({
    display: "Counselling",
    code: "409063005",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 409073007
   */
  Education: new Coding({
    display: "Education",
    code: "409073007",
    system: "http://snomed.info/sct",
  }),
} as const;

/**
 * An example value set of SNOMED CT concepts that can classify a requested service
 */
export type ServicerequestCategoryValueSetType = typeof ServicerequestCategoryValueSet;

/**
 * An example value set of SNOMED CT concepts that can classify a requested service
 */
