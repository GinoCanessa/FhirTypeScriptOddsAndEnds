// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 *  This example value set defines a set of codes that can be used to indicate the method by which a specimen was collected.
 */
export const SpecimenCollectionMethod = {
  SpecimenCollectionMethod_TimedUrineCollection: {
    code: "225113003",
    display: "Timed urine collection",
    system: "http://snomed.info/sct"
  } as Coding,
  SpecimenCollectionMethod_FingerPrickSampling: {
    code: "278450005",
    display: "Finger-prick sampling",
    system: "http://snomed.info/sct"
  } as Coding,
  SpecimenCollectionMethod_CollectionOfCoughedSputum: {
    code: "386089008",
    display: "Collection of coughed sputum",
    system: "http://snomed.info/sct"
  } as Coding,
  SpecimenCollectionMethod_UrineSpecimenCollectionCatheterized: {
    code: "70777001",
    display: "Urine specimen collection, catheterized",
    system: "http://snomed.info/sct"
  } as Coding,
  SpecimenCollectionMethod_UrineSpecimenCollectionCleanCatch: {
    code: "73416001",
    display: "Urine specimen collection, clean catch",
    system: "http://snomed.info/sct"
  } as Coding,
};
