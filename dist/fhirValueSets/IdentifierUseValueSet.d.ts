import { Coding } from '../fhir.js';
/**
 * Identifies the purpose for this identifier, if known .
 */
export declare const IdentifierUseValueSet: {
    /**
     * official: The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.
     */
    readonly Official: Coding;
    /**
     * old: The identifier id no longer considered valid, but may be relevant for search purposes.  E.g. Changes to identifier schemes, account merges, etc.
     */
    readonly Old: Coding;
    /**
     * secondary: An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.
     */
    readonly Secondary: Coding;
    /**
     * temp: A temporary identifier.
     */
    readonly Temp: Coding;
    /**
     * usual: The identifier recommended for display and use in real-world interactions.
     */
    readonly Usual: Coding;
};
/**
 * Identifies the purpose for this identifier, if known .
 */
export declare type IdentifierUseValueSetType = typeof IdentifierUseValueSet;
/**
 * Identifies the purpose for this identifier, if known .
 */
export declare enum IdentifierUseValueSetEnum {
    /**
     * official: The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.
     */
    Official = "official",
    /**
     * old: The identifier id no longer considered valid, but may be relevant for search purposes.  E.g. Changes to identifier schemes, account merges, etc.
     */
    Old = "old",
    /**
     * secondary: An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.
     */
    Secondary = "secondary",
    /**
     * temp: A temporary identifier.
     */
    Temp = "temp",
    /**
     * usual: The identifier recommended for display and use in real-world interactions.
     */
    Usual = "usual"
}
//# sourceMappingURL=IdentifierUseValueSet.d.ts.map