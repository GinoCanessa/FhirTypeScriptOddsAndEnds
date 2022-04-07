import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export declare class RelatedArtifact extends fhirModels.Element implements fhirInterfaces.IRelatedArtifact {
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: string | undefined;
    _citation?: fhirModels.Element | undefined;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: string | undefined;
    _display?: fhirModels.Element | undefined;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhirModels.Attachment | undefined;
    /**
     * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
     */
    label?: string | undefined;
    _label?: fhirModels.Element | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: string | undefined;
    _resource?: fhirModels.Element | undefined;
    /**
     * The type of relationship to the related artifact.
     */
    type?: RelatedArtifactTypeEnum | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * Default constructor for RelatedArtifact from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IRelatedArtifact>);
    /**
     * Factory function to create a RelatedArtifact from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IRelatedArtifact): RelatedArtifact;
    /**
     * Check if the current RelatedArtifact contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the RelatedArtifact.type field
 */
export declare enum RelatedArtifactTypeEnum {
    DOCUMENTATION = "documentation",
    JUSTIFICATION = "justification",
    CITATION = "citation",
    PREDECESSOR = "predecessor",
    SUCCESSOR = "successor",
    DERIVED_FROM = "derived-from",
    DEPENDS_ON = "depends-on",
    COMPOSED_OF = "composed-of"
}
//# sourceMappingURL=RelatedArtifact.d.ts.map