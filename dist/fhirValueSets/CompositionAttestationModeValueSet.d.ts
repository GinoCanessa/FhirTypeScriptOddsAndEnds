import { Coding } from '../fhir.js';
/**
 * The way in which a person authenticated a composition.
 */
export declare const CompositionAttestationModeValueSet: {
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content.
     */
    readonly Legal: Coding;
    /**
     * official: The organization authenticated the content as consistent with their policies and procedures.
     */
    readonly Official: Coding;
    /**
     * personal: The person authenticated the content in their personal capacity.
     */
    readonly Personal: Coding;
    /**
     * professional: The person authenticated the content in their professional capacity.
     */
    readonly Professional: Coding;
};
/**
 * The way in which a person authenticated a composition.
 */
export declare type CompositionAttestationModeValueSetType = typeof CompositionAttestationModeValueSet;
/**
 * The way in which a person authenticated a composition.
 */
export declare enum CompositionAttestationModeValueSetEnum {
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content.
     */
    Legal = "legal",
    /**
     * official: The organization authenticated the content as consistent with their policies and procedures.
     */
    Official = "official",
    /**
     * personal: The person authenticated the content in their personal capacity.
     */
    Personal = "personal",
    /**
     * professional: The person authenticated the content in their professional capacity.
     */
    Professional = "professional"
}
//# sourceMappingURL=CompositionAttestationModeValueSet.d.ts.map