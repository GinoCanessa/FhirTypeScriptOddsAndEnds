import * as fhir from '../fhir';
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export declare type IRelatedArtifact = fhir.IFhirElement & {
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: string | undefined;
    _citation?: fhir.IFhirElement | undefined;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: string | undefined;
    _display?: fhir.IFhirElement | undefined;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhir.IAttachment | undefined;
    /**
     * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
     */
    label?: string | undefined;
    _label?: fhir.IFhirElement | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: string | undefined;
    _resource?: fhir.IFhirElement | undefined;
    /**
     * The type of relationship to the related artifact.
     */
    type: RelatedArtifactTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
};
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export declare class RelatedArtifact extends fhir.FhirElement implements fhir.IRelatedArtifact {
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: string | undefined;
    _citation?: fhir.FhirElement | undefined;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: string | undefined;
    _display?: fhir.FhirElement | undefined;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhir.Attachment | undefined;
    /**
     * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
     */
    label?: string | undefined;
    _label?: fhir.FhirElement | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: string | undefined;
    _resource?: fhir.FhirElement | undefined;
    /**
     * The type of relationship to the related artifact.
     */
    type: RelatedArtifactTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RelatedArtifact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRelatedArtifact>);
    /**
     * Check if the current RelatedArtifact contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a RelatedArtifact from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IRelatedArtifact): RelatedArtifact;
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