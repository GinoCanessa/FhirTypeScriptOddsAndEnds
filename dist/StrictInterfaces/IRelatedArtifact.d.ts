import * as fhirInterfaces from '../strictinterfaces';
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export interface IRelatedArtifact extends fhirInterfaces.IElement {
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: string | undefined;
    _citation?: fhirInterfaces.IElement | undefined;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: string | undefined;
    _display?: fhirInterfaces.IElement | undefined;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhirInterfaces.IAttachment | undefined;
    /**
     * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
     */
    label?: string | undefined;
    _label?: fhirInterfaces.IElement | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: string | undefined;
    _resource?: fhirInterfaces.IElement | undefined;
    /**
     * The type of relationship to the related artifact.
     */
    type: RelatedArtifactTypeEnum;
    _type?: fhirInterfaces.IElement | undefined;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IRelatedArtifact.d.ts.map