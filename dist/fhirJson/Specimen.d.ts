import * as fhir from '../fhirJson.js';
/**
 * Details concerning the specimen collection.
 */
export interface SpecimenCollection extends fhir.BackboneElement {
    /**
     * Person who collected the specimen.
     */
    collector?: fhir.Reference | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.collection.collected[x]
     */
    _collectedDateTime?: fhir.FhirElement;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedPeriod?: fhir.Period | undefined;
    /**
     * The span of time over which the collection of a specimen occurred.
     */
    duration?: fhir.Duration | undefined;
    /**
     * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusDuration?: fhir.Duration | undefined;
}
/**
 * Details concerning processing and processing steps for the specimen.
 */
export interface SpecimenProcessing extends fhir.BackboneElement {
    /**
     * Textual description of procedure.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.processing.description
     */
    _description?: fhir.FhirElement;
    /**
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: fhir.CodeableConcept | undefined;
    /**
     * Material used in the processing step.
     */
    additive?: fhir.Reference[] | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timeDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.processing.time[x]
     */
    _timeDateTime?: fhir.FhirElement;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timePeriod?: fhir.Period | undefined;
}
/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export interface SpecimenContainer extends fhir.BackboneElement {
    /**
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Textual description of the container.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.container.description
     */
    _description?: fhir.FhirElement;
    /**
     * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The capacity (volume or other measure) the container may contain.
     */
    capacity?: fhir.Quantity | undefined;
    /**
     * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
     */
    specimenQuantity?: fhir.Quantity | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.Reference | undefined;
}
/**
 * A sample to be used for analysis.
 */
export interface Specimen extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Specimen";
    /**
     * Id for specimen.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: 'available' | 'entered-in-error' | 'unavailable' | 'unsatisfactory' | undefined;
    /**
     * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.receivedTime
     */
    _receivedTime?: fhir.FhirElement;
    /**
     * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
     */
    parent?: fhir.Reference[] | undefined;
    /**
     * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
     */
    request?: fhir.Reference[] | undefined;
    /**
     * Details concerning the specimen collection.
     */
    collection?: fhir.SpecimenCollection | undefined;
    /**
     * Details concerning processing and processing steps for the specimen.
     */
    processing?: fhir.SpecimenProcessing[] | undefined;
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */
    container?: fhir.SpecimenContainer[] | undefined;
    /**
     * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
     */
    condition?: fhir.CodeableConcept[] | undefined;
    /**
     * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
     */
    note?: fhir.Annotation[] | undefined;
}
//# sourceMappingURL=Specimen.d.ts.map