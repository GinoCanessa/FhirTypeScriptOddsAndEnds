"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestscriptOperationCodes = void 0;
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
exports.TestscriptOperationCodes = {
    /**
     * Realizes an ActivityDefinition in a specific context
     */
    testscript_operation_codes_Apply: {
        code: "apply",
        display: "$apply",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Update, create or delete a set of resources as independent actions.
     */
    testscript_operation_codes_Batch: {
        code: "batch",
        display: "Batch",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Get a capability statement for the system.
     */
    testscript_operation_codes_Capabilities: {
        code: "capabilities",
        display: "Capabilities",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Closure Table Maintenance
     */
    testscript_operation_codes_Closure: {
        code: "closure",
        display: "$closure",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Compare two systems CapabilityStatements
     */
    testscript_operation_codes_Conforms: {
        code: "conforms",
        display: "$conforms",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Create a new resource with a server assigned id.
     */
    testscript_operation_codes_Create: {
        code: "create",
        display: "Create",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Aggregates and returns the parameters and data requirements for a resource and all its dependencies as a single module definition
     */
    testscript_operation_codes_DataRequirements: {
        code: "data-requirements",
        display: "$data-requirements",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Delete a resource.
     */
    testscript_operation_codes_Delete: {
        code: "delete",
        display: "Delete",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Conditionally delete one or more resources based on search parameters.
     */
    testscript_operation_codes_DeleteCondMultiple: {
        code: "deleteCondMultiple",
        display: "Conditional Delete Multiple",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Conditionally delete a single resource based on search parameters.
     */
    testscript_operation_codes_DeleteCondSingle: {
        code: "deleteCondSingle",
        display: "Conditional Delete Single",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Generate a Document
     */
    testscript_operation_codes_Document: {
        code: "document",
        display: "$document",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Request clinical decision support guidance based on a specific decision support module
     */
    testscript_operation_codes_Evaluate: {
        code: "evaluate",
        display: "$evaluate",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Invoke an eMeasure and obtain the results
     */
    testscript_operation_codes_EvaluateMeasure: {
        code: "evaluate-measure",
        display: "$evaluate-measure",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Return all the related information as described in the Encounter or Patient
     */
    testscript_operation_codes_Everything: {
        code: "everything",
        display: "$everything",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Value Set Expansion
     */
    testscript_operation_codes_Expand: {
        code: "expand",
        display: "$expand",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Find a functional list
     */
    testscript_operation_codes_Find: {
        code: "find",
        display: "$find",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Finding Codes based on supplied properties
     */
    testscript_operation_codes_FindMatches: {
        code: "find-matches",
        display: "$find-matches",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Invoke a GraphQL query
     */
    testscript_operation_codes_Graphql: {
        code: "graphql",
        display: "$graphql",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Retrieve the change history for a particular resource or resource type.
     */
    testscript_operation_codes_History: {
        code: "history",
        display: "History",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Test if a server implements a client's required operations
     */
    testscript_operation_codes_Implements: {
        code: "implements",
        display: "$implements",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Last N Observations Query
     */
    testscript_operation_codes_Lastn: {
        code: "lastn",
        display: "$lastn",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Concept Look Up and Decomposition
     */
    testscript_operation_codes_Lookup: {
        code: "lookup",
        display: "$lookup",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Find patient matches using MPI based logic
     */
    testscript_operation_codes_Match: {
        code: "match",
        display: "$match",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Access a list of profiles, tags, and security labels
     */
    testscript_operation_codes_Meta: {
        code: "meta",
        display: "$meta",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Add profiles, tags, and security labels to a resource
     */
    testscript_operation_codes_MetaAdd: {
        code: "meta-add",
        display: "$meta-add",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Delete profiles, tags, and security labels for a resource
     */
    testscript_operation_codes_MetaDelete: {
        code: "meta-delete",
        display: "$meta-delete",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Patch an existing resource by its id.
     */
    testscript_operation_codes_Patch: {
        code: "patch",
        display: "Patch",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Populate Questionnaire
     */
    testscript_operation_codes_Populate: {
        code: "populate",
        display: "$populate",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Generate HTML for Questionnaire
     */
    testscript_operation_codes_Populatehtml: {
        code: "populatehtml",
        display: "$populatehtml",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Generate a link to a Questionnaire completion webpage
     */
    testscript_operation_codes_Populatelink: {
        code: "populatelink",
        display: "$populatelink",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Process a message according to the defined event
     */
    testscript_operation_codes_ProcessMessage: {
        code: "process-message",
        display: "$process-message",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Build Questionnaire
     */
    testscript_operation_codes_Questionnaire: {
        code: "questionnaire",
        display: "$questionnaire",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Read the current state of the resource.
     */
    testscript_operation_codes_Read: {
        code: "read",
        display: "Read",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Search based on some filter criteria.
     */
    testscript_operation_codes_Search: {
        code: "search",
        display: "Search",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Observation Statistics
     */
    testscript_operation_codes_Stats: {
        code: "stats",
        display: "$stats",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Fetch a subset of the CapabilityStatement resource
     */
    testscript_operation_codes_Subset: {
        code: "subset",
        display: "$subset",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * CodeSystem Subsumption Testing
     */
    testscript_operation_codes_Subsumes: {
        code: "subsumes",
        display: "$subsumes",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Update, create or delete a set of resources as a single transaction.
     */
    testscript_operation_codes_Transaction: {
        code: "transaction",
        display: "Transaction",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Model Instance Transformation
     */
    testscript_operation_codes_Transform: {
        code: "transform",
        display: "$transform",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Concept Translation
     */
    testscript_operation_codes_Translate: {
        code: "translate",
        display: "$translate",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Update an existing resource by its id.
     */
    testscript_operation_codes_Update: {
        code: "update",
        display: "Update",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Update an existing resource by its id (or create it if it is new).
     */
    testscript_operation_codes_UpdateCreate: {
        code: "updateCreate",
        display: "Create using Update",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Validate a resource
     */
    testscript_operation_codes_Validate: {
        code: "validate",
        display: "$validate",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * ValueSet based Validation
     */
    testscript_operation_codes_ValidateCode: {
        code: "validate-code",
        display: "$validate-code",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
    /**
     * Read the state of a specific version of the resource.
     */
    testscript_operation_codes_Vread: {
        code: "vread",
        display: "Version Read",
        system: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes"
    },
};
//# sourceMappingURL=TestscriptOperationCodes.js.map