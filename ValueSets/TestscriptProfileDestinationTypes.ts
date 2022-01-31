// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.
 */
export const TestscriptProfileDestinationTypes = {
  /**
   * A FHIR server acting as a Structured Data Capture Form Manager.
   */
  testscript_profile_destination_types_FHIRSDCFormManager: {
    code: "FHIR-SDC-FormManager",
    display: "FHIR SDC FormManager",
    system: "http://terminology.hl7.org/CodeSystem/testscript-profile-destination-types"
  } as Coding,
  /**
   * A FHIR server acting as a Structured Data Capture Form Processor.
   */
  testscript_profile_destination_types_FHIRSDCFormProcessor: {
    code: "FHIR-SDC-FormProcessor",
    display: "FHIR SDC FormProcessor",
    system: "http://terminology.hl7.org/CodeSystem/testscript-profile-destination-types"
  } as Coding,
  /**
   * A FHIR server acting as a Structured Data Capture Form Receiver.
   */
  testscript_profile_destination_types_FHIRSDCFormReceiver: {
    code: "FHIR-SDC-FormReceiver",
    display: "FHIR SDC FormReceiver",
    system: "http://terminology.hl7.org/CodeSystem/testscript-profile-destination-types"
  } as Coding,
  /**
   * General FHIR server used to respond to operations sent from a FHIR client.
   */
  testscript_profile_destination_types_FHIRServer: {
    code: "FHIR-Server",
    display: "FHIR Server",
    system: "http://terminology.hl7.org/CodeSystem/testscript-profile-destination-types"
  } as Coding,
};
