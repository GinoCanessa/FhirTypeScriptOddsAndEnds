"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractContentDerivative = void 0;
/**
 * This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.
 */
exports.ContractContentDerivative = {
    /**
     * Content derivative that conveys sufficient information needed to register the source basal content from which it is derived.  This derivative content may be used to register the basal content as it changes status in its lifecycle.  For example, content registration may occur when the basal content is created, updated, inactive, or deleted.
     */
    contract_content_derivative_ContentRegistration: {
        code: "registration",
        display: "Content Registration",
        system: "http://terminology.hl7.org/CodeSystem/contract-content-derivative"
    },
    /**
     * A content derivative that conveys sufficient information to locate and retrieve the content.
     */
    contract_content_derivative_ContentRetrieval: {
        code: "retrieval",
        display: "Content Retrieval",
        system: "http://terminology.hl7.org/CodeSystem/contract-content-derivative"
    },
    /**
     * A Content Derivative that conveys sufficient information to determine the authorized entities with which the content may be shared.
     */
    contract_content_derivative_ShareableContent: {
        code: "shareable",
        display: "Shareable Content",
        system: "http://terminology.hl7.org/CodeSystem/contract-content-derivative"
    },
    /**
     * Content derivative that has less than full fidelity to the basal information source from which it was 'transcribed'. It provides recipients with the full content representation they may require for compliance purposes, and typically include a reference to or an attached unstructured representation for recipients needing an exact copy of the legal agreement.
     */
    contract_content_derivative_ContentStatement: {
        code: "statement",
        display: "Content Statement",
        system: "http://terminology.hl7.org/CodeSystem/contract-content-derivative"
    },
};
//# sourceMappingURL=ContractContentDerivative.js.map