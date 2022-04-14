import * as fhirInterfaces from '../strictinterfaces';
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export interface IParameterDefinition extends fhirInterfaces.IElement {
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: string | undefined;
    _documentation?: fhirInterfaces.IElement | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: string | undefined;
    _max?: fhirInterfaces.IElement | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number | undefined;
    _min?: fhirInterfaces.IElement | undefined;
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: string | undefined;
    _profile?: fhirInterfaces.IElement | undefined;
    /**
     * The type of the parameter.
     */
    type: string;
    _type?: fhirInterfaces.IElement | undefined;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: ParameterDefinitionUseEnum;
    _use?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ParameterDefinition.use field
 */
export declare enum ParameterDefinitionUseEnum {
    IN = "in",
    OUT = "out"
}
//# sourceMappingURL=IParameterDefinition.d.ts.map