// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/chargeitem-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * Codes identifying the lifecycle stage of a ChargeItem.
 */
export const ChargeitemStatusValueSet = {
    /**
     * aborted: The processing of the charge was aborted.
     */
    Aborted: new Coding({
        display: "Aborted",
        code: "aborted",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * billable: The charge item is ready for billing.
     */
    Billable: new Coding({
        display: "Billable",
        code: "billable",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * billed: The charge item has been billed (e.g. a billing engine has generated financial transactions by applying the associated ruled for the charge item to the context of the Encounter, and placed them into Claims/Invoices.
     */
    Billed: new Coding({
        display: "Billed",
        code: "billed",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * entered-in-error: The charge item has been entered in error and should not be processed for billing.
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * not-billable: The charge item has been determined to be not billable (e.g. due to rules associated with the billing code).
     */
    NotBillable: new Coding({
        display: "Not billable",
        code: "not-billable",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * planned: The charge item has been entered, but the charged service is not  yet complete, so it shall not be billed yet but might be used in the context of pre-authorization.
     */
    Planned: new Coding({
        display: "Planned",
        code: "planned",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this charge item  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    Unknown: new Coding({
        display: "Unknown",
        code: "unknown",
        system: "http://hl7.org/fhir/chargeitem-status",
    }),
};
/**
 * Codes identifying the lifecycle stage of a ChargeItem.
 */
//# sourceMappingURL=ChargeitemStatusValueSet.js.map