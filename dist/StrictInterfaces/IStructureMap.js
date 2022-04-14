"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureMapStatusEnum = exports.StructureMapGroupTypeModeEnum = exports.StructureMapGroupRuleTargetTransformEnum = exports.StructureMapGroupRuleTargetListModeEnum = exports.StructureMapGroupRuleTargetContextTypeEnum = exports.StructureMapGroupRuleSourceListModeEnum = exports.StructureMapGroupInputModeEnum = exports.StructureMapStructureModeEnum = void 0;
/**
 * Code Values for the StructureMap.structure.mode field
 */
var StructureMapStructureModeEnum;
(function (StructureMapStructureModeEnum) {
    StructureMapStructureModeEnum["SOURCE"] = "source";
    StructureMapStructureModeEnum["QUERIED"] = "queried";
    StructureMapStructureModeEnum["TARGET"] = "target";
    StructureMapStructureModeEnum["PRODUCED"] = "produced";
})(StructureMapStructureModeEnum = exports.StructureMapStructureModeEnum || (exports.StructureMapStructureModeEnum = {}));
/**
 * Code Values for the StructureMap.group.input.mode field
 */
var StructureMapGroupInputModeEnum;
(function (StructureMapGroupInputModeEnum) {
    StructureMapGroupInputModeEnum["SOURCE"] = "source";
    StructureMapGroupInputModeEnum["TARGET"] = "target";
})(StructureMapGroupInputModeEnum = exports.StructureMapGroupInputModeEnum || (exports.StructureMapGroupInputModeEnum = {}));
/**
 * Code Values for the StructureMap.group.rule.source.listMode field
 */
var StructureMapGroupRuleSourceListModeEnum;
(function (StructureMapGroupRuleSourceListModeEnum) {
    StructureMapGroupRuleSourceListModeEnum["FIRST"] = "first";
    StructureMapGroupRuleSourceListModeEnum["NOT_FIRST"] = "not_first";
    StructureMapGroupRuleSourceListModeEnum["LAST"] = "last";
    StructureMapGroupRuleSourceListModeEnum["NOT_LAST"] = "not_last";
    StructureMapGroupRuleSourceListModeEnum["ONLY_ONE"] = "only_one";
})(StructureMapGroupRuleSourceListModeEnum = exports.StructureMapGroupRuleSourceListModeEnum || (exports.StructureMapGroupRuleSourceListModeEnum = {}));
/**
 * Code Values for the StructureMap.group.rule.target.contextType field
 */
var StructureMapGroupRuleTargetContextTypeEnum;
(function (StructureMapGroupRuleTargetContextTypeEnum) {
    StructureMapGroupRuleTargetContextTypeEnum["TYPE"] = "type";
    StructureMapGroupRuleTargetContextTypeEnum["VARIABLE"] = "variable";
})(StructureMapGroupRuleTargetContextTypeEnum = exports.StructureMapGroupRuleTargetContextTypeEnum || (exports.StructureMapGroupRuleTargetContextTypeEnum = {}));
/**
 * Code Values for the StructureMap.group.rule.target.listMode field
 */
var StructureMapGroupRuleTargetListModeEnum;
(function (StructureMapGroupRuleTargetListModeEnum) {
    StructureMapGroupRuleTargetListModeEnum["FIRST"] = "first";
    StructureMapGroupRuleTargetListModeEnum["SHARE"] = "share";
    StructureMapGroupRuleTargetListModeEnum["LAST"] = "last";
    StructureMapGroupRuleTargetListModeEnum["COLLATE"] = "collate";
})(StructureMapGroupRuleTargetListModeEnum = exports.StructureMapGroupRuleTargetListModeEnum || (exports.StructureMapGroupRuleTargetListModeEnum = {}));
/**
 * Code Values for the StructureMap.group.rule.target.transform field
 */
var StructureMapGroupRuleTargetTransformEnum;
(function (StructureMapGroupRuleTargetTransformEnum) {
    StructureMapGroupRuleTargetTransformEnum["CREATE"] = "create";
    StructureMapGroupRuleTargetTransformEnum["COPY"] = "copy";
    StructureMapGroupRuleTargetTransformEnum["TRUNCATE"] = "truncate";
    StructureMapGroupRuleTargetTransformEnum["ESCAPE"] = "escape";
    StructureMapGroupRuleTargetTransformEnum["CAST"] = "cast";
    StructureMapGroupRuleTargetTransformEnum["APPEND"] = "append";
    StructureMapGroupRuleTargetTransformEnum["TRANSLATE"] = "translate";
    StructureMapGroupRuleTargetTransformEnum["REFERENCE"] = "reference";
    StructureMapGroupRuleTargetTransformEnum["DATEOP"] = "dateOp";
    StructureMapGroupRuleTargetTransformEnum["UUID"] = "uuid";
    StructureMapGroupRuleTargetTransformEnum["POINTER"] = "pointer";
    StructureMapGroupRuleTargetTransformEnum["EVALUATE"] = "evaluate";
    StructureMapGroupRuleTargetTransformEnum["CC"] = "cc";
    StructureMapGroupRuleTargetTransformEnum["C"] = "c";
    StructureMapGroupRuleTargetTransformEnum["QTY"] = "qty";
    StructureMapGroupRuleTargetTransformEnum["ID"] = "id";
    StructureMapGroupRuleTargetTransformEnum["CP"] = "cp";
})(StructureMapGroupRuleTargetTransformEnum = exports.StructureMapGroupRuleTargetTransformEnum || (exports.StructureMapGroupRuleTargetTransformEnum = {}));
/**
 * Code Values for the StructureMap.group.typeMode field
 */
var StructureMapGroupTypeModeEnum;
(function (StructureMapGroupTypeModeEnum) {
    StructureMapGroupTypeModeEnum["NONE"] = "none";
    StructureMapGroupTypeModeEnum["TYPES"] = "types";
    StructureMapGroupTypeModeEnum["TYPE_AND_TYPES"] = "type-and-types";
})(StructureMapGroupTypeModeEnum = exports.StructureMapGroupTypeModeEnum || (exports.StructureMapGroupTypeModeEnum = {}));
/**
 * Code Values for the StructureMap.status field
 */
var StructureMapStatusEnum;
(function (StructureMapStatusEnum) {
    StructureMapStatusEnum["DRAFT"] = "draft";
    StructureMapStatusEnum["ACTIVE"] = "active";
    StructureMapStatusEnum["RETIRED"] = "retired";
    StructureMapStatusEnum["UNKNOWN"] = "unknown";
})(StructureMapStatusEnum = exports.StructureMapStatusEnum || (exports.StructureMapStatusEnum = {}));
//# sourceMappingURL=IStructureMap.js.map