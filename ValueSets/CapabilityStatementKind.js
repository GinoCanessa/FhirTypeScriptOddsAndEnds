"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityStatementKind = void 0;
/**
 * How a capability statement is intended to be used.
 */
exports.CapabilityStatementKind = {
    /**
     * The CapabilityStatement instance represents the capabilities of a system or piece of software, independent of a particular installation.
     */
    capability_statement_kind_Capability: {
        code: "capability",
        display: "Capability",
        system: "http://hl7.org/fhir/capability-statement-kind"
    },
    /**
     * The CapabilityStatement instance represents the present capabilities of a specific system instance.  This is the kind returned by /metadata for a FHIR server end-point.
     */
    capability_statement_kind_Instance: {
        code: "instance",
        display: "Instance",
        system: "http://hl7.org/fhir/capability-statement-kind"
    },
    /**
     * The CapabilityStatement instance represents a set of requirements for other systems to meet; e.g. as part of an implementation guide or 'request for proposal'.
     */
    capability_statement_kind_Requirements: {
        code: "requirements",
        display: "Requirements",
        system: "http://hl7.org/fhir/capability-statement-kind"
    },
};
//# sourceMappingURL=CapabilityStatementKind.js.map