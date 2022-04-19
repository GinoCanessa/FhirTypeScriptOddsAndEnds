import { Coding } from '../fhir';
/**
 * A code that indicates how the server supports conditional delete.
 */
export declare const ConditionalDeleteStatusValueSet: {
    /**
     * Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
     */
    conditional_delete_status_MultipleDeletesSupported: Coding;
    /**
     * No support for conditional deletes.
     */
    conditional_delete_status_NotSupported: Coding;
    /**
     * Conditional deletes are supported, but only single resources at a time.
     */
    conditional_delete_status_SingleDeletesSupported: Coding;
};
//# sourceMappingURL=ConditionalDeleteStatusValueSet.d.ts.map