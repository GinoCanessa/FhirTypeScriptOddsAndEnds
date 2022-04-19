// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Indicates the purpose of a bundle - how it is intended to be used.
 */
export const BundleTypeValueSet = {
  /**
   * The bundle is a set of actions - intended to be processed by a server as a group of independent actions.
   */
  bundle_type_Batch: new Coding({
    code: "batch",
    display: "Batch",
    system: "http://hl7.org/fhir/bundle-type"
  }),
  /**
   * The bundle is a batch response. Note that as a batch, some responses may indicate failure and others success.
   */
  bundle_type_BatchResponse: new Coding({
    code: "batch-response",
    display: "Batch Response",
    system: "http://hl7.org/fhir/bundle-type"
  }),
  /**
   * The bundle is a set of resources collected into a single package for ease of distribution that imposes no processing obligations or behavioral rules beyond persistence.
   */
  bundle_type_Collection: new Coding({
    code: "collection",
    display: "Collection",
    system: "http://hl7.org/fhir/bundle-type"
  }),
  /**
   * The bundle is a document. The first resource is a Composition.
   */
  bundle_type_Document: new Coding({
    code: "document",
    display: "Document",
    system: "http://hl7.org/fhir/bundle-type"
  }),
  /**
   * The bundle is a list of resources from a history interaction on a server.
   */
  bundle_type_HistoryList: new Coding({
    code: "history",
    display: "History List",
    system: "http://hl7.org/fhir/bundle-type"
  }),
  /**
   * The bundle is a message. The first resource is a MessageHeader.
   */
  bundle_type_Message: new Coding({
    code: "message",
    display: "Message",
    system: "http://hl7.org/fhir/bundle-type"
  }),
  /**
   * The bundle is a list of resources returned as a result of a search/query interaction, operation, or message.
   */
  bundle_type_SearchResults: new Coding({
    code: "searchset",
    display: "Search Results",
    system: "http://hl7.org/fhir/bundle-type"
  }),
  /**
   * The bundle is a transaction - intended to be processed by a server as an atomic commit.
   */
  bundle_type_Transaction: new Coding({
    code: "transaction",
    display: "Transaction",
    system: "http://hl7.org/fhir/bundle-type"
  }),
  /**
   * The bundle is a transaction response. Because the response is a transaction response, the transaction has succeeded, and all responses are error free.
   */
  bundle_type_TransactionResponse: new Coding({
    code: "transaction-response",
    display: "Transaction Response",
    system: "http://hl7.org/fhir/bundle-type"
  }),
};
