// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Codes identifying the category of observation range.
 */
export const ObservationRangeCategory = {
  /**
   * Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.
   */
  observation_range_category_AbsoluteRange: {
    code: "absolute",
    display: "absolute range",
    system: "http://hl7.org/fhir/observation-range-category"
  } as Coding,
  /**
   * Critical Range for Ordinal and Continuous Observations.
   */
  observation_range_category_CriticalRange: {
    code: "critical",
    display: "critical range",
    system: "http://hl7.org/fhir/observation-range-category"
  } as Coding,
  /**
   * Reference (Normal) Range for Ordinal and Continuous Observations.
   */
  observation_range_category_ReferenceRange: {
    code: "reference",
    display: "reference range",
    system: "http://hl7.org/fhir/observation-range-category"
  } as Coding,
};
