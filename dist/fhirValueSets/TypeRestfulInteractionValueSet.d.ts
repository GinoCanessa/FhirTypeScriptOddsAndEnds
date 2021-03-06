import { Coding } from '../fhir.js';
/**
 * Operations supported by REST at the type or instance level.
 */
export declare const TypeRestfulInteractionValueSet: {
    /**
     * create: Create a new resource with a server assigned id.
     */
    readonly Create: Coding;
    /**
     * delete: Delete a resource.
     */
    readonly Delete: Coding;
    /**
     * history-instance: Retrieve the change history for a particular resource.
     */
    readonly HistoryInstance: Coding;
    /**
     * history-type: Retrieve the change history for all resources of a particular type.
     */
    readonly HistoryType: Coding;
    /**
     * patch: Update an existing resource by posting a set of changes to it.
     */
    readonly Patch: Coding;
    /**
     * read: Read the current state of the resource.
     */
    readonly Read: Coding;
    /**
     * search-type: Search all resources of the specified type based on some filter criteria.
     */
    readonly SearchType: Coding;
    /**
     * update: Update an existing resource by its id (or create it if it is new).
     */
    readonly Update: Coding;
    /**
     * vread: Read the state of a specific version of the resource.
     */
    readonly Vread: Coding;
};
/**
 * Operations supported by REST at the type or instance level.
 */
export declare type TypeRestfulInteractionValueSetType = typeof TypeRestfulInteractionValueSet;
/**
 * Operations supported by REST at the type or instance level.
 */
//# sourceMappingURL=TypeRestfulInteractionValueSet.d.ts.map