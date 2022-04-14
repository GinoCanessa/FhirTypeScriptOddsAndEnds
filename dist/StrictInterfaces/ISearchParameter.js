"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParameterXpathUsageEnum = exports.SearchParameterTypeEnum = exports.SearchParameterStatusEnum = exports.SearchParameterModifierEnum = exports.SearchParameterComparatorEnum = void 0;
/**
 * Code Values for the SearchParameter.comparator field
 */
var SearchParameterComparatorEnum;
(function (SearchParameterComparatorEnum) {
    SearchParameterComparatorEnum["EQ"] = "eq";
    SearchParameterComparatorEnum["NE"] = "ne";
    SearchParameterComparatorEnum["GT"] = "gt";
    SearchParameterComparatorEnum["LT"] = "lt";
    SearchParameterComparatorEnum["GE"] = "ge";
    SearchParameterComparatorEnum["LE"] = "le";
    SearchParameterComparatorEnum["SA"] = "sa";
    SearchParameterComparatorEnum["EB"] = "eb";
    SearchParameterComparatorEnum["AP"] = "ap";
})(SearchParameterComparatorEnum = exports.SearchParameterComparatorEnum || (exports.SearchParameterComparatorEnum = {}));
/**
 * Code Values for the SearchParameter.modifier field
 */
var SearchParameterModifierEnum;
(function (SearchParameterModifierEnum) {
    SearchParameterModifierEnum["MISSING"] = "missing";
    SearchParameterModifierEnum["EXACT"] = "exact";
    SearchParameterModifierEnum["CONTAINS"] = "contains";
    SearchParameterModifierEnum["NOT"] = "not";
    SearchParameterModifierEnum["TEXT"] = "text";
    SearchParameterModifierEnum["IN"] = "in";
    SearchParameterModifierEnum["NOT_IN"] = "not-in";
    SearchParameterModifierEnum["BELOW"] = "below";
    SearchParameterModifierEnum["ABOVE"] = "above";
    SearchParameterModifierEnum["TYPE"] = "type";
    SearchParameterModifierEnum["IDENTIFIER"] = "identifier";
    SearchParameterModifierEnum["OFTYPE"] = "ofType";
})(SearchParameterModifierEnum = exports.SearchParameterModifierEnum || (exports.SearchParameterModifierEnum = {}));
/**
 * Code Values for the SearchParameter.status field
 */
var SearchParameterStatusEnum;
(function (SearchParameterStatusEnum) {
    SearchParameterStatusEnum["DRAFT"] = "draft";
    SearchParameterStatusEnum["ACTIVE"] = "active";
    SearchParameterStatusEnum["RETIRED"] = "retired";
    SearchParameterStatusEnum["UNKNOWN"] = "unknown";
})(SearchParameterStatusEnum = exports.SearchParameterStatusEnum || (exports.SearchParameterStatusEnum = {}));
/**
 * Code Values for the SearchParameter.type field
 */
var SearchParameterTypeEnum;
(function (SearchParameterTypeEnum) {
    SearchParameterTypeEnum["NUMBER"] = "number";
    SearchParameterTypeEnum["DATE"] = "date";
    SearchParameterTypeEnum["STRING"] = "string";
    SearchParameterTypeEnum["TOKEN"] = "token";
    SearchParameterTypeEnum["REFERENCE"] = "reference";
    SearchParameterTypeEnum["COMPOSITE"] = "composite";
    SearchParameterTypeEnum["QUANTITY"] = "quantity";
    SearchParameterTypeEnum["URI"] = "uri";
    SearchParameterTypeEnum["SPECIAL"] = "special";
})(SearchParameterTypeEnum = exports.SearchParameterTypeEnum || (exports.SearchParameterTypeEnum = {}));
/**
 * Code Values for the SearchParameter.xpathUsage field
 */
var SearchParameterXpathUsageEnum;
(function (SearchParameterXpathUsageEnum) {
    SearchParameterXpathUsageEnum["NORMAL"] = "normal";
    SearchParameterXpathUsageEnum["PHONETIC"] = "phonetic";
    SearchParameterXpathUsageEnum["NEARBY"] = "nearby";
    SearchParameterXpathUsageEnum["DISTANCE"] = "distance";
    SearchParameterXpathUsageEnum["OTHER"] = "other";
})(SearchParameterXpathUsageEnum = exports.SearchParameterXpathUsageEnum || (exports.SearchParameterXpathUsageEnum = {}));
//# sourceMappingURL=ISearchParameter.js.map