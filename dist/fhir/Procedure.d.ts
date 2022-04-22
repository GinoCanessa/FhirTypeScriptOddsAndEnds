import * as fhir from '../fhir.js';
import { PerformerRoleValueSetType } from '../fhirValueSets/PerformerRoleValueSet.js';
import { DeviceActionValueSetType } from '../fhirValueSets/DeviceActionValueSet.js';
import { EventStatusValueSetType, EventStatusValueSetEnum } from '../fhirValueSets/EventStatusValueSet.js';
import { ProcedureNotPerformedReasonValueSetType } from '../fhirValueSets/ProcedureNotPerformedReasonValueSet.js';
import { ProcedureCategoryValueSetType } from '../fhirValueSets/ProcedureCategoryValueSet.js';
import { ProcedureCodeValueSetType } from '../fhirValueSets/ProcedureCodeValueSet.js';
import { ProcedureReasonValueSetType } from '../fhirValueSets/ProcedureReasonValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
import { ProcedureOutcomeValueSetType } from '../fhirValueSets/ProcedureOutcomeValueSet.js';
import { ConditionCodeValueSetType } from '../fhirValueSets/ConditionCodeValueSet.js';
import { ProcedureFollowupValueSetType } from '../fhirValueSets/ProcedureFollowupValueSet.js';
import { DeviceKindValueSetType } from '../fhirValueSets/DeviceKindValueSet.js';
/**
 * Limited to "real" people rather than equipment.
 */
export declare type IProcedurePerformer = fhir.IBackboneElement & {
    /**
     * Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
     */
    function?: fhir.ICodeableConcept | undefined;
    /**
     * The practitioner who was involved in the procedure.
     */
    actor: fhir.IReference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.IReference | undefined;
};
/**
 * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
 */
export declare type IProcedureFocalDevice = fhir.IBackboneElement & {
    /**
     * The kind of change that happened to the device during the procedure.
     */
    action?: fhir.ICodeableConcept | undefined;
    /**
     * The device that was manipulated (changed) during the procedure.
     */
    manipulated: fhir.IReference | null;
};
/**
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 */
export declare type IProcedure = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Procedure";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and Person resource instances might share the same social insurance number.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: Procedure.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.IFhirElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: Procedure.instantiatesUri
     */
    _instantiatesUri?: fhir.IFhirElement[] | undefined;
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For example, the anesthesia MedicationAdministration is part of the surgical Procedure (MedicationAdministration.partOf = Procedure).  For example, the procedure to insert the IV port for an IV medication administration is part of the medication administration (Procedure.partOf = MedicationAdministration).
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: EventStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Procedure.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.ICodeableConcept | undefined;
    /**
     * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * The person, animal or group on which the procedure was performed.
     */
    subject: fhir.IReference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Procedure.performed[x]
     */
    _performedDateTime?: fhir.IFhirElement | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedPeriod?: fhir.IPeriod | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedString?: string | undefined;
    /**
     * Extended properties for primitive element: Procedure.performed[x]
     */
    _performedString?: fhir.IFhirElement | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedAge?: fhir.IAge | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedRange?: fhir.IRange | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.IReference | undefined;
    /**
     * Individual who is making the procedure statement.
     */
    asserter?: fhir.IReference | undefined;
    /**
     * Limited to "real" people rather than equipment.
     */
    performer?: fhir.IProcedurePerformer[] | undefined;
    /**
     * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
     */
    location?: fhir.IReference | undefined;
    /**
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * It is possible for a procedure to be a reason (such as C-Section) for another procedure (such as an epidural). Other examples include endoscopy for dilatation and biopsy (a combination of diagnostic and therapeutic use).
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [procedure-targetbodystructure](extension-procedure-targetbodystructure.html).
     */
    bodySite?: fhir.ICodeableConcept[] | undefined;
    /**
     * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
     */
    outcome?: fhir.ICodeableConcept | undefined;
    /**
     * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
     */
    report?: fhir.IReference[] | undefined;
    /**
     * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
     */
    complication?: fhir.ICodeableConcept[] | undefined;
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period.
     */
    complicationDetail?: fhir.IReference[] | undefined;
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
     */
    followUp?: fhir.ICodeableConcept[] | undefined;
    /**
     * Any other notes and comments about the procedure.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice?: fhir.IProcedureFocalDevice[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedReference?: fhir.IReference[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedCode?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Limited to "real" people rather than equipment.
 */
export declare class ProcedurePerformer extends fhir.BackboneElement implements IProcedurePerformer {
    /**
     * Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * The practitioner who was involved in the procedure.
     */
    actor: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Default constructor for ProcedurePerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IProcedurePerformer>);
    /**
     * Example-bound Value Set for function
     */
    static functionExampleValueSet(): PerformerRoleValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
 */
export declare class ProcedureFocalDevice extends fhir.BackboneElement implements IProcedureFocalDevice {
    /**
     * The kind of change that happened to the device during the procedure.
     */
    action?: fhir.CodeableConcept | undefined;
    /**
     * The device that was manipulated (changed) during the procedure.
     */
    manipulated: fhir.Reference | null;
    /**
     * Default constructor for ProcedureFocalDevice - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IProcedureFocalDevice>);
    /**
     * Preferred-bound Value Set for action
     */
    static actionPreferredValueSet(): DeviceActionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.
 */
export declare class Procedure extends fhir.DomainResource implements IProcedure {
    /**
     * Resource Type Name
     */
    resourceType: "Procedure";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and Person resource instances might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The URL pointing to a FHIR-defined protocol, guideline, order set or other definition that is adhered to in whole or in part by this Procedure.
     */
    instantiatesCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: Procedure.instantiatesCanonical
     */
    _instantiatesCanonical?: fhir.FhirElement[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: Procedure.instantiatesUri
     */
    _instantiatesUri?: fhir.FhirElement[] | undefined;
    /**
     * A reference to a resource that contains details of the request for this procedure.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * The MedicationAdministration resource has a partOf reference to Procedure, but this is not a circular reference.   For example, the anesthesia MedicationAdministration is part of the surgical Procedure (MedicationAdministration.partOf = Procedure).  For example, the procedure to insert the IV port for an IV medication administration is part of the medication administration (Procedure.partOf = MedicationAdministration).
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * The "unknown" code is not to be used to convey other statuses.  The "unknown" code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the procedure.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: EventStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Procedure.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * The specific procedure that is performed. Use text if the exact nature of the procedure cannot be coded (e.g. "Laparoscopic Appendectomy").
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The person, animal or group on which the procedure was performed.
     */
    subject: fhir.Reference | null;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Procedure.performed[x]
     */
    _performedDateTime?: fhir.FhirElement | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedPeriod?: fhir.Period | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedString?: string | undefined;
    /**
     * Extended properties for primitive element: Procedure.performed[x]
     */
    _performedString?: fhir.FhirElement | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedAge?: fhir.Age | undefined;
    /**
     * Age is generally used when the patient reports an age at which the procedure was performed. Range is generally used when the patient reports an age range when the procedure was performed, such as sometime between 20-25 years old.  dateTime supports a range of precision due to some procedures being reported as past procedures that might not have millisecond precision while other procedures performed and documented during the encounter might have more precise UTC timestamps with timezone.
     */
    performedRange?: fhir.Range | undefined;
    /**
     * Individual who recorded the record and takes responsibility for its content.
     */
    recorder?: fhir.Reference | undefined;
    /**
     * Individual who is making the procedure statement.
     */
    asserter?: fhir.Reference | undefined;
    /**
     * Limited to "real" people rather than equipment.
     */
    performer?: fhir.ProcedurePerformer[] | undefined;
    /**
     * The location where the procedure actually happened.  E.g. a newborn at home, a tracheostomy at a restaurant.
     */
    location?: fhir.Reference | undefined;
    /**
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * It is possible for a procedure to be a reason (such as C-Section) for another procedure (such as an epidural). Other examples include endoscopy for dilatation and biopsy (a combination of diagnostic and therapeutic use).
     * Use Procedure.reasonCode when a code sufficiently describes the reason.  Use Procedure.reasonReference when referencing a resource, which allows more information to be conveyed, such as onset date. Procedure.reasonCode and Procedure.reasonReference are not meant to be duplicative.  For a single reason, either Procedure.reasonCode or Procedure.reasonReference can be used.  Procedure.reasonCode may be a summary code, or Procedure.reasonReference may be used to reference a very precise definition of the reason using Condition | Observation | Procedure | DiagnosticReport | DocumentReference.  Both Procedure.reasonCode and Procedure.reasonReference can be used if they are describing different reasons for the procedure.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [procedure-targetbodystructure](extension-procedure-targetbodystructure.html).
     */
    bodySite?: fhir.CodeableConcept[] | undefined;
    /**
     * If outcome contains narrative text only, it can be captured using the CodeableConcept.text.
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * There could potentially be multiple reports - e.g. if this was a procedure which took multiple biopsies resulting in a number of anatomical pathology reports.
     */
    report?: fhir.Reference[] | undefined;
    /**
     * If complications are only expressed by the narrative text, they can be captured using the CodeableConcept.text.
     */
    complication?: fhir.CodeableConcept[] | undefined;
    /**
     * Any complications that occurred during the procedure, or in the immediate post-performance period.
     */
    complicationDetail?: fhir.Reference[] | undefined;
    /**
     * If the procedure required specific follow up - e.g. removal of sutures. The follow up may be represented as a simple note or could potentially be more complex, in which case the CarePlan resource can be used.
     */
    followUp?: fhir.CodeableConcept[] | undefined;
    /**
     * Any other notes and comments about the procedure.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */
    focalDevice?: fhir.ProcedureFocalDevice[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedReference?: fhir.Reference[] | undefined;
    /**
     * For devices actually implanted or removed, use Procedure.device.
     */
    usedCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for Procedure - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IProcedure>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): EventStatusValueSetType;
    /**
     * Example-bound Value Set for statusReason
     */
    static statusReasonExampleValueSet(): ProcedureNotPerformedReasonValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): ProcedureCategoryValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ProcedureCodeValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): ProcedureReasonValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    static bodySiteExampleValueSet(): BodySiteValueSetType;
    /**
     * Example-bound Value Set for outcome
     */
    static outcomeExampleValueSet(): ProcedureOutcomeValueSetType;
    /**
     * Example-bound Value Set for complication
     */
    static complicationExampleValueSet(): ConditionCodeValueSetType;
    /**
     * Example-bound Value Set for followUp
     */
    static followUpExampleValueSet(): ProcedureFollowupValueSetType;
    /**
     * Example-bound Value Set for usedCode
     */
    static usedCodeExampleValueSet(): DeviceKindValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Procedure.d.ts.map