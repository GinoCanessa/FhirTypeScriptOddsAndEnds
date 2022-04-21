import { Coding } from '../fhir.js';
/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export declare const BundleTypeValueSet: {
    /**
     * batch: The bundle is a set of actions - intended to be processed by a server as a group of independent actions.
     */
    readonly Batch: Coding;
    /**
     * batch-response: The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
     */
    readonly BatchResponse: Coding;
    /**
     * collection: The bundle is a set of resources collected into a single package for ease of distribution that imposes no processing obligations or behavioral rules beyond persistence.
     */
    readonly Collection: Coding;
    /**
     * document: The bundle is a document. The first resource is a Composition.
     */
    readonly Document: Coding;
    /**
     * history: The bundle is a list of resources from a history interaction on a server.
     */
    readonly HistoryList: Coding;
    /**
     * message: The bundle is a message. The first resource is a MessageHeader.
     */
    readonly Message: Coding;
    /**
     * searchset: The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.
     */
    readonly SearchResults: Coding;
    /**
     * transaction: The bundle is a transaction - intended to be processed by a server as an atomic commit.
     */
    readonly Transaction: Coding;
    /**
     * transaction-response: The bundle is a transaction response. Because the response is a transaction response, the transaction has succeeded, and all responses are error free.
     */
    readonly TransactionResponse: Coding;
};
/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export declare type BundleTypeValueSetType = typeof BundleTypeValueSet;
/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export declare enum BundleTypeValueSetEnum {
    /**
     * batch: The bundle is a set of actions - intended to be processed by a server as a group of independent actions.
     */
    Batch = "batch",
    /**
     * batch-response: The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
     */
    BatchResponse = "batch-response",
    /**
     * collection: The bundle is a set of resources collected into a single package for ease of distribution that imposes no processing obligations or behavioral rules beyond persistence.
     */
    Collection = "collection",
    /**
     * document: The bundle is a document. The first resource is a Composition.
     */
    Document = "document",
    /**
     * history: The bundle is a list of resources from a history interaction on a server.
     */
    HistoryList = "history",
    /**
     * message: The bundle is a message. The first resource is a MessageHeader.
     */
    Message = "message",
    /**
     * searchset: The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.
     */
    SearchResults = "searchset",
    /**
     * transaction: The bundle is a transaction - intended to be processed by a server as an atomic commit.
     */
    Transaction = "transaction",
    /**
     * transaction-response: The bundle is a transaction response. Because the response is a transaction response, the transaction has succeeded, and all responses are error free.
     */
    TransactionResponse = "transaction-response"
}
//# sourceMappingURL=BundleTypeValueSet.d.ts.map