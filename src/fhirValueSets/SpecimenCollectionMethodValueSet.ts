// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 *  This example value set defines a set of codes that can be used to indicate the method by which a specimen was collected.
 */
export const SpecimenCollectionMethodValueSet = {
  SpecimenCollectionMethodValueSet_TimedUrineCollection: Coding.FromStrict({
    code: "225113003",
    display: "Timed urine collection",
    system: "http://snomed.info/sct"
  }),
  SpecimenCollectionMethodValueSet_FingerPrickSampling: Coding.FromStrict({
    code: "278450005",
    display: "Finger-prick sampling",
    system: "http://snomed.info/sct"
  }),
  SpecimenCollectionMethodValueSet_CollectionOfCoughedSputum: Coding.FromStrict({
    code: "386089008",
    display: "Collection of coughed sputum",
    system: "http://snomed.info/sct"
  }),
  SpecimenCollectionMethodValueSet_UrineSpecimenCollectionCatheterized: Coding.FromStrict({
    code: "70777001",
    display: "Urine specimen collection, catheterized",
    system: "http://snomed.info/sct"
  }),
  SpecimenCollectionMethodValueSet_UrineSpecimenCollectionCleanCatch: Coding.FromStrict({
    code: "73416001",
    display: "Urine specimen collection, clean catch",
    system: "http://snomed.info/sct"
  }),
};