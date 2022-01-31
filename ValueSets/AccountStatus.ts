// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * Indicates whether the account is available to be used.
 */
export const AccountStatus = {
  /**
   * This account is active and may be used.
   */
  account_status_Active: {
    code: "active",
    display: "Active",
    system: "http://hl7.org/fhir/account-status"
  } as Coding,
  /**
   * This instance should not have been part of this patient's medical record.
   */
  account_status_EnteredInError: {
    code: "entered-in-error",
    display: "Entered in error",
    system: "http://hl7.org/fhir/account-status"
  } as Coding,
  /**
   * This account is inactive and should not be used to track financial information.
   */
  account_status_Inactive: {
    code: "inactive",
    display: "Inactive",
    system: "http://hl7.org/fhir/account-status"
  } as Coding,
  /**
   * This account is on hold.
   */
  account_status_OnHold: {
    code: "on-hold",
    display: "On Hold",
    system: "http://hl7.org/fhir/account-status"
  } as Coding,
  /**
   * The account status is unknown.
   */
  account_status_Unknown: {
    code: "unknown",
    display: "Unknown",
    system: "http://hl7.org/fhir/account-status"
  } as Coding,
};
