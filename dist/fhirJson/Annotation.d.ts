import * as fhir from '../fhirJson.js';
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export interface Annotation extends fhir.FhirElement {
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorReference?: fhir.Reference | undefined;
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorString?: string | undefined;
    /**
     * Extended properties for primitive element: Annotation.author[x]
     */
    _authorString?: fhir.FhirElement;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: string | undefined;
    /**
     * Extended properties for primitive element: Annotation.time
     */
    _time?: fhir.FhirElement;
    /**
     * The text of the annotation in markdown format.
     */
    text: string | null;
    /**
     * Extended properties for primitive element: Annotation.text
     */
    _text?: fhir.FhirElement;
}
//# sourceMappingURL=Annotation.d.ts.map