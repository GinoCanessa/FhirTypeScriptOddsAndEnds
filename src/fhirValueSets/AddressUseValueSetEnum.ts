// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/address-use|4.0.1

/**
 * The use of an address.
 */
export enum AddressUseValueSetEnum {
  /**
   * billing: An address to be used to send bills, invoices, receipts etc.
   */
  Billing = "billing",
  /**
   * home: A communication address at a home.
   */
  Home = "home",
  /**
   * old: This address is no longer in use (or was never correct but retained for records).
   */
  OldIncorrect = "old",
  /**
   * temp: A temporary address. The period can provide more detailed information.
   */
  Temporary = "temp",
  /**
   * work: An office address. First choice for business related contacts during business hours.
   */
  Work = "work",
}