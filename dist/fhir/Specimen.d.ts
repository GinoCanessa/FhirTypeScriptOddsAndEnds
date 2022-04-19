import * as fhir from '../fhir';
/**
 * Details concerning the specimen collection.
 */
export declare type ISpecimenCollection = fhir.IBackboneElement & {
    /**
     * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedDateTime?: string | undefined;
    _collectedDateTime?: fhir.IFhirElement | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedPeriod?: fhir.IPeriod | undefined;
    /**
     * Person who collected the specimen.
     */
    collector?: fhir.IReference | undefined;
    /**
     * The span of time over which the collection of a specimen occurred.
     */
    duration?: fhir.IDuration | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusDuration?: fhir.IDuration | undefined;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */
    quantity?: fhir.IQuantity | undefined;
};
/**
 * Details concerning processing and processing steps for the specimen.
 */
export declare type ISpecimenProcessing = fhir.IBackboneElement & {
    /**
     * Material used in the processing step.
     */
    additive?: fhir.IReference[] | undefined;
    /**
     * Textual description of procedure.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: fhir.ICodeableConcept | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhir.IFhirElement | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timePeriod?: fhir.IPeriod | undefined;
};
/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export declare type ISpecimenContainer = fhir.IBackboneElement & {
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.IReference | undefined;
    /**
     * The capacity (volume or other measure) the container may contain.
     */
    capacity?: fhir.IQuantity | undefined;
    /**
     * Textual description of the container.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
     */
    specimenQuantity?: fhir.IQuantity | undefined;
    /**
     * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * A sample to be used for analysis.
 */
export declare type ISpecimen = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Specimen";
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: fhir.IIdentifier | undefined;
    /**
     * Details concerning the specimen collection.
     */
    collection?: fhir.ISpecimenCollection | undefined;
    /**
     * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
     */
    condition?: fhir.ICodeableConcept[] | undefined;
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */
    container?: fhir.ISpecimenContainer[] | undefined;
    /**
     * Id for specimen.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
     */
    parent?: fhir.IReference[] | undefined;
    /**
     * Details concerning processing and processing steps for the specimen.
     */
    processing?: fhir.ISpecimenProcessing[] | undefined;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: string | undefined;
    _receivedTime?: fhir.IFhirElement | undefined;
    /**
     * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
     */
    request?: fhir.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: SpecimenStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
     */
    subject?: fhir.IReference | undefined;
    /**
     * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * Details concerning the specimen collection.
 */
export declare class SpecimenCollection extends fhir.BackboneElement implements fhir.ISpecimenCollection {
    /**
     * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedDateTime?: string | undefined;
    _collectedDateTime?: fhir.FhirElement | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedPeriod?: fhir.Period | undefined;
    /**
     * Person who collected the specimen.
     */
    collector?: fhir.Reference | undefined;
    /**
     * The span of time over which the collection of a specimen occurred.
     */
    duration?: fhir.Duration | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusDuration?: fhir.Duration | undefined;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Default constructor for SpecimenCollection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISpecimenCollection>);
    /**
     * Check if the current SpecimenCollection contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SpecimenCollection from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISpecimenCollection): SpecimenCollection;
}
/**
 * Details concerning processing and processing steps for the specimen.
 */
export declare class SpecimenProcessing extends fhir.BackboneElement implements fhir.ISpecimenProcessing {
    /**
     * Material used in the processing step.
     */
    additive?: fhir.Reference[] | undefined;
    /**
     * Textual description of procedure.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: fhir.CodeableConcept | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhir.FhirElement | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timePeriod?: fhir.Period | undefined;
    /**
     * Default constructor for SpecimenProcessing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISpecimenProcessing>);
    /**
     * Check if the current SpecimenProcessing contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SpecimenProcessing from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISpecimenProcessing): SpecimenProcessing;
}
/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export declare class SpecimenContainer extends fhir.BackboneElement implements fhir.ISpecimenContainer {
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.Reference | undefined;
    /**
     * The capacity (volume or other measure) the container may contain.
     */
    capacity?: fhir.Quantity | undefined;
    /**
     * Textual description of the container.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
     */
    specimenQuantity?: fhir.Quantity | undefined;
    /**
     * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SpecimenContainer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISpecimenContainer>);
    /**
     * Check if the current SpecimenContainer contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SpecimenContainer from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISpecimenContainer): SpecimenContainer;
}
/**
 * A sample to be used for analysis.
 */
export declare class Specimen extends fhir.DomainResource implements fhir.ISpecimen {
    /**
     * Resource Type Name
     */
    resourceType: "Specimen";
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: fhir.Identifier | undefined;
    /**
     * Details concerning the specimen collection.
     */
    collection?: fhir.SpecimenCollection | undefined;
    /**
     * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
     */
    condition?: fhir.CodeableConcept[] | undefined;
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */
    container?: fhir.SpecimenContainer[] | undefined;
    /**
     * Id for specimen.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
     */
    parent?: fhir.Reference[] | undefined;
    /**
     * Details concerning processing and processing steps for the specimen.
     */
    processing?: fhir.SpecimenProcessing[] | undefined;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: string | undefined;
    _receivedTime?: fhir.FhirElement | undefined;
    /**
     * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
     */
    request?: fhir.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: SpecimenStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for Specimen - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISpecimen>);
    /**
     * Check if the current Specimen contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Specimen from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISpecimen): Specimen;
}
/**
 * Code Values for the Specimen.status field
 */
export declare enum SpecimenStatusEnum {
    AVAILABLE = "available",
    UNAVAILABLE = "unavailable",
    UNSATISFACTORY = "unsatisfactory",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=Specimen.d.ts.map