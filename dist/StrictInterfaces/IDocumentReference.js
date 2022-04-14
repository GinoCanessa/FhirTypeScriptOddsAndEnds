"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentReferenceStatusEnum = exports.DocumentReferenceDocStatusEnum = exports.DocumentReferenceRelatesToCodeEnum = void 0;
/**
 * Code Values for the DocumentReference.relatesTo.code field
 */
var DocumentReferenceRelatesToCodeEnum;
(function (DocumentReferenceRelatesToCodeEnum) {
    DocumentReferenceRelatesToCodeEnum["REPLACES"] = "replaces";
    DocumentReferenceRelatesToCodeEnum["TRANSFORMS"] = "transforms";
    DocumentReferenceRelatesToCodeEnum["SIGNS"] = "signs";
    DocumentReferenceRelatesToCodeEnum["APPENDS"] = "appends";
})(DocumentReferenceRelatesToCodeEnum = exports.DocumentReferenceRelatesToCodeEnum || (exports.DocumentReferenceRelatesToCodeEnum = {}));
/**
 * Code Values for the DocumentReference.docStatus field
 */
var DocumentReferenceDocStatusEnum;
(function (DocumentReferenceDocStatusEnum) {
    DocumentReferenceDocStatusEnum["PRELIMINARY"] = "preliminary";
    DocumentReferenceDocStatusEnum["FINAL"] = "final";
    DocumentReferenceDocStatusEnum["AMENDED"] = "amended";
    DocumentReferenceDocStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(DocumentReferenceDocStatusEnum = exports.DocumentReferenceDocStatusEnum || (exports.DocumentReferenceDocStatusEnum = {}));
/**
 * Code Values for the DocumentReference.status field
 */
var DocumentReferenceStatusEnum;
(function (DocumentReferenceStatusEnum) {
    DocumentReferenceStatusEnum["CURRENT"] = "current";
    DocumentReferenceStatusEnum["SUPERSEDED"] = "superseded";
    DocumentReferenceStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(DocumentReferenceStatusEnum = exports.DocumentReferenceStatusEnum || (exports.DocumentReferenceStatusEnum = {}));
//# sourceMappingURL=IDocumentReference.js.map