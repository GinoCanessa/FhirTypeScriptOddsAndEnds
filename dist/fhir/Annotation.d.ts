import * as fhir from '../fhir.js';
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export declare type IAnnotation = fhir.IFhirElement & {
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorReference?: fhir.IReference | undefined;
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorString?: string | undefined;
    /**
     * Extended properties for primitive element: Annotation.author[x]
     */
    _authorString?: fhir.IFhirElement | undefined;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: string | undefined;
    /**
     * Extended properties for primitive element: Annotation.time
     */
    _time?: fhir.IFhirElement | undefined;
    /**
     * The text of the annotation in markdown format.
     */
    text: string | null;
    /**
     * Extended properties for primitive element: Annotation.text
     */
    _text?: fhir.IFhirElement | undefined;
};
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export declare class Annotation extends fhir.FhirElement implements IAnnotation {
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
    _authorString?: fhir.FhirElement | undefined;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: string | undefined;
    /**
     * Extended properties for primitive element: Annotation.time
     */
    _time?: fhir.FhirElement | undefined;
    /**
     * The text of the annotation in markdown format.
     */
    text: string | null;
    /**
     * Extended properties for primitive element: Annotation.text
     */
    _text?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Annotation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IAnnotation>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Annotation.d.ts.map