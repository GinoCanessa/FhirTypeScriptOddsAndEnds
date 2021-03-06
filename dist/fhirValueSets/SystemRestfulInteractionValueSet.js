// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/system-restful-interaction|4.0.1
import { Coding } from '../fhir.js';
/**
 * Operations supported by REST at the system level.
 */
export const SystemRestfulInteractionValueSet = {
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    Batch: new Coding({
        display: "batch",
        code: "batch",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    HistorySystem: new Coding({
        display: "history-system",
        code: "history-system",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    SearchSystem: new Coding({
        display: "search-system",
        code: "search-system",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction: new Coding({
        display: "transaction",
        code: "transaction",
        system: "http://hl7.org/fhir/restful-interaction",
    }),
};
/**
 * Operations supported by REST at the system level.
 */
//# sourceMappingURL=SystemRestfulInteractionValueSet.js.map