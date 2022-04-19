// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 */
export const BasicResourceTypeValueSet = {
  /**
   * A financial instrument used to track costs, charges or other amounts.
   */
  basic_resource_type_Account: new Coding({
    code: "account",
    display: "Account",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * The determination of what will be paid against a particular invoice based on coverage, plan rules, etc.
   */
  basic_resource_type_InvoiceAdjudication: new Coding({
    code: "adjudicat",
    display: "Invoice Adjudication",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * An occurrence of a non-care-related event in the healthcare domain, such as approvals, reviews, etc.
   */
  basic_resource_type_AdministrativeActivity: new Coding({
    code: "adminact",
    display: "Administrative Activity",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * An undesired reaction caused by exposure to some agent (e.g. a medication, immunization, food, or environmental agent).
   */
  basic_resource_type_AdverseEvent: new Coding({
    code: "advevent",
    display: "Adverse Event",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * A request that a time be scheduled for a type of service for a specified patient, potentially subject to other constraints
   */
  basic_resource_type_AppointmentRequest: new Coding({
    code: "aptmtreq",
    display: "Appointment Request",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * An assertion of permission for an activity or set of activities to occur, possibly subject to particular limitations; e.g. surgical consent, information disclosure consent, etc.
   */
  basic_resource_type_Consent: new Coding({
    code: "consent",
    display: "Consent",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * The specification of a set of food and/or other nutritional material to be delivered to a patient.
   */
  basic_resource_type_Diet: new Coding({
    code: "diet",
    display: "Diet",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * Record of a situation where a subject was exposed to a substance.  Usually of interest to public health.
   */
  basic_resource_type_Exposure: new Coding({
    code: "exposure",
    display: "Exposure",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * A formalized inquiry into the circumstances surrounding a particular unplanned event or potential event for the purposes of identifying possible causes and contributing factors for the event
   */
  basic_resource_type_Investigation: new Coding({
    code: "investigation",
    display: "Investigation",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * A request for payment for goods and/or services.  Includes the idea of a healthcare insurance claim.
   */
  basic_resource_type_Invoice: new Coding({
    code: "invoice",
    display: "Invoice",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * An adjudication of what would be paid under an insurance plan for a hypothetical claim for goods or services
   */
  basic_resource_type_Predetermination: new Coding({
    code: "predetermine",
    display: "Predetermination",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * A request for a pre-determination of the cost that would be paid under an insurance plan for a hypothetical claim for goods or services
   */
  basic_resource_type_PreDeterminationRequest: new Coding({
    code: "predetreq",
    display: "Pre-determination Request",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * A set of (possibly conditional) steps to be taken to achieve some aim.  Includes study protocols, treatment protocols, emergency protocols, etc.
   */
  basic_resource_type_Protocol: new Coding({
    code: "protocol",
    display: "Protocol",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * A request that care of a particular type be provided to a patient.  Could involve the transfer of care, a consult, etc.
   */
  basic_resource_type_Referral: new Coding({
    code: "referral",
    display: "Referral",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * An investigation to determine information about a particular therapy or product
   */
  basic_resource_type_Study: new Coding({
    code: "study",
    display: "Study",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
  /**
   * The transition of a patient or set of material from one location to another
   */
  basic_resource_type_Transfer: new Coding({
    code: "transfer",
    display: "Transfer",
    system: "http://terminology.hl7.org/CodeSystem/basic-resource-type"
  }),
};
