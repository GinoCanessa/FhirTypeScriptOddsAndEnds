"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MolecularSequenceTypeEnum = exports.MolecularSequenceRepositoryTypeEnum = exports.MolecularSequenceQualityTypeEnum = exports.MolecularSequenceReferenceSeqStrandEnum = exports.MolecularSequenceReferenceSeqOrientationEnum = void 0;
/**
 * Code Values for the MolecularSequence.referenceSeq.orientation field
 */
var MolecularSequenceReferenceSeqOrientationEnum;
(function (MolecularSequenceReferenceSeqOrientationEnum) {
    MolecularSequenceReferenceSeqOrientationEnum["SENSE"] = "sense";
    MolecularSequenceReferenceSeqOrientationEnum["ANTISENSE"] = "antisense";
})(MolecularSequenceReferenceSeqOrientationEnum = exports.MolecularSequenceReferenceSeqOrientationEnum || (exports.MolecularSequenceReferenceSeqOrientationEnum = {}));
/**
 * Code Values for the MolecularSequence.referenceSeq.strand field
 */
var MolecularSequenceReferenceSeqStrandEnum;
(function (MolecularSequenceReferenceSeqStrandEnum) {
    MolecularSequenceReferenceSeqStrandEnum["WATSON"] = "watson";
    MolecularSequenceReferenceSeqStrandEnum["CRICK"] = "crick";
})(MolecularSequenceReferenceSeqStrandEnum = exports.MolecularSequenceReferenceSeqStrandEnum || (exports.MolecularSequenceReferenceSeqStrandEnum = {}));
/**
 * Code Values for the MolecularSequence.quality.type field
 */
var MolecularSequenceQualityTypeEnum;
(function (MolecularSequenceQualityTypeEnum) {
    MolecularSequenceQualityTypeEnum["INDEL"] = "indel";
    MolecularSequenceQualityTypeEnum["SNP"] = "snp";
    MolecularSequenceQualityTypeEnum["UNKNOWN"] = "unknown";
})(MolecularSequenceQualityTypeEnum = exports.MolecularSequenceQualityTypeEnum || (exports.MolecularSequenceQualityTypeEnum = {}));
/**
 * Code Values for the MolecularSequence.repository.type field
 */
var MolecularSequenceRepositoryTypeEnum;
(function (MolecularSequenceRepositoryTypeEnum) {
    MolecularSequenceRepositoryTypeEnum["DIRECTLINK"] = "directlink";
    MolecularSequenceRepositoryTypeEnum["OPENAPI"] = "openapi";
    MolecularSequenceRepositoryTypeEnum["LOGIN"] = "login";
    MolecularSequenceRepositoryTypeEnum["OAUTH"] = "oauth";
    MolecularSequenceRepositoryTypeEnum["OTHER"] = "other";
})(MolecularSequenceRepositoryTypeEnum = exports.MolecularSequenceRepositoryTypeEnum || (exports.MolecularSequenceRepositoryTypeEnum = {}));
/**
 * Code Values for the MolecularSequence.type field
 */
var MolecularSequenceTypeEnum;
(function (MolecularSequenceTypeEnum) {
    MolecularSequenceTypeEnum["AA"] = "aa";
    MolecularSequenceTypeEnum["DNA"] = "dna";
    MolecularSequenceTypeEnum["RNA"] = "rna";
})(MolecularSequenceTypeEnum = exports.MolecularSequenceTypeEnum || (exports.MolecularSequenceTypeEnum = {}));
//# sourceMappingURL=IMolecularSequence.js.map