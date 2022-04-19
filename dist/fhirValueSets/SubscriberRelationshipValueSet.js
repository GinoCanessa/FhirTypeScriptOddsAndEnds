// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 */
export const SubscriberRelationshipValueSet = {
    /**
     * The Beneficiary is a child of the Subscriber
     */
    subscriber_relationship_Child: Coding.FromStrict({
        code: "child",
        display: "Child",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    }),
    /**
     * The Beneficiary is a common law spouse or equivalent of the Subscriber
     */
    subscriber_relationship_CommonLawSpouse: Coding.FromStrict({
        code: "common",
        display: "Common Law Spouse",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    }),
    /**
     * The Beneficiary is covered under insurance of the subscriber due to an injury.
     */
    subscriber_relationship_InjuredParty: Coding.FromStrict({
        code: "injured",
        display: "Injured Party",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    }),
    /**
     * The Beneficiary has some other relationship the Subscriber
     */
    subscriber_relationship_Other: Coding.FromStrict({
        code: "other",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    }),
    /**
     * The Beneficiary is a parent of the Subscriber
     */
    subscriber_relationship_Parent: Coding.FromStrict({
        code: "parent",
        display: "Parent",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    }),
    /**
     * The Beneficiary is the Subscriber
     */
    subscriber_relationship_Self: Coding.FromStrict({
        code: "self",
        display: "Self",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    }),
    /**
     * The Beneficiary is a spouse or equivalent of the Subscriber
     */
    subscriber_relationship_Spouse: Coding.FromStrict({
        code: "spouse",
        display: "Spouse",
        system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship"
    }),
};
//# sourceMappingURL=SubscriberRelationshipValueSet.js.map