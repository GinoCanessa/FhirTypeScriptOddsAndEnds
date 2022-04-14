import { Coding } from '../strictmodels';
/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export declare const SubscriberRelationship: {
    /**
     * The Beneficiary is a child of the Subscriber
     */
    subscriber_relationship_Child: Coding;
    /**
     * The Beneficiary is a common law spouse or equivalent of the Subscriber
     */
    subscriber_relationship_CommonLawSpouse: Coding;
    /**
     * The Beneficiary is covered under insurance of the subscriber due to an injury.
     */
    subscriber_relationship_InjuredParty: Coding;
    /**
     * The Beneficiary has some other relationship the Subscriber
     */
    subscriber_relationship_Other: Coding;
    /**
     * The Beneficiary is a parent of the Subscriber
     */
    subscriber_relationship_Parent: Coding;
    /**
     * The Beneficiary is the Subscriber
     */
    subscriber_relationship_Self: Coding;
    /**
     * The Beneficiary is a spouse or equivalent of the Subscriber
     */
    subscriber_relationship_Spouse: Coding;
};
//# sourceMappingURL=SubscriberRelationship.d.ts.map