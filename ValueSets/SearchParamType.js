/**
 * Data types allowed to be used for search parameters.
 */
export var SearchParamType = {
    /**
     * A composite search parameter that combines a search on two values together.
     */
    search_param_type_Composite: {
        code: "composite",
        display: "Composite",
        system: "http://hl7.org/fhir/search-param-type"
    },
    /**
     * Search parameter is on a date/time. The date format is the standard XML format, though other formats may be supported.
     */
    search_param_type_DateDateTime: {
        code: "date",
        display: "Date/DateTime",
        system: "http://hl7.org/fhir/search-param-type"
    },
    /**
     * Search parameter SHALL be a number (a whole number, or a decimal).
     */
    search_param_type_Number: {
        code: "number",
        display: "Number",
        system: "http://hl7.org/fhir/search-param-type"
    },
    /**
     * A search parameter that searches on a quantity.
     */
    search_param_type_Quantity: {
        code: "quantity",
        display: "Quantity",
        system: "http://hl7.org/fhir/search-param-type"
    },
    /**
     * A reference to another resource (Reference or canonical).
     */
    search_param_type_Reference: {
        code: "reference",
        display: "Reference",
        system: "http://hl7.org/fhir/search-param-type"
    },
    /**
     * Special logic applies to this parameter per the description of the search parameter.
     */
    search_param_type_Special: {
        code: "special",
        display: "Special",
        system: "http://hl7.org/fhir/search-param-type"
    },
    /**
     * Search parameter is a simple string, like a name part. Search is case-insensitive and accent-insensitive. May match just the start of a string. String parameters may contain spaces.
     */
    search_param_type_String: {
        code: "string",
        display: "String",
        system: "http://hl7.org/fhir/search-param-type"
    },
    /**
     * Search parameter on a coded element or identifier. May be used to search through the text, display, code and code/codesystem (for codes) and label, system and key (for identifier). Its value is either a string or a pair of namespace and value, separated by a "|", depending on the modifier used.
     */
    search_param_type_Token: {
        code: "token",
        display: "Token",
        system: "http://hl7.org/fhir/search-param-type"
    },
    /**
     * A search parameter that searches on a URI (RFC 3986).
     */
    search_param_type_URI: {
        code: "uri",
        display: "URI",
        system: "http://hl7.org/fhir/search-param-type"
    }
};
