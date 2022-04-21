import { Coding } from '../fhir.js';
/**
 * This value set includes sample Related Claim Relationship codes.
 */
export declare const RelatedClaimRelationshipValueSet: {
    /**
     * associated: A claim for a different suite of services which is related the suite claimed here.
     */
    readonly AssociatedClaim: Coding;
    /**
     * prior: A prior claim instance for the same intended suite of services.
     */
    readonly PriorClaim: Coding;
};
/**
 * This value set includes sample Related Claim Relationship codes.
 */
export declare type RelatedClaimRelationshipValueSetType = typeof RelatedClaimRelationshipValueSet;
/**
 * This value set includes sample Related Claim Relationship codes.
 */
export declare enum RelatedClaimRelationshipValueSetEnum {
    /**
     * associated: A claim for a different suite of services which is related the suite claimed here.
     */
    AssociatedClaim = "associated",
    /**
     * prior: A prior claim instance for the same intended suite of services.
     */
    PriorClaim = "prior"
}
//# sourceMappingURL=RelatedClaimRelationshipValueSet.d.ts.map