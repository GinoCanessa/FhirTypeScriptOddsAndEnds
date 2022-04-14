"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedArtifactType = void 0;
/**
 * The type of relationship to the related artifact.
 */
exports.RelatedArtifactType = {
    /**
     * Bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource.
     */
    related_artifact_type_Citation: {
        code: "citation",
        display: "Citation",
        system: "http://hl7.org/fhir/related-artifact-type"
    },
    /**
     * The knowledge resource is composed of the given related artifact.
     */
    related_artifact_type_ComposedOf: {
        code: "composed-of",
        display: "Composed Of",
        system: "http://hl7.org/fhir/related-artifact-type"
    },
    /**
     * The knowledge resource depends on the given related artifact.
     */
    related_artifact_type_DependsOn: {
        code: "depends-on",
        display: "Depends On",
        system: "http://hl7.org/fhir/related-artifact-type"
    },
    /**
     * The knowledge resource is derived from the related artifact. This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but is modified to capture either a different set of overall requirements, or a more specific set of requirements such as those involved in a particular institution or clinical setting.
     */
    related_artifact_type_DerivedFrom: {
        code: "derived-from",
        display: "Derived From",
        system: "http://hl7.org/fhir/related-artifact-type"
    },
    /**
     * Additional documentation for the knowledge resource. This would include additional instructions on usage as well as additional information on clinical context or appropriateness.
     */
    related_artifact_type_Documentation: {
        code: "documentation",
        display: "Documentation",
        system: "http://hl7.org/fhir/related-artifact-type"
    },
    /**
     * A summary of the justification for the knowledge resource including supporting evidence, relevant guidelines, or other clinically important information. This information is intended to provide a way to make the justification for the knowledge resource available to the consumer of interventions or results produced by the knowledge resource.
     */
    related_artifact_type_Justification: {
        code: "justification",
        display: "Justification",
        system: "http://hl7.org/fhir/related-artifact-type"
    },
    /**
     * The previous version of the knowledge resource.
     */
    related_artifact_type_Predecessor: {
        code: "predecessor",
        display: "Predecessor",
        system: "http://hl7.org/fhir/related-artifact-type"
    },
    /**
     * The next version of the knowledge resource.
     */
    related_artifact_type_Successor: {
        code: "successor",
        display: "Successor",
        system: "http://hl7.org/fhir/related-artifact-type"
    },
};
//# sourceMappingURL=RelatedArtifactType.js.map