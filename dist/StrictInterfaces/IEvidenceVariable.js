"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceVariableTypeEnum = exports.EvidenceVariableStatusEnum = exports.EvidenceVariableCharacteristicGroupMeasureEnum = void 0;
/**
 * Code Values for the EvidenceVariable.characteristic.groupMeasure field
 */
var EvidenceVariableCharacteristicGroupMeasureEnum;
(function (EvidenceVariableCharacteristicGroupMeasureEnum) {
    EvidenceVariableCharacteristicGroupMeasureEnum["MEAN"] = "mean";
    EvidenceVariableCharacteristicGroupMeasureEnum["MEDIAN"] = "median";
    EvidenceVariableCharacteristicGroupMeasureEnum["MEAN_OF_MEAN"] = "mean-of-mean";
    EvidenceVariableCharacteristicGroupMeasureEnum["MEAN_OF_MEDIAN"] = "mean-of-median";
    EvidenceVariableCharacteristicGroupMeasureEnum["MEDIAN_OF_MEAN"] = "median-of-mean";
    EvidenceVariableCharacteristicGroupMeasureEnum["MEDIAN_OF_MEDIAN"] = "median-of-median";
})(EvidenceVariableCharacteristicGroupMeasureEnum = exports.EvidenceVariableCharacteristicGroupMeasureEnum || (exports.EvidenceVariableCharacteristicGroupMeasureEnum = {}));
/**
 * Code Values for the EvidenceVariable.status field
 */
var EvidenceVariableStatusEnum;
(function (EvidenceVariableStatusEnum) {
    EvidenceVariableStatusEnum["DRAFT"] = "draft";
    EvidenceVariableStatusEnum["ACTIVE"] = "active";
    EvidenceVariableStatusEnum["RETIRED"] = "retired";
    EvidenceVariableStatusEnum["UNKNOWN"] = "unknown";
})(EvidenceVariableStatusEnum = exports.EvidenceVariableStatusEnum || (exports.EvidenceVariableStatusEnum = {}));
/**
 * Code Values for the EvidenceVariable.type field
 */
var EvidenceVariableTypeEnum;
(function (EvidenceVariableTypeEnum) {
    EvidenceVariableTypeEnum["DICHOTOMOUS"] = "dichotomous";
    EvidenceVariableTypeEnum["CONTINUOUS"] = "continuous";
    EvidenceVariableTypeEnum["DESCRIPTIVE"] = "descriptive";
})(EvidenceVariableTypeEnum = exports.EvidenceVariableTypeEnum || (exports.EvidenceVariableTypeEnum = {}));
//# sourceMappingURL=IEvidenceVariable.js.map