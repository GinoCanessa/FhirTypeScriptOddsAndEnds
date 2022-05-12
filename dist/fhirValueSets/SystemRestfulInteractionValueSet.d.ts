import { Coding } from '../fhir.js';
/**
 * Operations supported by REST at the system level.
 */
export declare const SystemRestfulInteractionValueSet: {
    /**
     * batch: perform a set of a separate interactions in a single http operation
     */
    readonly Batch: Coding;
    /**
     * history-system: Retrieve the change history for all resources on a system.
     */
    readonly HistorySystem: Coding;
    /**
     * search-system: Search all resources based on some filter criteria.
     */
    readonly SearchSystem: Coding;
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    readonly Transaction: Coding;
};
/**
 * Operations supported by REST at the system level.
 */
export declare type SystemRestfulInteractionValueSetType = typeof SystemRestfulInteractionValueSet;
/**
 * Operations supported by REST at the system level.
 */
//# sourceMappingURL=SystemRestfulInteractionValueSet.d.ts.map