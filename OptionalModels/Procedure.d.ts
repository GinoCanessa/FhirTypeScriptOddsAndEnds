import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Limited to "real" people rather than equipment.
 */
export declare class ProcedurePerformer extends fhirModels.BackboneElement implements fhirInterfaces.IProcedurePerformer {
    /**
     * The practitioner who was involved in the procedure.
     */
    actor?: fhirModels.Reference | undefined;
    /**
     * Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
     */
    function?: fhirModels.CodeableConcept | undefined;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ProcedurePerformer from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IProcedurePerformer>);
    /**
     * Factory function to create a ProcedurePerformer from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IProcedurePerformer): ProcedurePerformer;
    /**
     * Check if the current ProcedurePerformer contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
 */
export declare class ProcedureFocalDevice extends fhirModels.BackboneElement implements fhirInterfaces.IProcedureFocalDevice {
    /**
     * The kind of change that happened to the device during the procedure.
     */
    action?: fhirModels.CodeableConcept | undefined;
    /**
     * The device that was manipulated (changed) during the procedure.
     */
    manipulated?: fhirModels.Reference | undefined;
    /**
     * Default constructor for ProcedureFocalDevice from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IProcedureFocalDevice>);
    /**
     * Factory function to create a ProcedureFocalDevice from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IProcedureFocalDevice): ProcedureFocalDevice;
    /**
     * Check if the current ProcedureFocalDevice contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 */
export declare class Procedure extends fhirModels.DomainResource implements fhirInterfaces.IProcedure {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Procedure";
    /**
     * Individual who is making the procedure statement.
     */
    asserter?: fhirModels.Reference | undefined;
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    basedOn?: fhirModels.Reference[] | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [procedure-targetbodystructure](extension-procedure-targetbodystructure.html).
     */
    bodySite?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
     */
    complication?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period.
     */
    complicationDetail?: fhirModels.Reference[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice?: fhirModels.ProcedureFocalDevice[] | undefined;
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
     */
    followUp?: fhirModels.CodeableConcept[] | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and Person resource instances might share the same social insurance number.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhirModels.Element[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhirModels.Element[] | undefined;
    /**
     * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
     */
    location?: fhirModels.Reference | undefined;
    /**
     * Any other notes and comments about the procedure.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
     */
    outcome?: fhirModels.CodeableConcept | undefined;
    /**
     * The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For example, the anesthesia MedicationAdministration is part of the surgical Procedure (MedicationAdministration.partOf = Procedure).  For example, the procedure to insert the IV port for an IV medication administration is part of the medication administration (Procedure.partOf = MedicationAdministration).
     */
    partOf?: fhirModels.Reference[] | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedDateTime?: string | undefined;
    _performedDateTime?: fhirModels.Element | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedPeriod?: fhirModels.Period | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedString?: string | undefined;
    _performedString?: fhirModels.Element | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedAge?: fhirModels.Age | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedRange?: fhirModels.Range | undefined;
    /**
     * Limited to "real" people rather than equipment.
     */
    performer?: fhirModels.ProcedurePerformer[] | undefined;
    /**
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * It is possible for a procedure to be a reason (such as C-Section) for another procedure (such as an epidural). Other examples include endoscopy for dilatation and biopsy (a combination of diagnostic and therapeutic use).
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhirModels.Reference | undefined;
    /**
     * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
     */
    report?: fhirModels.Reference[] | undefined;
    /**
     * The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: ProcedureStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhirModels.CodeableConcept | undefined;
    /**
     * The person, animal or group on which the procedure was performed.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedReference?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for Procedure from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IProcedure>);
    /**
     * Factory function to create a Procedure from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IProcedure): Procedure;
    /**
     * Check if the current Procedure contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Procedure.status field
 */
export declare enum ProcedureStatusEnum {
    PREPARATION = "preparation",
    IN_PROGRESS = "in-progress",
    NOT_DONE = "not-done",
    ON_HOLD = "on-hold",
    STOPPED = "stopped",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Procedure.d.ts.map