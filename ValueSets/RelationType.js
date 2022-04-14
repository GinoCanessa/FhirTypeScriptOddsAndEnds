"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationType = void 0;
/**
 * The type of relations between entries.
 */
exports.RelationType = {
    /**
     * the related entry represents an item that replaces the current retired item.
     */
    relation_type_ReplacedBy: {
        code: "is-replaced-by",
        display: "Replaced By",
        system: "http://hl7.org/fhir/relation-type"
    },
    /**
     * the related entry represents an activity that may be triggered by the current item.
     */
    relation_type_Triggers: {
        code: "triggers",
        display: "Triggers",
        system: "http://hl7.org/fhir/relation-type"
    },
};
//# sourceMappingURL=RelationType.js.map