/**
 * Whether an operation is a normal operation or a query.
 */
export var OperationKind = {
    /**
     * This operation is invoked as an operation.
     */
    operation_kind_Operation: {
        code: "operation",
        display: "Operation",
        system: "http://hl7.org/fhir/operation-kind"
    },
    /**
     * This operation is a named query, invoked using the search mechanism.
     */
    operation_kind_Query: {
        code: "query",
        display: "Query",
        system: "http://hl7.org/fhir/operation-kind"
    }
};
