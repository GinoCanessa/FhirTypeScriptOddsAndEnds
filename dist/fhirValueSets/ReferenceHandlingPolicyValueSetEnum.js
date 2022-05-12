// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/reference-handling-policy|4.0.1
/**
 * A set of flags that defines how references are supported.
 */
export var ReferenceHandlingPolicyValueSetEnum;
(function (ReferenceHandlingPolicyValueSetEnum) {
    /**
     * enforced: The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.
     */
    ReferenceHandlingPolicyValueSetEnum["ReferenceIntegrityEnforced"] = "enforced";
    /**
     * literal: The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see 'enforced').
     */
    ReferenceHandlingPolicyValueSetEnum["LiteralReferences"] = "literal";
    /**
     * local: The server does not support references that point to other servers.
     */
    ReferenceHandlingPolicyValueSetEnum["LocalReferencesOnly"] = "local";
    /**
     * logical: The server allows logical references (i.e. using Reference.identifier).
     */
    ReferenceHandlingPolicyValueSetEnum["LogicalReferences"] = "logical";
    /**
     * resolves: The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).
     */
    ReferenceHandlingPolicyValueSetEnum["ResolvesReferences"] = "resolves";
})(ReferenceHandlingPolicyValueSetEnum || (ReferenceHandlingPolicyValueSetEnum = {}));
//# sourceMappingURL=ReferenceHandlingPolicyValueSetEnum.js.map