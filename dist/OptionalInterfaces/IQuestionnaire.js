"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionnaireStatusEnum = exports.QuestionnaireItemTypeEnum = exports.QuestionnaireItemEnableBehaviorEnum = exports.QuestionnaireItemEnableWhenOperatorEnum = void 0;
/**
 * Code Values for the Questionnaire.item.enableWhen.operator field
 */
var QuestionnaireItemEnableWhenOperatorEnum;
(function (QuestionnaireItemEnableWhenOperatorEnum) {
    QuestionnaireItemEnableWhenOperatorEnum["EXISTS"] = "exists";
    QuestionnaireItemEnableWhenOperatorEnum["EQUALS"] = "=";
    QuestionnaireItemEnableWhenOperatorEnum["NOT_EQUALS"] = "!=";
    QuestionnaireItemEnableWhenOperatorEnum["GREATER_THAN"] = ">";
    QuestionnaireItemEnableWhenOperatorEnum["LESS_THAN"] = "<";
    QuestionnaireItemEnableWhenOperatorEnum["GREATER_THAN_OR_EQUALS"] = ">=";
    QuestionnaireItemEnableWhenOperatorEnum["LESS_THAN_OR_EQUALS"] = "<=";
})(QuestionnaireItemEnableWhenOperatorEnum = exports.QuestionnaireItemEnableWhenOperatorEnum || (exports.QuestionnaireItemEnableWhenOperatorEnum = {}));
/**
 * Code Values for the Questionnaire.item.enableBehavior field
 */
var QuestionnaireItemEnableBehaviorEnum;
(function (QuestionnaireItemEnableBehaviorEnum) {
    QuestionnaireItemEnableBehaviorEnum["ALL"] = "all";
    QuestionnaireItemEnableBehaviorEnum["ANY"] = "any";
})(QuestionnaireItemEnableBehaviorEnum = exports.QuestionnaireItemEnableBehaviorEnum || (exports.QuestionnaireItemEnableBehaviorEnum = {}));
/**
 * Code Values for the Questionnaire.item.type field
 */
var QuestionnaireItemTypeEnum;
(function (QuestionnaireItemTypeEnum) {
    QuestionnaireItemTypeEnum["GROUP"] = "group";
    QuestionnaireItemTypeEnum["DISPLAY"] = "display";
    QuestionnaireItemTypeEnum["QUESTION"] = "question";
    QuestionnaireItemTypeEnum["BOOLEAN"] = "boolean";
    QuestionnaireItemTypeEnum["DECIMAL"] = "decimal";
    QuestionnaireItemTypeEnum["INTEGER"] = "integer";
    QuestionnaireItemTypeEnum["DATE"] = "date";
    QuestionnaireItemTypeEnum["DATETIME"] = "dateTime";
    QuestionnaireItemTypeEnum["TIME"] = "time";
    QuestionnaireItemTypeEnum["STRING"] = "string";
    QuestionnaireItemTypeEnum["TEXT"] = "text";
    QuestionnaireItemTypeEnum["URL"] = "url";
    QuestionnaireItemTypeEnum["CHOICE"] = "choice";
    QuestionnaireItemTypeEnum["OPEN_CHOICE"] = "open-choice";
    QuestionnaireItemTypeEnum["ATTACHMENT"] = "attachment";
    QuestionnaireItemTypeEnum["REFERENCE"] = "reference";
    QuestionnaireItemTypeEnum["QUANTITY"] = "quantity";
})(QuestionnaireItemTypeEnum = exports.QuestionnaireItemTypeEnum || (exports.QuestionnaireItemTypeEnum = {}));
/**
 * Code Values for the Questionnaire.status field
 */
var QuestionnaireStatusEnum;
(function (QuestionnaireStatusEnum) {
    QuestionnaireStatusEnum["DRAFT"] = "draft";
    QuestionnaireStatusEnum["ACTIVE"] = "active";
    QuestionnaireStatusEnum["RETIRED"] = "retired";
    QuestionnaireStatusEnum["UNKNOWN"] = "unknown";
})(QuestionnaireStatusEnum = exports.QuestionnaireStatusEnum || (exports.QuestionnaireStatusEnum = {}));
//# sourceMappingURL=IQuestionnaire.js.map