import * as fhir from '../fhirJson.js';
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export interface ParameterDefinition extends fhir.FhirElement {
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: 'in' | 'out' | null;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.min
     */
    _min?: fhir.FhirElement;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.max
     */
    _max?: fhir.FhirElement;
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * The type of the parameter.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: ParameterDefinition.type
     */
    _type?: fhir.FhirElement;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.profile
     */
    _profile?: fhir.FhirElement;
}
//# sourceMappingURL=ParameterDefinition.d.ts.map