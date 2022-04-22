// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Identifier

import * as fhir from '../fhir.js'

import { IdentifierUseValueSet, IdentifierUseValueSetType, IdentifierUseValueSetEnum } from '../fhirValueSets/IdentifierUseValueSet.js'
import { IdentifierTypeValueSet, IdentifierTypeValueSetType, IdentifierTypeValueSetEnum } from '../fhirValueSets/IdentifierTypeValueSet.js'

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export type IIdentifier = fhir.IFhirElement & { 
  /**
   * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
   */
  use?: IdentifierUseValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Identifier.use
   */
  _use?: fhir.IFhirElement|undefined;
  /**
   * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * Identifier.system is always case sensitive.
   */
  system?: string|undefined;
  /**
   * Extended properties for primitive element: Identifier.system
   */
  _system?: fhir.IFhirElement|undefined;
  /**
   * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.
   */
  value?: string|undefined;
  /**
   * Extended properties for primitive element: Identifier.value
   */
  _value?: fhir.IFhirElement|undefined;
  /**
   * Time period during which identifier is/was valid for use.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
   */
  assigner?: fhir.IReference|undefined;
}

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export class Identifier extends fhir.FhirElement implements IIdentifier {
  /**
   * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
   */
  public use?: IdentifierUseValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Identifier.use
   */
  public _use?: fhir.FhirElement|undefined;
  /**
   * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.   Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Identifier.system is always case sensitive.
   */
  public system?: string|undefined;
  /**
   * Extended properties for primitive element: Identifier.system
   */
  public _system?: fhir.FhirElement|undefined;
  /**
   * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html). Identifier.value is to be treated as case sensitive unless knowledge of the Identifier.system allows the processer to be confident that non-case-sensitive processing is safe.
   */
  public value?: string|undefined;
  /**
   * Extended properties for primitive element: Identifier.value
   */
  public _value?: fhir.FhirElement|undefined;
  /**
   * Time period during which identifier is/was valid for use.
   */
  public period?: fhir.Period|undefined;
  /**
   * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
   */
  public assigner?: fhir.Reference|undefined;
  /**
   * Default constructor for Identifier - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IIdentifier> = { }) {
    super(source);
    if (source['use']) { this.use = source.use; }
    if (source['_use']) { this._use = new fhir.FhirElement(source._use!); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source['system']) { this.system = source.system; }
    if (source['_system']) { this._system = new fhir.FhirElement(source._system!); }
    if (source['value']) { this.value = source.value; }
    if (source['_value']) { this._value = new fhir.FhirElement(source._value!); }
    if (source['period']) { this.period = new fhir.Period(source.period!); }
    if (source['assigner']) { this.assigner = new fhir.Reference(source.assigner!); }
  }
  /**
   * Required-bound Value Set for use
   */
  public static useRequiredValueSet():IdentifierUseValueSetType {
    return IdentifierUseValueSet;
  }
  /**
   * Extensible-bound Value Set for type
   */
  public static typeExtensibleValueSet():IdentifierTypeValueSetType {
    return IdentifierTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_use"]) { results.push(...this._use.doModelValidation()); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["_system"]) { results.push(...this._system.doModelValidation()); }
    if (this["_value"]) { results.push(...this._value.doModelValidation()); }
    if (this["period"]) { results.push(...this.period.doModelValidation()); }
    if (this["assigner"]) { results.push(...this.assigner.doModelValidation()); }
    return results;
  }
}
