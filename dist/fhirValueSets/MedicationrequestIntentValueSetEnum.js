// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/medicationrequest-intent|4.0.1
/**
 * MedicationRequest Intent Codes
 */
export var MedicationrequestIntentValueSetEnum;
(function (MedicationrequestIntentValueSetEnum) {
    /**
     * filler-order: The request represents the view of an authorization instantiated by a fulfilling system representing the details of the fulfiller's intention to act upon a submitted order.
     */
    MedicationrequestIntentValueSetEnum["FillerOrder"] = "filler-order";
    /**
     * instance-order: The request represents an instance for the particular order, for example a medication administration record.
     */
    MedicationrequestIntentValueSetEnum["InstanceOrder"] = "instance-order";
    /**
     * option: The request represents a component or option for a RequestGroup that establishes timing, conditionality and/or  other constraints among a set of requests.
     */
    MedicationrequestIntentValueSetEnum["Option"] = "option";
    /**
     * order: The request represents a request/demand and authorization for action
     */
    MedicationrequestIntentValueSetEnum["Order"] = "order";
    /**
     * original-order: The request represents the original authorization for the medication request.
     */
    MedicationrequestIntentValueSetEnum["OriginalOrder"] = "original-order";
    /**
     * plan: The request represents an intention to ensure something occurs without providing an authorization for others to act.
     */
    MedicationrequestIntentValueSetEnum["Plan"] = "plan";
    /**
     * proposal: The request is a suggestion made by someone/something that doesn't have an intention to ensure it occurs and without providing an authorization to act
     */
    MedicationrequestIntentValueSetEnum["Proposal"] = "proposal";
    /**
     * reflex-order: The request represents an automatically generated supplemental authorization for action based on a parent authorization together with initial results of the action taken against that parent authorization..
     */
    MedicationrequestIntentValueSetEnum["ReflexOrder"] = "reflex-order";
})(MedicationrequestIntentValueSetEnum || (MedicationrequestIntentValueSetEnum = {}));
//# sourceMappingURL=MedicationrequestIntentValueSetEnum.js.map