// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ParameterDefinition

import * as fhir from '../fhir.js'

import { OperationParameterUseValueSet, OperationParameterUseValueSetType, OperationParameterUseValueSetEnum } from '../fhirValueSets/OperationParameterUseValueSet.js'
import { AllTypesValueSet, AllTypesValueSetType, AllTypesValueSetEnum } from '../fhirValueSets/AllTypesValueSet.js'

/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export type IParameterDefinition = fhir.IFhirElement & { 
  /**
   * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.name
   */
  _name?: fhir.IFhirElement|undefined;
  /**
   * Whether the parameter is input or output for the module.
   */
  use: OperationParameterUseValueSetEnum|null;
  /**
   * Extended properties for primitive element: ParameterDefinition.use
   */
  _use?: fhir.IFhirElement|undefined;
  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  min?: number|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.min
   */
  _min?: fhir.IFhirElement|undefined;
  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  max?: string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.max
   */
  _max?: fhir.IFhirElement|undefined;
  /**
   * A brief discussion of what the parameter is for and how it is used by the module.
   */
  documentation?: string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.documentation
   */
  _documentation?: fhir.IFhirElement|undefined;
  /**
   * The type of the parameter.
   */
  type: string|null;
  /**
   * Extended properties for primitive element: ParameterDefinition.type
   */
  _type?: fhir.IFhirElement|undefined;
  /**
   * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
   */
  profile?: string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.profile
   */
  _profile?: fhir.IFhirElement|undefined;
}

/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export class ParameterDefinition extends fhir.FhirElement implements IParameterDefinition {
  /**
   * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
   */
  public name?: string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.name
   */
  public _name?: fhir.FhirElement|undefined;
  /**
   * Whether the parameter is input or output for the module.
   */
  public use: OperationParameterUseValueSetEnum|null;
  /**
   * Extended properties for primitive element: ParameterDefinition.use
   */
  public _use?: fhir.FhirElement|undefined;
  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  public min?: number|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.min
   */
  public _min?: fhir.FhirElement|undefined;
  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  public max?: string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.max
   */
  public _max?: fhir.FhirElement|undefined;
  /**
   * A brief discussion of what the parameter is for and how it is used by the module.
   */
  public documentation?: string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.documentation
   */
  public _documentation?: fhir.FhirElement|undefined;
  /**
   * The type of the parameter.
   */
  public type: string|null;
  /**
   * Extended properties for primitive element: ParameterDefinition.type
   */
  public _type?: fhir.FhirElement|undefined;
  /**
   * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
   */
  public profile?: string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.profile
   */
  public _profile?: fhir.FhirElement|undefined;
  /**
   * Default constructor for ParameterDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IParameterDefinition> = { }) {
    super(source);
    if (source['name']) { this.name = source.name; }
    if (source['_name']) { this._name = new fhir.FhirElement(source._name!); }
    if (source['use']) { this.use = source.use; }
    else { this.use = null; }
    if (source['_use']) { this._use = new fhir.FhirElement(source._use!); }
    if (source['min']) { this.min = source.min; }
    if (source['_min']) { this._min = new fhir.FhirElement(source._min!); }
    if (source['max']) { this.max = source.max; }
    if (source['_max']) { this._max = new fhir.FhirElement(source._max!); }
    if (source['documentation']) { this.documentation = source.documentation; }
    if (source['_documentation']) { this._documentation = new fhir.FhirElement(source._documentation!); }
    if (source['type']) { this.type = source.type; }
    else { this.type = null; }
    if (source['_type']) { this._type = new fhir.FhirElement(source._type!); }
    if (source['profile']) { this.profile = source.profile; }
    if (source['_profile']) { this._profile = new fhir.FhirElement(source._profile!); }
  }
  /**
   * Required-bound Value Set for use
   */
  public static useRequiredValueSet():OperationParameterUseValueSetType {
    return OperationParameterUseValueSet;
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():AllTypesValueSetType {
    return AllTypesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_name"]) { results.push(...this._name.doModelValidation()); }
    if (!this["use"]) { results.push(["use",'Missing required element: ParameterDefinition.use']); }
    if (this["_use"]) { results.push(...this._use.doModelValidation()); }
    if (this["_min"]) { results.push(...this._min.doModelValidation()); }
    if (this["_max"]) { results.push(...this._max.doModelValidation()); }
    if (this["_documentation"]) { results.push(...this._documentation.doModelValidation()); }
    if (!this["type"]) { results.push(["type",'Missing required element: ParameterDefinition.type']); }
    if (this["_type"]) { results.push(...this._type.doModelValidation()); }
    if (this["_profile"]) { results.push(...this._profile.doModelValidation()); }
    return results;
  }
}
