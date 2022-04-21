// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/account-status|4.0.1

import { Coding } from '../fhir.js'

/**
 * Indicates whether the account is available to be used.
 */
export const AccountStatusValueSet = {
  /**
   * active: This account is active and may be used.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/account-status",
  }),
  /**
   * entered-in-error: This instance should not have been part of this patient's medical record.
   */
  EnteredInError: new Coding({
    display: "Entered in error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/account-status",
  }),
  /**
   * inactive: This account is inactive and should not be used to track financial information.
   */
  Inactive: new Coding({
    display: "Inactive",
    code: "inactive",
    system: "http://hl7.org/fhir/account-status",
  }),
  /**
   * on-hold: This account is on hold.
   */
  OnHold: new Coding({
    display: "On Hold",
    code: "on-hold",
    system: "http://hl7.org/fhir/account-status",
  }),
  /**
   * unknown: The account status is unknown.
   */
  Unknown: new Coding({
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/account-status",
  }),
} as const;

/**
 * Indicates whether the account is available to be used.
 */
export type AccountStatusValueSetType = typeof AccountStatusValueSet;

/**
 * Indicates whether the account is available to be used.
 */
export enum AccountStatusValueSetEnum {
  /**
   * active: This account is active and may be used.
   */
  Active = "active",
  /**
   * entered-in-error: This instance should not have been part of this patient's medical record.
   */
  EnteredInError = "entered-in-error",
  /**
   * inactive: This account is inactive and should not be used to track financial information.
   */
  Inactive = "inactive",
  /**
   * on-hold: This account is on hold.
   */
  OnHold = "on-hold",
  /**
   * unknown: The account status is unknown.
   */
  Unknown = "unknown",
}
