import { Coding } from '../fhir.js';
/**
 * Whether an operation is a normal operation or a query.
 */
export declare const OperationKindValueSet: {
    /**
     * operation: This operation is invoked as an operation.
     */
    readonly Operation: Coding;
    /**
     * query: This operation is a named query, invoked using the search mechanism.
     */
    readonly Query: Coding;
};
/**
 * Whether an operation is a normal operation or a query.
 */
export declare type OperationKindValueSetType = typeof OperationKindValueSet;
/**
 * Whether an operation is a normal operation or a query.
 */
export declare enum OperationKindValueSetEnum {
    /**
     * operation: This operation is invoked as an operation.
     */
    Operation = "operation",
    /**
     * query: This operation is a named query, invoked using the search mechanism.
     */
    Query = "query"
}
//# sourceMappingURL=OperationKindValueSet.d.ts.map