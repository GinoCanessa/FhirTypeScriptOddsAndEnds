/**
 * Indicates whether the account is available to be used.
 */
export var AccountStatus = {
    /**
     * This account is active and may be used.
     */
    account_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/account-status"
    },
    /**
     * This instance should not have been part of this patient's medical record.
     */
    account_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in error",
        system: "http://hl7.org/fhir/account-status"
    },
    /**
     * This account is inactive and should not be used to track financial information.
     */
    account_status_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/account-status"
    },
    /**
     * This account is on hold.
     */
    account_status_OnHold: {
        code: "on-hold",
        display: "On Hold",
        system: "http://hl7.org/fhir/account-status"
    },
    /**
     * The account status is unknown.
     */
    account_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/account-status"
    }
};
