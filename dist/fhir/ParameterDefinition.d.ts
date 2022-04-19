import * as fhir from '../fhir';
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export declare type IParameterDefinition = fhir.IFhirElement & {
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: string | undefined;
    _documentation?: fhir.IFhirElement | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: string | undefined;
    _max?: fhir.IFhirElement | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number | undefined;
    _min?: fhir.IFhirElement | undefined;
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: string | undefined;
    _profile?: fhir.IFhirElement | undefined;
    /**
     * The type of the parameter.
     */
    type: string | null;
    _type?: fhir.IFhirElement | undefined;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: ParameterDefinitionUseEnum | null;
    _use?: fhir.IFhirElement | undefined;
};
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export declare class ParameterDefinition extends fhir.FhirElement implements fhir.IParameterDefinition {
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: string | undefined;
    _documentation?: fhir.FhirElement | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: string | undefined;
    _max?: fhir.FhirElement | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number | undefined;
    _min?: fhir.FhirElement | undefined;
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: string | undefined;
    _profile?: fhir.FhirElement | undefined;
    /**
     * The type of the parameter.
     */
    type: string | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: ParameterDefinitionUseEnum | null;
    _use?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ParameterDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IParameterDefinition>);
    /**
     * Check if the current ParameterDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ParameterDefinition from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IParameterDefinition): ParameterDefinition;
}
/**
 * Code Values for the ParameterDefinition.use field
 */
export declare enum ParameterDefinitionUseEnum {
    IN = "in",
    OUT = "out"
}
//# sourceMappingURL=ParameterDefinition.d.ts.map