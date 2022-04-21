import { Coding } from '../fhir.js';
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare const TestscriptOperationCodesValueSet: {
    /**
     * apply: Realizes an ActivityDefinition in a specific context
     */
    readonly Apply: Coding;
    /**
     * batch: Update, create or delete a set of resources as independent actions.
     */
    readonly Batch: Coding;
    /**
     * capabilities: Get a capability statement for the system.
     */
    readonly Capabilities: Coding;
    /**
     * closure: Closure Table Maintenance
     */
    readonly Closure: Coding;
    /**
     * conforms: Compare two systems CapabilityStatements
     */
    readonly Conforms: Coding;
    /**
     * create: Create a new resource with a server assigned id.
     */
    readonly Create: Coding;
    /**
     * data-requirements: Aggregates and returns the parameters and data requirements for a resource and all its dependencies as a single module definition
     */
    readonly DataRequirements: Coding;
    /**
     * delete: Delete a resource.
     */
    readonly Delete: Coding;
    /**
     * deleteCondMultiple: Conditionally delete one or more resources based on search parameters.
     */
    readonly DeleteCondMultiple: Coding;
    /**
     * deleteCondSingle: Conditionally delete a single resource based on search parameters.
     */
    readonly DeleteCondSingle: Coding;
    /**
     * document: Generate a Document
     */
    readonly Document: Coding;
    /**
     * evaluate: Request clinical decision support guidance based on a specific decision support module
     */
    readonly Evaluate: Coding;
    /**
     * evaluate-measure: Invoke an eMeasure and obtain the results
     */
    readonly EvaluateMeasure: Coding;
    /**
     * everything: Return all the related information as described in the Encounter or Patient
     */
    readonly Everything: Coding;
    /**
     * expand: Value Set Expansion
     */
    readonly Expand: Coding;
    /**
     * find: Find a functional list
     */
    readonly Find: Coding;
    /**
     * find-matches: Finding Codes based on supplied properties
     */
    readonly FindMatches: Coding;
    /**
     * graphql: Invoke a GraphQL query
     */
    readonly Graphql: Coding;
    /**
     * history: Retrieve the change history for a particular resource or resource type.
     */
    readonly History: Coding;
    /**
     * implements: Test if a server implements a client's required operations
     */
    readonly Implements: Coding;
    /**
     * lastn: Last N Observations Query
     */
    readonly Lastn: Coding;
    /**
     * lookup: Concept Look Up and Decomposition
     */
    readonly Lookup: Coding;
    /**
     * match: Find patient matches using MPI based logic
     */
    readonly Match: Coding;
    /**
     * meta: Access a list of profiles, tags, and security labels
     */
    readonly Meta: Coding;
    /**
     * meta-add: Add profiles, tags, and security labels to a resource
     */
    readonly MetaAdd: Coding;
    /**
     * meta-delete: Delete profiles, tags, and security labels for a resource
     */
    readonly MetaDelete: Coding;
    /**
     * patch: Patch an existing resource by its id.
     */
    readonly Patch: Coding;
    /**
     * populate: Populate Questionnaire
     */
    readonly Populate: Coding;
    /**
     * populatehtml: Generate HTML for Questionnaire
     */
    readonly Populatehtml: Coding;
    /**
     * populatelink: Generate a link to a Questionnaire completion webpage
     */
    readonly Populatelink: Coding;
    /**
     * process-message: Process a message according to the defined event
     */
    readonly ProcessMessage: Coding;
    /**
     * questionnaire: Build Questionnaire
     */
    readonly Questionnaire: Coding;
    /**
     * read: Read the current state of the resource.
     */
    readonly Read: Coding;
    /**
     * search: Search based on some filter criteria.
     */
    readonly Search: Coding;
    /**
     * stats: Observation Statistics
     */
    readonly Stats: Coding;
    /**
     * subset: Fetch a subset of the CapabilityStatement resource
     */
    readonly Subset: Coding;
    /**
     * subsumes: CodeSystem Subsumption Testing
     */
    readonly Subsumes: Coding;
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    readonly Transaction: Coding;
    /**
     * transform: Model Instance Transformation
     */
    readonly Transform: Coding;
    /**
     * translate: Concept Translation
     */
    readonly Translate: Coding;
    /**
     * update: Update an existing resource by its id.
     */
    readonly Update: Coding;
    /**
     * updateCreate: Update an existing resource by its id (or create it if it is new).
     */
    readonly UpdateCreate: Coding;
    /**
     * validate: Validate a resource
     */
    readonly Validate: Coding;
    /**
     * validate-code: ValueSet based Validation
     */
    readonly ValidateCode: Coding;
    /**
     * vread: Read the state of a specific version of the resource.
     */
    readonly Vread: Coding;
};
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare type TestscriptOperationCodesValueSetType = typeof TestscriptOperationCodesValueSet;
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export declare enum TestscriptOperationCodesValueSetEnum {
    /**
     * apply: Realizes an ActivityDefinition in a specific context
     */
    Apply = "apply",
    /**
     * batch: Update, create or delete a set of resources as independent actions.
     */
    Batch = "batch",
    /**
     * capabilities: Get a capability statement for the system.
     */
    Capabilities = "capabilities",
    /**
     * closure: Closure Table Maintenance
     */
    Closure = "closure",
    /**
     * conforms: Compare two systems CapabilityStatements
     */
    Conforms = "conforms",
    /**
     * create: Create a new resource with a server assigned id.
     */
    Create = "create",
    /**
     * data-requirements: Aggregates and returns the parameters and data requirements for a resource and all its dependencies as a single module definition
     */
    DataRequirements = "data-requirements",
    /**
     * delete: Delete a resource.
     */
    Delete = "delete",
    /**
     * deleteCondMultiple: Conditionally delete one or more resources based on search parameters.
     */
    DeleteCondMultiple = "deleteCondMultiple",
    /**
     * deleteCondSingle: Conditionally delete a single resource based on search parameters.
     */
    DeleteCondSingle = "deleteCondSingle",
    /**
     * document: Generate a Document
     */
    Document = "document",
    /**
     * evaluate: Request clinical decision support guidance based on a specific decision support module
     */
    Evaluate = "evaluate",
    /**
     * evaluate-measure: Invoke an eMeasure and obtain the results
     */
    EvaluateMeasure = "evaluate-measure",
    /**
     * everything: Return all the related information as described in the Encounter or Patient
     */
    Everything = "everything",
    /**
     * expand: Value Set Expansion
     */
    Expand = "expand",
    /**
     * find: Find a functional list
     */
    Find = "find",
    /**
     * find-matches: Finding Codes based on supplied properties
     */
    FindMatches = "find-matches",
    /**
     * graphql: Invoke a GraphQL query
     */
    Graphql = "graphql",
    /**
     * history: Retrieve the change history for a particular resource or resource type.
     */
    History = "history",
    /**
     * implements: Test if a server implements a client's required operations
     */
    Implements = "implements",
    /**
     * lastn: Last N Observations Query
     */
    Lastn = "lastn",
    /**
     * lookup: Concept Look Up and Decomposition
     */
    Lookup = "lookup",
    /**
     * match: Find patient matches using MPI based logic
     */
    Match = "match",
    /**
     * meta: Access a list of profiles, tags, and security labels
     */
    Meta = "meta",
    /**
     * meta-add: Add profiles, tags, and security labels to a resource
     */
    MetaAdd = "meta-add",
    /**
     * meta-delete: Delete profiles, tags, and security labels for a resource
     */
    MetaDelete = "meta-delete",
    /**
     * patch: Patch an existing resource by its id.
     */
    Patch = "patch",
    /**
     * populate: Populate Questionnaire
     */
    Populate = "populate",
    /**
     * populatehtml: Generate HTML for Questionnaire
     */
    Populatehtml = "populatehtml",
    /**
     * populatelink: Generate a link to a Questionnaire completion webpage
     */
    Populatelink = "populatelink",
    /**
     * process-message: Process a message according to the defined event
     */
    ProcessMessage = "process-message",
    /**
     * questionnaire: Build Questionnaire
     */
    Questionnaire = "questionnaire",
    /**
     * read: Read the current state of the resource.
     */
    Read = "read",
    /**
     * search: Search based on some filter criteria.
     */
    Search = "search",
    /**
     * stats: Observation Statistics
     */
    Stats = "stats",
    /**
     * subset: Fetch a subset of the CapabilityStatement resource
     */
    Subset = "subset",
    /**
     * subsumes: CodeSystem Subsumption Testing
     */
    Subsumes = "subsumes",
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    Transaction = "transaction",
    /**
     * transform: Model Instance Transformation
     */
    Transform = "transform",
    /**
     * translate: Concept Translation
     */
    Translate = "translate",
    /**
     * update: Update an existing resource by its id.
     */
    Update = "update",
    /**
     * updateCreate: Update an existing resource by its id (or create it if it is new).
     */
    UpdateCreate = "updateCreate",
    /**
     * validate: Validate a resource
     */
    Validate = "validate",
    /**
     * validate-code: ValueSet based Validation
     */
    ValidateCode = "validate-code",
    /**
     * vread: Read the state of a specific version of the resource.
     */
    Vread = "vread"
}
//# sourceMappingURL=TestscriptOperationCodesValueSet.d.ts.map