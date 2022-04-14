import * as fhirInterfaces from '../optionalinterfaces';
/**
 * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
 */
export interface ISubstanceProteinSubunit extends fhirInterfaces.IBackboneElement {
    /**
     * The modification at the C-terminal shall be specified.
     */
    cTerminalModification?: string | undefined;
    _cTerminalModification?: fhirInterfaces.IElement | undefined;
    /**
     * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
     */
    cTerminalModificationId?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Length of linear sequences of amino acids contained in the subunit.
     */
    length?: number | undefined;
    _length?: fhirInterfaces.IElement | undefined;
    /**
     * The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified.
     */
    nTerminalModification?: string | undefined;
    _nTerminalModification?: fhirInterfaces.IElement | undefined;
    /**
     * Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.
     */
    nTerminalModificationId?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
     */
    sequence?: string | undefined;
    _sequence?: fhirInterfaces.IElement | undefined;
    /**
     * The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.
     */
    sequenceAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
     */
    subunit?: number | undefined;
    _subunit?: fhirInterfaces.IElement | undefined;
}
/**
 * A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.
 */
export interface ISubstanceProtein extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "SubstanceProtein";
    /**
     * The disulphide bond between two cysteine residues either on the same subunit or on two different subunits shall be described. The position of the disulfide bonds in the SubstanceProtein shall be listed in increasing order of subunit number and position within subunit followed by the abbreviation of the amino acids involved. The disulfide linkage positions shall actually contain the amino acid Cysteine at the respective positions.
     */
    disulfideLinkage?: string[] | undefined;
    _disulfideLinkage?: fhirInterfaces.IElement[] | undefined;
    /**
     * Number of linear sequences of amino acids linked through peptide bonds. The number of subunits constituting the SubstanceProtein shall be described. It is possible that the number of subunits can be variable.
     */
    numberOfSubunits?: number | undefined;
    _numberOfSubunits?: fhirInterfaces.IElement | undefined;
    /**
     * The SubstanceProtein descriptive elements will only be used when a complete or partial amino acid sequence is available or derivable from a nucleic acid sequence.
     */
    sequenceType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This subclause refers to the description of each subunit constituting the SubstanceProtein. A subunit is a linear sequence of amino acids linked through peptide bonds. The Subunit information shall be provided when the finished SubstanceProtein is a complex of multiple sequences; subunits are not used to delineate domains within a single sequence. Subunits are listed in order of decreasing length; sequences of the same length will be ordered by decreasing molecular weight; subunits that have identical sequences will be repeated multiple times.
     */
    subunit?: fhirInterfaces.ISubstanceProteinSubunit[] | undefined;
}
//# sourceMappingURL=ISubstanceProtein.d.ts.map