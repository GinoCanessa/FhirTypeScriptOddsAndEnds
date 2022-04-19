// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The use of an address.
 */
export const AddressUseValueSet = {
  /**
   * An address to be used to send bills, invoices, receipts etc.
   */
  address_use_Billing: Coding.FromStrict({
    code: "billing",
    display: "Billing",
    system: "http://hl7.org/fhir/address-use"
  }),
  /**
   * A communication address at a home.
   */
  address_use_Home: Coding.FromStrict({
    code: "home",
    display: "Home",
    system: "http://hl7.org/fhir/address-use"
  }),
  /**
   * This address is no longer in use (or was never correct but retained for records).
   */
  address_use_OldIncorrect: Coding.FromStrict({
    code: "old",
    display: "Old / Incorrect",
    system: "http://hl7.org/fhir/address-use"
  }),
  /**
   * A temporary address. The period can provide more detailed information.
   */
  address_use_Temporary: Coding.FromStrict({
    code: "temp",
    display: "Temporary",
    system: "http://hl7.org/fhir/address-use"
  }),
  /**
   * An office address. First choice for business related contacts during business hours.
   */
  address_use_Work: Coding.FromStrict({
    code: "work",
    display: "Work",
    system: "http://hl7.org/fhir/address-use"
  }),
};
