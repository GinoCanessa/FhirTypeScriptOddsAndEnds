import { Coding } from '../fhir';
/**
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 */
export declare const ContractContentDerivativeValueSet: {
    /**
     * Content derivative that conveys sufficient information needed to register the source basal content from which it is derived.  This derivative content may be used to register the basal content as it changes status in its lifecycle.  For example, content registration may occur when the basal content is created, updated, inactive, or deleted.
     */
    contract_content_derivative_ContentRegistration: Coding;
    /**
     * A content derivative that conveys sufficient information to locate and retrieve the content.
     */
    contract_content_derivative_ContentRetrieval: Coding;
    /**
     * A Content Derivative that conveys sufficient information to determine the authorized entities with which the content may be shared.
     */
    contract_content_derivative_ShareableContent: Coding;
    /**
     * Content derivative that has less than full fidelity to the basal information source from which it was 'transcribed'. It provides recipients with the full content representation they may require for compliance purposes, and typically include a reference to or an attached unstructured representation for recipients needing an exact copy of the legal agreement.
     */
    contract_content_derivative_ContentStatement: Coding;
};
//# sourceMappingURL=ContractContentDerivativeValueSet.d.ts.map