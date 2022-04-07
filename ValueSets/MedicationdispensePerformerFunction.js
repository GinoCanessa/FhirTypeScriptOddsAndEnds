/**
 * MedicationDispense Performer Function Codes
 */
export var MedicationdispensePerformerFunction = {
    /**
     * Performed initial quality assurance on the prepared medication
     */
    medicationdispense_performer_function_Checker: {
        code: "checker",
        display: "Checker",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function"
    },
    /**
     * Recorded the details of the request
     */
    medicationdispense_performer_function_DataEnterer: {
        code: "dataenterer",
        display: "Data Enterer",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function"
    },
    /**
     * Performed the final quality assurance on the prepared medication against the request. Typically, this is a pharmacist function.
     */
    medicationdispense_performer_function_FinalChecker: {
        code: "finalchecker",
        display: "Final Checker",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function"
    },
    /**
     * Prepared the medication.
     */
    medicationdispense_performer_function_Packager: {
        code: "packager",
        display: "Packager",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function"
    }
};
