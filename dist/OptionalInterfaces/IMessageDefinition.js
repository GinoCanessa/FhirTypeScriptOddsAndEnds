"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDefinitionStatusEnum = exports.MessageDefinitionResponseRequiredEnum = exports.MessageDefinitionCategoryEnum = void 0;
/**
 * Code Values for the MessageDefinition.category field
 */
var MessageDefinitionCategoryEnum;
(function (MessageDefinitionCategoryEnum) {
    MessageDefinitionCategoryEnum["CONSEQUENCE"] = "consequence";
    MessageDefinitionCategoryEnum["CURRENCY"] = "currency";
    MessageDefinitionCategoryEnum["NOTIFICATION"] = "notification";
})(MessageDefinitionCategoryEnum = exports.MessageDefinitionCategoryEnum || (exports.MessageDefinitionCategoryEnum = {}));
/**
 * Code Values for the MessageDefinition.responseRequired field
 */
var MessageDefinitionResponseRequiredEnum;
(function (MessageDefinitionResponseRequiredEnum) {
    MessageDefinitionResponseRequiredEnum["ALWAYS"] = "always";
    MessageDefinitionResponseRequiredEnum["ON_ERROR"] = "on-error";
    MessageDefinitionResponseRequiredEnum["NEVER"] = "never";
    MessageDefinitionResponseRequiredEnum["ON_SUCCESS"] = "on-success";
})(MessageDefinitionResponseRequiredEnum = exports.MessageDefinitionResponseRequiredEnum || (exports.MessageDefinitionResponseRequiredEnum = {}));
/**
 * Code Values for the MessageDefinition.status field
 */
var MessageDefinitionStatusEnum;
(function (MessageDefinitionStatusEnum) {
    MessageDefinitionStatusEnum["DRAFT"] = "draft";
    MessageDefinitionStatusEnum["ACTIVE"] = "active";
    MessageDefinitionStatusEnum["RETIRED"] = "retired";
    MessageDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(MessageDefinitionStatusEnum = exports.MessageDefinitionStatusEnum || (exports.MessageDefinitionStatusEnum = {}));
//# sourceMappingURL=IMessageDefinition.js.map