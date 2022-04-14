"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientGenderEnum = exports.PatientLinkTypeEnum = exports.PatientContactGenderEnum = void 0;
/**
 * Code Values for the Patient.contact.gender field
 */
var PatientContactGenderEnum;
(function (PatientContactGenderEnum) {
    PatientContactGenderEnum["MALE"] = "male";
    PatientContactGenderEnum["FEMALE"] = "female";
    PatientContactGenderEnum["OTHER"] = "other";
    PatientContactGenderEnum["UNKNOWN"] = "unknown";
})(PatientContactGenderEnum = exports.PatientContactGenderEnum || (exports.PatientContactGenderEnum = {}));
/**
 * Code Values for the Patient.link.type field
 */
var PatientLinkTypeEnum;
(function (PatientLinkTypeEnum) {
    PatientLinkTypeEnum["REPLACED_BY"] = "replaced-by";
    PatientLinkTypeEnum["REPLACES"] = "replaces";
    PatientLinkTypeEnum["REFER"] = "refer";
    PatientLinkTypeEnum["SEEALSO"] = "seealso";
})(PatientLinkTypeEnum = exports.PatientLinkTypeEnum || (exports.PatientLinkTypeEnum = {}));
/**
 * Code Values for the Patient.gender field
 */
var PatientGenderEnum;
(function (PatientGenderEnum) {
    PatientGenderEnum["MALE"] = "male";
    PatientGenderEnum["FEMALE"] = "female";
    PatientGenderEnum["OTHER"] = "other";
    PatientGenderEnum["UNKNOWN"] = "unknown";
})(PatientGenderEnum = exports.PatientGenderEnum || (exports.PatientGenderEnum = {}));
//# sourceMappingURL=IPatient.js.map