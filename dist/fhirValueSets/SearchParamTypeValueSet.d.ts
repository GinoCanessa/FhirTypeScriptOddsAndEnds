import { Coding } from '../fhir.js';
/**
 * Data types allowed to be used for search parameters.
 */
export declare const SearchParamTypeValueSet: {
    /**
     * composite: A composite search parameter that combines a search on two values together.
     */
    readonly Composite: Coding;
    /**
     * date: Search parameter is on a date/time. The date format is the standard XML format, though other formats may be supported.
     */
    readonly DateDateTime: Coding;
    /**
     * number: Search parameter SHALL be a number (a whole number, or a decimal).
     */
    readonly Number: Coding;
    /**
     * quantity: A search parameter that searches on a quantity.
     */
    readonly Quantity: Coding;
    /**
     * reference: A reference to another resource (Reference or canonical).
     */
    readonly Reference: Coding;
    /**
     * special: Special logic applies to this parameter per the description of the search parameter.
     */
    readonly Special: Coding;
    /**
     * string: Search parameter is a simple string, like a name part. Search is case-insensitive and accent-insensitive. May match just the start of a string. String parameters may contain spaces.
     */
    readonly String: Coding;
    /**
     * token: Search parameter on a coded element or identifier. May be used to search through the text, display, code and code/codesystem (for codes) and label, system and key (for identifier). Its value is either a string or a pair of namespace and value, separated by a "|", depending on the modifier used.
     */
    readonly Token: Coding;
    /**
     * uri: A search parameter that searches on a URI (RFC 3986).
     */
    readonly URI: Coding;
};
/**
 * Data types allowed to be used for search parameters.
 */
export declare type SearchParamTypeValueSetType = typeof SearchParamTypeValueSet;
/**
 * Data types allowed to be used for search parameters.
 */
//# sourceMappingURL=SearchParamTypeValueSet.d.ts.map