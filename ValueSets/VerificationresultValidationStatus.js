/**
 * Status of the validation of the target against the primary source
 */
export var VerificationresultValidationStatus = {
    verificationresult_validation_status_Failed: {
        code: "failed",
        display: "Failed",
        system: "http://terminology.hl7.org/CodeSystem/validation-status"
    },
    verificationresult_validation_status_Successful: {
        code: "successful",
        display: "Successful",
        system: "http://terminology.hl7.org/CodeSystem/validation-status"
    },
    /**
     * The validations status has not been determined yet
     */
    verificationresult_validation_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://terminology.hl7.org/CodeSystem/validation-status"
    }
};
