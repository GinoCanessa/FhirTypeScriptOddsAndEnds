"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentStatusEnum = exports.ConsentProvisionTypeEnum = exports.ConsentProvisionDataMeaningEnum = void 0;
/**
 * Code Values for the Consent.provision.data.meaning field
 */
var ConsentProvisionDataMeaningEnum;
(function (ConsentProvisionDataMeaningEnum) {
    ConsentProvisionDataMeaningEnum["INSTANCE"] = "instance";
    ConsentProvisionDataMeaningEnum["RELATED"] = "related";
    ConsentProvisionDataMeaningEnum["DEPENDENTS"] = "dependents";
    ConsentProvisionDataMeaningEnum["AUTHOREDBY"] = "authoredby";
})(ConsentProvisionDataMeaningEnum = exports.ConsentProvisionDataMeaningEnum || (exports.ConsentProvisionDataMeaningEnum = {}));
/**
 * Code Values for the Consent.provision.type field
 */
var ConsentProvisionTypeEnum;
(function (ConsentProvisionTypeEnum) {
    ConsentProvisionTypeEnum["DENY"] = "deny";
    ConsentProvisionTypeEnum["PERMIT"] = "permit";
})(ConsentProvisionTypeEnum = exports.ConsentProvisionTypeEnum || (exports.ConsentProvisionTypeEnum = {}));
/**
 * Code Values for the Consent.status field
 */
var ConsentStatusEnum;
(function (ConsentStatusEnum) {
    ConsentStatusEnum["DRAFT"] = "draft";
    ConsentStatusEnum["PROPOSED"] = "proposed";
    ConsentStatusEnum["ACTIVE"] = "active";
    ConsentStatusEnum["REJECTED"] = "rejected";
    ConsentStatusEnum["INACTIVE"] = "inactive";
    ConsentStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(ConsentStatusEnum = exports.ConsentStatusEnum || (exports.ConsentStatusEnum = {}));
//# sourceMappingURL=IConsent.js.map