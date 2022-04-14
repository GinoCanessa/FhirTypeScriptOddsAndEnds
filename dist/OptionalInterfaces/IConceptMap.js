"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptMapStatusEnum = exports.ConceptMapGroupUnmappedModeEnum = exports.ConceptMapGroupElementTargetEquivalenceEnum = void 0;
/**
 * Code Values for the ConceptMap.group.element.target.equivalence field
 */
var ConceptMapGroupElementTargetEquivalenceEnum;
(function (ConceptMapGroupElementTargetEquivalenceEnum) {
    ConceptMapGroupElementTargetEquivalenceEnum["RELATEDTO"] = "relatedto";
    ConceptMapGroupElementTargetEquivalenceEnum["EQUIVALENT"] = "equivalent";
    ConceptMapGroupElementTargetEquivalenceEnum["EQUAL"] = "equal";
    ConceptMapGroupElementTargetEquivalenceEnum["WIDER"] = "wider";
    ConceptMapGroupElementTargetEquivalenceEnum["SUBSUMES"] = "subsumes";
    ConceptMapGroupElementTargetEquivalenceEnum["NARROWER"] = "narrower";
    ConceptMapGroupElementTargetEquivalenceEnum["SPECIALIZES"] = "specializes";
    ConceptMapGroupElementTargetEquivalenceEnum["INEXACT"] = "inexact";
    ConceptMapGroupElementTargetEquivalenceEnum["UNMATCHED"] = "unmatched";
    ConceptMapGroupElementTargetEquivalenceEnum["DISJOINT"] = "disjoint";
})(ConceptMapGroupElementTargetEquivalenceEnum = exports.ConceptMapGroupElementTargetEquivalenceEnum || (exports.ConceptMapGroupElementTargetEquivalenceEnum = {}));
/**
 * Code Values for the ConceptMap.group.unmapped.mode field
 */
var ConceptMapGroupUnmappedModeEnum;
(function (ConceptMapGroupUnmappedModeEnum) {
    ConceptMapGroupUnmappedModeEnum["PROVIDED"] = "provided";
    ConceptMapGroupUnmappedModeEnum["FIXED"] = "fixed";
    ConceptMapGroupUnmappedModeEnum["OTHER_MAP"] = "other-map";
})(ConceptMapGroupUnmappedModeEnum = exports.ConceptMapGroupUnmappedModeEnum || (exports.ConceptMapGroupUnmappedModeEnum = {}));
/**
 * Code Values for the ConceptMap.status field
 */
var ConceptMapStatusEnum;
(function (ConceptMapStatusEnum) {
    ConceptMapStatusEnum["DRAFT"] = "draft";
    ConceptMapStatusEnum["ACTIVE"] = "active";
    ConceptMapStatusEnum["RETIRED"] = "retired";
    ConceptMapStatusEnum["UNKNOWN"] = "unknown";
})(ConceptMapStatusEnum = exports.ConceptMapStatusEnum || (exports.ConceptMapStatusEnum = {}));
//# sourceMappingURL=IConceptMap.js.map