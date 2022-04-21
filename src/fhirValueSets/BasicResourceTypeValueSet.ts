// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/basic-resource-type|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 */
export const BasicResourceTypeValueSet = {
  /**
   * account: A financial instrument used to track costs, charges or other amounts.
   */
  Account: new Coding({
    display: "Account",
    code: "account",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * adjudicat: The determination of what will be paid against a particular invoice based on coverage, plan rules, etc.
   */
  InvoiceAdjudication: new Coding({
    display: "Invoice Adjudication",
    code: "adjudicat",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * adminact: An occurrence of a non-care-related event in the healthcare domain, such as approvals, reviews, etc.
   */
  AdministrativeActivity: new Coding({
    display: "Administrative Activity",
    code: "adminact",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * advevent: An undesired reaction caused by exposure to some agent (e.g. a medication, immunization, food, or environmental agent).
   */
  AdverseEvent: new Coding({
    display: "Adverse Event",
    code: "advevent",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * aptmtreq: A request that a time be scheduled for a type of service for a specified patient, potentially subject to other constraints
   */
  AppointmentRequest: new Coding({
    display: "Appointment Request",
    code: "aptmtreq",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * consent: An assertion of permission for an activity or set of activities to occur, possibly subject to particular limitations; e.g. surgical consent, information disclosure consent, etc.
   */
  Consent: new Coding({
    display: "Consent",
    code: "consent",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * diet: The specification of a set of food and/or other nutritional material to be delivered to a patient.
   */
  Diet: new Coding({
    display: "Diet",
    code: "diet",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * exposure: Record of a situation where a subject was exposed to a substance.  Usually of interest to public health.
   */
  Exposure: new Coding({
    display: "Exposure",
    code: "exposure",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * investigation: A formalized inquiry into the circumstances surrounding a particular unplanned event or potential event for the purposes of identifying possible causes and contributing factors for the event
   */
  Investigation: new Coding({
    display: "Investigation",
    code: "investigation",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * invoice: A request for payment for goods and/or services.  Includes the idea of a healthcare insurance claim.
   */
  Invoice: new Coding({
    display: "Invoice",
    code: "invoice",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * predetermine: An adjudication of what would be paid under an insurance plan for a hypothetical claim for goods or services
   */
  Predetermination: new Coding({
    display: "Predetermination",
    code: "predetermine",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * predetreq: A request for a pre-determination of the cost that would be paid under an insurance plan for a hypothetical claim for goods or services
   */
  PreDeterminationRequest: new Coding({
    display: "Pre-determination Request",
    code: "predetreq",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * protocol: A set of (possibly conditional) steps to be taken to achieve some aim.  Includes study protocols, treatment protocols, emergency protocols, etc.
   */
  Protocol: new Coding({
    display: "Protocol",
    code: "protocol",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * referral: A request that care of a particular type be provided to a patient.  Could involve the transfer of care, a consult, etc.
   */
  Referral: new Coding({
    display: "Referral",
    code: "referral",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * study: An investigation to determine information about a particular therapy or product
   */
  Study: new Coding({
    display: "Study",
    code: "study",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
  /**
   * transfer: The transition of a patient or set of material from one location to another
   */
  Transfer: new Coding({
    display: "Transfer",
    code: "transfer",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
  }),
} as const;

/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 */
export type BasicResourceTypeValueSetType = typeof BasicResourceTypeValueSet;

/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 */
export enum BasicResourceTypeValueSetEnum {
  /**
   * account: A financial instrument used to track costs, charges or other amounts.
   */
  Account = "account",
  /**
   * adjudicat: The determination of what will be paid against a particular invoice based on coverage, plan rules, etc.
   */
  InvoiceAdjudication = "adjudicat",
  /**
   * adminact: An occurrence of a non-care-related event in the healthcare domain, such as approvals, reviews, etc.
   */
  AdministrativeActivity = "adminact",
  /**
   * advevent: An undesired reaction caused by exposure to some agent (e.g. a medication, immunization, food, or environmental agent).
   */
  AdverseEvent = "advevent",
  /**
   * aptmtreq: A request that a time be scheduled for a type of service for a specified patient, potentially subject to other constraints
   */
  AppointmentRequest = "aptmtreq",
  /**
   * consent: An assertion of permission for an activity or set of activities to occur, possibly subject to particular limitations; e.g. surgical consent, information disclosure consent, etc.
   */
  Consent = "consent",
  /**
   * diet: The specification of a set of food and/or other nutritional material to be delivered to a patient.
   */
  Diet = "diet",
  /**
   * exposure: Record of a situation where a subject was exposed to a substance.  Usually of interest to public health.
   */
  Exposure = "exposure",
  /**
   * investigation: A formalized inquiry into the circumstances surrounding a particular unplanned event or potential event for the purposes of identifying possible causes and contributing factors for the event
   */
  Investigation = "investigation",
  /**
   * invoice: A request for payment for goods and/or services.  Includes the idea of a healthcare insurance claim.
   */
  Invoice = "invoice",
  /**
   * predetermine: An adjudication of what would be paid under an insurance plan for a hypothetical claim for goods or services
   */
  Predetermination = "predetermine",
  /**
   * predetreq: A request for a pre-determination of the cost that would be paid under an insurance plan for a hypothetical claim for goods or services
   */
  PreDeterminationRequest = "predetreq",
  /**
   * protocol: A set of (possibly conditional) steps to be taken to achieve some aim.  Includes study protocols, treatment protocols, emergency protocols, etc.
   */
  Protocol = "protocol",
  /**
   * referral: A request that care of a particular type be provided to a patient.  Could involve the transfer of care, a consult, etc.
   */
  Referral = "referral",
  /**
   * study: An investigation to determine information about a particular therapy or product
   */
  Study = "study",
  /**
   * transfer: The transition of a patient or set of material from one location to another
   */
  Transfer = "transfer",
}
