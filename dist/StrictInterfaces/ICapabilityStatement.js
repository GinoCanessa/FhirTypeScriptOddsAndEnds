"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStatementStatusEnum = exports.CapabilityStatementKindEnum = exports.CapabilityStatementFormatEnum = exports.CapabilityStatementDocumentModeEnum = exports.CapabilityStatementMessagingSupportedMessageModeEnum = exports.CapabilityStatementRestModeEnum = exports.CapabilityStatementRestInteractionCodeEnum = exports.CapabilityStatementRestResourceVersioningEnum = exports.CapabilityStatementRestResourceReferencePolicyEnum = exports.CapabilityStatementRestResourceConditionalReadEnum = exports.CapabilityStatementRestResourceConditionalDeleteEnum = exports.CapabilityStatementRestResourceSearchParamTypeEnum = exports.CapabilityStatementRestResourceInteractionCodeEnum = void 0;
/**
 * Code Values for the CapabilityStatement.rest.resource.interaction.code field
 */
var CapabilityStatementRestResourceInteractionCodeEnum;
(function (CapabilityStatementRestResourceInteractionCodeEnum) {
    CapabilityStatementRestResourceInteractionCodeEnum["READ"] = "read";
    CapabilityStatementRestResourceInteractionCodeEnum["VREAD"] = "vread";
    CapabilityStatementRestResourceInteractionCodeEnum["UPDATE"] = "update";
    CapabilityStatementRestResourceInteractionCodeEnum["PATCH"] = "patch";
    CapabilityStatementRestResourceInteractionCodeEnum["DELETE"] = "delete";
    CapabilityStatementRestResourceInteractionCodeEnum["HISTORY_INSTANCE"] = "history-instance";
    CapabilityStatementRestResourceInteractionCodeEnum["HISTORY_TYPE"] = "history-type";
    CapabilityStatementRestResourceInteractionCodeEnum["CREATE"] = "create";
    CapabilityStatementRestResourceInteractionCodeEnum["SEARCH_TYPE"] = "search-type";
})(CapabilityStatementRestResourceInteractionCodeEnum = exports.CapabilityStatementRestResourceInteractionCodeEnum || (exports.CapabilityStatementRestResourceInteractionCodeEnum = {}));
/**
 * Code Values for the CapabilityStatement.rest.resource.searchParam.type field
 */
var CapabilityStatementRestResourceSearchParamTypeEnum;
(function (CapabilityStatementRestResourceSearchParamTypeEnum) {
    CapabilityStatementRestResourceSearchParamTypeEnum["NUMBER"] = "number";
    CapabilityStatementRestResourceSearchParamTypeEnum["DATE"] = "date";
    CapabilityStatementRestResourceSearchParamTypeEnum["STRING"] = "string";
    CapabilityStatementRestResourceSearchParamTypeEnum["TOKEN"] = "token";
    CapabilityStatementRestResourceSearchParamTypeEnum["REFERENCE"] = "reference";
    CapabilityStatementRestResourceSearchParamTypeEnum["COMPOSITE"] = "composite";
    CapabilityStatementRestResourceSearchParamTypeEnum["QUANTITY"] = "quantity";
    CapabilityStatementRestResourceSearchParamTypeEnum["URI"] = "uri";
    CapabilityStatementRestResourceSearchParamTypeEnum["SPECIAL"] = "special";
})(CapabilityStatementRestResourceSearchParamTypeEnum = exports.CapabilityStatementRestResourceSearchParamTypeEnum || (exports.CapabilityStatementRestResourceSearchParamTypeEnum = {}));
/**
 * Code Values for the CapabilityStatement.rest.resource.conditionalDelete field
 */
var CapabilityStatementRestResourceConditionalDeleteEnum;
(function (CapabilityStatementRestResourceConditionalDeleteEnum) {
    CapabilityStatementRestResourceConditionalDeleteEnum["NOT_SUPPORTED"] = "not-supported";
    CapabilityStatementRestResourceConditionalDeleteEnum["SINGLE"] = "single";
    CapabilityStatementRestResourceConditionalDeleteEnum["MULTIPLE"] = "multiple";
})(CapabilityStatementRestResourceConditionalDeleteEnum = exports.CapabilityStatementRestResourceConditionalDeleteEnum || (exports.CapabilityStatementRestResourceConditionalDeleteEnum = {}));
/**
 * Code Values for the CapabilityStatement.rest.resource.conditionalRead field
 */
var CapabilityStatementRestResourceConditionalReadEnum;
(function (CapabilityStatementRestResourceConditionalReadEnum) {
    CapabilityStatementRestResourceConditionalReadEnum["NOT_SUPPORTED"] = "not-supported";
    CapabilityStatementRestResourceConditionalReadEnum["MODIFIED_SINCE"] = "modified-since";
    CapabilityStatementRestResourceConditionalReadEnum["NOT_MATCH"] = "not-match";
    CapabilityStatementRestResourceConditionalReadEnum["FULL_SUPPORT"] = "full-support";
})(CapabilityStatementRestResourceConditionalReadEnum = exports.CapabilityStatementRestResourceConditionalReadEnum || (exports.CapabilityStatementRestResourceConditionalReadEnum = {}));
/**
 * Code Values for the CapabilityStatement.rest.resource.referencePolicy field
 */
var CapabilityStatementRestResourceReferencePolicyEnum;
(function (CapabilityStatementRestResourceReferencePolicyEnum) {
    CapabilityStatementRestResourceReferencePolicyEnum["LITERAL"] = "literal";
    CapabilityStatementRestResourceReferencePolicyEnum["LOGICAL"] = "logical";
    CapabilityStatementRestResourceReferencePolicyEnum["RESOLVES"] = "resolves";
    CapabilityStatementRestResourceReferencePolicyEnum["ENFORCED"] = "enforced";
    CapabilityStatementRestResourceReferencePolicyEnum["LOCAL"] = "local";
})(CapabilityStatementRestResourceReferencePolicyEnum = exports.CapabilityStatementRestResourceReferencePolicyEnum || (exports.CapabilityStatementRestResourceReferencePolicyEnum = {}));
/**
 * Code Values for the CapabilityStatement.rest.resource.versioning field
 */
var CapabilityStatementRestResourceVersioningEnum;
(function (CapabilityStatementRestResourceVersioningEnum) {
    CapabilityStatementRestResourceVersioningEnum["NO_VERSION"] = "no-version";
    CapabilityStatementRestResourceVersioningEnum["VERSIONED"] = "versioned";
    CapabilityStatementRestResourceVersioningEnum["VERSIONED_UPDATE"] = "versioned-update";
})(CapabilityStatementRestResourceVersioningEnum = exports.CapabilityStatementRestResourceVersioningEnum || (exports.CapabilityStatementRestResourceVersioningEnum = {}));
/**
 * Code Values for the CapabilityStatement.rest.interaction.code field
 */
var CapabilityStatementRestInteractionCodeEnum;
(function (CapabilityStatementRestInteractionCodeEnum) {
    CapabilityStatementRestInteractionCodeEnum["TRANSACTION"] = "transaction";
    CapabilityStatementRestInteractionCodeEnum["BATCH"] = "batch";
    CapabilityStatementRestInteractionCodeEnum["SEARCH_SYSTEM"] = "search-system";
    CapabilityStatementRestInteractionCodeEnum["HISTORY_SYSTEM"] = "history-system";
})(CapabilityStatementRestInteractionCodeEnum = exports.CapabilityStatementRestInteractionCodeEnum || (exports.CapabilityStatementRestInteractionCodeEnum = {}));
/**
 * Code Values for the CapabilityStatement.rest.mode field
 */
var CapabilityStatementRestModeEnum;
(function (CapabilityStatementRestModeEnum) {
    CapabilityStatementRestModeEnum["CLIENT"] = "client";
    CapabilityStatementRestModeEnum["SERVER"] = "server";
})(CapabilityStatementRestModeEnum = exports.CapabilityStatementRestModeEnum || (exports.CapabilityStatementRestModeEnum = {}));
/**
 * Code Values for the CapabilityStatement.messaging.supportedMessage.mode field
 */
var CapabilityStatementMessagingSupportedMessageModeEnum;
(function (CapabilityStatementMessagingSupportedMessageModeEnum) {
    CapabilityStatementMessagingSupportedMessageModeEnum["SENDER"] = "sender";
    CapabilityStatementMessagingSupportedMessageModeEnum["RECEIVER"] = "receiver";
})(CapabilityStatementMessagingSupportedMessageModeEnum = exports.CapabilityStatementMessagingSupportedMessageModeEnum || (exports.CapabilityStatementMessagingSupportedMessageModeEnum = {}));
/**
 * Code Values for the CapabilityStatement.document.mode field
 */
var CapabilityStatementDocumentModeEnum;
(function (CapabilityStatementDocumentModeEnum) {
    CapabilityStatementDocumentModeEnum["PRODUCER"] = "producer";
    CapabilityStatementDocumentModeEnum["CONSUMER"] = "consumer";
})(CapabilityStatementDocumentModeEnum = exports.CapabilityStatementDocumentModeEnum || (exports.CapabilityStatementDocumentModeEnum = {}));
/**
 * Code Values for the CapabilityStatement.format field
 */
var CapabilityStatementFormatEnum;
(function (CapabilityStatementFormatEnum) {
    CapabilityStatementFormatEnum["XML"] = "xml";
    CapabilityStatementFormatEnum["JSON"] = "json";
    CapabilityStatementFormatEnum["TTL"] = "ttl";
    CapabilityStatementFormatEnum["MIME"] = "MIME";
})(CapabilityStatementFormatEnum = exports.CapabilityStatementFormatEnum || (exports.CapabilityStatementFormatEnum = {}));
/**
 * Code Values for the CapabilityStatement.kind field
 */
var CapabilityStatementKindEnum;
(function (CapabilityStatementKindEnum) {
    CapabilityStatementKindEnum["INSTANCE"] = "instance";
    CapabilityStatementKindEnum["CAPABILITY"] = "capability";
    CapabilityStatementKindEnum["REQUIREMENTS"] = "requirements";
})(CapabilityStatementKindEnum = exports.CapabilityStatementKindEnum || (exports.CapabilityStatementKindEnum = {}));
/**
 * Code Values for the CapabilityStatement.status field
 */
var CapabilityStatementStatusEnum;
(function (CapabilityStatementStatusEnum) {
    CapabilityStatementStatusEnum["DRAFT"] = "draft";
    CapabilityStatementStatusEnum["ACTIVE"] = "active";
    CapabilityStatementStatusEnum["RETIRED"] = "retired";
    CapabilityStatementStatusEnum["UNKNOWN"] = "unknown";
})(CapabilityStatementStatusEnum = exports.CapabilityStatementStatusEnum || (exports.CapabilityStatementStatusEnum = {}));
//# sourceMappingURL=ICapabilityStatement.js.map