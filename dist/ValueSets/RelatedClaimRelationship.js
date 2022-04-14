"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedClaimRelationship = void 0;
/**
 * This value set includes sample Related Claim Relationship codes.
 */
exports.RelatedClaimRelationship = {
    /**
     * A claim for a different suite of services which is related the suite claimed here.
     */
    related_claim_relationship_AssociatedClaim: {
        code: "associated",
        display: "Associated Claim",
        system: "http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship"
    },
    /**
     * A prior claim instance for the same intended suite of services.
     */
    related_claim_relationship_PriorClaim: {
        code: "prior",
        display: "Prior Claim",
        system: "http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship"
    },
};
//# sourceMappingURL=RelatedClaimRelationship.js.map