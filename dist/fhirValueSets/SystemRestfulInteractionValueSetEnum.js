// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/system-restful-interaction|4.0.1
/**
 * Operations supported by REST at the system level.
 */
export var SystemRestfulInteractionValueSetEnum;
(function (SystemRestfulInteractionValueSetEnum) {
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    SystemRestfulInteractionValueSetEnum["Batch"] = "batch";
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    SystemRestfulInteractionValueSetEnum["HistorySystem"] = "history-system";
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    SystemRestfulInteractionValueSetEnum["SearchSystem"] = "search-system";
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    SystemRestfulInteractionValueSetEnum["Transaction"] = "transaction";
})(SystemRestfulInteractionValueSetEnum || (SystemRestfulInteractionValueSetEnum = {}));
//# sourceMappingURL=SystemRestfulInteractionValueSetEnum.js.map