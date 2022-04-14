import * as fhirInterfaces from '../strictinterfaces';
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export interface IAnnotation extends fhirInterfaces.IElement {
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorReference?: fhirInterfaces.IReference | undefined;
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorString?: string | undefined;
    _authorString?: fhirInterfaces.IElement | undefined;
    /**
     * The text of the annotation in markdown format.
     */
    text: string;
    _text?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: string | undefined;
    _time?: fhirInterfaces.IElement | undefined;
}
//# sourceMappingURL=IAnnotation.d.ts.map