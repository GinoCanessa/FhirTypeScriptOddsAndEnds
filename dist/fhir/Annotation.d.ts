import * as fhir from '../fhir';
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export interface IAnnotation extends fhir.IFhirElement {
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorReference?: fhir.IReference | undefined;
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorString?: string | undefined;
    _authorString?: fhir.IFhirElement | undefined;
    /**
     * The text of the annotation in markdown format.
     */
    text: string | null;
    _text?: fhir.IFhirElement | undefined;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: string | undefined;
    _time?: fhir.IFhirElement | undefined;
}
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export declare class Annotation extends fhir.FhirElement implements fhir.IAnnotation {
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorReference?: fhir.Reference | undefined;
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorString?: string | undefined;
    _authorString?: fhir.FhirElement | undefined;
    /**
     * The text of the annotation in markdown format.
     */
    text: string | null;
    _text?: fhir.FhirElement | undefined;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: string | undefined;
    _time?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Annotation - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a Annotation from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.IAnnotation>): Annotation;
    /**
     * Check if the current Annotation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Annotation from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.IAnnotation): Annotation;
}
//# sourceMappingURL=Annotation.d.ts.map