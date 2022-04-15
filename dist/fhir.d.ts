import { IAddress, Address, AddressTypeEnum, AddressUseEnum } from './fhir/Address';
import { IAnnotation, Annotation } from './fhir/Annotation';
import { IAttachment, Attachment } from './fhir/Attachment';
import { IBackboneElement, BackboneElement } from './fhir/BackboneElement';
import { ICodeableConcept, CodeableConcept } from './fhir/CodeableConcept';
import { ICoding, Coding } from './fhir/Coding';
import { IContactPoint, ContactPoint, ContactPointSystemEnum, ContactPointUseEnum } from './fhir/ContactPoint';
import { IDuration, Duration } from './fhir/Duration';
import { IFhirElement, FhirElement } from './fhir/FhirElement';
import { IExtension, Extension } from './fhir/Extension';
import { IHumanName, HumanName, HumanNameUseEnum } from './fhir/HumanName';
import { IIdentifier, Identifier, IdentifierUseEnum } from './fhir/Identifier';
import { IMeta, Meta } from './fhir/Meta';
import { INarrative, Narrative, NarrativeStatusEnum } from './fhir/Narrative';
import { IPeriod, Period } from './fhir/Period';
import { IQuantity, Quantity, QuantityComparatorEnum } from './fhir/Quantity';
import { IRange, Range } from './fhir/Range';
import { IRatio, Ratio } from './fhir/Ratio';
import { IReference, Reference } from './fhir/Reference';
import { ISampledData, SampledData } from './fhir/SampledData';
import { ITimingRepeat, ITiming, TimingRepeat, Timing, TimingRepeatDayOfWeekEnum, TimingRepeatDurationUnitEnum, TimingRepeatPeriodUnitEnum } from './fhir/Timing';
import { IDomainResource, DomainResource } from './fhir/DomainResource';
import { IEncounterStatusHistory, IEncounterClassHistory, IEncounterParticipant, IEncounterDiagnosis, IEncounterHospitalization, IEncounterLocation, IEncounter, EncounterStatusHistory, EncounterClassHistory, EncounterParticipant, EncounterDiagnosis, EncounterHospitalization, EncounterLocation, Encounter, EncounterStatusHistoryStatusEnum, EncounterLocationStatusEnum, EncounterStatusEnum } from './fhir/Encounter';
import { IObservationReferenceRange, IObservationComponent, IObservation, ObservationReferenceRange, ObservationComponent, Observation, ObservationStatusEnum } from './fhir/Observation';
import { IPatientContact, IPatientCommunication, IPatientLink, IPatient, PatientContact, PatientCommunication, PatientLink, Patient, PatientContactGenderEnum, PatientLinkTypeEnum, PatientGenderEnum } from './fhir/Patient';
import { IResource, Resource } from './fhir/Resource';
/**
 * Resource binding for generic use.
 */
declare type IFhirResource = IEncounter | IObservation | IPatient;
/**
 * Resource binding for generic use.
 */
declare type FhirResource = Encounter | Observation | Patient;
/**
 * Factory creator for FHIR Resources
 */
declare function FhirResourceFactory(source: any): FhirResource | null;
/**
 * Factory creator for strict FHIR Resources
 */
declare function FhirResourceFactoryStrict(source: any): FhirResource | null;
export { type IAddress, Address, AddressTypeEnum, AddressUseEnum, type IAnnotation, Annotation, type IAttachment, Attachment, type IBackboneElement, BackboneElement, type ICodeableConcept, CodeableConcept, type ICoding, Coding, type IContactPoint, ContactPoint, ContactPointSystemEnum, ContactPointUseEnum, type IDuration, Duration, type IFhirElement, FhirElement, type IExtension, Extension, type IHumanName, HumanName, HumanNameUseEnum, type IIdentifier, Identifier, IdentifierUseEnum, type IMeta, Meta, type INarrative, Narrative, NarrativeStatusEnum, type IPeriod, Period, type IQuantity, Quantity, QuantityComparatorEnum, type IRange, Range, type IRatio, Ratio, type IReference, Reference, type ISampledData, SampledData, type ITimingRepeat, type ITiming, TimingRepeat, Timing, TimingRepeatDayOfWeekEnum, TimingRepeatDurationUnitEnum, TimingRepeatPeriodUnitEnum, type IDomainResource, DomainResource, type IEncounterStatusHistory, type IEncounterClassHistory, type IEncounterParticipant, type IEncounterDiagnosis, type IEncounterHospitalization, type IEncounterLocation, type IEncounter, EncounterStatusHistory, EncounterClassHistory, EncounterParticipant, EncounterDiagnosis, EncounterHospitalization, EncounterLocation, Encounter, EncounterStatusHistoryStatusEnum, EncounterLocationStatusEnum, EncounterStatusEnum, type IObservationReferenceRange, type IObservationComponent, type IObservation, ObservationReferenceRange, ObservationComponent, Observation, ObservationStatusEnum, type IPatientContact, type IPatientCommunication, type IPatientLink, type IPatient, PatientContact, PatientCommunication, PatientLink, Patient, PatientContactGenderEnum, PatientLinkTypeEnum, PatientGenderEnum, type IResource, Resource, type IFhirResource, type FhirResource, FhirResourceFactory, FhirResourceFactoryStrict, };
//# sourceMappingURL=fhir.d.ts.map