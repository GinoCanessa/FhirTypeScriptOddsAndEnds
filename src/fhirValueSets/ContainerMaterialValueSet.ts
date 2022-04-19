// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes SNOMED CT codes for materials that specimen containers are made of
 */
export const ContainerMaterialValueSet = {
  ContainerMaterialValueSet_Glass: Coding.FromStrict({
    code: "32039001",
    display: "glass",
    system: "http://snomed.info/sct"
  }),
  ContainerMaterialValueSet_Metal: Coding.FromStrict({
    code: "425620007",
    display: "metal",
    system: "http://snomed.info/sct"
  }),
  ContainerMaterialValueSet_Plastic: Coding.FromStrict({
    code: "61088005",
    display: "plastic",
    system: "http://snomed.info/sct"
  }),
};