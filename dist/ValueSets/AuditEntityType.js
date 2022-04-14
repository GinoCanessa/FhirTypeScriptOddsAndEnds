"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditEntityType = void 0;
/**
 * Code for the entity type involved in the audit event.
 */
exports.AuditEntityType = {
    /**
     * Person
     */
    audit_entity_type_Person: {
        code: "1",
        display: "Person",
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type"
    },
    /**
     * System Object
     */
    audit_entity_type_SystemObject: {
        code: "2",
        display: "System Object",
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type"
    },
    /**
     * Organization
     */
    audit_entity_type_Organization: {
        code: "3",
        display: "Organization",
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type"
    },
    /**
     * Other
     */
    audit_entity_type_Other: {
        code: "4",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/audit-entity-type"
    },
};
//# sourceMappingURL=AuditEntityType.js.map