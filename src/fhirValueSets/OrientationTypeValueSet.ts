// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Type for orientation.
 */
export const OrientationTypeValueSet = {
  /**
   * Antisense orientation of reference sequence.
   */
  orientation_type_AntisenseOrientationOfReferenceSeq: new Coding({
    code: "antisense",
    display: "Antisense orientation of referenceSeq",
    system: "http://hl7.org/fhir/orientation-type"
  }),
  /**
   * Sense orientation of reference sequence.
   */
  orientation_type_SenseOrientationOfReferenceSeq: new Coding({
    code: "sense",
    display: "Sense orientation of referenceSeq",
    system: "http://hl7.org/fhir/orientation-type"
  }),
};
