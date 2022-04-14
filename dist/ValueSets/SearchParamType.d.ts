import { Coding } from '../strictmodels';
/**
 * Data types allowed to be used for search parameters.
 */
export declare const SearchParamType: {
    /**
     * A composite search parameter that combines a search on two values together.
     */
    search_param_type_Composite: Coding;
    /**
     * Search parameter is on a date/time. The date format is the standard XML format, though other formats may be supported.
     */
    search_param_type_DateDateTime: Coding;
    /**
     * Search parameter SHALL be a number (a whole number, or a decimal).
     */
    search_param_type_Number: Coding;
    /**
     * A search parameter that searches on a quantity.
     */
    search_param_type_Quantity: Coding;
    /**
     * A reference to another resource (Reference or canonical).
     */
    search_param_type_Reference: Coding;
    /**
     * Special logic applies to this parameter per the description of the search parameter.
     */
    search_param_type_Special: Coding;
    /**
     * Search parameter is a simple string, like a name part. Search is case-insensitive and accent-insensitive. May match just the start of a string. String parameters may contain spaces.
     */
    search_param_type_String: Coding;
    /**
     * Search parameter on a coded element or identifier. May be used to search through the text, display, code and code/codesystem (for codes) and label, system and key (for identifier). Its value is either a string or a pair of namespace and value, separated by a "|", depending on the modifier used.
     */
    search_param_type_Token: Coding;
    /**
     * A search parameter that searches on a URI (RFC 3986).
     */
    search_param_type_URI: Coding;
};
//# sourceMappingURL=SearchParamType.d.ts.map