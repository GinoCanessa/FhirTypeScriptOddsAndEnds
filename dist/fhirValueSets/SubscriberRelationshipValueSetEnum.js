// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/subscriber-relationship|4.0.1
/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export var SubscriberRelationshipValueSetEnum;
(function (SubscriberRelationshipValueSetEnum) {
    /**
     * child: The Beneficiary is a child of the Subscriber
     */
    SubscriberRelationshipValueSetEnum["Child"] = "child";
    /**
     * common: The Beneficiary is a common law spouse or equivalent of the Subscriber
     */
    SubscriberRelationshipValueSetEnum["CommonLawSpouse"] = "common";
    /**
     * injured: The Beneficiary is covered under insurance of the subscriber due to an injury.
     */
    SubscriberRelationshipValueSetEnum["InjuredParty"] = "injured";
    /**
     * other: The Beneficiary has some other relationship the Subscriber
     */
    SubscriberRelationshipValueSetEnum["Other"] = "other";
    /**
     * parent: The Beneficiary is a parent of the Subscriber
     */
    SubscriberRelationshipValueSetEnum["Parent"] = "parent";
    /**
     * self: The Beneficiary is the Subscriber
     */
    SubscriberRelationshipValueSetEnum["Self"] = "self";
    /**
     * spouse: The Beneficiary is a spouse or equivalent of the Subscriber
     */
    SubscriberRelationshipValueSetEnum["Spouse"] = "spouse";
})(SubscriberRelationshipValueSetEnum || (SubscriberRelationshipValueSetEnum = {}));
//# sourceMappingURL=SubscriberRelationshipValueSetEnum.js.map