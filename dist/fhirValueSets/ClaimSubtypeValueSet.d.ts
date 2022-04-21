import { Coding } from '../fhir.js';
/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 */
export declare const ClaimSubtypeValueSet: {
    /**
     * emergency: A claim for emergency services.
     */
    readonly EmergencyClaim: Coding;
    /**
     * ortho: A claim for Orthodontic Services.
     */
    readonly OrthodonticClaim: Coding;
};
/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 */
export declare type ClaimSubtypeValueSetType = typeof ClaimSubtypeValueSet;
/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 */
export declare enum ClaimSubtypeValueSetEnum {
    /**
     * emergency: A claim for emergency services.
     */
    EmergencyClaim = "emergency",
    /**
     * ortho: A claim for Orthodontic Services.
     */
    OrthodonticClaim = "ortho"
}
//# sourceMappingURL=ClaimSubtypeValueSet.d.ts.map