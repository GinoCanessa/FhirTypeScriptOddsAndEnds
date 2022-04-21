import * as fhir from '../fhir.js';
import { OperationParameterUseValueSetType, OperationParameterUseValueSetEnum } from '../fhirValueSets/OperationParameterUseValueSet.js';
import { AllTypesValueSetType } from '../fhirValueSets/AllTypesValueSet.js';
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export declare type IParameterDefinition = fhir.IFhirElement & {
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: OperationParameterUseValueSetEnum | null;
    /**
     * Extended properties for primitive element: ParameterDefinition.use
     */
    _use?: fhir.IFhirElement | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.min
     */
    _min?: fhir.IFhirElement | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.max
     */
    _max?: fhir.IFhirElement | undefined;
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.documentation
     */
    _documentation?: fhir.IFhirElement | undefined;
    /**
     * The type of the parameter.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: ParameterDefinition.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.profile
     */
    _profile?: fhir.IFhirElement | undefined;
};
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export declare class ParameterDefinition extends fhir.FhirElement implements IParameterDefinition {
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: OperationParameterUseValueSetEnum | null;
    /**
     * Extended properties for primitive element: ParameterDefinition.use
     */
    _use?: fhir.FhirElement | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.min
     */
    _min?: fhir.FhirElement | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.max
     */
    _max?: fhir.FhirElement | undefined;
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.documentation
     */
    _documentation?: fhir.FhirElement | undefined;
    /**
     * The type of the parameter.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: ParameterDefinition.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.profile
     */
    _profile?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ParameterDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IParameterDefinition>);
    /**
     * Required-bound Value Set for use
     */
    useRequiredValueSet(): OperationParameterUseValueSetType;
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet(): AllTypesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ParameterDefinition.d.ts.map