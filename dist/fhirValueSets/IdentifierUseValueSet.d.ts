import { Coding } from '../fhir';
/**
 * Identifies the purpose for this identifier, if known .
 */
export declare const IdentifierUseValueSet: {
    /**
     * The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.
     */
    identifier_use_Official: Coding;
    /**
     * The identifier id no longer considered valid, but may be relevant for search purposes.  E.g. Changes to identifier schemes, account merges, etc.
     */
    identifier_use_Old: Coding;
    /**
     * An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.
     */
    identifier_use_Secondary: Coding;
    /**
     * A temporary identifier.
     */
    identifier_use_Temp: Coding;
    /**
     * The identifier recommended for display and use in real-world interactions.
     */
    identifier_use_Usual: Coding;
};
//# sourceMappingURL=IdentifierUseValueSet.d.ts.map