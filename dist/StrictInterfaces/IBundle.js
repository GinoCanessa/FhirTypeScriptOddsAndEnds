"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleTypeEnum = exports.BundleEntryRequestMethodEnum = exports.BundleEntrySearchModeEnum = void 0;
/**
 * Code Values for the Bundle.entry.search.mode field
 */
var BundleEntrySearchModeEnum;
(function (BundleEntrySearchModeEnum) {
    BundleEntrySearchModeEnum["MATCH"] = "match";
    BundleEntrySearchModeEnum["INCLUDE"] = "include";
    BundleEntrySearchModeEnum["OUTCOME"] = "outcome";
})(BundleEntrySearchModeEnum = exports.BundleEntrySearchModeEnum || (exports.BundleEntrySearchModeEnum = {}));
/**
 * Code Values for the Bundle.entry.request.method field
 */
var BundleEntryRequestMethodEnum;
(function (BundleEntryRequestMethodEnum) {
    BundleEntryRequestMethodEnum["GET"] = "GET";
    BundleEntryRequestMethodEnum["HEAD"] = "HEAD";
    BundleEntryRequestMethodEnum["POST"] = "POST";
    BundleEntryRequestMethodEnum["PUT"] = "PUT";
    BundleEntryRequestMethodEnum["DELETE"] = "DELETE";
    BundleEntryRequestMethodEnum["PATCH"] = "PATCH";
})(BundleEntryRequestMethodEnum = exports.BundleEntryRequestMethodEnum || (exports.BundleEntryRequestMethodEnum = {}));
/**
 * Code Values for the Bundle.type field
 */
var BundleTypeEnum;
(function (BundleTypeEnum) {
    BundleTypeEnum["DOCUMENT"] = "document";
    BundleTypeEnum["MESSAGE"] = "message";
    BundleTypeEnum["TRANSACTION"] = "transaction";
    BundleTypeEnum["TRANSACTION_RESPONSE"] = "transaction-response";
    BundleTypeEnum["BATCH"] = "batch";
    BundleTypeEnum["BATCH_RESPONSE"] = "batch-response";
    BundleTypeEnum["HISTORY"] = "history";
    BundleTypeEnum["SEARCHSET"] = "searchset";
    BundleTypeEnum["COLLECTION"] = "collection";
})(BundleTypeEnum = exports.BundleTypeEnum || (exports.BundleTypeEnum = {}));
//# sourceMappingURL=IBundle.js.map