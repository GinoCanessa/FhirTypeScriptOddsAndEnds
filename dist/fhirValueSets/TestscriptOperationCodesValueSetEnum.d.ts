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
//# sourceMappingURL=TestscriptOperationCodesValueSetEnum.d.ts.map