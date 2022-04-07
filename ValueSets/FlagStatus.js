/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export var FlagStatus = {
    /**
     * A current flag that should be displayed to a user. A system may use the category to determine which user roles should view the flag.
     */
    flag_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/flag-status"
    },
    /**
     * The flag was added in error and should no longer be displayed.
     */
    flag_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/flag-status"
    },
    /**
     * The flag no longer needs to be displayed.
     */
    flag_status_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/flag-status"
    }
};
