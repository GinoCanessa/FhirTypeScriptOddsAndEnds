import * as fhir from '../fhir.js';
import { RelatedArtifactTypeValueSetType } from '../fhirValueSets/RelatedArtifactTypeValueSet.js';
import { RelatedArtifactTypeValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the RelatedArtifact type.
 */
export interface RelatedArtifactArgs extends fhir.FhirElementArgs {
    /**
     * The type of relationship to the related artifact.
     */
    type: RelatedArtifactTypeValueSetEnum | null;
    /**
     * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
     */
    label?: fhir.FhirString | string | undefined;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: fhir.FhirMarkdown | string | undefined;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: fhir.FhirUrl | string | undefined;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhir.AttachmentArgs | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: fhir.FhirCanonical | string | undefined;
}
/**
 * Related artifacts such as additional documentation, justification, or bibliographic references.
 */
export declare class RelatedArtifact extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * The type of relationship to the related artifact.
     */
    type: RelatedArtifactTypeValueSetEnum | null;
    /**
     * A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.
     */
    label?: fhir.FhirString | undefined;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Additional structured information about citations should be captured as extensions.
     */
    citation?: fhir.FhirMarkdown | undefined;
    /**
     * If a document or resource element is present, this element SHALL NOT be provided (use the url or reference in the Attachment or resource reference).
     */
    url?: fhir.FhirUrl | undefined;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the resource element.
     */
    document?: fhir.Attachment | undefined;
    /**
     * If the type is predecessor, this is a reference to the succeeding knowledge resource. If the type is successor, this is a reference to the prior knowledge resource.
     */
    resource?: fhir.FhirCanonical | undefined;
    /**
     * Default constructor for RelatedArtifact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RelatedArtifactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): RelatedArtifactTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=RelatedArtifact.d.ts.map