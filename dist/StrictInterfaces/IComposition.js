"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionStatusEnum = exports.CompositionSectionModeEnum = exports.CompositionRelatesToCodeEnum = exports.CompositionAttesterModeEnum = void 0;
/**
 * Code Values for the Composition.attester.mode field
 */
var CompositionAttesterModeEnum;
(function (CompositionAttesterModeEnum) {
    CompositionAttesterModeEnum["PERSONAL"] = "personal";
    CompositionAttesterModeEnum["PROFESSIONAL"] = "professional";
    CompositionAttesterModeEnum["LEGAL"] = "legal";
    CompositionAttesterModeEnum["OFFICIAL"] = "official";
})(CompositionAttesterModeEnum = exports.CompositionAttesterModeEnum || (exports.CompositionAttesterModeEnum = {}));
/**
 * Code Values for the Composition.relatesTo.code field
 */
var CompositionRelatesToCodeEnum;
(function (CompositionRelatesToCodeEnum) {
    CompositionRelatesToCodeEnum["REPLACES"] = "replaces";
    CompositionRelatesToCodeEnum["TRANSFORMS"] = "transforms";
    CompositionRelatesToCodeEnum["SIGNS"] = "signs";
    CompositionRelatesToCodeEnum["APPENDS"] = "appends";
})(CompositionRelatesToCodeEnum = exports.CompositionRelatesToCodeEnum || (exports.CompositionRelatesToCodeEnum = {}));
/**
 * Code Values for the Composition.section.mode field
 */
var CompositionSectionModeEnum;
(function (CompositionSectionModeEnum) {
    CompositionSectionModeEnum["WORKING"] = "working";
    CompositionSectionModeEnum["SNAPSHOT"] = "snapshot";
    CompositionSectionModeEnum["CHANGES"] = "changes";
})(CompositionSectionModeEnum = exports.CompositionSectionModeEnum || (exports.CompositionSectionModeEnum = {}));
/**
 * Code Values for the Composition.status field
 */
var CompositionStatusEnum;
(function (CompositionStatusEnum) {
    CompositionStatusEnum["PRELIMINARY"] = "preliminary";
    CompositionStatusEnum["FINAL"] = "final";
    CompositionStatusEnum["AMENDED"] = "amended";
    CompositionStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(CompositionStatusEnum = exports.CompositionStatusEnum || (exports.CompositionStatusEnum = {}));
//# sourceMappingURL=IComposition.js.map