import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export declare class RelatedPersonCommunication extends fhirModels.BackboneElement implements fhirInterfaces.IRelatedPersonCommunication {
    /**
     * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
     */
    language?: fhirModels.CodeableConcept | undefined;
    /**
     * This language is specifically identified for communicating healthcare information.
     */
    preferred?: boolean | undefined;
    _preferred?: fhirModels.Element | undefined;
    /**
     * Default constructor for RelatedPersonCommunication from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IRelatedPersonCommunication>);
    /**
     * Factory function to create a RelatedPersonCommunication from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IRelatedPersonCommunication): RelatedPersonCommunication;
    /**
     * Check if the current RelatedPersonCommunication contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export declare class RelatedPerson extends fhirModels.DomainResource implements fhirInterfaces.IRelatedPerson {
    /**
     * Resource Type Name
     */
    readonly resourceType = "RelatedPerson";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * Address where the related person can be contacted or visited.
     */
    address?: fhirModels.Address[] | undefined;
    /**
     * The date on which the related person was born.
     */
    birthDate?: string | undefined;
    _birthDate?: fhirModels.Element | undefined;
    /**
     * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
     */
    communication?: fhirModels.RelatedPersonCommunication[] | undefined;
    /**
     * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */
    gender?: RelatedPersonGenderEnum | undefined;
    _gender?: fhirModels.Element | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * A name associated with the person.
     */
    name?: fhirModels.HumanName[] | undefined;
    /**
     * The patient this person is related to.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Image of the person.
     */
    photo?: fhirModels.Attachment[] | undefined;
    /**
     * The nature of the relationship between a patient and the related person.
     */
    relationship?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Default constructor for RelatedPerson from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IRelatedPerson>);
    /**
     * Factory function to create a RelatedPerson from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IRelatedPerson): RelatedPerson;
    /**
     * Check if the current RelatedPerson contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the RelatedPerson.gender field
 */
export declare enum RelatedPersonGenderEnum {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=RelatedPerson.d.ts.map