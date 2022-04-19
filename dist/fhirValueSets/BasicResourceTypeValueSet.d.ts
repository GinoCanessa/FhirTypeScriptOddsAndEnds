import { Coding } from '../fhir';
/**
 * This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR.  Many of the codes listed here will eventually be turned into official resources.  However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here.  Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.
 */
export declare const BasicResourceTypeValueSet: {
    /**
     * A financial instrument used to track costs, charges or other amounts.
     */
    basic_resource_type_Account: Coding;
    /**
     * The determination of what will be paid against a particular invoice based on coverage, plan rules, etc.
     */
    basic_resource_type_InvoiceAdjudication: Coding;
    /**
     * An occurrence of a non-care-related event in the healthcare domain, such as approvals, reviews, etc.
     */
    basic_resource_type_AdministrativeActivity: Coding;
    /**
     * An undesired reaction caused by exposure to some agent (e.g. a medication, immunization, food, or environmental agent).
     */
    basic_resource_type_AdverseEvent: Coding;
    /**
     * A request that a time be scheduled for a type of service for a specified patient, potentially subject to other constraints
     */
    basic_resource_type_AppointmentRequest: Coding;
    /**
     * An assertion of permission for an activity or set of activities to occur, possibly subject to particular limitations; e.g. surgical consent, information disclosure consent, etc.
     */
    basic_resource_type_Consent: Coding;
    /**
     * The specification of a set of food and/or other nutritional material to be delivered to a patient.
     */
    basic_resource_type_Diet: Coding;
    /**
     * Record of a situation where a subject was exposed to a substance.  Usually of interest to public health.
     */
    basic_resource_type_Exposure: Coding;
    /**
     * A formalized inquiry into the circumstances surrounding a particular unplanned event or potential event for the purposes of identifying possible causes and contributing factors for the event
     */
    basic_resource_type_Investigation: Coding;
    /**
     * A request for payment for goods and/or services.  Includes the idea of a healthcare insurance claim.
     */
    basic_resource_type_Invoice: Coding;
    /**
     * An adjudication of what would be paid under an insurance plan for a hypothetical claim for goods or services
     */
    basic_resource_type_Predetermination: Coding;
    /**
     * A request for a pre-determination of the cost that would be paid under an insurance plan for a hypothetical claim for goods or services
     */
    basic_resource_type_PreDeterminationRequest: Coding;
    /**
     * A set of (possibly conditional) steps to be taken to achieve some aim.  Includes study protocols, treatment protocols, emergency protocols, etc.
     */
    basic_resource_type_Protocol: Coding;
    /**
     * A request that care of a particular type be provided to a patient.  Could involve the transfer of care, a consult, etc.
     */
    basic_resource_type_Referral: Coding;
    /**
     * An investigation to determine information about a particular therapy or product
     */
    basic_resource_type_Study: Coding;
    /**
     * The transition of a patient or set of material from one location to another
     */
    basic_resource_type_Transfer: Coding;
};
//# sourceMappingURL=BasicResourceTypeValueSet.d.ts.map