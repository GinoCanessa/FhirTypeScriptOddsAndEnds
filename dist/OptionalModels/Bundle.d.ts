import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Both Bundle.link and Bundle.entry.link are defined to support providing additional context when Bundles are used (e.g. [HATEOAS](http://en.wikipedia.org/wiki/HATEOAS)).
 * Bundle.entry.link corresponds to links found in the HTTP header if the resource in the entry was [read](http.html#read) directly.
 * This specification defines some specific uses of Bundle.link for [searching](search.html#conformance) and [paging](http.html#paging), but no specific uses for Bundle.entry.link, and no defined function in a transaction - the meaning is implementation specific.
 */
export declare class BundleLink extends fhirModels.BackboneElement implements fhirInterfaces.IBundleLink {
    /**
     * A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
     */
    relation?: string | undefined;
    _relation?: fhirModels.Element | undefined;
    /**
     * The reference details for the link.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * Default constructor for BundleLink from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBundleLink>);
    /**
     * Factory function to create a BundleLink from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBundleLink): BundleLink;
    /**
     * Check if the current BundleLink contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Information about the search process that lead to the creation of this entry.
 */
export declare class BundleEntrySearch extends fhirModels.BackboneElement implements fhirInterfaces.IBundleEntrySearch {
    /**
     * There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In these circumstances, 'match' takes precedence.
     */
    mode?: BundleEntrySearchModeEnum | undefined;
    _mode?: fhirModels.Element | undefined;
    /**
     * Servers are not required to return a ranking score. 1 is most relevant, and 0 is least relevant. Often, search results are sorted by score, but the client may specify a different sort order.
     * See [Patient Match](patient-operation-match.html) for the EMPI search which relates to this element.
     */
    score?: number | undefined;
    _score?: fhirModels.Element | undefined;
    /**
     * Default constructor for BundleEntrySearch from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBundleEntrySearch>);
    /**
     * Factory function to create a BundleEntrySearch from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBundleEntrySearch): BundleEntrySearch;
    /**
     * Check if the current BundleEntrySearch contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Bundle.entry.search.mode field
 */
export declare enum BundleEntrySearchModeEnum {
    MATCH = "match",
    INCLUDE = "include",
    OUTCOME = "outcome"
}
/**
 * Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
 */
export declare class BundleEntryRequest extends fhirModels.BackboneElement implements fhirInterfaces.IBundleEntryRequest {
    /**
     * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
     */
    ifMatch?: string | undefined;
    _ifMatch?: fhirModels.Element | undefined;
    /**
     * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
     */
    ifModifiedSince?: string | undefined;
    _ifModifiedSince?: fhirModels.Element | undefined;
    /**
     * Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
     */
    ifNoneExist?: string | undefined;
    _ifNoneExist?: fhirModels.Element | undefined;
    /**
     * If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
     */
    ifNoneMatch?: string | undefined;
    _ifNoneMatch?: fhirModels.Element | undefined;
    /**
     * In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
     */
    method?: BundleEntryRequestMethodEnum | undefined;
    _method?: fhirModels.Element | undefined;
    /**
     * E.g. for a Patient Create, the method would be "POST" and the URL would be "Patient". For a Patient Update, the method would be PUT and the URL would be "Patient/[id]".
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * Default constructor for BundleEntryRequest from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBundleEntryRequest>);
    /**
     * Factory function to create a BundleEntryRequest from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBundleEntryRequest): BundleEntryRequest;
    /**
     * Check if the current BundleEntryRequest contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Bundle.entry.request.method field
 */
export declare enum BundleEntryRequestMethodEnum {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}
/**
 * Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
 */
export declare class BundleEntryResponse extends fhirModels.BackboneElement implements fhirInterfaces.IBundleEntryResponse {
    /**
     * Etags match the Resource.meta.versionId. The ETag has to match the version id in the header if a resource is included.
     */
    etag?: string | undefined;
    _etag?: fhirModels.Element | undefined;
    /**
     * This has to match the same time in the meta header (meta.lastUpdated) if a resource is included.
     */
    lastModified?: string | undefined;
    _lastModified?: fhirModels.Element | undefined;
    /**
     * The location header created by processing this operation, populated if the operation returns a location.
     */
    location?: string | undefined;
    _location?: fhirModels.Element | undefined;
    /**
     * For a POST/PUT operation, this is the equivalent outcome that would be returned for prefer = operationoutcome - except that the resource is always returned whether or not the outcome is returned.
     * This outcome is not used for error responses in batch/transaction, only for hints and warnings. In a batch operation, the error will be in Bundle.entry.response, and for transaction, there will be a single OperationOutcome instead of a bundle in the case of an error.
     */
    outcome?: fhirModels.FhirResource | undefined;
    /**
     * The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
     */
    status?: string | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for BundleEntryResponse from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBundleEntryResponse>);
    /**
     * Factory function to create a BundleEntryResponse from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBundleEntryResponse): BundleEntryResponse;
    /**
     * Check if the current BundleEntryResponse contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
 */
export declare class BundleEntry<BundleContentType = fhirModels.FhirResource> extends fhirModels.BackboneElement implements fhirInterfaces.IBundleEntry<BundleContentType> {
    /**
     * fullUrl might not be [unique in the context of a resource](bundle.html#bundle-unique). Note that since [FHIR resources do not need to be served through the FHIR API](references.html), the fullURL might be a URN or an absolute URL that does not end with the logical id of the resource (Resource.id). However, but if the fullUrl does look like a RESTful server URL (e.g. meets the [regex](references.html#regex), then the 'id' portion of the fullUrl SHALL end with the Resource.id.
     * Note that the fullUrl is not the same as the canonical URL - it's an absolute url for an endpoint serving the resource (these will happen to have the same value on the canonical server for the resource with the canonical URL).
     */
    fullUrl?: string | undefined;
    _fullUrl?: fhirModels.Element | undefined;
    /**
     * A series of links that provide context to this entry.
     */
    link?: fhirModels.BundleLink[] | undefined;
    /**
     * Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
     */
    request?: fhirModels.BundleEntryRequest | undefined;
    /**
     * The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.
     */
    resource?: BundleContentType | undefined;
    /**
     * Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
     */
    response?: fhirModels.BundleEntryResponse | undefined;
    /**
     * Information about the search process that lead to the creation of this entry.
     */
    search?: fhirModels.BundleEntrySearch | undefined;
    /**
     * Default constructor for BundleEntry from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBundleEntry>);
    /**
     * Factory function to create a BundleEntry from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBundleEntry): BundleEntry;
    /**
     * Check if the current BundleEntry contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A container for a collection of resources.
 */
export declare class Bundle<BundleContentType = fhirModels.FhirResource> extends fhirModels.Resource implements fhirInterfaces.IBundle<BundleContentType> {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Bundle";
    /**
     * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
     */
    entry?: BundleEntry<BundleContentType>[] | undefined;
    /**
     * Persistent identity generally only matters for batches of type Document, Message, and Collection. It would not normally be populated for search and history results and servers ignore Bundle.identifier when processing batches and transactions. For Documents  the .identifier SHALL be populated such that the .identifier is globally unique.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * Both Bundle.link and Bundle.entry.link are defined to support providing additional context when Bundles are used (e.g. [HATEOAS](http://en.wikipedia.org/wiki/HATEOAS)).
     * Bundle.entry.link corresponds to links found in the HTTP header if the resource in the entry was [read](http.html#read) directly.
     * This specification defines some specific uses of Bundle.link for [searching](search.html#conformance) and [paging](http.html#paging), but no specific uses for Bundle.entry.link, and no defined function in a transaction - the meaning is implementation specific.
     */
    link?: fhirModels.BundleLink[] | undefined;
    /**
     * The signature could be created by the "author" of the bundle or by the originating device.   Requirements around inclusion of a signature, verification of signatures and treatment of signed/non-signed bundles is implementation-environment specific.
     */
    signature?: fhirModels.Signature | undefined;
    /**
     * For many bundles, the timestamp is equal to .meta.lastUpdated, because they are not stored (e.g. search results). When a bundle is placed in a persistent store, .meta.lastUpdated will be usually be changed by the server. When the bundle is a message, a middleware agent altering the message (even if not stored) SHOULD update .meta.lastUpdated. .timestamp is used to track the original time of the Bundle, and SHOULD be populated.
     * Usage:
     * * document : the date the document was created. Note: the composition may predate the document, or be associated with multiple documents. The date of the composition - the authoring time - may be earlier than the document assembly time
     * * message : the date that the content of the message was assembled. This date is not changed by middleware engines unless they add additional data that changes the meaning of the time of the message
     * * history : the date that the history was assembled. This time would be used as the _since time to ask for subsequent updates
     * * searchset : the time that the search set was assembled. Note that different pages MAY have different timestamps but need not. Having different timestamps does not imply that subsequent pages will represent or include changes made since the initial query
     * * transaction | transaction-response | batch | batch-response | collection : no particular assigned meaning
     * The timestamp value should be greater than the lastUpdated and other timestamps in the resources in the bundle, and it should be equal or earlier than the .meta.lastUpdated on the Bundle itself.
     */
    timestamp?: string | undefined;
    _timestamp?: fhirModels.Element | undefined;
    /**
     * Only used if the bundle is a search result set. The total does not include resources such as OperationOutcome and included resources, only the total number of matching resources.
     */
    total?: number | undefined;
    _total?: fhirModels.Element | undefined;
    /**
     * It's possible to use a bundle for other purposes (e.g. a document can be accepted as a transaction). This is primarily defined so that there can be specific rules for some of the bundle types.
     */
    type?: BundleTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for Bundle from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IBundle>);
    /**
     * Factory function to create a Bundle from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IBundle): Bundle;
    /**
     * Check if the current Bundle contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Bundle.type field
 */
export declare enum BundleTypeEnum {
    DOCUMENT = "document",
    MESSAGE = "message",
    TRANSACTION = "transaction",
    TRANSACTION_RESPONSE = "transaction-response",
    BATCH = "batch",
    BATCH_RESPONSE = "batch-response",
    HISTORY = "history",
    SEARCHSET = "searchset",
    COLLECTION = "collection"
}
//# sourceMappingURL=Bundle.d.ts.map