import * as fhir from '../fhir.js';
import { RelatedArtifactTypeValueSetType, RelatedArtifactTypeValueSetEnum } from '../fhirValueSets/RelatedArtifactTypeValueSet.js';
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export declare type IRelatedArtifact = fhir.IFhirElement & {
    /**
     * The type of relationship to the related artifact.
     */
    type: RelatedArtifactTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: RelatedArtifact.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.label
     */
    _label?: fhir.IFhirElement | undefined;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.display
     */
    _display?: fhir.IFhirElement | undefined;
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.citation
     */
    _citation?: fhir.IFhirElement | undefined;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhir.IAttachment | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.resource
     */
    _resource?: fhir.IFhirElement | undefined;
};
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export declare class RelatedArtifact extends fhir.FhirElement implements IRelatedArtifact {
    /**
     * The type of relationship to the related artifact.
     */
    type: RelatedArtifactTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: RelatedArtifact.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.label
     */
    _label?: fhir.FhirElement | undefined;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.display
     */
    _display?: fhir.FhirElement | undefined;
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.citation
     */
    _citation?: fhir.FhirElement | undefined;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhir.Attachment | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: string | undefined;
    /**
     * Extended properties for primitive element: RelatedArtifact.resource
     */
    _resource?: fhir.FhirElement | undefined;
    /**
     * Default constructor for RelatedArtifact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRelatedArtifact>);
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): RelatedArtifactTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=RelatedArtifact.d.ts.map