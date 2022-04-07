import { Coding } from '../strictmodels';
/**
 * How a capability statement is intended to be used.
 */
export declare const CapabilityStatementKind: {
    /**
     * The CapabilityStatement instance represents the capabilities of a system or piece of software, independent of a particular installation.
     */
    capability_statement_kind_Capability: Coding;
    /**
     * The CapabilityStatement instance represents the present capabilities of a specific system instance.  This is the kind returned by /metadata for a FHIR server end-point.
     */
    capability_statement_kind_Instance: Coding;
    /**
     * The CapabilityStatement instance represents a set of requirements for other systems to meet; e.g. as part of an implementation guide or 'request for proposal'.
     */
    capability_statement_kind_Requirements: Coding;
};
//# sourceMappingURL=CapabilityStatementKind.d.ts.map