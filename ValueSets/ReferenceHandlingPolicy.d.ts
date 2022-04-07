import { Coding } from '../strictmodels';
/**
 * A set of flags that defines how references are supported.
 */
export declare const ReferenceHandlingPolicy: {
    /**
     * The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.
     */
    reference_handling_policy_ReferenceIntegrityEnforced: Coding;
    /**
     * The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see 'enforced').
     */
    reference_handling_policy_LiteralReferences: Coding;
    /**
     * The server does not support references that point to other servers.
     */
    reference_handling_policy_LocalReferencesOnly: Coding;
    /**
     * The server allows logical references (i.e. using Reference.identifier).
     */
    reference_handling_policy_LogicalReferences: Coding;
    /**
     * The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).
     */
    reference_handling_policy_ResolvesReferences: Coding;
};
//# sourceMappingURL=ReferenceHandlingPolicy.d.ts.map