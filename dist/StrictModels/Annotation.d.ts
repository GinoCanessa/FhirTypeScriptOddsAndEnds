import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export declare class Annotation extends fhirModels.Element implements fhirInterfaces.IAnnotation {
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorReference?: fhirModels.Reference | undefined;
    /**
     * Organization is used when there's no need for specific attribution as to who made the comment.
     */
    authorString?: string | undefined;
    _authorString?: fhirModels.Element | undefined;
    /**
     * The text of the annotation in markdown format.
     */
    text: string;
    _text?: fhirModels.Element | undefined;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: string | undefined;
    _time?: fhirModels.Element | undefined;
    /**
     * Default constructor for Annotation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IAnnotation);
}
//# sourceMappingURL=Annotation.d.ts.map