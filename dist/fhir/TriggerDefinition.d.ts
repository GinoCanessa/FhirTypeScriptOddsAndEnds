import * as fhir from '../fhir';
/**
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
export declare type ITriggerDefinition = fhir.IFhirElement & {
    /**
     * This element can be only be specified for data type triggers and provides additional semantics for the trigger. The context available within the condition is based on the type of data event. For all events, the current resource will be available as context. In addition, for modification events, the previous resource will also be available. The expression may be inlined, or may be a simple absolute URI, which is a reference to a named expression within a logic library referenced by a library element or extension within the containing resource. If the expression is a FHIR Path expression, it evaluates in the context of a resource of one of the type identified in the data requirement, and may also refer to the variable %previous for delta comparisons on events of type data-changed, data-modified, and data-deleted which will always have the same type.
     */
    condition?: fhir.IExpression | undefined;
    /**
     * This element shall be present for any data type trigger.
     */
    data?: fhir.IDataRequirement[] | undefined;
    /**
     * An event name can be provided for all event types, but is required for named events. If a name is provided for a type other than named events, it is considered to be a shorthand for the semantics described by the formal description of the event.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingTiming?: fhir.ITiming | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingReference?: fhir.IReference | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDate?: string | undefined;
    _timingDate?: fhir.IFhirElement | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDateTime?: string | undefined;
    _timingDateTime?: fhir.IFhirElement | undefined;
    /**
     * The type of triggering event.
     */
    type: TriggerDefinitionTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
export declare class TriggerDefinition extends fhir.FhirElement implements fhir.ITriggerDefinition {
    /**
     * This element can be only be specified for data type triggers and provides additional semantics for the trigger. The context available within the condition is based on the type of data event. For all events, the current resource will be available as context. In addition, for modification events, the previous resource will also be available. The expression may be inlined, or may be a simple absolute URI, which is a reference to a named expression within a logic library referenced by a library element or extension within the containing resource. If the expression is a FHIR Path expression, it evaluates in the context of a resource of one of the type identified in the data requirement, and may also refer to the variable %previous for delta comparisons on events of type data-changed, data-modified, and data-deleted which will always have the same type.
     */
    condition?: fhir.Expression | undefined;
    /**
     * This element shall be present for any data type trigger.
     */
    data?: fhir.DataRequirement[] | undefined;
    /**
     * An event name can be provided for all event types, but is required for named events. If a name is provided for a type other than named events, it is considered to be a shorthand for the semantics described by the formal description of the event.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingTiming?: fhir.Timing | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingReference?: fhir.Reference | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDate?: string | undefined;
    _timingDate?: fhir.FhirElement | undefined;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDateTime?: string | undefined;
    _timingDateTime?: fhir.FhirElement | undefined;
    /**
     * The type of triggering event.
     */
    type: TriggerDefinitionTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for TriggerDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ITriggerDefinition>);
    /**
     * Check if the current TriggerDefinition contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a TriggerDefinition from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ITriggerDefinition): TriggerDefinition;
}
/**
 * Code Values for the TriggerDefinition.type field
 */
export declare enum TriggerDefinitionTypeEnum {
    NAMED_EVENT = "named-event",
    PERIODIC = "periodic",
    DATA_CHANGED = "data-changed",
    DATA_ADDED = "data-added",
    DATA_MODIFIED = "data-modified",
    DATA_REMOVED = "data-removed",
    DATA_ACCESSED = "data-accessed",
    DATA_ACCESS_ENDED = "data-access-ended"
}
//# sourceMappingURL=TriggerDefinition.d.ts.map