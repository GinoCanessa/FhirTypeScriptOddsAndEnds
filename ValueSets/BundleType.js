/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export var BundleType = {
    /**
     * The bundle is a set of actions - intended to be processed by a server as a group of independent actions.
     */
    bundle_type_Batch: {
        code: "batch",
        display: "Batch",
        system: "http://hl7.org/fhir/bundle-type"
    },
    /**
     * The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
     */
    bundle_type_BatchResponse: {
        code: "batch-response",
        display: "Batch Response",
        system: "http://hl7.org/fhir/bundle-type"
    },
    /**
     * The bundle is a set of resources collected into a single package for ease of distribution that imposes no processing obligations or behavioral rules beyond persistence.
     */
    bundle_type_Collection: {
        code: "collection",
        display: "Collection",
        system: "http://hl7.org/fhir/bundle-type"
    },
    /**
     * The bundle is a document. The first resource is a Composition.
     */
    bundle_type_Document: {
        code: "document",
        display: "Document",
        system: "http://hl7.org/fhir/bundle-type"
    },
    /**
     * The bundle is a list of resources from a history interaction on a server.
     */
    bundle_type_HistoryList: {
        code: "history",
        display: "History List",
        system: "http://hl7.org/fhir/bundle-type"
    },
    /**
     * The bundle is a message. The first resource is a MessageHeader.
     */
    bundle_type_Message: {
        code: "message",
        display: "Message",
        system: "http://hl7.org/fhir/bundle-type"
    },
    /**
     * The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.
     */
    bundle_type_SearchResults: {
        code: "searchset",
        display: "Search Results",
        system: "http://hl7.org/fhir/bundle-type"
    },
    /**
     * The bundle is a transaction - intended to be processed by a server as an atomic commit.
     */
    bundle_type_Transaction: {
        code: "transaction",
        display: "Transaction",
        system: "http://hl7.org/fhir/bundle-type"
    },
    /**
     * The bundle is a transaction response. Because the response is a transaction response, the transaction has succeeded, and all responses are error free.
     */
    bundle_type_TransactionResponse: {
        code: "transaction-response",
        display: "Transaction Response",
        system: "http://hl7.org/fhir/bundle-type"
    }
};
