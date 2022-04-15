import * as fhir from '../fhir';
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export interface INarrative extends fhir.IFhirElement {
    /**
     * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
     */
    div: string | null;
    _div?: fhir.IFhirElement | undefined;
    /**
     * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status: NarrativeStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
}
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export declare class Narrative extends fhir.FhirElement implements fhir.INarrative {
    /**
     * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
     */
    div: string | null;
    _div?: fhir.FhirElement | undefined;
    /**
     * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status: NarrativeStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Narrative - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a Narrative from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.INarrative>): Narrative;
    /**
     * Check if the current Narrative contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Narrative from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.INarrative): Narrative;
}
/**
 * Code Values for the Narrative.status field
 */
export declare enum NarrativeStatusEnum {
    GENERATED = "generated",
    EXTENSIONS = "extensions",
    ADDITIONAL = "additional",
    EMPTY = "empty"
}
//# sourceMappingURL=Narrative.d.ts.map