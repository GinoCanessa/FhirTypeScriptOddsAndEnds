/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export var SubscriberRelationship = {
    /**
     * The Beneficiary is a child of the Subscriber
     */
    subscriber_relationship_Child: {
        code: "child",
        display: "Child",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    },
    /**
     * The Beneficiary is a common law spouse or equivalent of the Subscriber
     */
    subscriber_relationship_CommonLawSpouse: {
        code: "common",
        display: "Common Law Spouse",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    },
    /**
     * The Beneficiary is covered under insurance of the subscriber due to an injury.
     */
    subscriber_relationship_InjuredParty: {
        code: "injured",
        display: "Injured Party",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    },
    /**
     * The Beneficiary has some other relationship the Subscriber
     */
    subscriber_relationship_Other: {
        code: "other",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    },
    /**
     * The Beneficiary is a parent of the Subscriber
     */
    subscriber_relationship_Parent: {
        code: "parent",
        display: "Parent",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    },
    /**
     * The Beneficiary is the Subscriber
     */
    subscriber_relationship_Self: {
        code: "self",
        display: "Self",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    },
    /**
     * The Beneficiary is a spouse or equivalent of the Subscriber
     */
    subscriber_relationship_Spouse: {
        code: "spouse",
        display: "Spouse",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    }
};