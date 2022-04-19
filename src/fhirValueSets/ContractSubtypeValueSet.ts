// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes sample Contract Subtype codes.
 */
export const ContractSubtypeValueSet = {
  /**
   * Canadian health information disclosure policy.
   */
  contract_subtype_DisclosureCA: Coding.FromStrict({
    code: "disclosure-ca",
    display: "Disclosure-CA",
    system: "http://terminology.hl7.org/CodeSystem/contractsubtypecodes"
  }),
  /**
   * United States health information disclosure policy.
   */
  contract_subtype_DisclosureUS: Coding.FromStrict({
    code: "disclosure-us",
    display: "Disclosure-US",
    system: "http://terminology.hl7.org/CodeSystem/contractsubtypecodes"
  }),
};
