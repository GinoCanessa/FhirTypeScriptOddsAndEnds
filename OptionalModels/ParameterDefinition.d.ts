import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export declare class ParameterDefinition extends fhirModels.Element implements fhirInterfaces.IParameterDefinition {
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: string | undefined;
    _documentation?: fhirModels.Element | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: string | undefined;
    _max?: fhirModels.Element | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number | undefined;
    _min?: fhirModels.Element | undefined;
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: string | undefined;
    _profile?: fhirModels.Element | undefined;
    /**
     * The type of the parameter.
     */
    type?: string | undefined;
    _type?: fhirModels.Element | undefined;
    /**
     * Whether the parameter is input or output for the module.
     */
    use?: ParameterDefinitionUseEnum | undefined;
    _use?: fhirModels.Element | undefined;
    /**
     * Default constructor for ParameterDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IParameterDefinition>);
    /**
     * Factory function to create a ParameterDefinition from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IParameterDefinition): ParameterDefinition;
    /**
     * Check if the current ParameterDefinition contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the ParameterDefinition.use field
 */
export declare enum ParameterDefinitionUseEnum {
    IN = "in",
    OUT = "out"
}
//# sourceMappingURL=ParameterDefinition.d.ts.map