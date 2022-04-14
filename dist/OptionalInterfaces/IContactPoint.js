"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPointUseEnum = exports.ContactPointSystemEnum = void 0;
/**
 * Code Values for the ContactPoint.system field
 */
var ContactPointSystemEnum;
(function (ContactPointSystemEnum) {
    ContactPointSystemEnum["PHONE"] = "phone";
    ContactPointSystemEnum["FAX"] = "fax";
    ContactPointSystemEnum["EMAIL"] = "email";
    ContactPointSystemEnum["PAGER"] = "pager";
    ContactPointSystemEnum["URL"] = "url";
    ContactPointSystemEnum["SMS"] = "sms";
    ContactPointSystemEnum["OTHER"] = "other";
})(ContactPointSystemEnum = exports.ContactPointSystemEnum || (exports.ContactPointSystemEnum = {}));
/**
 * Code Values for the ContactPoint.use field
 */
var ContactPointUseEnum;
(function (ContactPointUseEnum) {
    ContactPointUseEnum["HOME"] = "home";
    ContactPointUseEnum["WORK"] = "work";
    ContactPointUseEnum["TEMP"] = "temp";
    ContactPointUseEnum["OLD"] = "old";
    ContactPointUseEnum["MOBILE"] = "mobile";
})(ContactPointUseEnum = exports.ContactPointUseEnum || (exports.ContactPointUseEnum = {}));
//# sourceMappingURL=IContactPoint.js.map