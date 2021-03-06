// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/testscript-operation-codes|4.0.1
/**
 * This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.
 */
export var TestscriptOperationCodesValueSetEnum;
(function (TestscriptOperationCodesValueSetEnum) {
    /**
     * apply: Realizes an ActivityDefinition in a specific context
     */
    TestscriptOperationCodesValueSetEnum["Apply"] = "apply";
    /**
     * batch: Update, create or delete a set of resources as independent actions.
     */
    TestscriptOperationCodesValueSetEnum["Batch"] = "batch";
    /**
     * capabilities: Get a capability statement for the system.
     */
    TestscriptOperationCodesValueSetEnum["Capabilities"] = "capabilities";
    /**
     * closure: Closure Table Maintenance
     */
    TestscriptOperationCodesValueSetEnum["Closure"] = "closure";
    /**
     * conforms: Compare two systems CapabilityStatements
     */
    TestscriptOperationCodesValueSetEnum["Conforms"] = "conforms";
    /**
     * create: Create a new resource with a server assigned id.
     */
    TestscriptOperationCodesValueSetEnum["Create"] = "create";
    /**
     * data-requirements: Aggregates and returns the parameters and data requirements for a resource and all its dependencies as a single module definition
     */
    TestscriptOperationCodesValueSetEnum["DataRequirements"] = "data-requirements";
    /**
     * delete: Delete a resource.
     */
    TestscriptOperationCodesValueSetEnum["Delete"] = "delete";
    /**
     * deleteCondMultiple: Conditionally delete one or more resources based on search parameters.
     */
    TestscriptOperationCodesValueSetEnum["DeleteCondMultiple"] = "deleteCondMultiple";
    /**
     * deleteCondSingle: Conditionally delete a single resource based on search parameters.
     */
    TestscriptOperationCodesValueSetEnum["DeleteCondSingle"] = "deleteCondSingle";
    /**
     * document: Generate a Document
     */
    TestscriptOperationCodesValueSetEnum["Document"] = "document";
    /**
     * evaluate: Request clinical decision support guidance based on a specific decision support module
     */
    TestscriptOperationCodesValueSetEnum["Evaluate"] = "evaluate";
    /**
     * evaluate-measure: Invoke an eMeasure and obtain the results
     */
    TestscriptOperationCodesValueSetEnum["EvaluateMeasure"] = "evaluate-measure";
    /**
     * everything: Return all the related information as described in the Encounter or Patient
     */
    TestscriptOperationCodesValueSetEnum["Everything"] = "everything";
    /**
     * expand: Value Set Expansion
     */
    TestscriptOperationCodesValueSetEnum["Expand"] = "expand";
    /**
     * find: Find a functional list
     */
    TestscriptOperationCodesValueSetEnum["Find"] = "find";
    /**
     * find-matches: Finding Codes based on supplied properties
     */
    TestscriptOperationCodesValueSetEnum["FindMatches"] = "find-matches";
    /**
     * graphql: Invoke a GraphQL query
     */
    TestscriptOperationCodesValueSetEnum["Graphql"] = "graphql";
    /**
     * history: Retrieve the change history for a particular resource or resource type.
     */
    TestscriptOperationCodesValueSetEnum["History"] = "history";
    /**
     * implements: Test if a server implements a client's required operations
     */
    TestscriptOperationCodesValueSetEnum["Implements"] = "implements";
    /**
     * lastn: Last N Observations Query
     */
    TestscriptOperationCodesValueSetEnum["Lastn"] = "lastn";
    /**
     * lookup: Concept Look Up and Decomposition
     */
    TestscriptOperationCodesValueSetEnum["Lookup"] = "lookup";
    /**
     * match: Find patient matches using MPI based logic
     */
    TestscriptOperationCodesValueSetEnum["Match"] = "match";
    /**
     * meta: Access a list of profiles, tags, and security labels
     */
    TestscriptOperationCodesValueSetEnum["Meta"] = "meta";
    /**
     * meta-add: Add profiles, tags, and security labels to a resource
     */
    TestscriptOperationCodesValueSetEnum["MetaAdd"] = "meta-add";
    /**
     * meta-delete: Delete profiles, tags, and security labels for a resource
     */
    TestscriptOperationCodesValueSetEnum["MetaDelete"] = "meta-delete";
    /**
     * patch: Patch an existing resource by its id.
     */
    TestscriptOperationCodesValueSetEnum["Patch"] = "patch";
    /**
     * populate: Populate Questionnaire
     */
    TestscriptOperationCodesValueSetEnum["Populate"] = "populate";
    /**
     * populatehtml: Generate HTML for Questionnaire
     */
    TestscriptOperationCodesValueSetEnum["Populatehtml"] = "populatehtml";
    /**
     * populatelink: Generate a link to a Questionnaire completion webpage
     */
    TestscriptOperationCodesValueSetEnum["Populatelink"] = "populatelink";
    /**
     * process-message: Process a message according to the defined event
     */
    TestscriptOperationCodesValueSetEnum["ProcessMessage"] = "process-message";
    /**
     * questionnaire: Build Questionnaire
     */
    TestscriptOperationCodesValueSetEnum["Questionnaire"] = "questionnaire";
    /**
     * read: Read the current state of the resource.
     */
    TestscriptOperationCodesValueSetEnum["Read"] = "read";
    /**
     * search: Search based on some filter criteria.
     */
    TestscriptOperationCodesValueSetEnum["Search"] = "search";
    /**
     * stats: Observation Statistics
     */
    TestscriptOperationCodesValueSetEnum["Stats"] = "stats";
    /**
     * subset: Fetch a subset of the CapabilityStatement resource
     */
    TestscriptOperationCodesValueSetEnum["Subset"] = "subset";
    /**
     * subsumes: CodeSystem Subsumption Testing
     */
    TestscriptOperationCodesValueSetEnum["Subsumes"] = "subsumes";
    /**
     * transaction: Update, create or delete a set of resources as a single transaction.
     */
    TestscriptOperationCodesValueSetEnum["Transaction"] = "transaction";
    /**
     * transform: Model Instance Transformation
     */
    TestscriptOperationCodesValueSetEnum["Transform"] = "transform";
    /**
     * translate: Concept Translation
     */
    TestscriptOperationCodesValueSetEnum["Translate"] = "translate";
    /**
     * update: Update an existing resource by its id.
     */
    TestscriptOperationCodesValueSetEnum["Update"] = "update";
    /**
     * updateCreate: Update an existing resource by its id (or create it if it is new).
     */
    TestscriptOperationCodesValueSetEnum["UpdateCreate"] = "updateCreate";
    /**
     * validate: Validate a resource
     */
    TestscriptOperationCodesValueSetEnum["Validate"] = "validate";
    /**
     * validate-code: ValueSet based Validation
     */
    TestscriptOperationCodesValueSetEnum["ValidateCode"] = "validate-code";
    /**
     * vread: Read the state of a specific version of the resource.
     */
    TestscriptOperationCodesValueSetEnum["Vread"] = "vread";
})(TestscriptOperationCodesValueSetEnum || (TestscriptOperationCodesValueSetEnum = {}));
//# sourceMappingURL=TestscriptOperationCodesValueSetEnum.js.map