import * as fhir from '../fhir.js';
import { TriggerTypeValueSetType } from '../fhirValueSets/TriggerTypeValueSet.js';
import { TriggerTypeValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the TriggerDefinition type.
 */
export interface TriggerDefinitionArgs extends fhir.FhirElementArgs {
    /**
     * The type of triggering event.
     */
    type: TriggerTypeValueSetEnum | null;
    /**
     * An event name can be provided for all event types, but is required for named events. If a name is provided for a type other than named events, it is considered to be a shorthand for the semantics described by the formal description of the event.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timing?: fhir.Timing | fhir.Reference | fhir.FhirDate | fhir.FhirDateTime | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingTiming?: fhir.TimingArgs | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingReference?: fhir.ReferenceArgs | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDate?: fhir.FhirDate | string | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * This element shall be present for any data type trigger.
     */
    data?: fhir.DataRequirementArgs[] | undefined;
    /**
     * This element can be only be specified for data type triggers and provides additional semantics for the trigger. The context available within the condition is based on the type of data event. For all events, the current resource will be available as context. In addition, for modification events, the previous resource will also be available. The expression may be inlined, or may be a simple absolute URI, which is a reference to a named expression within a logic library referenced by a library element or extension within the containing resource. If the expression is a FHIR Path expression, it evaluates in the context of a resource of one of the type identified in the data requirement, and may also refer to the variable %previous for delta comparisons on events of type data-changed, data-modified, and data-deleted which will always have the same type.
     */
    condition?: fhir.ExpressionArgs | undefined;
}
/**
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
export declare class TriggerDefinition extends fhir.FhirElement {
    readonly __dataType: string;
    /**
     * The type of triggering event.
     */
    type: TriggerTypeValueSetEnum | null;
    /**
     * An event name can be provided for all event types, but is required for named events. If a name is provided for a type other than named events, it is considered to be a shorthand for the semantics described by the formal description of the event.
     */
    name?: fhir.FhirString | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timing?: (fhir.Timing | fhir.Reference | fhir.FhirDate | fhir.FhirDateTime) | undefined;
    readonly __timingIsChoice: true;
    /**
     * This element shall be present for any data type trigger.
     */
    data?: fhir.DataRequirement[] | undefined;
    /**
     * This element can be only be specified for data type triggers and provides additional semantics for the trigger. The context available within the condition is based on the type of data event. For all events, the current resource will be available as context. In addition, for modification events, the previous resource will also be available. The expression may be inlined, or may be a simple absolute URI, which is a reference to a named expression within a logic library referenced by a library element or extension within the containing resource. If the expression is a FHIR Path expression, it evaluates in the context of a resource of one of the type identified in the data requirement, and may also refer to the variable %previous for delta comparisons on events of type data-changed, data-modified, and data-deleted which will always have the same type.
     */
    condition?: fhir.Expression | undefined;
    /**
     * Default constructor for TriggerDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TriggerDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): TriggerTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=TriggerDefinition.d.ts.map