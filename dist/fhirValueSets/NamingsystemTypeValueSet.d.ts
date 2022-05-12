import { Coding } from '../fhir.js';
/**
 * Identifies the purpose of the naming system.
 */
export declare const NamingsystemTypeValueSet: {
    /**
     * codesystem: The naming system is used to define concepts and symbols to represent those concepts; e.g. UCUM, LOINC, NDC code, local lab codes, etc.
     */
    readonly CodeSystem: Coding;
    /**
     * identifier: The naming system is used to manage identifiers (e.g. license numbers, order numbers, etc.).
     */
    readonly Identifier: Coding;
    /**
     * root: The naming system is used as the root for other identifiers and naming systems.
     */
    readonly Root: Coding;
};
/**
 * Identifies the purpose of the naming system.
 */
export declare type NamingsystemTypeValueSetType = typeof NamingsystemTypeValueSet;
/**
 * Identifies the purpose of the naming system.
 */
//# sourceMappingURL=NamingsystemTypeValueSet.d.ts.map