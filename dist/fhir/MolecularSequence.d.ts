import * as fhir from '../fhir.js';
import { ChromosomeHumanValueSetType } from '../fhirValueSets/ChromosomeHumanValueSet.js';
import { OrientationTypeValueSetType, OrientationTypeValueSetEnum } from '../fhirValueSets/OrientationTypeValueSet.js';
import { StrandTypeValueSetType, StrandTypeValueSetEnum } from '../fhirValueSets/StrandTypeValueSet.js';
import { QualityTypeValueSetType, QualityTypeValueSetEnum } from '../fhirValueSets/QualityTypeValueSet.js';
import { RepositoryTypeValueSetType, RepositoryTypeValueSetEnum } from '../fhirValueSets/RepositoryTypeValueSet.js';
import { SequenceTypeValueSetType, SequenceTypeValueSetEnum } from '../fhirValueSets/SequenceTypeValueSet.js';
/**
 * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
 */
export declare type IMolecularSequenceReferenceSeq = fhir.IBackboneElement & {
    /**
     * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
     */
    chromosome?: fhir.ICodeableConcept | undefined;
    /**
     * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
     */
    genomeBuild?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.genomeBuild
     */
    _genomeBuild?: fhir.IFhirElement | undefined;
    /**
     * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
     */
    orientation?: OrientationTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.orientation
     */
    _orientation?: fhir.IFhirElement | undefined;
    /**
     * Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
     */
    referenceSeqId?: fhir.ICodeableConcept | undefined;
    /**
     * A pointer to another MolecularSequence entity as reference sequence.
     */
    referenceSeqPointer?: fhir.IReference | undefined;
    /**
     * A string like "ACGT".
     */
    referenceSeqString?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.referenceSeqString
     */
    _referenceSeqString?: fhir.IFhirElement | undefined;
    /**
     * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
     */
    strand?: StrandTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.strand
     */
    _strand?: fhir.IFhirElement | undefined;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    windowStart?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.windowStart
     */
    _windowStart?: fhir.IFhirElement | undefined;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    windowEnd?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.windowEnd
     */
    _windowEnd?: fhir.IFhirElement | undefined;
};
/**
 * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
 */
export declare type IMolecularSequenceVariant = fhir.IBackboneElement & {
    /**
     * Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.start
     */
    _start?: fhir.IFhirElement | undefined;
    /**
     * End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.end
     */
    _end?: fhir.IFhirElement | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    observedAllele?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.observedAllele
     */
    _observedAllele?: fhir.IFhirElement | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    referenceAllele?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.referenceAllele
     */
    _referenceAllele?: fhir.IFhirElement | undefined;
    /**
     * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
     */
    cigar?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.cigar
     */
    _cigar?: fhir.IFhirElement | undefined;
    /**
     * A pointer to an Observation containing variant information.
     */
    variantPointer?: fhir.IReference | undefined;
};
/**
 * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
 */
export declare type IMolecularSequenceQualityRoc = fhir.IBackboneElement & {
    /**
     * Invidual data point representing the GQ (genotype quality) score threshold.
     */
    score?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.score
     */
    _score?: fhir.IFhirElement[] | undefined;
    /**
     * The number of true positives if the GQ score threshold was set to "score" field value.
     */
    numTP?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numTP
     */
    _numTP?: fhir.IFhirElement[] | undefined;
    /**
     * The number of false positives if the GQ score threshold was set to "score" field value.
     */
    numFP?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numFP
     */
    _numFP?: fhir.IFhirElement[] | undefined;
    /**
     * The number of false negatives if the GQ score threshold was set to "score" field value.
     */
    numFN?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numFN
     */
    _numFN?: fhir.IFhirElement[] | undefined;
    /**
     * Calculated precision if the GQ score threshold was set to "score" field value.
     */
    precision?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.precision
     */
    _precision?: fhir.IFhirElement[] | undefined;
    /**
     * Calculated sensitivity if the GQ score threshold was set to "score" field value.
     */
    sensitivity?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.sensitivity
     */
    _sensitivity?: fhir.IFhirElement[] | undefined;
    /**
     * Calculated fScore if the GQ score threshold was set to "score" field value.
     */
    fMeasure?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.fMeasure
     */
    _fMeasure?: fhir.IFhirElement[] | undefined;
};
/**
 * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
 */
export declare type IMolecularSequenceQuality = fhir.IBackboneElement & {
    /**
     * INDEL / SNP / Undefined variant.
     */
    type: QualityTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * Gold standard sequence used for comparing against.
     */
    standardSequence?: fhir.ICodeableConcept | undefined;
    /**
     * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.start
     */
    _start?: fhir.IFhirElement | undefined;
    /**
     * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.end
     */
    _end?: fhir.IFhirElement | undefined;
    /**
     * The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
     */
    score?: fhir.IQuantity | undefined;
    /**
     * Which method is used to get sequence quality.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    truthTP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.truthTP
     */
    _truthTP?: fhir.IFhirElement | undefined;
    /**
     * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    queryTP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.queryTP
     */
    _queryTP?: fhir.IFhirElement | undefined;
    /**
     * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
     */
    truthFN?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.truthFN
     */
    _truthFN?: fhir.IFhirElement | undefined;
    /**
     * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
     */
    queryFP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.queryFP
     */
    _queryFP?: fhir.IFhirElement | undefined;
    /**
     * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
     */
    gtFP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.gtFP
     */
    _gtFP?: fhir.IFhirElement | undefined;
    /**
     * QUERY.TP / (QUERY.TP + QUERY.FP).
     */
    precision?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.precision
     */
    _precision?: fhir.IFhirElement | undefined;
    /**
     * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
     */
    recall?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.recall
     */
    _recall?: fhir.IFhirElement | undefined;
    /**
     * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
     */
    fScore?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.fScore
     */
    _fScore?: fhir.IFhirElement | undefined;
    /**
     * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
     */
    roc?: fhir.IMolecularSequenceQualityRoc | undefined;
};
/**
 * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
 */
export declare type IMolecularSequenceRepository = fhir.IBackboneElement & {
    /**
     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
     */
    type: RepositoryTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
     */
    datasetId?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.datasetId
     */
    _datasetId?: fhir.IFhirElement | undefined;
    /**
     * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
     */
    variantsetId?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.variantsetId
     */
    _variantsetId?: fhir.IFhirElement | undefined;
    /**
     * Id of the read in this external repository.
     */
    readsetId?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.readsetId
     */
    _readsetId?: fhir.IFhirElement | undefined;
};
/**
 * Structural variant outer.
 */
export declare type IMolecularSequenceStructureVariantOuter = fhir.IBackboneElement & {
    /**
     * Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.outer.start
     */
    _start?: fhir.IFhirElement | undefined;
    /**
     * Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.outer.end
     */
    _end?: fhir.IFhirElement | undefined;
};
/**
 * Structural variant inner.
 */
export declare type IMolecularSequenceStructureVariantInner = fhir.IBackboneElement & {
    /**
     * Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.inner.start
     */
    _start?: fhir.IFhirElement | undefined;
    /**
     * Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.inner.end
     */
    _end?: fhir.IFhirElement | undefined;
};
/**
 * Information about chromosome structure variation.
 */
export declare type IMolecularSequenceStructureVariant = fhir.IBackboneElement & {
    /**
     * Information about chromosome structure variation DNA change type.
     */
    variantType?: fhir.ICodeableConcept | undefined;
    /**
     * Used to indicate if the outer and inner start-end values have the same meaning.
     */
    exact?: boolean | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.exact
     */
    _exact?: fhir.IFhirElement | undefined;
    /**
     * Length of the variant chromosome.
     */
    length?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.length
     */
    _length?: fhir.IFhirElement | undefined;
    /**
     * Structural variant outer.
     */
    outer?: fhir.IMolecularSequenceStructureVariantOuter | undefined;
    /**
     * Structural variant inner.
     */
    inner?: fhir.IMolecularSequenceStructureVariantInner | undefined;
};
/**
 * Raw data describing a biological sequence.
 */
export declare type IMolecularSequence = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MolecularSequence";
    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: SequenceTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
     */
    coordinateSystem: number | null;
    /**
     * Extended properties for primitive element: MolecularSequence.coordinateSystem
     */
    _coordinateSystem?: fhir.IFhirElement | undefined;
    /**
     * The patient whose sequencing results are described by this resource.
     */
    patient?: fhir.IReference | undefined;
    /**
     * Specimen used for sequencing.
     */
    specimen?: fhir.IReference | undefined;
    /**
     * The method for sequencing, for example, chip information.
     */
    device?: fhir.IReference | undefined;
    /**
     * The organization or lab that should be responsible for this result.
     */
    performer?: fhir.IReference | undefined;
    /**
     * The number of copies of the sequence of interest. (RNASeq).
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
     */
    referenceSeq?: fhir.IMolecularSequenceReferenceSeq | undefined;
    /**
     * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
     */
    variant?: fhir.IMolecularSequenceVariant[] | undefined;
    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.observedSeq
     */
    _observedSeq?: fhir.IFhirElement | undefined;
    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality?: fhir.IMolecularSequenceQuality[] | undefined;
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.readCoverage
     */
    _readCoverage?: fhir.IFhirElement | undefined;
    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository?: fhir.IMolecularSequenceRepository[] | undefined;
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer?: fhir.IReference[] | undefined;
    /**
     * Information about chromosome structure variation.
     */
    structureVariant?: fhir.IMolecularSequenceStructureVariant[] | undefined;
};
/**
 * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
 */
export declare class MolecularSequenceReferenceSeq extends fhir.BackboneElement implements IMolecularSequenceReferenceSeq {
    /**
     * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
     */
    chromosome?: fhir.CodeableConcept | undefined;
    /**
     * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
     */
    genomeBuild?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.genomeBuild
     */
    _genomeBuild?: fhir.FhirElement | undefined;
    /**
     * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
     */
    orientation?: OrientationTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.orientation
     */
    _orientation?: fhir.FhirElement | undefined;
    /**
     * Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
     */
    referenceSeqId?: fhir.CodeableConcept | undefined;
    /**
     * A pointer to another MolecularSequence entity as reference sequence.
     */
    referenceSeqPointer?: fhir.Reference | undefined;
    /**
     * A string like "ACGT".
     */
    referenceSeqString?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.referenceSeqString
     */
    _referenceSeqString?: fhir.FhirElement | undefined;
    /**
     * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
     */
    strand?: StrandTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.strand
     */
    _strand?: fhir.FhirElement | undefined;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    windowStart?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.windowStart
     */
    _windowStart?: fhir.FhirElement | undefined;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    windowEnd?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.referenceSeq.windowEnd
     */
    _windowEnd?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MolecularSequenceReferenceSeq - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMolecularSequenceReferenceSeq>);
    /**
     * Example-bound Value Set for chromosome
     */
    static chromosomeExampleValueSet(): ChromosomeHumanValueSetType;
    /**
     * Required-bound Value Set for orientation
     */
    static orientationRequiredValueSet(): OrientationTypeValueSetType;
    /**
     * Required-bound Value Set for strand
     */
    static strandRequiredValueSet(): StrandTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
 */
export declare class MolecularSequenceVariant extends fhir.BackboneElement implements IMolecularSequenceVariant {
    /**
     * Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.start
     */
    _start?: fhir.FhirElement | undefined;
    /**
     * End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.end
     */
    _end?: fhir.FhirElement | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    observedAllele?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.observedAllele
     */
    _observedAllele?: fhir.FhirElement | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    referenceAllele?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.referenceAllele
     */
    _referenceAllele?: fhir.FhirElement | undefined;
    /**
     * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
     */
    cigar?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.variant.cigar
     */
    _cigar?: fhir.FhirElement | undefined;
    /**
     * A pointer to an Observation containing variant information.
     */
    variantPointer?: fhir.Reference | undefined;
    /**
     * Default constructor for MolecularSequenceVariant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMolecularSequenceVariant>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
 */
export declare class MolecularSequenceQualityRoc extends fhir.BackboneElement implements IMolecularSequenceQualityRoc {
    /**
     * Invidual data point representing the GQ (genotype quality) score threshold.
     */
    score?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.score
     */
    _score?: fhir.FhirElement[] | undefined;
    /**
     * The number of true positives if the GQ score threshold was set to "score" field value.
     */
    numTP?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numTP
     */
    _numTP?: fhir.FhirElement[] | undefined;
    /**
     * The number of false positives if the GQ score threshold was set to "score" field value.
     */
    numFP?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numFP
     */
    _numFP?: fhir.FhirElement[] | undefined;
    /**
     * The number of false negatives if the GQ score threshold was set to "score" field value.
     */
    numFN?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.numFN
     */
    _numFN?: fhir.FhirElement[] | undefined;
    /**
     * Calculated precision if the GQ score threshold was set to "score" field value.
     */
    precision?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.precision
     */
    _precision?: fhir.FhirElement[] | undefined;
    /**
     * Calculated sensitivity if the GQ score threshold was set to "score" field value.
     */
    sensitivity?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.sensitivity
     */
    _sensitivity?: fhir.FhirElement[] | undefined;
    /**
     * Calculated fScore if the GQ score threshold was set to "score" field value.
     */
    fMeasure?: number[] | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.roc.fMeasure
     */
    _fMeasure?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for MolecularSequenceQualityRoc - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMolecularSequenceQualityRoc>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
 */
export declare class MolecularSequenceQuality extends fhir.BackboneElement implements IMolecularSequenceQuality {
    /**
     * INDEL / SNP / Undefined variant.
     */
    type: QualityTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Gold standard sequence used for comparing against.
     */
    standardSequence?: fhir.CodeableConcept | undefined;
    /**
     * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.start
     */
    _start?: fhir.FhirElement | undefined;
    /**
     * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.end
     */
    _end?: fhir.FhirElement | undefined;
    /**
     * The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
     */
    score?: fhir.Quantity | undefined;
    /**
     * Which method is used to get sequence quality.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    truthTP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.truthTP
     */
    _truthTP?: fhir.FhirElement | undefined;
    /**
     * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    queryTP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.queryTP
     */
    _queryTP?: fhir.FhirElement | undefined;
    /**
     * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
     */
    truthFN?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.truthFN
     */
    _truthFN?: fhir.FhirElement | undefined;
    /**
     * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
     */
    queryFP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.queryFP
     */
    _queryFP?: fhir.FhirElement | undefined;
    /**
     * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
     */
    gtFP?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.gtFP
     */
    _gtFP?: fhir.FhirElement | undefined;
    /**
     * QUERY.TP / (QUERY.TP + QUERY.FP).
     */
    precision?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.precision
     */
    _precision?: fhir.FhirElement | undefined;
    /**
     * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
     */
    recall?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.recall
     */
    _recall?: fhir.FhirElement | undefined;
    /**
     * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
     */
    fScore?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.quality.fScore
     */
    _fScore?: fhir.FhirElement | undefined;
    /**
     * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
     */
    roc?: fhir.MolecularSequenceQualityRoc | undefined;
    /**
     * Default constructor for MolecularSequenceQuality - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMolecularSequenceQuality>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): QualityTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
 */
export declare class MolecularSequenceRepository extends fhir.BackboneElement implements IMolecularSequenceRepository {
    /**
     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
     */
    type: RepositoryTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
     */
    datasetId?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.datasetId
     */
    _datasetId?: fhir.FhirElement | undefined;
    /**
     * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
     */
    variantsetId?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.variantsetId
     */
    _variantsetId?: fhir.FhirElement | undefined;
    /**
     * Id of the read in this external repository.
     */
    readsetId?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.repository.readsetId
     */
    _readsetId?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MolecularSequenceRepository - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMolecularSequenceRepository>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): RepositoryTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Structural variant outer.
 */
export declare class MolecularSequenceStructureVariantOuter extends fhir.BackboneElement implements IMolecularSequenceStructureVariantOuter {
    /**
     * Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.outer.start
     */
    _start?: fhir.FhirElement | undefined;
    /**
     * Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.outer.end
     */
    _end?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MolecularSequenceStructureVariantOuter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMolecularSequenceStructureVariantOuter>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Structural variant inner.
 */
export declare class MolecularSequenceStructureVariantInner extends fhir.BackboneElement implements IMolecularSequenceStructureVariantInner {
    /**
     * Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.inner.start
     */
    _start?: fhir.FhirElement | undefined;
    /**
     * Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.inner.end
     */
    _end?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MolecularSequenceStructureVariantInner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMolecularSequenceStructureVariantInner>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about chromosome structure variation.
 */
export declare class MolecularSequenceStructureVariant extends fhir.BackboneElement implements IMolecularSequenceStructureVariant {
    /**
     * Information about chromosome structure variation DNA change type.
     */
    variantType?: fhir.CodeableConcept | undefined;
    /**
     * Used to indicate if the outer and inner start-end values have the same meaning.
     */
    exact?: boolean | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.exact
     */
    _exact?: fhir.FhirElement | undefined;
    /**
     * Length of the variant chromosome.
     */
    length?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.structureVariant.length
     */
    _length?: fhir.FhirElement | undefined;
    /**
     * Structural variant outer.
     */
    outer?: fhir.MolecularSequenceStructureVariantOuter | undefined;
    /**
     * Structural variant inner.
     */
    inner?: fhir.MolecularSequenceStructureVariantInner | undefined;
    /**
     * Default constructor for MolecularSequenceStructureVariant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMolecularSequenceStructureVariant>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Raw data describing a biological sequence.
 */
export declare class MolecularSequence extends fhir.DomainResource implements IMolecularSequence {
    /**
     * Resource Type Name
     */
    resourceType: "MolecularSequence";
    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: SequenceTypeValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
     */
    coordinateSystem: number | null;
    /**
     * Extended properties for primitive element: MolecularSequence.coordinateSystem
     */
    _coordinateSystem?: fhir.FhirElement | undefined;
    /**
     * The patient whose sequencing results are described by this resource.
     */
    patient?: fhir.Reference | undefined;
    /**
     * Specimen used for sequencing.
     */
    specimen?: fhir.Reference | undefined;
    /**
     * The method for sequencing, for example, chip information.
     */
    device?: fhir.Reference | undefined;
    /**
     * The organization or lab that should be responsible for this result.
     */
    performer?: fhir.Reference | undefined;
    /**
     * The number of copies of the sequence of interest. (RNASeq).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
     */
    referenceSeq?: fhir.MolecularSequenceReferenceSeq | undefined;
    /**
     * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
     */
    variant?: fhir.MolecularSequenceVariant[] | undefined;
    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: string | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.observedSeq
     */
    _observedSeq?: fhir.FhirElement | undefined;
    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality?: fhir.MolecularSequenceQuality[] | undefined;
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: number | undefined;
    /**
     * Extended properties for primitive element: MolecularSequence.readCoverage
     */
    _readCoverage?: fhir.FhirElement | undefined;
    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository?: fhir.MolecularSequenceRepository[] | undefined;
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer?: fhir.Reference[] | undefined;
    /**
     * Information about chromosome structure variation.
     */
    structureVariant?: fhir.MolecularSequenceStructureVariant[] | undefined;
    /**
     * Default constructor for MolecularSequence - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IMolecularSequence>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): SequenceTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=MolecularSequence.d.ts.map