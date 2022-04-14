import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Base definition for all elements in a resource.
 */
export declare class Element implements fhirInterfaces.IElement {
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhirModels.Extension[] | undefined;
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string | undefined;
    _id?: fhirModels.Element | undefined;
    /**
     * Default constructor for Element from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IElement>);
    /**
     * Factory function to create a Element from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IElement): Element;
    /**
     * Check if the current Element contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Element.d.ts.map