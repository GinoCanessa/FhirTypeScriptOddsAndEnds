import * as fhir from '../fhir.js';
import { NarrativeStatusValueSetType, NarrativeStatusValueSetEnum } from '../fhirValueSets/NarrativeStatusValueSet.js';
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export declare type INarrative = fhir.IFhirElement & {
    /**
     * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status: NarrativeStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Narrative.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
     */
    div: string | null;
    /**
     * Extended properties for primitive element: Narrative.div
     */
    _div?: fhir.IFhirElement | undefined;
};
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export declare class Narrative extends fhir.FhirElement implements INarrative {
    /**
     * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status: NarrativeStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Narrative.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
     */
    div: string | null;
    /**
     * Extended properties for primitive element: Narrative.div
     */
    _div?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Narrative - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<INarrative>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): NarrativeStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Narrative.d.ts.map