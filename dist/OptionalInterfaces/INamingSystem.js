"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingSystemStatusEnum = exports.NamingSystemKindEnum = exports.NamingSystemUniqueIdTypeEnum = void 0;
/**
 * Code Values for the NamingSystem.uniqueId.type field
 */
var NamingSystemUniqueIdTypeEnum;
(function (NamingSystemUniqueIdTypeEnum) {
    NamingSystemUniqueIdTypeEnum["OID"] = "oid";
    NamingSystemUniqueIdTypeEnum["UUID"] = "uuid";
    NamingSystemUniqueIdTypeEnum["URI"] = "uri";
    NamingSystemUniqueIdTypeEnum["OTHER"] = "other";
})(NamingSystemUniqueIdTypeEnum = exports.NamingSystemUniqueIdTypeEnum || (exports.NamingSystemUniqueIdTypeEnum = {}));
/**
 * Code Values for the NamingSystem.kind field
 */
var NamingSystemKindEnum;
(function (NamingSystemKindEnum) {
    NamingSystemKindEnum["CODESYSTEM"] = "codesystem";
    NamingSystemKindEnum["IDENTIFIER"] = "identifier";
    NamingSystemKindEnum["ROOT"] = "root";
})(NamingSystemKindEnum = exports.NamingSystemKindEnum || (exports.NamingSystemKindEnum = {}));
/**
 * Code Values for the NamingSystem.status field
 */
var NamingSystemStatusEnum;
(function (NamingSystemStatusEnum) {
    NamingSystemStatusEnum["DRAFT"] = "draft";
    NamingSystemStatusEnum["ACTIVE"] = "active";
    NamingSystemStatusEnum["RETIRED"] = "retired";
    NamingSystemStatusEnum["UNKNOWN"] = "unknown";
})(NamingSystemStatusEnum = exports.NamingSystemStatusEnum || (exports.NamingSystemStatusEnum = {}));
//# sourceMappingURL=INamingSystem.js.map