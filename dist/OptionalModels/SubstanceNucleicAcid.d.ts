import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The linkages between sugar residues will also be captured.
 */
export declare class SubstanceNucleicAcidSubunitLinkage extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceNucleicAcidSubunitLinkage {
    /**
     * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified.
     */
    connectivity?: string | undefined;
    _connectivity?: fhirModels.Element | undefined;
    /**
     * Each linkage will be registered as a fragment and have an ID.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Residues shall be captured as described in 5.3.6.8.3.
     */
    residueSite?: string | undefined;
    _residueSite?: fhirModels.Element | undefined;
    /**
     * Default constructor for SubstanceNucleicAcidSubunitLinkage from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceNucleicAcidSubunitLinkage>);
    /**
     * Factory function to create a SubstanceNucleicAcidSubunitLinkage from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceNucleicAcidSubunitLinkage): SubstanceNucleicAcidSubunitLinkage;
    /**
     * Check if the current SubstanceNucleicAcidSubunitLinkage contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * 5.3.6.8.1 Sugar ID (Mandatory).
 */
export declare class SubstanceNucleicAcidSubunitSugar extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceNucleicAcidSubunitSugar {
    /**
     * The Substance ID of the sugar or sugar-like component that make up the nucleotide.
     */
    identifier?: fhirModels.Identifier | undefined;
    /**
     * The name of the sugar or sugar-like component that make up the nucleotide.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above.
     */
    residueSite?: string | undefined;
    _residueSite?: fhirModels.Element | undefined;
    /**
     * Default constructor for SubstanceNucleicAcidSubunitSugar from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceNucleicAcidSubunitSugar>);
    /**
     * Factory function to create a SubstanceNucleicAcidSubunitSugar from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceNucleicAcidSubunitSugar): SubstanceNucleicAcidSubunitSugar;
    /**
     * Check if the current SubstanceNucleicAcidSubunitSugar contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
 */
export declare class SubstanceNucleicAcidSubunit extends fhirModels.BackboneElement implements fhirInterfaces.ISubstanceNucleicAcidSubunit {
    /**
     * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant.
     */
    fivePrime?: fhirModels.CodeableConcept | undefined;
    /**
     * The length of the sequence shall be captured.
     */
    length?: number | undefined;
    _length?: fhirModels.Element | undefined;
    /**
     * The linkages between sugar residues will also be captured.
     */
    linkage?: fhirModels.SubstanceNucleicAcidSubunitLinkage[] | undefined;
    /**
     * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured.
     */
    sequence?: string | undefined;
    _sequence?: fhirModels.Element | undefined;
    /**
     * (TBC).
     */
    sequenceAttachment?: fhirModels.Attachment | undefined;
    /**
     * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
     */
    subunit?: number | undefined;
    _subunit?: fhirModels.Element | undefined;
    /**
     * 5.3.6.8.1 Sugar ID (Mandatory).
     */
    sugar?: fhirModels.SubstanceNucleicAcidSubunitSugar[] | undefined;
    /**
     * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant.
     */
    threePrime?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceNucleicAcidSubunit from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceNucleicAcidSubunit>);
    /**
     * Factory function to create a SubstanceNucleicAcidSubunit from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceNucleicAcidSubunit): SubstanceNucleicAcidSubunit;
    /**
     * Check if the current SubstanceNucleicAcidSubunit contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
 */
export declare class SubstanceNucleicAcid extends fhirModels.DomainResource implements fhirInterfaces.ISubstanceNucleicAcid {
    /**
     * Resource Type Name
     */
    readonly resourceType = "SubstanceNucleicAcid";
    /**
     * The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue”.
     */
    areaOfHybridisation?: string | undefined;
    _areaOfHybridisation?: fhirModels.Element | undefined;
    /**
     * The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit.
     */
    numberOfSubunits?: number | undefined;
    _numberOfSubunits?: fhirModels.Element | undefined;
    /**
     * (TBC).
     */
    oligoNucleotideType?: fhirModels.CodeableConcept | undefined;
    /**
     * The type of the sequence shall be specified based on a controlled vocabulary.
     */
    sequenceType?: fhirModels.CodeableConcept | undefined;
    /**
     * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
     */
    subunit?: fhirModels.SubstanceNucleicAcidSubunit[] | undefined;
    /**
     * Default constructor for SubstanceNucleicAcid from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISubstanceNucleicAcid>);
    /**
     * Factory function to create a SubstanceNucleicAcid from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISubstanceNucleicAcid): SubstanceNucleicAcid;
    /**
     * Check if the current SubstanceNucleicAcid contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=SubstanceNucleicAcid.d.ts.map