"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUseEnum = exports.AddressTypeEnum = void 0;
/**
 * Code Values for the Address.type field
 */
var AddressTypeEnum;
(function (AddressTypeEnum) {
    AddressTypeEnum["POSTAL"] = "postal";
    AddressTypeEnum["PHYSICAL"] = "physical";
    AddressTypeEnum["BOTH"] = "both";
})(AddressTypeEnum = exports.AddressTypeEnum || (exports.AddressTypeEnum = {}));
/**
 * Code Values for the Address.use field
 */
var AddressUseEnum;
(function (AddressUseEnum) {
    AddressUseEnum["HOME"] = "home";
    AddressUseEnum["WORK"] = "work";
    AddressUseEnum["TEMP"] = "temp";
    AddressUseEnum["OLD"] = "old";
    AddressUseEnum["BILLING"] = "billing";
})(AddressUseEnum = exports.AddressUseEnum || (exports.AddressUseEnum = {}));
//# sourceMappingURL=IAddress.js.map