/**
 * A set of flags that defines how references are supported.
 */
export var ReferenceHandlingPolicy = {
    /**
     * The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.
     */
    reference_handling_policy_ReferenceIntegrityEnforced: {
        code: "enforced",
        display: "Reference Integrity Enforced",
        system: "http://hl7.org/fhir/reference-handling-policy"
    },
    /**
     * The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see 'enforced').
     */
    reference_handling_policy_LiteralReferences: {
        code: "literal",
        display: "Literal References",
        system: "http://hl7.org/fhir/reference-handling-policy"
    },
    /**
     * The server does not support references that point to other servers.
     */
    reference_handling_policy_LocalReferencesOnly: {
        code: "local",
        display: "Local References Only",
        system: "http://hl7.org/fhir/reference-handling-policy"
    },
    /**
     * The server allows logical references (i.e. using Reference.identifier).
     */
    reference_handling_policy_LogicalReferences: {
        code: "logical",
        display: "Logical References",
        system: "http://hl7.org/fhir/reference-handling-policy"
    },
    /**
     * The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).
     */
    reference_handling_policy_ResolvesReferences: {
        code: "resolves",
        display: "Resolves References",
        system: "http://hl7.org/fhir/reference-handling-policy"
    }
};
