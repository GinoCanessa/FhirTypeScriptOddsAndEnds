"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplementationGuideStatusEnum = exports.ImplementationGuideDefinitionParameterCodeEnum = exports.ImplementationGuideDefinitionPageGenerationEnum = void 0;
/**
 * Code Values for the ImplementationGuide.definition.page.generation field
 */
var ImplementationGuideDefinitionPageGenerationEnum;
(function (ImplementationGuideDefinitionPageGenerationEnum) {
    ImplementationGuideDefinitionPageGenerationEnum["HTML"] = "html";
    ImplementationGuideDefinitionPageGenerationEnum["MARKDOWN"] = "markdown";
    ImplementationGuideDefinitionPageGenerationEnum["XML"] = "xml";
    ImplementationGuideDefinitionPageGenerationEnum["GENERATED"] = "generated";
})(ImplementationGuideDefinitionPageGenerationEnum = exports.ImplementationGuideDefinitionPageGenerationEnum || (exports.ImplementationGuideDefinitionPageGenerationEnum = {}));
/**
 * Code Values for the ImplementationGuide.definition.parameter.code field
 */
var ImplementationGuideDefinitionParameterCodeEnum;
(function (ImplementationGuideDefinitionParameterCodeEnum) {
    ImplementationGuideDefinitionParameterCodeEnum["APPLY"] = "apply";
    ImplementationGuideDefinitionParameterCodeEnum["PATH_RESOURCE"] = "path-resource";
    ImplementationGuideDefinitionParameterCodeEnum["PATH_PAGES"] = "path-pages";
    ImplementationGuideDefinitionParameterCodeEnum["PATH_TX_CACHE"] = "path-tx-cache";
    ImplementationGuideDefinitionParameterCodeEnum["EXPANSION_PARAMETER"] = "expansion-parameter";
    ImplementationGuideDefinitionParameterCodeEnum["RULE_BROKEN_LINKS"] = "rule-broken-links";
    ImplementationGuideDefinitionParameterCodeEnum["GENERATE_XML"] = "generate-xml";
    ImplementationGuideDefinitionParameterCodeEnum["GENERATE_JSON"] = "generate-json";
    ImplementationGuideDefinitionParameterCodeEnum["GENERATE_TURTLE"] = "generate-turtle";
    ImplementationGuideDefinitionParameterCodeEnum["HTML_TEMPLATE"] = "html-template";
})(ImplementationGuideDefinitionParameterCodeEnum = exports.ImplementationGuideDefinitionParameterCodeEnum || (exports.ImplementationGuideDefinitionParameterCodeEnum = {}));
/**
 * Code Values for the ImplementationGuide.status field
 */
var ImplementationGuideStatusEnum;
(function (ImplementationGuideStatusEnum) {
    ImplementationGuideStatusEnum["DRAFT"] = "draft";
    ImplementationGuideStatusEnum["ACTIVE"] = "active";
    ImplementationGuideStatusEnum["RETIRED"] = "retired";
    ImplementationGuideStatusEnum["UNKNOWN"] = "unknown";
})(ImplementationGuideStatusEnum = exports.ImplementationGuideStatusEnum || (exports.ImplementationGuideStatusEnum = {}));
//# sourceMappingURL=IImplementationGuide.js.map