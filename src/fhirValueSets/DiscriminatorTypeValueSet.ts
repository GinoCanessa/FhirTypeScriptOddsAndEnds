// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * How an element value is interpreted when discrimination is evaluated.
 */
export const DiscriminatorTypeValueSet = {
  /**
   * The slices are differentiated by the presence or absence of the nominated element.
   */
  discriminator_type_Exists: Coding.FromStrict({
    code: "exists",
    display: "Exists",
    system: "http://hl7.org/fhir/discriminator-type"
  }),
  /**
   * The slices have different values in the nominated element, as determined by testing them against the applicable ElementDefinition.pattern[x].
   */
  discriminator_type_Pattern: Coding.FromStrict({
    code: "pattern",
    display: "Pattern",
    system: "http://hl7.org/fhir/discriminator-type"
  }),
  /**
   * The slices are differentiated by conformance of the nominated element to a specified profile. Note that if the path specifies .resolve() then the profile is the target profile on the reference. In this case, validation by the possible profiles is required to differentiate the slices.
   */
  discriminator_type_Profile: Coding.FromStrict({
    code: "profile",
    display: "Profile",
    system: "http://hl7.org/fhir/discriminator-type"
  }),
  /**
   * The slices are differentiated by type of the nominated element.
   */
  discriminator_type_Type: Coding.FromStrict({
    code: "type",
    display: "Type",
    system: "http://hl7.org/fhir/discriminator-type"
  }),
  /**
   * The slices have different values in the nominated element.
   */
  discriminator_type_Value: Coding.FromStrict({
    code: "value",
    display: "Value",
    system: "http://hl7.org/fhir/discriminator-type"
  }),
};