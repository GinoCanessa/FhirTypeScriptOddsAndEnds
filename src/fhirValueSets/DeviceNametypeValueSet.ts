// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The type of name the device is referred by.
 */
export const DeviceNametypeValueSet = {
  /**
   * Manufacturer name.
   */
  device_nametype_ManufacturerName: Coding.FromStrict({
    code: "manufacturer-name",
    display: "Manufacturer name",
    system: "http://hl7.org/fhir/device-nametype"
  }),
  /**
   * Model name.
   */
  device_nametype_ModelName: Coding.FromStrict({
    code: "model-name",
    display: "Model name",
    system: "http://hl7.org/fhir/device-nametype"
  }),
  /**
   * other.
   */
  device_nametype_Other: Coding.FromStrict({
    code: "other",
    display: "other",
    system: "http://hl7.org/fhir/device-nametype"
  }),
  /**
   * Patient Reported name.
   */
  device_nametype_PatientReportedName: Coding.FromStrict({
    code: "patient-reported-name",
    display: "Patient Reported name",
    system: "http://hl7.org/fhir/device-nametype"
  }),
  /**
   * UDI Label name.
   */
  device_nametype_UDILabelName: Coding.FromStrict({
    code: "udi-label-name",
    display: "UDI Label name",
    system: "http://hl7.org/fhir/device-nametype"
  }),
  /**
   * User Friendly name.
   */
  device_nametype_UserFriendlyName: Coding.FromStrict({
    code: "user-friendly-name",
    display: "User Friendly name",
    system: "http://hl7.org/fhir/device-nametype"
  }),
};
