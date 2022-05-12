import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Annotation type.
 */
export interface AnnotationArgs extends fhir.FhirElementArgs {
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    author?: fhir.Reference | fhir.FhirString | undefined;
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorReference?: fhir.ReferenceArgs | undefined;
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorString?: fhir.FhirString | string | undefined;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: fhir.FhirDateTime | string | undefined;
    /**
     * The text of the annotation in markdown format.
     */
    text: fhir.FhirMarkdown | string | undefined;
}
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export declare class Annotation extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    author?: (fhir.Reference | fhir.FhirString) | undefined;
    readonly __authorIsChoice: true;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: fhir.FhirDateTime | undefined;
    /**
     * The text of the annotation in markdown format.
     */
    text: fhir.FhirMarkdown | null;
    /**
     * Default constructor for Annotation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AnnotationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Annotation.d.ts.map