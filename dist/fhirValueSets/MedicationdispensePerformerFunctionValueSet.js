// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationdispense-performer-function|4.0.1
import { Coding } from '../fhir.js';
/**
 * MedicationDispense Performer Function Codes
 */
export const MedicationdispensePerformerFunctionValueSet = {
    /**
     * checker: Performed initial quality assurance on the prepared medication
     */
    Checker: new Coding({
        display: "Checker",
        code: "checker",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function",
    }),
    /**
     * dataenterer: Recorded the details of the request
     */
    DataEnterer: new Coding({
        display: "Data Enterer",
        code: "dataenterer",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function",
    }),
    /**
     * finalchecker: Performed the final quality assurance on the prepared medication against the request. Typically, this is a pharmacist function.
     */
    FinalChecker: new Coding({
        display: "Final Checker",
        code: "finalchecker",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function",
    }),
    /**
     * packager: Prepared the medication.
     */
    Packager: new Coding({
        display: "Packager",
        code: "packager",
        system: "http://terminology.hl7.org/CodeSystem/medicationdispense-performer-function",
    }),
};
/**
 * MedicationDispense Performer Function Codes
 */
//# sourceMappingURL=MedicationdispensePerformerFunctionValueSet.js.map