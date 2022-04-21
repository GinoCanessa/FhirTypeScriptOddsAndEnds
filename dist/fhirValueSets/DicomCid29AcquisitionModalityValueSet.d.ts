import { Coding } from '../fhir.js';
/**
 * Transitive closure of CID 29 AcquisitionModality
 */
export declare const DicomCid29AcquisitionModalityValueSet: {
    /**
     * AR: Autorefraction device
     */
    readonly Autorefraction: Coding;
    /**
     * BDUS: Ultrasound Bone Densitometry (modality)
     */
    readonly UltrasoundBoneDensitometry: Coding;
    /**
     * BMD: Bone Mineral Densitometry by X-Ray (modality), including dual-energy X-Ray absorptiometry (DXA) and morphometric X-Ray absorptiometry (MXA)
     */
    readonly BoneMineralDensitometry: Coding;
    /**
     * CR: Computed Radiography device
     */
    readonly ComputedRadiography: Coding;
    /**
     * CT: Computed Tomography device
     */
    readonly ComputedTomography: Coding;
    /**
     * DX: Digital Radiography device
     */
    readonly DigitalRadiography: Coding;
    /**
     * ECG: Electrocardiography device
     */
    readonly Electrocardiography: Coding;
    /**
     * EPS: Cardiac Electrophysiology device
     */
    readonly CardiacElectrophysiology: Coding;
    /**
     * ES: Endoscopy device
     */
    readonly Endoscopy: Coding;
    /**
     * GM: General Microscopy device
     */
    readonly GeneralMicroscopy: Coding;
    /**
     * HD: Hemodynamic Waveform acquisition device
     */
    readonly HemodynamicWaveform: Coding;
    /**
     * IO: Intra-oral Radiography device
     */
    readonly IntraOralRadiography: Coding;
    /**
     * IVOCT: An acquisition device, process or method that performs intravascular optical coherence tomography
     */
    readonly IntravascularOpticalCoherenceTomography: Coding;
    /**
     * IVUS: Intravascular Ultrasound device
     */
    readonly IntravascularUltrasound: Coding;
    /**
     * KER: Keratometry device
     */
    readonly Keratometry: Coding;
    /**
     * LEN: Lensometry device
     */
    readonly Lensometry: Coding;
    /**
     * MG: Mammography device
     */
    readonly Mammography: Coding;
    /**
     * MR: Magnetic Resonance device
     */
    readonly MagneticResonance: Coding;
    /**
     * NM: Nuclear Medicine device
     */
    readonly NuclearMedicine: Coding;
    /**
     * OAM: Measurements of the axial length of the eye, which are done by various devices
     */
    readonly OphthalmicAxialMeasurements: Coding;
    /**
     * OCT: Modality device that uses an interferometric, non-invasive optical tomographic technique to image 2D slices and 3D volumes of tissue using visible and near visible frequencies
     */
    readonly OpticalCoherenceTomography: Coding;
    /**
     * OP: Ophthalmic photography modality
     */
    readonly OphthalmicPhotography: Coding;
    /**
     * OPM: Modality device that measures corneal topography, corneal or retinal thickness, and other similar parameters that are typically displayed as maps
     */
    readonly OphthalmicMapping: Coding;
    /**
     * OPR: Modality device that measures the refractive characteristics of the eye
     */
    readonly OphthalmicRefraction: Coding;
    /**
     * OPT: Tomography of the eye acquired by a modality that is based on light and optical principles. Tomography based on other principles, such as ultrasound, is excluded
     */
    readonly OphthalmicTomography: Coding;
    /**
     * OPV: Modality device that measures visual fields and perform visual perimetry
     */
    readonly OphthalmicVisualField: Coding;
    /**
     * OSS: An acquisition device, process or method that performs optical surface scanning
     */
    readonly OpticalSurvaceScanner: Coding;
    /**
     * PT: Positron emission tomography (PET) device
     */
    readonly PositronEmissionTomography: Coding;
    /**
     * PX: Panoramic X-Ray device
     */
    readonly PanoramicXRay: Coding;
    /**
     * RF: Radiofluoroscopy device
     */
    readonly Radiofluoroscopy: Coding;
    /**
     * RG: Radiographic imaging (conventional film/screen)
     */
    readonly RadiographicImaging: Coding;
    /**
     * SM: Slide Microscopy
     */
    readonly SlideMicroscopy: Coding;
    /**
     * SRF: Subjective Refraction device
     */
    readonly SubjectiveRefraction: Coding;
    /**
     * US: Ultrasound device
     */
    readonly Ultrasound: Coding;
    /**
     * VA: Visual Acuity device
     */
    readonly VisualAcuity: Coding;
    /**
     * XA: X-Ray Angiography device
     */
    readonly XRayAngiography: Coding;
    /**
     * XC: External-camera Photography device
     */
    readonly ExternalCameraPhotography: Coding;
};
/**
 * Transitive closure of CID 29 AcquisitionModality
 */
export declare type DicomCid29AcquisitionModalityValueSetType = typeof DicomCid29AcquisitionModalityValueSet;
/**
 * Transitive closure of CID 29 AcquisitionModality
 */
export declare enum DicomCid29AcquisitionModalityValueSetEnum {
    /**
     * AR: Autorefraction device
     */
    Autorefraction = "AR",
    /**
     * BDUS: Ultrasound Bone Densitometry (modality)
     */
    UltrasoundBoneDensitometry = "BDUS",
    /**
     * BMD: Bone Mineral Densitometry by X-Ray (modality), including dual-energy X-Ray absorptiometry (DXA) and morphometric X-Ray absorptiometry (MXA)
     */
    BoneMineralDensitometry = "BMD",
    /**
     * CR: Computed Radiography device
     */
    ComputedRadiography = "CR",
    /**
     * CT: Computed Tomography device
     */
    ComputedTomography = "CT",
    /**
     * DX: Digital Radiography device
     */
    DigitalRadiography = "DX",
    /**
     * ECG: Electrocardiography device
     */
    Electrocardiography = "ECG",
    /**
     * EPS: Cardiac Electrophysiology device
     */
    CardiacElectrophysiology = "EPS",
    /**
     * ES: Endoscopy device
     */
    Endoscopy = "ES",
    /**
     * GM: General Microscopy device
     */
    GeneralMicroscopy = "GM",
    /**
     * HD: Hemodynamic Waveform acquisition device
     */
    HemodynamicWaveform = "HD",
    /**
     * IO: Intra-oral Radiography device
     */
    IntraOralRadiography = "IO",
    /**
     * IVOCT: An acquisition device, process or method that performs intravascular optical coherence tomography
     */
    IntravascularOpticalCoherenceTomography = "IVOCT",
    /**
     * IVUS: Intravascular Ultrasound device
     */
    IntravascularUltrasound = "IVUS",
    /**
     * KER: Keratometry device
     */
    Keratometry = "KER",
    /**
     * LEN: Lensometry device
     */
    Lensometry = "LEN",
    /**
     * MG: Mammography device
     */
    Mammography = "MG",
    /**
     * MR: Magnetic Resonance device
     */
    MagneticResonance = "MR",
    /**
     * NM: Nuclear Medicine device
     */
    NuclearMedicine = "NM",
    /**
     * OAM: Measurements of the axial length of the eye, which are done by various devices
     */
    OphthalmicAxialMeasurements = "OAM",
    /**
     * OCT: Modality device that uses an interferometric, non-invasive optical tomographic technique to image 2D slices and 3D volumes of tissue using visible and near visible frequencies
     */
    OpticalCoherenceTomography = "OCT",
    /**
     * OP: Ophthalmic photography modality
     */
    OphthalmicPhotography = "OP",
    /**
     * OPM: Modality device that measures corneal topography, corneal or retinal thickness, and other similar parameters that are typically displayed as maps
     */
    OphthalmicMapping = "OPM",
    /**
     * OPR: Modality device that measures the refractive characteristics of the eye
     */
    OphthalmicRefraction = "OPR",
    /**
     * OPT: Tomography of the eye acquired by a modality that is based on light and optical principles. Tomography based on other principles, such as ultrasound, is excluded
     */
    OphthalmicTomography = "OPT",
    /**
     * OPV: Modality device that measures visual fields and perform visual perimetry
     */
    OphthalmicVisualField = "OPV",
    /**
     * OSS: An acquisition device, process or method that performs optical surface scanning
     */
    OpticalSurvaceScanner = "OSS",
    /**
     * PT: Positron emission tomography (PET) device
     */
    PositronEmissionTomography = "PT",
    /**
     * PX: Panoramic X-Ray device
     */
    PanoramicXRay = "PX",
    /**
     * RF: Radiofluoroscopy device
     */
    Radiofluoroscopy = "RF",
    /**
     * RG: Radiographic imaging (conventional film/screen)
     */
    RadiographicImaging = "RG",
    /**
     * SM: Slide Microscopy
     */
    SlideMicroscopy = "SM",
    /**
     * SRF: Subjective Refraction device
     */
    SubjectiveRefraction = "SRF",
    /**
     * US: Ultrasound device
     */
    Ultrasound = "US",
    /**
     * VA: Visual Acuity device
     */
    VisualAcuity = "VA",
    /**
     * XA: X-Ray Angiography device
     */
    XRayAngiography = "XA",
    /**
     * XC: External-camera Photography device
     */
    ExternalCameraPhotography = "XC"
}
//# sourceMappingURL=DicomCid29AcquisitionModalityValueSet.d.ts.map