// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Laterality: SNOMED-CT concepts for 'left', 'right', and 'bilateral'
 */
export const BodysiteLateralityValueSet = {
  BodysiteLateralityValueSet_UnilateralLeft: Coding.FromStrict({
    code: "419161000",
    display: "Unilateral left",
    system: "http://snomed.info/sct"
  }),
  BodysiteLateralityValueSet_UnilateralRight: Coding.FromStrict({
    code: "419465000",
    display: "Unilateral right",
    system: "http://snomed.info/sct"
  }),
  BodysiteLateralityValueSet_Bilateral: Coding.FromStrict({
    code: "51440002",
    display: "Bilateral",
    system: "http://snomed.info/sct"
  }),
};