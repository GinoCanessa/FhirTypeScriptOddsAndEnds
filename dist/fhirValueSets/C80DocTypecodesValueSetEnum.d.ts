/**
 * This is the code specifying the precise type of document (e.g. Pulmonary History and  Physical, Discharge Summary, Ultrasound Report, etc.). The Document Type value set includes all LOINC  values listed in HITSP C80 Table 2-144 Document Class Value Set Definition above used for Document Class,  and all LOINC values whose SCALE is DOC in the LOINC database.
 */
export declare enum C80DocTypecodesValueSetEnum {
    /**
     * Code: 11206-0
     */
    VAL18HydroxydeoxycorticosteroneMassVolumeInSerumOrPlasma = "11206-0",
    /**
     * Code: 11485-0
     */
    AnesthesiaRecords = "11485-0",
    /**
     * Code: 11486-8
     */
    ChemotherapyRecords = "11486-8",
    /**
     * Code: 11488-4
     */
    ConsultNote = "11488-4",
    /**
     * Code: 11490-0
     */
    PhysicianDischargeSummary = "11490-0",
    /**
     * Code: 11492-6
     */
    ProviderUnspecifedHistoryAndPhysicalNote = "11492-6",
    /**
     * Code: 11494-2
     */
    PhysicianInitialAssessmentNoteAtFirstEncounter = "11494-2",
    /**
     * Code: 11495-9
     */
    PhysicalTherapyInitialAssessmentNoteAtFirstEncounter = "11495-9",
    /**
     * Code: 11496-7
     */
    PodiatryInitialAssessmentNoteAtFirstEncounter = "11496-7",
    /**
     * Code: 11497-5
     */
    PsychologyInitialAssessmentNoteAtFirstEncounter = "11497-5",
    /**
     * Code: 11498-3
     */
    SocialWorkInitialAssessmentNoteAtFirstEncounter = "11498-3",
    /**
     * Code: 11500-6
     */
    OccupationalTherapyInitialAssessmentNoteAtFirstEncounter = "11500-6",
    /**
     * Code: 11502-2
     */
    LaboratoryReport = "11502-2",
    /**
     * Code: 11503-0
     */
    MedicalRecords = "11503-0",
    /**
     * Code: 11504-8
     */
    ProviderUnspecifiedOperationNote = "11504-8",
    /**
     * Code: 11505-5
     */
    PhysicianProcedureNote = "11505-5",
    /**
     * Code: 11506-3
     */
    ProviderUnspecifiedProgressNote = "11506-3",
    /**
     * Code: 11507-1
     */
    OccupationalTherapyProgressNote = "11507-1",
    /**
     * Code: 11508-9
     */
    PhysicalTherapyProgressNote = "11508-9",
    /**
     * Code: 11509-7
     */
    PodiatryProgressNote = "11509-7",
    /**
     * Code: 11510-5
     */
    PsychologyProgressNote = "11510-5",
    /**
     * Code: 11512-1
     */
    SpeechLanguagePathologyProgressNote = "11512-1",
    /**
     * Code: 11514-7
     */
    ChiropracticRecordsTotalEncounter = "11514-7",
    /**
     * Code: 11515-4
     */
    PhysicalTherapyRecordsTotalEncounter = "11515-4",
    /**
     * Code: 11516-2
     */
    PhysicianRecordsTotalEncounter = "11516-2",
    /**
     * Code: 11517-0
     */
    PodiatryRecordsTotalEncounter = "11517-0",
    /**
     * Code: 11518-8
     */
    PsychologyRecordsTotalEncounter = "11518-8",
    /**
     * Code: 11519-6
     */
    SocialServiceRecordsTotalEncounter = "11519-6",
    /**
     * Code: 11520-4
     */
    SpeechTherapyRecordsTotalEncounter = "11520-4",
    /**
     * Code: 11521-2
     */
    OccupationalTherapyRecordsTotalEncounter = "11521-2",
    /**
     * Code: 11523-8
     */
    EEGStudy = "11523-8",
    /**
     * Code: 11524-6
     */
    EKGStudy = "11524-6",
    /**
     * Code: 11525-3
     */
    USPelvisAndFetusForPregnancy = "11525-3",
    /**
     * Code: 11526-1
     */
    PathologyStudy = "11526-1",
    /**
     * Code: 11527-9
     */
    PsychiatryStudy = "11527-9",
    /**
     * Code: 11529-5
     */
    SurgicalPathologyStudy = "11529-5",
    /**
     * Code: 11534-5
     */
    TemperatureCharts = "11534-5",
    /**
     * Code: 11536-0
     */
    NurseNotes = "11536-0",
    /**
     * Code: 11541-0
     */
    MRIBrainStudy = "11541-0",
    /**
     * Code: 11543-6
     */
    NurseryRecords = "11543-6",
    /**
     * Code: 13480-9
     */
    VAL18HydroxydeoxycortisolCreatinineMassRatioInUrine = "13480-9",
    /**
     * Code: 15507-7
     */
    ProviderUnspecifiedEDProgressNote = "15507-7",
    /**
     * Code: 15508-5
     */
    LaborAndDeliveryRecords = "15508-5",
    /**
     * Code: 16110-9
     */
    VAL11DeoxycorticosteroneMassTimeIn24HourUrine = "16110-9",
    /**
     * Code: 16294-1
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasmaPostXXXChallenge = "16294-1",
    /**
     * Code: 1656-8
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma = "1656-8",
    /**
     * Code: 17787-3
     */
    ThyroidScanStudyReport = "17787-3",
    /**
     * Code: 18594-2
     */
    PsychiatricServiceAttachment = "18594-2",
    /**
     * Code: 18733-6
     */
    PhysicianAttendingProgressNote = "18733-6",
    /**
     * Code: 18734-4
     */
    OccupationalTherapyInitialAssessmentNote = "18734-4",
    /**
     * Code: 18735-1
     */
    PhysicalTherapyInitialAssessmentNote = "18735-1",
    /**
     * Code: 18736-9
     */
    PhysicianInitialAssessmentNote = "18736-9",
    /**
     * Code: 18737-7
     */
    PodiatryInitialAssessmentNote = "18737-7",
    /**
     * Code: 18738-5
     */
    PsychologyInitialAssessmentNote = "18738-5",
    /**
     * Code: 18739-3
     */
    SocialWorkInitialAssessmentNote = "18739-3",
    /**
     * Code: 18740-1
     */
    SpeechLanguagePathologyInitialAssessmentNote = "18740-1",
    /**
     * Code: 18742-7
     */
    ArthroscopyStudy = "18742-7",
    /**
     * Code: 18743-5
     */
    AutopsyReport = "18743-5",
    /**
     * Code: 18744-3
     */
    BronchoscopyStudy = "18744-3",
    /**
     * Code: 18745-0
     */
    CardiacCatheterizationStudy = "18745-0",
    /**
     * Code: 18746-8
     */
    ColonoscopyStudy = "18746-8",
    /**
     * Code: 18748-4
     */
    DiagnosticImagingStudy = "18748-4",
    /**
     * Code: 18749-2
     */
    ElectromyogramStudy = "18749-2",
    /**
     * Code: 18750-0
     */
    ElectrophysiologyStudy = "18750-0",
    /**
     * Code: 18751-8
     */
    EndoscopyStudy = "18751-8",
    /**
     * Code: 18752-6
     */
    ExerciseStressTestStudy = "18752-6",
    /**
     * Code: 18753-4
     */
    FlexibleSigmoidoscopyStudy = "18753-4",
    /**
     * Code: 18754-2
     */
    HolterMonitorStudy = "18754-2",
    /**
     * Code: 18756-7
     */
    MRISpineStudy = "18756-7",
    /**
     * Code: 18759-1
     */
    SpirometryStudy = "18759-1",
    /**
     * Code: 18761-7
     */
    ProviderUnspecifiedTransferSummary = "18761-7",
    /**
     * Code: 18763-3
     */
    PhysicianConsultingInitialAssessmentNote = "18763-3",
    /**
     * Code: 18823-5
     */
    AlcoholAndOrSubstanceAbuseServiceAttachment = "18823-5",
    /**
     * Code: 18824-3
     */
    CardiacServiceAttachment = "18824-3",
    /**
     * Code: 18825-0
     */
    MedicalSocialServicesAttachment = "18825-0",
    /**
     * Code: 18826-8
     */
    OccupationalTherapyServiceAttachment = "18826-8",
    /**
     * Code: 18836-7
     */
    CardiacStressStudyProcedure = "18836-7",
    /**
     * Code: 18841-7
     */
    HospitalConsultationsDocument = "18841-7",
    /**
     * Code: 18842-5
     */
    DischargeSummary = "18842-5",
    /**
     * Code: 19002-5
     */
    PhysicalTherapyServiceAttachment = "19002-5",
    /**
     * Code: 19003-3
     */
    RespiratoryTherapyServiceAttachment = "19003-3",
    /**
     * Code: 19004-1
     */
    SkilledNursingServiceAttachment = "19004-1",
    /**
     * Code: 21862-8
     */
    SourceOfDocumentUsedToAbstractCancer = "21862-8",
    /**
     * Code: 24531-6
     */
    AbdomenRetroperitoneumUS = "24531-6",
    /**
     * Code: 24532-4
     */
    AbdomenRUQUS = "24532-4",
    /**
     * Code: 24533-2
     */
    AbdominalVesselsMRIAngiogramWContrastIV = "24533-2",
    /**
     * Code: 24534-0
     */
    AbdominalVesselsUSDoppler = "24534-0",
    /**
     * Code: 24535-7
     */
    AcetabulumXRay = "24535-7",
    /**
     * Code: 24536-5
     */
    AcromioclavicularJointXRay = "24536-5",
    /**
     * Code: 24537-3
     */
    USGuidanceForRemovalOfAmnioticFluidFromUterus = "24537-3",
    /**
     * Code: 24538-1
     */
    AnkleMRI = "24538-1",
    /**
     * Code: 24539-9
     */
    AnkleMRIWAndWOContrastIV = "24539-9",
    /**
     * Code: 24540-7
     */
    AnkleXRay2Views = "24540-7",
    /**
     * Code: 24541-5
     */
    AnkleXRay = "24541-5",
    /**
     * Code: 24542-3
     */
    AnusUS = "24542-3",
    /**
     * Code: 24543-1
     */
    AortaFluoroscopicAngiogramAngioplastyWContrastIA = "24543-1",
    /**
     * Code: 24544-9
     */
    AortaThoracicCT = "24544-9",
    /**
     * Code: 24545-6
     */
    AortaThoracicCTWContrastIV = "24545-6",
    /**
     * Code: 24546-4
     */
    AortaArchAndNeckFluoroscopicAngiogramWContrastIA = "24546-4",
    /**
     * Code: 24547-2
     */
    AortaUS = "24547-2",
    /**
     * Code: 24548-0
     */
    AppendixUS = "24548-0",
    /**
     * Code: 24549-8
     */
    UpperExtremityVesselsMRIAngiogramWContrastIV = "24549-8",
    /**
     * Code: 24550-6
     */
    UpperExtremityVeinsFluoroscopicAngiogramWContrastIV = "24550-6",
    /**
     * Code: 24551-4
     */
    AVFistulaFluoroscopicAngiogramWContrastIA = "24551-4",
    /**
     * Code: 24552-2
     */
    StentFluoroscopyWContrastIntraStent = "24552-2",
    /**
     * Code: 24553-0
     */
    VesselIntracranialFluoroscopicAngiogramEmbolectomyWContrastIV = "24553-0",
    /**
     * Code: 24554-8
     */
    ArteryFluoroscopicAngiogramEmbolizationWContrastIA = "24554-8",
    /**
     * Code: 24555-5
     */
    FluoroscopicAngiogramGuidanceForPlacementOfStentInArtery = "24555-5",
    /**
     * Code: 24556-3
     */
    AbdomenMRI = "24556-3",
    /**
     * Code: 24557-1
     */
    AbdomenMRIWAndWOContrastIV = "24557-1",
    /**
     * Code: 24558-9
     */
    AbdomenUS = "24558-9",
    /**
     * Code: 24559-7
     */
    USGuidanceForRemovalOfFluidFromAbdomen = "24559-7",
    /**
     * Code: 24560-5
     */
    AbdomenXRayAPLeftLateralDecubitusPortable = "24560-5",
    /**
     * Code: 24561-3
     */
    AbdomenXRayAPLeftLateralDecubitus = "24561-3",
    /**
     * Code: 24562-1
     */
    AbdomenXRayAPLeftLateralDecubitusAndRightLateralDecubitus = "24562-1",
    /**
     * Code: 24563-9
     */
    AbdomenXRayAPRightLateralDecubitus = "24563-9",
    /**
     * Code: 24564-7
     */
    AbdomenXRayAPUprightPortable = "24564-7",
    /**
     * Code: 24566-2
     */
    AbdomenRetroperitoneumCT = "24566-2",
    /**
     * Code: 24567-0
     */
    AbdomenRetroperitoneumCTWContrast = "24567-0",
    /**
     * Code: 24568-8
     */
    AVFistulaFluoroscopicAngiogramAtherectomyWContrastIV = "24568-8",
    /**
     * Code: 24569-6
     */
    AVShuntFluoroscopicAngiogramWContrastIV = "24569-6",
    /**
     * Code: 24570-4
     */
    FluoroscopyGuidanceForStoneRemovalOfBiliaryDuctCommonWContrastIntraBiliaryDuct = "24570-4",
    /**
     * Code: 24571-2
     */
    BiliaryDuctsAndGallbladderScanForPatencyOfBiliaryStructuresAndEjectionFractionWSincalideAndWRadionuclideIV = "24571-2",
    /**
     * Code: 24572-0
     */
    BiliaryDuctsAndGallbladderScanForPatencyOfBiliaryStructuresWTc99mIV = "24572-0",
    /**
     * Code: 24573-8
     */
    BiliaryDuctsAndGallbladderXRayWContrastIV = "24573-8",
    /**
     * Code: 24574-6
     */
    BiliaryDuctsAndGallbladderFluoroscopyDuringSurgeryWContrastBiliaryDuct = "24574-6",
    /**
     * Code: 24575-3
     */
    BiliaryDuctsAndGallbladderFluoroscopyWContrastPercutaneousTranshepatic = "24575-3",
    /**
     * Code: 24576-1
     */
    UrinaryBladderArteriesFluoroscopicAngiogramWContrastIA = "24576-1",
    /**
     * Code: 24577-9
     */
    BoneXRayDuringSurgery = "24577-9",
    /**
     * Code: 24578-7
     */
    BonesSPECT = "24578-7",
    /**
     * Code: 24579-5
     */
    BonesLongXRaySurvey = "24579-5",
    /**
     * Code: 24580-3
     */
    BrachiocephalicArteryFluoroscopicAngiogramAngioplastyWContrastIA = "24580-3",
    /**
     * Code: 24581-1
     */
    BrachialArteryAndSubclavianArteryFluoroscopicAngiogramWContrastIA = "24581-1",
    /**
     * Code: 24582-9
     */
    ThoracicOutletMRI = "24582-9",
    /**
     * Code: 24583-7
     */
    ThoracicOutletMRIWAndWOContrastIV = "24583-7",
    /**
     * Code: 24584-5
     */
    ThoracicOutletVesselsMRIAngiogramWContrastIV = "24584-5",
    /**
     * Code: 24585-2
     */
    CTGuidanceStereotacticForBiopsyOfHeadWContrastIV = "24585-2",
    /**
     * Code: 24586-0
     */
    BrainMRIWAnesthesia = "24586-0",
    /**
     * Code: 24587-8
     */
    BrainMRIWAndWOContrastIV = "24587-8",
    /**
     * Code: 24588-6
     */
    BrainMRIWAndWOContrastIVAndWAnesthesia = "24588-6",
    /**
     * Code: 24589-4
     */
    BrainMRIWContrastIV = "24589-4",
    /**
     * Code: 24590-2
     */
    BrainMRI = "24590-2",
    /**
     * Code: 24591-0
     */
    BrainScanBrainDeathProtocolWTc99mHMPAOIV = "24591-0",
    /**
     * Code: 24593-6
     */
    HeadVesselsMRIAngiogramWContrastIV = "24593-6",
    /**
     * Code: 24594-4
     */
    MammogramGuidanceForAspirationOfCystOfBreast = "24594-4",
    /**
     * Code: 24595-1
     */
    MammogramGuidanceForNeedleLocalizationOfMassOfBreast = "24595-1",
    /**
     * Code: 24596-9
     */
    BreastSpecimenUS = "24596-9",
    /**
     * Code: 24597-7
     */
    BreastSpecimenMammogram = "24597-7",
    /**
     * Code: 24598-5
     */
    MammogramGuidanceForAspirationOfBreast = "24598-5",
    /**
     * Code: 24599-3
     */
    BreastUSLimited = "24599-3",
    /**
     * Code: 24600-9
     */
    USGuidanceForNeedleLocalizationOfBreast = "24600-9",
    /**
     * Code: 24601-7
     */
    BreastUS = "24601-7",
    /**
     * Code: 24602-5
     */
    MammogramGuidanceForBiopsyOfBreast = "24602-5",
    /**
     * Code: 24603-3
     */
    MammogramGuidanceStereotacticForBiopsyOfBreast = "24603-3",
    /**
     * Code: 24604-1
     */
    BreastMammogramDiagnosticLimited = "24604-1",
    /**
     * Code: 24605-8
     */
    BreastMammogramDiagnostic = "24605-8",
    /**
     * Code: 24606-6
     */
    BreastMammogramScreening = "24606-6",
    /**
     * Code: 24609-0
     */
    MammogramGuidanceForCoreNeedlePercutaneousBiopsyOfBreast = "24609-0",
    /**
     * Code: 24610-8
     */
    BreastMammogramLimited = "24610-8",
    /**
     * Code: 24611-6
     */
    OutpatientConsultation2ndOpinion = "24611-6",
    /**
     * Code: 24612-4
     */
    CalcaneusXRay = "24612-4",
    /**
     * Code: 24613-2
     */
    FluoroscopicAngiogramGuidanceForPlacementOfCatheterInArteryInCentralCardiovascularArtery = "24613-2",
    /**
     * Code: 24614-0
     */
    CarotidArteryExtracranialFluoroscopicAngiogramAngioplastyWContrastIA = "24614-0",
    /**
     * Code: 24615-7
     */
    CarotidArteryIntracranialFluoroscopicAngiogramAngioplastyWContrastIA = "24615-7",
    /**
     * Code: 24616-5
     */
    CarotidArteryUS = "24616-5",
    /**
     * Code: 24617-3
     */
    CarotidArteryFluoroscopicAngiogramWContrastIA = "24617-3",
    /**
     * Code: 24619-9
     */
    WristXRay = "24619-9",
    /**
     * Code: 24620-7
     */
    CatheterFluoroscopyPatencyCheckWContrastViaCatheter = "24620-7",
    /**
     * Code: 24621-5
     */
    FluoroscopyGuidanceForPercutaneousDrainageOfCavity = "24621-5",
    /**
     * Code: 24622-3
     */
    CeliacArteryFluoroscopicAngiogramWContrastIA = "24622-3",
    /**
     * Code: 24623-1
     */
    CTGuidanceForAnestheticBlockInjectionOfCeliacPlexus = "24623-1",
    /**
     * Code: 24624-9
     */
    FluoroscopicAngiogramGuidanceForChangeOfCentralCatheterInCentralVeinWContrastIV = "24624-9",
    /**
     * Code: 24625-6
     */
    FluoroscopicAngiogramGuidanceForPlacementOfCatheterInCentralVeinWContrastIV = "24625-6",
    /**
     * Code: 24626-4
     */
    FluoroscopicAngiogramGuidanceForRepositionOfCatheterInCentralVeinWContrastIV = "24626-4",
    /**
     * Code: 24627-2
     */
    ChestCT = "24627-2",
    /**
     * Code: 24628-0
     */
    ChestCTWContrastIV = "24628-0",
    /**
     * Code: 24629-8
     */
    ChestMRI = "24629-8",
    /**
     * Code: 24630-6
     */
    ChestUS = "24630-6",
    /**
     * Code: 24631-4
     */
    UnspecifiedBodyRegionFluoroscopyCentralVeinCatheterPlacementCheck = "24631-4",
    /**
     * Code: 24632-2
     */
    ChestXRayAPPortable = "24632-2",
    /**
     * Code: 24634-8
     */
    ChestXRayPortableWInspirationAndExpiration = "24634-8",
    /**
     * Code: 24635-5
     */
    ChestXRayPAUprightWInspirationAndExpiration = "24635-5",
    /**
     * Code: 24636-3
     */
    ChestXRayAPLeftLateralDecubitusPortable = "24636-3",
    /**
     * Code: 24637-1
     */
    ChestXRayAPLeftLateralDecubitus = "24637-1",
    /**
     * Code: 24638-9
     */
    ChestXRayLeftLateralUprightPortable = "24638-9",
    /**
     * Code: 24639-7
     */
    ChestXRayLeftLateralUpright = "24639-7",
    /**
     * Code: 24640-5
     */
    ChestXRayLordotic = "24640-5",
    /**
     * Code: 24641-3
     */
    ChestXRayLeftObliquePortable = "24641-3",
    /**
     * Code: 24642-1
     */
    ChestXRayAPAndPAUpright = "24642-1",
    /**
     * Code: 24643-9
     */
    ChestXRayPAAndLateralAndRightOrLeftObliqueUpright = "24643-9",
    /**
     * Code: 24644-7
     */
    ChestXRayPAAndLateralUprightPortable = "24644-7",
    /**
     * Code: 24645-4
     */
    ChestXRayPAAndRightLateralAndRightObliqueAndLeftObliqueUprightPortable = "24645-4",
    /**
     * Code: 24646-2
     */
    ChestXRayPAAndRightLateralAndRightObliqueAndLeftObliqueUpright = "24646-2",
    /**
     * Code: 24647-0
     */
    ChestXRayPAAndLateralUpright = "24647-0",
    /**
     * Code: 24648-8
     */
    ChestXRayPAUpright = "24648-8",
    /**
     * Code: 24649-6
     */
    ChestXRayAPRightLateralDecubitusAndLeftLateralDecubitusPortable = "24649-6",
    /**
     * Code: 24650-4
     */
    ChestXRayAPRightLateralDecubitusAndLeftLateralDecubitus = "24650-4",
    /**
     * Code: 24651-2
     */
    ChestXRayRightObliqueAndLeftObliqueUpright = "24651-2",
    /**
     * Code: 24652-0
     */
    ChestXRayAPRightLateralDecubitusPortable = "24652-0",
    /**
     * Code: 24653-8
     */
    ChestXRayAPAndAPRightLateralDecubitus = "24653-8",
    /**
     * Code: 24654-6
     */
    ChestXRayAPAndAPRightLateralDecubitusPortable = "24654-6",
    /**
     * Code: 24655-3
     */
    ChestFluoroscopyImageIntensifierDuringSurgery = "24655-3",
    /**
     * Code: 24656-1
     */
    ChestFluoroscopyDuringSurgery = "24656-1",
    /**
     * Code: 24657-9
     */
    ChestXRayTomograph = "24657-9",
    /**
     * Code: 24658-7
     */
    AortaFluoroscopicAngiogramWContrastIA = "24658-7",
    /**
     * Code: 24659-5
     */
    ChestVesselsMRIAngiogramWContrastIV = "24659-5",
    /**
     * Code: 24660-3
     */
    AortaThoracicMRIAngiogram = "24660-3",
    /**
     * Code: 24661-1
     */
    PleuralSpaceFluoroscopyWContrastIntraPleuralSpace = "24661-1",
    /**
     * Code: 24662-9
     */
    USGuidanceForAspirationOfPleuralSpace = "24662-9",
    /**
     * Code: 24663-7
     */
    HeadCisternScanWRadionuclideIT = "24663-7",
    /**
     * Code: 24664-5
     */
    ClavicleXRay = "24664-5",
    /**
     * Code: 24665-2
     */
    SacrumAndCoccyxXRay = "24665-2",
    /**
     * Code: 24666-0
     */
    ColonFluoroscopyWAirAndBariumContrastPR = "24666-0",
    /**
     * Code: 24667-8
     */
    ColonFluoroscopyWContrastPR = "24667-8",
    /**
     * Code: 24668-6
     */
    ColonFluoroscopyTransitPostSolidContrast = "24668-6",
    /**
     * Code: 24669-4
     */
    ColonFluoroscopyWWaterSolubleContrastPR = "24669-4",
    /**
     * Code: 24670-2
     */
    USGuidanceForBiopsyOfCystOfUnspecifiedBodyRegion = "24670-2",
    /**
     * Code: 24671-0
     */
    FluoroscopyGuidanceForAspirationOfCystOfUnspecifiedBodyRegion = "24671-0",
    /**
     * Code: 24672-8
     */
    DiaphragmUSMotion = "24672-8",
    /**
     * Code: 24673-6
     */
    DuodenumFluoroscopyWContrastPOAndHypotonicAgentPerNg = "24673-6",
    /**
     * Code: 24674-4
     */
    ElbowMRI = "24674-4",
    /**
     * Code: 24675-1
     */
    ElbowMRIWAndWOContrastIV = "24675-1",
    /**
     * Code: 24676-9
     */
    ElbowXRay = "24676-9",
    /**
     * Code: 24677-7
     */
    PelvisUSTransvaginal = "24677-7",
    /**
     * Code: 24678-5
     */
    EsophagusFluoroscopyWContrastPO = "24678-5",
    /**
     * Code: 24679-3
     */
    EsophagusFluoroscopyWGastrografinPO = "24679-3",
    /**
     * Code: 24680-1
     */
    FluoroscopyGuidanceForDilationOfEsophagus = "24680-1",
    /**
     * Code: 24681-9
     */
    EsophagusAndHypopharynxFluoroscopyVideoWContrastPODuringSwallowing = "24681-9",
    /**
     * Code: 24682-7
     */
    EsophagusAndHypopharynxFluoroscopyVideoWLiquidAndPasteContrastPODuringSwallowing = "24682-7",
    /**
     * Code: 24683-5
     */
    EsophagusAndStomachScanWTc99mSCPO = "24683-5",
    /**
     * Code: 24684-3
     */
    ExtracranialVesselsFluoroscopicAngiogramEmbolectomyWContrastIA = "24684-3",
    /**
     * Code: 24685-0
     */
    PeripheralVeinsFluoroscopicAngiogramWContrastIV = "24685-0",
    /**
     * Code: 24686-8
     */
    LowerExtremityXRay = "24686-8",
    /**
     * Code: 24687-6
     */
    LowerExtremityJointMRI = "24687-6",
    /**
     * Code: 24688-4
     */
    UpperExtremityMRI = "24688-4",
    /**
     * Code: 24689-2
     */
    UpperExtremityXRay = "24689-2",
    /**
     * Code: 24690-0
     */
    ExtremityCT = "24690-0",
    /**
     * Code: 24691-8
     */
    ExtremityCTWContrastIV = "24691-8",
    /**
     * Code: 24692-6
     */
    USGuidanceForDrainageOfExtremity = "24692-6",
    /**
     * Code: 24693-4
     */
    ExtremityUS = "24693-4",
    /**
     * Code: 24694-2
     */
    FaceMRIWAndWOContrastIV = "24694-2",
    /**
     * Code: 24695-9
     */
    FacialBonesXRay = "24695-9",
    /**
     * Code: 24696-7
     */
    FacialBonesAndSinusesCT = "24696-7",
    /**
     * Code: 24697-5
     */
    FacialBonesAndSinusesCTWContrastIV = "24697-5",
    /**
     * Code: 24698-3
     */
    FemoralArteryFluoroscopicAngiogramAngioplastyWContrastIA = "24698-3",
    /**
     * Code: 24699-1
     */
    FemoralArteryFluoroscopicAngiogramRunoffWContrastIA = "24699-1",
    /**
     * Code: 24700-7
     */
    FemurAndTibiaXRayForLegLength = "24700-7",
    /**
     * Code: 24702-3
     */
    ThighMRI = "24702-3",
    /**
     * Code: 24703-1
     */
    ThighMRIWAndWOContrastIV = "24703-1",
    /**
     * Code: 24704-9
     */
    FemurXRay = "24704-9",
    /**
     * Code: 24705-6
     */
    FingerMRI = "24705-6",
    /**
     * Code: 24706-4
     */
    FingerXRay = "24706-4",
    /**
     * Code: 24707-2
     */
    FootMRI = "24707-2",
    /**
     * Code: 24708-0
     */
    FootXRayStanding = "24708-0",
    /**
     * Code: 24709-8
     */
    FootXRay = "24709-8",
    /**
     * Code: 24710-6
     */
    ForearmMRI = "24710-6",
    /**
     * Code: 24711-4
     */
    GallbladderUS = "24711-4",
    /**
     * Code: 24712-2
     */
    GallbladderXRayWContrastPO = "24712-2",
    /**
     * Code: 24713-0
     */
    GallbladderXRay48HoursPostContrastPO = "24713-0",
    /**
     * Code: 24714-8
     */
    GastrointestineScanWTc99mTaggedRBCIV = "24714-8",
    /**
     * Code: 24715-5
     */
    GastrointestineUpperFluoroscopySingleViewWContrastPO = "24715-5",
    /**
     * Code: 24716-3
     */
    FluoroscopyGuidanceForPlacementOfDecompressionTubeInGastrointestine = "24716-3",
    /**
     * Code: 24717-1
     */
    IlealConduitXRayLoopogram = "24717-1",
    /**
     * Code: 24718-9
     */
    FluoroscopyGuidanceForTransjugularBiopsyOfLiverWContrastIV = "24718-9",
    /**
     * Code: 24719-7
     */
    GroinUS = "24719-7",
    /**
     * Code: 24720-5
     */
    HandMRI = "24720-5",
    /**
     * Code: 24721-3
     */
    HandXRay2Views = "24721-3",
    /**
     * Code: 24722-1
     */
    HandXRay3Views = "24722-1",
    /**
     * Code: 24723-9
     */
    HandXRayArthritis = "24723-9",
    /**
     * Code: 24724-7
     */
    WristAndHandXRayBoneAge = "24724-7",
    /**
     * Code: 24725-4
     */
    HeadCT = "24725-4",
    /**
     * Code: 24726-2
     */
    HeadCTWAndWOContrastIV = "24726-2",
    /**
     * Code: 24727-0
     */
    HeadCTWContrastIV = "24727-0",
    /**
     * Code: 24728-8
     */
    HeadCTCine = "24728-8",
    /**
     * Code: 24729-6
     */
    HeadCTCineWAndWOContrastIV = "24729-6",
    /**
     * Code: 24730-4
     */
    BrainScan = "24730-4",
    /**
     * Code: 24731-2
     */
    HeadUS = "24731-2",
    /**
     * Code: 24732-0
     */
    HeadUSDuringSurgery = "24732-0",
    /**
     * Code: 24733-8
     */
    HeadVesselsUSDoppler = "24733-8",
    /**
     * Code: 24734-6
     */
    HeadCisternCTWContrastIT = "24734-6",
    /**
     * Code: 24735-3
     */
    InternalAuditoryCanalAndPosteriorFossaMRI = "24735-3",
    /**
     * Code: 24740-3
     */
    InternalAuditoryCanalAndPosteriorFossaMRIWAndWOContrastIV = "24740-3",
    /**
     * Code: 24745-2
     */
    PetrousBoneXRay = "24745-2",
    /**
     * Code: 24746-0
     */
    HeadSagittalSinusMRI = "24746-0",
    /**
     * Code: 24747-8
     */
    HeadSagittalSinusMRIAngiogramWContrastIV = "24747-8",
    /**
     * Code: 24748-6
     */
    HeartMRI = "24748-6",
    /**
     * Code: 24750-2
     */
    HeartScanAtRestAndWTl201IV = "24750-2",
    /**
     * Code: 24751-0
     */
    ParathyroidScanWTI201SubtractionTc99mIV = "24751-0",
    /**
     * Code: 24752-8
     */
    HeartFluoroscopyVideo = "24752-8",
    /**
     * Code: 24753-6
     */
    UnspecifiedBodyRegionCTWContrastIV = "24753-6",
    /**
     * Code: 24754-4
     */
    AdministrationOfVasodilatorIntoCatheterOfVein = "24754-4",
    /**
     * Code: 24755-1
     */
    FluoroscopicAngiogramGuidanceForAtherectomyOfVeinWContrastIV = "24755-1",
    /**
     * Code: 24756-9
     */
    FluoroscopicAngiogramGuidanceForPlacementOfStentInVein = "24756-9",
    /**
     * Code: 24757-7
     */
    CoronaryArteriesCTFast = "24757-7",
    /**
     * Code: 24760-1
     */
    HipUS = "24760-1",
    /**
     * Code: 24761-9
     */
    HipXRaySingleView = "24761-9",
    /**
     * Code: 24762-7
     */
    HipXRay = "24762-7",
    /**
     * Code: 24764-3
     */
    HipFluoroscopyWContrastIntraarticular = "24764-3",
    /**
     * Code: 24765-0
     */
    HumerusXRay2Views = "24765-0",
    /**
     * Code: 24766-8
     */
    IliacArteryFluoroscopicAngiogramAngioplastyWContrastIA = "24766-8",
    /**
     * Code: 24767-6
     */
    InternalAuditoryCanalXRayTomograph = "24767-6",
    /**
     * Code: 24769-2
     */
    CTGuidanceForInjectionOfJointSpace = "24769-2",
    /**
     * Code: 24770-0
     */
    JointScanWIn111Intrajoint = "24770-0",
    /**
     * Code: 24771-8
     */
    FluoroscopyGuidanceForAspirationOfJointSpace = "24771-8",
    /**
     * Code: 24772-6
     */
    USGuidanceForBiopsyOfKidney = "24772-6",
    /**
     * Code: 24773-4
     */
    KidneyBilateralScanWRadionuclideTransplantScan = "24773-4",
    /**
     * Code: 24776-7
     */
    KidneyBilateralScan = "24776-7",
    /**
     * Code: 24778-3
     */
    KidneyBilateralXRay3ViewsSerialWAndWOContrastIV = "24778-3",
    /**
     * Code: 24779-1
     */
    FluoroscopyGuidanceForPlacementOfPercutaneousNephrostomyInKidneyBilateralWContrastViaTube = "24779-1",
    /**
     * Code: 24780-9
     */
    KidneyBilateralFluoroscopyWContrastViaNephrostomyTube = "24780-9",
    /**
     * Code: 24781-7
     */
    FluoroscopyGuidanceForChangeOfPercutaneousNephrostomyTubeInKidneyBilateralWContrast = "24781-7",
    /**
     * Code: 24782-5
     */
    FluoroscopyGuidanceForPlacementOfPercutaneousNephroureteralStentInKidneyBilateral = "24782-5",
    /**
     * Code: 24783-3
     */
    KidneyBilateralFluoroscopyUrodynamics = "24783-3",
    /**
     * Code: 24784-1
     */
    KidneyBilateralXRayTomographWAndWOContrastIV = "24784-1",
    /**
     * Code: 24787-4
     */
    KidneyBilateralXRayTomographWOContrastAnd10MPostContrastIV = "24787-4",
    /**
     * Code: 24788-2
     */
    KidneyBilateralXRayWContrastIV = "24788-2",
    /**
     * Code: 24789-0
     */
    KidneyBilateralXRayTomograph = "24789-0",
    /**
     * Code: 24790-8
     */
    KidneyBilateralXRayTomographWContrastIV = "24790-8",
    /**
     * Code: 24792-4
     */
    AbdomenXRayAPAndAPLeftLateralDecubitusPortable = "24792-4",
    /**
     * Code: 24793-2
     */
    AbdomenXRayAPAndLateralPortable = "24793-2",
    /**
     * Code: 24794-0
     */
    AbdomenXRayAPAndLateral = "24794-0",
    /**
     * Code: 24795-7
     */
    AbdomenXRayAPSupineAndUprightPortable = "24795-7",
    /**
     * Code: 24796-5
     */
    AbdomenXRayAPAndAPLeftLateralDecubitus = "24796-5",
    /**
     * Code: 24797-3
     */
    AbdomenXRayAPAndObliqueProne = "24797-3",
    /**
     * Code: 24798-1
     */
    AbdomenXRayAPSupineAndUpright = "24798-1",
    /**
     * Code: 24799-9
     */
    AbdomenXRayAPSingleView = "24799-9",
    /**
     * Code: 24800-5
     */
    KneeFluoroscopyWContrastIntraarticular = "24800-5",
    /**
     * Code: 24801-3
     */
    KneeXRayMerchants = "24801-3",
    /**
     * Code: 24802-1
     */
    KneeMRI = "24802-1",
    /**
     * Code: 24803-9
     */
    KneeMRIWAndWOContrastIV = "24803-9",
    /**
     * Code: 24804-7
     */
    KneeScan = "24804-7",
    /**
     * Code: 24805-4
     */
    KneeXRayAPAndLateralStanding = "24805-4",
    /**
     * Code: 24806-2
     */
    KneeXRay2Views = "24806-2",
    /**
     * Code: 24807-0
     */
    KneeXRayAPSingleViewStanding = "24807-0",
    /**
     * Code: 24808-8
     */
    KneeXRayAPAndPAStanding = "24808-8",
    /**
     * Code: 24809-6
     */
    KneeXRayStanding = "24809-6",
    /**
     * Code: 24811-2
     */
    CTGuidanceForAspirationOfLiver = "24811-2",
    /**
     * Code: 24812-0
     */
    CTGuidanceForBiopsyOfLiver = "24812-0",
    /**
     * Code: 24813-8
     */
    CTGuidanceForCoreNeedleBiopsyOfLiver = "24813-8",
    /**
     * Code: 24814-6
     */
    LiverCT = "24814-6",
    /**
     * Code: 24815-3
     */
    LiverCTWContrastIV = "24815-3",
    /**
     * Code: 24816-1
     */
    USGuidanceForBiopsyOfLiver = "24816-1",
    /**
     * Code: 24817-9
     */
    LiverSPECTWTc99mIV = "24817-9",
    /**
     * Code: 24818-7
     */
    LiverAndDiaphragmUS = "24818-7",
    /**
     * Code: 24819-5
     */
    LiverAndSpleenScanWTc99mCalciumColloidIV = "24819-5",
    /**
     * Code: 24820-3
     */
    LowerLegVesselsMRIAngiogramWContrastIV = "24820-3",
    /**
     * Code: 24821-1
     */
    LowerLegMRI = "24821-1",
    /**
     * Code: 24822-9
     */
    CTGuidanceForAspirationOfLung = "24822-9",
    /**
     * Code: 24823-7
     */
    CTGuidanceForBiopsyOfLung = "24823-7",
    /**
     * Code: 24824-5
     */
    LungScanPortable = "24824-5",
    /**
     * Code: 24825-2
     */
    LungXRayWContrastIntrabronchial = "24825-2",
    /**
     * Code: 24826-0
     */
    LymphaticsScanWRadionuclideIntraLymphatic = "24826-0",
    /**
     * Code: 24827-8
     */
    LymphaticsFluoroscopyWContrastIntraLymphatic = "24827-8",
    /**
     * Code: 24828-6
     */
    MandibleXRayPanorex = "24828-6",
    /**
     * Code: 24829-4
     */
    MandibleXRay = "24829-4",
    /**
     * Code: 24830-2
     */
    MastoidXRay = "24830-2",
    /**
     * Code: 24831-0
     */
    MeckelsDiverticulumScanWTc99mM04IV = "24831-0",
    /**
     * Code: 24832-8
     */
    MesentericArteryFluoroscopicAngiogramAngioplastyWContrastIA = "24832-8",
    /**
     * Code: 24833-6
     */
    MesentericArteryFluoroscopicAngiogramWContrastIA = "24833-6",
    /**
     * Code: 24834-4
     */
    NasalBonesXRay = "24834-4",
    /**
     * Code: 24835-1
     */
    NasopharynxAndNeckCT = "24835-1",
    /**
     * Code: 24836-9
     */
    NasopharynxAndNeckCTWContrastIV = "24836-9",
    /**
     * Code: 24837-7
     */
    CTGuidanceForAspirationOfNeck = "24837-7",
    /**
     * Code: 24838-5
     */
    CTGuidanceForBiopsyOfNeck = "24838-5",
    /**
     * Code: 24839-3
     */
    NeckMRI = "24839-3",
    /**
     * Code: 24840-1
     */
    NeckMRIWAndWOContrastIV = "24840-1",
    /**
     * Code: 24841-9
     */
    NeckMRIWContrastIV = "24841-9",
    /**
     * Code: 24842-7
     */
    NeckUS = "24842-7",
    /**
     * Code: 24843-5
     */
    NeckXRayLateral = "24843-5",
    /**
     * Code: 24844-3
     */
    NeckVesselsMRIAngiogramWContrastIV = "24844-3",
    /**
     * Code: 24845-0
     */
    NeckFluoroscopyWContrastIntraLarynx = "24845-0",
    /**
     * Code: 24846-8
     */
    OpticForamenXRay = "24846-8",
    /**
     * Code: 24848-4
     */
    OrbitBilateralCT = "24848-4",
    /**
     * Code: 24849-2
     */
    OrbitBilateralCTWAndWOContrastIV = "24849-2",
    /**
     * Code: 24850-0
     */
    OrbitBilateralCTWContrastIV = "24850-0",
    /**
     * Code: 24851-8
     */
    OrbitBilateralMRIWAndWOContrastIV = "24851-8",
    /**
     * Code: 24852-6
     */
    OrbitBilateralMRIWContrastIV = "24852-6",
    /**
     * Code: 24853-4
     */
    EyePlusOrbitBilateralUS = "24853-4",
    /**
     * Code: 24854-2
     */
    OrbitBilateralXRay = "24854-2",
    /**
     * Code: 24855-9
     */
    OropharynxFluoroscopyVideo = "24855-9",
    /**
     * Code: 24856-7
     */
    CTGuidanceForAspirationOfPancreas = "24856-7",
    /**
     * Code: 24857-5
     */
    PancreasCT = "24857-5",
    /**
     * Code: 24858-3
     */
    PancreasCTWContrastIV = "24858-3",
    /**
     * Code: 24859-1
     */
    PancreasUS = "24859-1",
    /**
     * Code: 24860-9
     */
    PancreaticArteryFluoroscopicAngiogramWContrastIA = "24860-9",
    /**
     * Code: 24861-7
     */
    PatellaXRay2Views = "24861-7",
    /**
     * Code: 24862-5
     */
    IliacArteryInternalFluoroscopicAngiogramWContrastIA = "24862-5",
    /**
     * Code: 24863-3
     */
    CTGuidanceForAspirationOfPelvis = "24863-3",
    /**
     * Code: 24864-1
     */
    CTGuidanceForBiopsyOfPelvis = "24864-1",
    /**
     * Code: 24865-8
     */
    PelvisCT = "24865-8",
    /**
     * Code: 24866-6
     */
    PelvisCTWContrastIV = "24866-6",
    /**
     * Code: 24867-4
     */
    PelvisMRI = "24867-4",
    /**
     * Code: 24868-2
     */
    USGuidanceForDrainageOfPelvis = "24868-2",
    /**
     * Code: 24869-0
     */
    PelvisUS = "24869-0",
    /**
     * Code: 24870-8
     */
    PelvisVesselsUSDoppler = "24870-8",
    /**
     * Code: 24871-6
     */
    PelvisXRayPelvimetry = "24871-6",
    /**
     * Code: 24872-4
     */
    PelvisAndHipMRI = "24872-4",
    /**
     * Code: 24873-2
     */
    PelvisVesselsMRIAngiogramWContrastIV = "24873-2",
    /**
     * Code: 24874-0
     */
    PeripheralArteriesFluoroscopicAngiogramWContrastIA = "24874-0",
    /**
     * Code: 24875-7
     */
    PeripheralVesselUSDopplerPeripheralPlane = "24875-7",
    /**
     * Code: 24876-5
     */
    PeritoneovenousShuntScanForPatencyWTc99mDTPAIT = "24876-5",
    /**
     * Code: 24877-3
     */
    PetrousBoneCT = "24877-3",
    /**
     * Code: 24878-1
     */
    PetrousBoneCTWContrastIV = "24878-1",
    /**
     * Code: 24879-9
     */
    PituitaryAndSellaTurcicaMRIWAndWOContrastIV = "24879-9",
    /**
     * Code: 24880-7
     */
    PituitaryAndSellaTurcicaMRI = "24880-7",
    /**
     * Code: 24881-5
     */
    PoplitealSpaceUS = "24881-5",
    /**
     * Code: 24882-3
     */
    PoplitealArteryFluoroscopicAngiogramPercutaneousTransluminalAngioplastyOfVesselWContrastIA = "24882-3",
    /**
     * Code: 24883-1
     */
    USGuidanceForBiopsyOfProstate = "24883-1",
    /**
     * Code: 24884-9
     */
    ProstateUS = "24884-9",
    /**
     * Code: 24885-6
     */
    USGuidanceForRepairOfPseudoaneurysmAVFistula = "24885-6",
    /**
     * Code: 24887-2
     */
    PulmonaryArteryFluoroscopicAngiogramEmbolectomyWContrastIA = "24887-2",
    /**
     * Code: 24888-0
     */
    PulmonarySystemScanVentilationAndPerfusionWXe133InhaledAndWTc99mMAAIV = "24888-0",
    /**
     * Code: 24889-8
     */
    PylorusUSForPyloricStenosis = "24889-8",
    /**
     * Code: 24891-4
     */
    RadiusAndUlnaXRay = "24891-4",
    /**
     * Code: 24892-2
     */
    RectumUS = "24892-2",
    /**
     * Code: 24893-0
     */
    RectumFluoroscopyPostContrastPRDuringDefecation = "24893-0",
    /**
     * Code: 24894-8
     */
    RectumAndUrinaryBladderFluoroscopyWContrastPRAndIntraBladderDuringDefecationAndVoiding = "24894-8",
    /**
     * Code: 24896-3
     */
    USGuidanceForDrainageOfKidney = "24896-3",
    /**
     * Code: 24899-7
     */
    RibsXRay = "24899-7",
    /**
     * Code: 24900-3
     */
    SacroiliacJointXRay = "24900-3",
    /**
     * Code: 24901-1
     */
    CTGuidanceForInjectionOfSacroiliacJoint = "24901-1",
    /**
     * Code: 24902-9
     */
    SalivaryGlandFluoroscopyWContrastIntraSalivaryDuct = "24902-9",
    /**
     * Code: 24903-7
     */
    ScapulaXRay = "24903-7",
    /**
     * Code: 24904-5
     */
    PituitaryAndSellaTurcicaCTWAndWOContrastIV = "24904-5",
    /**
     * Code: 24905-2
     */
    ShoulderMRI = "24905-2",
    /**
     * Code: 24906-0
     */
    ShoulderMRIWAndWOContrastIV = "24906-0",
    /**
     * Code: 24907-8
     */
    ShoulderUS = "24907-8",
    /**
     * Code: 24908-6
     */
    ShoulderXRay3Views = "24908-6",
    /**
     * Code: 24909-4
     */
    ShoulderXRay = "24909-4",
    /**
     * Code: 24910-2
     */
    ShoulderFluoroscopyWContrastIntraarticular = "24910-2",
    /**
     * Code: 24911-0
     */
    ShuntFluoroscopy = "24911-0",
    /**
     * Code: 24912-8
     */
    SinusTractFluoroscopyWContrastIntraSinusTract = "24912-8",
    /**
     * Code: 24913-6
     */
    SinusesCTLimited = "24913-6",
    /**
     * Code: 24914-4
     */
    SinusesMRI = "24914-4",
    /**
     * Code: 24915-1
     */
    SinusesMRIWContrastIV = "24915-1",
    /**
     * Code: 24916-9
     */
    SinusesXRay = "24916-9",
    /**
     * Code: 24917-7
     */
    SkullXRaySingleView = "24917-7",
    /**
     * Code: 24918-5
     */
    SkullXRay3Views = "24918-5",
    /**
     * Code: 24919-3
     */
    SkullXRayAPAndLateral = "24919-3",
    /**
     * Code: 24920-1
     */
    SkullXRayLateral = "24920-1",
    /**
     * Code: 24921-9
     */
    SkullXRayWaters = "24921-9",
    /**
     * Code: 24922-7
     */
    SkullXRay5Views = "24922-7",
    /**
     * Code: 24923-5
     */
    SmallBowelFluoroscopyViewsEnteroclysisWContrastPOViaDuodenalIntubation = "24923-5",
    /**
     * Code: 24924-3
     */
    SmallBowelFluoroscopyWContrastPO = "24924-3",
    /**
     * Code: 24925-0
     */
    SpinalArteryFluoroscopicAngiogramWContrastIA = "24925-0",
    /**
     * Code: 24926-8
     */
    SpineUS = "24926-8",
    /**
     * Code: 24927-6
     */
    SpineFluoroscopyWContrastIntradisc = "24927-6",
    /**
     * Code: 24928-4
     */
    SpineXRayAPAndLateral = "24928-4",
    /**
     * Code: 24929-2
     */
    SpineThoracicAndLumbarXRayScoliosisWFlexionAndWExtension = "24929-2",
    /**
     * Code: 24930-0
     */
    SpineThoracicAndLumbarXRayScoliosis = "24930-0",
    /**
     * Code: 24931-8
     */
    FluoroscopyGuidanceForInjectionOfSpineFacetJoint = "24931-8",
    /**
     * Code: 24932-6
     */
    SpineCervicalCT = "24932-6",
    /**
     * Code: 24933-4
     */
    SpineCervicalCTWContrastIV = "24933-4",
    /**
     * Code: 24934-2
     */
    SpineCervicalCTWContrastIT = "24934-2",
    /**
     * Code: 24935-9
     */
    SpineCervicalMRI = "24935-9",
    /**
     * Code: 24936-7
     */
    SpineCervicalMRIWAnesthesia = "24936-7",
    /**
     * Code: 24937-5
     */
    SpineCervicalMRIWAndWOContrastIV = "24937-5",
    /**
     * Code: 24938-3
     */
    SpineCervicalMRIWContrastIV = "24938-3",
    /**
     * Code: 24939-1
     */
    SpineCervicalXRay5Views = "24939-1",
    /**
     * Code: 24940-9
     */
    SpineCervicalXRaySingleView = "24940-9",
    /**
     * Code: 24941-7
     */
    SpineCervicalXRay3Views = "24941-7",
    /**
     * Code: 24942-5
     */
    SpineCervicalXRayAPAndLateral = "24942-5",
    /**
     * Code: 24943-3
     */
    SpineCervicalXRayLateral = "24943-3",
    /**
     * Code: 24944-1
     */
    SpineCervicalXRaySwimmers = "24944-1",
    /**
     * Code: 24945-8
     */
    SpineCervicalXRayWFlexionAndWExtension = "24945-8",
    /**
     * Code: 24946-6
     */
    SpineCervicalXRay = "24946-6",
    /**
     * Code: 24947-4
     */
    SpineCervicalFluoroscopyWContrastIT = "24947-4",
    /**
     * Code: 24948-2
     */
    SpineCervicalOdontoidAndCervicalAxisXRayAPSingleView = "24948-2",
    /**
     * Code: 24963-1
     */
    SpineLumbarCT = "24963-1",
    /**
     * Code: 24964-9
     */
    SpineLumbarCTWContrastIV = "24964-9",
    /**
     * Code: 24965-6
     */
    SpineLumbarCTWContrastIT = "24965-6",
    /**
     * Code: 24967-2
     */
    SpineLumbarMRIWAndWOContrastIV = "24967-2",
    /**
     * Code: 24968-0
     */
    SpineLumbarMRI = "24968-0",
    /**
     * Code: 24969-8
     */
    SpineLumbarXRayLateral = "24969-8",
    /**
     * Code: 24970-6
     */
    SpineLumbarXRayAPAndLateral = "24970-6",
    /**
     * Code: 24971-4
     */
    SpineLumbarXRayWFlexionAndWExtension = "24971-4",
    /**
     * Code: 24972-2
     */
    SpineLumbarXRay = "24972-2",
    /**
     * Code: 24973-0
     */
    FluoroscopyGuidanceForAspirationOfSpineLumbarSpace = "24973-0",
    /**
     * Code: 24974-8
     */
    SpineLumbarFluoroscopyWContrastIT = "24974-8",
    /**
     * Code: 24975-5
     */
    SpineLumbarAndSacroiliacJointBilateralXRay = "24975-5",
    /**
     * Code: 24977-1
     */
    SpineLumbarMRIWAnesthesia = "24977-1",
    /**
     * Code: 24978-9
     */
    SpineThoracicCT = "24978-9",
    /**
     * Code: 24979-7
     */
    SpineThoracicCTWContrastIV = "24979-7",
    /**
     * Code: 24980-5
     */
    SpineThoracicMRI = "24980-5",
    /**
     * Code: 24981-3
     */
    SpineThoracicMRIWAndWOContrastIV = "24981-3",
    /**
     * Code: 24982-1
     */
    SpineThoracicMRIWContrastIV = "24982-1",
    /**
     * Code: 24983-9
     */
    SpineThoracicXRay = "24983-9",
    /**
     * Code: 24984-7
     */
    SpineThoracicAndLumbarXRay2Views = "24984-7",
    /**
     * Code: 24985-4
     */
    SpineThoracicFluoroscopyWContrastIT = "24985-4",
    /**
     * Code: 24986-2
     */
    CTGuidanceForBiopsyOfSpine = "24986-2",
    /**
     * Code: 24987-0
     */
    SpineCTWContrastIV = "24987-0",
    /**
     * Code: 24988-8
     */
    SpleenCT = "24988-8",
    /**
     * Code: 24989-6
     */
    SpleenCTWAndWOContrastIV = "24989-6",
    /**
     * Code: 24990-4
     */
    SpleenUS = "24990-4",
    /**
     * Code: 24991-2
     */
    SplenicVeinAndPortalVeinFluoroscopicAngiogramWContrastIA = "24991-2",
    /**
     * Code: 24992-0
     */
    SplenicArteryFluoroscopicAngiogramWContrastIA = "24992-0",
    /**
     * Code: 24993-8
     */
    SternoclavicularJointsXRay = "24993-8",
    /**
     * Code: 24994-6
     */
    SternumXRay = "24994-6",
    /**
     * Code: 24995-3
     */
    FluoroscopyGuidanceForPlacementOfTubeInStomach = "24995-3",
    /**
     * Code: 24996-1
     */
    FluoroscopyGuidanceForReplacementOfPercutaneousGastrostomyInStomach = "24996-1",
    /**
     * Code: 24997-9
     */
    StomachScanForGastricEmptyingSolidPhaseWTc99mSCPO = "24997-9",
    /**
     * Code: 24998-7
     */
    PlacementCheckOfGastrostomyTubeWContrastViaGITube = "24998-7",
    /**
     * Code: 24999-5
     */
    TemporomandibularJointMRI = "24999-5",
    /**
     * Code: 25000-1
     */
    TemporomandibularJointXRay = "25000-1",
    /**
     * Code: 25001-9
     */
    ScrotumAndTesticleScanWTc99mPertechnetateIV = "25001-9",
    /**
     * Code: 25002-7
     */
    ScrotumAndTesticleUS = "25002-7",
    /**
     * Code: 25003-5
     */
    ThighVesselsMRIAngiogramWContrastIV = "25003-5",
    /**
     * Code: 25005-0
     */
    ThreeVesselsFluoroscopicAngiogramWContrast = "25005-0",
    /**
     * Code: 25006-8
     */
    ThumbXRay = "25006-8",
    /**
     * Code: 25007-6
     */
    ThyroidScanWI131IV = "25007-6",
    /**
     * Code: 25008-4
     */
    ThyroidScanAndUptakeWI131IV = "25008-4",
    /**
     * Code: 25009-2
     */
    USGuidanceForBiopsyOfThyroid = "25009-2",
    /**
     * Code: 25010-0
     */
    ThyroidUS = "25010-0",
    /**
     * Code: 25011-8
     */
    TibiaAndFibulaXRay = "25011-8",
    /**
     * Code: 25012-6
     */
    TibialArteryFluoroscopicAngiogramAngioplastyWContrastIA = "25012-6",
    /**
     * Code: 25013-4
     */
    ToesXRay = "25013-4",
    /**
     * Code: 25014-2
     */
    TwoVesselsFluoroscopicAngiogramWContrast = "25014-2",
    /**
     * Code: 25015-9
     */
    UpperGITractReplacementOfPercutaneousGastrojejunostomy = "25015-9",
    /**
     * Code: 25016-7
     */
    UrethraFluoroscopyWContrastIntraUrethra = "25016-7",
    /**
     * Code: 25017-5
     */
    UrinaryBladderAndUrethraFluoroscopyWContrastIntraBladder = "25017-5",
    /**
     * Code: 25018-3
     */
    UrinaryBladderScan = "25018-3",
    /**
     * Code: 25019-1
     */
    UrinaryBladderUS = "25019-1",
    /**
     * Code: 25020-9
     */
    UrinaryBladderAndUrethraFluoroscopyWContrastRetrogradeViaUrethra = "25020-9",
    /**
     * Code: 25022-5
     */
    UterusAndFallopianTubesFluoroscopyWContrastIntrauterine = "25022-5",
    /**
     * Code: 25023-3
     */
    VeinFluoroscopicAngiogramWContrastIV = "25023-3",
    /**
     * Code: 25024-1
     */
    FluoroscopicAngiogramGuidanceForPlacementOfLongtermPeripheralCatheterInCentralVein = "25024-1",
    /**
     * Code: 25025-8
     */
    VenaCavaFluoroscopicAngiogramWContrastIV = "25025-8",
    /**
     * Code: 25026-6
     */
    FluoroscopicAngiogramGuidanceForPlacementOfIVCFilterInInferiorVenaCavaWContrastIV = "25026-6",
    /**
     * Code: 25027-4
     */
    GuidanceForPlacementOfLargeBoreCatheterIntoVesselInCentralVein = "25027-4",
    /**
     * Code: 25028-2
     */
    FluoroscopicAngiogramGuidanceForPlacementOfCatheterForAdminstrationOfThrombolyticInVessel = "25028-2",
    /**
     * Code: 25029-0
     */
    FluoroscopicAngiogramGuidanceForPlacementOfCatheterForVasoconstrictorInfusionInVessels = "25029-0",
    /**
     * Code: 25030-8
     */
    AbdominalArteriesFluoroscopicAngiogramWContrastIA = "25030-8",
    /**
     * Code: 25031-6
     */
    BoneScan = "25031-6",
    /**
     * Code: 25032-4
     */
    BoneScanWIn111TaggedWBCIV = "25032-4",
    /**
     * Code: 25033-2
     */
    WristMRI = "25033-2",
    /**
     * Code: 25034-0
     */
    WristFluoroscopyWContrastIntraarticular = "25034-0",
    /**
     * Code: 25035-7
     */
    WristMRIWAndWOContrastIV = "25035-7",
    /**
     * Code: 25036-5
     */
    WristUS = "25036-5",
    /**
     * Code: 25038-1
     */
    UnspecifiedBodyRegionCourtesyConsultation = "25038-1",
    /**
     * Code: 25039-9
     */
    UnspecifiedBodyRegionCTLimited = "25039-9",
    /**
     * Code: 25040-7
     */
    UnspecifiedBodyRegionCT3D = "25040-7",
    /**
     * Code: 25041-5
     */
    CTGuidanceForAspirationOrBiopsyOfUnspecifiedBodyRegionWContrastIV = "25041-5",
    /**
     * Code: 25042-3
     */
    CTGuidanceForAspirationOrBiopsyOfUnspecifiedBodyRegion = "25042-3",
    /**
     * Code: 25043-1
     */
    CTGuidanceForAspirationOfUnspecifiedBodyRegion = "25043-1",
    /**
     * Code: 25044-9
     */
    CTGuidanceForBiopsyOfUnspecifiedBodyRegion = "25044-9",
    /**
     * Code: 25045-6
     */
    UnspecifiedBodyRegionCT = "25045-6",
    /**
     * Code: 25046-4
     */
    UnspecifiedBodyRegionCTWAnesthesia = "25046-4",
    /**
     * Code: 25047-2
     */
    UnspecifiedBodyRegionCTWConsciousSedation = "25047-2",
    /**
     * Code: 25050-6
     */
    UnspecifiedBodyRegionCT3DSagittalAndCoronalDisarticulation = "25050-6",
    /**
     * Code: 25051-4
     */
    UnspecifiedBodyRegionCTMultisectionalSagittal = "25051-4",
    /**
     * Code: 25052-2
     */
    UnspecifiedBodyRegionCTSagittalAndCoronal = "25052-2",
    /**
     * Code: 25053-0
     */
    CTGuidanceForRadiosurgeryOfUnspecifiedBodyRegion = "25053-0",
    /**
     * Code: 25054-8
     */
    CTGuidanceForRadiosurgeryOfUnspecifiedBodyRegionWContrastIV = "25054-8",
    /**
     * Code: 25055-5
     */
    UnspecifiedBodyRegionMRIAdditionalSequence = "25055-5",
    /**
     * Code: 25056-3
     */
    UnspecifiedBodyRegionMRI = "25056-3",
    /**
     * Code: 25057-1
     */
    UnspecifiedBodyRegionMRIWConsciousSedation = "25057-1",
    /**
     * Code: 25058-9
     */
    UnspecifiedBodyRegionMRIAngiogramWContrastIV = "25058-9",
    /**
     * Code: 25059-7
     */
    USGuidanceForBiopsyOfUnspecifiedBodyRegion = "25059-7",
    /**
     * Code: 25060-5
     */
    UnspecifiedBodyRegionUSNoCharge = "25060-5",
    /**
     * Code: 25061-3
     */
    UnspecifiedBodyRegionUS = "25061-3",
    /**
     * Code: 25062-1
     */
    UnspecifiedBodyRegionXRayComparisonView = "25062-1",
    /**
     * Code: 25063-9
     */
    VesselFluoroscopicAngiogramSingleViewWContrastIA = "25063-9",
    /**
     * Code: 25064-7
     */
    VesselFluoroscopicAngiogramAngioplastyWContrastIA = "25064-7",
    /**
     * Code: 25065-4
     */
    UnspecifiedBodyRegionFluoroscopy15Minutes = "25065-4",
    /**
     * Code: 25066-2
     */
    UnspecifiedBodyRegionFluoroscopy30Minutes = "25066-2",
    /**
     * Code: 25067-0
     */
    UnspecifiedBodyRegionFluoroscopy45Minutes = "25067-0",
    /**
     * Code: 25068-8
     */
    UnspecifiedBodyRegionFluoroscopy1Hour = "25068-8",
    /**
     * Code: 25069-6
     */
    FluoroscopyGuidanceForBiopsyOfUnspecifiedBodyRegion = "25069-6",
    /**
     * Code: 25070-4
     */
    UnspecifiedBodyRegionFluoroscopyDuringSurgery = "25070-4",
    /**
     * Code: 25071-2
     */
    UnspecifiedBodyRegionXRayTomograph = "25071-2",
    /**
     * Code: 25072-0
     */
    GuidanceForPlacementOfInfusionPortInUnspecifiedBodyRegion = "25072-0",
    /**
     * Code: 25073-8
     */
    VesselFluoroscopicAngiogramRemovalOfForeignBodyFromVascularSpace = "25073-8",
    /**
     * Code: 25074-6
     */
    ZygomaticArchXRay = "25074-6",
    /**
     * Code: 25076-1
     */
    HepaticArteryFluoroscopicAngiogramWContrastIA = "25076-1",
    /**
     * Code: 25077-9
     */
    FluoroscopicAngiogramGuidanceForPlacementOfCatheterInHepaticArteryWContrastIA = "25077-9",
    /**
     * Code: 25078-7
     */
    FluoroscopyGuidanceForPlacementOfStentInIntrahepaticPortalSystem = "25078-7",
    /**
     * Code: 25079-5
     */
    KidneyArteriesFluoroscopicAngiogramWContrastIA = "25079-5",
    /**
     * Code: 25080-3
     */
    RenalVeinBilateralFluoroscopicAngiogramWContrastIVAndWReninSampling = "25080-3",
    /**
     * Code: 25081-1
     */
    RenalVesselFluoroscopicAngiogramAngioplastyWContrastIA = "25081-1",
    /**
     * Code: 25561-2
     */
    VAL11DeoxycorticosteroneMolesVolumeInSerumOrPlasma = "25561-2",
    /**
     * Code: 26064-6
     */
    VeinBilateralFluoroscopicAngiogramWContrastIV = "26064-6",
    /**
     * Code: 26065-3
     */
    VeinLeftFluoroscopicAngiogramWContrastIV = "26065-3",
    /**
     * Code: 26066-1
     */
    VeinRightFluoroscopicAngiogramWContrastIV = "26066-1",
    /**
     * Code: 26067-9
     */
    SalivaryGlandBilateralFluoroscopyWContrastIntraSalivaryDuct = "26067-9",
    /**
     * Code: 26068-7
     */
    SalivaryGlandLeftFluoroscopyWContrastIntraSalivaryDuct = "26068-7",
    /**
     * Code: 26069-5
     */
    SalivaryGlandRightFluoroscopyWContrastIntraSalivaryDuct = "26069-5",
    /**
     * Code: 26070-3
     */
    HipBilateralFluoroscopyWContrastIntraarticular = "26070-3",
    /**
     * Code: 26071-1
     */
    HipLeftFluoroscopyWContrastIntraarticular = "26071-1",
    /**
     * Code: 26072-9
     */
    HipRightFluoroscopyWContrastIntraarticular = "26072-9",
    /**
     * Code: 26073-7
     */
    KneeBilateralFluoroscopyWContrastIntraarticular = "26073-7",
    /**
     * Code: 26074-5
     */
    KneeLeftFluoroscopyWContrastIntraarticular = "26074-5",
    /**
     * Code: 26075-2
     */
    KneeRightFluoroscopyWContrastIntraarticular = "26075-2",
    /**
     * Code: 26076-0
     */
    ShoulderBilateralFluoroscopyWContrastIntraarticular = "26076-0",
    /**
     * Code: 26077-8
     */
    ShoulderLeftFluoroscopyWContrastIntraarticular = "26077-8",
    /**
     * Code: 26078-6
     */
    ShoulderRightFluoroscopyWContrastIntraarticular = "26078-6",
    /**
     * Code: 26079-4
     */
    CarotidArteryBilateralFluoroscopicAngiogramWContrastIA = "26079-4",
    /**
     * Code: 26080-2
     */
    CarotidArteryLeftFluoroscopicAngiogramWContrastIA = "26080-2",
    /**
     * Code: 26081-0
     */
    CarotidArteryRightFluoroscopicAngiogramWContrastIA = "26081-0",
    /**
     * Code: 26082-8
     */
    SpinalArteryBilateralFluoroscopicAngiogramWContrastIA = "26082-8",
    /**
     * Code: 26083-6
     */
    SpinalArteryLeftFluoroscopicAngiogramWContrastIA = "26083-6",
    /**
     * Code: 26084-4
     */
    SpinalArteryRightFluoroscopicAngiogramWContrastIA = "26084-4",
    /**
     * Code: 26085-1
     */
    KneeBilateralXRayStanding = "26085-1",
    /**
     * Code: 26086-9
     */
    KneeLeftXRayStanding = "26086-9",
    /**
     * Code: 26087-7
     */
    KneeRightXRayStanding = "26087-7",
    /**
     * Code: 26088-5
     */
    KneeBilateralScan = "26088-5",
    /**
     * Code: 26089-3
     */
    KneeLeftScan = "26089-3",
    /**
     * Code: 26090-1
     */
    KneeRightScan = "26090-1",
    /**
     * Code: 26091-9
     */
    ScrotumAndTesticleBilateralScanWTc99mPertechnetateIV = "26091-9",
    /**
     * Code: 26092-7
     */
    ScrotumAndTesticleLeftScanWTc99mPertechnetateIV = "26092-7",
    /**
     * Code: 26093-5
     */
    ScrotumAndTesticleRightScanWTc99mPertechnetateIV = "26093-5",
    /**
     * Code: 26094-3
     */
    FootBilateralXRayStanding = "26094-3",
    /**
     * Code: 26095-0
     */
    FootLeftXRayStanding = "26095-0",
    /**
     * Code: 26096-8
     */
    FootRightXRayStanding = "26096-8",
    /**
     * Code: 26097-6
     */
    AnkleBilateralXRay = "26097-6",
    /**
     * Code: 26098-4
     */
    AnkleLeftXRay = "26098-4",
    /**
     * Code: 26099-2
     */
    AnkleRightXRay = "26099-2",
    /**
     * Code: 26100-8
     */
    CalcaneusBilateralXRay = "26100-8",
    /**
     * Code: 26101-6
     */
    CalcaneusLeftXRay = "26101-6",
    /**
     * Code: 26102-4
     */
    CalcaneusRightXRay = "26102-4",
    /**
     * Code: 26106-5
     */
    ClavicleBilateralXRay = "26106-5",
    /**
     * Code: 26107-3
     */
    ClavicleLeftXRay = "26107-3",
    /**
     * Code: 26108-1
     */
    ClavicleRightXRay = "26108-1",
    /**
     * Code: 26109-9
     */
    ElbowBilateralXRay = "26109-9",
    /**
     * Code: 26110-7
     */
    ElbowLeftXRay = "26110-7",
    /**
     * Code: 26111-5
     */
    ElbowRightXRay = "26111-5",
    /**
     * Code: 26112-3
     */
    LowerExtremityBilateralXRay = "26112-3",
    /**
     * Code: 26113-1
     */
    LowerExtremityLeftXRay = "26113-1",
    /**
     * Code: 26114-9
     */
    LowerExtremityRightXRay = "26114-9",
    /**
     * Code: 26115-6
     */
    UpperExtremityBilateralXRay = "26115-6",
    /**
     * Code: 26116-4
     */
    UpperExtremityLeftXRay = "26116-4",
    /**
     * Code: 26117-2
     */
    UpperExtremityRightXRay = "26117-2",
    /**
     * Code: 26118-0
     */
    FemurBilateralXRay = "26118-0",
    /**
     * Code: 26120-6
     */
    FemurLeftXRay = "26120-6",
    /**
     * Code: 26122-2
     */
    FemurRightXRay = "26122-2",
    /**
     * Code: 26124-8
     */
    FingerBilateralXRay = "26124-8",
    /**
     * Code: 26125-5
     */
    FingerLeftXRay = "26125-5",
    /**
     * Code: 26126-3
     */
    FingerRightXRay = "26126-3",
    /**
     * Code: 26127-1
     */
    FootBilateralXRay = "26127-1",
    /**
     * Code: 26128-9
     */
    FootLeftXRay = "26128-9",
    /**
     * Code: 26129-7
     */
    FootRightXRay = "26129-7",
    /**
     * Code: 26130-5
     */
    HipBilateralXRay = "26130-5",
    /**
     * Code: 26131-3
     */
    HipLeftXRay = "26131-3",
    /**
     * Code: 26132-1
     */
    HipRightXRay = "26132-1",
    /**
     * Code: 26133-9
     */
    AcetabulumBilateralXRay = "26133-9",
    /**
     * Code: 26134-7
     */
    AcetabulumLeftXRay = "26134-7",
    /**
     * Code: 26135-4
     */
    AcetabulumRightXRay = "26135-4",
    /**
     * Code: 26136-2
     */
    AcromioclavicularJointBilateralXRay = "26136-2",
    /**
     * Code: 26137-0
     */
    AcromioclavicularJointLeftXRay = "26137-0",
    /**
     * Code: 26138-8
     */
    AcromioclavicularJointRightXRay = "26138-8",
    /**
     * Code: 26139-6
     */
    MastoidBilateralXRay = "26139-6",
    /**
     * Code: 26140-4
     */
    MastoidLeftXRay = "26140-4",
    /**
     * Code: 26141-2
     */
    MastoidRightXRay = "26141-2",
    /**
     * Code: 26142-0
     */
    OpticForamenBilateralXRay = "26142-0",
    /**
     * Code: 26143-8
     */
    OpticForamenLeftXRay = "26143-8",
    /**
     * Code: 26144-6
     */
    OpticForamenRightXRay = "26144-6",
    /**
     * Code: 26146-1
     */
    RadiusBilateralAndUlnaBilateralXRay = "26146-1",
    /**
     * Code: 26148-7
     */
    RadiusLeftAndUlnaLeftXRay = "26148-7",
    /**
     * Code: 26150-3
     */
    RadiusRightAndUlnaRightXRay = "26150-3",
    /**
     * Code: 26151-1
     */
    RibsBilateralXRay = "26151-1",
    /**
     * Code: 26152-9
     */
    RibsLeftXRay = "26152-9",
    /**
     * Code: 26153-7
     */
    RibsRightXRay = "26153-7",
    /**
     * Code: 26154-5
     */
    ScapulaBilateralXRay = "26154-5",
    /**
     * Code: 26155-2
     */
    ScapulaLeftXRay = "26155-2",
    /**
     * Code: 26156-0
     */
    ScapulaRightXRay = "26156-0",
    /**
     * Code: 26157-8
     */
    ShoulderBilateralXRay = "26157-8",
    /**
     * Code: 26158-6
     */
    ShoulderLeftXRay = "26158-6",
    /**
     * Code: 26159-4
     */
    ShoulderRightXRay = "26159-4",
    /**
     * Code: 26160-2
     */
    ThumbBilateralXRay = "26160-2",
    /**
     * Code: 26161-0
     */
    ThumbLeftXRay = "26161-0",
    /**
     * Code: 26162-8
     */
    ThumbRightXRay = "26162-8",
    /**
     * Code: 26163-6
     */
    TibiaBilateralAndFibulaBilateralXRay = "26163-6",
    /**
     * Code: 26164-4
     */
    TibiaLeftAndFibulaLeftXRay = "26164-4",
    /**
     * Code: 26165-1
     */
    TibiaRightAndFibulaRightXRay = "26165-1",
    /**
     * Code: 26166-9
     */
    ToesBilateralXRay = "26166-9",
    /**
     * Code: 26167-7
     */
    ToesLeftXRay = "26167-7",
    /**
     * Code: 26168-5
     */
    ToesRightXRay = "26168-5",
    /**
     * Code: 26169-3
     */
    WristBilateralXRay = "26169-3",
    /**
     * Code: 26170-1
     */
    WristLeftXRay = "26170-1",
    /**
     * Code: 26171-9
     */
    WristRightXRay = "26171-9",
    /**
     * Code: 26172-7
     */
    ZygomaticArchBilateralXRay = "26172-7",
    /**
     * Code: 26173-5
     */
    ZygomaticArchLeftXRay = "26173-5",
    /**
     * Code: 26174-3
     */
    ZygomaticArchRightXRay = "26174-3",
    /**
     * Code: 26175-0
     */
    BreastBilateralMammogramScreening = "26175-0",
    /**
     * Code: 26176-8
     */
    BreastLeftMammogramScreening = "26176-8",
    /**
     * Code: 26177-6
     */
    BreastRightMammogramScreening = "26177-6",
    /**
     * Code: 26178-4
     */
    FemoralArteryBilateralFluoroscopicAngiogramRunoffWContrastIA = "26178-4",
    /**
     * Code: 26179-2
     */
    FemoralArteryLeftFluoroscopicAngiogramRunoffWContrastIA = "26179-2",
    /**
     * Code: 26180-0
     */
    FemoralArteryRightFluoroscopicAngiogramRunoffWContrastIA = "26180-0",
    /**
     * Code: 26181-8
     */
    ThoracicOutletVesselsBilateralMRIAngiogramWContrastIV = "26181-8",
    /**
     * Code: 26182-6
     */
    ThoracicOutletVesselsLeftMRIAngiogramWContrastIV = "26182-6",
    /**
     * Code: 26183-4
     */
    ThoracicOutletVesselsRightMRIAngiogramWContrastIV = "26183-4",
    /**
     * Code: 26184-2
     */
    ExtremityBilateralCTWContrastIV = "26184-2",
    /**
     * Code: 26185-9
     */
    ExtremityLeftCTWContrastIV = "26185-9",
    /**
     * Code: 26186-7
     */
    ExtremityRightCTWContrastIV = "26186-7",
    /**
     * Code: 26187-5
     */
    AnkleBilateralMRIWAndWOContrastIV = "26187-5",
    /**
     * Code: 26188-3
     */
    AnkleLeftMRIWAndWOContrastIV = "26188-3",
    /**
     * Code: 26189-1
     */
    AnkleRightMRIWAndWOContrastIV = "26189-1",
    /**
     * Code: 26190-9
     */
    ThoracicOutletBilateralMRIWAndWOContrastIV = "26190-9",
    /**
     * Code: 26191-7
     */
    ThoracicOutletLeftMRIWAndWOContrastIV = "26191-7",
    /**
     * Code: 26192-5
     */
    ThoracicOutletRightMRIWAndWOContrastIV = "26192-5",
    /**
     * Code: 26193-3
     */
    ElbowBilateralMRIWAndWOContrastIV = "26193-3",
    /**
     * Code: 26194-1
     */
    ElbowLeftMRIWAndWOContrastIV = "26194-1",
    /**
     * Code: 26195-8
     */
    ElbowRightMRIWAndWOContrastIV = "26195-8",
    /**
     * Code: 26196-6
     */
    ThighBilateralMRIWAndWOContrastIV = "26196-6",
    /**
     * Code: 26197-4
     */
    ThighLeftMRIWAndWOContrastIV = "26197-4",
    /**
     * Code: 26198-2
     */
    ThighRightMRIWAndWOContrastIV = "26198-2",
    /**
     * Code: 26199-0
     */
    KneeBilateralMRIWAndWOContrastIV = "26199-0",
    /**
     * Code: 26200-6
     */
    KneeLeftMRIWAndWOContrastIV = "26200-6",
    /**
     * Code: 26201-4
     */
    KneeRightMRIWAndWOContrastIV = "26201-4",
    /**
     * Code: 26202-2
     */
    ShoulderBilateralMRIWAndWOContrastIV = "26202-2",
    /**
     * Code: 26203-0
     */
    ShoulderLeftMRIWAndWOContrastIV = "26203-0",
    /**
     * Code: 26204-8
     */
    ShoulderRightMRIWAndWOContrastIV = "26204-8",
    /**
     * Code: 26205-5
     */
    WristBilateralMRIWAndWOContrastIV = "26205-5",
    /**
     * Code: 26206-3
     */
    WristLeftMRIWAndWOContrastIV = "26206-3",
    /**
     * Code: 26207-1
     */
    WristRightMRIWAndWOContrastIV = "26207-1",
    /**
     * Code: 26208-9
     */
    AnkleBilateralMRI = "26208-9",
    /**
     * Code: 26209-7
     */
    AnkleLeftMRI = "26209-7",
    /**
     * Code: 26210-5
     */
    AnkleRightMRI = "26210-5",
    /**
     * Code: 26211-3
     */
    ThoracicOutletBilateralMRI = "26211-3",
    /**
     * Code: 26212-1
     */
    ThoracicOutletLeftMRI = "26212-1",
    /**
     * Code: 26213-9
     */
    ThoracicOutletRightMRI = "26213-9",
    /**
     * Code: 26214-7
     */
    BreastBilateralUS = "26214-7",
    /**
     * Code: 26215-4
     */
    BreastLeftUS = "26215-4",
    /**
     * Code: 26216-2
     */
    BreastRightUS = "26216-2",
    /**
     * Code: 26217-0
     */
    CarotidArteryBilateralUS = "26217-0",
    /**
     * Code: 26218-8
     */
    CarotidArteryLeftUS = "26218-8",
    /**
     * Code: 26219-6
     */
    CarotidArteryRightUS = "26219-6",
    /**
     * Code: 26220-4
     */
    ElbowBilateralMRI = "26220-4",
    /**
     * Code: 26221-2
     */
    ElbowLeftMRI = "26221-2",
    /**
     * Code: 26222-0
     */
    ElbowRightMRI = "26222-0",
    /**
     * Code: 26223-8
     */
    ExtremityBilateralUS = "26223-8",
    /**
     * Code: 26224-6
     */
    ExtremityBilateralCT = "26224-6",
    /**
     * Code: 26225-3
     */
    ExtremityLeftUS = "26225-3",
    /**
     * Code: 26226-1
     */
    ExtremityLeftCT = "26226-1",
    /**
     * Code: 26227-9
     */
    LowerExtremityJointBilateralMRI = "26227-9",
    /**
     * Code: 26228-7
     */
    LowerExtremityJointLeftMRI = "26228-7",
    /**
     * Code: 26229-5
     */
    LowerExtremityJointRightMRI = "26229-5",
    /**
     * Code: 26230-3
     */
    ExtremityRightUS = "26230-3",
    /**
     * Code: 26231-1
     */
    ExtremityRightCT = "26231-1",
    /**
     * Code: 26232-9
     */
    UpperExtremityBilateralMRI = "26232-9",
    /**
     * Code: 26233-7
     */
    UpperExtremityLeftMRI = "26233-7",
    /**
     * Code: 26234-5
     */
    UpperExtremityRightMRI = "26234-5",
    /**
     * Code: 26235-2
     */
    ThighBilateralMRI = "26235-2",
    /**
     * Code: 26236-0
     */
    ThighLeftMRI = "26236-0",
    /**
     * Code: 26237-8
     */
    ThighRightMRI = "26237-8",
    /**
     * Code: 26238-6
     */
    FingerBilateralMRI = "26238-6",
    /**
     * Code: 26239-4
     */
    FingerLeftMRI = "26239-4",
    /**
     * Code: 26240-2
     */
    FingerRightMRI = "26240-2",
    /**
     * Code: 26241-0
     */
    FootBilateralMRI = "26241-0",
    /**
     * Code: 26242-8
     */
    FootLeftMRI = "26242-8",
    /**
     * Code: 26243-6
     */
    FootRightMRI = "26243-6",
    /**
     * Code: 26244-4
     */
    ForearmBilateralMRI = "26244-4",
    /**
     * Code: 26245-1
     */
    ForearmLeftMRI = "26245-1",
    /**
     * Code: 26246-9
     */
    ForearmRightMRI = "26246-9",
    /**
     * Code: 26247-7
     */
    HandBilateralMRI = "26247-7",
    /**
     * Code: 26248-5
     */
    HandLeftMRI = "26248-5",
    /**
     * Code: 26249-3
     */
    HandRightMRI = "26249-3",
    /**
     * Code: 26250-1
     */
    HipBilateralUS = "26250-1",
    /**
     * Code: 26251-9
     */
    HipLeftUS = "26251-9",
    /**
     * Code: 26252-7
     */
    HipRightUS = "26252-7",
    /**
     * Code: 26253-5
     */
    InternalAuditoryCanalBilateralXRayTomograph = "26253-5",
    /**
     * Code: 26254-3
     */
    InternalAuditoryCanalLeftXRayTomograph = "26254-3",
    /**
     * Code: 26255-0
     */
    InternalAuditoryCanalRightXRayTomograph = "26255-0",
    /**
     * Code: 26256-8
     */
    KneeBilateralMRI = "26256-8",
    /**
     * Code: 26257-6
     */
    KneeLeftMRI = "26257-6",
    /**
     * Code: 26258-4
     */
    KneeRightMRI = "26258-4",
    /**
     * Code: 26259-2
     */
    PelvisAndHipBilateralMRI = "26259-2",
    /**
     * Code: 26260-0
     */
    PelvisAndHipLeftMRI = "26260-0",
    /**
     * Code: 26261-8
     */
    PelvisAndHipRightMRI = "26261-8",
    /**
     * Code: 26262-6
     */
    PoplitealSpaceBilateralUS = "26262-6",
    /**
     * Code: 26263-4
     */
    PoplitealSpaceLeftUS = "26263-4",
    /**
     * Code: 26264-2
     */
    PoplitealSpaceRightUS = "26264-2",
    /**
     * Code: 26265-9
     */
    ShoulderBilateralUS = "26265-9",
    /**
     * Code: 26266-7
     */
    ShoulderBilateralMRI = "26266-7",
    /**
     * Code: 26267-5
     */
    ShoulderLeftUS = "26267-5",
    /**
     * Code: 26268-3
     */
    ShoulderLeftMRI = "26268-3",
    /**
     * Code: 26269-1
     */
    ShoulderRightUS = "26269-1",
    /**
     * Code: 26270-9
     */
    ShoulderRightMRI = "26270-9",
    /**
     * Code: 26271-7
     */
    ScrotumAndTesticleBilateralUS = "26271-7",
    /**
     * Code: 26272-5
     */
    ScrotumAndTesticleLeftUS = "26272-5",
    /**
     * Code: 26273-3
     */
    ScrotumAndTesticleRightUS = "26273-3",
    /**
     * Code: 26277-4
     */
    WristBilateralMRI = "26277-4",
    /**
     * Code: 26278-2
     */
    WristBilateralUS = "26278-2",
    /**
     * Code: 26279-0
     */
    WristLeftMRI = "26279-0",
    /**
     * Code: 26280-8
     */
    WristLeftUS = "26280-8",
    /**
     * Code: 26281-6
     */
    WristRightMRI = "26281-6",
    /**
     * Code: 26282-4
     */
    WristRightUS = "26282-4",
    /**
     * Code: 26283-2
     */
    KneeBilateralXRayMerchants = "26283-2",
    /**
     * Code: 26284-0
     */
    KneeLeftXRayMerchants = "26284-0",
    /**
     * Code: 26285-7
     */
    KneeRightXRayMerchants = "26285-7",
    /**
     * Code: 26286-5
     */
    BreastBilateralUSLimited = "26286-5",
    /**
     * Code: 26287-3
     */
    BreastBilateralMammogramLimited = "26287-3",
    /**
     * Code: 26288-1
     */
    BreastLeftUSLimited = "26288-1",
    /**
     * Code: 26289-9
     */
    BreastLeftMammogramLimited = "26289-9",
    /**
     * Code: 26290-7
     */
    BreastRightUSLimited = "26290-7",
    /**
     * Code: 26291-5
     */
    BreastRightMammogramLimited = "26291-5",
    /**
     * Code: 26292-3
     */
    MammogramGuidanceStereotacticForBiopsyOfBreastBilateral = "26292-3",
    /**
     * Code: 26293-1
     */
    MammogramGuidanceStereotacticForBiopsyOfBreastLeft = "26293-1",
    /**
     * Code: 26294-9
     */
    MammogramGuidanceStereotacticForBiopsyOfBreastRight = "26294-9",
    /**
     * Code: 26295-6
     */
    FluoroscopicAngiogramGuidanceForRepositionOfCatheterInCentralVeinBilateralWContrastIV = "26295-6",
    /**
     * Code: 26296-4
     */
    FluoroscopicAngiogramGuidanceForRepositionOfCatheterInCentralVeinLeftWContrastIV = "26296-4",
    /**
     * Code: 26297-2
     */
    FluoroscopicAngiogramGuidanceForRepositionOfCatheterInCentralVeinRightWContrastIV = "26297-2",
    /**
     * Code: 26298-0
     */
    FluoroscopicAngiogramGuidanceForAtherectomyOfVeinBilateralWContrastIV = "26298-0",
    /**
     * Code: 26299-8
     */
    FluoroscopicAngiogramGuidanceForAtherectomyOfVeinLeftWContrastIV = "26299-8",
    /**
     * Code: 26300-4
     */
    FluoroscopicAngiogramGuidanceForAtherectomyOfVeinRightWContrastIV = "26300-4",
    /**
     * Code: 26301-2
     */
    FluoroscopicAngiogramGuidanceForPlacementOfStentInVeinBilateral = "26301-2",
    /**
     * Code: 26302-0
     */
    FluoroscopicAngiogramGuidanceForPlacementOfStentInVeinLeft = "26302-0",
    /**
     * Code: 26303-8
     */
    FluoroscopicAngiogramGuidanceForPlacementOfStentInVeinRight = "26303-8",
    /**
     * Code: 26304-6
     */
    FluoroscopicAngiogramGuidanceForPlacementOfLongtermPeripheralCatheterInCentralVeinBilateral = "26304-6",
    /**
     * Code: 26305-3
     */
    FluoroscopicAngiogramGuidanceForPlacementOfLongtermPeripheralCatheterInCentralVeinLeft = "26305-3",
    /**
     * Code: 26306-1
     */
    FluoroscopicAngiogramGuidanceForPlacementOfLongtermPeripheralCatheterInCentralVeinRight = "26306-1",
    /**
     * Code: 26307-9
     */
    GuidanceForPlacementOfLargeBoreCatheterIntoVesselInCentralVeinBilateral = "26307-9",
    /**
     * Code: 26308-7
     */
    GuidanceForPlacementOfLargeBoreCatheterIntoVesselInCentralVeinLeft = "26308-7",
    /**
     * Code: 26309-5
     */
    GuidanceForPlacementOfLargeBoreCatheterIntoVesselInCentralVeinRight = "26309-5",
    /**
     * Code: 26310-3
     */
    FluoroscopicAngiogramGuidanceForPlacementOfCatheterInCentralVeinBilateralWContrastIV = "26310-3",
    /**
     * Code: 26311-1
     */
    FluoroscopicAngiogramGuidanceForPlacementOfCatheterInCentralVeinLeftWContrastIV = "26311-1",
    /**
     * Code: 26312-9
     */
    FluoroscopicAngiogramGuidanceForPlacementOfCatheterInCentralVeinRightWContrastIV = "26312-9",
    /**
     * Code: 26313-7
     */
    USGuidanceForNeedleLocalizationOfBreastBilateral = "26313-7",
    /**
     * Code: 26314-5
     */
    USGuidanceForNeedleLocalizationOfBreastLeft = "26314-5",
    /**
     * Code: 26315-2
     */
    MammogramGuidanceForNeedleLocalizationOfMassOfBreastBilateral = "26315-2",
    /**
     * Code: 26316-0
     */
    MammogramGuidanceForNeedleLocalizationOfMassOfBreastLeft = "26316-0",
    /**
     * Code: 26317-8
     */
    MammogramGuidanceForNeedleLocalizationOfMassOfBreastRight = "26317-8",
    /**
     * Code: 26318-6
     */
    USGuidanceForNeedleLocalizationOfBreastRight = "26318-6",
    /**
     * Code: 26319-4
     */
    CTGuidanceForInjectionOfSacroiliacJointBilateral = "26319-4",
    /**
     * Code: 26320-2
     */
    CTGuidanceForInjectionOfSacroiliacJointLeft = "26320-2",
    /**
     * Code: 26321-0
     */
    CTGuidanceForInjectionOfSacroiliacJointRight = "26321-0",
    /**
     * Code: 26322-8
     */
    FluoroscopyGuidanceForInjectionOfSpineFacetJointBilateral = "26322-8",
    /**
     * Code: 26323-6
     */
    FluoroscopyGuidanceForInjectionOfSpineFacetJointLeft = "26323-6",
    /**
     * Code: 26324-4
     */
    FluoroscopyGuidanceForInjectionOfSpineFacetJointRight = "26324-4",
    /**
     * Code: 26325-1
     */
    USGuidanceForDrainageOfExtremityBilateral = "26325-1",
    /**
     * Code: 26326-9
     */
    USGuidanceForDrainageOfExtremityLeft = "26326-9",
    /**
     * Code: 26327-7
     */
    USGuidanceForDrainageOfExtremityRight = "26327-7",
    /**
     * Code: 26328-5
     */
    USGuidanceForDrainageOfKidneyBilateral = "26328-5",
    /**
     * Code: 26329-3
     */
    USGuidanceForDrainageOfKidneyLeft = "26329-3",
    /**
     * Code: 26330-1
     */
    USGuidanceForDrainageOfKidneyRight = "26330-1",
    /**
     * Code: 26331-9
     */
    FluoroscopicAngiogramGuidanceForChangeOfCentralCatheterInCentralVeinBilateralWContrastIV = "26331-9",
    /**
     * Code: 26332-7
     */
    FluoroscopicAngiogramGuidanceForChangeOfCentralCatheterInCentralVeinLeftWContrastIV = "26332-7",
    /**
     * Code: 26333-5
     */
    FluoroscopicAngiogramGuidanceForChangeOfCentralCatheterInCentralVeinRightWContrastIV = "26333-5",
    /**
     * Code: 26334-3
     */
    MammogramGuidanceForCoreNeedlePercutaneousBiopsyOfBreastBilateral = "26334-3",
    /**
     * Code: 26335-0
     */
    MammogramGuidanceForCoreNeedlePercutaneousBiopsyOfBreastLeft = "26335-0",
    /**
     * Code: 26336-8
     */
    MammogramGuidanceForCoreNeedlePercutaneousBiopsyOfBreastRight = "26336-8",
    /**
     * Code: 26337-6
     */
    MammogramGuidanceForBiopsyOfBreastBilateral = "26337-6",
    /**
     * Code: 26338-4
     */
    MammogramGuidanceForBiopsyOfBreastLeft = "26338-4",
    /**
     * Code: 26339-2
     */
    MammogramGuidanceForBiopsyOfBreastRight = "26339-2",
    /**
     * Code: 26340-0
     */
    USGuidanceForBiopsyOfKidneyBilateral = "26340-0",
    /**
     * Code: 26341-8
     */
    USGuidanceForBiopsyOfKidneyLeft = "26341-8",
    /**
     * Code: 26342-6
     */
    USGuidanceForBiopsyOfKidneyRight = "26342-6",
    /**
     * Code: 26343-4
     */
    MammogramGuidanceForAspirationOfCystOfBreastBilateral = "26343-4",
    /**
     * Code: 26344-2
     */
    MammogramGuidanceForAspirationOfCystOfBreastLeft = "26344-2",
    /**
     * Code: 26345-9
     */
    MammogramGuidanceForAspirationOfCystOfBreastRight = "26345-9",
    /**
     * Code: 26346-7
     */
    BreastBilateralMammogramDiagnostic = "26346-7",
    /**
     * Code: 26347-5
     */
    BreastLeftMammogramDiagnostic = "26347-5",
    /**
     * Code: 26348-3
     */
    BreastRightMammogramDiagnostic = "26348-3",
    /**
     * Code: 26349-1
     */
    BreastBilateralMammogramDiagnosticLimited = "26349-1",
    /**
     * Code: 26350-9
     */
    BreastLeftMammogramDiagnosticLimited = "26350-9",
    /**
     * Code: 26351-7
     */
    BreastRightMammogramDiagnosticLimited = "26351-7",
    /**
     * Code: 26352-5
     */
    WristBilateralAndHandBilateralXRayBoneAge = "26352-5",
    /**
     * Code: 26353-3
     */
    WristLeftAndHandLeftXRayBoneAge = "26353-3",
    /**
     * Code: 26354-1
     */
    WristRightAndHandRightXRayBoneAge = "26354-1",
    /**
     * Code: 26355-8
     */
    HandBilateralXRayArthritis = "26355-8",
    /**
     * Code: 26356-6
     */
    HandLeftXRayArthritis = "26356-6",
    /**
     * Code: 26357-4
     */
    HandRightXRayArthritis = "26357-4",
    /**
     * Code: 26358-2
     */
    KneeBilateralXRayAPSingleViewStanding = "26358-2",
    /**
     * Code: 26359-0
     */
    KneeLeftXRayAPSingleViewStanding = "26359-0",
    /**
     * Code: 26360-8
     */
    KneeRightXRayAPSingleViewStanding = "26360-8",
    /**
     * Code: 26361-6
     */
    KneeBilateralXRayAPAndPAStanding = "26361-6",
    /**
     * Code: 26362-4
     */
    KneeLeftXRayAPAndPAStanding = "26362-4",
    /**
     * Code: 26363-2
     */
    KneeRightXRayAPAndPAStanding = "26363-2",
    /**
     * Code: 26364-0
     */
    KneeBilateralXRayAPAndLateralStanding = "26364-0",
    /**
     * Code: 26365-7
     */
    KneeLeftXRayAPAndLateralStanding = "26365-7",
    /**
     * Code: 26366-5
     */
    KneeRightXRayAPAndLateralStanding = "26366-5",
    /**
     * Code: 26368-1
     */
    BrachiocephalicArteryLeftFluoroscopicAngiogramAngioplastyWContrastIA = "26368-1",
    /**
     * Code: 26369-9
     */
    BrachiocephalicArteryRightFluoroscopicAngiogramAngioplastyWContrastIA = "26369-9",
    /**
     * Code: 26370-7
     */
    IliacArteryBilateralFluoroscopicAngiogramAngioplastyWContrastIA = "26370-7",
    /**
     * Code: 26371-5
     */
    IliacArteryLeftFluoroscopicAngiogramAngioplastyWContrastIA = "26371-5",
    /**
     * Code: 26372-3
     */
    IliacArteryRightFluoroscopicAngiogramAngioplastyWContrastIA = "26372-3",
    /**
     * Code: 26373-1
     */
    TibialArteryBilateralFluoroscopicAngiogramAngioplastyWContrastIA = "26373-1",
    /**
     * Code: 26374-9
     */
    TibialArteryLeftFluoroscopicAngiogramAngioplastyWContrastIA = "26374-9",
    /**
     * Code: 26375-6
     */
    TibialArteryRightFluoroscopicAngiogramAngioplastyWContrastIA = "26375-6",
    /**
     * Code: 26376-4
     */
    AdministrationOfVasodilatorIntoCatheterOfVeinBilateral = "26376-4",
    /**
     * Code: 26377-2
     */
    AdministrationOfVasodilatorIntoCatheterOfVeinLeft = "26377-2",
    /**
     * Code: 26378-0
     */
    AdministrationOfVasodilatorIntoCatheterOfVeinRight = "26378-0",
    /**
     * Code: 26379-8
     */
    HandBilateralXRay3Views = "26379-8",
    /**
     * Code: 26380-6
     */
    HandLeftXRay3Views = "26380-6",
    /**
     * Code: 26381-4
     */
    HandRightXRay3Views = "26381-4",
    /**
     * Code: 26382-2
     */
    ShoulderBilateralXRay3Views = "26382-2",
    /**
     * Code: 26383-0
     */
    ShoulderLeftXRay3Views = "26383-0",
    /**
     * Code: 26384-8
     */
    ShoulderRightXRay3Views = "26384-8",
    /**
     * Code: 26385-5
     */
    AnkleBilateralXRay2Views = "26385-5",
    /**
     * Code: 26386-3
     */
    AnkleLeftXRay2Views = "26386-3",
    /**
     * Code: 26387-1
     */
    AnkleRightXRay2Views = "26387-1",
    /**
     * Code: 26388-9
     */
    HandBilateralXRay2Views = "26388-9",
    /**
     * Code: 26389-7
     */
    HandLeftXRay2Views = "26389-7",
    /**
     * Code: 26390-5
     */
    HandRightXRay2Views = "26390-5",
    /**
     * Code: 26391-3
     */
    HumerusBilateralXRay2Views = "26391-3",
    /**
     * Code: 26392-1
     */
    HumerusLeftXRay2Views = "26392-1",
    /**
     * Code: 26393-9
     */
    HumerusRightXRay2Views = "26393-9",
    /**
     * Code: 26394-7
     */
    KneeBilateralXRay2Views = "26394-7",
    /**
     * Code: 26395-4
     */
    KneeLeftXRay2Views = "26395-4",
    /**
     * Code: 26396-2
     */
    KneeRightXRay2Views = "26396-2",
    /**
     * Code: 26397-0
     */
    PatellaBilateralXRay2Views = "26397-0",
    /**
     * Code: 26398-8
     */
    PatellaLeftXRay2Views = "26398-8",
    /**
     * Code: 26399-6
     */
    PatellaRightXRay2Views = "26399-6",
    /**
     * Code: 26400-2
     */
    HipBilateralXRaySingleView = "26400-2",
    /**
     * Code: 26401-0
     */
    HipLeftXRaySingleView = "26401-0",
    /**
     * Code: 26402-8
     */
    HipRightXRaySingleView = "26402-8",
    /**
     * Code: 26988-6
     */
    VAL18HydroxydeoxycorticosteroneMassTimeIn24HourUrine = "26988-6",
    /**
     * Code: 28561-9
     */
    PelvisXRay = "28561-9",
    /**
     * Code: 28564-3
     */
    SkullXRay = "28564-3",
    /**
     * Code: 28565-0
     */
    KneeXRay = "28565-0",
    /**
     * Code: 28566-8
     */
    SpineCT = "28566-8",
    /**
     * Code: 28567-6
     */
    HumerusXRay = "28567-6",
    /**
     * Code: 28568-4
     */
    PhysicianEmergencyDepartmentNote = "28568-4",
    /**
     * Code: 28569-2
     */
    PhysicianConsultingProgressNote = "28569-2",
    /**
     * Code: 28570-0
     */
    ProviderUnspecifiedProcedureNote = "28570-0",
    /**
     * Code: 28571-8
     */
    SpeechLanguagePathologyNote = "28571-8",
    /**
     * Code: 28572-6
     */
    DentistInitialAssessmentNote = "28572-6",
    /**
     * Code: 28573-4
     */
    PhysicianOperationNote = "28573-4",
    /**
     * Code: 28574-2
     */
    DischargeNote = "28574-2",
    /**
     * Code: 28575-9
     */
    NursePractitionerProgressNote = "28575-9",
    /**
     * Code: 28576-7
     */
    JointMRI = "28576-7",
    /**
     * Code: 28577-5
     */
    DentistProcedureNote = "28577-5",
    /**
     * Code: 28578-3
     */
    OccupationalTherapyNote = "28578-3",
    /**
     * Code: 28579-1
     */
    PhysicalTherapyNote = "28579-1",
    /**
     * Code: 28580-9
     */
    ChiropracticMedicineProgressNote = "28580-9",
    /**
     * Code: 28581-7
     */
    ChiropracticMedicineInitialAssessmentNote = "28581-7",
    /**
     * Code: 28582-5
     */
    HandXRay = "28582-5",
    /**
     * Code: 28583-3
     */
    DentistOperationNote = "28583-3",
    /**
     * Code: 28613-8
     */
    SpineXRay = "28613-8",
    /**
     * Code: 28614-6
     */
    LiverUS = "28614-6",
    /**
     * Code: 28615-3
     */
    AudiologyStudy = "28615-3",
    /**
     * Code: 28616-1
     */
    PhysicianTransferNote = "28616-1",
    /**
     * Code: 28617-9
     */
    DentistryProgressNote = "28617-9",
    /**
     * Code: 28618-7
     */
    DentistryNote = "28618-7",
    /**
     * Code: 28621-1
     */
    NursePractitionerInitialAssessmentNote = "28621-1",
    /**
     * Code: 28622-9
     */
    NurseDischargeAssessment = "28622-9",
    /**
     * Code: 28623-7
     */
    NurseProgressNote = "28623-7",
    /**
     * Code: 28624-5
     */
    PodiatryOperationNote = "28624-5",
    /**
     * Code: 28625-2
     */
    PodiatryProcedureNote = "28625-2",
    /**
     * Code: 28626-0
     */
    PhysicianHistoryAndPhysicalNote = "28626-0",
    /**
     * Code: 28627-8
     */
    PsychiatryProgressNote = "28627-8",
    /**
     * Code: 28628-6
     */
    PsychiatryNote = "28628-6",
    /**
     * Code: 28629-4
     */
    PerimetryStudy = "28629-4",
    /**
     * Code: 28630-2
     */
    TonometryStudy = "28630-2",
    /**
     * Code: 28631-0
     */
    VisualAcuityStudy = "28631-0",
    /**
     * Code: 28632-8
     */
    HeterophoriaStudy = "28632-8",
    /**
     * Code: 28633-6
     */
    PolysomnographySleepStudy = "28633-6",
    /**
     * Code: 28635-1
     */
    PsychiatryInitialAssessmentNote = "28635-1",
    /**
     * Code: 28636-9
     */
    ProviderUnspecifiedInitialAssessment = "28636-9",
    /**
     * Code: 28651-8
     */
    NurseTransferNote = "28651-8",
    /**
     * Code: 28653-4
     */
    SocialWorkNote = "28653-4",
    /**
     * Code: 28654-2
     */
    PhysicianAttendingInitialAssessmentNote = "28654-2",
    /**
     * Code: 28655-9
     */
    PhysicianAttendingDischargeSummary = "28655-9",
    /**
     * Code: 28656-7
     */
    SocialWorkProgressNote = "28656-7",
    /**
     * Code: 29111-2
     */
    PhotoDocumentationEyeRight = "29111-2",
    /**
     * Code: 29112-0
     */
    PhotoDocumentationEyeLeft = "29112-0",
    /**
     * Code: 29206-0
     */
    SpeechTherapyServiceAttachment = "29206-0",
    /**
     * Code: 29252-4
     */
    ChestCTWOContrast = "29252-4",
    /**
     * Code: 29272-2
     */
    EyeUltrasoundStudy = "29272-2",
    /**
     * Code: 29749-9
     */
    DialysisRecords = "29749-9",
    /**
     * Code: 29750-7
     */
    NeonatalIntensiveCareRecords = "29750-7",
    /**
     * Code: 29751-5
     */
    CriticalCareRecords = "29751-5",
    /**
     * Code: 29752-3
     */
    PerioperativeRecords = "29752-3",
    /**
     * Code: 29753-1
     */
    NurseInitialAssessmentNote = "29753-1",
    /**
     * Code: 29754-9
     */
    NystagmogramStudy = "29754-9",
    /**
     * Code: 29755-6
     */
    NerveConductionStudy = "29755-6",
    /**
     * Code: 29756-4
     */
    PeritoneoscopyStudy = "29756-4",
    /**
     * Code: 29757-2
     */
    ColposcopyStudy = "29757-2",
    /**
     * Code: 29761-4
     */
    DentistDischargeSummary = "29761-4",
    /**
     * Code: 30578-9
     */
    CTGuidanceForAbscessDrainageOfUnspecifiedBodyRegion = "30578-9",
    /**
     * Code: 30579-7
     */
    CTGuidanceForInjectionOfSpineFacetJoint = "30579-7",
    /**
     * Code: 30580-5
     */
    CTGuidanceForFineNeedleAspirationOfUnspecifiedBodyRegion = "30580-5",
    /**
     * Code: 30581-3
     */
    CTGuidanceForRadiationTreatmentOfUnspecifiedBodyRegionWContrastIV = "30581-3",
    /**
     * Code: 30582-1
     */
    CTGuidanceForRadiationTreatmentOfUnspecifiedBodyRegionWOContrast = "30582-1",
    /**
     * Code: 30583-9
     */
    InternalAuditoryCanalCTWContrastIV = "30583-9",
    /**
     * Code: 30584-7
     */
    InternalAuditoryCanalCTWOContrast = "30584-7",
    /**
     * Code: 30585-4
     */
    NasopharynxAndNeckCTWOContrast = "30585-4",
    /**
     * Code: 30586-2
     */
    NeckCTWAndWOContrastIV = "30586-2",
    /**
     * Code: 30587-0
     */
    OrbitBilateralCTWOContrast = "30587-0",
    /**
     * Code: 30588-8
     */
    SinusesCT = "30588-8",
    /**
     * Code: 30589-6
     */
    PetrousBoneCTWOContrast = "30589-6",
    /**
     * Code: 30590-4
     */
    PituitaryAndSellaTurcicaCTWContrastIV = "30590-4",
    /**
     * Code: 30591-2
     */
    PituitaryAndSellaTurcicaCTWOContrast = "30591-2",
    /**
     * Code: 30592-0
     */
    SpineCervicalCTWOContrast = "30592-0",
    /**
     * Code: 30593-8
     */
    HeadVesselsCTAngiogramWAndWOContrastIV = "30593-8",
    /**
     * Code: 30594-6
     */
    NeckVesselsCTAngiogramWAndWOContrastIV = "30594-6",
    /**
     * Code: 30595-3
     */
    CTGuidanceForFineNeedleAspirationOfLung = "30595-3",
    /**
     * Code: 30596-1
     */
    SpineThoracicCTWContrastIT = "30596-1",
    /**
     * Code: 30597-9
     */
    SpineThoracicCTWOContrast = "30597-9",
    /**
     * Code: 30598-7
     */
    ChestCTWAndWOContrastIV = "30598-7",
    /**
     * Code: 30599-5
     */
    AbdomenCTWContrast = "30599-5",
    /**
     * Code: 30600-1
     */
    SmallBowelCTViewsEnteroclysisWContrastPOViaDuodenalIntubation = "30600-1",
    /**
     * Code: 30601-9
     */
    CTGuidanceForBiopsyOfAbdomen = "30601-9",
    /**
     * Code: 30602-7
     */
    CTGuidanceForFineNeedleAspirationOfAbdomen = "30602-7",
    /**
     * Code: 30603-5
     */
    CTGuidanceForFineNeedleAspirationOfLiver = "30603-5",
    /**
     * Code: 30604-3
     */
    CTGuidanceForBiopsyOfPancreas = "30604-3",
    /**
     * Code: 30605-0
     */
    CTGuidanceForFineNeedleAspirationOfPancreas = "30605-0",
    /**
     * Code: 30606-8
     */
    CTGuidanceForFineNeedleAspirationOfPelvis = "30606-8",
    /**
     * Code: 30607-6
     */
    CTGuidanceForBiopsyOfKidneyBilateral = "30607-6",
    /**
     * Code: 30608-4
     */
    CTGuidanceForFineNeedleAspirationOfKidneyBilateral = "30608-4",
    /**
     * Code: 30609-2
     */
    CTGuidanceForBiopsyOfSpleen = "30609-2",
    /**
     * Code: 30610-0
     */
    CTGuidanceForFineNeedleAspirationOfSpleen = "30610-0",
    /**
     * Code: 30611-8
     */
    LiverCTWOContrast = "30611-8",
    /**
     * Code: 30612-6
     */
    LiverCTWAndWOContrastIV = "30612-6",
    /**
     * Code: 30613-4
     */
    PancreasCTWOContrast = "30613-4",
    /**
     * Code: 30614-2
     */
    PancreasCTWAndWOContrastIV = "30614-2",
    /**
     * Code: 30615-9
     */
    PelvisCTWOContrast = "30615-9",
    /**
     * Code: 30616-7
     */
    PelvisCTWAndWOContrastIV = "30616-7",
    /**
     * Code: 30619-1
     */
    SacroiliacJointCT = "30619-1",
    /**
     * Code: 30620-9
     */
    SpineLumbarCTWOContrast = "30620-9",
    /**
     * Code: 30621-7
     */
    SpleenCTWOContrast = "30621-7",
    /**
     * Code: 30622-5
     */
    SpleenCTWContrastIV = "30622-5",
    /**
     * Code: 30623-3
     */
    PelvisVesselsCTAngiogramWAndWOContrastIV = "30623-3",
    /**
     * Code: 30624-1
     */
    LowerExtremityCTWContrastIV = "30624-1",
    /**
     * Code: 30625-8
     */
    LowerExtremityCTWOContrast = "30625-8",
    /**
     * Code: 30626-6
     */
    UpperExtremityCTWContrastIV = "30626-6",
    /**
     * Code: 30627-4
     */
    UpperExtremityCTWOContrast = "30627-4",
    /**
     * Code: 30628-2
     */
    FluoroscopyGuidanceForRemovalOfForeignBodyFromUnspecifiedBodyRegion = "30628-2",
    /**
     * Code: 30629-0
     */
    FluoroscopyGuidanceForProcedureOfUnspecifiedBodyRegion = "30629-0",
    /**
     * Code: 30630-8
     */
    HeadCisternFluoroscopyVideoWContrast = "30630-8",
    /**
     * Code: 30631-6
     */
    ChestFluoroscopy = "30631-6",
    /**
     * Code: 30632-4
     */
    DiaphragmFluoroscopyMotion = "30632-4",
    /**
     * Code: 30633-2
     */
    EsophagusFluoroscopyWBariumContrastPO = "30633-2",
    /**
     * Code: 30634-0
     */
    FluoroscopyGuidanceForBiopsyOfLung = "30634-0",
    /**
     * Code: 30635-7
     */
    GastrointestineUpperFluoroscopyAndAPWContrastPO = "30635-7",
    /**
     * Code: 30636-5
     */
    ColonFluoroscopyReductionWViewsWContrastPR = "30636-5",
    /**
     * Code: 30637-3
     */
    FluoroscopyGuidanceForPlacementOfTubeInGastrointestine = "30637-3",
    /**
     * Code: 30638-1
     */
    FluoroscopyGuidanceForInjectionOfHip = "30638-1",
    /**
     * Code: 30639-9
     */
    VesselFluoroscopicAngiogramWContrast = "30639-9",
    /**
     * Code: 30640-7
     */
    VeinFluoroscopicAngiogramAngioplastyWContrastIV = "30640-7",
    /**
     * Code: 30641-5
     */
    VeinFluoroscopicAngiogramAdditionalAngioplastyWContrastIV = "30641-5",
    /**
     * Code: 30642-3
     */
    UnspecifiedBodyRegionFluoroscopySingleView = "30642-3",
    /**
     * Code: 30643-1
     */
    USGuidanceForPlacementOfCatheterInCentralVein = "30643-1",
    /**
     * Code: 30644-9
     */
    USGuidanceForPlacementOfCatheterInCentralVeinTunneled = "30644-9",
    /**
     * Code: 30645-6
     */
    SuperiorVenaCavaFluoroscopicAngiogramWContrastIV = "30645-6",
    /**
     * Code: 30646-4
     */
    FluoroscopyGuidanceForChangeOfTubeInSinusTractWContrast = "30646-4",
    /**
     * Code: 30647-2
     */
    BiliaryDuctsAndGallbladderFluoroscopyWContrastViaTTube = "30647-2",
    /**
     * Code: 30648-0
     */
    PeripheralArteryFluoroscopicAngiogramAngioplastyWContrastIA = "30648-0",
    /**
     * Code: 30649-8
     */
    PeripheralArteryFluoroscopicAngiogramAdditionalAngioplastyWContrastIA = "30649-8",
    /**
     * Code: 30650-6
     */
    UnspecifiedBodyRegionFluoroscopyForShunt = "30650-6",
    /**
     * Code: 30651-4
     */
    USGuidanceForCoreNeedleBiopsyOfBreast = "30651-4",
    /**
     * Code: 30652-2
     */
    USGuidanceForFineNeedleBiopsyOfBreast = "30652-2",
    /**
     * Code: 30653-0
     */
    USGuidanceForAspirationOfCystOfBreast = "30653-0",
    /**
     * Code: 30654-8
     */
    ThoracicOutletMRIWOContrast = "30654-8",
    /**
     * Code: 30655-5
     */
    HeadCisternMRI = "30655-5",
    /**
     * Code: 30656-3
     */
    MRIGuidanceStereotacticForLocalizationInBrainWContrastIV = "30656-3",
    /**
     * Code: 30657-1
     */
    BrainMRIWOContrast = "30657-1",
    /**
     * Code: 30658-9
     */
    InternalAuditoryCanalMRIWOContrast = "30658-9",
    /**
     * Code: 30659-7
     */
    InternalAuditoryCanalMRIWAndWOContrastIV = "30659-7",
    /**
     * Code: 30660-5
     */
    NeckMRIWOContrast = "30660-5",
    /**
     * Code: 30661-3
     */
    OrbitBilateralMRIWOContrast = "30661-3",
    /**
     * Code: 30662-1
     */
    SinusesMRIWOContrast = "30662-1",
    /**
     * Code: 30663-9
     */
    SinusesMRIWAndWOContrastIV = "30663-9",
    /**
     * Code: 30664-7
     */
    MRIGuidanceForRadiationTreatmentOfUnspecifiedBodyRegionWContrastIV = "30664-7",
    /**
     * Code: 30665-4
     */
    MRIGuidanceForRadiationTreatmentOfUnspecifiedBodyRegionWOContrast = "30665-4",
    /**
     * Code: 30666-2
     */
    PituitaryAndSellaTurcicaMRIWOContrast = "30666-2",
    /**
     * Code: 30667-0
     */
    SpineCervicalMRIWOContrast = "30667-0",
    /**
     * Code: 30668-8
     */
    AbdomenMRIWOContrast = "30668-8",
    /**
     * Code: 30669-6
     */
    LiverMRIWOContrast = "30669-6",
    /**
     * Code: 30670-4
     */
    LiverMRIWAndWOContrastIV = "30670-4",
    /**
     * Code: 30671-2
     */
    PelvisAndHipMRIWOContrast = "30671-2",
    /**
     * Code: 30672-0
     */
    PelvisAndHipMRIWAndWOContrastIV = "30672-0",
    /**
     * Code: 30673-8
     */
    PelvisMRIWOContrast = "30673-8",
    /**
     * Code: 30674-6
     */
    PelvisMRIWAndWOContrastIV = "30674-6",
    /**
     * Code: 30675-3
     */
    ProstateMRI = "30675-3",
    /**
     * Code: 30678-7
     */
    SpineLumbarMRIWContrastIV = "30678-7",
    /**
     * Code: 30679-5
     */
    SpineLumbarMRIWOContrast = "30679-5",
    /**
     * Code: 30680-3
     */
    AnkleMRIWOContrast = "30680-3",
    /**
     * Code: 30681-1
     */
    FootMRIWOContrast = "30681-1",
    /**
     * Code: 30682-9
     */
    FootMRIWAndWOContrastIV = "30682-9",
    /**
     * Code: 30683-7
     */
    ForearmMRIWOContrast = "30683-7",
    /**
     * Code: 30684-5
     */
    ForearmMRIWAndWOContrastIV = "30684-5",
    /**
     * Code: 30685-2
     */
    HandMRIWOContrast = "30685-2",
    /**
     * Code: 30686-0
     */
    HandMRIWAndWOContrastIV = "30686-0",
    /**
     * Code: 30687-8
     */
    HipMRIWOContrast = "30687-8",
    /**
     * Code: 30688-6
     */
    HipMRIWAndWOContrastIV = "30688-6",
    /**
     * Code: 30689-4
     */
    UpperArmMRIWOContrast = "30689-4",
    /**
     * Code: 30690-2
     */
    UpperArmMRIWAndWOContrastIV = "30690-2",
    /**
     * Code: 30691-0
     */
    KneeMRIWOContrast = "30691-0",
    /**
     * Code: 30692-8
     */
    LowerExtremityMRI = "30692-8",
    /**
     * Code: 30693-6
     */
    ShoulderMRIWOContrast = "30693-6",
    /**
     * Code: 30694-4
     */
    ThyroidScanAndUptakeSingle = "30694-4",
    /**
     * Code: 30695-1
     */
    ThyroidScan = "30695-1",
    /**
     * Code: 30696-9
     */
    ScrotumAndTesticleScan = "30696-9",
    /**
     * Code: 30697-7
     */
    PulmonarySystemScanVentilationAndPerfusionWRadionuclideInhaledAndWRadionuclideIV = "30697-7",
    /**
     * Code: 30698-5
     */
    USGuidanceForAspirationOfCystOfUnspecifiedBodyRegion = "30698-5",
    /**
     * Code: 30699-3
     */
    USGuidanceForDrainageOfUnspecifiedBodyRegion = "30699-3",
    /**
     * Code: 30700-9
     */
    USGuidanceForNeedleBiopsyOfUnspecifiedBodyRegion = "30700-9",
    /**
     * Code: 30701-7
     */
    UnspecifiedBodyRegionUSDuringSurgery = "30701-7",
    /**
     * Code: 30702-5
     */
    USGuidanceForInjectionOfThyroid = "30702-5",
    /**
     * Code: 30703-3
     */
    USGuidanceForAspirationOfPericardialSpace = "30703-3",
    /**
     * Code: 30704-1
     */
    AbdomenUSLimited = "30704-1",
    /**
     * Code: 30705-8
     */
    UterusAndFallopianTubesUS = "30705-8",
    /**
     * Code: 30706-6
     */
    LiverUSDuringSurgery = "30706-6",
    /**
     * Code: 30709-0
     */
    LowerExtremityUS = "30709-0",
    /**
     * Code: 30710-8
     */
    UpperExtremityUS = "30710-8",
    /**
     * Code: 30711-6
     */
    HipUSDevelopmentalJointAssessment = "30711-6",
    /**
     * Code: 30712-4
     */
    HipUSWODevelopmentalJointAssessment = "30712-4",
    /**
     * Code: 30713-2
     */
    SpineXRayWRightBendingAndWLeftBending = "30713-2",
    /**
     * Code: 30714-0
     */
    SpineThoracicAndLumbarXRayScoliosisAP = "30714-0",
    /**
     * Code: 30715-7
     */
    SpineThoracicAndLumbarXRayScoliosisAPAndLateral = "30715-7",
    /**
     * Code: 30716-5
     */
    SpineThoracicAndLumbarXRayScoliosisLateral = "30716-5",
    /**
     * Code: 30717-3
     */
    SpineThoracicAndLumbarXRayScoliosisStanding = "30717-3",
    /**
     * Code: 30719-9
     */
    TemporomandibularJointXRayTomograph = "30719-9",
    /**
     * Code: 30720-7
     */
    OrbitBilateralXRayForForeignBody = "30720-7",
    /**
     * Code: 30721-5
     */
    SinusesXRayPAAndLateral = "30721-5",
    /**
     * Code: 30722-3
     */
    SkullXRaySingleViewPortable = "30722-3",
    /**
     * Code: 30723-1
     */
    SkullXRayPortable = "30723-1",
    /**
     * Code: 30724-9
     */
    SpineCervicalXRaySingleViewPortable = "30724-9",
    /**
     * Code: 30725-6
     */
    SpineCervicalXRayAPSingleView = "30725-6",
    /**
     * Code: 30726-4
     */
    SpineCervicalXRayAPAndLateralPortable = "30726-4",
    /**
     * Code: 30727-2
     */
    SpineCervicalXRayAPPortableSingleView = "30727-2",
    /**
     * Code: 30729-8
     */
    SpineCervicalOdontoidAndCervicalAxisXRayAPPortableSingleView = "30729-8",
    /**
     * Code: 30730-6
     */
    ZygomaticArchBilateralXRayPortable = "30730-6",
    /**
     * Code: 30731-4
     */
    ZygomaticArchXRayPortable = "30731-4",
    /**
     * Code: 30733-0
     */
    ChestXRayRightAndLeftObliquePortable = "30733-0",
    /**
     * Code: 30734-8
     */
    ChestXRayAPLateralDecubitus = "30734-8",
    /**
     * Code: 30735-5
     */
    ChestXRayAPLateralDecubitusPortable = "30735-5",
    /**
     * Code: 30736-3
     */
    ChestXRayWInspirationAndExpiration = "30736-3",
    /**
     * Code: 30737-1
     */
    ChestXRayLeftLateral = "30737-1",
    /**
     * Code: 30738-9
     */
    ChestXRayLeftLateralPortable = "30738-9",
    /**
     * Code: 30739-7
     */
    ChestXRayRightOrLeftObliquePortable = "30739-7",
    /**
     * Code: 30740-5
     */
    ChestXRayRightOrLeftOblique = "30740-5",
    /**
     * Code: 30741-3
     */
    ChestXRayPAAndLateralAndLordoticUpright = "30741-3",
    /**
     * Code: 30742-1
     */
    ChestXRayPAAndLateralAndRightObliqueAndLeftOblique = "30742-1",
    /**
     * Code: 30743-9
     */
    ChestXRayPAAndLateralAndRightObliqueAndLeftObliquePortable = "30743-9",
    /**
     * Code: 30744-7
     */
    ChestXRayPAAndLateralAndRightOrLeftOblique = "30744-7",
    /**
     * Code: 30745-4
     */
    ChestXRay = "30745-4",
    /**
     * Code: 30746-2
     */
    ChestXRayPortable = "30746-2",
    /**
     * Code: 30747-0
     */
    RibsXRayPortable = "30747-0",
    /**
     * Code: 30748-8
     */
    ShoulderXRaySingleView = "30748-8",
    /**
     * Code: 30749-6
     */
    ShoulderXRaySingleViewPortable = "30749-6",
    /**
     * Code: 30750-4
     */
    ShoulderXRay5Views = "30750-4",
    /**
     * Code: 30751-2
     */
    ShoulderXRayWestPoint = "30751-2",
    /**
     * Code: 30752-0
     */
    SpineThoracicXRayAPSingleView = "30752-0",
    /**
     * Code: 30753-8
     */
    SpineThoracicXRayAPAndLateral = "30753-8",
    /**
     * Code: 30754-6
     */
    SpineThoracicXRayAPAndLateralPortable = "30754-6",
    /**
     * Code: 30755-3
     */
    SpineThoracicXRayAPPortableSingleView = "30755-3",
    /**
     * Code: 30756-1
     */
    SpineThoracicXRayLateral = "30756-1",
    /**
     * Code: 30757-9
     */
    SpineThoracicXRayLateralPortable = "30757-9",
    /**
     * Code: 30758-7
     */
    SpineThoracicXRayObliqueSingleView = "30758-7",
    /**
     * Code: 30759-5
     */
    SpineThoracicXRayObliquePortable = "30759-5",
    /**
     * Code: 30760-3
     */
    KidneyBilateralXRayTomograph3ViewsWContrastIV = "30760-3",
    /**
     * Code: 30761-1
     */
    KidneyBilateralFluoroscopyWContrastRetrogradeViaUrethra = "30761-1",
    /**
     * Code: 30762-9
     */
    AbdomenXRayTomograph = "30762-9",
    /**
     * Code: 30763-7
     */
    AbdomenXRayAPAndLateralCrosstablePortable = "30763-7",
    /**
     * Code: 30764-5
     */
    AcetabulumBilateralXRayPortable = "30764-5",
    /**
     * Code: 30765-2
     */
    AcetabulumXRayPortable = "30765-2",
    /**
     * Code: 30766-0
     */
    PelvisXRay3Views = "30766-0",
    /**
     * Code: 30767-8
     */
    PelvisAndHipXRay = "30767-8",
    /**
     * Code: 30768-6
     */
    PelvisAndHipBilateralXRay = "30768-6",
    /**
     * Code: 30769-4
     */
    PelvisAndHipBilateralXRayMaxAbduction = "30769-4",
    /**
     * Code: 30770-2
     */
    PelvisAndHipXRayAPAndLateralFrog = "30770-2",
    /**
     * Code: 30771-0
     */
    PelvisXRayInletAndOutlet = "30771-0",
    /**
     * Code: 30772-8
     */
    PelvisXRayPortable = "30772-8",
    /**
     * Code: 30773-6
     */
    SpineLumbarXRaySingleView = "30773-6",
    /**
     * Code: 30774-4
     */
    SpineLumbarXRaySingleViewPortable = "30774-4",
    /**
     * Code: 30775-1
     */
    SpineLumbarXRay3Views = "30775-1",
    /**
     * Code: 30776-9
     */
    SpineLumbarXRay3ViewsPortable = "30776-9",
    /**
     * Code: 30777-7
     */
    SpineLumbarXRayAPSingleView = "30777-7",
    /**
     * Code: 30778-5
     */
    SpineLumbarXRayObliqueSingleView = "30778-5",
    /**
     * Code: 30779-3
     */
    AnkleXRayAPAndLateral = "30779-3",
    /**
     * Code: 30780-1
     */
    FingerSecondXRay = "30780-1",
    /**
     * Code: 30781-9
     */
    FingerThirdXRay = "30781-9",
    /**
     * Code: 30782-7
     */
    FingerFourthXRay = "30782-7",
    /**
     * Code: 30783-5
     */
    FingerFifthXRay = "30783-5",
    /**
     * Code: 30784-3
     */
    FootXRay2Views = "30784-3",
    /**
     * Code: 30785-0
     */
    FootXRayWForcedDorsiflexion = "30785-0",
    /**
     * Code: 30786-8
     */
    HipXRayLateralFrog = "30786-8",
    /**
     * Code: 30787-6
     */
    JointXRaySingleView = "30787-6",
    /**
     * Code: 30788-4
     */
    KneeXRay3Views = "30788-4",
    /**
     * Code: 30789-2
     */
    KneeXRay4Views = "30789-2",
    /**
     * Code: 30790-0
     */
    KneeXRayTunnel = "30790-0",
    /**
     * Code: 30791-8
     */
    PatellaXRay = "30791-8",
    /**
     * Code: 30792-6
     */
    PatellaXRayPortable = "30792-6",
    /**
     * Code: 30793-4
     */
    WristXRayAPAndLateral = "30793-4",
    /**
     * Code: 30794-2
     */
    BreastMRI = "30794-2",
    /**
     * Code: 30795-9
     */
    BreastBilateralMRI = "30795-9",
    /**
     * Code: 30796-7
     */
    ElbowMRIWOContrast = "30796-7",
    /**
     * Code: 30797-5
     */
    SpineLumbarXRay5Views = "30797-5",
    /**
     * Code: 30799-1
     */
    HeadCTWOContrast = "30799-1",
    /**
     * Code: 30800-7
     */
    MRIGuidanceStereotacticForLocalizationInBrainWOContrast = "30800-7",
    /**
     * Code: 30801-5
     */
    FacialBonesAndMaxillaCTWContrastIV = "30801-5",
    /**
     * Code: 30802-3
     */
    FacialBonesAndMaxillaCTWOContrast = "30802-3",
    /**
     * Code: 30803-1
     */
    FacialBonesAndMaxillaCTWAndWOContrastIV = "30803-1",
    /**
     * Code: 30804-9
     */
    ChestVesselsCTAngiogramWAndWOContrastIV = "30804-9",
    /**
     * Code: 30805-6
     */
    AbdominalVesselsCTAngiogramWAndWOContrastIV = "30805-6",
    /**
     * Code: 30806-4
     */
    AortaAndFemoralArteryBilateralCTAngiogramWAndWOContrastIV = "30806-4",
    /**
     * Code: 30807-2
     */
    LowerExtremityVesselsCTAngiogramWAndWOContrastIV = "30807-2",
    /**
     * Code: 30808-0
     */
    SpineCervicalAndThoracicAndLumbarFluoroscopyWContrastIT = "30808-0",
    /**
     * Code: 30809-8
     */
    UpperGastrointestineAndSmallBowelFluoroscopyWContrastPO = "30809-8",
    /**
     * Code: 30810-6
     */
    LacrimalDuctFluoroscopyWContrastIntraLacrimalDuct = "30810-6",
    /**
     * Code: 30811-4
     */
    PosteriorFossaFluoroscopyWContrastIT = "30811-4",
    /**
     * Code: 30812-2
     */
    FluoroscopyGuidanceForInjectionOfSpineCervicalFacetJoint = "30812-2",
    /**
     * Code: 30813-0
     */
    LungBilateralXRayWContrastIntrabronchial = "30813-0",
    /**
     * Code: 30814-8
     */
    FluoroscopyGuidanceForInjectionOfSpineThoracicFacetJoint = "30814-8",
    /**
     * Code: 30815-5
     */
    FluoroscopyGuidanceForEndoscopyOfBiliaryDuctsAndPancreaticDuctWContrastRetrograde = "30815-5",
    /**
     * Code: 30816-3
     */
    PeritoneumFluoroscopicAngiogramWContrastPercutaneous = "30816-3",
    /**
     * Code: 30817-1
     */
    FluoroscopyGuidanceForInjectionOfSpineLumbarFacetJoint = "30817-1",
    /**
     * Code: 30818-9
     */
    FluoroscopyGuidanceForCatheterizationOfFallopianTubesTranscervical = "30818-9",
    /**
     * Code: 30819-7
     */
    EpiduralVeinsFluoroscopicAngiogramWContrastIV = "30819-7",
    /**
     * Code: 30820-5
     */
    CarotidArteryExternalBilateralFluoroscopicAngiogramWContrastIA = "30820-5",
    /**
     * Code: 30821-3
     */
    CarotidArteryExternalFluoroscopicAngiogramWContrastIA = "30821-3",
    /**
     * Code: 30822-1
     */
    HeadArteryBilateralAndNeckArteryBilateralFluoroscopicAngiogramWContrastIA = "30822-1",
    /**
     * Code: 30823-9
     */
    HeadArteryAndNeckArteryFluoroscopicAngiogramWContrastIA = "30823-9",
    /**
     * Code: 30824-7
     */
    IntercranialVesselAndNeckVesselFluoroscopicAngiogramWContrast = "30824-7",
    /**
     * Code: 30825-4
     */
    OrbitVeinsFluoroscopicAngiogramWContrastIV = "30825-4",
    /**
     * Code: 30826-2
     */
    SagittalSinusAndJugularVeinsFluoroscopicAngiogramWContrastIV = "30826-2",
    /**
     * Code: 30827-0
     */
    SagittalSinusVeinFluoroscopicAngiogramWContrastIV = "30827-0",
    /**
     * Code: 30828-8
     */
    BrachialArteryFluoroscopicAngiogramWContrastIA = "30828-8",
    /**
     * Code: 30829-6
     */
    InternalMammaryArteryFluoroscopicAngiogramWContrastIA = "30829-6",
    /**
     * Code: 30830-4
     */
    PulmonaryArteryBilateralFluoroscopicAngiogramWContrastIA = "30830-4",
    /**
     * Code: 30831-2
     */
    AdrenalArteryBilateralFluoroscopicAngiogramWContrastIA = "30831-2",
    /**
     * Code: 30832-0
     */
    AdrenalArteryFluoroscopicAngiogramWContrastIA = "30832-0",
    /**
     * Code: 30833-8
     */
    PelvisArteriesFluoroscopicAngiogramWContrastIA = "30833-8",
    /**
     * Code: 30834-6
     */
    RenalArteryBilateralFluoroscopicAngiogramWContrastIA = "30834-6",
    /**
     * Code: 30836-1
     */
    VisceralArteryFluoroscopicAngiogramAngioplastyWContrastIA = "30836-1",
    /**
     * Code: 30837-9
     */
    AortaAbdominalFluoroscopicAngiogramWContrastIA = "30837-9",
    /**
     * Code: 30838-7
     */
    AortaAndFemoralArteryBilateralFluoroscopicAngiogramRunoffWContrastIA = "30838-7",
    /**
     * Code: 30839-5
     */
    LymphaticsAbdominalFluoroscopyWContrastIntraLymphatic = "30839-5",
    /**
     * Code: 30840-3
     */
    LymphaticsAbdominalBilateralFluoroscopyWContrastIntraLymphatic = "30840-3",
    /**
     * Code: 30841-1
     */
    PortalVeinFluoroscopicAngiogramWContrastTranshepatic = "30841-1",
    /**
     * Code: 30842-9
     */
    PortalVeinFluoroscopicAngiogramWContrastTranshepaticAndWHemodynamics = "30842-9",
    /**
     * Code: 30843-7
     */
    AdrenalVeinFluoroscopicAngiogramWContrastIV = "30843-7",
    /**
     * Code: 30844-5
     */
    AdrenalVeinBilateralFluoroscopicAngiogramWContrastIV = "30844-5",
    /**
     * Code: 30845-2
     */
    InferiorVenaCavaFluoroscopicAngiogramWContrastIV = "30845-2",
    /**
     * Code: 30846-0
     */
    RenalVeinBilateralFluoroscopicAngiogramWContrastIV = "30846-0",
    /**
     * Code: 30847-8
     */
    RenalVeinFluoroscopicAngiogramWContrastIV = "30847-8",
    /**
     * Code: 30848-6
     */
    ExtremityArteriesFluoroscopicAngiogramWContrastIA = "30848-6",
    /**
     * Code: 30849-4
     */
    ExtremityArteriesBilateralFluoroscopicAngiogramWContrastIA = "30849-4",
    /**
     * Code: 30850-2
     */
    ExtremityLymphaticsFluoroscopyWContrastIntraLymphatic = "30850-2",
    /**
     * Code: 30851-0
     */
    ExtremityLymphaticsBilateralFluoroscopyWContrastIntraLymphatic = "30851-0",
    /**
     * Code: 30852-8
     */
    PeripheralVeinsBilateralFluoroscopicAngiogramWContrastIV = "30852-8",
    /**
     * Code: 30853-6
     */
    BreastDuctUSWContrastIntraDuct = "30853-6",
    /**
     * Code: 30854-4
     */
    SpineCervicalAndThoracicAndLumbarMRIWOContrast = "30854-4",
    /**
     * Code: 30855-1
     */
    SpineCervicalAndThoracicAndLumbarMRIWAndWOContrastIV = "30855-1",
    /**
     * Code: 30856-9
     */
    HeadVesselsMRIAngiogram = "30856-9",
    /**
     * Code: 30857-7
     */
    NervesCranialMRI = "30857-7",
    /**
     * Code: 30858-5
     */
    HeadVeinsMRIAngiogram = "30858-5",
    /**
     * Code: 30859-3
     */
    CarotidVesselsAndNeckVesselsMRIAngiogram = "30859-3",
    /**
     * Code: 30860-1
     */
    NasopharynxMRI = "30860-1",
    /**
     * Code: 30861-9
     */
    AorticArchAndNeckVesselsMRIAngiogram = "30861-9",
    /**
     * Code: 30862-7
     */
    ChestVesselsMRIAngiogram = "30862-7",
    /**
     * Code: 30863-5
     */
    AbdominalAortaAndArteriesMRIAngiogram = "30863-5",
    /**
     * Code: 30864-3
     */
    AbdominalVeinsAndIVCMRIAngiogram = "30864-3",
    /**
     * Code: 30865-0
     */
    CeliacVesselsAndSuperiorMesentericVesselsMRIAngiogram = "30865-0",
    /**
     * Code: 30866-8
     */
    LumbarPlexusMRI = "30866-8",
    /**
     * Code: 30867-6
     */
    PelvisVesselsMRIAngiogram = "30867-6",
    /**
     * Code: 30868-4
     */
    RenalVesselsMRIAngiogram = "30868-4",
    /**
     * Code: 30869-2
     */
    LowerLegMRIWOContrast = "30869-2",
    /**
     * Code: 30870-0
     */
    LowerLegMRIWAndWOContrastIV = "30870-0",
    /**
     * Code: 30871-8
     */
    FemoralVesselsMRIAngiogram = "30871-8",
    /**
     * Code: 30872-6
     */
    FootVesselsMRIAngiogram = "30872-6",
    /**
     * Code: 30873-4
     */
    ForearmVesselsMRIAngiogram = "30873-4",
    /**
     * Code: 30874-2
     */
    LowerExtremityVesselsMRIAngiogram = "30874-2",
    /**
     * Code: 30875-9
     */
    UpperExtremityJointMRI = "30875-9",
    /**
     * Code: 30876-7
     */
    ExtremityVeinsMRIAngiogram = "30876-7",
    /**
     * Code: 30877-5
     */
    KidneyBilateralAndRenalVesselsScan = "30877-5",
    /**
     * Code: 30878-3
     */
    USGuidanceForAspirationOfUnspecifiedBodyRegion = "30878-3",
    /**
     * Code: 30880-9
     */
    HeadVesselsAndNeckVesselsUSDoppler = "30880-9",
    /**
     * Code: 30881-7
     */
    LowerExtremityVeinUSDoppler = "30881-7",
    /**
     * Code: 30882-5
     */
    UpperExtremityVeinUSDoppler = "30882-5",
    /**
     * Code: 30883-3
     */
    CoccyxXRay = "30883-3",
    /**
     * Code: 30884-1
     */
    SacrumXRay = "30884-1",
    /**
     * Code: 30885-8
     */
    PelvisSymphysisPubisXRay = "30885-8",
    /**
     * Code: 30887-4
     */
    RenalVesselsMRIAngiogramWContrastIV = "30887-4",
    /**
     * Code: 30888-2
     */
    TibioperonealVesselsMRIAngiogram = "30888-2",
    /**
     * Code: 30889-0
     */
    TemporomandibularJointLeftXRay = "30889-0",
    /**
     * Code: 30890-8
     */
    TemporomandibularJointRightXRay = "30890-8",
    /**
     * Code: 30891-6
     */
    CervicocerebralArteryFluoroscopicAngiogramWContrastIA = "30891-6",
    /**
     * Code: 30892-4
     */
    FluoroscopyGuidanceForCatheterizationOfBiliaryDuctsAndPancreaticDuctWContrastRetrograde = "30892-4",
    /**
     * Code: 33716-2
     */
    NonGynecologicalCytologyMethodStudy = "33716-2",
    /**
     * Code: 33717-0
     */
    CytologyCervicalOrVaginalSmearOrScrapingStudy = "33717-0",
    /**
     * Code: 33718-8
     */
    CytologyReportOfTissueFineNeedleAspirateCytoStain = "33718-8",
    /**
     * Code: 33719-6
     */
    FlowCytometryStudy = "33719-6",
    /**
     * Code: 33720-4
     */
    BloodBankConsult = "33720-4",
    /**
     * Code: 33721-2
     */
    BoneMarrowPathologyBiopsyReport = "33721-2",
    /**
     * Code: 34066-1
     */
    FDAPackageInsertBoxedWarningSection = "34066-1",
    /**
     * Code: 34067-9
     */
    FDAPackageInsertIndicationsAndUsageSection = "34067-9",
    /**
     * Code: 34068-7
     */
    FDAPackageInsertDosageAndAdministrationSection = "34068-7",
    /**
     * Code: 34069-5
     */
    FDAPackageInsertHowSuppliedSection = "34069-5",
    /**
     * Code: 34070-3
     */
    FDAPackageInsertContraindicationsSection = "34070-3",
    /**
     * Code: 34071-1
     */
    FDAPackageInsertWarningsSection = "34071-1",
    /**
     * Code: 34072-9
     */
    FDAPackageInsertGeneralPrecautionsSection = "34072-9",
    /**
     * Code: 34073-7
     */
    FDAPackageInsertDrugInteractionsSection = "34073-7",
    /**
     * Code: 34074-5
     */
    FDAPackageInsertDrugLaboratoryTestInteractionsSection = "34074-5",
    /**
     * Code: 34075-2
     */
    FDAPackageInsertLaboratoryTestsSection = "34075-2",
    /**
     * Code: 34076-0
     */
    FDAPackageInsertInformationForPatientsSection = "34076-0",
    /**
     * Code: 34077-8
     */
    FDAPackageInsertTeratogenicEffectsSection = "34077-8",
    /**
     * Code: 34078-6
     */
    FDAPackageInsertNonteratogenicEffectsSection = "34078-6",
    /**
     * Code: 34079-4
     */
    FDAPackageInsertLaborAndDeliverySection = "34079-4",
    /**
     * Code: 34080-2
     */
    FDAPackageInsertNursingMothersSection = "34080-2",
    /**
     * Code: 34081-0
     */
    FDAPackageInsertPediatricUseSection = "34081-0",
    /**
     * Code: 34082-8
     */
    FDAPackageInsertGeriatricUseSection = "34082-8",
    /**
     * Code: 34083-6
     */
    FDAPackageInsertCarcinogenesisAndMutagenesisAndImpairmentOfFertilitySection = "34083-6",
    /**
     * Code: 34084-4
     */
    FDAPackageInsertAdverseReactionsSection = "34084-4",
    /**
     * Code: 34085-1
     */
    FDAPackageInsertControlledSubstanceSection = "34085-1",
    /**
     * Code: 34086-9
     */
    FDAPackageInsertAbuseSection = "34086-9",
    /**
     * Code: 34087-7
     */
    FDAPackageInsertDependenceSection = "34087-7",
    /**
     * Code: 34088-5
     */
    FDAPackageInsertOverdosageSection = "34088-5",
    /**
     * Code: 34089-3
     */
    FDAPackageInsertDescriptionSection = "34089-3",
    /**
     * Code: 34090-1
     */
    FDAPackageInsertClinicalPharmacologySection = "34090-1",
    /**
     * Code: 34091-9
     */
    FDAPackageInsertAnimalPharmacologyToxicologySection = "34091-9",
    /**
     * Code: 34092-7
     */
    FDAPackageInsertClinicalStudiesSection = "34092-7",
    /**
     * Code: 34093-5
     */
    FDAPackageInsertReferencesSection = "34093-5",
    /**
     * Code: 34094-3
     */
    CardiologyHospitalAdmissionHistoryAndPhysicalNote = "34094-3",
    /**
     * Code: 34095-0
     */
    ComprehensiveHistoryAndPhysicalNote = "34095-0",
    /**
     * Code: 34096-8
     */
    NursingFacilityComprehensiveHistoryAndPhysicalNote = "34096-8",
    /**
     * Code: 34097-6
     */
    NursingFacilityConferenceNote = "34097-6",
    /**
     * Code: 34098-4
     */
    ConferenceNote = "34098-4",
    /**
     * Code: 34099-2
     */
    CardiologyConsultNote = "34099-2",
    /**
     * Code: 34100-8
     */
    IntensiveCareUnitConsultNote = "34100-8",
    /**
     * Code: 34101-6
     */
    GeneralMedicineOutpatientConsultNote = "34101-6",
    /**
     * Code: 34102-4
     */
    PsychiatryHospitalConsultNote = "34102-4",
    /**
     * Code: 34103-2
     */
    PulmonaryConsultNote = "34103-2",
    /**
     * Code: 34104-0
     */
    HospitalConsultNote = "34104-0",
    /**
     * Code: 34105-7
     */
    HospitalDischargeSummary = "34105-7",
    /**
     * Code: 34106-5
     */
    PhysicianHospitalDischargeSummary = "34106-5",
    /**
     * Code: 34107-3
     */
    PatientQuoteSHomeEducationNote = "34107-3",
    /**
     * Code: 34108-1
     */
    OutpatientNote = "34108-1",
    /**
     * Code: 34109-9
     */
    Note = "34109-9",
    /**
     * Code: 34110-7
     */
    DiabetologyOutpatientNote = "34110-7",
    /**
     * Code: 34111-5
     */
    EmergencyDepartmentNote = "34111-5",
    /**
     * Code: 34112-3
     */
    HospitalNote = "34112-3",
    /**
     * Code: 34113-1
     */
    NursingFacilityNote = "34113-1",
    /**
     * Code: 34114-9
     */
    HospitalGroupCounselingNote = "34114-9",
    /**
     * Code: 34115-6
     */
    MedicalStudentHospitalHistoryAndPhysicalNote = "34115-6",
    /**
     * Code: 34116-4
     */
    PhysicianNursingFacilityHistoryAndPhysicalNote = "34116-4",
    /**
     * Code: 34117-2
     */
    HistoryAndPhysicalNote = "34117-2",
    /**
     * Code: 34118-0
     */
    PatientQuoteSHomeInitialAssessmentNote = "34118-0",
    /**
     * Code: 34119-8
     */
    NursingFacilityInitialAssessmentNote = "34119-8",
    /**
     * Code: 34120-6
     */
    OutpatientInitialAssessmentNote = "34120-6",
    /**
     * Code: 34121-4
     */
    InterventionalProcedureNote = "34121-4",
    /**
     * Code: 34122-2
     */
    PathologyProcedureNote = "34122-2",
    /**
     * Code: 34123-0
     */
    AnesthesiologyHospitalPreoperativeEvaluationAndManagementNote = "34123-0",
    /**
     * Code: 34124-8
     */
    CardiologyOutpatientProgressNote = "34124-8",
    /**
     * Code: 34125-5
     */
    CaseManagerPatientQuoteSHomeProgressNote = "34125-5",
    /**
     * Code: 34126-3
     */
    IntensiveCareUnitProgressNote = "34126-3",
    /**
     * Code: 34127-1
     */
    DentistryHygienistOutpatientProgressNote = "34127-1",
    /**
     * Code: 34128-9
     */
    DentistryOutpatientProgressNote = "34128-9",
    /**
     * Code: 34129-7
     */
    PatientQuoteSHomeProgressNote = "34129-7",
    /**
     * Code: 34130-5
     */
    HospitalProgressNote = "34130-5",
    /**
     * Code: 34131-3
     */
    OutpatientProgressNote = "34131-3",
    /**
     * Code: 34132-1
     */
    PharmacyOutpatientProgressNote = "34132-1",
    /**
     * Code: 34133-9
     */
    SummaryOfEpisodeNote = "34133-9",
    /**
     * Code: 34134-7
     */
    PhysicianAttendingOutpatientSupervisoryNote = "34134-7",
    /**
     * Code: 34135-4
     */
    CardiologyPhysicianAttendingOutpatientSupervisoryNote = "34135-4",
    /**
     * Code: 34136-2
     */
    GastroenterologyPhysicianAttendingOutpatientSupervisoryNote = "34136-2",
    /**
     * Code: 34137-0
     */
    OutpatientSurgicalOperationNote = "34137-0",
    /**
     * Code: 34138-8
     */
    TargetedHistoryAndPhysicalNote = "34138-8",
    /**
     * Code: 34139-6
     */
    NurseTelephoneEncounterNote = "34139-6",
    /**
     * Code: 34744-3
     */
    NurseAdmissionEvaluationNote = "34744-3",
    /**
     * Code: 34745-0
     */
    NurseDischargeSummary = "34745-0",
    /**
     * Code: 34746-8
     */
    NurseNote = "34746-8",
    /**
     * Code: 34747-6
     */
    NursePreoperativeEvaluationAndManagementNote = "34747-6",
    /**
     * Code: 34748-4
     */
    TelephoneEncounterNote = "34748-4",
    /**
     * Code: 34749-2
     */
    AnesthesiologyOutpatientConsultNote = "34749-2",
    /**
     * Code: 34750-0
     */
    AnesthesiologyNote = "34750-0",
    /**
     * Code: 34751-8
     */
    AnesthesiologyPreoperativeEvaluationAndManagementNote = "34751-8",
    /**
     * Code: 34752-6
     */
    CardiologyNote = "34752-6",
    /**
     * Code: 34753-4
     */
    CardiologyOutpatientNote = "34753-4",
    /**
     * Code: 34754-2
     */
    CriticalCareMedicineNote = "34754-2",
    /**
     * Code: 34755-9
     */
    CriticalCareMedicineTransferSummaryNote = "34755-9",
    /**
     * Code: 34756-7
     */
    DentistryConsultNote = "34756-7",
    /**
     * Code: 34758-3
     */
    DermatologyConsultNote = "34758-3",
    /**
     * Code: 34759-1
     */
    DermatologyNote = "34759-1",
    /**
     * Code: 34760-9
     */
    DiabetologyConsultNote = "34760-9",
    /**
     * Code: 34761-7
     */
    GastroenterologyConsultNote = "34761-7",
    /**
     * Code: 34762-5
     */
    GastroenterologyNote = "34762-5",
    /**
     * Code: 34763-3
     */
    GeneralMedicineAdmissionHistoryAndPhysicalNote = "34763-3",
    /**
     * Code: 34764-1
     */
    GeneralMedicineConsultNote = "34764-1",
    /**
     * Code: 34765-8
     */
    GeneralMedicineNote = "34765-8",
    /**
     * Code: 34766-6
     */
    GeneralMedicineOutpatientNote = "34766-6",
    /**
     * Code: 34767-4
     */
    GeneralMedicineMedicalStudentNote = "34767-4",
    /**
     * Code: 34768-2
     */
    GeneralMedicineNurseNote = "34768-2",
    /**
     * Code: 34769-0
     */
    GeneralMedicinePhysicianAttendingNote = "34769-0",
    /**
     * Code: 34770-8
     */
    GeneralMedicineTransferSummaryNote = "34770-8",
    /**
     * Code: 34773-2
     */
    SurgeryPhysicianAttendingNote = "34773-2",
    /**
     * Code: 34774-0
     */
    SurgeryHistoryAndPhysicalNote = "34774-0",
    /**
     * Code: 34776-5
     */
    GeriatricMedicineConsultNote = "34776-5",
    /**
     * Code: 34777-3
     */
    ObstetricsAndGynecologyConsultNote = "34777-3",
    /**
     * Code: 34778-1
     */
    ObstetricsAndGynecologyNote = "34778-1",
    /**
     * Code: 34779-9
     */
    HematologyPlusMedicalOncologyConsultNote = "34779-9",
    /**
     * Code: 34780-7
     */
    HematologyPlusMedicalOncologyNote = "34780-7",
    /**
     * Code: 34781-5
     */
    InfectiousDiseaseConsultNote = "34781-5",
    /**
     * Code: 34782-3
     */
    InfectiousDiseaseNote = "34782-3",
    /**
     * Code: 34783-1
     */
    KinesiotherapyConsultNote = "34783-1",
    /**
     * Code: 34784-9
     */
    KinesiotherapyNote = "34784-9",
    /**
     * Code: 34785-6
     */
    MentalHealthConsultNote = "34785-6",
    /**
     * Code: 34786-4
     */
    MentalHealthNote = "34786-4",
    /**
     * Code: 34787-2
     */
    MentalHealthGroupCounselingNote = "34787-2",
    /**
     * Code: 34788-0
     */
    PsychiatryConsultNote = "34788-0",
    /**
     * Code: 34790-6
     */
    PsychiatryGroupCounselingNote = "34790-6",
    /**
     * Code: 34791-4
     */
    PsychologyConsultNote = "34791-4",
    /**
     * Code: 34792-2
     */
    PsychologyNote = "34792-2",
    /**
     * Code: 34793-0
     */
    PsychologyGroupCounselingNote = "34793-0",
    /**
     * Code: 34794-8
     */
    InterdisciplinaryNote = "34794-8",
    /**
     * Code: 34795-5
     */
    NephrologyConsultNote = "34795-5",
    /**
     * Code: 34796-3
     */
    NephrologyNote = "34796-3",
    /**
     * Code: 34797-1
     */
    NeurologyConsultNote = "34797-1",
    /**
     * Code: 34798-9
     */
    NeurologicalSurgeryConsultNote = "34798-9",
    /**
     * Code: 34799-7
     */
    NeurologicalSurgeryNote = "34799-7",
    /**
     * Code: 34800-3
     */
    NutritionAndDieteticsConsultNote = "34800-3",
    /**
     * Code: 34801-1
     */
    NutritionAndDieteticsNote = "34801-1",
    /**
     * Code: 34802-9
     */
    OccupationalMedicineNote = "34802-9",
    /**
     * Code: 34803-7
     */
    OccupationalMedicineConsultNote = "34803-7",
    /**
     * Code: 34805-2
     */
    OncologyConsultNote = "34805-2",
    /**
     * Code: 34806-0
     */
    OncologyNote = "34806-0",
    /**
     * Code: 34807-8
     */
    OphthalmologyConsultNote = "34807-8",
    /**
     * Code: 34808-6
     */
    OphthalmologyNote = "34808-6",
    /**
     * Code: 34809-4
     */
    OphthalmologyPreoperativeEvaluationAndManagementNote = "34809-4",
    /**
     * Code: 34810-2
     */
    OptometryConsultNote = "34810-2",
    /**
     * Code: 34811-0
     */
    OptometryNote = "34811-0",
    /**
     * Code: 34812-8
     */
    OralAndMaxillofacialSurgeryConsultNote = "34812-8",
    /**
     * Code: 34813-6
     */
    OralAndMaxillofacialSurgeryNote = "34813-6",
    /**
     * Code: 34814-4
     */
    OrthopaedicSurgeryConsultNote = "34814-4",
    /**
     * Code: 34815-1
     */
    OrthopaedicSurgeryNote = "34815-1",
    /**
     * Code: 34816-9
     */
    OtolaryngologyConsultNote = "34816-9",
    /**
     * Code: 34817-7
     */
    OtolaryngologyNote = "34817-7",
    /**
     * Code: 34818-5
     */
    OtolaryngologySurgicalOperationNote = "34818-5",
    /**
     * Code: 34819-3
     */
    PathologyEvaluationAndManagementNote = "34819-3",
    /**
     * Code: 34820-1
     */
    PharmacyConsultNote = "34820-1",
    /**
     * Code: 34821-9
     */
    PharmacyNote = "34821-9",
    /**
     * Code: 34822-7
     */
    PhysicalMedicineAndRehabilitationConsultNote = "34822-7",
    /**
     * Code: 34823-5
     */
    PhysicalMedicineAndRehabilitationNote = "34823-5",
    /**
     * Code: 34824-3
     */
    PhysicalTherapyConsultNote = "34824-3",
    /**
     * Code: 34826-8
     */
    PlasticSurgeryConsultNote = "34826-8",
    /**
     * Code: 34827-6
     */
    PlasticSurgeryNote = "34827-6",
    /**
     * Code: 34828-4
     */
    PodiatryConsultNote = "34828-4",
    /**
     * Code: 34829-2
     */
    PodiatryNote = "34829-2",
    /**
     * Code: 34830-0
     */
    PulmonaryNote = "34830-0",
    /**
     * Code: 34831-8
     */
    RadiationOncologyConsultNote = "34831-8",
    /**
     * Code: 34832-6
     */
    RadiationOncologyNote = "34832-6",
    /**
     * Code: 34833-4
     */
    RecreationalTherapyConsultNote = "34833-4",
    /**
     * Code: 34834-2
     */
    RecreationalTherapyNote = "34834-2",
    /**
     * Code: 34837-5
     */
    RespiratoryTherapyConsultNote = "34837-5",
    /**
     * Code: 34838-3
     */
    RespiratoryTherapyNote = "34838-3",
    /**
     * Code: 34839-1
     */
    RheumatologyConsultNote = "34839-1",
    /**
     * Code: 34840-9
     */
    RheumatologyNote = "34840-9",
    /**
     * Code: 34841-7
     */
    SocialWorkConsultNote = "34841-7",
    /**
     * Code: 34843-3
     */
    SocialWorkGroupCounselingNote = "34843-3",
    /**
     * Code: 34844-1
     */
    SocialWorkTelephoneEncounterNote = "34844-1",
    /**
     * Code: 34845-8
     */
    SpeechLanguagePathologyPlusAudiologyConsultNote = "34845-8",
    /**
     * Code: 34846-6
     */
    SpeechLanguagePathologyPlusAudiologyNote = "34846-6",
    /**
     * Code: 34847-4
     */
    SurgeryConsultNote = "34847-4",
    /**
     * Code: 34848-2
     */
    SurgeryNote = "34848-2",
    /**
     * Code: 34849-0
     */
    ThoracicSurgeryConsultNote = "34849-0",
    /**
     * Code: 34850-8
     */
    ThoracicSurgeryOutpatientNote = "34850-8",
    /**
     * Code: 34851-6
     */
    UrologyConsultNote = "34851-6",
    /**
     * Code: 34852-4
     */
    UrologyNote = "34852-4",
    /**
     * Code: 34853-2
     */
    VascularSurgeryConsultNote = "34853-2",
    /**
     * Code: 34854-0
     */
    VascularSurgeryOutpatientNote = "34854-0",
    /**
     * Code: 34855-7
     */
    OccupationalTherapyConsultNote = "34855-7",
    /**
     * Code: 34856-5
     */
    EvaluationAndManagementOfAnticoagulationNote = "34856-5",
    /**
     * Code: 34857-3
     */
    EvaluationAndManagementOfSubstanceAbuseNote = "34857-3",
    /**
     * Code: 34858-1
     */
    PainMedicineNote = "34858-1",
    /**
     * Code: 34859-9
     */
    EvaluationAndManagementOfHyperlipidemia = "34859-9",
    /**
     * Code: 34860-7
     */
    EvaluationAndManagementOfHypertension = "34860-7",
    /**
     * Code: 34861-5
     */
    DiabetologyNote = "34861-5",
    /**
     * Code: 34862-3
     */
    GeneralMedicinePhysicianAttendingHospitalAdmissionEvaluationNote = "34862-3",
    /**
     * Code: 34864-9
     */
    MentalHealthCounselingNote = "34864-9",
    /**
     * Code: 34865-6
     */
    PsychiatryCounselingNote = "34865-6",
    /**
     * Code: 34866-4
     */
    PsychologyCounselingNote = "34866-4",
    /**
     * Code: 34867-2
     */
    OphthalmologyOutpatientPostoperativeEvaluationAndManagementNote = "34867-2",
    /**
     * Code: 34868-0
     */
    OrthopaedicSurgerySurgicalOperationNote = "34868-0",
    /**
     * Code: 34869-8
     */
    PharmacyCounselingNote = "34869-8",
    /**
     * Code: 34870-6
     */
    PlasticSurgerySurgicalOperationNote = "34870-6",
    /**
     * Code: 34872-2
     */
    SocialWorkCounselingNote = "34872-2",
    /**
     * Code: 34873-0
     */
    SurgeryAdmissionEvaluationNote = "34873-0",
    /**
     * Code: 34874-8
     */
    SurgerySurgicalOperationNote = "34874-8",
    /**
     * Code: 34875-5
     */
    SurgeryPostoperativeEvaluationAndManagementNote = "34875-5",
    /**
     * Code: 34876-3
     */
    SurgeryPreoperativeEvaluationAndManagementNote = "34876-3",
    /**
     * Code: 34877-1
     */
    UrologySurgicalOperationNote = "34877-1",
    /**
     * Code: 34878-9
     */
    EmergencyMedicineNote = "34878-9",
    /**
     * Code: 34879-7
     */
    EndocrinologyConsultNote = "34879-7",
    /**
     * Code: 34880-5
     */
    SurgeryNursePostoperativeEvaluationAndManagementNote = "34880-5",
    /**
     * Code: 34881-3
     */
    SurgeryNursePreoperativeEvaluationAndManagementNote = "34881-3",
    /**
     * Code: 34895-3
     */
    EducationNote = "34895-3",
    /**
     * Code: 34896-1
     */
    CardiologyInterventionalProcedureNote = "34896-1",
    /**
     * Code: 34897-9
     */
    DiabetologyEducationNote = "34897-9",
    /**
     * Code: 34898-7
     */
    EndocrinologyNote = "34898-7",
    /**
     * Code: 34899-5
     */
    GastroenterologyInterventionalProcedureNote = "34899-5",
    /**
     * Code: 34900-1
     */
    GeneralMedicineProgressNote = "34900-1",
    /**
     * Code: 34901-9
     */
    GeneralMedicineOutpatientProgressNote = "34901-9",
    /**
     * Code: 34902-7
     */
    GeriatricMedicineOutpatientEducationNote = "34902-7",
    /**
     * Code: 34904-3
     */
    MentalHealthProgressNote = "34904-3",
    /**
     * Code: 34905-0
     */
    NeurologyNote = "34905-0",
    /**
     * Code: 34906-8
     */
    PastoralCareNote = "34906-8",
    /**
     * Code: 35510-7
     */
    ClinicalTrialProtocolGeneralInformationSection = "35510-7",
    /**
     * Code: 35511-5
     */
    ClinicalTrialProtocolBackgroundInformationSection = "35511-5",
    /**
     * Code: 35512-3
     */
    ClinicalTrialProtocolTrialObjectivesAndPurposeSection = "35512-3",
    /**
     * Code: 35513-1
     */
    ClinicalTrialProtocolTrialDesignSection = "35513-1",
    /**
     * Code: 35514-9
     */
    ClinicalTrialProtocolSubjectSelectionAndWithdrawalSection = "35514-9",
    /**
     * Code: 35515-6
     */
    ClinicalTrialProtocolSubjectParticipationPlusEpochsSection = "35515-6",
    /**
     * Code: 35516-4
     */
    ClinicalTrialProtocolTreatmentOfSubjectsPlusEpochsSection = "35516-4",
    /**
     * Code: 35517-2
     */
    ClinicalTrialProtocolAssessmentSection = "35517-2",
    /**
     * Code: 35518-0
     */
    ClinicalTrialProtocolEfficacyAssessmentSection = "35518-0",
    /**
     * Code: 35519-8
     */
    ClinicalTrialProtocolAssessmentOfSafetySection = "35519-8",
    /**
     * Code: 35520-6
     */
    ClinicalTrialProtocolStatisticsSection = "35520-6",
    /**
     * Code: 35521-4
     */
    ClinicalTrialProtocolDirectAccessToSourceDataPlusDocumentsSection = "35521-4",
    /**
     * Code: 35522-2
     */
    ClinicalTrialProtocolQualityControlAndQualityAssuranceSection = "35522-2",
    /**
     * Code: 35523-0
     */
    ClinicalTrialProtocolEthicsSection = "35523-0",
    /**
     * Code: 35524-8
     */
    ClinicalTrialProtocolDataHandlingAndRecordKeepingSection = "35524-8",
    /**
     * Code: 35525-5
     */
    ClinicalTrialProtocolFinancingAndInsuranceSection = "35525-5",
    /**
     * Code: 35526-3
     */
    ClinicalTrialProtocolPublicationPolicySection = "35526-3",
    /**
     * Code: 35527-1
     */
    ClinicalTrialProtocolSupplementsSection = "35527-1",
    /**
     * Code: 35528-9
     */
    ClinicalTrialProtocolClinicalTrialProtocol = "35528-9",
    /**
     * Code: 35881-2
     */
    ExtremityArteryFluoroscopicAngiogramAngioplastyWContrastIA = "35881-2",
    /**
     * Code: 35882-0
     */
    InferiorVenaCavaFluoroscopicAngiogramAngioplastyWContrastIV = "35882-0",
    /**
     * Code: 35883-8
     */
    AortaFluoroscopicAngiogramAtherectomyWContrastIA = "35883-8",
    /**
     * Code: 35884-6
     */
    CTGuidanceForAbscessDrainageOfAbdomen = "35884-6",
    /**
     * Code: 35885-3
     */
    FluoroscopyGuidanceForAbscessDrainageOfUnspecifiedBodyRegion = "35885-3",
    /**
     * Code: 35886-1
     */
    CTGuidanceForAspirationOfBreast = "35886-1",
    /**
     * Code: 35887-9
     */
    CTGuidanceForAspirationOfCystOfUnspecifiedBodyRegion = "35887-9",
    /**
     * Code: 35888-7
     */
    FluoroscopyGuidanceForAspirationOfHip = "35888-7",
    /**
     * Code: 35889-5
     */
    FluoroscopyGuidanceForBronchoscopyOfChest = "35889-5",
    /**
     * Code: 35890-3
     */
    FluoroscopyGuidanceForBiopsyOfAbdomen = "35890-3",
    /**
     * Code: 35891-1
     */
    CTGuidanceForBiopsyOfBone = "35891-1",
    /**
     * Code: 35892-9
     */
    CTGuidanceForBiopsyOfHead = "35892-9",
    /**
     * Code: 35893-7
     */
    CTGuidanceForBiopsyOfBreast = "35893-7",
    /**
     * Code: 35894-5
     */
    FluoroscopyGuidanceForBiopsyOfChest = "35894-5",
    /**
     * Code: 35895-2
     */
    CTGuidanceForBiopsyOfChest = "35895-2",
    /**
     * Code: 35896-0
     */
    CTGuidanceForBiopsyOfLowerExtremity = "35896-0",
    /**
     * Code: 35897-8
     */
    CTGuidanceForBiopsyOfUpperExtremity = "35897-8",
    /**
     * Code: 35898-6
     */
    CTGuidanceForBiopsyOfSalivaryGland = "35898-6",
    /**
     * Code: 35899-4
     */
    FluoroscopyGuidanceForBiopsyOfKidney = "35899-4",
    /**
     * Code: 35900-0
     */
    FluoroscopyGuidanceForBiopsyOfLiver = "35900-0",
    /**
     * Code: 35901-8
     */
    CTGuidanceForBiopsyOfLymphNode = "35901-8",
    /**
     * Code: 35902-6
     */
    FluoroscopyGuidanceForBiopsyOfPancreas = "35902-6",
    /**
     * Code: 35903-4
     */
    CTGuidanceForBiopsyOfProstate = "35903-4",
    /**
     * Code: 35904-2
     */
    CTGuidanceForBiopsyOfSpineCervical = "35904-2",
    /**
     * Code: 35905-9
     */
    CTGuidanceForBiopsyOfSpineLumbar = "35905-9",
    /**
     * Code: 35906-7
     */
    CTGuidanceForBiopsyOfSpineThoracic = "35906-7",
    /**
     * Code: 35907-5
     */
    FluoroscopyGuidanceForBiopsyOfSpleen = "35907-5",
    /**
     * Code: 35908-3
     */
    CTGuidanceForBiopsyOfThyroid = "35908-3",
    /**
     * Code: 35909-1
     */
    CTGuidanceForBiopsyOfChestWContrastIV = "35909-1",
    /**
     * Code: 35910-9
     */
    CTGuidanceForBiopsyOfChestWAndWOContrastIV = "35910-9",
    /**
     * Code: 35911-7
     */
    CTGuidanceForBiopsyOfChestWOContrast = "35911-7",
    /**
     * Code: 35912-5
     */
    FluoroscopyGuidanceForPlacementOfCatheterInUnspecifiedBodyRegion = "35912-5",
    /**
     * Code: 35913-3
     */
    CTGuidanceForDrainageOfAbdomen = "35913-3",
    /**
     * Code: 35914-1
     */
    CTGuidanceForDrainageOfAnus = "35914-1",
    /**
     * Code: 35915-8
     */
    CTGuidanceForDrainageOfAppendix = "35915-8",
    /**
     * Code: 35916-6
     */
    CTGuidanceForDrainageOfChest = "35916-6",
    /**
     * Code: 35917-4
     */
    CTGuidanceForDrainageOfGallbladder = "35917-4",
    /**
     * Code: 35918-2
     */
    CTGuidanceForDrainageOfKidney = "35918-2",
    /**
     * Code: 35919-0
     */
    CTGuidanceForDrainageOfLiver = "35919-0",
    /**
     * Code: 35920-8
     */
    CTGuidanceForDrainageOfLymphNode = "35920-8",
    /**
     * Code: 35921-6
     */
    CTGuidanceForDrainageOfPelvis = "35921-6",
    /**
     * Code: 35922-4
     */
    CTGuidanceForDrainageOfUnspecifiedBodyRegion = "35922-4",
    /**
     * Code: 35923-2
     */
    CTGuidanceForDrainageOfChestWContrastIV = "35923-2",
    /**
     * Code: 35924-0
     */
    CTGuidanceForDrainageOfChestWOContrast = "35924-0",
    /**
     * Code: 35925-7
     */
    FluoroscopyGuidanceForEndoscopyOfStomach = "35925-7",
    /**
     * Code: 35926-5
     */
    FluoroscopyGuidanceForGastrostomyOfStomach = "35926-5",
    /**
     * Code: 35927-3
     */
    FluoroscopyGuidanceForInjectionOfSacroiliacJoint = "35927-3",
    /**
     * Code: 35928-1
     */
    CTGuidanceForLocalizationOfBreastLeft = "35928-1",
    /**
     * Code: 35929-9
     */
    CTGuidanceForLocalizationOfBreastRight = "35929-9",
    /**
     * Code: 35930-7
     */
    CTGuidanceForNerveBlockOfAbdomen = "35930-7",
    /**
     * Code: 35931-5
     */
    CTGuidanceForNerveBlockOfPelvis = "35931-5",
    /**
     * Code: 35932-3
     */
    CTGuidanceForNerveBlockOfSpineLumbar = "35932-3",
    /**
     * Code: 35933-1
     */
    CTGuidanceForPercutaneousVertebroplastyOfSpine = "35933-1",
    /**
     * Code: 35934-9
     */
    CTGuidanceForPercutaneousVertebroplastyOfSpineLumbar = "35934-9",
    /**
     * Code: 35935-6
     */
    CTGuidanceForPercutaneousVertebroplastyOfSpineThoracic = "35935-6",
    /**
     * Code: 35936-4
     */
    FluoroscopyGuidanceForPercutaneousVertebroplastyOfSpine = "35936-4",
    /**
     * Code: 35937-2
     */
    CTGuidanceForPlacementOfRadiationTherapyFieldsInUnspecifiedBodyRegion = "35937-2",
    /**
     * Code: 35938-0
     */
    CTGuidanceForPlacementOfTubeInChest = "35938-0",
    /**
     * Code: 35939-8
     */
    AnkleXRayTomograph = "35939-8",
    /**
     * Code: 35940-6
     */
    AnkleCT = "35940-6",
    /**
     * Code: 35941-4
     */
    AnkleBilateralCT = "35941-4",
    /**
     * Code: 35942-2
     */
    AnkleLeftCT = "35942-2",
    /**
     * Code: 35943-0
     */
    AnkleLeftXRayTomograph = "35943-0",
    /**
     * Code: 35944-8
     */
    AnkleRightCT = "35944-8",
    /**
     * Code: 35945-5
     */
    AortaCT = "35945-5",
    /**
     * Code: 35946-3
     */
    AortaMRIAngiogram = "35946-3",
    /**
     * Code: 35947-1
     */
    AortaMRI = "35947-1",
    /**
     * Code: 35948-9
     */
    AortaAbdominalCT = "35948-9",
    /**
     * Code: 35949-7
     */
    AortaAbdominalMRI = "35949-7",
    /**
     * Code: 35950-5
     */
    AortaThoracicMRI = "35950-5",
    /**
     * Code: 35951-3
     */
    AorticArchMRIAngiogram = "35951-3",
    /**
     * Code: 35952-1
     */
    AppendixCT = "35952-1",
    /**
     * Code: 35953-9
     */
    FaceMRI = "35953-9",
    /**
     * Code: 35954-7
     */
    BreastLeftMRI = "35954-7",
    /**
     * Code: 35955-4
     */
    BreastRightMRI = "35955-4",
    /**
     * Code: 35956-2
     */
    InternalAuditoryCanalMRI = "35956-2",
    /**
     * Code: 35957-0
     */
    InternalAuditoryCanalLeftCT = "35957-0",
    /**
     * Code: 35958-8
     */
    InternalAuditoryCanalCT = "35958-8",
    /**
     * Code: 35959-6
     */
    ClavicleXRayTomograph = "35959-6",
    /**
     * Code: 35960-4
     */
    ClavicleCT = "35960-4",
    /**
     * Code: 35961-2
     */
    ClavicleMRI = "35961-2",
    /**
     * Code: 35962-0
     */
    ElbowCT = "35962-0",
    /**
     * Code: 35963-8
     */
    ElbowXRayTomograph = "35963-8",
    /**
     * Code: 35964-6
     */
    ElbowBilateralXRayTomograph = "35964-6",
    /**
     * Code: 35965-3
     */
    ElbowBilateralCT = "35965-3",
    /**
     * Code: 35966-1
     */
    ElbowLeftCT = "35966-1",
    /**
     * Code: 35967-9
     */
    ElbowLeftXRayTomograph = "35967-9",
    /**
     * Code: 35968-7
     */
    ElbowRightCT = "35968-7",
    /**
     * Code: 35969-5
     */
    EsophagusCT = "35969-5",
    /**
     * Code: 35970-3
     */
    ExtremityXRayTomograph = "35970-3",
    /**
     * Code: 35971-1
     */
    LowerExtremityCT = "35971-1",
    /**
     * Code: 35972-9
     */
    LowerExtremityXRayTomograph = "35972-9",
    /**
     * Code: 35973-7
     */
    LowerExtremityBilateralCT = "35973-7",
    /**
     * Code: 35974-5
     */
    LowerExtremityVesselsBilateralMRIAngiogram = "35974-5",
    /**
     * Code: 35975-2
     */
    LowerExtremityBilateralMRI = "35975-2",
    /**
     * Code: 35976-0
     */
    LowerExtremityLeftCT = "35976-0",
    /**
     * Code: 35977-8
     */
    LowerExtremityLeftXRayTomograph = "35977-8",
    /**
     * Code: 35978-6
     */
    LowerExtremityLeftMRI = "35978-6",
    /**
     * Code: 35979-4
     */
    LowerExtremityRightCT = "35979-4",
    /**
     * Code: 35980-2
     */
    LowerExtremityRightMRI = "35980-2",
    /**
     * Code: 35981-0
     */
    UpperExtremityCT = "35981-0",
    /**
     * Code: 35982-8
     */
    UpperExtremityLeftCT = "35982-8",
    /**
     * Code: 35983-6
     */
    UpperExtremityRightCT = "35983-6",
    /**
     * Code: 35984-4
     */
    FemurCT = "35984-4",
    /**
     * Code: 35985-1
     */
    FemurXRayTomograph = "35985-1",
    /**
     * Code: 35986-9
     */
    FemurBilateralXRayTomograph = "35986-9",
    /**
     * Code: 35987-7
     */
    FemurLeftCT = "35987-7",
    /**
     * Code: 35988-5
     */
    FemurLeftXRayTomograph = "35988-5",
    /**
     * Code: 35989-3
     */
    FemurRightCT = "35989-3",
    /**
     * Code: 35990-1
     */
    FetalMRI = "35990-1",
    /**
     * Code: 35991-9
     */
    FootCT = "35991-9",
    /**
     * Code: 35992-7
     */
    FootXRayTomograph = "35992-7",
    /**
     * Code: 35993-5
     */
    FootBilateralCT = "35993-5",
    /**
     * Code: 35994-3
     */
    FootLeftCT = "35994-3",
    /**
     * Code: 35995-0
     */
    FootLeftXRayTomograph = "35995-0",
    /**
     * Code: 35996-8
     */
    FootRightCT = "35996-8",
    /**
     * Code: 35997-6
     */
    ForearmCT = "35997-6",
    /**
     * Code: 35998-4
     */
    ForearmBilateralCT = "35998-4",
    /**
     * Code: 35999-2
     */
    ForearmLeftCT = "35999-2",
    /**
     * Code: 36000-8
     */
    ForearmRightCT = "36000-8",
    /**
     * Code: 36001-6
     */
    GallbladderXRayTomograph = "36001-6",
    /**
     * Code: 36002-4
     */
    HandCT = "36002-4",
    /**
     * Code: 36003-2
     */
    HandXRayTomograph = "36003-2",
    /**
     * Code: 36004-0
     */
    HandBilateralCT = "36004-0",
    /**
     * Code: 36005-7
     */
    HandLeftCT = "36005-7",
    /**
     * Code: 36006-5
     */
    HandLeftXRayTomograph = "36006-5",
    /**
     * Code: 36007-3
     */
    HandRightCT = "36007-3",
    /**
     * Code: 36008-1
     */
    WristAndHandMRI = "36008-1",
    /**
     * Code: 36009-9
     */
    HeartMRIAngiogram = "36009-9",
    /**
     * Code: 36010-7
     */
    CalcaneusCT = "36010-7",
    /**
     * Code: 36011-5
     */
    CalcaneusXRayTomograph = "36011-5",
    /**
     * Code: 36012-3
     */
    HipXRayTomograph = "36012-3",
    /**
     * Code: 36013-1
     */
    HipMRI = "36013-1",
    /**
     * Code: 36014-9
     */
    HipCT = "36014-9",
    /**
     * Code: 36015-6
     */
    HipBilateralXRayTomograph = "36015-6",
    /**
     * Code: 36016-4
     */
    HipBilateralCT = "36016-4",
    /**
     * Code: 36017-2
     */
    HipBilateralMRI = "36017-2",
    /**
     * Code: 36018-0
     */
    HipLeftCT = "36018-0",
    /**
     * Code: 36019-8
     */
    HipLeftXRayTomograph = "36019-8",
    /**
     * Code: 36020-6
     */
    HipLeftMRI = "36020-6",
    /**
     * Code: 36021-4
     */
    HipRightCT = "36021-4",
    /**
     * Code: 36022-2
     */
    HipRightMRI = "36022-2",
    /**
     * Code: 36023-0
     */
    UpperArmCT = "36023-0",
    /**
     * Code: 36024-8
     */
    HumerusXRayTomograph = "36024-8",
    /**
     * Code: 36025-5
     */
    UpperArmMRI = "36025-5",
    /**
     * Code: 36026-3
     */
    UpperArmBilateralCT = "36026-3",
    /**
     * Code: 36027-1
     */
    UpperArmLeftCT = "36027-1",
    /**
     * Code: 36028-9
     */
    UpperArmLeftMRI = "36028-9",
    /**
     * Code: 36029-7
     */
    UpperArmRightCT = "36029-7",
    /**
     * Code: 36030-5
     */
    UpperArmRightMRI = "36030-5",
    /**
     * Code: 36031-3
     */
    SacroiliacJointMRI = "36031-3",
    /**
     * Code: 36032-1
     */
    KidneyXRayTomograph = "36032-1",
    /**
     * Code: 36033-9
     */
    KidneyMRI = "36033-9",
    /**
     * Code: 36034-7
     */
    KidneyBilateralMRI = "36034-7",
    /**
     * Code: 36035-4
     */
    KidneyLeftMRI = "36035-4",
    /**
     * Code: 36036-2
     */
    KidneyRightMRI = "36036-2",
    /**
     * Code: 36037-0
     */
    KneeCT = "36037-0",
    /**
     * Code: 36038-8
     */
    KneeXRayTomograph = "36038-8",
    /**
     * Code: 36039-6
     */
    KneeBilateralXRayTomograph = "36039-6",
    /**
     * Code: 36040-4
     */
    KneeBilateralCT = "36040-4",
    /**
     * Code: 36041-2
     */
    KneeLeftCT = "36041-2",
    /**
     * Code: 36042-0
     */
    KneeLeftXRayTomograph = "36042-0",
    /**
     * Code: 36043-8
     */
    KneeRightCT = "36043-8",
    /**
     * Code: 36044-6
     */
    LarynxXRayTomograph = "36044-6",
    /**
     * Code: 36045-3
     */
    LarynxMRI = "36045-3",
    /**
     * Code: 36046-1
     */
    LiverMRI = "36046-1",
    /**
     * Code: 36047-9
     */
    MandibleCT = "36047-9",
    /**
     * Code: 36048-7
     */
    MandibleXRayTomograph = "36048-7",
    /**
     * Code: 36049-5
     */
    MaxillaAndMandibleCT = "36049-5",
    /**
     * Code: 36050-3
     */
    MaxillaCT = "36050-3",
    /**
     * Code: 36051-1
     */
    NeckCT = "36051-1",
    /**
     * Code: 36052-9
     */
    PancreasMRI = "36052-9",
    /**
     * Code: 36053-7
     */
    ParathyroidMRI = "36053-7",
    /**
     * Code: 36054-5
     */
    ThoracicOutletCT = "36054-5",
    /**
     * Code: 36055-2
     */
    PosteriorFossaCT = "36055-2",
    /**
     * Code: 36056-0
     */
    PosteriorFossaMRI = "36056-0",
    /**
     * Code: 36057-8
     */
    ProstateCT = "36057-8",
    /**
     * Code: 36058-6
     */
    SacrumCT = "36058-6",
    /**
     * Code: 36059-4
     */
    SacrumMRI = "36059-4",
    /**
     * Code: 36060-2
     */
    SacrumAndCoccyxMRI = "36060-2",
    /**
     * Code: 36061-0
     */
    ScapulaMRI = "36061-0",
    /**
     * Code: 36062-8
     */
    ShoulderCT = "36062-8",
    /**
     * Code: 36063-6
     */
    ShoulderBilateralCT = "36063-6",
    /**
     * Code: 36064-4
     */
    ShoulderLeftCT = "36064-4",
    /**
     * Code: 36065-1
     */
    ShoulderLeftXRayTomograph = "36065-1",
    /**
     * Code: 36066-9
     */
    ShoulderRightCT = "36066-9",
    /**
     * Code: 36067-7
     */
    SpineMRI = "36067-7",
    /**
     * Code: 36068-5
     */
    SpineCervicalXRayTomograph = "36068-5",
    /**
     * Code: 36069-3
     */
    SpineLumbarXRayTomograph = "36069-3",
    /**
     * Code: 36070-1
     */
    SpleenMRI = "36070-1",
    /**
     * Code: 36071-9
     */
    SternumCT = "36071-9",
    /**
     * Code: 36072-7
     */
    SternumMRI = "36072-7",
    /**
     * Code: 36073-5
     */
    ScrotumAndTesticleMRI = "36073-5",
    /**
     * Code: 36074-3
     */
    LowerLegCT = "36074-3",
    /**
     * Code: 36075-0
     */
    LowerLegLeftMRI = "36075-0",
    /**
     * Code: 36076-8
     */
    LowerLegRightMRI = "36076-8",
    /**
     * Code: 36077-6
     */
    PortalVeinMRIAngiogram = "36077-6",
    /**
     * Code: 36078-4
     */
    RenalVeinMRIAngiogram = "36078-4",
    /**
     * Code: 36079-2
     */
    LowerExtremityVeinsMRIAngiogram = "36079-2",
    /**
     * Code: 36080-0
     */
    UpperExtremityVeinsMRIAngiogram = "36080-0",
    /**
     * Code: 36081-8
     */
    VenaCavaMRIAngiogram = "36081-8",
    /**
     * Code: 36082-6
     */
    InferiorVenaCavaMRIAngiogram = "36082-6",
    /**
     * Code: 36083-4
     */
    InferiorVenaCavaMRI = "36083-4",
    /**
     * Code: 36084-2
     */
    UpperExtremityVesselsMRIAngiogram = "36084-2",
    /**
     * Code: 36085-9
     */
    NeckVesselsMRIAngiogram = "36085-9",
    /**
     * Code: 36086-7
     */
    AbdomenCTLimited = "36086-7",
    /**
     * Code: 36087-5
     */
    HeadCTLimited = "36087-5",
    /**
     * Code: 36088-3
     */
    InternalAuditoryCanalMRILimited = "36088-3",
    /**
     * Code: 36089-1
     */
    ChestCTLimited = "36089-1",
    /**
     * Code: 36090-9
     */
    ExtremityCTLimited = "36090-9",
    /**
     * Code: 36091-7
     */
    HeartMRILimited = "36091-7",
    /**
     * Code: 36092-5
     */
    HipCTLimited = "36092-5",
    /**
     * Code: 36093-3
     */
    LowerExtremityJointMRILimited = "36093-3",
    /**
     * Code: 36094-1
     */
    UpperExtremityJointMRILimited = "36094-1",
    /**
     * Code: 36095-8
     */
    AbdomenCTLimitedWContrastIV = "36095-8",
    /**
     * Code: 36096-6
     */
    BrainMRILimitedWContrastIV = "36096-6",
    /**
     * Code: 36097-4
     */
    UpperExtremityCTLimitedWContrastIV = "36097-4",
    /**
     * Code: 36098-2
     */
    PelvisCTLimitedWContrastIV = "36098-2",
    /**
     * Code: 36099-0
     */
    SpineCervicalCTLimitedWContrastIV = "36099-0",
    /**
     * Code: 36100-6
     */
    SpineLumbarMRILimitedWContrastIV = "36100-6",
    /**
     * Code: 36101-4
     */
    SpineThoracicMRILimitedWContrastIV = "36101-4",
    /**
     * Code: 36102-2
     */
    AbdomenCTLimitedWAndWOContrastIV = "36102-2",
    /**
     * Code: 36103-0
     */
    AbdomenCTLimitedWOContrast = "36103-0",
    /**
     * Code: 36104-8
     */
    HeadCTLimitedWOContrast = "36104-8",
    /**
     * Code: 36105-5
     */
    BrainMRILimitedWOContrast = "36105-5",
    /**
     * Code: 36106-3
     */
    LowerExtremityCTLimitedWOContrast = "36106-3",
    /**
     * Code: 36107-1
     */
    LowerExtremityJointLeftMRILimitedWOContrast = "36107-1",
    /**
     * Code: 36108-9
     */
    PelvisCTLimitedWOContrast = "36108-9",
    /**
     * Code: 36109-7
     */
    SpineCervicalCTLimitedWOContrast = "36109-7",
    /**
     * Code: 36110-5
     */
    SpineLumbarCTLimitedWOContrast = "36110-5",
    /**
     * Code: 36111-3
     */
    SpineLumbarMRILimitedWOContrast = "36111-3",
    /**
     * Code: 36112-1
     */
    SpineThoracicMRILimitedWOContrast = "36112-1",
    /**
     * Code: 36113-9
     */
    KidneyMRIWContrastIV = "36113-9",
    /**
     * Code: 36114-7
     */
    BreastBilateralMRIDynamicWContrastIV = "36114-7",
    /**
     * Code: 36115-4
     */
    AnkleMRIWContrastIntraarticular = "36115-4",
    /**
     * Code: 36116-2
     */
    AnkleLeftMRIWContrastIntraarticular = "36116-2",
    /**
     * Code: 36117-0
     */
    AnkleRightMRIWContrastIntraarticular = "36117-0",
    /**
     * Code: 36118-8
     */
    ElbowLeftMRIWContrastIntraarticular = "36118-8",
    /**
     * Code: 36119-6
     */
    ElbowRightMRIWContrastIntraarticular = "36119-6",
    /**
     * Code: 36120-4
     */
    HipMRIWContrastIntraarticular = "36120-4",
    /**
     * Code: 36121-2
     */
    HipLeftMRIWContrastIntraarticular = "36121-2",
    /**
     * Code: 36122-0
     */
    HipRightMRIWContrastIntraarticular = "36122-0",
    /**
     * Code: 36123-8
     */
    SacroiliacJointCTWContrastIntraarticular = "36123-8",
    /**
     * Code: 36124-6
     */
    KneeCTWContrastIntraarticular = "36124-6",
    /**
     * Code: 36125-3
     */
    KneeMRIWContrastIntraarticular = "36125-3",
    /**
     * Code: 36126-1
     */
    KneeLeftMRIWContrastIntraarticular = "36126-1",
    /**
     * Code: 36127-9
     */
    KneeRightMRIWContrastIntraarticular = "36127-9",
    /**
     * Code: 36128-7
     */
    ShoulderCTWContrastIntraarticular = "36128-7",
    /**
     * Code: 36129-5
     */
    ShoulderMRIWContrastIntraarticular = "36129-5",
    /**
     * Code: 36130-3
     */
    ShoulderLeftMRIWContrastIntraarticular = "36130-3",
    /**
     * Code: 36131-1
     */
    ShoulderRightCTWContrastIntraarticular = "36131-1",
    /**
     * Code: 36132-9
     */
    ShoulderRightMRIWContrastIntraarticular = "36132-9",
    /**
     * Code: 36134-5
     */
    AbdomenMRIWContrastIV = "36134-5",
    /**
     * Code: 36135-2
     */
    AnkleCTWContrastIV = "36135-2",
    /**
     * Code: 36136-0
     */
    AnkleMRIWContrastIV = "36136-0",
    /**
     * Code: 36137-8
     */
    AnkleLeftCTWContrastIV = "36137-8",
    /**
     * Code: 36138-6
     */
    AnkleLeftMRIWContrastIV = "36138-6",
    /**
     * Code: 36139-4
     */
    AnkleRightCTWContrastIV = "36139-4",
    /**
     * Code: 36140-2
     */
    AnkleRightMRIWContrastIV = "36140-2",
    /**
     * Code: 36141-0
     */
    AortaCTAngiogramWContrastIV = "36141-0",
    /**
     * Code: 36142-8
     */
    AortaCTWContrastIV = "36142-8",
    /**
     * Code: 36143-6
     */
    AortaAbdominalCTWContrastIV = "36143-6",
    /**
     * Code: 36144-4
     */
    AorticArchCTAngiogramWContrastIV = "36144-4",
    /**
     * Code: 36145-1
     */
    AppendixCTWContrastIV = "36145-1",
    /**
     * Code: 36146-9
     */
    CarotidArteryCTAngiogramWContrastIV = "36146-9",
    /**
     * Code: 36147-7
     */
    PulmonaryArteryCTAngiogramWContrastIV = "36147-7",
    /**
     * Code: 36148-5
     */
    FaceMRIWContrastIV = "36148-5",
    /**
     * Code: 36149-3
     */
    BreastMRIWContrastIV = "36149-3",
    /**
     * Code: 36150-1
     */
    BreastBilateralMRIWContrastIV = "36150-1",
    /**
     * Code: 36151-9
     */
    BreastLeftMRIWContrastIV = "36151-9",
    /**
     * Code: 36152-7
     */
    BreastRightMRIWContrastIV = "36152-7",
    /**
     * Code: 36153-5
     */
    CalcaneusLeftCTWContrastIV = "36153-5",
    /**
     * Code: 36154-3
     */
    CalcaneusRightCTWContrastIV = "36154-3",
    /**
     * Code: 36155-0
     */
    InternalAuditoryCanalMRIWContrastIV = "36155-0",
    /**
     * Code: 36156-8
     */
    ChestMRIWContrastIV = "36156-8",
    /**
     * Code: 36157-6
     */
    ElbowCTWContrastIV = "36157-6",
    /**
     * Code: 36158-4
     */
    ElbowMRIWContrastIV = "36158-4",
    /**
     * Code: 36159-2
     */
    ElbowLeftCTWContrastIV = "36159-2",
    /**
     * Code: 36160-0
     */
    ElbowLeftMRIWContrastIV = "36160-0",
    /**
     * Code: 36161-8
     */
    ElbowRightCTWContrastIV = "36161-8",
    /**
     * Code: 36162-6
     */
    ElbowRightMRIWContrastIV = "36162-6",
    /**
     * Code: 36163-4
     */
    LowerExtremityBilateralMRIWContrastIV = "36163-4",
    /**
     * Code: 36164-2
     */
    LowerExtremityLeftCTWContrastIV = "36164-2",
    /**
     * Code: 36165-9
     */
    LowerExtremityLeftMRIWContrastIV = "36165-9",
    /**
     * Code: 36166-7
     */
    LowerExtremityRightCTWContrastIV = "36166-7",
    /**
     * Code: 36167-5
     */
    LowerExtremityRightMRIWContrastIV = "36167-5",
    /**
     * Code: 36168-3
     */
    UpperExtremityBilateralCTWContrastIV = "36168-3",
    /**
     * Code: 36169-1
     */
    UpperExtremityLeftCTWContrastIV = "36169-1",
    /**
     * Code: 36170-9
     */
    UpperExtremityRightCTWContrastIV = "36170-9",
    /**
     * Code: 36171-7
     */
    UpperExtremityRightMRIWContrastIV = "36171-7",
    /**
     * Code: 36172-5
     */
    FemurCTWContrastIV = "36172-5",
    /**
     * Code: 36173-3
     */
    ThighMRIWContrastIV = "36173-3",
    /**
     * Code: 36174-1
     */
    FemurLeftCTWContrastIV = "36174-1",
    /**
     * Code: 36175-8
     */
    ThighLeftMRIWContrastIV = "36175-8",
    /**
     * Code: 36176-6
     */
    FemurRightCTWContrastIV = "36176-6",
    /**
     * Code: 36177-4
     */
    ThighRightMRIWContrastIV = "36177-4",
    /**
     * Code: 36178-2
     */
    FootCTWContrastIV = "36178-2",
    /**
     * Code: 36179-0
     */
    FootMRIWContrastIV = "36179-0",
    /**
     * Code: 36180-8
     */
    FootBilateralMRIWContrastIV = "36180-8",
    /**
     * Code: 36181-6
     */
    FootLeftCTWContrastIV = "36181-6",
    /**
     * Code: 36182-4
     */
    FootLeftMRIWContrastIV = "36182-4",
    /**
     * Code: 36183-2
     */
    FootRightCTWContrastIV = "36183-2",
    /**
     * Code: 36184-0
     */
    FootRightMRIWContrastIV = "36184-0",
    /**
     * Code: 36185-7
     */
    ForearmCTWContrastIV = "36185-7",
    /**
     * Code: 36186-5
     */
    ForearmMRIWContrastIV = "36186-5",
    /**
     * Code: 36187-3
     */
    ForearmLeftCTWContrastIV = "36187-3",
    /**
     * Code: 36188-1
     */
    ForearmLeftMRIWContrastIV = "36188-1",
    /**
     * Code: 36189-9
     */
    ForearmRightCTWContrastIV = "36189-9",
    /**
     * Code: 36190-7
     */
    ForearmRightMRIWContrastIV = "36190-7",
    /**
     * Code: 36191-5
     */
    HandCTWContrastIV = "36191-5",
    /**
     * Code: 36192-3
     */
    HandMRIWContrastIV = "36192-3",
    /**
     * Code: 36193-1
     */
    HandLeftCTWContrastIV = "36193-1",
    /**
     * Code: 36194-9
     */
    HandLeftMRIWContrastIV = "36194-9",
    /**
     * Code: 36195-6
     */
    HandRightCTWContrastIV = "36195-6",
    /**
     * Code: 36196-4
     */
    HandRightMRIWContrastIV = "36196-4",
    /**
     * Code: 36197-2
     */
    HeartMRIWContrastIV = "36197-2",
    /**
     * Code: 36198-0
     */
    CalcaneusCTWContrastIV = "36198-0",
    /**
     * Code: 36199-8
     */
    HipMRIWContrastIV = "36199-8",
    /**
     * Code: 36200-4
     */
    HipCTWContrastIV = "36200-4",
    /**
     * Code: 36201-2
     */
    HipBilateralCTWContrastIV = "36201-2",
    /**
     * Code: 36202-0
     */
    HipBilateralMRIWContrastIV = "36202-0",
    /**
     * Code: 36203-8
     */
    HipLeftCTWContrastIV = "36203-8",
    /**
     * Code: 36204-6
     */
    HipLeftMRIWContrastIV = "36204-6",
    /**
     * Code: 36205-3
     */
    HipRightCTWContrastIV = "36205-3",
    /**
     * Code: 36206-1
     */
    HipRightMRIWContrastIV = "36206-1",
    /**
     * Code: 36207-9
     */
    UpperArmCTWContrastIV = "36207-9",
    /**
     * Code: 36208-7
     */
    UpperArmMRIWContrastIV = "36208-7",
    /**
     * Code: 36209-5
     */
    UpperArmLeftCTWContrastIV = "36209-5",
    /**
     * Code: 36210-3
     */
    UpperArmLeftMRIWContrastIV = "36210-3",
    /**
     * Code: 36211-1
     */
    UpperArmRightCTWContrastIV = "36211-1",
    /**
     * Code: 36212-9
     */
    UpperArmRightMRIWContrastIV = "36212-9",
    /**
     * Code: 36213-7
     */
    LowerExtremityJointMRIWContrastIV = "36213-7",
    /**
     * Code: 36214-5
     */
    LowerExtremityJointLeftMRIWContrastIV = "36214-5",
    /**
     * Code: 36215-2
     */
    LowerExtremityJointRightMRIWContrastIV = "36215-2",
    /**
     * Code: 36216-0
     */
    UpperExtremityJointMRIWContrastIV = "36216-0",
    /**
     * Code: 36217-8
     */
    SacroiliacJointCTWContrastIV = "36217-8",
    /**
     * Code: 36218-6
     */
    SacroiliacJointMRIWContrastIV = "36218-6",
    /**
     * Code: 36219-4
     */
    KidneyBilateralMRIWContrastIV = "36219-4",
    /**
     * Code: 36220-2
     */
    KidneyLeftMRIWContrastIV = "36220-2",
    /**
     * Code: 36221-0
     */
    KidneyRightMRIWContrastIV = "36221-0",
    /**
     * Code: 36222-8
     */
    KneeCTWContrastIV = "36222-8",
    /**
     * Code: 36223-6
     */
    KneeMRIWContrastIV = "36223-6",
    /**
     * Code: 36224-4
     */
    KneeBilateralMRIWContrastIV = "36224-4",
    /**
     * Code: 36225-1
     */
    KneeLeftCTWContrastIV = "36225-1",
    /**
     * Code: 36226-9
     */
    KneeLeftMRIWContrastIV = "36226-9",
    /**
     * Code: 36227-7
     */
    KneeRightCTWContrastIV = "36227-7",
    /**
     * Code: 36228-5
     */
    KneeRightMRIWContrastIV = "36228-5",
    /**
     * Code: 36229-3
     */
    LarynxCTWContrastIV = "36229-3",
    /**
     * Code: 36230-1
     */
    LarynxMRIWContrastIV = "36230-1",
    /**
     * Code: 36231-9
     */
    LiverMRIWContrastIV = "36231-9",
    /**
     * Code: 36232-7
     */
    MandibleCTWContrastIV = "36232-7",
    /**
     * Code: 36233-5
     */
    NasopharynxMRIWContrastIV = "36233-5",
    /**
     * Code: 36234-3
     */
    NeckVesselsCTAngiogramWContrastIV = "36234-3",
    /**
     * Code: 36235-0
     */
    NeckCTWContrastIV = "36235-0",
    /**
     * Code: 36236-8
     */
    PancreasMRIWContrastIV = "36236-8",
    /**
     * Code: 36237-6
     */
    PelvisMRIWContrastIV = "36237-6",
    /**
     * Code: 36238-4
     */
    PituitaryAndSellaTurcicaMRIWContrastIV = "36238-4",
    /**
     * Code: 36239-2
     */
    ThoracicOutletMRIWContrastIV = "36239-2",
    /**
     * Code: 36240-0
     */
    ThoracicOutletLeftMRIWContrastIV = "36240-0",
    /**
     * Code: 36241-8
     */
    ThoracicOutletRightMRIWContrastIV = "36241-8",
    /**
     * Code: 36242-6
     */
    PosteriorFossaCTWContrastIV = "36242-6",
    /**
     * Code: 36243-4
     */
    PosteriorFossaMRIWContrastIV = "36243-4",
    /**
     * Code: 36244-2
     */
    ProstateMRIWContrastIV = "36244-2",
    /**
     * Code: 36245-9
     */
    SacrumCTWContrastIV = "36245-9",
    /**
     * Code: 36246-7
     */
    SacrumMRIWContrastIV = "36246-7",
    /**
     * Code: 36247-5
     */
    SacrumAndCoccyxMRIWContrastIV = "36247-5",
    /**
     * Code: 36248-3
     */
    ScapulaLeftMRIWContrastIV = "36248-3",
    /**
     * Code: 36249-1
     */
    ScapulaRightMRIWContrastIV = "36249-1",
    /**
     * Code: 36250-9
     */
    ShoulderCTWContrastIV = "36250-9",
    /**
     * Code: 36251-7
     */
    ShoulderMRIWContrastIV = "36251-7",
    /**
     * Code: 36252-5
     */
    ShoulderLeftCTWContrastIV = "36252-5",
    /**
     * Code: 36253-3
     */
    ShoulderRightCTWContrastIV = "36253-3",
    /**
     * Code: 36254-1
     */
    ShoulderRightMRIWContrastIV = "36254-1",
    /**
     * Code: 36255-8
     */
    SinusesCTWContrastIV = "36255-8",
    /**
     * Code: 36256-6
     */
    SpineMRIWContrastIV = "36256-6",
    /**
     * Code: 36257-4
     */
    SternumCTWContrastIV = "36257-4",
    /**
     * Code: 36258-2
     */
    LowerLegCTWContrastIV = "36258-2",
    /**
     * Code: 36259-0
     */
    LowerLegMRIWContrastIV = "36259-0",
    /**
     * Code: 36260-8
     */
    LowerLegLeftCTWContrastIV = "36260-8",
    /**
     * Code: 36261-6
     */
    LowerLegLeftMRIWContrastIV = "36261-6",
    /**
     * Code: 36262-4
     */
    LowerLegRightCTWContrastIV = "36262-4",
    /**
     * Code: 36263-2
     */
    LowerLegRightMRIWContrastIV = "36263-2",
    /**
     * Code: 36264-0
     */
    UterusCTWContrastIV = "36264-0",
    /**
     * Code: 36265-7
     */
    UterusMRIWContrastIV = "36265-7",
    /**
     * Code: 36266-5
     */
    ChestVesselsCTAngiogramWContrastIV = "36266-5",
    /**
     * Code: 36267-3
     */
    AbdomenCTWAndWOContrastIV = "36267-3",
    /**
     * Code: 36268-1
     */
    AnkleCTWAndWOContrastIV = "36268-1",
    /**
     * Code: 36269-9
     */
    AnkleLeftCTWAndWOContrastIV = "36269-9",
    /**
     * Code: 36270-7
     */
    AnkleRightCTWAndWOContrastIV = "36270-7",
    /**
     * Code: 36271-5
     */
    AortaAbdominalCTWAndWOContrastIV = "36271-5",
    /**
     * Code: 36272-3
     */
    AortaAbdominalMRIAngiogramWAndWOContrastIV = "36272-3",
    /**
     * Code: 36273-1
     */
    AortaAbdominalMRIWAndWOContrastIV = "36273-1",
    /**
     * Code: 36274-9
     */
    AortaThoracicMRIAngiogramWAndWOContrastIV = "36274-9",
    /**
     * Code: 36275-6
     */
    RenalArteryMRIAngiogramWAndWOContrastIV = "36275-6",
    /**
     * Code: 36276-4
     */
    BreastMRIWAndWOContrastIV = "36276-4",
    /**
     * Code: 36277-2
     */
    BreastBilateralMRIWAndWOContrastIV = "36277-2",
    /**
     * Code: 36278-0
     */
    BreastLeftMRIWAndWOContrastIV = "36278-0",
    /**
     * Code: 36279-8
     */
    BreastRightMRIWAndWOContrastIV = "36279-8",
    /**
     * Code: 36280-6
     */
    CalcaneusLeftCTWAndWOContrastIV = "36280-6",
    /**
     * Code: 36281-4
     */
    CalcaneusRightCTWAndWOContrastIV = "36281-4",
    /**
     * Code: 36282-2
     */
    InternalAuditoryCanalCTWAndWOContrastIV = "36282-2",
    /**
     * Code: 36283-0
     */
    ChestMRIWAndWOContrastIV = "36283-0",
    /**
     * Code: 36284-8
     */
    ChestAndAbdomenMRIWAndWOContrastIV = "36284-8",
    /**
     * Code: 36285-5
     */
    ElbowCTWAndWOContrastIV = "36285-5",
    /**
     * Code: 36286-3
     */
    ElbowLeftCTWAndWOContrastIV = "36286-3",
    /**
     * Code: 36287-1
     */
    ElbowRightCTWAndWOContrastIV = "36287-1",
    /**
     * Code: 36288-9
     */
    LowerExtremityCTWAndWOContrastIV = "36288-9",
    /**
     * Code: 36289-7
     */
    LowerExtremityBilateralMRIWAndWOContrastIV = "36289-7",
    /**
     * Code: 36290-5
     */
    LowerExtremityLeftCTWAndWOContrastIV = "36290-5",
    /**
     * Code: 36291-3
     */
    LowerExtremityLeftMRIWAndWOContrastIV = "36291-3",
    /**
     * Code: 36292-1
     */
    LowerExtremityRightCTWAndWOContrastIV = "36292-1",
    /**
     * Code: 36293-9
     */
    AbdomenXRay3Views = "36293-9",
    /**
     * Code: 36294-7
     */
    AnkleXRay3Views = "36294-7",
    /**
     * Code: 36295-4
     */
    AnkleBilateralXRay3Views = "36295-4",
    /**
     * Code: 36296-2
     */
    AnkleLeftXRay3Views = "36296-2",
    /**
     * Code: 36297-0
     */
    FacialBonesXRay3Views = "36297-0",
    /**
     * Code: 36298-8
     */
    ChestXRay3Views = "36298-8",
    /**
     * Code: 36299-6
     */
    ElbowXRay3Views = "36299-6",
    /**
     * Code: 36300-2
     */
    ElbowBilateralXRay3Views = "36300-2",
    /**
     * Code: 36301-0
     */
    ElbowLeftXRay3Views = "36301-0",
    /**
     * Code: 36302-8
     */
    FemurXRay3Views = "36302-8",
    /**
     * Code: 36303-6
     */
    FingerXRay3Views = "36303-6",
    /**
     * Code: 36304-4
     */
    FingerLeftXRay3Views = "36304-4",
    /**
     * Code: 36305-1
     */
    FootXRay3Views = "36305-1",
    /**
     * Code: 36306-9
     */
    FootBilateralXRay3Views = "36306-9",
    /**
     * Code: 36307-7
     */
    FootLeftXRay3Views = "36307-7",
    /**
     * Code: 36308-5
     */
    HipBilateralXRay3Views = "36308-5",
    /**
     * Code: 36309-3
     */
    HipLeftXRay3Views = "36309-3",
    /**
     * Code: 36310-1
     */
    KneeBilateralXRay3Views = "36310-1",
    /**
     * Code: 36311-9
     */
    KneeLeftXRay3Views = "36311-9",
    /**
     * Code: 36312-7
     */
    MandibleXRay3Views = "36312-7",
    /**
     * Code: 36313-5
     */
    RibsBilateralXRay3Views = "36313-5",
    /**
     * Code: 36314-3
     */
    RibsLeftXRay3Views = "36314-3",
    /**
     * Code: 36315-0
     */
    ThumbLeftXRay3Views = "36315-0",
    /**
     * Code: 36316-8
     */
    ToesLeftXRay3Views = "36316-8",
    /**
     * Code: 36317-6
     */
    AnkleXRay4Views = "36317-6",
    /**
     * Code: 36318-4
     */
    FacialBonesXRay4Views = "36318-4",
    /**
     * Code: 36319-2
     */
    BreastMammogram4Views = "36319-2",
    /**
     * Code: 36320-0
     */
    ChestXRay4Views = "36320-0",
    /**
     * Code: 36321-8
     */
    ChestFluoroscopy4Views = "36321-8",
    /**
     * Code: 36322-6
     */
    ElbowBilateralXRay4Views = "36322-6",
    /**
     * Code: 36323-4
     */
    ElbowLeftXRay4Views = "36323-4",
    /**
     * Code: 36324-2
     */
    FemurLeftXRay4Views = "36324-2",
    /**
     * Code: 36325-9
     */
    KneeBilateralXRay4Views = "36325-9",
    /**
     * Code: 36326-7
     */
    KneeLeftXRay4Views = "36326-7",
    /**
     * Code: 36327-5
     */
    MandibleXRay4Views = "36327-5",
    /**
     * Code: 36328-3
     */
    RibsBilateralXRay4Views = "36328-3",
    /**
     * Code: 36329-1
     */
    ShoulderBilateralXRay4Views = "36329-1",
    /**
     * Code: 36330-9
     */
    ShoulderLeftXRay4Views = "36330-9",
    /**
     * Code: 36331-7
     */
    SpineCervicalXRay4Views = "36331-7",
    /**
     * Code: 36332-5
     */
    SpineLumbarXRay4Views = "36332-5",
    /**
     * Code: 36333-3
     */
    LowerExtremityRightMRIWAndWOContrastIV = "36333-3",
    /**
     * Code: 36334-1
     */
    UpperExtremityCTWAndWOContrastIV = "36334-1",
    /**
     * Code: 36335-8
     */
    UpperExtremityLeftCTWAndWOContrastIV = "36335-8",
    /**
     * Code: 36336-6
     */
    UpperExtremityRightCTWAndWOContrastIV = "36336-6",
    /**
     * Code: 36337-4
     */
    UpperExtremityRightMRIWAndWOContrastIV = "36337-4",
    /**
     * Code: 36338-2
     */
    FemurCTWAndWOContrastIV = "36338-2",
    /**
     * Code: 36339-0
     */
    FemurLeftCTWAndWOContrastIV = "36339-0",
    /**
     * Code: 36340-8
     */
    FemurRightCTWAndWOContrastIV = "36340-8",
    /**
     * Code: 36341-6
     */
    FootCTWAndWOContrastIV = "36341-6",
    /**
     * Code: 36342-4
     */
    FootBilateralMRIWAndWOContrastIV = "36342-4",
    /**
     * Code: 36343-2
     */
    FootLeftCTWAndWOContrastIV = "36343-2",
    /**
     * Code: 36344-0
     */
    FootLeftMRIWAndWOContrastIV = "36344-0",
    /**
     * Code: 36345-7
     */
    FootRightCTWAndWOContrastIV = "36345-7",
    /**
     * Code: 36346-5
     */
    FootRightMRIWAndWOContrastIV = "36346-5",
    /**
     * Code: 36347-3
     */
    ForearmCTWAndWOContrastIV = "36347-3",
    /**
     * Code: 36348-1
     */
    ForearmLeftCTWAndWOContrastIV = "36348-1",
    /**
     * Code: 36349-9
     */
    ForearmLeftMRIWAndWOContrastIV = "36349-9",
    /**
     * Code: 36350-7
     */
    ForearmRightCTWAndWOContrastIV = "36350-7",
    /**
     * Code: 36351-5
     */
    ForearmRightMRIWAndWOContrastIV = "36351-5",
    /**
     * Code: 36352-3
     */
    HandCTWAndWOContrastIV = "36352-3",
    /**
     * Code: 36353-1
     */
    HandLeftCTWAndWOContrastIV = "36353-1",
    /**
     * Code: 36354-9
     */
    HandLeftMRIWAndWOContrastIV = "36354-9",
    /**
     * Code: 36355-6
     */
    HandRightCTWAndWOContrastIV = "36355-6",
    /**
     * Code: 36356-4
     */
    HandRightMRIWAndWOContrastIV = "36356-4",
    /**
     * Code: 36357-2
     */
    HeartMRIWAndWOContrastIV = "36357-2",
    /**
     * Code: 36358-0
     */
    CalcaneusCTWAndWOContrastIV = "36358-0",
    /**
     * Code: 36359-8
     */
    HipCTWAndWOContrastIV = "36359-8",
    /**
     * Code: 36360-6
     */
    HipBilateralCTWAndWOContrastIV = "36360-6",
    /**
     * Code: 36361-4
     */
    HipBilateralMRIWAndWOContrastIV = "36361-4",
    /**
     * Code: 36362-2
     */
    HipLeftCTWAndWOContrastIV = "36362-2",
    /**
     * Code: 36363-0
     */
    HipLeftMRIWAndWOContrastIV = "36363-0",
    /**
     * Code: 36364-8
     */
    HipRightCTWAndWOContrastIV = "36364-8",
    /**
     * Code: 36365-5
     */
    HipRightMRIWAndWOContrastIV = "36365-5",
    /**
     * Code: 36366-3
     */
    UpperArmCTWAndWOContrastIV = "36366-3",
    /**
     * Code: 36367-1
     */
    UpperArmLeftCTWAndWOContrastIV = "36367-1",
    /**
     * Code: 36368-9
     */
    UpperArmLeftMRIWAndWOContrastIV = "36368-9",
    /**
     * Code: 36369-7
     */
    UpperArmRightCTWAndWOContrastIV = "36369-7",
    /**
     * Code: 36370-5
     */
    UpperArmRightMRIWAndWOContrastIV = "36370-5",
    /**
     * Code: 36371-3
     */
    LowerExtremityJointMRIWAndWOContrastIV = "36371-3",
    /**
     * Code: 36372-1
     */
    LowerExtremityJointLeftMRIWAndWOContrastIV = "36372-1",
    /**
     * Code: 36373-9
     */
    LowerExtremityJointRightMRIWAndWOContrastIV = "36373-9",
    /**
     * Code: 36374-7
     */
    UpperExtremityJointMRIWAndWOContrastIV = "36374-7",
    /**
     * Code: 36375-4
     */
    SacroiliacJointCTWAndWOContrastIV = "36375-4",
    /**
     * Code: 36376-2
     */
    SacroiliacJointMRIWAndWOContrastIV = "36376-2",
    /**
     * Code: 36377-0
     */
    KidneyBilateralCTWAndWOContrastIV = "36377-0",
    /**
     * Code: 36378-8
     */
    KidneyBilateralMRIWAndWOContrastIV = "36378-8",
    /**
     * Code: 36379-6
     */
    KneeCTWAndWOContrastIV = "36379-6",
    /**
     * Code: 36380-4
     */
    KneeLeftCTWAndWOContrastIV = "36380-4",
    /**
     * Code: 36381-2
     */
    KneeRightCTWAndWOContrastIV = "36381-2",
    /**
     * Code: 36382-0
     */
    LarynxMRIWAndWOContrastIV = "36382-0",
    /**
     * Code: 36383-8
     */
    MandibleCTWAndWOContrastIV = "36383-8",
    /**
     * Code: 36384-6
     */
    NasopharynxMRIWAndWOContrastIV = "36384-6",
    /**
     * Code: 36385-3
     */
    PancreasMRIWAndWOContrastIV = "36385-3",
    /**
     * Code: 36387-9
     */
    PosteriorFossaCTWAndWOContrastIV = "36387-9",
    /**
     * Code: 36388-7
     */
    PosteriorFossaMRIWAndWOContrastIV = "36388-7",
    /**
     * Code: 36389-5
     */
    ProstateMRIWAndWOContrastIV = "36389-5",
    /**
     * Code: 36390-3
     */
    SacrumCTWAndWOContrastIV = "36390-3",
    /**
     * Code: 36391-1
     */
    SacrumMRIWAndWOContrastIV = "36391-1",
    /**
     * Code: 36392-9
     */
    SacrumAndCoccyxMRIWAndWOContrastIV = "36392-9",
    /**
     * Code: 36393-7
     */
    ScapulaLeftMRIWAndWOContrastIV = "36393-7",
    /**
     * Code: 36394-5
     */
    ScapulaRightMRIWAndWOContrastIV = "36394-5",
    /**
     * Code: 36395-2
     */
    ShoulderCTWAndWOContrastIV = "36395-2",
    /**
     * Code: 36396-0
     */
    ShoulderLeftCTWAndWOContrastIV = "36396-0",
    /**
     * Code: 36397-8
     */
    ShoulderRightCTWAndWOContrastIV = "36397-8",
    /**
     * Code: 36398-6
     */
    SinusesCTWAndWOContrastIV = "36398-6",
    /**
     * Code: 36399-4
     */
    SpineCTWAndWOContrastIV = "36399-4",
    /**
     * Code: 36400-0
     */
    SpineMRIWAndWOContrastIV = "36400-0",
    /**
     * Code: 36401-8
     */
    SpineCervicalCTWAndWOContrastIV = "36401-8",
    /**
     * Code: 36402-6
     */
    SpineLumbarCTWAndWOContrastIV = "36402-6",
    /**
     * Code: 36403-4
     */
    SpineThoracicCTWAndWOContrastIV = "36403-4",
    /**
     * Code: 36404-2
     */
    SpleenMRIWAndWOContrastIV = "36404-2",
    /**
     * Code: 36405-9
     */
    SternumCTWAndWOContrastIV = "36405-9",
    /**
     * Code: 36406-7
     */
    ScrotumAndTesticleMRIWAndWOContrastIV = "36406-7",
    /**
     * Code: 36407-5
     */
    ThyroidMRIWAndWOContrastIV = "36407-5",
    /**
     * Code: 36408-3
     */
    LowerLegCTWAndWOContrastIV = "36408-3",
    /**
     * Code: 36409-1
     */
    LowerLegLeftCTWAndWOContrastIV = "36409-1",
    /**
     * Code: 36410-9
     */
    LowerLegLeftMRIWAndWOContrastIV = "36410-9",
    /**
     * Code: 36411-7
     */
    LowerLegRightCTWAndWOContrastIV = "36411-7",
    /**
     * Code: 36412-5
     */
    LowerLegRightMRIWAndWOContrastIV = "36412-5",
    /**
     * Code: 36413-3
     */
    UterusMRIWAndWOContrastIV = "36413-3",
    /**
     * Code: 36414-1
     */
    PortalVeinMRIAngiogramWAndWOContrastIV = "36414-1",
    /**
     * Code: 36415-8
     */
    RenalVeinMRIAngiogramWAndWOContrastIV = "36415-8",
    /**
     * Code: 36416-6
     */
    LowerExtremityVeinsMRIAngiogramWAndWOContrastIV = "36416-6",
    /**
     * Code: 36417-4
     */
    UpperExtremityVeinsMRIAngiogramWAndWOContrastIV = "36417-4",
    /**
     * Code: 36418-2
     */
    InferiorVenaCavaMRIWAndWOContrastIV = "36418-2",
    /**
     * Code: 36419-0
     */
    SuperiorVenaCavaMRIWAndWOContrastIV = "36419-0",
    /**
     * Code: 36420-8
     */
    ChestVesselsMRIAngiogramWAndWOContrastIV = "36420-8",
    /**
     * Code: 36421-6
     */
    UpperExtremityVesselsCTAngiogramWAndWOContrastIV = "36421-6",
    /**
     * Code: 36422-4
     */
    UpperExtremityVesselsMRIAngiogramWAndWOContrastIV = "36422-4",
    /**
     * Code: 36423-2
     */
    NeckVesselsMRIAngiogramWAndWOContrastIV = "36423-2",
    /**
     * Code: 36424-0
     */
    AbdomenCTWOContrast = "36424-0",
    /**
     * Code: 36425-7
     */
    AnkleCTWOContrast = "36425-7",
    /**
     * Code: 36426-5
     */
    AnkleLeftCTWOContrast = "36426-5",
    /**
     * Code: 36427-3
     */
    AnkleLeftMRIWOContrast = "36427-3",
    /**
     * Code: 36428-1
     */
    AnkleRightCTWOContrast = "36428-1",
    /**
     * Code: 36429-9
     */
    AnkleRightMRIWOContrast = "36429-9",
    /**
     * Code: 36430-7
     */
    AortaCTWOContrast = "36430-7",
    /**
     * Code: 36431-5
     */
    AortaAbdominalCTWOContrast = "36431-5",
    /**
     * Code: 36432-3
     */
    AortaAbdominalMRIAngiogramWOContrast = "36432-3",
    /**
     * Code: 36433-1
     */
    AortaThoracicMRIAngiogramWOContrast = "36433-1",
    /**
     * Code: 36434-9
     */
    AppendixCTWOContrast = "36434-9",
    /**
     * Code: 36435-6
     */
    FaceMRIWOContrast = "36435-6",
    /**
     * Code: 36436-4
     */
    BreastMRIWOContrast = "36436-4",
    /**
     * Code: 36437-2
     */
    BreastBilateralMRIWOContrast = "36437-2",
    /**
     * Code: 36438-0
     */
    BreastLeftMRIWOContrast = "36438-0",
    /**
     * Code: 36439-8
     */
    BreastRightMRIWOContrast = "36439-8",
    /**
     * Code: 36440-6
     */
    CalcaneusLeftCTWOContrast = "36440-6",
    /**
     * Code: 36441-4
     */
    CalcaneusRightCTWOContrast = "36441-4",
    /**
     * Code: 36442-2
     */
    ChestMRIWOContrast = "36442-2",
    /**
     * Code: 36443-0
     */
    ElbowCTWOContrast = "36443-0",
    /**
     * Code: 36444-8
     */
    ElbowBilateralCTWOContrast = "36444-8",
    /**
     * Code: 36445-5
     */
    ElbowLeftCTWOContrast = "36445-5",
    /**
     * Code: 36446-3
     */
    ElbowLeftMRIWOContrast = "36446-3",
    /**
     * Code: 36447-1
     */
    ElbowRightCTWOContrast = "36447-1",
    /**
     * Code: 36448-9
     */
    ElbowRightMRIWOContrast = "36448-9",
    /**
     * Code: 36449-7
     */
    LowerExtremityBilateralCTWOContrast = "36449-7",
    /**
     * Code: 36450-5
     */
    LowerExtremityVesselsBilateralMRIAngiogramWOContrast = "36450-5",
    /**
     * Code: 36451-3
     */
    LowerExtremityBilateralMRIWOContrast = "36451-3",
    /**
     * Code: 36452-1
     */
    LowerExtremityLeftCTWOContrast = "36452-1",
    /**
     * Code: 36453-9
     */
    LowerExtremityLeftMRIWOContrast = "36453-9",
    /**
     * Code: 36454-7
     */
    LowerExtremityRightCTWOContrast = "36454-7",
    /**
     * Code: 36455-4
     */
    LowerExtremityRightMRIWOContrast = "36455-4",
    /**
     * Code: 36456-2
     */
    UpperExtremityBilateralCTWOContrast = "36456-2",
    /**
     * Code: 36457-0
     */
    UpperExtremityLeftCTWOContrast = "36457-0",
    /**
     * Code: 36458-8
     */
    UpperExtremityRightCTWOContrast = "36458-8",
    /**
     * Code: 36459-6
     */
    UpperExtremityRightMRIWOContrast = "36459-6",
    /**
     * Code: 36460-4
     */
    FemurCTWOContrast = "36460-4",
    /**
     * Code: 36461-2
     */
    ThighMRIWOContrast = "36461-2",
    /**
     * Code: 36462-0
     */
    FemurLeftCTWOContrast = "36462-0",
    /**
     * Code: 36463-8
     */
    ThighLeftMRIWOContrast = "36463-8",
    /**
     * Code: 36464-6
     */
    FemurRightCTWOContrast = "36464-6",
    /**
     * Code: 36465-3
     */
    ThighRightMRIWOContrast = "36465-3",
    /**
     * Code: 36466-1
     */
    FootCTWOContrast = "36466-1",
    /**
     * Code: 36467-9
     */
    FootBilateralMRIWOContrast = "36467-9",
    /**
     * Code: 36468-7
     */
    FootLeftCTWOContrast = "36468-7",
    /**
     * Code: 36469-5
     */
    FootLeftMRIWOContrast = "36469-5",
    /**
     * Code: 36470-3
     */
    FootRightCTWOContrast = "36470-3",
    /**
     * Code: 36471-1
     */
    FootRightMRIWOContrast = "36471-1",
    /**
     * Code: 36472-9
     */
    ForearmCTWOContrast = "36472-9",
    /**
     * Code: 36473-7
     */
    ForearmLeftCTWOContrast = "36473-7",
    /**
     * Code: 36474-5
     */
    ForearmLeftMRIWOContrast = "36474-5",
    /**
     * Code: 36475-2
     */
    ForearmRightCTWOContrast = "36475-2",
    /**
     * Code: 36476-0
     */
    ForearmRightMRIWOContrast = "36476-0",
    /**
     * Code: 36477-8
     */
    HandCTWOContrast = "36477-8",
    /**
     * Code: 36478-6
     */
    HandLeftCTWOContrast = "36478-6",
    /**
     * Code: 36479-4
     */
    HandLeftMRIWOContrast = "36479-4",
    /**
     * Code: 36480-2
     */
    HandRightCTWOContrast = "36480-2",
    /**
     * Code: 36481-0
     */
    HandRightMRIWOContrast = "36481-0",
    /**
     * Code: 36482-8
     */
    HeartMRIWOContrast = "36482-8",
    /**
     * Code: 36483-6
     */
    CalcaneusCTWOContrast = "36483-6",
    /**
     * Code: 36484-4
     */
    HipCTWOContrast = "36484-4",
    /**
     * Code: 36485-1
     */
    HipBilateralCTWOContrast = "36485-1",
    /**
     * Code: 36486-9
     */
    HipBilateralMRIWOContrast = "36486-9",
    /**
     * Code: 36487-7
     */
    HipLeftCTWOContrast = "36487-7",
    /**
     * Code: 36488-5
     */
    HipLeftMRIWOContrast = "36488-5",
    /**
     * Code: 36489-3
     */
    HipRightCTWOContrast = "36489-3",
    /**
     * Code: 36490-1
     */
    HipRightMRIWOContrast = "36490-1",
    /**
     * Code: 36491-9
     */
    UpperArmCTWOContrast = "36491-9",
    /**
     * Code: 36492-7
     */
    UpperArmLeftCTWOContrast = "36492-7",
    /**
     * Code: 36493-5
     */
    UpperArmLeftMRIWOContrast = "36493-5",
    /**
     * Code: 36494-3
     */
    UpperArmRightCTWOContrast = "36494-3",
    /**
     * Code: 36495-0
     */
    UpperArmRightMRIWOContrast = "36495-0",
    /**
     * Code: 36496-8
     */
    AcromioclavicularJointMRIWOContrast = "36496-8",
    /**
     * Code: 36497-6
     */
    LowerExtremityJointMRIWOContrast = "36497-6",
    /**
     * Code: 36498-4
     */
    LowerExtremityJointLeftMRIWOContrast = "36498-4",
    /**
     * Code: 36499-2
     */
    LowerExtremityJointRightMRIWOContrast = "36499-2",
    /**
     * Code: 36500-7
     */
    UpperExtremityJointMRIWOContrast = "36500-7",
    /**
     * Code: 36501-5
     */
    SacroiliacJointCTWOContrast = "36501-5",
    /**
     * Code: 36502-3
     */
    SacroiliacJointMRIWOContrast = "36502-3",
    /**
     * Code: 36503-1
     */
    KidneyBilateralCTWOContrast = "36503-1",
    /**
     * Code: 36504-9
     */
    KidneyBilateralMRIWOContrast = "36504-9",
    /**
     * Code: 36505-6
     */
    KneeCTWOContrast = "36505-6",
    /**
     * Code: 36506-4
     */
    KneeBilateralMRIWOContrast = "36506-4",
    /**
     * Code: 36507-2
     */
    KneeLeftCTWOContrast = "36507-2",
    /**
     * Code: 36508-0
     */
    KneeLeftMRIWOContrast = "36508-0",
    /**
     * Code: 36509-8
     */
    KneeRightCTWOContrast = "36509-8",
    /**
     * Code: 36510-6
     */
    KneeRightMRIWOContrast = "36510-6",
    /**
     * Code: 36511-4
     */
    LarynxCTWOContrast = "36511-4",
    /**
     * Code: 36512-2
     */
    MandibleCTWOContrast = "36512-2",
    /**
     * Code: 36513-0
     */
    NasopharynxMRIWOContrast = "36513-0",
    /**
     * Code: 36514-8
     */
    NeckCTWOContrast = "36514-8",
    /**
     * Code: 36515-5
     */
    PancreasMRIWOContrast = "36515-5",
    /**
     * Code: 36516-3
     */
    ThoracicOutletRightMRIWOContrast = "36516-3",
    /**
     * Code: 36517-1
     */
    PosteriorFossaCTWOContrast = "36517-1",
    /**
     * Code: 36518-9
     */
    PosteriorFossaMRIWOContrast = "36518-9",
    /**
     * Code: 36519-7
     */
    ProstateMRIWOContrast = "36519-7",
    /**
     * Code: 36520-5
     */
    SacrumCTWOContrast = "36520-5",
    /**
     * Code: 36521-3
     */
    SacrumMRIWOContrast = "36521-3",
    /**
     * Code: 36522-1
     */
    SacrumAndCoccyxMRIWOContrast = "36522-1",
    /**
     * Code: 36523-9
     */
    ScapulaLeftMRIWOContrast = "36523-9",
    /**
     * Code: 36524-7
     */
    ShoulderCTWOContrast = "36524-7",
    /**
     * Code: 36525-4
     */
    ShoulderBilateralMRIWOContrast = "36525-4",
    /**
     * Code: 36526-2
     */
    ShoulderLeftCTWOContrast = "36526-2",
    /**
     * Code: 36527-0
     */
    ShoulderRightCTWOContrast = "36527-0",
    /**
     * Code: 36528-8
     */
    ShoulderRightMRIWOContrast = "36528-8",
    /**
     * Code: 36529-6
     */
    SinusesCTWOContrast = "36529-6",
    /**
     * Code: 36530-4
     */
    SpineCTWOContrast = "36530-4",
    /**
     * Code: 36531-2
     */
    SpineMRIWOContrast = "36531-2",
    /**
     * Code: 36532-0
     */
    SpineThoracicMRIWOContrast = "36532-0",
    /**
     * Code: 36533-8
     */
    SpleenMRIWOContrast = "36533-8",
    /**
     * Code: 36534-6
     */
    SternumCTWOContrast = "36534-6",
    /**
     * Code: 36535-3
     */
    ScrotumAndTesticleMRIWOContrast = "36535-3",
    /**
     * Code: 36536-1
     */
    ThyroidMRIWOContrast = "36536-1",
    /**
     * Code: 36537-9
     */
    LowerLegCTWOContrast = "36537-9",
    /**
     * Code: 36538-7
     */
    LowerLegLeftCTWOContrast = "36538-7",
    /**
     * Code: 36539-5
     */
    LowerLegLeftMRIWOContrast = "36539-5",
    /**
     * Code: 36540-3
     */
    LowerLegRightCTWOContrast = "36540-3",
    /**
     * Code: 36541-1
     */
    LowerLegRightMRIWOContrast = "36541-1",
    /**
     * Code: 36542-9
     */
    UterusMRIWOContrast = "36542-9",
    /**
     * Code: 36543-7
     */
    PortalVeinMRIAngiogramWOContrast = "36543-7",
    /**
     * Code: 36544-5
     */
    RenalVeinMRIAngiogramWOContrast = "36544-5",
    /**
     * Code: 36545-2
     */
    InferiorVenaCavaMRIWOContrast = "36545-2",
    /**
     * Code: 36546-0
     */
    SuperiorVenaCavaMRIWOContrast = "36546-0",
    /**
     * Code: 36547-8
     */
    ChestVesselsMRIAngiogramWOContrast = "36547-8",
    /**
     * Code: 36548-6
     */
    UpperExtremityVesselsMRIAngiogramWOContrast = "36548-6",
    /**
     * Code: 36549-4
     */
    NeckVesselsMRIAngiogramWOContrast = "36549-4",
    /**
     * Code: 36550-2
     */
    AbdomenXRaySingleView = "36550-2",
    /**
     * Code: 36551-0
     */
    AnkleXRaySingleView = "36551-0",
    /**
     * Code: 36554-4
     */
    ChestXRaySingleView = "36554-4",
    /**
     * Code: 36555-1
     */
    ClavicleXRaySingleView = "36555-1",
    /**
     * Code: 36556-9
     */
    ElbowXRaySingleView = "36556-9",
    /**
     * Code: 36557-7
     */
    LowerExtremityBilateralXRaySingleView = "36557-7",
    /**
     * Code: 36558-5
     */
    LowerExtremityLeftXRaySingleView = "36558-5",
    /**
     * Code: 36559-3
     */
    FemurXRaySingleView = "36559-3",
    /**
     * Code: 36560-1
     */
    FemurLeftXRaySingleView = "36560-1",
    /**
     * Code: 36561-9
     */
    FootXRaySingleView = "36561-9",
    /**
     * Code: 36563-5
     */
    HandXRaySingleView = "36563-5",
    /**
     * Code: 36564-3
     */
    CalcaneusXRaySingleView = "36564-3",
    /**
     * Code: 36565-0
     */
    HumerusXRaySingleView = "36565-0",
    /**
     * Code: 36566-8
     */
    KneeBilateralXRaySingleView = "36566-8",
    /**
     * Code: 36567-6
     */
    KneeLeftXRaySingleView = "36567-6",
    /**
     * Code: 36568-4
     */
    ShoulderBilateralXRaySingleView = "36568-4",
    /**
     * Code: 36569-2
     */
    ShoulderLeftXRaySingleView = "36569-2",
    /**
     * Code: 36570-0
     */
    WristLeftXRaySingleView = "36570-0",
    /**
     * Code: 36571-8
     */
    AnkleXRayAPSingleView = "36571-8",
    /**
     * Code: 36572-6
     */
    ChestXRayAPSingleView = "36572-6",
    /**
     * Code: 36573-4
     */
    ClavicleXRayAPSingleView = "36573-4",
    /**
     * Code: 36574-2
     */
    LowerExtremityXRayAPSingleView = "36574-2",
    /**
     * Code: 36575-9
     */
    FemurXRayAPSingleView = "36575-9",
    /**
     * Code: 36576-7
     */
    FingerFifthXRayAPSingleView = "36576-7",
    /**
     * Code: 36577-5
     */
    FingerFourthXRayAPSingleView = "36577-5",
    /**
     * Code: 36578-3
     */
    FingerThirdXRayAPSingleView = "36578-3",
    /**
     * Code: 36579-1
     */
    FootXRayAPSingleView = "36579-1",
    /**
     * Code: 36580-9
     */
    FootBilateralXRayAPSingleView = "36580-9",
    /**
     * Code: 36581-7
     */
    HipXRayAPSingleView = "36581-7",
    /**
     * Code: 36582-5
     */
    HipLeftXRayAPSingleView = "36582-5",
    /**
     * Code: 36583-3
     */
    AcromioclavicularJointLeftXRayAPSingleView = "36583-3",
    /**
     * Code: 36584-1
     */
    KneeXRayAPSingleView = "36584-1",
    /**
     * Code: 36585-8
     */
    KneeBilateralXRayAPSingleView = "36585-8",
    /**
     * Code: 36586-6
     */
    ShoulderBilateralXRayAPSingleView = "36586-6",
    /**
     * Code: 36587-4
     */
    ShoulderLeftXRayAPSingleView = "36587-4",
    /**
     * Code: 36588-2
     */
    AbdomenXRayAPPortableSingleView = "36588-2",
    /**
     * Code: 36589-0
     */
    ChestXRayAPPortableSingleView = "36589-0",
    /**
     * Code: 36590-8
     */
    KneeBilateralXRayAPAndLateral = "36590-8",
    /**
     * Code: 36591-6
     */
    AbdomenXRayLateral = "36591-6",
    /**
     * Code: 36592-4
     */
    AnkleXRayLateral = "36592-4",
    /**
     * Code: 36593-2
     */
    FemurXRayLateral = "36593-2",
    /**
     * Code: 36594-0
     */
    FingerFifthXRayLateral = "36594-0",
    /**
     * Code: 36595-7
     */
    FingerFourthXRayLateral = "36595-7",
    /**
     * Code: 36596-5
     */
    FingerSecondXRayLateral = "36596-5",
    /**
     * Code: 36597-3
     */
    FingerThirdXRayLateral = "36597-3",
    /**
     * Code: 36598-1
     */
    FootLeftXRayLateral = "36598-1",
    /**
     * Code: 36599-9
     */
    HandXRayLateral = "36599-9",
    /**
     * Code: 36600-5
     */
    HandBilateralXRayLateral = "36600-5",
    /**
     * Code: 36601-3
     */
    HandLeftXRayLateral = "36601-3",
    /**
     * Code: 36602-1
     */
    HipXRayLateral = "36602-1",
    /**
     * Code: 36603-9
     */
    HipLeftXRayLateral = "36603-9",
    /**
     * Code: 36604-7
     */
    KneeXRayLateral = "36604-7",
    /**
     * Code: 36605-4
     */
    KneeBilateralXRayLateral = "36605-4",
    /**
     * Code: 36606-2
     */
    KneeLeftXRayLateral = "36606-2",
    /**
     * Code: 36607-0
     */
    AbdomenXRayObliqueSingleView = "36607-0",
    /**
     * Code: 36608-8
     */
    ElbowXRayOblique = "36608-8",
    /**
     * Code: 36609-6
     */
    FemurXRayObliqueSingleView = "36609-6",
    /**
     * Code: 36610-4
     */
    FingerFifthXRayObliqueSingleView = "36610-4",
    /**
     * Code: 36611-2
     */
    FingerFourthXRayObliqueSingleView = "36611-2",
    /**
     * Code: 36612-0
     */
    FingerSecondXRayObliqueSingleView = "36612-0",
    /**
     * Code: 36613-8
     */
    FingerThirdXRayObliqueSingleView = "36613-8",
    /**
     * Code: 36614-6
     */
    FootXRayObliqueSingleView = "36614-6",
    /**
     * Code: 36615-3
     */
    FootLeftXRayObliqueSingleView = "36615-3",
    /**
     * Code: 36616-1
     */
    HandXRayObliqueSingleView = "36616-1",
    /**
     * Code: 36617-9
     */
    HipXRayObliqueSingleView = "36617-9",
    /**
     * Code: 36618-7
     */
    HipBilateralXRayObliqueSingleView = "36618-7",
    /**
     * Code: 36619-5
     */
    KneeXRayOblique = "36619-5",
    /**
     * Code: 36620-3
     */
    ChestXRayLeftAnteriorOblique = "36620-3",
    /**
     * Code: 36621-1
     */
    HandXRayPA = "36621-1",
    /**
     * Code: 36622-9
     */
    HandBilateralXRayPA = "36622-9",
    /**
     * Code: 36623-7
     */
    HandLeftXRayPA = "36623-7",
    /**
     * Code: 36624-5
     */
    WristBilateralXRayPA = "36624-5",
    /**
     * Code: 36625-2
     */
    BreastMammogram = "36625-2",
    /**
     * Code: 36626-0
     */
    BreastBilateralMammogram = "36626-0",
    /**
     * Code: 36627-8
     */
    BreastLeftMammogram = "36627-8",
    /**
     * Code: 36628-6
     */
    InternalAuditoryCanalXRay = "36628-6",
    /**
     * Code: 36629-4
     */
    HandBilateralXRay = "36629-4",
    /**
     * Code: 36630-2
     */
    HandLeftXRay = "36630-2",
    /**
     * Code: 36631-0
     */
    PelvisAndHipLeftXRay = "36631-0",
    /**
     * Code: 36632-8
     */
    HumerusLeftXRay = "36632-8",
    /**
     * Code: 36633-6
     */
    SacroiliacJointBilateralXRay = "36633-6",
    /**
     * Code: 36634-4
     */
    SacroiliacJointLeftXRay = "36634-4",
    /**
     * Code: 36635-1
     */
    KneeBilateralXRay = "36635-1",
    /**
     * Code: 36636-9
     */
    KneeLeftXRay = "36636-9",
    /**
     * Code: 36637-7
     */
    MaxillaXRay = "36637-7",
    /**
     * Code: 36638-5
     */
    PatellaBilateralXRay = "36638-5",
    /**
     * Code: 36639-3
     */
    PatellaLeftXRay = "36639-3",
    /**
     * Code: 36640-1
     */
    SpineCervicalFluoroscopy = "36640-1",
    /**
     * Code: 36641-9
     */
    AbdomenXRay2Views = "36641-9",
    /**
     * Code: 36642-7
     */
    BreastLeftMammogram2Views = "36642-7",
    /**
     * Code: 36643-5
     */
    ChestXRay2Views = "36643-5",
    /**
     * Code: 36644-3
     */
    ChestFluoroscopy2Views = "36644-3",
    /**
     * Code: 36645-0
     */
    ClavicleXRay2Views = "36645-0",
    /**
     * Code: 36646-8
     */
    ClavicleLeftXRay2Views = "36646-8",
    /**
     * Code: 36647-6
     */
    CoccyxXRay2Views = "36647-6",
    /**
     * Code: 36648-4
     */
    ElbowXRay2Views = "36648-4",
    /**
     * Code: 36649-2
     */
    ElbowBilateralXRay2Views = "36649-2",
    /**
     * Code: 36650-0
     */
    ElbowLeftXRay2Views = "36650-0",
    /**
     * Code: 36651-8
     */
    LowerExtremityXRay2Views = "36651-8",
    /**
     * Code: 36652-6
     */
    FemurXRay2Views = "36652-6",
    /**
     * Code: 36653-4
     */
    FemurBilateralXRay2Views = "36653-4",
    /**
     * Code: 36654-2
     */
    FemurLeftXRay2Views = "36654-2",
    /**
     * Code: 36655-9
     */
    FingerXRay2Views = "36655-9",
    /**
     * Code: 36656-7
     */
    FingerLeftXRay2Views = "36656-7",
    /**
     * Code: 36657-5
     */
    FootBilateralXRay2Views = "36657-5",
    /**
     * Code: 36658-3
     */
    RadiusAndUlnaXRay2Views = "36658-3",
    /**
     * Code: 36659-1
     */
    RadiusBilateralAndUlnaBilateralXRay2Views = "36659-1",
    /**
     * Code: 36660-9
     */
    RadiusLeftAndUlnaLeftXRay2Views = "36660-9",
    /**
     * Code: 36661-7
     */
    CalcaneusXRay2Views = "36661-7",
    /**
     * Code: 36662-5
     */
    CalcaneusLeftXRay2Views = "36662-5",
    /**
     * Code: 36663-3
     */
    HipXRay2Views = "36663-3",
    /**
     * Code: 36664-1
     */
    HipLeftXRay2Views = "36664-1",
    /**
     * Code: 36665-8
     */
    AcromioclavicularJointLeftXRay2Views = "36665-8",
    /**
     * Code: 36666-6
     */
    ScapulaLeftXRay2Views = "36666-6",
    /**
     * Code: 36667-4
     */
    ShoulderBilateralXRay2Views = "36667-4",
    /**
     * Code: 36668-2
     */
    ShoulderLeftXRay2Views = "36668-2",
    /**
     * Code: 36669-0
     */
    SpineCervicalXRay2Views = "36669-0",
    /**
     * Code: 36670-8
     */
    SpineLumbarXRay2Views = "36670-8",
    /**
     * Code: 36671-6
     */
    TibiaBilateralAndFibulaBilateralXRay2Views = "36671-6",
    /**
     * Code: 36672-4
     */
    TibiaLeftAndFibulaLeftXRay2Views = "36672-4",
    /**
     * Code: 36673-2
     */
    ToesLeftXRay2Views = "36673-2",
    /**
     * Code: 36674-0
     */
    SpineLumbarXRay2ViewsPortable = "36674-0",
    /**
     * Code: 36675-7
     */
    FacialBonesXRay5Views = "36675-7",
    /**
     * Code: 36676-5
     */
    KneeLeftXRay5Views = "36676-5",
    /**
     * Code: 36677-3
     */
    ShoulderLeftXRay5Views = "36677-3",
    /**
     * Code: 36678-1
     */
    KneeBilateralXRay6Views = "36678-1",
    /**
     * Code: 36679-9
     */
    ShoulderLeftXRay6Views = "36679-9",
    /**
     * Code: 36680-7
     */
    SpineCervicalXRay7Views = "36680-7",
    /**
     * Code: 36681-5
     */
    SpineLumbarXRay7Views = "36681-5",
    /**
     * Code: 36682-3
     */
    KneeBilateralXRay8Views = "36682-3",
    /**
     * Code: 36683-1
     */
    WristLeftXRay8Views = "36683-1",
    /**
     * Code: 36684-9
     */
    AnkleBilateralXRayAPAndLateral = "36684-9",
    /**
     * Code: 36685-6
     */
    AnkleLeftXRayAPAndLateral = "36685-6",
    /**
     * Code: 36686-4
     */
    CalcaneusBilateralXRayAPAndLateral = "36686-4",
    /**
     * Code: 36687-2
     */
    ChestXRayAPAndLateral = "36687-2",
    /**
     * Code: 36688-0
     */
    CoccyxXRayAPAndLateral = "36688-0",
    /**
     * Code: 36689-8
     */
    ElbowXRayAPAndLateral = "36689-8",
    /**
     * Code: 36690-6
     */
    ElbowBilateralXRayAPAndLateral = "36690-6",
    /**
     * Code: 36691-4
     */
    ElbowLeftXRayAPAndLateral = "36691-4",
    /**
     * Code: 36692-2
     */
    LowerExtremityXRayAPAndLateral = "36692-2",
    /**
     * Code: 36693-0
     */
    FemurXRayAPAndLateral = "36693-0",
    /**
     * Code: 36694-8
     */
    FemurBilateralXRayAPAndLateral = "36694-8",
    /**
     * Code: 36695-5
     */
    FemurLeftXRayAPAndLateral = "36695-5",
    /**
     * Code: 36696-3
     */
    FootBilateralXRayAPAndLateral = "36696-3",
    /**
     * Code: 36697-1
     */
    FootLeftXRayAPAndLateral = "36697-1",
    /**
     * Code: 36698-9
     */
    RadiusAndUlnaXRayAPAndLateral = "36698-9",
    /**
     * Code: 36699-7
     */
    RadiusBilateralAndUlnaBilateralXRayAPAndLateral = "36699-7",
    /**
     * Code: 36700-3
     */
    RadiusLeftAndUlnaLeftXRayAPAndLateral = "36700-3",
    /**
     * Code: 36701-1
     */
    CalcaneusLeftXRayAPAndLateral = "36701-1",
    /**
     * Code: 36702-9
     */
    HipXRayAPAndLateral = "36702-9",
    /**
     * Code: 36703-7
     */
    HipBilateralXRayAPAndLateral = "36703-7",
    /**
     * Code: 36704-5
     */
    HipLeftXRayAPAndLateral = "36704-5",
    /**
     * Code: 36705-2
     */
    PelvisAndHipXRayAPAndLateral = "36705-2",
    /**
     * Code: 36706-0
     */
    HumerusXRayAPAndLateral = "36706-0",
    /**
     * Code: 36707-8
     */
    HumerusBilateralXRayAPAndLateral = "36707-8",
    /**
     * Code: 36708-6
     */
    HumerusLeftXRayAPAndLateral = "36708-6",
    /**
     * Code: 36709-4
     */
    KneeXRayAPAndLateral = "36709-4",
    /**
     * Code: 36710-2
     */
    KneeLeftXRayAPAndLateral = "36710-2",
    /**
     * Code: 36711-0
     */
    MandibleXRayAPAndLateral = "36711-0",
    /**
     * Code: 36712-8
     */
    PatellaBilateralXRayAPAndLateral = "36712-8",
    /**
     * Code: 36713-6
     */
    PatellaLeftXRayAPAndLateral = "36713-6",
    /**
     * Code: 36714-4
     */
    ScapulaBilateralXRayAPAndLateral = "36714-4",
    /**
     * Code: 36715-1
     */
    ScapulaLeftXRayAPAndLateral = "36715-1",
    /**
     * Code: 36716-9
     */
    ShoulderBilateralXRayAPAndLateral = "36716-9",
    /**
     * Code: 36717-7
     */
    TibiaBilateralAndFibulaBilateralXRayAPAndLateral = "36717-7",
    /**
     * Code: 36718-5
     */
    TibiaLeftAndFibulaLeftXRayAPAndLateral = "36718-5",
    /**
     * Code: 36719-3
     */
    ToesLeftXRayAPAndLateral = "36719-3",
    /**
     * Code: 36720-1
     */
    AnkleBilateralXRayAPAndLateralAndOblique = "36720-1",
    /**
     * Code: 36721-9
     */
    AnkleLeftXRayAPAndLateralAndOblique = "36721-9",
    /**
     * Code: 36722-7
     */
    ElbowXRayAPAndLateralAndOblique = "36722-7",
    /**
     * Code: 36723-5
     */
    ElbowBilateralXRayAPAndLateralAndOblique = "36723-5",
    /**
     * Code: 36724-3
     */
    ElbowLeftXRayAPAndLateralAndOblique = "36724-3",
    /**
     * Code: 36725-0
     */
    FingerXRayAPAndLateralAndOblique = "36725-0",
    /**
     * Code: 36726-8
     */
    FingerBilateralXRayAPAndLateralAndOblique = "36726-8",
    /**
     * Code: 36727-6
     */
    FingerLeftXRayAPAndLateralAndOblique = "36727-6",
    /**
     * Code: 36728-4
     */
    FootXRayAPAndLateralAndOblique = "36728-4",
    /**
     * Code: 36729-2
     */
    FootBilateralXRayAPAndLateralAndOblique = "36729-2",
    /**
     * Code: 36730-0
     */
    FootLeftXRayAPAndLateralAndOblique = "36730-0",
    /**
     * Code: 36731-8
     */
    CalcaneusXRayAPAndLateralAndOblique = "36731-8",
    /**
     * Code: 36732-6
     */
    KneeBilateralXRayAPAndLateralAndOblique = "36732-6",
    /**
     * Code: 36733-4
     */
    KneeLeftXRayAPAndLateralAndOblique = "36733-4",
    /**
     * Code: 36734-2
     */
    SpineCervicalXRayAPAndLateralAndOblique = "36734-2",
    /**
     * Code: 36735-9
     */
    SpineLumbarXRayAPAndLateralAndOblique = "36735-9",
    /**
     * Code: 36736-7
     */
    ThumbLeftXRayAPAndLateralAndOblique = "36736-7",
    /**
     * Code: 36737-5
     */
    FacialBonesXRayLimited = "36737-5",
    /**
     * Code: 36738-3
     */
    MandibleXRayLimited = "36738-3",
    /**
     * Code: 36739-1
     */
    WristBilateralXRayLimited = "36739-1",
    /**
     * Code: 36740-9
     */
    ElbowBilateralXRayOblique = "36740-9",
    /**
     * Code: 36741-7
     */
    ElbowLeftXRayOblique = "36741-7",
    /**
     * Code: 36742-5
     */
    RadiusBilateralAndUlnaBilateralXRayOblique = "36742-5",
    /**
     * Code: 36743-3
     */
    RadiusLeftAndUlnaLeftXRayOblique = "36743-3",
    /**
     * Code: 36744-1
     */
    HumerusLeftXRayOblique = "36744-1",
    /**
     * Code: 36745-8
     */
    KneeBilateralXRayOblique = "36745-8",
    /**
     * Code: 36746-6
     */
    KneeLeftXRayOblique = "36746-6",
    /**
     * Code: 36747-4
     */
    MandibleXRayOblique = "36747-4",
    /**
     * Code: 36748-2
     */
    SpineCervicalXRayOblique = "36748-2",
    /**
     * Code: 36749-0
     */
    TibiaLeftAndFibulaLeftXRayOblique = "36749-0",
    /**
     * Code: 36750-8
     */
    ChestXRayPAAndAPLateralDecubitus = "36750-8",
    /**
     * Code: 36751-6
     */
    ChestFluoroscopyPAAndLateral = "36751-6",
    /**
     * Code: 36752-4
     */
    HandBilateralXRayPAAndLateral = "36752-4",
    /**
     * Code: 36753-2
     */
    HandLeftXRayPAAndLateral = "36753-2",
    /**
     * Code: 36754-0
     */
    MandibleXRayPAAndLateral = "36754-0",
    /**
     * Code: 36755-7
     */
    HandXRayPAAndLateralAndOblique = "36755-7",
    /**
     * Code: 36756-5
     */
    HandBilateralXRayPAAndLateralAndOblique = "36756-5",
    /**
     * Code: 36757-3
     */
    HandLeftXRayPAAndLateralAndOblique = "36757-3",
    /**
     * Code: 36758-1
     */
    ChestXRayPAAndLateralAndObliqueAndLordotic = "36758-1",
    /**
     * Code: 36759-9
     */
    ChestXRayPAAndLordotic = "36759-9",
    /**
     * Code: 36760-7
     */
    AVShuntFluoroscopicAngiogramAngioplastyWContrast = "36760-7",
    /**
     * Code: 36761-5
     */
    BiliaryDuctsFluoroscopyBalloonDilatationWContrast = "36761-5",
    /**
     * Code: 36762-3
     */
    ExtremityVesselFluoroscopicAngiogramAngioplastyWContrast = "36762-3",
    /**
     * Code: 36763-1
     */
    FemoralArteryAndPoplitealArteryFluoroscopicAngiogramAngioplastyWContrastIA = "36763-1",
    /**
     * Code: 36764-9
     */
    FemoralVesselAndPoplitealArteryFluoroscopicAngiogramAtherectomyWContrast = "36764-9",
    /**
     * Code: 36765-6
     */
    VesselFluoroscopicAngiogramAtherectomyWContrast = "36765-6",
    /**
     * Code: 36766-4
     */
    CoronaryArteriesFluoroscopicAngiogramAtherectomyWContrastIA = "36766-4",
    /**
     * Code: 36767-2
     */
    CTGuidanceForBiopsyOfAdrenalGland = "36767-2",
    /**
     * Code: 36768-0
     */
    CTGuidanceForBiopsyOfMuscle = "36768-0",
    /**
     * Code: 36769-8
     */
    CTGuidanceForChangeOfNephrostomyTubeInKidney = "36769-8",
    /**
     * Code: 36770-6
     */
    CTGuidanceForDrainageOfBiliaryDuctsAndGallbladder = "36770-6",
    /**
     * Code: 36771-4
     */
    FluoroscopyGuidanceForInjectionOfJoint = "36771-4",
    /**
     * Code: 36772-2
     */
    CTGuidanceForPlacementOfNephrostomyTubeInKidney = "36772-2",
    /**
     * Code: 36773-0
     */
    TemporalBoneCT = "36773-0",
    /**
     * Code: 36774-8
     */
    UpperExtremityJointLeftMRI = "36774-8",
    /**
     * Code: 36775-5
     */
    UpperExtremityJointRightMRI = "36775-5",
    /**
     * Code: 36776-3
     */
    MastoidXRayTomograph = "36776-3",
    /**
     * Code: 36777-1
     */
    OrbitMRI = "36777-1",
    /**
     * Code: 36778-9
     */
    OrbitRightMRI = "36778-9",
    /**
     * Code: 36779-7
     */
    OvaryMRI = "36779-7",
    /**
     * Code: 36780-5
     */
    ToeMRI = "36780-5",
    /**
     * Code: 36781-3
     */
    AbdominalVeinsMRIAngiogram = "36781-3",
    /**
     * Code: 36782-1
     */
    SubclavianArteryMRIAngiogram = "36782-1",
    /**
     * Code: 36783-9
     */
    VeinsMRIAngiogram = "36783-9",
    /**
     * Code: 36784-7
     */
    LowerExtremityVeinsLeftMRIAngiogram = "36784-7",
    /**
     * Code: 36785-4
     */
    LowerExtremityVeinsRightMRIAngiogram = "36785-4",
    /**
     * Code: 36786-2
     */
    UpperExtremityVeinsLeftMRIAngiogram = "36786-2",
    /**
     * Code: 36787-0
     */
    UpperExtremityVeinsRightMRIAngiogram = "36787-0",
    /**
     * Code: 36788-8
     */
    NeckVeinsMRIAngiogram = "36788-8",
    /**
     * Code: 36789-6
     */
    PelvisVeinsMRIAngiogram = "36789-6",
    /**
     * Code: 36790-4
     */
    VenaCavaInferiorAndLowerExtremityVeinsMRIAngiogram = "36790-4",
    /**
     * Code: 36791-2
     */
    AbdominalVesselsMRIAngiogram = "36791-2",
    /**
     * Code: 36792-0
     */
    AdrenalVesselsMRIAngiogram = "36792-0",
    /**
     * Code: 36793-8
     */
    CarotidVesselMRIAngiogram = "36793-8",
    /**
     * Code: 36794-6
     */
    ExtremityVesselsMRIAngiogram = "36794-6",
    /**
     * Code: 36795-3
     */
    LowerExtremityVesselsLeftMRIAngiogram = "36795-3",
    /**
     * Code: 36796-1
     */
    LowerExtremityVesselsRightMRIAngiogram = "36796-1",
    /**
     * Code: 36797-9
     */
    UpperExtremityVesselsLeftMRIAngiogram = "36797-9",
    /**
     * Code: 36798-7
     */
    UpperExtremityVesselsRightMRIAngiogram = "36798-7",
    /**
     * Code: 36799-5
     */
    KneeVesselsMRIAngiogram = "36799-5",
    /**
     * Code: 36800-1
     */
    KneeVesselsLeftMRIAngiogram = "36800-1",
    /**
     * Code: 36801-9
     */
    KneeVesselsRightMRIAngiogram = "36801-9",
    /**
     * Code: 36802-7
     */
    OrbitVesselsMRIAngiogram = "36802-7",
    /**
     * Code: 36803-5
     */
    PulmonaryVesselsMRIAngiogram = "36803-5",
    /**
     * Code: 36804-3
     */
    RenalVesselsBilateralMRIAngiogram = "36804-3",
    /**
     * Code: 36805-0
     */
    ShoulderVesselsMRIAngiogram = "36805-0",
    /**
     * Code: 36806-8
     */
    ShoulderVesselsLeftMRIAngiogram = "36806-8",
    /**
     * Code: 36807-6
     */
    ShoulderVesselsRightMRIAngiogram = "36807-6",
    /**
     * Code: 36808-4
     */
    HeadVesselsMRIAngiogramLimited = "36808-4",
    /**
     * Code: 36809-2
     */
    HepaticArteryCTAngiogramWContrastIA = "36809-2",
    /**
     * Code: 36810-0
     */
    UpperJointCTWContrastIntraarticular = "36810-0",
    /**
     * Code: 36811-8
     */
    JointCTWContrastIntraarticular = "36811-8",
    /**
     * Code: 36812-6
     */
    JointMRIWContrastIntraarticular = "36812-6",
    /**
     * Code: 36813-4
     */
    AbdomenAndPelvisCTWContrastIV = "36813-4",
    /**
     * Code: 36814-2
     */
    HeadArteriesCTAngiogramWContrastIV = "36814-2",
    /**
     * Code: 36815-9
     */
    TemporalBoneCTWContrastIV = "36815-9",
    /**
     * Code: 36816-7
     */
    TemporalBoneRightCTWContrastIV = "36816-7",
    /**
     * Code: 36817-5
     */
    UpperExtremityJointBilateralMRIWContrastIV = "36817-5",
    /**
     * Code: 36818-3
     */
    UpperExtremityJointLeftMRIWContrastIV = "36818-3",
    /**
     * Code: 36819-1
     */
    UpperExtremityJointRightMRIWContrastIV = "36819-1",
    /**
     * Code: 36820-9
     */
    OrbitMRIWContrastIV = "36820-9",
    /**
     * Code: 36821-7
     */
    OrbitLeftMRIWContrastIV = "36821-7",
    /**
     * Code: 36822-5
     */
    OrbitRightMRIWContrastIV = "36822-5",
    /**
     * Code: 36823-3
     */
    OvaryMRIWContrastIV = "36823-3",
    /**
     * Code: 36824-1
     */
    LowerExtremityVeinsLeftCTWContrastIV = "36824-1",
    /**
     * Code: 36825-8
     */
    LowerExtremityVeinsRightCTWContrastIV = "36825-8",
    /**
     * Code: 36826-6
     */
    HeadVeinsMRIAngiogramWContrastIV = "36826-6",
    /**
     * Code: 36827-4
     */
    NeckVeinsMRIAngiogramWContrastIV = "36827-4",
    /**
     * Code: 36828-2
     */
    AbdominalVesselsCTAngiogramWContrastIV = "36828-2",
    /**
     * Code: 36829-0
     */
    CarotidVesselMRIAngiogramWContrastIV = "36829-0",
    /**
     * Code: 36830-8
     */
    HeadVesselsCTAngiogramWContrastIV = "36830-8",
    /**
     * Code: 36831-6
     */
    LowerExtremityVesselsCTAngiogramWContrastIV = "36831-6",
    /**
     * Code: 36832-4
     */
    OrbitVesselsMRIAngiogramWContrastIV = "36832-4",
    /**
     * Code: 36833-2
     */
    RenalVesselsCTAngiogramWContrastIV = "36833-2",
    /**
     * Code: 36834-0
     */
    VesselCTAngiogramWContrastIV = "36834-0",
    /**
     * Code: 36835-7
     */
    PetrousBoneCTWAndWOContrastIV = "36835-7",
    /**
     * Code: 36837-3
     */
    TemporalBoneCTWAndWOContrastIV = "36837-3",
    /**
     * Code: 36838-1
     */
    MastoidXRay3Views = "36838-1",
    /**
     * Code: 36839-9
     */
    MastoidXRay4Views = "36839-9",
    /**
     * Code: 36840-7
     */
    UpperExtremityJointLeftMRIWAndWOContrastIV = "36840-7",
    /**
     * Code: 36841-5
     */
    UpperExtremityJointRightMRIWAndWOContrastIV = "36841-5",
    /**
     * Code: 36842-3
     */
    OrbitMRIWAndWOContrastIV = "36842-3",
    /**
     * Code: 36843-1
     */
    OrbitLeftMRIWAndWOContrastIV = "36843-1",
    /**
     * Code: 36844-9
     */
    OrbitRightMRIWAndWOContrastIV = "36844-9",
    /**
     * Code: 36845-6
     */
    OvaryMRIWAndWOContrastIV = "36845-6",
    /**
     * Code: 36846-4
     */
    AbdominalVeinsMRIAngiogramWAndWOContrastIV = "36846-4",
    /**
     * Code: 36847-2
     */
    HeadVeinsMRIAngiogramWAndWOContrastIV = "36847-2",
    /**
     * Code: 36848-0
     */
    ChestVeinsMRIAngiogramWAndWOContrastIV = "36848-0",
    /**
     * Code: 36849-8
     */
    LowerExtremityVeinsLeftMRIAngiogramWAndWOContrastIV = "36849-8",
    /**
     * Code: 36850-6
     */
    LowerExtremityVeinsRightMRIAngiogramWAndWOContrastIV = "36850-6",
    /**
     * Code: 36851-4
     */
    UpperExtremityVeinsLeftMRIAngiogramWAndWOContrastIV = "36851-4",
    /**
     * Code: 36852-2
     */
    UpperExtremityVeinsRightMRIAngiogramWAndWOContrastIV = "36852-2",
    /**
     * Code: 36853-0
     */
    NeckVeinsMRIAngiogramWAndWOContrastIV = "36853-0",
    /**
     * Code: 36854-8
     */
    PelvisVeinsMRIAngiogramWAndWOContrastIV = "36854-8",
    /**
     * Code: 36855-5
     */
    AbdominalVesselsMRIAngiogramWAndWOContrastIV = "36855-5",
    /**
     * Code: 36856-3
     */
    CarotidVesselMRIAngiogramWAndWOContrastIV = "36856-3",
    /**
     * Code: 36857-1
     */
    HeadVesselsMRIAngiogramWAndWOContrastIV = "36857-1",
    /**
     * Code: 36858-9
     */
    LowerExtremityVesselsLeftMRIAngiogramWAndWOContrastIV = "36858-9",
    /**
     * Code: 36859-7
     */
    LowerExtremityVesselsRightMRIAngiogramWAndWOContrastIV = "36859-7",
    /**
     * Code: 36860-5
     */
    UpperExtremityVesselsLeftMRIAngiogramWAndWOContrastIV = "36860-5",
    /**
     * Code: 36861-3
     */
    UpperExtremityVesselsRightMRIAngiogramWAndWOContrastIV = "36861-3",
    /**
     * Code: 36862-1
     */
    KneeVesselsRightMRIAngiogramWAndWOContrastIV = "36862-1",
    /**
     * Code: 36863-9
     */
    PelvisVesselsMRIAngiogramWAndWOContrastIV = "36863-9",
    /**
     * Code: 36864-7
     */
    ShoulderVesselsLeftMRIAngiogramWAndWOContrastIV = "36864-7",
    /**
     * Code: 36865-4
     */
    ShoulderVesselsRightMRIAngiogramWAndWOContrastIV = "36865-4",
    /**
     * Code: 36866-2
     */
    TemporalBoneCTWOContrast = "36866-2",
    /**
     * Code: 36867-0
     */
    TemporalBoneLeftCTWOContrast = "36867-0",
    /**
     * Code: 36868-8
     */
    TemporalBoneRightCTWOContrast = "36868-8",
    /**
     * Code: 36869-6
     */
    UpperExtremityJointLeftMRIWOContrast = "36869-6",
    /**
     * Code: 36870-4
     */
    UpperExtremityJointRightMRIWOContrast = "36870-4",
    /**
     * Code: 36871-2
     */
    JointMRIWOContrast = "36871-2",
    /**
     * Code: 36872-0
     */
    OrbitMRIWOContrast = "36872-0",
    /**
     * Code: 36873-8
     */
    OrbitLeftMRIWOContrast = "36873-8",
    /**
     * Code: 36874-6
     */
    OrbitRightMRIWOContrast = "36874-6",
    /**
     * Code: 36875-3
     */
    OvaryMRIWOContrast = "36875-3",
    /**
     * Code: 36876-1
     */
    HeadVeinsMRIAngiogramWOContrast = "36876-1",
    /**
     * Code: 36877-9
     */
    NeckVeinsMRIAngiogramWOContrast = "36877-9",
    /**
     * Code: 36878-7
     */
    AbdominalVesselsMRIAngiogramWOContrast = "36878-7",
    /**
     * Code: 36879-5
     */
    AnkleVesselsMRIAngiogramWOContrast = "36879-5",
    /**
     * Code: 36880-3
     */
    CarotidVesselMRIAngiogramWOContrast = "36880-3",
    /**
     * Code: 36881-1
     */
    HeadVesselsMRIAngiogramWOContrast = "36881-1",
    /**
     * Code: 36882-9
     */
    LowerExtremityVesselsLeftMRIAngiogramWOContrast = "36882-9",
    /**
     * Code: 36883-7
     */
    PelvisVesselsMRIAngiogramWOContrast = "36883-7",
    /**
     * Code: 36886-0
     */
    OrbitXRay = "36886-0",
    /**
     * Code: 36887-8
     */
    OrbitLeftXRay = "36887-8",
    /**
     * Code: 36890-2
     */
    MastoidXRay5Views = "36890-2",
    /**
     * Code: 36893-6
     */
    MastoidXRayLimited = "36893-6",
    /**
     * Code: 36894-4
     */
    TibiaAndFibulaXRayOblique = "36894-4",
    /**
     * Code: 36926-4
     */
    CTGuidanceForAspirationAndPlacementOfDrainageTubeOfAbdomen = "36926-4",
    /**
     * Code: 36927-2
     */
    CTGuidanceForBiopsyOfFacialBonesAndMaxilla = "36927-2",
    /**
     * Code: 36928-0
     */
    CTGuidanceStereotacticForBiopsyOfHead = "36928-0",
    /**
     * Code: 36929-8
     */
    CTGuidanceStereotacticForBiopsyOfHeadWOContrast = "36929-8",
    /**
     * Code: 36930-6
     */
    AdrenalGlandCT = "36930-6",
    /**
     * Code: 36931-4
     */
    AdrenalGlandMRI = "36931-4",
    /**
     * Code: 36932-2
     */
    PituitaryAndSellaTurcicaCT = "36932-2",
    /**
     * Code: 36933-0
     */
    SalivaryGlandMRI = "36933-0",
    /**
     * Code: 36934-8
     */
    HeartCTForScoring = "36934-8",
    /**
     * Code: 36935-5
     */
    HeartCTForScoringWContrastIV = "36935-5",
    /**
     * Code: 36936-3
     */
    MRIGuidanceStereotacticForBiopsyOfBrain = "36936-3",
    /**
     * Code: 36937-1
     */
    FacialBonesAndMaxillaCTLimited = "36937-1",
    /**
     * Code: 36938-9
     */
    FacialBonesAndMaxillaCTLimitedWOContrast = "36938-9",
    /**
     * Code: 36939-7
     */
    SpineCTStereotactic = "36939-7",
    /**
     * Code: 36940-5
     */
    UnspecifiedBodyRegionCTStereotactic = "36940-5",
    /**
     * Code: 36941-3
     */
    SalivaryGlandCTWContrastIntraSalivaryDuct = "36941-3",
    /**
     * Code: 36942-1
     */
    ChestAndAbdomenMRIWContrastIV = "36942-1",
    /**
     * Code: 36943-9
     */
    AdrenalGlandCTWContrastIV = "36943-9",
    /**
     * Code: 36944-7
     */
    BiliaryDuctsAndPancreaticDuctMRIWAndWOContrastIV = "36944-7",
    /**
     * Code: 36945-4
     */
    KneeBilateralXRay2ViewsStanding = "36945-4",
    /**
     * Code: 36946-2
     */
    SpineLumbarXRay2ViewsStanding = "36946-2",
    /**
     * Code: 36947-0
     */
    FootBilateralXRay3ViewsStanding = "36947-0",
    /**
     * Code: 36948-8
     */
    FootLeftXRay3ViewsStanding = "36948-8",
    /**
     * Code: 36949-6
     */
    SpineLumbarXRay3ViewsStanding = "36949-6",
    /**
     * Code: 36950-4
     */
    AdrenalGlandCTWAndWOContrastIV = "36950-4",
    /**
     * Code: 36951-2
     */
    AdrenalGlandMRIWAndWOContrastIV = "36951-2",
    /**
     * Code: 36952-0
     */
    AbdomenAndPelvisCTWOContrast = "36952-0",
    /**
     * Code: 36953-8
     */
    AdrenalGlandCTWOContrast = "36953-8",
    /**
     * Code: 36954-6
     */
    AdrenalGlandMRIWOContrast = "36954-6",
    /**
     * Code: 36955-3
     */
    ThyroidCTWOContrast = "36955-3",
    /**
     * Code: 36956-1
     */
    OrbitAndFaceMRIWOContrast = "36956-1",
    /**
     * Code: 36957-9
     */
    FacialBonesAndMaxillaCTAnd3DReconstruction = "36957-9",
    /**
     * Code: 36958-7
     */
    RibsBilateralXRayAPSingleView = "36958-7",
    /**
     * Code: 36959-5
     */
    RibsLeftXRayAPSingleView = "36959-5",
    /**
     * Code: 36960-3
     */
    ChestXRayAPUprightPortable = "36960-3",
    /**
     * Code: 36961-1
     */
    ShoulderLeftXRayAPAndWestPointAndOutlet = "36961-1",
    /**
     * Code: 36962-9
     */
    BreastMammogramAxillary = "36962-9",
    /**
     * Code: 36963-7
     */
    ShoulderBilateralXRayAxillary = "36963-7",
    /**
     * Code: 36964-5
     */
    ShoulderLeftXRayAxillary = "36964-5",
    /**
     * Code: 36965-2
     */
    HandXRayBallCatcher = "36965-2",
    /**
     * Code: 36966-0
     */
    HandBilateralXRayBrewerton = "36966-0",
    /**
     * Code: 36967-8
     */
    HandLeftXRayBrewerton = "36967-8",
    /**
     * Code: 36968-6
     */
    WristBilateralXRayWClenchedFist = "36968-6",
    /**
     * Code: 36971-0
     */
    WristLeftXRayLateralWExtension = "36971-0",
    /**
     * Code: 36972-8
     */
    WristLeftXRayLateralWFlexion = "36972-8",
    /**
     * Code: 36973-6
     */
    HipXRayFriedman = "36973-6",
    /**
     * Code: 36974-4
     */
    ShoulderLeftXRayGarth = "36974-4",
    /**
     * Code: 36975-1
     */
    CalcaneusBilateralXRayHarris = "36975-1",
    /**
     * Code: 36976-9
     */
    FootXRayHarris = "36976-9",
    /**
     * Code: 36977-7
     */
    CalcaneusLeftXRayHarris = "36977-7",
    /**
     * Code: 36978-5
     */
    KneeXRayHolmblad = "36978-5",
    /**
     * Code: 36979-3
     */
    ElbowXRayJones = "36979-3",
    /**
     * Code: 36980-1
     */
    ElbowLeftXRayJones = "36980-1",
    /**
     * Code: 36981-9
     */
    HipXRayJudet = "36981-9",
    /**
     * Code: 36982-7
     */
    HipBilateralXRayJudet = "36982-7",
    /**
     * Code: 36983-5
     */
    HipLeftXRayJudet = "36983-5",
    /**
     * Code: 36984-3
     */
    AbdomenXRayLateralCrosstable = "36984-3",
    /**
     * Code: 36985-0
     */
    HipXRayLateralCrosstable = "36985-0",
    /**
     * Code: 36986-8
     */
    HipBilateralXRayLateralCrosstable = "36986-8",
    /**
     * Code: 36987-6
     */
    HipLeftXRayLateralCrosstable = "36987-6",
    /**
     * Code: 36988-4
     */
    KneeXRayLateralCrosstable = "36988-4",
    /**
     * Code: 36989-2
     */
    SpineCervicalXRayLateralCrosstable = "36989-2",
    /**
     * Code: 36990-0
     */
    SpineLumbarXRayLateralCrosstable = "36990-0",
    /**
     * Code: 36991-8
     */
    SpineCervicalXRayLateralCrosstablePortable = "36991-8",
    /**
     * Code: 36992-6
     */
    SpineLumbarXRayLateralCrosstablePortable = "36992-6",
    /**
     * Code: 36993-4
     */
    HipBilateralXRayLateralFrog = "36993-4",
    /**
     * Code: 36994-2
     */
    HipLeftXRayLateralFrog = "36994-2",
    /**
     * Code: 36995-9
     */
    AbdomenXRayLeftLateral = "36995-9",
    /**
     * Code: 36996-7
     */
    AbdomenXRayRightLateral = "36996-7",
    /**
     * Code: 36997-5
     */
    SpineCervicalXRayLateralWExtension = "36997-5",
    /**
     * Code: 36998-3
     */
    SpineCervicalXRayLateralWFlexion = "36998-3",
    /**
     * Code: 36999-1
     */
    KneeBilateralXRayLateralHyperextension = "36999-1",
    /**
     * Code: 37000-7
     */
    KneeLeftXRayLateralHyperextension = "37000-7",
    /**
     * Code: 37001-5
     */
    FootXRayLateralStanding = "37001-5",
    /**
     * Code: 37002-3
     */
    KneeLeftXRayLateralStanding = "37002-3",
    /**
     * Code: 37003-1
     */
    SpineLumbarXRayLateralStanding = "37003-1",
    /**
     * Code: 37004-9
     */
    KneeXRayLaurin = "37004-9",
    /**
     * Code: 37005-6
     */
    BreastLeftMammogramMagnification = "37005-6",
    /**
     * Code: 37006-4
     */
    BreastBilateralMammogramMLO = "37006-4",
    /**
     * Code: 37007-2
     */
    AnkleXRayMortise = "37007-2",
    /**
     * Code: 37008-0
     */
    ChestXRayLeftOblique = "37008-0",
    /**
     * Code: 37009-8
     */
    SpineLumbarXRayLeftOblique = "37009-8",
    /**
     * Code: 37010-6
     */
    ChestXRayRightOblique = "37010-6",
    /**
     * Code: 37011-4
     */
    SpineLumbarXRayRightOblique = "37011-4",
    /**
     * Code: 37012-2
     */
    ShoulderBilateralXRayOutlet = "37012-2",
    /**
     * Code: 37013-0
     */
    ShoulderLeftXRayOutlet = "37013-0",
    /**
     * Code: 37014-8
     */
    KneeLeftXRayPAStanding = "37014-8",
    /**
     * Code: 37015-5
     */
    AbdomenXRayPAProne = "37015-5",
    /**
     * Code: 37016-3
     */
    BreastBilateralMammogramRoll = "37016-3",
    /**
     * Code: 37017-1
     */
    BreastLeftMammogramRoll = "37017-1",
    /**
     * Code: 37018-9
     */
    KneeXRayRosenbergStanding = "37018-9",
    /**
     * Code: 37019-7
     */
    KneeLeftXRayRosenbergStanding = "37019-7",
    /**
     * Code: 37020-5
     */
    KneeBilateralXRayRosenbergStanding = "37020-5",
    /**
     * Code: 37021-3
     */
    CalcaneusBilateralXRaySkiJump = "37021-3",
    /**
     * Code: 37022-1
     */
    CalcaneusXRaySkiJump = "37022-1",
    /**
     * Code: 37023-9
     */
    CalcaneusLeftXRaySkiJump = "37023-9",
    /**
     * Code: 37024-7
     */
    ShoulderBilateralXRayStrykerNotch = "37024-7",
    /**
     * Code: 37025-4
     */
    ShoulderLeftXRayStrykerNotch = "37025-4",
    /**
     * Code: 37026-2
     */
    SkullXRaySubmentovertex = "37026-2",
    /**
     * Code: 37027-0
     */
    KneeBilateralXRaySunrise = "37027-0",
    /**
     * Code: 37028-8
     */
    BreastMammogramTangential = "37028-8",
    /**
     * Code: 37029-6
     */
    BreastBilateralMammogramTangential = "37029-6",
    /**
     * Code: 37030-4
     */
    BreastLeftMammogramTangential = "37030-4",
    /**
     * Code: 37031-2
     */
    HumerusXRayTransthoracic = "37031-2",
    /**
     * Code: 37032-0
     */
    HumerusBilateralXRayTransthoracic = "37032-0",
    /**
     * Code: 37033-8
     */
    HumerusLeftXRayTransthoracic = "37033-8",
    /**
     * Code: 37034-6
     */
    ShoulderLeftXRayTransthoracic = "37034-6",
    /**
     * Code: 37035-3
     */
    ShoulderBilateralXRayGrashey = "37035-3",
    /**
     * Code: 37037-9
     */
    BreastMammogramTrueLateral = "37037-9",
    /**
     * Code: 37038-7
     */
    BreastBilateralMammogramTrueLateral = "37038-7",
    /**
     * Code: 37039-5
     */
    HipXRayTrueLateral = "37039-5",
    /**
     * Code: 37040-3
     */
    HipLeftXRayTrueLateral = "37040-3",
    /**
     * Code: 37041-1
     */
    KneeBilateralXRayTunnel = "37041-1",
    /**
     * Code: 37042-9
     */
    KneeLeftXRayTunnel = "37042-9",
    /**
     * Code: 37043-7
     */
    KneeLeftXRayTunnelStanding = "37043-7",
    /**
     * Code: 37044-5
     */
    WristLeftXRayUlnarDeviation = "37044-5",
    /**
     * Code: 37045-2
     */
    WristBilateralXRayUlnarVariance = "37045-2",
    /**
     * Code: 37046-0
     */
    AbdomenXRayUpright = "37046-0",
    /**
     * Code: 37047-8
     */
    ShoulderBilateralXRayVelpeauAxillary = "37047-8",
    /**
     * Code: 37048-6
     */
    ShoulderLeftXRayVelpeauAxillary = "37048-6",
    /**
     * Code: 37049-4
     */
    HipXRayVonRossen = "37049-4",
    /**
     * Code: 37050-2
     */
    ShoulderBilateralXRayWestPoint = "37050-2",
    /**
     * Code: 37051-0
     */
    ShoulderLeftXRayWestPoint = "37051-0",
    /**
     * Code: 37052-8
     */
    BreastBilateralMammogramXCCL = "37052-8",
    /**
     * Code: 37053-6
     */
    BreastLeftMammogramXCCL = "37053-6",
    /**
     * Code: 37054-4
     */
    ScapulaLeftXRayY = "37054-4",
    /**
     * Code: 37055-1
     */
    ScapulaBilateralXRayY = "37055-1",
    /**
     * Code: 37056-9
     */
    AcromioclavicularJointBilateralXRayZanca = "37056-9",
    /**
     * Code: 37057-7
     */
    AcromioclavicularJointLeftXRayZanca = "37057-7",
    /**
     * Code: 37058-5
     */
    CalcaneusBilateralXRayStanding = "37058-5",
    /**
     * Code: 37059-3
     */
    HipBilateralXRayStanding = "37059-3",
    /**
     * Code: 37060-1
     */
    FetalXRay = "37060-1",
    /**
     * Code: 37062-7
     */
    HumerusBilateralXRay = "37062-7",
    /**
     * Code: 37063-5
     */
    UnspecifiedBodyRegionFluoroscopyOfForeignBody = "37063-5",
    /**
     * Code: 37064-3
     */
    AcetabulumLeftXRay2Views = "37064-3",
    /**
     * Code: 37066-8
     */
    RibsLeftXRay2Views = "37066-8",
    /**
     * Code: 37067-6
     */
    ChestXRay2ViewsWNippleMarkers = "37067-6",
    /**
     * Code: 37068-4
     */
    FootBilateralXRay2ViewsStanding = "37068-4",
    /**
     * Code: 37069-2
     */
    FootLeftXRay2ViewsStanding = "37069-2",
    /**
     * Code: 37070-0
     */
    WristBilateralXRay4Views = "37070-0",
    /**
     * Code: 37071-8
     */
    WristLeftXRay4Views = "37071-8",
    /**
     * Code: 37072-6
     */
    WristLeftXRay5Views = "37072-6",
    /**
     * Code: 37073-4
     */
    SpineLumbarXRay5ViewsStanding = "37073-4",
    /**
     * Code: 37074-2
     */
    WristLeftXRay6Views = "37074-2",
    /**
     * Code: 37075-9
     */
    HipXRayAPPortable = "37075-9",
    /**
     * Code: 37076-7
     */
    AbdomenXRayAPSupineAndLateralDecubitusPortable = "37076-7",
    /**
     * Code: 37077-5
     */
    HipXRayAPAndLateralCrosstablePortable = "37077-5",
    /**
     * Code: 37078-3
     */
    SpineLumbarXRayAPAndLateralPortable = "37078-3",
    /**
     * Code: 37079-1
     */
    SpineCervicalXRayAPAndLateralAndOdontoidPortable = "37079-1",
    /**
     * Code: 37080-9
     */
    ShoulderBilateralXRayAPAndAxillary = "37080-9",
    /**
     * Code: 37081-7
     */
    ShoulderBilateralXRayAPAndAxillaryAndOutlet = "37081-7",
    /**
     * Code: 37082-5
     */
    ShoulderLeftXRayAPAndAxillaryAndOutlet = "37082-5",
    /**
     * Code: 37083-3
     */
    ShoulderLeftXRayAPAndAxillaryAndOutletAndZanca = "37083-3",
    /**
     * Code: 37084-1
     */
    ShoulderLeftXRayAPAndAxillaryAndY = "37084-1",
    /**
     * Code: 37085-8
     */
    AbdomenXRayAPSupineAndLateralDecubitus = "37085-8",
    /**
     * Code: 37086-6
     */
    HipXRayAPAndLateralCrosstable = "37086-6",
    /**
     * Code: 37087-4
     */
    HipLeftXRayAPAndLateralCrosstable = "37087-4",
    /**
     * Code: 37088-2
     */
    PelvisAndHipLeftXRayAPAndLateralCrosstable = "37088-2",
    /**
     * Code: 37089-0
     */
    PelvisAndHipXRayAPAndLateralCrosstable = "37089-0",
    /**
     * Code: 37090-8
     */
    KneeXRayAPAndLateralCrosstable = "37090-8",
    /**
     * Code: 37091-6
     */
    HipXRayAPAndLateralFrog = "37091-6",
    /**
     * Code: 37092-4
     */
    HipBilateralXRayAPAndLateralFrog = "37092-4",
    /**
     * Code: 37093-2
     */
    HipLeftXRayAPAndLateralFrog = "37093-2",
    /**
     * Code: 37094-0
     */
    PelvisAndHipLeftXRayAPAndLateralFrog = "37094-0",
    /**
     * Code: 37095-7
     */
    AnkleXRayAPAndLateralAndMortise = "37095-7",
    /**
     * Code: 37096-5
     */
    AnkleBilateralXRayAPAndLateralAndMortise = "37096-5",
    /**
     * Code: 37097-3
     */
    AnkleLeftXRayAPAndLateralAndMortise = "37097-3",
    /**
     * Code: 37098-1
     */
    SpineCervicalXRayAPAndObliqueAndLateralWFlexionAndWExtension = "37098-1",
    /**
     * Code: 37099-9
     */
    SpineCervicalXRayAPAndLateralAndObliqueAndOdontoid = "37099-9",
    /**
     * Code: 37100-5
     */
    SpineCervicalXRayAPAndObliqueAndOdontoidAndLateralWFlexionAndWExtension = "37100-5",
    /**
     * Code: 37101-3
     */
    SpineLumbarXRayAPAndLateralAndObliqueAndSpot = "37101-3",
    /**
     * Code: 37102-1
     */
    KneeBilateralXRayAPAndLateralAndObliqueAndSunrise = "37102-1",
    /**
     * Code: 37103-9
     */
    SpineCervicalXRayAPAndLateralAndOdontoid = "37103-9",
    /**
     * Code: 37104-7
     */
    SpineCervicalXRayAPAndOdontoidAndLateralWFlexionAndWExtension = "37104-7",
    /**
     * Code: 37105-4
     */
    SpineLumbarXRayAPAndLateralAndSpot = "37105-4",
    /**
     * Code: 37106-2
     */
    KneeXRayAPAndLateralAndSunrise = "37106-2",
    /**
     * Code: 37107-0
     */
    KneeBilateralXRayAPAndLateralAndSunrise = "37107-0",
    /**
     * Code: 37108-8
     */
    KneeLeftXRayAPAndLateralAndSunrise = "37108-8",
    /**
     * Code: 37109-6
     */
    PatellaBilateralXRayAPAndLateralAndSunrise = "37109-6",
    /**
     * Code: 37110-4
     */
    PatellaLeftXRayAPAndLateralAndSunrise = "37110-4",
    /**
     * Code: 37111-2
     */
    KneeXRayAPAndLateralAndSunriseAndTunnel = "37111-2",
    /**
     * Code: 37112-0
     */
    KneeXRayAPAndLateralAndTunnel = "37112-0",
    /**
     * Code: 37113-8
     */
    KneeBilateralXRayAPAndLateralAndTunnel = "37113-8",
    /**
     * Code: 37114-6
     */
    KneeLeftXRayAPAndLateralAndTunnel = "37114-6",
    /**
     * Code: 37115-3
     */
    KneeXRayAPAndLateralAndObliqueAndTunnel = "37115-3",
    /**
     * Code: 37116-1
     */
    KneeBilateralXRayAPAndLateralAndSunriseAndTunnel = "37116-1",
    /**
     * Code: 37117-9
     */
    KneeLeftXRayAPAndLateralAndSunriseAndTunnel = "37117-9",
    /**
     * Code: 37118-7
     */
    KneeBilateralXRayAPAndLateralAndObliqueAndSunriseAndTunnel = "37118-7",
    /**
     * Code: 37119-5
     */
    AbdomenXRayAPAndOblique = "37119-5",
    /**
     * Code: 37120-3
     */
    SpineCervicalXRayAPAndOdontoidAndLateralCrosstable = "37120-3",
    /**
     * Code: 37121-1
     */
    ClavicleLeftXRayAPAndSerendipity = "37121-1",
    /**
     * Code: 37122-9
     */
    ShoulderLeftXRayAPAndStrykerNotch = "37122-9",
    /**
     * Code: 37123-7
     */
    ShoulderLeftXRayAPAndWestPoint = "37123-7",
    /**
     * Code: 37124-5
     */
    ScapulaLeftXRayAPAndY = "37124-5",
    /**
     * Code: 37125-2
     */
    ShoulderLeftXRayAPAndY = "37125-2",
    /**
     * Code: 37126-0
     */
    ShoulderBilateralXRayAPAndAxillaryAndY = "37126-0",
    /**
     * Code: 37127-8
     */
    ShoulderBilateralXRayAxillaryAndY = "37127-8",
    /**
     * Code: 37128-6
     */
    ShoulderLeftXRayAxillaryAndY = "37128-6",
    /**
     * Code: 37131-0
     */
    AbdomenXRayRightLateralAndLeftLateral = "37131-0",
    /**
     * Code: 37132-8
     */
    SpineLumbarXRayLateralWFlexionAndWExtension = "37132-8",
    /**
     * Code: 37133-6
     */
    SpineCervicalXRayLateralWFlexionAndWExtension = "37133-6",
    /**
     * Code: 37134-4
     */
    AnkleBilateralXRayLateralAndMortise = "37134-4",
    /**
     * Code: 37135-1
     */
    AnkleLeftXRayLateralAndMortise = "37135-1",
    /**
     * Code: 37136-9
     */
    ShoulderLeftXRayLateralAndY = "37136-9",
    /**
     * Code: 37137-7
     */
    KidneyXRayLimitedWContrastIV = "37137-7",
    /**
     * Code: 37138-5
     */
    AbdomenXRayRightObliqueAndLeftOblique = "37138-5",
    /**
     * Code: 37139-3
     */
    SpineCervicalXRayObliqueAndLateralWFlexionAndWExtension = "37139-3",
    /**
     * Code: 37140-1
     */
    ShoulderLeftXRayOutletAndY = "37140-1",
    /**
     * Code: 37141-9
     */
    ChestXRayPAAndRightLateral = "37141-9",
    /**
     * Code: 37142-7
     */
    HandBilateralXRayPAAndLateralAndBallCatcher = "37142-7",
    /**
     * Code: 37143-5
     */
    ChestXRayPAAndLateralAndAPLateralDecubitus = "37143-5",
    /**
     * Code: 37144-3
     */
    ChestXRayPAAndLateralAndAPLeftLateralDecubitus = "37144-3",
    /**
     * Code: 37145-0
     */
    ChestXRayPAAndLateralAndAPRightLateralDecubitus = "37145-0",
    /**
     * Code: 37146-8
     */
    ChestXRayPAAndLateralAndLeftOblique = "37146-8",
    /**
     * Code: 37147-6
     */
    ChestXRayPAAndLateralAndRightOblique = "37147-6",
    /**
     * Code: 37148-4
     */
    MandibleXRayPAAndLateralAndObliqueAndTowne = "37148-4",
    /**
     * Code: 37149-2
     */
    PatellaLeftXRayPAAndLateralAndSunrise = "37149-2",
    /**
     * Code: 37150-0
     */
    ChestXRayPAAndRightObliqueAndLeftOblique = "37150-0",
    /**
     * Code: 37151-8
     */
    UnspecifiedBodyRegionFluoroscopyPortable = "37151-8",
    /**
     * Code: 37152-6
     */
    ShoulderBilateralXRayOutletAndY = "37152-6",
    /**
     * Code: 37153-4
     */
    MastoidXRayStenverAndArcelin = "37153-4",
    /**
     * Code: 37154-2
     */
    KneeXRayObliqueAndSunrise = "37154-2",
    /**
     * Code: 37155-9
     */
    KneeXRayObliqueAndSunriseAndTunnel = "37155-9",
    /**
     * Code: 37156-7
     */
    KneeLeftXRaySunriseAndTunnel = "37156-7",
    /**
     * Code: 37157-5
     */
    ShoulderLeftXRayGrasheyAndOutlet = "37157-5",
    /**
     * Code: 37158-3
     */
    ShoulderLeftXRayGrasheyAndAxillaryAndOutlet = "37158-3",
    /**
     * Code: 37159-1
     */
    FootLeftXRayTarsal = "37159-1",
    /**
     * Code: 37160-9
     */
    ShoulderLeftXRayGrasheyAndAxillary = "37160-9",
    /**
     * Code: 37161-7
     */
    ShoulderBilateralXRayGrasheyAndAxillaryAndOutletAndZanca = "37161-7",
    /**
     * Code: 37162-5
     */
    ShoulderLeftXRayGrasheyAndOutletAndSerendipity = "37162-5",
    /**
     * Code: 37163-3
     */
    KneeBilateralXRaySunriseAndTunnel = "37163-3",
    /**
     * Code: 37164-1
     */
    FacialBonesXRayLateralAndCaldwellAndWaters = "37164-1",
    /**
     * Code: 37165-8
     */
    FacialBonesXRayLateralAndCaldwellAndWatersAndSubmentovertex = "37165-8",
    /**
     * Code: 37166-6
     */
    FacialBonesXRayLateralAndCaldwellAndWatersAndSubmentovertexAndTowne = "37166-6",
    /**
     * Code: 37167-4
     */
    ShoulderLeftXRayGrasheyAndWestPoint = "37167-4",
    /**
     * Code: 37168-2
     */
    HipXRayPortable = "37168-2",
    /**
     * Code: 37169-0
     */
    HipLeftXRayPortable = "37169-0",
    /**
     * Code: 37170-8
     */
    HumerusXRayPortable = "37170-8",
    /**
     * Code: 37171-6
     */
    SpineCervicalXRayPortable = "37171-6",
    /**
     * Code: 37172-4
     */
    SpineLumbarXRayPortable = "37172-4",
    /**
     * Code: 37173-2
     */
    CerebralArteryFluoroscopicAngiogramWContrastIA = "37173-2",
    /**
     * Code: 37174-0
     */
    CoronaryArteriesFluoroscopicAngiogramWContrastIA = "37174-0",
    /**
     * Code: 37175-7
     */
    FemoralArteryFluoroscopicAngiogramWContrastIA = "37175-7",
    /**
     * Code: 37176-5
     */
    FemoralArteryAndPoplitealArteryFluoroscopicAngiogramWContrastIA = "37176-5",
    /**
     * Code: 37177-3
     */
    IliacArteryBilateralFluoroscopicAngiogramWContrastIA = "37177-3",
    /**
     * Code: 37178-1
     */
    IliacArteryLeftFluoroscopicAngiogramWContrastIA = "37178-1",
    /**
     * Code: 37179-9
     */
    InferiorMesentericArteryFluoroscopicAngiogramWContrastIA = "37179-9",
    /**
     * Code: 37180-7
     */
    SuperiorMesentericArteryFluoroscopicAngiogramWContrastIA = "37180-7",
    /**
     * Code: 37181-5
     */
    PoplitealArteryLeftFluoroscopicAngiogramWContrastIA = "37181-5",
    /**
     * Code: 37182-3
     */
    PulmonaryArteryLeftFluoroscopicAngiogramWContrastIA = "37182-3",
    /**
     * Code: 37183-1
     */
    AnkleFluoroscopyWContrastIntraarticular = "37183-1",
    /**
     * Code: 37184-9
     */
    AnkleBilateralFluoroscopyWContrastIntraarticular = "37184-9",
    /**
     * Code: 37185-6
     */
    AnkleLeftFluoroscopyWContrastIntraarticular = "37185-6",
    /**
     * Code: 37186-4
     */
    ElbowFluoroscopyWContrastIntraarticular = "37186-4",
    /**
     * Code: 37187-2
     */
    ElbowBilateralFluoroscopyWContrastIntraarticular = "37187-2",
    /**
     * Code: 37188-0
     */
    ElbowLeftFluoroscopyWContrastIntraarticular = "37188-0",
    /**
     * Code: 37189-8
     */
    SacroiliacJointBilateralFluoroscopyWContrastIntraarticular = "37189-8",
    /**
     * Code: 37190-6
     */
    SacroiliacJointLeftFluoroscopyWContrastIntraarticular = "37190-6",
    /**
     * Code: 37191-4
     */
    JointFluoroscopyWContrastIntraarticular = "37191-4",
    /**
     * Code: 37192-2
     */
    SpineCervicalFluoroscopyWContrastIntradisc = "37192-2",
    /**
     * Code: 37193-0
     */
    SpineLumbarFluoroscopyWContrastIntradisc = "37193-0",
    /**
     * Code: 37195-5
     */
    CerebralVeinFluoroscopicAngiogramWContrastIV = "37195-5",
    /**
     * Code: 37196-3
     */
    LowerExtremityVeinsLeftFluoroscopicAngiogramWContrastIV = "37196-3",
    /**
     * Code: 37197-1
     */
    JugularVeinFluoroscopicAngiogramWContrastIV = "37197-1",
    /**
     * Code: 37198-9
     */
    EsophagusXRayWContrastPO = "37198-9",
    /**
     * Code: 37199-7
     */
    ChestFluoroscopyWContrastPO = "37199-7",
    /**
     * Code: 37200-3
     */
    ChestXRayWContrastPO = "37200-3",
    /**
     * Code: 37201-1
     */
    AnkleXRayStanding = "37201-1",
    /**
     * Code: 37202-9
     */
    AnkleBilateralXRayStanding = "37202-9",
    /**
     * Code: 37203-7
     */
    AnkleLeftXRayStanding = "37203-7",
    /**
     * Code: 37204-5
     */
    LowerExtremityXRayStanding = "37204-5",
    /**
     * Code: 37205-2
     */
    CalcaneusXRayStanding = "37205-2",
    /**
     * Code: 37206-0
     */
    CalcaneusLeftXRayStanding = "37206-0",
    /**
     * Code: 37207-8
     */
    HipLeftXRayStanding = "37207-8",
    /**
     * Code: 37208-6
     */
    SpineLumbarXRayStanding = "37208-6",
    /**
     * Code: 37209-4
     */
    ToesLeftXRayStanding = "37209-4",
    /**
     * Code: 37210-2
     */
    CTGuidanceForAspirationOfCystOfAbdomen = "37210-2",
    /**
     * Code: 37211-0
     */
    CTGuidanceForBiopsyOfBoneMarrow = "37211-0",
    /**
     * Code: 37212-8
     */
    CTGuidanceForBiopsyOfEpididymis = "37212-8",
    /**
     * Code: 37213-6
     */
    CTGuidanceForBiopsyOfMediastinum = "37213-6",
    /**
     * Code: 37214-4
     */
    CTGuidanceForBiopsyOfSuperficialTissue = "37214-4",
    /**
     * Code: 37215-1
     */
    BrainAndLarynxMRIWContrastIV = "37215-1",
    /**
     * Code: 37216-9
     */
    AortaEndograftCT = "37216-9",
    /**
     * Code: 37217-7
     */
    BrainStemAndNervesCranialMRI = "37217-7",
    /**
     * Code: 37218-5
     */
    BrainTemporalMRI = "37218-5",
    /**
     * Code: 37219-3
     */
    BiliaryDuctsMRI = "37219-3",
    /**
     * Code: 37220-1
     */
    BiliaryDuctsAndPancreaticDuctMRI = "37220-1",
    /**
     * Code: 37221-9
     */
    FistulaCT = "37221-9",
    /**
     * Code: 37222-7
     */
    AnkleAndFootMRI = "37222-7",
    /**
     * Code: 37223-5
     */
    ParotidGlandCT = "37223-5",
    /**
     * Code: 37224-3
     */
    ParotidGlandMRI = "37224-3",
    /**
     * Code: 37225-0
     */
    SternoclavicularJointCT = "37225-0",
    /**
     * Code: 37226-8
     */
    TemporomandibularJointCT = "37226-8",
    /**
     * Code: 37227-6
     */
    TemporomandibularJointBilateralXRayTomograph = "37227-6",
    /**
     * Code: 37228-4
     */
    TemporomandibularJointBilateralMRI = "37228-4",
    /**
     * Code: 37229-2
     */
    TemporomandibularJointLeftXRayTomograph = "37229-2",
    /**
     * Code: 37230-0
     */
    TemporomandibularJointLeftMRI = "37230-0",
    /**
     * Code: 37231-8
     */
    TemporomandibularJointRightMRI = "37231-8",
    /**
     * Code: 37232-6
     */
    SpineLumbosacralJunctionCT = "37232-6",
    /**
     * Code: 37233-4
     */
    MediastinumXRayTomograph = "37233-4",
    /**
     * Code: 37234-2
     */
    MediastinumMRI = "37234-2",
    /**
     * Code: 37235-9
     */
    CircleOfWillisMRIAngiogram = "37235-9",
    /**
     * Code: 37236-7
     */
    GreatVesselMRI = "37236-7",
    /**
     * Code: 37237-5
     */
    SinusTractCTWContrastIntraSinusTract = "37237-5",
    /**
     * Code: 37238-3
     */
    LowerExtremityJointCTWContrastIntraarticular = "37238-3",
    /**
     * Code: 37239-1
     */
    BrainAndInternalAuditoryCanalMRIWContrastIV = "37239-1",
    /**
     * Code: 37240-9
     */
    ParotidGlandCTWContrastIV = "37240-9",
    /**
     * Code: 37241-7
     */
    ParotidGlandMRIWContrastIV = "37241-7",
    /**
     * Code: 37242-5
     */
    SternoclavicularJointCTWContrastIV = "37242-5",
    /**
     * Code: 37243-3
     */
    TemporomandibularJointCTWContrastIV = "37243-3",
    /**
     * Code: 37244-1
     */
    TemporomandibularJointMRIWContrastIV = "37244-1",
    /**
     * Code: 37245-8
     */
    TemporomandibularJointBilateralMRIWContrastIV = "37245-8",
    /**
     * Code: 37246-6
     */
    TemporomandibularJointLeftCTWContrastIV = "37246-6",
    /**
     * Code: 37247-4
     */
    TemporomandibularJointLeftMRIWContrastIV = "37247-4",
    /**
     * Code: 37248-2
     */
    TemporomandibularJointRightCTWContrastIV = "37248-2",
    /**
     * Code: 37249-0
     */
    TemporomandibularJointRightMRIWContrastIV = "37249-0",
    /**
     * Code: 37253-2
     */
    SoftTissueMRIWContrastIV = "37253-2",
    /**
     * Code: 37254-0
     */
    CircleOfWillisMRIAngiogramWContrastIV = "37254-0",
    /**
     * Code: 37256-5
     */
    PelvisAndSpineLumbarXRay3Views = "37256-5",
    /**
     * Code: 37257-3
     */
    SpineLumbarAndSacroiliacJointXRay3Views = "37257-3",
    /**
     * Code: 37259-9
     */
    SpineLumbarAndSacrumXRay3Views = "37259-9",
    /**
     * Code: 37260-7
     */
    SpineLumbarAndSacrumAndCoccyxXRay3Views = "37260-7",
    /**
     * Code: 37261-5
     */
    SpineLumbarAndSacrumAndSacroiliacJointAndCoccyxXRay3Views = "37261-5",
    /**
     * Code: 37265-6
     */
    ParotidGlandMRIWAndWOContrastIV = "37265-6",
    /**
     * Code: 37266-4
     */
    SternoclavicularJointCTWAndWOContrastIV = "37266-4",
    /**
     * Code: 37267-2
     */
    TemporomandibularJointCTWAndWOContrastIV = "37267-2",
    /**
     * Code: 37268-0
     */
    TemporomandibularJointMRIWAndWOContrastIV = "37268-0",
    /**
     * Code: 37269-8
     */
    TemporomandibularJointBilateralMRIWAndWOContrastIV = "37269-8",
    /**
     * Code: 37270-6
     */
    TemporomandibularJointLeftMRIWAndWOContrastIV = "37270-6",
    /**
     * Code: 37271-4
     */
    TemporomandibularJointRightMRIWAndWOContrastIV = "37271-4",
    /**
     * Code: 37272-2
     */
    MediastinumMRIWAndWOContrastIV = "37272-2",
    /**
     * Code: 37277-1
     */
    SpinalVeinMRIAngiogramWAndWOContrastIV = "37277-1",
    /**
     * Code: 37278-9
     */
    BrainAndInternalAuditoryCanalMRIWOContrast = "37278-9",
    /**
     * Code: 37279-7
     */
    BrainAndLarynxMRIWOContrast = "37279-7",
    /**
     * Code: 37280-5
     */
    ParotidGlandCTWOContrast = "37280-5",
    /**
     * Code: 37281-3
     */
    ParotidGlandMRIWOContrast = "37281-3",
    /**
     * Code: 37282-1
     */
    SternoclavicularJointCTWOContrast = "37282-1",
    /**
     * Code: 37283-9
     */
    TemporomandibularJointCTWOContrast = "37283-9",
    /**
     * Code: 37284-7
     */
    TemporomandibularJointMRIWOContrast = "37284-7",
    /**
     * Code: 37285-4
     */
    TemporomandibularJointBilateralMRIWOContrast = "37285-4",
    /**
     * Code: 37286-2
     */
    TemporomandibularJointLeftMRIWOContrast = "37286-2",
    /**
     * Code: 37287-0
     */
    TemporomandibularJointRightMRIWOContrast = "37287-0",
    /**
     * Code: 37288-8
     */
    SpineLumbosacralJunctionCTWOContrast = "37288-8",
    /**
     * Code: 37293-8
     */
    SoftTissueMRIWOContrast = "37293-8",
    /**
     * Code: 37294-6
     */
    HeadCTAnd3DReconstruction = "37294-6",
    /**
     * Code: 37295-3
     */
    FemurAndHipCTAndAnteversionMeasurement = "37295-3",
    /**
     * Code: 37297-9
     */
    AbdomenAndFetusXRayViewForFetalAge = "37297-9",
    /**
     * Code: 37298-7
     */
    SternoclavicularJointBilateralXRaySerendipity = "37298-7",
    /**
     * Code: 37299-5
     */
    SternoclavicularJointLeftXRaySerendipity = "37299-5",
    /**
     * Code: 37300-1
     */
    SpineLumbosacralJunctionXRayTrueAP = "37300-1",
    /**
     * Code: 37302-7
     */
    WristLeftXRayScaphoid = "37302-7",
    /**
     * Code: 37303-5
     */
    FacialBonesAndZygomaticArchXRay = "37303-5",
    /**
     * Code: 37304-3
     */
    WristBilateralXRayScaphoid = "37304-3",
    /**
     * Code: 37319-1
     */
    HumerusBicipitalGrooveXRay = "37319-1",
    /**
     * Code: 37320-9
     */
    HumerusBicipitalGrooveLeftXRay = "37320-9",
    /**
     * Code: 37321-7
     */
    HumerusBicipitalGrooveBilateralXRay = "37321-7",
    /**
     * Code: 37323-3
     */
    SternoclavicularJointBilateralXRay = "37323-3",
    /**
     * Code: 37324-1
     */
    SternoclavicularJointLeftXRay = "37324-1",
    /**
     * Code: 37325-8
     */
    TemporomandibularJointBilateralXRay = "37325-8",
    /**
     * Code: 37332-4
     */
    OlecranonLeftXRay = "37332-4",
    /**
     * Code: 37338-1
     */
    SkullAndFacialBonesAndMandibleXRay = "37338-1",
    /**
     * Code: 37340-7
     */
    SpineLumbarAndSacrumXRay = "37340-7",
    /**
     * Code: 37341-5
     */
    SpineLumbarAndSacrumAndCoccyxXRay = "37341-5",
    /**
     * Code: 37342-3
     */
    SpineLumbarAndSacrumAndSacroiliacJointAndCoccyxXRay = "37342-3",
    /**
     * Code: 37348-0
     */
    ToesBilateralXRay2Views = "37348-0",
    /**
     * Code: 37350-6
     */
    TemporomandibularJointBilateralXRay5Views = "37350-6",
    /**
     * Code: 37351-4
     */
    PelvisAndSpineLumbarXRay5Views = "37351-4",
    /**
     * Code: 37353-0
     */
    SpineLumbarAndSacroiliacJointXRay5Views = "37353-0",
    /**
     * Code: 37355-5
     */
    SpineLumbarAndSacrumXRay5Views = "37355-5",
    /**
     * Code: 37356-3
     */
    SpineLumbarAndSacrumAndCoccyxXRay5Views = "37356-3",
    /**
     * Code: 37357-1
     */
    SpineLumbarAndSacrumAndSacroiliacJointAndCoccyxXRay5Views = "37357-1",
    /**
     * Code: 37361-3
     */
    SpineCervicalAndSpineThoracicXRayAPAndLateral = "37361-3",
    /**
     * Code: 37362-1
     */
    BonesXRayBoneAge = "37362-1",
    /**
     * Code: 37364-7
     */
    AortaAndFemoralArteryLeftFluoroscopicAngiogramRunoffWContrastIA = "37364-7",
    /**
     * Code: 37365-4
     */
    BonesXRaySurveyForMetastasis = "37365-4",
    /**
     * Code: 37366-2
     */
    AbdominalAortaAndArteriesFluoroscopicAngiogramWContrastIA = "37366-2",
    /**
     * Code: 37379-5
     */
    AorticArchAndUpperExtremityArteryFluoroscopicAngiogramWContrastIA = "37379-5",
    /**
     * Code: 37380-3
     */
    AorticArchAndBrachialArteryFluoroscopicAngiogramWContrastIA = "37380-3",
    /**
     * Code: 37381-1
     */
    AorticArchAndCarotidArteryFluoroscopicAngiogramWContrastIA = "37381-1",
    /**
     * Code: 37382-9
     */
    AorticArchAndSubclavianArteryFluoroscopicAngiogramWContrastIA = "37382-9",
    /**
     * Code: 37383-7
     */
    AorticArchAndSubclavianArteryLeftFluoroscopicAngiogramWContrastIA = "37383-7",
    /**
     * Code: 37384-5
     */
    AorticArchAndVertebralArteryFluoroscopicAngiogramWContrastIA = "37384-5",
    /**
     * Code: 37385-2
     */
    AorticArchAndVertebralArteryLeftFluoroscopicAngiogramWContrastIA = "37385-2",
    /**
     * Code: 37386-0
     */
    AorticArchAndVertebralArteryRightFluoroscopicAngiogramWContrastIA = "37386-0",
    /**
     * Code: 37387-8
     */
    AdrenalArteryLeftFluoroscopicAngiogramWContrastIA = "37387-8",
    /**
     * Code: 37388-6
     */
    BrachialArteryBilateralFluoroscopicAngiogramWContrastIA = "37388-6",
    /**
     * Code: 37389-4
     */
    BronchialArteryFluoroscopicAngiogramWContrastIA = "37389-4",
    /**
     * Code: 37390-2
     */
    CarotidArteryExternalLeftFluoroscopicAngiogramWContrastIA = "37390-2",
    /**
     * Code: 37391-0
     */
    CarotidArteryAndVertebralArteryFluoroscopicAngiogramWContrastIA = "37391-0",
    /**
     * Code: 37392-8
     */
    CarotidArteryAndVertebralArteryBilateralFluoroscopicAngiogramWContrastIA = "37392-8",
    /**
     * Code: 37393-6
     */
    CarotidArteryPlusVertebralArteryLeftFluoroscopicAngiogramWContrastIA = "37393-6",
    /**
     * Code: 37394-4
     */
    CeliacArteryAndSuperiorMesentericArteryAndInferiorMesentericArteryFluoroscopicAngiogramWContrastIA = "37394-4",
    /**
     * Code: 37395-1
     */
    ExtremityArteriesLeftFluoroscopicAngiogramWContrastIA = "37395-1",
    /**
     * Code: 37396-9
     */
    UpperExtremityArteriesBilateralFluoroscopicAngiogramWContrastIA = "37396-9",
    /**
     * Code: 37397-7
     */
    GastricArteryFluoroscopicAngiogramWContrastIA = "37397-7",
    /**
     * Code: 37398-5
     */
    GastricArteryLeftFluoroscopicAngiogramWContrastIA = "37398-5",
    /**
     * Code: 37399-3
     */
    GastroduodenalArteryFluoroscopicAngiogramWContrastIA = "37399-3",
    /**
     * Code: 37401-7
     */
    MaxillaryArteryInternalFluoroscopicAngiogramWContrastIA = "37401-7",
    /**
     * Code: 37402-5
     */
    SuperiorMesentericArteryAndInferiorMesentericArteryFluoroscopicAngiogramWContrastIA = "37402-5",
    /**
     * Code: 37403-3
     */
    CeliacArteryAndGastricArteryLeftAndSuperiorMesentericArteryFluoroscopicAngiogramWContrastIA = "37403-3",
    /**
     * Code: 37404-1
     */
    PudendalArteryInternalFluoroscopicAngiogramWContrastIA = "37404-1",
    /**
     * Code: 37405-8
     */
    SubclavianArteryBilateralFluoroscopicAngiogramWContrastIA = "37405-8",
    /**
     * Code: 37406-6
     */
    SubclavianArteryLeftFluoroscopicAngiogramWContrastIA = "37406-6",
    /**
     * Code: 37407-4
     */
    VertebralArteryBilateralFluoroscopicAngiogramWContrastIA = "37407-4",
    /**
     * Code: 37409-0
     */
    TemporomandibularJointBilateralFluoroscopyWContrastIntraarticular = "37409-0",
    /**
     * Code: 37410-8
     */
    TemporomandibularJointLeftFluoroscopyWContrastIntraarticular = "37410-8",
    /**
     * Code: 37411-6
     */
    AzygosVeinFluoroscopicAngiogramWContrastIV = "37411-6",
    /**
     * Code: 37412-4
     */
    ExtremityVeinsBilateralFluoroscopicAngiogramWContrastIV = "37412-4",
    /**
     * Code: 37413-2
     */
    ExtremityVeinsLeftFluoroscopicAngiogramWContrastIV = "37413-2",
    /**
     * Code: 37414-0
     */
    LowerExtremityVeinsBilateralFluoroscopicAngiogramWContrastIV = "37414-0",
    /**
     * Code: 37415-7
     */
    UpperExtremityVeinsBilateralFluoroscopicAngiogramWContrastIV = "37415-7",
    /**
     * Code: 37416-5
     */
    FemoralVeinFluoroscopicAngiogramWContrastIV = "37416-5",
    /**
     * Code: 37419-9
     */
    IntraosseousVeinsFluoroscopicAngiogramWContrastIV = "37419-9",
    /**
     * Code: 37420-7
     */
    JugularVeinLeftFluoroscopicAngiogramWContrastIV = "37420-7",
    /**
     * Code: 37421-5
     */
    InferiorMesentericVeinFluoroscopicAngiogramWContrastIV = "37421-5",
    /**
     * Code: 37422-3
     */
    OrbitVeinsLeftFluoroscopicAngiogramWContrastIV = "37422-3",
    /**
     * Code: 37423-1
     */
    RenalVeinLeftFluoroscopicAngiogramWContrastIV = "37423-1",
    /**
     * Code: 37426-4
     */
    LowerExtremityVeinFluoroscopicAngiogramAngioplastyWContrastIV = "37426-4",
    /**
     * Code: 37427-2
     */
    FluoroscopyGuidanceForInjectionOfSpine = "37427-2",
    /**
     * Code: 37428-0
     */
    WristCT = "37428-0",
    /**
     * Code: 37429-8
     */
    WristBilateralXRayTomograph = "37429-8",
    /**
     * Code: 37430-6
     */
    WristBilateralCT = "37430-6",
    /**
     * Code: 37431-4
     */
    WristLeftCT = "37431-4",
    /**
     * Code: 37432-2
     */
    WristLeftXRayTomograph = "37432-2",
    /**
     * Code: 37433-0
     */
    WristRightCT = "37433-0",
    /**
     * Code: 37434-8
     */
    HeartMRICineForFunction = "37434-8",
    /**
     * Code: 37435-5
     */
    TemporomandibularJointMRICine = "37435-5",
    /**
     * Code: 37436-3
     */
    BrainMRIDiffusionWeighted = "37436-3",
    /**
     * Code: 37437-1
     */
    BreastMRIDynamicWContrastIV = "37437-1",
    /**
     * Code: 37438-9
     */
    PituitaryAndSellaTurcicaCTDynamicWContrastIV = "37438-9",
    /**
     * Code: 37439-7
     */
    ChestCTHighResolution = "37439-7",
    /**
     * Code: 37440-5
     */
    ChestCTHighResolutionWContrastIV = "37440-5",
    /**
     * Code: 37441-3
     */
    ChestCTHighResolutionWOContrast = "37441-3",
    /**
     * Code: 37442-1
     */
    BrainMRISpectroscopy = "37442-1",
    /**
     * Code: 37443-9
     */
    UnspecifiedBodyRegionMRISpectroscopy = "37443-9",
    /**
     * Code: 37444-7
     */
    WristMRIWContrastIntraarticular = "37444-7",
    /**
     * Code: 37445-4
     */
    WristLeftMRIWContrastIntraarticular = "37445-4",
    /**
     * Code: 37446-2
     */
    WristRightMRIWContrastIntraarticular = "37446-2",
    /**
     * Code: 37447-0
     */
    WristCTWContrastIV = "37447-0",
    /**
     * Code: 37448-8
     */
    WristMRIWContrastIV = "37448-8",
    /**
     * Code: 37449-6
     */
    WristBilateralMRIWContrastIV = "37449-6",
    /**
     * Code: 37450-4
     */
    WristLeftCTWContrastIV = "37450-4",
    /**
     * Code: 37451-2
     */
    WristLeftMRIWContrastIV = "37451-2",
    /**
     * Code: 37452-0
     */
    WristRightCTWContrastIV = "37452-0",
    /**
     * Code: 37453-8
     */
    WristRightMRIWContrastIV = "37453-8",
    /**
     * Code: 37454-6
     */
    WristBilateralXRay3Views = "37454-6",
    /**
     * Code: 37455-3
     */
    WristLeftXRay3Views = "37455-3",
    /**
     * Code: 37457-9
     */
    WristCTWAndWOContrastIV = "37457-9",
    /**
     * Code: 37458-7
     */
    WristLeftCTWAndWOContrastIV = "37458-7",
    /**
     * Code: 37459-5
     */
    WristCTWOContrast = "37459-5",
    /**
     * Code: 37460-3
     */
    WristMRIWOContrast = "37460-3",
    /**
     * Code: 37461-1
     */
    WristBilateralCTWOContrast = "37461-1",
    /**
     * Code: 37462-9
     */
    WristBilateralMRIWOContrast = "37462-9",
    /**
     * Code: 37463-7
     */
    WristLeftCTWOContrast = "37463-7",
    /**
     * Code: 37464-5
     */
    WristLeftMRIWOContrast = "37464-5",
    /**
     * Code: 37465-2
     */
    WristRightCTWOContrast = "37465-2",
    /**
     * Code: 37466-0
     */
    WristRightMRIWOContrast = "37466-0",
    /**
     * Code: 37467-8
     */
    AcromioclavicularJointXRay10DegreeCephalicAngle = "37467-8",
    /**
     * Code: 37468-6
     */
    ShoulderBilateralXRay30DegreeCaudalAngle = "37468-6",
    /**
     * Code: 37469-4
     */
    ClavicleBilateralXRay45DegreeCephalicAngle = "37469-4",
    /**
     * Code: 37470-2
     */
    ClavicleLeftXRay45DegreeCephalicAngle = "37470-2",
    /**
     * Code: 37471-0
     */
    HandBilateralXRayBora = "37471-0",
    /**
     * Code: 37472-8
     */
    HandLeftXRayBora = "37472-8",
    /**
     * Code: 37473-6
     */
    ShoulderLeftXRayGrashey = "37473-6",
    /**
     * Code: 37474-4
     */
    AnkleLeftXRayLateralWManualStress = "37474-4",
    /**
     * Code: 37475-1
     */
    AnkleLeftXRayMortiseWManualStress = "37475-1",
    /**
     * Code: 37476-9
     */
    KneeXRayPAW45DegreeFlexion = "37476-9",
    /**
     * Code: 37477-7
     */
    KneeXRayPAStandingAndW45DegreeFlexion = "37477-7",
    /**
     * Code: 37481-9
     */
    SpineCervicalAndSpineThoracicXRay = "37481-9",
    /**
     * Code: 37482-7
     */
    WristBilateralXRay2Views = "37482-7",
    /**
     * Code: 37483-5
     */
    WristLeftXRay2Views = "37483-5",
    /**
     * Code: 37484-3
     */
    KneeLeftXRayAPWManualStress = "37484-3",
    /**
     * Code: 37485-0
     */
    HumerusXRayAPAndTransthoracic = "37485-0",
    /**
     * Code: 37486-8
     */
    AnkleXRayBrodenWManualStress = "37486-8",
    /**
     * Code: 37487-6
     */
    LowerExtremityArteriesFluoroscopicAngiogramWContrastIA = "37487-6",
    /**
     * Code: 37488-4
     */
    UpperExtremityArteriesLeftFluoroscopicAngiogramWContrastIA = "37488-4",
    /**
     * Code: 37489-2
     */
    TibioperonealArteriesFluoroscopicAngiogramWContrastIA = "37489-2",
    /**
     * Code: 37490-0
     */
    VertebralArteryLeftFluoroscopicAngiogramWContrastIA = "37490-0",
    /**
     * Code: 37491-8
     */
    CTGuidanceForAspirationOfPleuralSpace = "37491-8",
    /**
     * Code: 37492-6
     */
    CTGuidanceForBiopsyOfChestPleura = "37492-6",
    /**
     * Code: 37493-4
     */
    CTGuidanceForInjectionOfSpineDiscCervical = "37493-4",
    /**
     * Code: 37494-2
     */
    FluoroscopyGuidanceForInjectionOfTendon = "37494-2",
    /**
     * Code: 37495-9
     */
    SkullBaseCT = "37495-9",
    /**
     * Code: 37496-7
     */
    SpineCervicalCTWContrastIntradisc = "37496-7",
    /**
     * Code: 37497-5
     */
    SpineVesselsMRIAngiogram = "37497-5",
    /**
     * Code: 37498-3
     */
    HeadVesselsAndNeckVesselsCTAngiogramWContrastIV = "37498-3",
    /**
     * Code: 37499-1
     */
    AorticStentCTAngiogramWContrastIV = "37499-1",
    /**
     * Code: 37500-6
     */
    SpineVesselsMRIAngiogramWContrastIV = "37500-6",
    /**
     * Code: 37501-4
     */
    CervicalSpineVesselsMRIAngiogramWContrastIV = "37501-4",
    /**
     * Code: 37502-2
     */
    LumbarSpineVesselsMRIAngiogramWContrastIV = "37502-2",
    /**
     * Code: 37503-0
     */
    ThoracicSpineVesselsMRIAngiogramWContrastIV = "37503-0",
    /**
     * Code: 37505-5
     */
    SpineVesselsMRIAngiogramWAndWOContrastIV = "37505-5",
    /**
     * Code: 37506-3
     */
    CervicalSpineVesselsMRIAngiogramWAndWOContrastIV = "37506-3",
    /**
     * Code: 37507-1
     */
    LumbarSpineVesselsMRIAngiogramWAndWOContrastIV = "37507-1",
    /**
     * Code: 37508-9
     */
    ThoracicSpineVesselsMRIAngiogramWAndWOContrastIV = "37508-9",
    /**
     * Code: 37509-7
     */
    SpineLumbarCTWContrastIntradisc = "37509-7",
    /**
     * Code: 37510-5
     */
    SpineVesselsMRIAngiogramWOContrast = "37510-5",
    /**
     * Code: 37511-3
     */
    CervicalSpineVesselsMRIAngiogramWOContrast = "37511-3",
    /**
     * Code: 37512-1
     */
    ThoracicSpineVesselsMRIAngiogramWOContrast = "37512-1",
    /**
     * Code: 37513-9
     */
    TibiaBilateralXRay10DegreeCaudalAngle = "37513-9",
    /**
     * Code: 37514-7
     */
    TibiaLeftXRay10DegreeCaudalAngle = "37514-7",
    /**
     * Code: 37515-4
     */
    SpineLumbosacralJunctionXRayLateralSpot = "37515-4",
    /**
     * Code: 37516-2
     */
    SpineLumbosacralJunctionXRayLateralSpotStanding = "37516-2",
    /**
     * Code: 37517-0
     */
    FingerFifthBilateralXRay = "37517-0",
    /**
     * Code: 37518-8
     */
    FingerFifthLeftXRay = "37518-8",
    /**
     * Code: 37519-6
     */
    FingerFourthBilateralXRay = "37519-6",
    /**
     * Code: 37520-4
     */
    FingerFourthLeftXRay = "37520-4",
    /**
     * Code: 37521-2
     */
    FingerSecondBilateralXRay = "37521-2",
    /**
     * Code: 37522-0
     */
    FingerSecondLeftXRay = "37522-0",
    /**
     * Code: 37523-8
     */
    FingerThirdBilateralXRay = "37523-8",
    /**
     * Code: 37524-6
     */
    FingerThirdLeftXRay = "37524-6",
    /**
     * Code: 37530-3
     */
    ToeFifthLeftXRay = "37530-3",
    /**
     * Code: 37531-1
     */
    ToeFourthLeftXRay = "37531-1",
    /**
     * Code: 37532-9
     */
    GreatToeBilateralXRay = "37532-9",
    /**
     * Code: 37533-7
     */
    GreatToeLeftXRay = "37533-7",
    /**
     * Code: 37534-5
     */
    ToeSecondLeftXRay = "37534-5",
    /**
     * Code: 37535-2
     */
    ToeThirdLeftXRay = "37535-2",
    /**
     * Code: 37538-6
     */
    ShoulderLeftXRayGrasheyAndAxillaryAndY = "37538-6",
    /**
     * Code: 37539-4
     */
    BreastMammogramGrid = "37539-4",
    /**
     * Code: 37540-2
     */
    KneeBilateralXRayHolmbladStanding = "37540-2",
    /**
     * Code: 37541-0
     */
    MastoidBilateralXRayLawAndMayerAndStenverAndTowne = "37541-0",
    /**
     * Code: 37542-8
     */
    BreastMammogramMagnification = "37542-8",
    /**
     * Code: 37543-6
     */
    BreastBilateralMammogramMagnification = "37543-6",
    /**
     * Code: 37544-4
     */
    WristBilateralXRayOblique = "37544-4",
    /**
     * Code: 37545-1
     */
    HipLeftXRayObliqueCrosstable = "37545-1",
    /**
     * Code: 37546-9
     */
    TemporomandibularJointBilateralXRayOpenAndClosedMouth = "37546-9",
    /**
     * Code: 37547-7
     */
    WristBilateralXRayPAAndLateral = "37547-7",
    /**
     * Code: 37548-5
     */
    WristLeftXRayPAAndLateral = "37548-5",
    /**
     * Code: 37549-3
     */
    WristBilateralXRayPAAndLateralAndOblique = "37549-3",
    /**
     * Code: 37550-1
     */
    WristLeftXRayPAAndLateralAndOblique = "37550-1",
    /**
     * Code: 37551-9
     */
    BreastMammogramSpot = "37551-9",
    /**
     * Code: 37552-7
     */
    BreastBilateralMammogramSpot = "37552-7",
    /**
     * Code: 37553-5
     */
    BreastLeftMammogramSpotCompression = "37553-5",
    /**
     * Code: 37554-3
     */
    BreastBilateralMammogramMagnificationAndSpot = "37554-3",
    /**
     * Code: 37555-0
     */
    WristLeftXRayUlnarDeviationAndRadialDeviation = "37555-0",
    /**
     * Code: 37556-8
     */
    AnkleXRayWManualStress = "37556-8",
    /**
     * Code: 37557-6
     */
    AnkleBilateralXRayWManualStress = "37557-6",
    /**
     * Code: 37558-4
     */
    AnkleLeftXRayWManualStress = "37558-4",
    /**
     * Code: 37559-2
     */
    FootLeftXRayWManualStress = "37559-2",
    /**
     * Code: 37560-0
     */
    KneeXRayWManualStress = "37560-0",
    /**
     * Code: 37561-8
     */
    KneeBilateralXRayWManualStress = "37561-8",
    /**
     * Code: 37562-6
     */
    KneeLeftXRayWManualStress = "37562-6",
    /**
     * Code: 37563-4
     */
    ThumbBilateralXRayWManualStress = "37563-4",
    /**
     * Code: 37564-2
     */
    ThumbLeftXRayWManualStress = "37564-2",
    /**
     * Code: 37565-9
     */
    UnspecifiedBodyRegionFluoroscopyWBariumContrastViaFistula = "37565-9",
    /**
     * Code: 37566-7
     */
    UnspecifiedBodyRegionFluoroscopyWContrastViaCatheter = "37566-7",
    /**
     * Code: 37567-5
     */
    ColonFluoroscopyWContrastViaColostomy = "37567-5",
    /**
     * Code: 37568-3
     */
    UnspecifiedBodyRegionFluoroscopyWContrastViaFistula = "37568-3",
    /**
     * Code: 37569-1
     */
    UrinaryBladderFluoroscopyWContrastViaSuprapubicTube = "37569-1",
    /**
     * Code: 37570-9
     */
    WristBilateralFluoroscopyWContrastIntraarticular = "37570-9",
    /**
     * Code: 37571-7
     */
    WristLeftFluoroscopyWContrastIntraarticular = "37571-7",
    /**
     * Code: 37572-5
     */
    SpineFluoroscopyWContrastIT = "37572-5",
    /**
     * Code: 37574-1
     */
    LowerExtremityVesselsFluoroscopicAngiogramWContrastIV = "37574-1",
    /**
     * Code: 37575-8
     */
    GallbladderXRayWContrastAndFattyMealPO = "37575-8",
    /**
     * Code: 37576-6
     */
    UnspecifiedBodyRegionFluoroscopyWGastrografinViaFistula = "37576-6",
    /**
     * Code: 37577-4
     */
    AcromioclavicularJointXRayWWeight = "37577-4",
    /**
     * Code: 37578-2
     */
    AcromioclavicularJointBilateralXRayWWeight = "37578-2",
    /**
     * Code: 37579-0
     */
    AcromioclavicularJointXRayWAndWOWeight = "37579-0",
    /**
     * Code: 37580-8
     */
    AcromioclavicularJointBilateralXRayWAndWOWeight = "37580-8",
    /**
     * Code: 37581-6
     */
    AcromioclavicularJointLeftXRayWAndWOWeight = "37581-6",
    /**
     * Code: 37582-4
     */
    AcromioclavicularJointXRayWOWeight = "37582-4",
    /**
     * Code: 37583-2
     */
    PelvisAndHipBilateralXRayAndLateralFrog = "37583-2",
    /**
     * Code: 37584-0
     */
    GreatToeLeftXRayStanding = "37584-0",
    /**
     * Code: 37585-7
     */
    JejunumFluoroscopyWContrast = "37585-7",
    /**
     * Code: 37586-5
     */
    PenisFluoroscopyWContrastIntraCorpusCavernosum = "37586-5",
    /**
     * Code: 37587-3
     */
    AorticArchAndCarotidArteryBilateralAndVertebralArteryBilateralFluoroscopicAngiogramWContrastIA = "37587-3",
    /**
     * Code: 37588-1
     */
    AorticArchAndCarotidArteryCommonBilateralFluoroscopicAngiogramWContrastIA = "37588-1",
    /**
     * Code: 37589-9
     */
    AorticArchAndCarotidArteryCommonLeftFluoroscopicAngiogramWContrastIA = "37589-9",
    /**
     * Code: 37590-7
     */
    AorticArchAndCarotidArteryCommonRightFluoroscopicAngiogramWContrastIA = "37590-7",
    /**
     * Code: 37591-5
     */
    AorticArchAndCarotidArteryExternalBilateralFluoroscopicAngiogramWContrastIA = "37591-5",
    /**
     * Code: 37592-3
     */
    AorticArchAndCarotidArteryExternalLeftFluoroscopicAngiogramWContrastIA = "37592-3",
    /**
     * Code: 37593-1
     */
    AorticArchAndCarotidArteryExternalRightFluoroscopicAngiogramWContrastIA = "37593-1",
    /**
     * Code: 37594-9
     */
    AorticArchAndCarotidArteryAndVertebralArteryFluoroscopicAngiogramWContrastIA = "37594-9",
    /**
     * Code: 37595-6
     */
    CoronaryGraftFluoroscopicAngiogramWContrastIA = "37595-6",
    /**
     * Code: 37596-4
     */
    LymphaticsAbdominalAndLymphaticsPelvicLeftFluoroscopyWContrastIntraLymphatic = "37596-4",
    /**
     * Code: 37597-2
     */
    LymphaticsAbdominalAndLymphaticsPelvicFluoroscopyWContrastIntraLymphatic = "37597-2",
    /**
     * Code: 37598-0
     */
    LymphaticsAbdominalAndLymphaticsPelvicBilateralFluoroscopyWContrastIntraLymphatic = "37598-0",
    /**
     * Code: 37599-8
     */
    ExtremityLymphaticsLeftFluoroscopyWContrastIntraLymphatic = "37599-8",
    /**
     * Code: 37600-4
     */
    LymphaticsLeftFluoroscopyWContrastIntraLymphatic = "37600-4",
    /**
     * Code: 37601-2
     */
    LymphaticsPelvicBilateralFluoroscopyWContrastIntraLymphatic = "37601-2",
    /**
     * Code: 37602-0
     */
    AdrenalVeinLeftFluoroscopicAngiogramWContrastIV = "37602-0",
    /**
     * Code: 37603-8
     */
    RibsLeftAndChestXRayLateralAndPAChest = "37603-8",
    /**
     * Code: 37604-6
     */
    NasalBonesXRay3Views = "37604-6",
    /**
     * Code: 37605-3
     */
    NasalBonesXRayLateralAndWaters = "37605-3",
    /**
     * Code: 37606-1
     */
    NasalBonesXRayTomograph = "37606-1",
    /**
     * Code: 37607-9
     */
    KidneyXRayWContrastIV = "37607-9",
    /**
     * Code: 37608-7
     */
    USGuidanceForLocalizationOfForeignBodyOfEye = "37608-7",
    /**
     * Code: 37609-5
     */
    OpticForamenXRay4Views = "37609-5",
    /**
     * Code: 37611-1
     */
    OrbitBilateralXRayTomograph = "37611-1",
    /**
     * Code: 37612-9
     */
    OrbitBilateralXRay4Views = "37612-9",
    /**
     * Code: 37613-7
     */
    OrbitBilateralXRayWaters = "37613-7",
    /**
     * Code: 37614-5
     */
    PatellaXRaySingleView = "37614-5",
    /**
     * Code: 37615-2
     */
    PelvisVesselsFluoroscopicAngiogramWContrast = "37615-2",
    /**
     * Code: 37616-0
     */
    PelvisXRaySingleView = "37616-0",
    /**
     * Code: 37617-8
     */
    PelvisXRay2Views = "37617-8",
    /**
     * Code: 37618-6
     */
    PelvisXRayAPAndInlet = "37618-6",
    /**
     * Code: 37619-4
     */
    PelvisXRayAPAndJudet = "37619-4",
    /**
     * Code: 37620-2
     */
    PelvisXRayAPAndLateral = "37620-2",
    /**
     * Code: 37621-0
     */
    PelvisXRayAPAndOblique = "37621-0",
    /**
     * Code: 37622-8
     */
    PelvisXRayAPSingleView = "37622-8",
    /**
     * Code: 37623-6
     */
    PelvisXRayAPAndInletAndOutlet = "37623-6",
    /**
     * Code: 37624-4
     */
    PelvisXRayAPAndLateralAndOblique = "37624-4",
    /**
     * Code: 37625-1
     */
    PelvisXRayFerguson = "37625-1",
    /**
     * Code: 37626-9
     */
    PelvisXRayLateralFrog = "37626-9",
    /**
     * Code: 37627-7
     */
    PelvisXRayInletAndOutletAndOblique = "37627-7",
    /**
     * Code: 37628-5
     */
    PelvisXRayInlet = "37628-5",
    /**
     * Code: 37629-3
     */
    PelvisXRayLateral = "37629-3",
    /**
     * Code: 37630-1
     */
    PelvisXRayOblique = "37630-1",
    /**
     * Code: 37631-9
     */
    PelvisXRayOutlet = "37631-9",
    /**
     * Code: 37632-7
     */
    PelvisXRayTomograph = "37632-7",
    /**
     * Code: 37633-5
     */
    PelvisXRayStanding = "37633-5",
    /**
     * Code: 37634-3
     */
    PelvisXRayAP20DegreeCephalicAngle = "37634-3",
    /**
     * Code: 37635-0
     */
    AcetabulumXRay3Views = "37635-0",
    /**
     * Code: 37636-8
     */
    AbdomenXRay = "37636-8",
    /**
     * Code: 37637-6
     */
    ExtremityXRay = "37637-6",
    /**
     * Code: 37639-2
     */
    NeckXRay = "37639-2",
    /**
     * Code: 37640-0
     */
    RenalVesselsFluoroscopicAngiogramWContrast = "37640-0",
    /**
     * Code: 37641-8
     */
    WristRightFluoroscopyWContrastIntraarticular = "37641-8",
    /**
     * Code: 37642-6
     */
    WristRightXRayLimited = "37642-6",
    /**
     * Code: 37643-4
     */
    WristRightXRayOblique = "37643-4",
    /**
     * Code: 37644-2
     */
    WristRightXRayTomograph = "37644-2",
    /**
     * Code: 37645-9
     */
    WristRightXRayUlnarDeviation = "37645-9",
    /**
     * Code: 37646-7
     */
    SacroiliacJointXRayLimited = "37646-7",
    /**
     * Code: 37647-5
     */
    SacroiliacJointFluoroscopyWContrastIntraarticular = "37647-5",
    /**
     * Code: 37648-3
     */
    SacroiliacJointXRay3Views = "37648-3",
    /**
     * Code: 37649-1
     */
    SacroiliacJointXRayAPAndOblique = "37649-1",
    /**
     * Code: 37650-9
     */
    SacroiliacJointXRayFerguson = "37650-9",
    /**
     * Code: 37651-7
     */
    SacrumXRay2Views = "37651-7",
    /**
     * Code: 37652-5
     */
    SacrumXRayAPAndLateral = "37652-5",
    /**
     * Code: 37653-3
     */
    SacrumXRayTomograph = "37653-3",
    /**
     * Code: 37654-1
     */
    ScapulaXRaySingleView = "37654-1",
    /**
     * Code: 37655-8
     */
    ScapulaXRay2Views = "37655-8",
    /**
     * Code: 37656-6
     */
    ScapulaXRayY = "37656-6",
    /**
     * Code: 37658-2
     */
    SpineThoracicAndLumbarXRay2ViewsScoliosis = "37658-2",
    /**
     * Code: 37659-0
     */
    SpineThoracicAndLumbarXRayScoliosisAPStanding = "37659-0",
    /**
     * Code: 37660-8
     */
    SpineThoracicAndLumbarXRayScoliosisLateralStanding = "37660-8",
    /**
     * Code: 37661-6
     */
    AcromioclavicularJointRightXRay2Views = "37661-6",
    /**
     * Code: 37662-4
     */
    AcromioclavicularJointRightXRayAPSingleView = "37662-4",
    /**
     * Code: 37663-2
     */
    AcromioclavicularJointRightXRayWAndWOWeight = "37663-2",
    /**
     * Code: 37664-0
     */
    AcetabulumRightXRay2Views = "37664-0",
    /**
     * Code: 37665-7
     */
    AnkleRightXRay3Views = "37665-7",
    /**
     * Code: 37666-5
     */
    AnkleRightXRayAPAndLateralAndMortise = "37666-5",
    /**
     * Code: 37667-3
     */
    AnkleRightXRayAPAndLateral = "37667-3",
    /**
     * Code: 37668-1
     */
    AnkleRightXRayAPAndLateralAndOblique = "37668-1",
    /**
     * Code: 37669-9
     */
    AnkleRightXRayLateralWManualStress = "37669-9",
    /**
     * Code: 37670-7
     */
    AnkleRightXRayLateralAndMortise = "37670-7",
    /**
     * Code: 37671-5
     */
    AnkleRightXRayMortiseWManualStress = "37671-5",
    /**
     * Code: 37672-3
     */
    AnkleRightXRay2ViewsWManualStress = "37672-3",
    /**
     * Code: 37673-1
     */
    AnkleRightXRayWManualStress = "37673-1",
    /**
     * Code: 37674-9
     */
    AnkleRightXRayTomograph = "37674-9",
    /**
     * Code: 37675-6
     */
    AnkleRightXRay2ViewsStanding = "37675-6",
    /**
     * Code: 37676-4
     */
    AnkleRightXRayStanding = "37676-4",
    /**
     * Code: 37677-2
     */
    WristRightXRayTunnelCarpal = "37677-2",
    /**
     * Code: 37678-0
     */
    WristRightXRay2ViewsTunnelCarpal = "37678-0",
    /**
     * Code: 37679-8
     */
    ClavicleRightXRay2Views = "37679-8",
    /**
     * Code: 37680-6
     */
    ClavicleRightXRayAPAndSerendipity = "37680-6",
    /**
     * Code: 37681-4
     */
    ElbowRightXRay2Views = "37681-4",
    /**
     * Code: 37682-2
     */
    ElbowRightXRay3Views = "37682-2",
    /**
     * Code: 37683-0
     */
    ElbowRightXRay4Views = "37683-0",
    /**
     * Code: 37684-8
     */
    ElbowRightXRayAPAndLateral = "37684-8",
    /**
     * Code: 37685-5
     */
    ElbowRightXRayAPAndLateralAndOblique = "37685-5",
    /**
     * Code: 37686-3
     */
    ElbowRightXRay2ViewsOblique = "37686-3",
    /**
     * Code: 37687-1
     */
    ElbowRightXRayOblique = "37687-1",
    /**
     * Code: 37688-9
     */
    ElbowRightXRayTomograph = "37688-9",
    /**
     * Code: 37689-7
     */
    FemurRightXRaySingleView = "37689-7",
    /**
     * Code: 37690-5
     */
    FemurRightXRay2Views = "37690-5",
    /**
     * Code: 37691-3
     */
    FemurRightXRay4Views = "37691-3",
    /**
     * Code: 37692-1
     */
    FemurRightXRayAPAndLateral = "37692-1",
    /**
     * Code: 37693-9
     */
    FemurRightXRayStanding = "37693-9",
    /**
     * Code: 37694-7
     */
    FingerRightXRay2Views = "37694-7",
    /**
     * Code: 37695-4
     */
    FingerRightXRay3Views = "37695-4",
    /**
     * Code: 37696-2
     */
    FingerRightXRayAPAndLateralAndOblique = "37696-2",
    /**
     * Code: 37697-0
     */
    FootRightXRay2Views = "37697-0",
    /**
     * Code: 37698-8
     */
    FootRightXRay2ViewsStanding = "37698-8",
    /**
     * Code: 37699-6
     */
    FootRightXRay3Views = "37699-6",
    /**
     * Code: 37700-2
     */
    FootRightXRay3ViewsStanding = "37700-2",
    /**
     * Code: 37701-0
     */
    FootRightXRayAPAndLateral = "37701-0",
    /**
     * Code: 37702-8
     */
    FootRightXRayAPAndLateralAndOblique = "37702-8",
    /**
     * Code: 37703-6
     */
    FootRightXRayLateral = "37703-6",
    /**
     * Code: 37704-4
     */
    FootRightXRayObliqueSingleView = "37704-4",
    /**
     * Code: 37705-1
     */
    FootRightXRayWManualStress = "37705-1",
    /**
     * Code: 37706-9
     */
    FootRightXRayTomograph = "37706-9",
    /**
     * Code: 37707-7
     */
    RadiusRightAndUlnaRightXRay2Views = "37707-7",
    /**
     * Code: 37708-5
     */
    RadiusRightAndUlnaRightXRayAPAndLateral = "37708-5",
    /**
     * Code: 37709-3
     */
    RadiusRightAndUlnaRightXRayOblique = "37709-3",
    /**
     * Code: 37710-1
     */
    HandRightXRayAPAndLateral = "37710-1",
    /**
     * Code: 37711-9
     */
    HandRightXRayAPAndLateralAndOblique = "37711-9",
    /**
     * Code: 37712-7
     */
    HandRightXRayLateral = "37712-7",
    /**
     * Code: 37713-5
     */
    HandRightXRayPAAndLateral = "37713-5",
    /**
     * Code: 37714-3
     */
    HandRightXRayPA = "37714-3",
    /**
     * Code: 37715-0
     */
    HandRightXRayPAAndLateralAndOblique = "37715-0",
    /**
     * Code: 37716-8
     */
    HandRightXRay = "37716-8",
    /**
     * Code: 37717-6
     */
    HandRightXRayTomograph = "37717-6",
    /**
     * Code: 37718-4
     */
    CalcaneusRightXRay2Views = "37718-4",
    /**
     * Code: 37719-2
     */
    CalcaneusRightXRayAPAndLateral = "37719-2",
    /**
     * Code: 37720-0
     */
    CalcaneusRightXRayStanding = "37720-0",
    /**
     * Code: 37721-8
     */
    HipRightXRay2Views = "37721-8",
    /**
     * Code: 37722-6
     */
    HipRightXRay3Views = "37722-6",
    /**
     * Code: 37723-4
     */
    HipRightXRayAPAndLateralCrosstable = "37723-4",
    /**
     * Code: 37724-2
     */
    HipRightXRayAPAndLateralFrog = "37724-2",
    /**
     * Code: 37725-9
     */
    HipRightXRayAPAndLateral = "37725-9",
    /**
     * Code: 37726-7
     */
    HipRightXRayAPSingleView = "37726-7",
    /**
     * Code: 37727-5
     */
    HipRightXRayLateralCrosstable = "37727-5",
    /**
     * Code: 37728-3
     */
    HipRightXRayObliqueCrosstable = "37728-3",
    /**
     * Code: 37729-1
     */
    HipRightXRayLateralFrog = "37729-1",
    /**
     * Code: 37730-9
     */
    HipRightXRayLateral = "37730-9",
    /**
     * Code: 37731-7
     */
    HipRightXRayStanding = "37731-7",
    /**
     * Code: 37732-5
     */
    HipRightXRayJudet = "37732-5",
    /**
     * Code: 37733-3
     */
    LowerExtremityRightXRayAPSingleViewStanding = "37733-3",
    /**
     * Code: 37734-1
     */
    LowerExtremityRightXRayStanding = "37734-1",
    /**
     * Code: 37735-8
     */
    HipRightXRayTomograph = "37735-8",
    /**
     * Code: 37736-6
     */
    HumerusRightXRayAPAndLateral = "37736-6",
    /**
     * Code: 37737-4
     */
    HumerusRightXRayOblique = "37737-4",
    /**
     * Code: 37738-2
     */
    HumerusRightXRay = "37738-2",
    /**
     * Code: 37739-0
     */
    IliacArteryRightFluoroscopicAngiogramWContrastIA = "37739-0",
    /**
     * Code: 37740-8
     */
    KneeRightXRayAPAndLateralAndSunriseAndTunnel = "37740-8",
    /**
     * Code: 37741-6
     */
    KneeRightXRaySingleView = "37741-6",
    /**
     * Code: 37742-4
     */
    KneeRightXRay3Views = "37742-4",
    /**
     * Code: 37743-2
     */
    KneeRightXRay4Views = "37743-2",
    /**
     * Code: 37744-0
     */
    KneeRightXRay5Views = "37744-0",
    /**
     * Code: 37745-7
     */
    KneeRightXRayAPAndLateral = "37745-7",
    /**
     * Code: 37746-5
     */
    KneeRightXRayAPWManualStress = "37746-5",
    /**
     * Code: 37747-3
     */
    KneeRightXRayAPAndLateralAndTunnel = "37747-3",
    /**
     * Code: 37748-1
     */
    KneeRightXRayAPAndLateralAndOblique = "37748-1",
    /**
     * Code: 37749-9
     */
    KneeRightXRayAPAndLateralAndSunrise = "37749-9",
    /**
     * Code: 37750-7
     */
    KneeRightXRayLateralHyperextension = "37750-7",
    /**
     * Code: 37751-5
     */
    KneeRightXRayLateral = "37751-5",
    /**
     * Code: 37752-3
     */
    KneeRightXRayRosenbergStanding = "37752-3",
    /**
     * Code: 37753-1
     */
    KneeRightXRayWManualStress = "37753-1",
    /**
     * Code: 37754-9
     */
    KneeRightXRayLateralStanding = "37754-9",
    /**
     * Code: 37755-6
     */
    KneeRightXRayPAStanding = "37755-6",
    /**
     * Code: 37756-4
     */
    KneeRightXRayTunnelStanding = "37756-4",
    /**
     * Code: 37757-2
     */
    KneeRightXRayOblique = "37757-2",
    /**
     * Code: 37758-0
     */
    KneeRightXRay = "37758-0",
    /**
     * Code: 37759-8
     */
    KneeRightXRaySunriseAndTunnel = "37759-8",
    /**
     * Code: 37760-6
     */
    KneeRightXRayTomograph = "37760-6",
    /**
     * Code: 37761-4
     */
    KneeRightXRayTunnel = "37761-4",
    /**
     * Code: 37762-2
     */
    KneeRightXRay2ViewsStanding = "37762-2",
    /**
     * Code: 37763-0
     */
    KneeRightXRay4ViewsStanding = "37763-0",
    /**
     * Code: 37764-8
     */
    LowerExtremityRightXRaySingleView = "37764-8",
    /**
     * Code: 37765-5
     */
    LowerExtremityVesselsRightFluoroscopicAngiogramWContrast = "37765-5",
    /**
     * Code: 37766-3
     */
    LowerExtremityRightXRayTomograph = "37766-3",
    /**
     * Code: 37767-1
     */
    LowerExtremityVeinsRightFluoroscopicAngiogramWContrastIV = "37767-1",
    /**
     * Code: 37768-9
     */
    BreastRightMammogram2Views = "37768-9",
    /**
     * Code: 37769-7
     */
    BreastRightMammogramMagnificationAndSpot = "37769-7",
    /**
     * Code: 37770-5
     */
    BreastRightMammogramTangential = "37770-5",
    /**
     * Code: 37771-3
     */
    BreastRightMammogramTrueLateral = "37771-3",
    /**
     * Code: 37772-1
     */
    BreastRightMammogramXCCL = "37772-1",
    /**
     * Code: 37773-9
     */
    BreastRightMammogramMagnification = "37773-9",
    /**
     * Code: 37774-7
     */
    BreastRightMammogram = "37774-7",
    /**
     * Code: 37775-4
     */
    BreastRightMammogramRoll = "37775-4",
    /**
     * Code: 37776-2
     */
    PatellaRightXRayAPAndLateral = "37776-2",
    /**
     * Code: 37777-0
     */
    PatellaRightXRay = "37777-0",
    /**
     * Code: 37778-8
     */
    PoplitealArteryRightFluoroscopicAngiogramWContrastIA = "37778-8",
    /**
     * Code: 37779-6
     */
    PulmonaryArteryRightFluoroscopicAngiogramWContrastIA = "37779-6",
    /**
     * Code: 37780-4
     */
    RibsRightXRay2Views = "37780-4",
    /**
     * Code: 37781-2
     */
    RibsRightXRay3Views = "37781-2",
    /**
     * Code: 37782-0
     */
    RibsRightXRayAnteriorAndLateral = "37782-0",
    /**
     * Code: 37783-8
     */
    RibsRightXRayAPSingleView = "37783-8",
    /**
     * Code: 37784-6
     */
    RibsRightXRayLateral = "37784-6",
    /**
     * Code: 37785-3
     */
    SacroiliacJointRightFluoroscopyWContrastIntraarticular = "37785-3",
    /**
     * Code: 37786-1
     */
    SacroiliacJointRightXRay = "37786-1",
    /**
     * Code: 37787-9
     */
    ScapulaRightXRay2Views = "37787-9",
    /**
     * Code: 37788-7
     */
    ScapulaRightXRayAPAndLateral = "37788-7",
    /**
     * Code: 37789-5
     */
    ScapulaRightXRayAPAndY = "37789-5",
    /**
     * Code: 37790-3
     */
    ScapulaRightXRayY = "37790-3",
    /**
     * Code: 37791-1
     */
    ShoulderRightXRayStrykerNotch = "37791-1",
    /**
     * Code: 37792-9
     */
    ShoulderRightXRaySingleView = "37792-9",
    /**
     * Code: 37793-7
     */
    ShoulderRightXRay2Views = "37793-7",
    /**
     * Code: 37794-5
     */
    ShoulderRightXRay4Views = "37794-5",
    /**
     * Code: 37795-2
     */
    ShoulderRightXRay5Views = "37795-2",
    /**
     * Code: 37796-0
     */
    ShoulderRightXRay6Views = "37796-0",
    /**
     * Code: 37797-8
     */
    ShoulderRightXRayAPAndStrykerNotch = "37797-8",
    /**
     * Code: 37798-6
     */
    ShoulderRightXRayAPSingleView = "37798-6",
    /**
     * Code: 37799-4
     */
    ShoulderRightXRayAPAndWestPointAndOutlet = "37799-4",
    /**
     * Code: 37800-0
     */
    ShoulderRightXRayAxillary = "37800-0",
    /**
     * Code: 37801-8
     */
    ShoulderRightXRayGarth = "37801-8",
    /**
     * Code: 37802-6
     */
    ShoulderRightXRayOutlet = "37802-6",
    /**
     * Code: 37803-4
     */
    ShoulderRightXRayLateralAndY = "37803-4",
    /**
     * Code: 37804-2
     */
    ShoulderRightXRayOutletAndY = "37804-2",
    /**
     * Code: 37805-9
     */
    ShoulderRightXRayY = "37805-9",
    /**
     * Code: 37806-7
     */
    ShoulderRightXRayGrasheyAndAxillaryAndOutlet = "37806-7",
    /**
     * Code: 37807-5
     */
    ShoulderRightXRayAxillaryAndY = "37807-5",
    /**
     * Code: 37808-3
     */
    SternoclavicularJointRightXRaySerendipity = "37808-3",
    /**
     * Code: 37809-1
     */
    ShoulderRightXRayWestPoint = "37809-1",
    /**
     * Code: 37810-9
     */
    AcromioclavicularJointRightXRayZanca = "37810-9",
    /**
     * Code: 37811-7
     */
    ShoulderRightXRayTomograph = "37811-7",
    /**
     * Code: 37812-5
     */
    ThumbRightXRay3Views = "37812-5",
    /**
     * Code: 37813-3
     */
    ThumbRightXRayAPAndLateralAndOblique = "37813-3",
    /**
     * Code: 37814-1
     */
    ThumbRightXRayWManualStress = "37814-1",
    /**
     * Code: 37815-8
     */
    TibiaRightAndFibulaRightXRay2Views = "37815-8",
    /**
     * Code: 37816-6
     */
    TibiaRightAndFibulaRightXRayAPAndLateral = "37816-6",
    /**
     * Code: 37817-4
     */
    TibiaRightAndFibulaRightXRayOblique = "37817-4",
    /**
     * Code: 37818-2
     */
    TemporomandibularJointRightFluoroscopyWContrastIntraarticular = "37818-2",
    /**
     * Code: 37819-0
     */
    TemporomandibularJointRightXRayTomograph = "37819-0",
    /**
     * Code: 37820-8
     */
    ToesRightXRay3Views = "37820-8",
    /**
     * Code: 37821-6
     */
    ToesRightXRay2Views = "37821-6",
    /**
     * Code: 37822-4
     */
    ToesRightXRayAPAndLateral = "37822-4",
    /**
     * Code: 37823-2
     */
    ToesRightXRayStanding = "37823-2",
    /**
     * Code: 37824-0
     */
    UpperExtremityVeinsRightFluoroscopicAngiogramWContrastIV = "37824-0",
    /**
     * Code: 37825-7
     */
    WristRightXRaySingleView = "37825-7",
    /**
     * Code: 37826-5
     */
    WristRightXRay2Views = "37826-5",
    /**
     * Code: 37827-3
     */
    WristRightXRay3Views = "37827-3",
    /**
     * Code: 37828-1
     */
    WristRightXRay4Views = "37828-1",
    /**
     * Code: 37829-9
     */
    WristRightXRay5Views = "37829-9",
    /**
     * Code: 37830-7
     */
    WristRightXRay6Views = "37830-7",
    /**
     * Code: 37831-5
     */
    WristRightXRay8Views = "37831-5",
    /**
     * Code: 37832-3
     */
    WristRightXRayAPAndLateral = "37832-3",
    /**
     * Code: 37833-1
     */
    WristRightXRayLateralWExtension = "37833-1",
    /**
     * Code: 37834-9
     */
    WristRightXRayLateralWFlexion = "37834-9",
    /**
     * Code: 37835-6
     */
    WristRightXRayPAAndLateral = "37835-6",
    /**
     * Code: 37836-4
     */
    WristRightXRayPAAndLateralAndOblique = "37836-4",
    /**
     * Code: 37839-8
     */
    ShoulderXRayAPAndLateralAndAxillary = "37839-8",
    /**
     * Code: 37840-6
     */
    ShoulderXRay2Views = "37840-6",
    /**
     * Code: 37841-4
     */
    ShoulderXRayAPAndLateral = "37841-4",
    /**
     * Code: 37842-2
     */
    ShoulderXRayAPSingleView = "37842-2",
    /**
     * Code: 37843-0
     */
    ShoulderXRayGarth = "37843-0",
    /**
     * Code: 37844-8
     */
    ShoulderXRayGrashey = "37844-8",
    /**
     * Code: 37845-5
     */
    ShoulderXRayOutlet = "37845-5",
    /**
     * Code: 37846-3
     */
    SternoclavicularJointXRaySerendipity = "37846-3",
    /**
     * Code: 37847-1
     */
    ShoulderXRayY = "37847-1",
    /**
     * Code: 37848-9
     */
    AcromioclavicularJointXRayZanca = "37848-9",
    /**
     * Code: 37849-7
     */
    ShoulderXRayAxillary = "37849-7",
    /**
     * Code: 37850-5
     */
    ShoulderXRayTomograph = "37850-5",
    /**
     * Code: 37851-3
     */
    SinusesXRaySingleView = "37851-3",
    /**
     * Code: 37852-1
     */
    SinusesXRayCaldwellAndWaters = "37852-1",
    /**
     * Code: 37853-9
     */
    SinusesXRay2Views = "37853-9",
    /**
     * Code: 37854-7
     */
    SinusesXRay3Views = "37854-7",
    /**
     * Code: 37855-4
     */
    SinusesXRay4Views = "37855-4",
    /**
     * Code: 37856-2
     */
    SinusesXRay5Views = "37856-2",
    /**
     * Code: 37857-0
     */
    SinusesXRayCaldwell = "37857-0",
    /**
     * Code: 37858-8
     */
    SinusesXRayLateral = "37858-8",
    /**
     * Code: 37859-6
     */
    SinusesXRayPAAndLateralAndWaters = "37859-6",
    /**
     * Code: 37860-4
     */
    SinusesXRayPAAndLateralAndCaldwellAndWaters = "37860-4",
    /**
     * Code: 37861-2
     */
    SinusesXRaySubmentovertex = "37861-2",
    /**
     * Code: 37862-0
     */
    SinusesXRayLateralAndWaters = "37862-0",
    /**
     * Code: 37863-8
     */
    SinusesXRayWaters = "37863-8",
    /**
     * Code: 37864-6
     */
    SinusesXRayLateralAndCaldwellAndWaters = "37864-6",
    /**
     * Code: 37866-1
     */
    SinusesXRayTomograph = "37866-1",
    /**
     * Code: 37867-9
     */
    SkullXRay2Views = "37867-9",
    /**
     * Code: 37868-7
     */
    SkullXRay4Views = "37868-7",
    /**
     * Code: 37869-5
     */
    SkullXRayLateralAndTowne = "37869-5",
    /**
     * Code: 37870-3
     */
    SkullXRayTowne = "37870-3",
    /**
     * Code: 37871-1
     */
    SkullXRayLateralAndCaldwellAndWatersAndTowne = "37871-1",
    /**
     * Code: 37872-9
     */
    SkullXRayLateralCrosstable = "37872-9",
    /**
     * Code: 37874-5
     */
    SkullXRayTomograph = "37874-5",
    /**
     * Code: 37875-2
     */
    SpineXRaySingleView = "37875-2",
    /**
     * Code: 37876-0
     */
    SpineXRay4Views = "37876-0",
    /**
     * Code: 37877-8
     */
    SpineXRayAPSingleView = "37877-8",
    /**
     * Code: 37878-6
     */
    SpineXRayLateralCrosstable = "37878-6",
    /**
     * Code: 37879-4
     */
    SpineXRay2Views = "37879-4",
    /**
     * Code: 37880-2
     */
    SternoclavicularJointXRayAPSingleView = "37880-2",
    /**
     * Code: 37881-0
     */
    SternoclavicularJointXRay3Views = "37881-0",
    /**
     * Code: 37882-8
     */
    SternoclavicularJointXRay4Views = "37882-8",
    /**
     * Code: 37883-6
     */
    SternumXRay2Views = "37883-6",
    /**
     * Code: 37884-4
     */
    SternumXRayPAAndLateralAndOblique = "37884-4",
    /**
     * Code: 37885-1
     */
    SternumXRayTomograph = "37885-1",
    /**
     * Code: 37886-9
     */
    SubclavianArteryFluoroscopicAngiogramWContrastIA = "37886-9",
    /**
     * Code: 37887-7
     */
    FluoroscopyGuidanceForAspirationOfPleuralSpace = "37887-7",
    /**
     * Code: 37888-5
     */
    ThumbXRay3Views = "37888-5",
    /**
     * Code: 37889-3
     */
    ThumbXRayAPAndLateral = "37889-3",
    /**
     * Code: 37890-1
     */
    ThumbXRayAPSingleView = "37890-1",
    /**
     * Code: 37891-9
     */
    ThumbXRayLateral = "37891-9",
    /**
     * Code: 37892-7
     */
    ThumbXRayObliqueSingleView = "37892-7",
    /**
     * Code: 37893-5
     */
    TibiaAndFibulaXRayLateral = "37893-5",
    /**
     * Code: 37894-3
     */
    TibiaAndFibulaXRaySingleView = "37894-3",
    /**
     * Code: 37895-0
     */
    TibiaAndFibulaXRay2Views = "37895-0",
    /**
     * Code: 37896-8
     */
    TibiaAndFibulaXRayAPAndLateral = "37896-8",
    /**
     * Code: 37897-6
     */
    TibiaAndFibulaXRayAPSingleView = "37897-6",
    /**
     * Code: 37898-4
     */
    TibiaAndFibulaXRayTomograph = "37898-4",
    /**
     * Code: 37899-2
     */
    TibiaAndFibulaXRayStanding = "37899-2",
    /**
     * Code: 37900-8
     */
    TibialArteryFluoroscopicAngiogramWContrastIA = "37900-8",
    /**
     * Code: 37901-6
     */
    TemporomandibularJointFluoroscopyWContrastIntraarticular = "37901-6",
    /**
     * Code: 37902-4
     */
    ToesXRay2Views = "37902-4",
    /**
     * Code: 37903-2
     */
    SpineThoracicXRayLateralCrosstable = "37903-2",
    /**
     * Code: 37904-0
     */
    SpineThoracicXRaySingleView = "37904-0",
    /**
     * Code: 37905-7
     */
    SpineThoracicXRay2Views = "37905-7",
    /**
     * Code: 37906-5
     */
    SpineThoracicXRay3Views = "37906-5",
    /**
     * Code: 37907-3
     */
    SpineThoracicXRay4Views = "37907-3",
    /**
     * Code: 37908-1
     */
    SpineThoracicXRayAPAndLateralAndOblique = "37908-1",
    /**
     * Code: 37909-9
     */
    SpineThoracicXRayLateralHyperextension = "37909-9",
    /**
     * Code: 37910-7
     */
    SpineThoracicXRayLateralStanding = "37910-7",
    /**
     * Code: 37911-5
     */
    SpineThoracicXRayTomograph = "37911-5",
    /**
     * Code: 37912-3
     */
    USGuidanceForBiopsyOfBreastBilateral = "37912-3",
    /**
     * Code: 37913-1
     */
    USGuidanceForBiopsyOfAbdomen = "37913-1",
    /**
     * Code: 37914-9
     */
    USGuidanceForBiopsyOfBreast = "37914-9",
    /**
     * Code: 37915-6
     */
    USGuidanceForBiopsyOfChest = "37915-6",
    /**
     * Code: 37916-4
     */
    USGuidanceForNeedleBiopsyOfLymphNode = "37916-4",
    /**
     * Code: 37917-2
     */
    USGuidanceForBiopsyOfMuscle = "37917-2",
    /**
     * Code: 37918-0
     */
    USGuidanceForBiopsyOfNeck = "37918-0",
    /**
     * Code: 37919-8
     */
    USGuidanceForBiopsyOfPancreas = "37919-8",
    /**
     * Code: 37920-6
     */
    USGuidanceForBiopsyOfSalivaryGland = "37920-6",
    /**
     * Code: 37921-4
     */
    USGuidanceForNeedleLocalizationOfChest = "37921-4",
    /**
     * Code: 37922-2
     */
    UpperExtremityXRay2Views = "37922-2",
    /**
     * Code: 37923-0
     */
    UpperExtremityXRayTomograph = "37923-0",
    /**
     * Code: 37924-8
     */
    WristXRaySingleView = "37924-8",
    /**
     * Code: 37925-5
     */
    WristXRay2Views = "37925-5",
    /**
     * Code: 37926-3
     */
    WristXRay3Views = "37926-3",
    /**
     * Code: 37927-1
     */
    WristXRayAPAndLateralAndOblique = "37927-1",
    /**
     * Code: 37928-9
     */
    WristXRayBrewerton = "37928-9",
    /**
     * Code: 37929-7
     */
    WristXRayLateralWFlexionAndWExtension = "37929-7",
    /**
     * Code: 37930-5
     */
    WristXRayLateral = "37930-5",
    /**
     * Code: 37931-3
     */
    WristXRayPA = "37931-3",
    /**
     * Code: 37932-1
     */
    WristXRayTomograph = "37932-1",
    /**
     * Code: 37933-9
     */
    ZygomaticArchXRay3Views = "37933-9",
    /**
     * Code: 37934-7
     */
    ZygomaticArchXRay4Views = "37934-7",
    /**
     * Code: 37935-4
     */
    PelvisArteriesAndLowerExtremityArteriesBilateralFluoroscopicAngiogramWContrastIA = "37935-4",
    /**
     * Code: 37936-2
     */
    PeripheralVesselsFluoroscopicAngiogramWContrast = "37936-2",
    /**
     * Code: 37937-0
     */
    RibsAnteriorXRay = "37937-0",
    /**
     * Code: 37938-8
     */
    RibsPosteriorXRay = "37938-8",
    /**
     * Code: 37939-6
     */
    AdrenalArteryRightFluoroscopicAngiogramWContrastIA = "37939-6",
    /**
     * Code: 37940-4
     */
    AdrenalVeinRightFluoroscopicAngiogramWContrastIV = "37940-4",
    /**
     * Code: 37941-2
     */
    AnkleArteriesRightFluoroscopicAngiogramWContrastIA = "37941-2",
    /**
     * Code: 37942-0
     */
    AnkleRightFluoroscopyWContrastIntraarticular = "37942-0",
    /**
     * Code: 37943-8
     */
    CarotidArteryPlusVertebralArteryRightFluoroscopicAngiogramWContrastIA = "37943-8",
    /**
     * Code: 37944-6
     */
    CarotidArteryAndCerebralArteryRightFluoroscopicAngiogramWContrastIA = "37944-6",
    /**
     * Code: 37945-3
     */
    CarotidArteryCervicalRightFluoroscopicAngiogramWContrastIA = "37945-3",
    /**
     * Code: 37947-9
     */
    ElbowRightFluoroscopyWContrastIntraarticular = "37947-9",
    /**
     * Code: 37948-7
     */
    CarotidArteryExternalRightFluoroscopicAngiogramWContrastIA = "37948-7",
    /**
     * Code: 37949-5
     */
    ExtremityArteriesRightFluoroscopicAngiogramWContrastIA = "37949-5",
    /**
     * Code: 37950-3
     */
    ExtremityVeinsRightFluoroscopicAngiogramWContrastIV = "37950-3",
    /**
     * Code: 37952-9
     */
    CarotidArteryInternalRightFluoroscopicAngiogramWContrastIA = "37952-9",
    /**
     * Code: 37953-7
     */
    CarotidArteryAndCerebralArteryInternalRightFluoroscopicAngiogramWContrastIA = "37953-7",
    /**
     * Code: 37954-5
     */
    JugularVeinRightFluoroscopicAngiogramWContrastIV = "37954-5",
    /**
     * Code: 37958-6
     */
    OrbitVeinsRightFluoroscopicAngiogramWContrastIV = "37958-6",
    /**
     * Code: 37959-4
     */
    RenalVeinRightFluoroscopicAngiogramWContrastIV = "37959-4",
    /**
     * Code: 37960-2
     */
    RibsLowerRightXRay = "37960-2",
    /**
     * Code: 37961-0
     */
    RibsUpperRightXRay = "37961-0",
    /**
     * Code: 37962-8
     */
    RibsAnteriorAndPosteriorRightXRay = "37962-8",
    /**
     * Code: 37963-6
     */
    RibsAnteriorRightXRay = "37963-6",
    /**
     * Code: 37964-4
     */
    RibsPosteriorRightXRay = "37964-4",
    /**
     * Code: 37965-1
     */
    SternoclavicularJointRightXRay = "37965-1",
    /**
     * Code: 37966-9
     */
    SubclavianArteryRightFluoroscopicAngiogramWContrastIA = "37966-9",
    /**
     * Code: 37967-7
     */
    UpperExtremityArteriesRightFluoroscopicAngiogramWContrastIA = "37967-7",
    /**
     * Code: 37968-5
     */
    VertebralArteryRightFluoroscopicAngiogramWContrastIA = "37968-5",
    /**
     * Code: 37969-3
     */
    SinusVeinFluoroscopicAngiogramWContrastIV = "37969-3",
    /**
     * Code: 37970-1
     */
    SplenicVeinFluoroscopicAngiogramWContrastIV = "37970-1",
    /**
     * Code: 37971-9
     */
    SubclavianVeinFluoroscopicAngiogramWContrastIV = "37971-9",
    /**
     * Code: 37972-7
     */
    SuperiorMesentericVeinFluoroscopicAngiogramWContrastIV = "37972-7",
    /**
     * Code: 37973-5
     */
    TesticleVesselsFluoroscopyWContrast = "37973-5",
    /**
     * Code: 37974-3
     */
    SpineThoracolumbarJunctionXRayAPAndLateral = "37974-3",
    /**
     * Code: 37975-0
     */
    SpineThoracolumbarJunctionXRay = "37975-0",
    /**
     * Code: 37976-8
     */
    UpperExtremityVesselsFluoroscopicAngiogramWContrast = "37976-8",
    /**
     * Code: 37977-6
     */
    UpperExtremityArteriesFluoroscopicAngiogramWContrastIA = "37977-6",
    /**
     * Code: 37979-2
     */
    UterineArteryFluoroscopicAngiogramWContrastIA = "37979-2",
    /**
     * Code: 37980-0
     */
    VertebralVesselsFluoroscopicAngiogramWContrast = "37980-0",
    /**
     * Code: 37981-8
     */
    VisceralVesselsFluoroscopicAngiogramWContrast = "37981-8",
    /**
     * Code: 37994-1
     */
    LumbarSpineVesselsMRIAngiogramWOContrast = "37994-1",
    /**
     * Code: 37995-8
     */
    CalcaneusBilateralXRayBroden = "37995-8",
    /**
     * Code: 37996-6
     */
    CalcaneusXRayBroden = "37996-6",
    /**
     * Code: 37997-4
     */
    CalcaneusLeftXRayBroden = "37997-4",
    /**
     * Code: 37998-2
     */
    ElbowXRayRadialHeadCapitellar = "37998-2",
    /**
     * Code: 37999-0
     */
    ElbowBilateralXRayRadialHeadCapitellar = "37999-0",
    /**
     * Code: 38000-6
     */
    ElbowLeftXRayRadialHeadCapitellar = "38000-6",
    /**
     * Code: 38001-4
     */
    ChestXRayWExpiration = "38001-4",
    /**
     * Code: 38002-2
     */
    ChestXRayWInspiration = "38002-2",
    /**
     * Code: 38003-0
     */
    FootLeftXRayAPStanding = "38003-0",
    /**
     * Code: 38004-8
     */
    ShoulderLeftXRayGrasheyWAndWOWeight = "38004-8",
    /**
     * Code: 38006-3
     */
    ElbowRightXRayRadialHeadCapitellar = "38006-3",
    /**
     * Code: 38007-1
     */
    HumerusRightXRayTransthoracic = "38007-1",
    /**
     * Code: 38008-9
     */
    SpineCervicalAndThoracicAndLumbarXRay = "38008-9",
    /**
     * Code: 38009-7
     */
    SpineThoracicXRayAPAndLateralAndSwimmers = "38009-7",
    /**
     * Code: 38010-5
     */
    SpineThoracicXRayLateralWFlexionAndWExtension = "38010-5",
    /**
     * Code: 38011-3
     */
    AortaUSLimited = "38011-3",
    /**
     * Code: 38012-1
     */
    USGuidanceForAspirationOfCystOfBreastBilateral = "38012-1",
    /**
     * Code: 38013-9
     */
    LowerExtremityBilateralUS = "38013-9",
    /**
     * Code: 38014-7
     */
    UpperExtremityArteryBilateralUS = "38014-7",
    /**
     * Code: 38015-4
     */
    CarotidArteryUSLimited = "38015-4",
    /**
     * Code: 38016-2
     */
    ChestWallUS = "38016-2",
    /**
     * Code: 38017-0
     */
    USGuidanceForFineNeedleAspirationOfProstate = "38017-0",
    /**
     * Code: 38018-8
     */
    USGuidanceForFineNeedleAspirationOfUnspecifiedBodyRegion = "38018-8",
    /**
     * Code: 38019-6
     */
    USGuidanceForFineNeedleAspirationOfThyroid = "38019-6",
    /**
     * Code: 38020-4
     */
    GallbladderUSLimited = "38020-4",
    /**
     * Code: 38021-2
     */
    BiliaryDuctsAndGallbladderUS = "38021-2",
    /**
     * Code: 38022-0
     */
    GallbladderUSWCholecystokinin = "38022-0",
    /**
     * Code: 38023-8
     */
    USGuidanceForCoreNeedlePercutaneousBiopsyOfBreastLeft = "38023-8",
    /**
     * Code: 38024-6
     */
    USGuidanceForCoreNeedleBiopsyOfUnspecifiedBodyRegion = "38024-6",
    /**
     * Code: 38025-3
     */
    USGuidanceForCoreNeedlePercutaneousBiopsyOfBreastRight = "38025-3",
    /**
     * Code: 38026-1
     */
    USGuidanceForFineNeedleAspirationOfBreastLeft = "38026-1",
    /**
     * Code: 38027-9
     */
    USGuidanceForNeedleBiopsyOfKidneyBilateral = "38027-9",
    /**
     * Code: 38028-7
     */
    USGuidanceForNeedleBiopsyOfBreast = "38028-7",
    /**
     * Code: 38029-5
     */
    USGuidanceForNeedleBiopsyOfChest = "38029-5",
    /**
     * Code: 38030-3
     */
    USGuidanceForNeedleBiopsyOfSpleen = "38030-3",
    /**
     * Code: 38031-1
     */
    USGuidanceForNeedleBiopsyOfThyroid = "38031-1",
    /**
     * Code: 38032-9
     */
    USGuidanceForNeedleLocalizationOfUnspecifiedBodyRegion = "38032-9",
    /**
     * Code: 38033-7
     */
    USGuidanceForFineNeedleAspirationOfBreastRight = "38033-7",
    /**
     * Code: 38034-5
     */
    HeadUSLimited = "38034-5",
    /**
     * Code: 38035-2
     */
    KidneyUSLimited = "38035-2",
    /**
     * Code: 38036-0
     */
    KidneyUS = "38036-0",
    /**
     * Code: 38037-8
     */
    FemurLeftUS = "38037-8",
    /**
     * Code: 38038-6
     */
    KidneyLeftUS = "38038-6",
    /**
     * Code: 38039-4
     */
    LowerExtremityLeftUSLimited = "38039-4",
    /**
     * Code: 38040-2
     */
    LowerExtremityLeftUS = "38040-2",
    /**
     * Code: 38041-0
     */
    UpperExtremityLeftUS = "38041-0",
    /**
     * Code: 38042-8
     */
    LowerExtremityArteryUSDopplerLimited = "38042-8",
    /**
     * Code: 38043-6
     */
    MastoidUS = "38043-6",
    /**
     * Code: 38044-4
     */
    MediastinumUS = "38044-4",
    /**
     * Code: 38045-1
     */
    ParathyroidUS = "38045-1",
    /**
     * Code: 38046-9
     */
    PelvisUSLimited = "38046-9",
    /**
     * Code: 38047-7
     */
    AbdomenRetroperitoneumUSLimited = "38047-7",
    /**
     * Code: 38048-5
     */
    FemurRightUS = "38048-5",
    /**
     * Code: 38049-3
     */
    KidneyRightUS = "38049-3",
    /**
     * Code: 38050-1
     */
    LowerExtremityRightUSLimited = "38050-1",
    /**
     * Code: 38051-9
     */
    LowerExtremityRightUS = "38051-9",
    /**
     * Code: 38052-7
     */
    UpperExtremityRightUS = "38052-7",
    /**
     * Code: 38053-5
     */
    SacrumUS = "38053-5",
    /**
     * Code: 38054-3
     */
    VisceralArteryUS = "38054-3",
    /**
     * Code: 38055-0
     */
    UnspecifiedBodyRegionUSWContrast = "38055-0",
    /**
     * Code: 38056-8
     */
    FDAPackageInsertStructuredProductLaballingSupplementalPatientMaterial = "38056-8",
    /**
     * Code: 38057-6
     */
    BreastImplantLeftMRI = "38057-6",
    /**
     * Code: 38058-4
     */
    BreastImplantRightMRI = "38058-4",
    /**
     * Code: 38059-2
     */
    TalusCT = "38059-2",
    /**
     * Code: 38060-0
     */
    SpineLumbosacralPlusCervicalPlusThoracicMRISagittal = "38060-0",
    /**
     * Code: 38061-8
     */
    SpineCervicalAndSpineThoracicAndSpineLumbarAndSacrumMRIWContrastIV = "38061-8",
    /**
     * Code: 38062-6
     */
    BreastImplantRightMRIWAndWOContrastIV = "38062-6",
    /**
     * Code: 38064-2
     */
    BreastImplantLeftMRIWOContrast = "38064-2",
    /**
     * Code: 38065-9
     */
    HipLeftXRayDuringSurgery = "38065-9",
    /**
     * Code: 38066-7
     */
    HipLeftXRayLateralDuringSurgery = "38066-7",
    /**
     * Code: 38067-5
     */
    BreastBilateralMammogramNippleProfile = "38067-5",
    /**
     * Code: 38068-3
     */
    ChestXRayRightAnteriorOblique = "38068-3",
    /**
     * Code: 38069-1
     */
    AbdomenXRayLeftPosteriorOblique = "38069-1",
    /**
     * Code: 38070-9
     */
    BreastImplantMammogram = "38070-9",
    /**
     * Code: 38071-7
     */
    BreastImplantBilateralMammogram = "38071-7",
    /**
     * Code: 38072-5
     */
    BreastImplantLeftMammogram = "38072-5",
    /**
     * Code: 38073-3
     */
    RibsAnteriorBilateralXRay = "38073-3",
    /**
     * Code: 38074-1
     */
    RibsAnteriorLeftXRay = "38074-1",
    /**
     * Code: 38079-0
     */
    BreastSpecimenBilateralMammogram = "38079-0",
    /**
     * Code: 38080-8
     */
    BreastSpecimenLeftMammogram = "38080-8",
    /**
     * Code: 38082-4
     */
    ShoulderLeftXRayAPAndTransthoracic = "38082-4",
    /**
     * Code: 38083-2
     */
    SpineCervicalXRayAPAndLateralAndObliqueAndOdontoidAndSwimmer = "38083-2",
    /**
     * Code: 38084-0
     */
    AbdomenXRayAPAndLeftPosteriorOblique = "38084-0",
    /**
     * Code: 38086-5
     */
    KneeXRayMerchants30And45And60Degrees = "38086-5",
    /**
     * Code: 38087-3
     */
    KneeLeftXRaySunrise20And40And60Degrees = "38087-3",
    /**
     * Code: 38088-1
     */
    KneeBilateralXRaySunrise20And40And60Degrees = "38088-1",
    /**
     * Code: 38089-9
     */
    BonesXRaySurveyLimitedForMetastasis = "38089-9",
    /**
     * Code: 38090-7
     */
    BreastBilateralMammogramWAir = "38090-7",
    /**
     * Code: 38091-5
     */
    BreastLeftMammogramWAir = "38091-5",
    /**
     * Code: 38092-3
     */
    UrinaryBladderFluoroscopyWChainAndContrastIntraBladder = "38092-3",
    /**
     * Code: 38093-1
     */
    ChestXRayWNippleMarkers = "38093-1",
    /**
     * Code: 38094-9
     */
    SpineCavityFluoroscopyWContrast = "38094-9",
    /**
     * Code: 38095-6
     */
    BreastDuctBilateralMammogramWContrastIntraDuct = "38095-6",
    /**
     * Code: 38096-4
     */
    BreastDuctLeftMammogramWContrastIntraDuct = "38096-4",
    /**
     * Code: 38097-2
     */
    ParotidGlandLeftFluoroscopyWContrastIntraSalivaryDuct = "38097-2",
    /**
     * Code: 38098-0
     */
    LacrimalDuctBilateralFluoroscopyWContrastIntraLacrimalDuct = "38098-0",
    /**
     * Code: 38099-8
     */
    LacrimalDuctLeftFluoroscopyWContrastIntraLacrimalDuct = "38099-8",
    /**
     * Code: 38100-4
     */
    UrinaryBladderAndUrethraFluoroscopyWContrastAntegrade = "38100-4",
    /**
     * Code: 38101-2
     */
    KidneyXRayWContrastAntegrade = "38101-2",
    /**
     * Code: 38102-0
     */
    KidneyXRayWContrastAntegradeViaPyelostomy = "38102-0",
    /**
     * Code: 38103-8
     */
    SpineCervicalAndSpineLumbarFluoroscopyWContrastIT = "38103-8",
    /**
     * Code: 38104-6
     */
    SpineEpiduralSpaceFluoroscopyWContrastIT = "38104-6",
    /**
     * Code: 38105-3
     */
    KidneyXRayWContrastRetrograde = "38105-3",
    /**
     * Code: 38107-9
     */
    WristXRayScaphoid = "38107-9",
    /**
     * Code: 38108-7
     */
    KneeRightXRay2ViewsOblique = "38108-7",
    /**
     * Code: 38112-9
     */
    KidneyRightAndCollectingSystemFluoroscopyWContrastViaNephrostomyTube = "38112-9",
    /**
     * Code: 38113-7
     */
    KidneyRightAndCollectingSystemFluoroscopyWContrastRetrogradeViaUrethra = "38113-7",
    /**
     * Code: 38114-5
     */
    TibiaRightAndFibulaRightXRay2ViewsOblique = "38114-5",
    /**
     * Code: 38115-2
     */
    WristRightXRayScaphoid = "38115-2",
    /**
     * Code: 38116-0
     */
    ParotidGlandFluoroscopyWContrastIntraSalivaryDuct = "38116-0",
    /**
     * Code: 38117-8
     */
    SinusesXRayWatersUpright = "38117-8",
    /**
     * Code: 38118-6
     */
    NeckXRay2ViewsLateral = "38118-6",
    /**
     * Code: 38119-4
     */
    ThoracicArteryFluoroscopicAngiogramWContrastIA = "38119-4",
    /**
     * Code: 38120-2
     */
    SpineThoracicFluoroscopyLimitedWContrastIT = "38120-2",
    /**
     * Code: 38121-0
     */
    SpineThoracicAndLumbarXRaySingleView = "38121-0",
    /**
     * Code: 38123-6
     */
    SpineThoracicAndLumbarXRayAPAndLateral = "38123-6",
    /**
     * Code: 38124-4
     */
    SpineThoracicAndLumbarXRayStanding = "38124-4",
    /**
     * Code: 38125-1
     */
    SpineCervicalAndThoracicAndLumbarFluoroscopyLimitedWContrastIT = "38125-1",
    /**
     * Code: 38126-9
     */
    USGuidanceForAspirationOfCystOfKidney = "38126-9",
    /**
     * Code: 38127-7
     */
    USGuidanceForCSFAspirationOfSpine = "38127-7",
    /**
     * Code: 38128-5
     */
    FemoralVesselsBilateralUS = "38128-5",
    /**
     * Code: 38129-3
     */
    IliacVesselsBilateralUS = "38129-3",
    /**
     * Code: 38130-1
     */
    LowerExtremityArteryBilateralUS = "38130-1",
    /**
     * Code: 38131-9
     */
    SubclavianVesselsBilateralUS = "38131-9",
    /**
     * Code: 38132-7
     */
    USGuidanceForBiopsyOfScrotumAndTesticle = "38132-7",
    /**
     * Code: 38133-5
     */
    USGuidanceForAspirationOfCystOfPancreas = "38133-5",
    /**
     * Code: 38134-3
     */
    FemoralVesselsUS = "38134-3",
    /**
     * Code: 38135-0
     */
    USGuidanceForFineNeedleAspirationOfDeepTissue = "38135-0",
    /**
     * Code: 38136-8
     */
    USGuidanceForFineNeedleAspirationOfSuperficialTissue = "38136-8",
    /**
     * Code: 38137-6
     */
    IliacVesselsLeftUS = "38137-6",
    /**
     * Code: 38138-4
     */
    ParotidGlandUS = "38138-4",
    /**
     * Code: 38139-2
     */
    PenisVesselsUS = "38139-2",
    /**
     * Code: 38140-0
     */
    PenisUS = "38140-0",
    /**
     * Code: 38141-8
     */
    IliacVesselsRightUS = "38141-8",
    /**
     * Code: 38142-6
     */
    USGuidanceForRemovalOfFluidFromChest = "38142-6",
    /**
     * Code: 38143-4
     */
    UpperExtremityArteryUSDopplerLimited = "38143-4",
    /**
     * Code: 38144-2
     */
    FingerSecondRightXRay = "38144-2",
    /**
     * Code: 38145-9
     */
    FingerThirdRightXRay = "38145-9",
    /**
     * Code: 38146-7
     */
    FingerFourthRightXRay = "38146-7",
    /**
     * Code: 38147-5
     */
    FingerFifthRightXRay = "38147-5",
    /**
     * Code: 38148-3
     */
    ToeSecondRightXRay = "38148-3",
    /**
     * Code: 38149-1
     */
    ToeThirdRightXRay = "38149-1",
    /**
     * Code: 38150-9
     */
    ToeFourthRightXRay = "38150-9",
    /**
     * Code: 38151-7
     */
    ToeFifthRightXRay = "38151-7",
    /**
     * Code: 38152-5
     */
    GreatToeRightXRay = "38152-5",
    /**
     * Code: 38153-3
     */
    SubmandibularGlandFluoroscopyWContrastIntraSalivaryDuct = "38153-3",
    /**
     * Code: 38154-1
     */
    FluoroscopyGuidanceForBiopsyOfSuperficialBone = "38154-1",
    /**
     * Code: 38155-8
     */
    WristXRay4Views = "38155-8",
    /**
     * Code: 38156-6
     */
    WristXRay6Views = "38156-6",
    /**
     * Code: 38268-9
     */
    SkeletalSystemDXABoneDensity = "38268-9",
    /**
     * Code: 38269-7
     */
    StudyReportSkeletalSystemDXA = "38269-7",
    /**
     * Code: 38765-4
     */
    USGuidanceForBiopsyOfLiverTransplant = "38765-4",
    /**
     * Code: 38766-2
     */
    USGuidanceForBiopsyOfKidneyTransplant = "38766-2",
    /**
     * Code: 38767-0
     */
    InternalAuditoryCanalRightCT = "38767-0",
    /**
     * Code: 38768-8
     */
    FemurRightXRayTomograph = "38768-8",
    /**
     * Code: 38769-6
     */
    LowerExtremityJointRightMRILimitedWOContrast = "38769-6",
    /**
     * Code: 38770-4
     */
    ScapulaRightMRIWOContrast = "38770-4",
    /**
     * Code: 38771-2
     */
    PelvisAndHipRightXRay = "38771-2",
    /**
     * Code: 38772-0
     */
    HipRightXRayTrueLateral = "38772-0",
    /**
     * Code: 38773-8
     */
    LowerExtremityVesselsRightMRIAngiogramWOContrast = "38773-8",
    /**
     * Code: 38774-6
     */
    OrbitRightXRay = "38774-6",
    /**
     * Code: 38775-3
     */
    HandRightXRayBrewerton = "38775-3",
    /**
     * Code: 38776-1
     */
    CalcaneusRightXRayHarris = "38776-1",
    /**
     * Code: 38777-9
     */
    ElbowRightXRayJones = "38777-9",
    /**
     * Code: 38778-7
     */
    CalcaneusRightXRaySkiJump = "38778-7",
    /**
     * Code: 38779-5
     */
    ShoulderRightXRayTransthoracic = "38779-5",
    /**
     * Code: 38780-3
     */
    ShoulderRightXRayVelpeauAxillary = "38780-3",
    /**
     * Code: 38781-1
     */
    ShoulderRightXRayAPAndAxillaryAndOutlet = "38781-1",
    /**
     * Code: 38782-9
     */
    ShoulderRightXRayAPAndAxillaryAndOutletAndZanca = "38782-9",
    /**
     * Code: 38783-7
     */
    ShoulderRightXRayAPAndAxillaryAndY = "38783-7",
    /**
     * Code: 38784-5
     */
    PelvisAndHipRightXRayAPAndLateralCrosstable = "38784-5",
    /**
     * Code: 38785-2
     */
    PelvisAndHipRightXRayAPAndLateralFrog = "38785-2",
    /**
     * Code: 38786-0
     */
    PatellaRightXRayAPAndLateralAndSunrise = "38786-0",
    /**
     * Code: 38787-8
     */
    ShoulderRightXRayAPAndWestPoint = "38787-8",
    /**
     * Code: 38788-6
     */
    ShoulderRightXRayAPAndY = "38788-6",
    /**
     * Code: 38789-4
     */
    ShoulderRightXRayGrasheyAndAxillaryAndY = "38789-4",
    /**
     * Code: 38790-2
     */
    PatellaRightXRayPAAndLateralAndSunrise = "38790-2",
    /**
     * Code: 38791-0
     */
    ShoulderRightXRayGrasheyAndOutlet = "38791-0",
    /**
     * Code: 38792-8
     */
    FootRightXRayTarsal = "38792-8",
    /**
     * Code: 38793-6
     */
    ShoulderRightXRayGrasheyAndAxillary = "38793-6",
    /**
     * Code: 38794-4
     */
    ShoulderRightXRayGrasheyAndOutletAndSerendipity = "38794-4",
    /**
     * Code: 38795-1
     */
    ShoulderRightXRayGrasheyAndWestPoint = "38795-1",
    /**
     * Code: 38796-9
     */
    HipRightXRayPortable = "38796-9",
    /**
     * Code: 38797-7
     */
    HumerusBicipitalGrooveRightXRay = "38797-7",
    /**
     * Code: 38798-5
     */
    OlecranonRightXRay = "38798-5",
    /**
     * Code: 38799-3
     */
    AortaAndFemoralArteryRightFluoroscopicAngiogramRunoffWContrastIA = "38799-3",
    /**
     * Code: 38800-9
     */
    AorticArchAndSubclavianArteryRightFluoroscopicAngiogramWContrastIA = "38800-9",
    /**
     * Code: 38801-7
     */
    GastricArteryRightFluoroscopicAngiogramWContrastIA = "38801-7",
    /**
     * Code: 38802-5
     */
    WristRightCTWAndWOContrastIV = "38802-5",
    /**
     * Code: 38803-3
     */
    ClavicleRightXRay45DegreeCephalicAngle = "38803-3",
    /**
     * Code: 38804-1
     */
    HandRightXRayBora = "38804-1",
    /**
     * Code: 38805-8
     */
    ShoulderRightXRayGrashey = "38805-8",
    /**
     * Code: 38806-6
     */
    TibiaRightXRay10DegreeCaudalAngle = "38806-6",
    /**
     * Code: 38807-4
     */
    BreastRightMammogramSpot = "38807-4",
    /**
     * Code: 38808-2
     */
    WristRightXRayUlnarDeviationAndRadialDeviation = "38808-2",
    /**
     * Code: 38810-8
     */
    GreatToeRightXRayStanding = "38810-8",
    /**
     * Code: 38811-6
     */
    LymphaticsAbdominalAndLymphaticsPelvicRightFluoroscopyWContrastIntraLymphatic = "38811-6",
    /**
     * Code: 38812-4
     */
    ExtremityLymphaticsRightFluoroscopyWContrastIntraLymphatic = "38812-4",
    /**
     * Code: 38813-2
     */
    LymphaticsRightFluoroscopyWContrastIntraLymphatic = "38813-2",
    /**
     * Code: 38814-0
     */
    CalcaneusRightXRayBroden = "38814-0",
    /**
     * Code: 38815-7
     */
    FootRightXRayAPStanding = "38815-7",
    /**
     * Code: 38816-5
     */
    ShoulderRightXRayGrasheyWAndWOWeight = "38816-5",
    /**
     * Code: 38817-3
     */
    BreastImplantRightMRIWOContrast = "38817-3",
    /**
     * Code: 38818-1
     */
    HipRightXRayDuringSurgery = "38818-1",
    /**
     * Code: 38819-9
     */
    HipRightXRayLateralDuringSurgery = "38819-9",
    /**
     * Code: 38820-7
     */
    BreastImplantRightMammogram = "38820-7",
    /**
     * Code: 38821-5
     */
    BreastSpecimenRightMammogram = "38821-5",
    /**
     * Code: 38822-3
     */
    ShoulderRightXRayAPAndTransthoracic = "38822-3",
    /**
     * Code: 38824-9
     */
    KneeRightXRaySunrise20And40And60Degrees = "38824-9",
    /**
     * Code: 38825-6
     */
    BreastDuctRightMammogramWContrastIntraDuct = "38825-6",
    /**
     * Code: 38826-4
     */
    ParotidGlandRightFluoroscopyWContrastIntraSalivaryDuct = "38826-4",
    /**
     * Code: 38827-2
     */
    LacrimalDuctRightFluoroscopyWContrastIntraLacrimalDuct = "38827-2",
    /**
     * Code: 38828-0
     */
    ShoulderLeftCTWContrastIntraarticular = "38828-0",
    /**
     * Code: 38829-8
     */
    UpperExtremityLeftMRIWContrastIV = "38829-8",
    /**
     * Code: 38830-6
     */
    ShoulderLeftMRIWContrastIV = "38830-6",
    /**
     * Code: 38831-4
     */
    UpperExtremityLeftMRIWAndWOContrastIV = "38831-4",
    /**
     * Code: 38832-2
     */
    UpperExtremityLeftMRIWOContrast = "38832-2",
    /**
     * Code: 38833-0
     */
    ThoracicOutletLeftMRIWOContrast = "38833-0",
    /**
     * Code: 38834-8
     */
    ShoulderLeftMRIWOContrast = "38834-8",
    /**
     * Code: 38835-5
     */
    TemporalBoneLeftCTWContrastIV = "38835-5",
    /**
     * Code: 38836-3
     */
    OrbitLeftMRI = "38836-3",
    /**
     * Code: 38837-1
     */
    KneeVesselsLeftMRIAngiogramWAndWOContrastIV = "38837-1",
    /**
     * Code: 38838-9
     */
    WristLeftXRayLimited = "38838-9",
    /**
     * Code: 38839-7
     */
    WristLeftXRayOblique = "38839-7",
    /**
     * Code: 38840-5
     */
    AnkleLeftXRay2ViewsWManualStress = "38840-5",
    /**
     * Code: 38841-3
     */
    AnkleLeftXRay2ViewsStanding = "38841-3",
    /**
     * Code: 38842-1
     */
    WristLeftXRayTunnelCarpal = "38842-1",
    /**
     * Code: 38843-9
     */
    WristLeftXRay2ViewsTunnelCarpal = "38843-9",
    /**
     * Code: 38844-7
     */
    ElbowLeftXRay2ViewsOblique = "38844-7",
    /**
     * Code: 38845-4
     */
    FemurLeftXRayStanding = "38845-4",
    /**
     * Code: 38846-2
     */
    FootLeftXRay2Views = "38846-2",
    /**
     * Code: 38847-0
     */
    HandLeftXRayAPAndLateral = "38847-0",
    /**
     * Code: 38848-8
     */
    HandLeftXRayAPAndLateralAndOblique = "38848-8",
    /**
     * Code: 38849-6
     */
    LowerExtremityLeftXRayAPSingleViewStanding = "38849-6",
    /**
     * Code: 38850-4
     */
    LowerExtremityLeftXRayStanding = "38850-4",
    /**
     * Code: 38851-2
     */
    KneeLeftXRay2ViewsStanding = "38851-2",
    /**
     * Code: 38852-0
     */
    KneeLeftXRay4ViewsStanding = "38852-0",
    /**
     * Code: 38853-8
     */
    LowerExtremityVesselsLeftFluoroscopicAngiogramWContrast = "38853-8",
    /**
     * Code: 38854-6
     */
    BreastLeftMammogramMagnificationAndSpot = "38854-6",
    /**
     * Code: 38855-3
     */
    BreastLeftMammogramTrueLateral = "38855-3",
    /**
     * Code: 38856-1
     */
    RibsLeftXRayAnteriorAndLateral = "38856-1",
    /**
     * Code: 38857-9
     */
    RibsLeftXRayLateral = "38857-9",
    /**
     * Code: 38858-7
     */
    ShoulderLeftXRayY = "38858-7",
    /**
     * Code: 38859-5
     */
    UpperExtremityVeinsLeftFluoroscopicAngiogramWContrastIV = "38859-5",
    /**
     * Code: 38860-3
     */
    WristLeftXRayAPAndLateral = "38860-3",
    /**
     * Code: 38861-1
     */
    AnkleArteriesLeftFluoroscopicAngiogramWContrastIA = "38861-1",
    /**
     * Code: 38862-9
     */
    CarotidArteryAndCerebralArteryLeftFluoroscopicAngiogramWContrastIA = "38862-9",
    /**
     * Code: 38863-7
     */
    CarotidArteryCervicalLeftFluoroscopicAngiogramWContrastIA = "38863-7",
    /**
     * Code: 38864-5
     */
    CarotidArteryInternalLeftFluoroscopicAngiogramWContrastIA = "38864-5",
    /**
     * Code: 38865-2
     */
    CarotidArteryAndCerebralArteryInternalLeftFluoroscopicAngiogramWContrastIA = "38865-2",
    /**
     * Code: 38866-0
     */
    RibsLowerLeftXRay = "38866-0",
    /**
     * Code: 38867-8
     */
    RibsUpperLeftXRay = "38867-8",
    /**
     * Code: 38868-6
     */
    RibsAnteriorAndPosteriorLeftXRay = "38868-6",
    /**
     * Code: 38869-4
     */
    RibsPosteriorLeftXRay = "38869-4",
    /**
     * Code: 38870-2
     */
    BreastImplantLeftMRIWAndWOContrastIV = "38870-2",
    /**
     * Code: 38871-0
     */
    KneeLeftXRay2ViewsOblique = "38871-0",
    /**
     * Code: 38872-8
     */
    KidneyLeftAndCollectingSystemFluoroscopyWContrastViaNephrostomyTube = "38872-8",
    /**
     * Code: 38873-6
     */
    KidneyLeftAndCollectingSystemFluoroscopyWContrastRetrogradeViaUrethra = "38873-6",
    /**
     * Code: 38874-4
     */
    TibiaLeftAndFibulaLeftXRay2ViewsOblique = "38874-4",
    /**
     * Code: 38932-0
     */
    VACompensationAndPensionCAndPExaminationAcromegaly = "38932-0",
    /**
     * Code: 38933-8
     */
    VACompensationAndPensionCAndPExaminationAidAndAttendanceHousebound = "38933-8",
    /**
     * Code: 38934-6
     */
    VACompensationAndPensionCAndPExaminationArrhythmias = "38934-6",
    /**
     * Code: 38935-3
     */
    VACompensationAndPensionCAndPExaminationMiscellaneousArteriesVeins = "38935-3",
    /**
     * Code: 38936-1
     */
    VACompensationAndPensionCAndPExaminationAudio = "38936-1",
    /**
     * Code: 38937-9
     */
    VACompensationAndPensionCAndPExaminationBonesFracturesBoneDisease = "38937-9",
    /**
     * Code: 38938-7
     */
    VACompensationAndPensionCAndPExaminationBrainSpinalCord = "38938-7",
    /**
     * Code: 38939-5
     */
    VACompensationAndPensionCAndPExaminationChronicFatigueSyndrome = "38939-5",
    /**
     * Code: 38940-3
     */
    VACompensationAndPensionCAndPExaminationColdInjuryProtocol = "38940-3",
    /**
     * Code: 38941-1
     */
    VACompensationAndPensionCAndPExaminationCranialNerves = "38941-1",
    /**
     * Code: 38942-9
     */
    VACompensationAndPensionCAndPExaminationCushingsSyndrome = "38942-9",
    /**
     * Code: 38943-7
     */
    VACompensationAndPensionCAndPExaminationDentalOral = "38943-7",
    /**
     * Code: 38944-5
     */
    VACompensationAndPensionCAndPExaminationDiabetesMellitus = "38944-5",
    /**
     * Code: 38945-2
     */
    VACompensationAndPensionCAndPExaminationMiscellaneousDigestiveConditions = "38945-2",
    /**
     * Code: 38946-0
     */
    VACompensationAndPensionCAndPExaminationEarDisease = "38946-0",
    /**
     * Code: 38947-8
     */
    VACompensationAndPensionCAndPExaminationMentalHealthEatingDisorders = "38947-8",
    /**
     * Code: 38948-6
     */
    VACompensationAndPensionCAndPExaminationMiscellaneousEndocrineDiseases = "38948-6",
    /**
     * Code: 38949-4
     */
    VACompensationAndPensionCAndPExaminationEpilepsyNarcolepsy = "38949-4",
    /**
     * Code: 38950-2
     */
    VACompensationAndPensionCAndPExaminationEsophagusHiatalHernia = "38950-2",
    /**
     * Code: 38951-0
     */
    VACompensationAndPensionCAndPExaminationEye = "38951-0",
    /**
     * Code: 38952-8
     */
    VACompensationAndPensionCAndPExaminationFeet = "38952-8",
    /**
     * Code: 38953-6
     */
    VACompensationAndPensionCAndPExaminationFibromyalgia = "38953-6",
    /**
     * Code: 38954-4
     */
    VACompensationAndPensionCAndPExaminationGeneralMedical = "38954-4",
    /**
     * Code: 38955-1
     */
    VACompensationAndPensionCAndPExaminationGenitourinary = "38955-1",
    /**
     * Code: 38956-9
     */
    VACompensationAndPensionCAndPExaminationDisabilityInGulfWarVeterans = "38956-9",
    /**
     * Code: 38957-7
     */
    VACompensationAndPensionCAndPExaminationGynecologicalConditionsDisordersOfTheBreast = "38957-7",
    /**
     * Code: 38958-5
     */
    VACompensationAndPensionCAndPExaminationHandThumbFingers = "38958-5",
    /**
     * Code: 38959-3
     */
    VACompensationAndPensionCAndPExaminationHeart = "38959-3",
    /**
     * Code: 38960-1
     */
    VACompensationAndPensionCAndPExaminationHemicDisorders = "38960-1",
    /**
     * Code: 38961-9
     */
    VACompensationAndPensionCAndPExaminationHIVRelatedIllness = "38961-9",
    /**
     * Code: 38962-7
     */
    VACompensationAndPensionCAndPExaminationHypertension = "38962-7",
    /**
     * Code: 38963-5
     */
    VACompensationAndPensionCAndPExaminationInfectiousImmuneNutritionalDisabilities = "38963-5",
    /**
     * Code: 38964-3
     */
    VACompensationAndPensionCAndPExaminationInitialEvaluationPostTraumaticStressDisorder = "38964-3",
    /**
     * Code: 38965-0
     */
    VACompensationAndPensionCAndPExaminationLargeSmallIntestines = "38965-0",
    /**
     * Code: 38966-8
     */
    VACompensationAndPensionCAndPExaminationExtremityJoints = "38966-8",
    /**
     * Code: 38967-6
     */
    VACompensationAndPensionCAndPExaminationLiverGallBladderPancreas = "38967-6",
    /**
     * Code: 38968-4
     */
    VACompensationAndPensionCAndPExaminationLymphaticDisorders = "38968-4",
    /**
     * Code: 38969-2
     */
    VACompensationAndPensionCAndPExaminationGeneralMentalDisorders = "38969-2",
    /**
     * Code: 38970-0
     */
    VACompensationAndPensionCAndPExaminationMouthLipsTongue = "38970-0",
    /**
     * Code: 38971-8
     */
    VACompensationAndPensionCAndPExaminationMuscles = "38971-8",
    /**
     * Code: 38972-6
     */
    VACompensationAndPensionCAndPExaminationMiscellaneousNeurologicalDisorders = "38972-6",
    /**
     * Code: 38973-4
     */
    VACompensationAndPensionCAndPExaminationNoseSinusLarynxPharynx = "38973-4",
    /**
     * Code: 38974-2
     */
    VACompensationAndPensionCAndPExaminationPeripheralNerves = "38974-2",
    /**
     * Code: 38975-9
     */
    VACompensationAndPensionCAndPExaminationPrisonerOfWarProtocol = "38975-9",
    /**
     * Code: 38976-7
     */
    VACompensationAndPensionCAndPExaminationPulmonaryTuberculosisMycobacterialDiseases = "38976-7",
    /**
     * Code: 38977-5
     */
    VACompensationAndPensionCAndPExaminationRectumAnus = "38977-5",
    /**
     * Code: 38978-3
     */
    VACompensationAndPensionCAndPExaminationResidualsOfAmputations = "38978-3",
    /**
     * Code: 38979-1
     */
    VACompensationAndPensionCAndPExaminationObstructiveRestrictiveInterstitialRespiratoryDiseases = "38979-1",
    /**
     * Code: 38980-9
     */
    VACompensationAndPensionCAndPExaminationMiscellaneousRespiratoryDiseases = "38980-9",
    /**
     * Code: 38981-7
     */
    VACompensationAndPensionCAndPExaminationReviewEvaluationPostTraumaticStressDisorder = "38981-7",
    /**
     * Code: 38982-5
     */
    VACompensationAndPensionCAndPExaminationScars = "38982-5",
    /**
     * Code: 38983-3
     */
    VACompensationAndPensionCAndPExaminationSenseOfSmellTaste = "38983-3",
    /**
     * Code: 38984-1
     */
    VACompensationAndPensionCAndPExaminationSkinDiseasesOtherThanScars = "38984-1",
    /**
     * Code: 38985-8
     */
    VACompensationAndPensionCAndPExaminationSocialIndustrialSurvey = "38985-8",
    /**
     * Code: 38986-6
     */
    VACompensationAndPensionCAndPExaminationSpine = "38986-6",
    /**
     * Code: 38987-4
     */
    VACompensationAndPensionCAndPExaminationStomachDuodenumPeritonealAdhesions = "38987-4",
    /**
     * Code: 38988-2
     */
    VACompensationAndPensionCAndPExaminationThyroidParathyroidDiseases = "38988-2",
    /**
     * Code: 39026-0
     */
    CTGuidanceForNeedleLocalizationOfUnspecifiedBodyRegion = "39026-0",
    /**
     * Code: 39027-8
     */
    FluoroscopyGuidanceForNeedleLocalizationOfUnspecifiedBodyRegion = "39027-8",
    /**
     * Code: 39028-6
     */
    MRIGuidanceForNeedleLocalizationOfUnspecifiedBodyRegion = "39028-6",
    /**
     * Code: 39029-4
     */
    OrbitAndFaceMRIWAndWOContrastIV = "39029-4",
    /**
     * Code: 39030-2
     */
    VeinBilateralUS = "39030-2",
    /**
     * Code: 39031-0
     */
    ExtremityArteryBilateralUSDoppler = "39031-0",
    /**
     * Code: 39032-8
     */
    KidneyTransplantUS = "39032-8",
    /**
     * Code: 39033-6
     */
    UpperExtremityMRIWOContrast = "39033-6",
    /**
     * Code: 39034-4
     */
    UpperExtremityMRIWAndWOContrastIV = "39034-4",
    /**
     * Code: 39036-9
     */
    VeinUS = "39036-9",
    /**
     * Code: 39037-7
     */
    UpperExtremityMRIWContrastIV = "39037-7",
    /**
     * Code: 39038-5
     */
    OrbitAndFaceMRIWContrastIV = "39038-5",
    /**
     * Code: 39039-3
     */
    BrachiocephalicArteryUSDoppler = "39039-3",
    /**
     * Code: 39040-1
     */
    AVFistulaUS = "39040-1",
    /**
     * Code: 39042-7
     */
    ExtremityArteryUSDoppler = "39042-7",
    /**
     * Code: 39043-5
     */
    UnspecifiedBodyRegionMRIAnd3DReconstruction = "39043-5",
    /**
     * Code: 39044-3
     */
    HeadVesselsUSDopplerLimited = "39044-3",
    /**
     * Code: 39045-0
     */
    VeinUSLimited = "39045-0",
    /**
     * Code: 39046-8
     */
    PelvisCTLimitedPelvimetryWOContrast = "39046-8",
    /**
     * Code: 39047-6
     */
    HipFluoroscopyDuringSurgery = "39047-6",
    /**
     * Code: 39048-4
     */
    ScapulaXRayAPSingleView = "39048-4",
    /**
     * Code: 39049-2
     */
    SpineThoracicAndLumbarXRayAPSingleView = "39049-2",
    /**
     * Code: 39050-0
     */
    RibsXRayAPSingleView = "39050-0",
    /**
     * Code: 39051-8
     */
    ChestXRayLateral = "39051-8",
    /**
     * Code: 39052-6
     */
    SpineXRayLateral = "39052-6",
    /**
     * Code: 39053-4
     */
    RibsXRayLateral = "39053-4",
    /**
     * Code: 39054-2
     */
    BreastDuctMammogramWContrastIntraDuct = "39054-2",
    /**
     * Code: 39055-9
     */
    ExtremityVeinsFluoroscopicAngiogramWContrastIV = "39055-9",
    /**
     * Code: 39056-7
     */
    UnspecifiedBodyRegionXRayWManualStress = "39056-7",
    /**
     * Code: 39057-5
     */
    PulmonaryArteryFluoroscopicAngiogramWContrastIA = "39057-5",
    /**
     * Code: 39058-3
     */
    SalivaryGlandXRay = "39058-3",
    /**
     * Code: 39059-1
     */
    GastrointestineUpperFluoroscopyWAirAndBariumContrastPO = "39059-1",
    /**
     * Code: 39060-9
     */
    RibsXRay2Views = "39060-9",
    /**
     * Code: 39061-7
     */
    SacrumAndCoccyxXRay3Views = "39061-7",
    /**
     * Code: 39062-5
     */
    RibsXRay3Views = "39062-5",
    /**
     * Code: 39063-3
     */
    SpineLumbarXRay5ViewsWFlexionAndWExtension = "39063-3",
    /**
     * Code: 39064-1
     */
    RibsXRayAnteriorAndLateral = "39064-1",
    /**
     * Code: 39065-8
     */
    PelvisXRayAPAndInletAndOutletAndOblique = "39065-8",
    /**
     * Code: 39066-6
     */
    ChestFluoroscopyAPAndLateral = "39066-6",
    /**
     * Code: 39067-4
     */
    SpineCervicalAndThoracicAndLumbarXRayAPAndLateral = "39067-4",
    /**
     * Code: 39068-2
     */
    FootXRayAPAndLateralStanding = "39068-2",
    /**
     * Code: 39069-0
     */
    FootXRayAPAndLateral = "39069-0",
    /**
     * Code: 39070-8
     */
    ChestXRayAPAndLateralAndLordotic = "39070-8",
    /**
     * Code: 39071-6
     */
    KneeXRayAPAndLateralAndMerchants = "39071-6",
    /**
     * Code: 39072-4
     */
    AnkleXRayAPAndLateralAndOblique = "39072-4",
    /**
     * Code: 39073-2
     */
    KneeXRayAPAndLateralAndRightObliqueAndLeftOblique = "39073-2",
    /**
     * Code: 39074-0
     */
    ChestXRayAPAndLateralAndRightObliqueAndLeftOblique = "39074-0",
    /**
     * Code: 39075-7
     */
    ToesXRayAPAndOblique = "39075-7",
    /**
     * Code: 39076-5
     */
    FootXRayAPAndOblique = "39076-5",
    /**
     * Code: 39077-3
     */
    ShoulderXRayAPAndTransthoracic = "39077-3",
    /**
     * Code: 39078-1
     */
    FingerXRayPAAndLateralAndOblique = "39078-1",
    /**
     * Code: 39079-9
     */
    HandXRayPAAndOblique = "39079-9",
    /**
     * Code: 39093-0
     */
    HepaticVeinsFluoroscopicAngiogramWContrastIV = "39093-0",
    /**
     * Code: 39094-8
     */
    CarotidArteryCervicalFluoroscopicAngiogramWContrastIA = "39094-8",
    /**
     * Code: 39095-5
     */
    CarotidArteryAndCerebralArteryFluoroscopicAngiogramWContrastIA = "39095-5",
    /**
     * Code: 39096-3
     */
    HepaticVeinsFluoroscopicAngiogramWContrastIVAndWHemodynamics = "39096-3",
    /**
     * Code: 39097-1
     */
    CarotidArteryBilateralAndCerebralArteryBilateralFluoroscopicAngiogramWContrastIA = "39097-1",
    /**
     * Code: 39098-9
     */
    CarotidArteryCervicalBilateralFluoroscopicAngiogramWContrastIA = "39098-9",
    /**
     * Code: 39099-7
     */
    RibsBilateralAndChestXRay4ViewsAndPAChest = "39099-7",
    /**
     * Code: 39100-3
     */
    RibsRightAndChestXRayLateralAndPAChest = "39100-3",
    /**
     * Code: 39101-1
     */
    RibsAndChestXRayLateralAndPAChest = "39101-1",
    /**
     * Code: 39138-3
     */
    FluoroscopicAngiogramGuidanceForVascularAccessOfVessel = "39138-3",
    /**
     * Code: 39139-1
     */
    USGuidanceForVascularAccessOfUnspecifiedBodyRegion = "39139-1",
    /**
     * Code: 39140-9
     */
    HeartMRICineForBloodFlowVelocityMapping = "39140-9",
    /**
     * Code: 39141-7
     */
    BoneMarrowMRIForBloodFlow = "39141-7",
    /**
     * Code: 39142-5
     */
    HeadCTPerfusionWContrastIV = "39142-5",
    /**
     * Code: 39144-1
     */
    GastrointestineUpperFluoroscopyWAirContrastPO = "39144-1",
    /**
     * Code: 39145-8
     */
    BreastDuctLeftMammogramWContrastIntraMultipleDucts = "39145-8",
    /**
     * Code: 39146-6
     */
    BreastDuctBilateralMammogramWContrastIntraMultipleDucts = "39146-6",
    /**
     * Code: 39147-4
     */
    BreastDuctRightMammogramWContrastIntraMultipleDucts = "39147-4",
    /**
     * Code: 39148-2
     */
    BreastDuctMammogramWContrastIntraMultipleDucts = "39148-2",
    /**
     * Code: 39149-0
     */
    GastrointestinalSystemAndRespiratorySystemXRayForForeignBody = "39149-0",
    /**
     * Code: 39150-8
     */
    BreastFFDMammogramPostLocalization = "39150-8",
    /**
     * Code: 39151-6
     */
    VasDeferensFluoroscopyWContrastIntraVasDeferens = "39151-6",
    /**
     * Code: 39152-4
     */
    BreastFFDMammogramDiagnostic = "39152-4",
    /**
     * Code: 39153-2
     */
    BreastFFDMammogramScreening = "39153-2",
    /**
     * Code: 39154-0
     */
    BreastBilateralFFDMammogramDiagnostic = "39154-0",
    /**
     * Code: 39291-0
     */
    LowerExtremityMRIWAndWOContrastIV = "39291-0",
    /**
     * Code: 39292-8
     */
    LowerExtremityMRIWOContrast = "39292-8",
    /**
     * Code: 39293-6
     */
    LowerExtremityMRIWContrastIV = "39293-6",
    /**
     * Code: 39321-5
     */
    ShoulderXRayAPWInternalRotationAndWExternalRotationAndAxillary = "39321-5",
    /**
     * Code: 39322-3
     */
    SpineCTWContrastIntradisc = "39322-3",
    /**
     * Code: 39323-1
     */
    AbdomenXRayRightPosteriorOblique = "39323-1",
    /**
     * Code: 39324-9
     */
    WristLeftXRayPAWClenchedFist = "39324-9",
    /**
     * Code: 39325-6
     */
    ShoulderLeftXRayAPWInternalRotationAndGrasheyAndAxillaryAndOutlet = "39325-6",
    /**
     * Code: 39326-4
     */
    RibsLeftAndChestXRay = "39326-4",
    /**
     * Code: 39327-2
     */
    AbdomenAndFetusXRayForFetalAge = "39327-2",
    /**
     * Code: 39328-0
     */
    ShoulderLeftXRayAPWInternalRotationAndWExternalRotation = "39328-0",
    /**
     * Code: 39329-8
     */
    ShoulderBilateralXRayAPWInternalRotationAndWExternalRotation = "39329-8",
    /**
     * Code: 39330-6
     */
    AnkleBilateralXRayAPAndLateralStanding = "39330-6",
    /**
     * Code: 39331-4
     */
    FootBilateralXRayAPAndLateralStanding = "39331-4",
    /**
     * Code: 39332-2
     */
    FootLeftXRayAPAndLateralStanding = "39332-2",
    /**
     * Code: 39333-0
     */
    SpineLumbarXRayAPAndLateralStanding = "39333-0",
    /**
     * Code: 39334-8
     */
    FootLeftXRayAPAndLateralAndObliqueStanding = "39334-8",
    /**
     * Code: 39335-5
     */
    ShoulderLeftXRayAPWInternalRotationAndWExternalRotationAndAxillary = "39335-5",
    /**
     * Code: 39336-3
     */
    ShoulderBilateralXRayAPWInternalRotationAndWExternalRotationAndAxillary = "39336-3",
    /**
     * Code: 39337-1
     */
    ShoulderBilateralXRayAPWInternalRotationAndWExternalRotationAndAxillaryAndOutlet = "39337-1",
    /**
     * Code: 39338-9
     */
    ShoulderLeftXRayAPWInternalRotationAndWExternalRotationAndAxillaryAndY = "39338-9",
    /**
     * Code: 39339-7
     */
    ShoulderBilateralXRayAPAndAxillaryAndOutletAnd30DegreeCaudalAngle = "39339-7",
    /**
     * Code: 39340-5
     */
    SpineLumbarXRayLateralStandingAndWFlexionAndWExtension = "39340-5",
    /**
     * Code: 39341-3
     */
    ChestXRayLateralAndPAWInspirationAndExpiration = "39341-3",
    /**
     * Code: 39343-9
     */
    ShoulderBilateralXRayAPWInternalRotationAndWExternalRotationAndY = "39343-9",
    /**
     * Code: 39344-7
     */
    ShoulderBilateralXRayAPWInternalRotationAndWExternalRotationAndAxillaryAndY = "39344-7",
    /**
     * Code: 39345-4
     */
    KneeLeftXRaySunriseAndTunnelStanding = "39345-4",
    /**
     * Code: 39346-2
     */
    ShoulderBilateralXRayAPWInternalRotationAndWestPoint = "39346-2",
    /**
     * Code: 39347-0
     */
    ShoulderLeftXRayAPWInternalRotationAndWestPoint = "39347-0",
    /**
     * Code: 39348-8
     */
    ShoulderLeftXRayAPWInternalRotationAndWExternalRotationAndY = "39348-8",
    /**
     * Code: 39349-6
     */
    KidneyBilateralFluoroscopyWContrastRetrograde = "39349-6",
    /**
     * Code: 39350-4
     */
    ShoulderBilateralXRayGrasheyAndOutletAndSerendipity = "39350-4",
    /**
     * Code: 39351-2
     */
    RibsUpperAnteriorAndPosteriorLeftXRay = "39351-2",
    /**
     * Code: 39352-0
     */
    RibsPosteriorBilateralXRay = "39352-0",
    /**
     * Code: 39353-8
     */
    RibsUpperPosteriorLeftXRay = "39353-8",
    /**
     * Code: 39359-5
     */
    KidneyBilateralXRayTomographWOContrast = "39359-5",
    /**
     * Code: 39360-3
     */
    PelvisXRayAndInletAndOutlet = "39360-3",
    /**
     * Code: 39361-1
     */
    FluoroscopyGuidanceForAbscessDrainageOfLiver = "39361-1",
    /**
     * Code: 39362-9
     */
    FluoroscopyGuidanceForPlacementOfTubeInChest = "39362-9",
    /**
     * Code: 39363-7
     */
    FistulaFluoroscopyWContrastRetrograde = "39363-7",
    /**
     * Code: 39364-5
     */
    WristRightXRay3ViewsAndRadialDeviation = "39364-5",
    /**
     * Code: 39365-2
     */
    WristRightXRay3ViewsAndUlnarDeviation = "39365-2",
    /**
     * Code: 39366-0
     */
    ScapulaXRayLateralAndOutlet = "39366-0",
    /**
     * Code: 39367-8
     */
    SpineThoracicAndLumbarXRayScoliosisAPAndLateralStanding = "39367-8",
    /**
     * Code: 39368-6
     */
    AnkleRightXRayAPAndLateralStanding = "39368-6",
    /**
     * Code: 39369-4
     */
    AnkleRightXRayAPAndLateralAndObliqueWManualStress = "39369-4",
    /**
     * Code: 39370-2
     */
    AnkleRightXRayAndViewWManualStress = "39370-2",
    /**
     * Code: 39371-0
     */
    AnkleRightXRayAPAndLateralAndObliqueStanding = "39371-0",
    /**
     * Code: 39372-8
     */
    AnkleRightXRayAndMortise = "39372-8",
    /**
     * Code: 39373-6
     */
    ElbowRightXRayAndOblique = "39373-6",
    /**
     * Code: 39374-4
     */
    FootRightXRayAPAndLateralStanding = "39374-4",
    /**
     * Code: 39375-1
     */
    FootRightXRayAPAndLateralAndObliqueStanding = "39375-1",
    /**
     * Code: 39376-9
     */
    RadiusRightAndUlnaRightXRayAndOblique = "39376-9",
    /**
     * Code: 39377-7
     */
    HipRightXRayAndLateralCrosstable = "39377-7",
    /**
     * Code: 39378-5
     */
    KneeRightXRay2ViewsAndOblique = "39378-5",
    /**
     * Code: 39379-3
     */
    KneeRightXRay2ViewsAndSunrise = "39379-3",
    /**
     * Code: 39380-1
     */
    KneeRightXRay2ViewsAndSunriseAndTunnel = "39380-1",
    /**
     * Code: 39381-9
     */
    KneeRightXRay2ViewsAndTunnel = "39381-9",
    /**
     * Code: 39382-7
     */
    KneeRightXRay2ViewsAndTunnelStanding = "39382-7",
    /**
     * Code: 39383-5
     */
    KneeRightXRay3ViewsAndSunrise = "39383-5",
    /**
     * Code: 39384-3
     */
    KneeRightXRay4ViewsAndAPStanding = "39384-3",
    /**
     * Code: 39385-0
     */
    KneeRightXRay4ViewsAndOblique = "39385-0",
    /**
     * Code: 39386-8
     */
    KneeRightXRay4ViewsAndTunnel = "39386-8",
    /**
     * Code: 39387-6
     */
    KneeRightXRay4ViewsAndSunriseAndTunnel = "39387-6",
    /**
     * Code: 39388-4
     */
    KneeRightXRayAPAndLateralAndRightObliqueAndLeftOblique = "39388-4",
    /**
     * Code: 39389-2
     */
    KneeRightXRayAndTunnel = "39389-2",
    /**
     * Code: 39390-0
     */
    KneeRightXRayAndOblique = "39390-0",
    /**
     * Code: 39391-8
     */
    KneeRightXRayAndSunrise = "39391-8",
    /**
     * Code: 39392-6
     */
    ShoulderRightXRayWInternalRotationAndWExternalRotationAndAxillary = "39392-6",
    /**
     * Code: 39393-4
     */
    ShoulderRightXRay3ViewsAndAxillary = "39393-4",
    /**
     * Code: 39394-2
     */
    ShoulderRightXRay3ViewsAndY = "39394-2",
    /**
     * Code: 39395-9
     */
    ShoulderRightXRayAPWInternalRotationAndWExternalRotation = "39395-9",
    /**
     * Code: 39396-7
     */
    ShoulderRightXRayAPWInternalRotationAndWestPoint = "39396-7",
    /**
     * Code: 39397-5
     */
    ShoulderRightXRayAPWInternalRotationAndWExternalRotationAndWestPoint = "39397-5",
    /**
     * Code: 39398-3
     */
    TibiaRightAndFibulaRightXRayAndOblique = "39398-3",
    /**
     * Code: 39399-1
     */
    WristRightXRay3ViewsAndCarpalTunnel = "39399-1",
    /**
     * Code: 39400-7
     */
    WristRightXRayAndCarpalTunnel = "39400-7",
    /**
     * Code: 39401-5
     */
    ShoulderXRayAPAndGrasheyAndAxillary = "39401-5",
    /**
     * Code: 39402-3
     */
    ShoulderXRayAPWInternalRotationAndWExternalRotation = "39402-3",
    /**
     * Code: 39403-1
     */
    ShoulderXRayAxillaryAndTranscapular = "39403-1",
    /**
     * Code: 39404-9
     */
    SinusesXRay3ViewsAndSubmentovertex = "39404-9",
    /**
     * Code: 39405-6
     */
    SternumXRayLateralAndRightObliqueAndLeftOblique = "39405-6",
    /**
     * Code: 39406-4
     */
    SternumXRayLateralAndRightAnteriorOblique = "39406-4",
    /**
     * Code: 39407-2
     */
    SpineThoracicXRay5ViewsAndOblique = "39407-2",
    /**
     * Code: 39408-0
     */
    SpineThoracicXRayTomographAP = "39408-0",
    /**
     * Code: 39409-8
     */
    SpineThoracicXRayTomographLateral = "39409-8",
    /**
     * Code: 39410-6
     */
    SpineThoracicXRayAPSingleViewWLeftBending = "39410-6",
    /**
     * Code: 39411-4
     */
    SpineThoracicXRayAPSingleViewWRightBending = "39411-4",
    /**
     * Code: 39412-2
     */
    SpineThoracicXRayAndSwimmers = "39412-2",
    /**
     * Code: 39413-0
     */
    SpineThoracicXRay4ViewsAndOblique = "39413-0",
    /**
     * Code: 39414-8
     */
    SpineThoracicXRayAndOblique = "39414-8",
    /**
     * Code: 39415-5
     */
    GastrointestineUS = "39415-5",
    /**
     * Code: 39416-3
     */
    GenitourinarySystemUS = "39416-3",
    /**
     * Code: 39418-9
     */
    ExtremityVeinBilateralUSDoppler = "39418-9",
    /**
     * Code: 39419-7
     */
    RenalVesselsBilateralUSDoppler = "39419-7",
    /**
     * Code: 39420-5
     */
    LowerExtremityVeinBilateralUSDoppler = "39420-5",
    /**
     * Code: 39421-3
     */
    LowerExtremityArteryBilateralUSDoppler = "39421-3",
    /**
     * Code: 39422-1
     */
    LowerExtremityVesselsBilateralUSDoppler = "39422-1",
    /**
     * Code: 39423-9
     */
    UpperExtremityArteryBilateralUSDoppler = "39423-9",
    /**
     * Code: 39424-7
     */
    ExtremityVesselsUSDopplerLimited = "39424-7",
    /**
     * Code: 39425-4
     */
    IliacArteryUSDoppler = "39425-4",
    /**
     * Code: 39426-2
     */
    RenalVesselsUSDoppler = "39426-2",
    /**
     * Code: 39427-0
     */
    CarotidArteryLeftUSDoppler = "39427-0",
    /**
     * Code: 39428-8
     */
    ExtremityArteryLeftUSDoppler = "39428-8",
    /**
     * Code: 39429-6
     */
    ExtremityVeinLeftUSDoppler = "39429-6",
    /**
     * Code: 39430-4
     */
    LowerExtremityVesselsLeftUSDopplerLimited = "39430-4",
    /**
     * Code: 39431-2
     */
    LowerExtremityVesselsLeftUSDoppler = "39431-2",
    /**
     * Code: 39432-0
     */
    LowerExtremityVeinLeftUSDoppler = "39432-0",
    /**
     * Code: 39433-8
     */
    UpperExtremityVesselsLeftUSDoppler = "39433-8",
    /**
     * Code: 39434-6
     */
    LowerExtremityArteryUSDoppler = "39434-6",
    /**
     * Code: 39435-3
     */
    RenalArteryUSDoppler = "39435-3",
    /**
     * Code: 39436-1
     */
    RenalVesselsUSDopplerLimited = "39436-1",
    /**
     * Code: 39437-9
     */
    CarotidArteryRightUSDoppler = "39437-9",
    /**
     * Code: 39439-5
     */
    ExtremityArteryRightUSDoppler = "39439-5",
    /**
     * Code: 39440-3
     */
    ExtremityVeinRightUSDoppler = "39440-3",
    /**
     * Code: 39441-1
     */
    LowerExtremityVesselsRightUSDopplerLimited = "39441-1",
    /**
     * Code: 39442-9
     */
    LowerExtremityVesselsRightUSDoppler = "39442-9",
    /**
     * Code: 39443-7
     */
    LowerExtremityVeinRightUSDoppler = "39443-7",
    /**
     * Code: 39444-5
     */
    UpperExtremityVesselsRightUSDoppler = "39444-5",
    /**
     * Code: 39445-2
     */
    VesselsUSDoppler = "39445-2",
    /**
     * Code: 39446-0
     */
    TesticleVesselsUSDoppler = "39446-0",
    /**
     * Code: 39447-8
     */
    UpperExtremityArteryUSDoppler = "39447-8",
    /**
     * Code: 39448-6
     */
    UpperExtremityVesselsUSDoppler = "39448-6",
    /**
     * Code: 39449-4
     */
    ExtremityVeinUSDoppler = "39449-4",
    /**
     * Code: 39450-2
     */
    GastrointestineUSWContrastPO = "39450-2",
    /**
     * Code: 39451-0
     */
    USGuidanceForAbscessDrainageOfUnspecifiedBodyRegion = "39451-0",
    /**
     * Code: 39452-8
     */
    USGuidanceForAspirationOfOvary = "39452-8",
    /**
     * Code: 39453-6
     */
    TendonUS = "39453-6",
    /**
     * Code: 39454-4
     */
    LiverTransplantUS = "39454-4",
    /**
     * Code: 39489-0
     */
    RibsLowerPosteriorXRay = "39489-0",
    /**
     * Code: 39490-8
     */
    FemurRightAndTibiaRightXRayForLegLength = "39490-8",
    /**
     * Code: 39491-6
     */
    RibsUpperAnteriorAndPosteriorRightXRay = "39491-6",
    /**
     * Code: 39492-4
     */
    RibsUpperPosteriorRightXRay = "39492-4",
    /**
     * Code: 39493-2
     */
    RibsLowerPosteriorRightXRay = "39493-2",
    /**
     * Code: 39494-0
     */
    AbdominalWallUS = "39494-0",
    /**
     * Code: 39495-7
     */
    ExtremityVesselsBilateralUSDoppler = "39495-7",
    /**
     * Code: 39496-5
     */
    UpperExtremityVeinBilateralUSDoppler = "39496-5",
    /**
     * Code: 39497-3
     */
    IliacVesselsUSDoppler = "39497-3",
    /**
     * Code: 39498-1
     */
    FemoralVesselsLeftUSDoppler = "39498-1",
    /**
     * Code: 39499-9
     */
    LowerExtremityArteryLeftUSDoppler = "39499-9",
    /**
     * Code: 39500-4
     */
    UpperExtremityArteryLeftUSDoppler = "39500-4",
    /**
     * Code: 39501-2
     */
    UpperExtremityVeinLeftUSDoppler = "39501-2",
    /**
     * Code: 39502-0
     */
    OvarianVesselsUSDoppler = "39502-0",
    /**
     * Code: 39503-8
     */
    ExtremityVesselsRightUSDoppler = "39503-8",
    /**
     * Code: 39504-6
     */
    FemoralVesselsRightUSDoppler = "39504-6",
    /**
     * Code: 39505-3
     */
    LowerExtremityArteryRightUSDoppler = "39505-3",
    /**
     * Code: 39506-1
     */
    UpperExtremityArteryRightUSDoppler = "39506-1",
    /**
     * Code: 39507-9
     */
    UpperExtremityVeinRightUSDoppler = "39507-9",
    /**
     * Code: 39508-7
     */
    UmbilicalVesselsUSDoppler = "39508-7",
    /**
     * Code: 39509-5
     */
    PancreasTransplantUS = "39509-5",
    /**
     * Code: 39510-3
     */
    LymphaticsPelvicFluoroscopyWContrastIntraLymphatic = "39510-3",
    /**
     * Code: 39511-1
     */
    PelvisXRayAndOblique = "39511-1",
    /**
     * Code: 39512-9
     */
    HipRightXRayAPAndDaneliusMiller = "39512-9",
    /**
     * Code: 39513-7
     */
    HipRightXRayAndDaneliusMiller = "39513-7",
    /**
     * Code: 39514-5
     */
    HipRightXRayDaneliusMiller = "39514-5",
    /**
     * Code: 39515-2
     */
    WristRightXRayLateralWFlexionAndWExtension = "39515-2",
    /**
     * Code: 39516-0
     */
    ShoulderXRayStrykerNotch = "39516-0",
    /**
     * Code: 39517-8
     */
    ShoulderXRayStrykerNotchAndWestPoint = "39517-8",
    /**
     * Code: 39518-6
     */
    BonesLongXRaySurveyLimited = "39518-6",
    /**
     * Code: 39519-4
     */
    SkullXRayPAAndRightLateralAndLeftLateral = "39519-4",
    /**
     * Code: 39520-2
     */
    SkullXRayPAAndRightLateralAndLeftLateralAndTowne = "39520-2",
    /**
     * Code: 39521-0
     */
    SkullXRayPAAndRightLateralAndLeftLateralAndCaldwellAndTowne = "39521-0",
    /**
     * Code: 39522-8
     */
    USGuidanceForBiopsyOfLymphNode = "39522-8",
    /**
     * Code: 39523-6
     */
    ArteryUSDoppler = "39523-6",
    /**
     * Code: 39524-4
     */
    VeinUSDopplerLimited = "39524-4",
    /**
     * Code: 39525-1
     */
    VeinUSDoppler = "39525-1",
    /**
     * Code: 39526-9
     */
    ExtremityUSLimited = "39526-9",
    /**
     * Code: 39527-7
     */
    UnspecifiedBodyRegionUSOfForeignBody = "39527-7",
    /**
     * Code: 39619-2
     */
    PulmonarySystemScan = "39619-2",
    /**
     * Code: 39620-0
     */
    ScanGuidanceForAbscessLocalizationLimited = "39620-0",
    /**
     * Code: 39621-8
     */
    SPECTGuidanceForAbscessLocalization = "39621-8",
    /**
     * Code: 39622-6
     */
    SPECTGuidanceForAbscessLocalizationWholeBody = "39622-6",
    /**
     * Code: 39623-4
     */
    ScanGuidanceForAbscessLocalizationWholeBody = "39623-4",
    /**
     * Code: 39624-2
     */
    AdrenalGlandScanWI131NP59IV = "39624-2",
    /**
     * Code: 39625-9
     */
    ArteryScanWTc99mDTPAIA = "39625-9",
    /**
     * Code: 39626-7
     */
    VeinBilateralScan = "39626-7",
    /**
     * Code: 39627-5
     */
    BoneScanLimited = "39627-5",
    /**
     * Code: 39628-3
     */
    MeckelsDiverticulumSPECT = "39628-3",
    /**
     * Code: 39629-1
     */
    MeckelsDiverticulumScan = "39629-1",
    /**
     * Code: 39630-9
     */
    BrainScanWTc99mHMPAOIV = "39630-9",
    /**
     * Code: 39631-7
     */
    BrainSPECTWTc99mHMPAOIV = "39631-7",
    /**
     * Code: 39632-5
     */
    BrainSPECT = "39632-5",
    /**
     * Code: 39633-3
     */
    BrainScanStatic = "39633-3",
    /**
     * Code: 39634-1
     */
    BrainScanStaticLimited = "39634-1",
    /**
     * Code: 39635-8
     */
    BrainScanWTl201IV = "39635-8",
    /**
     * Code: 39636-6
     */
    BrainScanFlow = "39636-6",
    /**
     * Code: 39637-4
     */
    BrainSPECTFlow = "39637-4",
    /**
     * Code: 39638-2
     */
    BrainSPECTWI123IV = "39638-2",
    /**
     * Code: 39639-0
     */
    BrainSPECTWTl201IV = "39639-0",
    /**
     * Code: 39640-8
     */
    BrainSPECTWTc99mDTPAIV = "39640-8",
    /**
     * Code: 39641-6
     */
    BrainSPECTWTc99mGlucoheptonateIV = "39641-6",
    /**
     * Code: 39642-4
     */
    BrainScanWTc99mGlucoheptonateIV = "39642-4",
    /**
     * Code: 39643-2
     */
    BrainVeinsScan = "39643-2",
    /**
     * Code: 39644-0
     */
    BreastSPECT = "39644-0",
    /**
     * Code: 39645-7
     */
    BreastScanLimited = "39645-7",
    /**
     * Code: 39646-5
     */
    BreastScan = "39646-5",
    /**
     * Code: 39647-3
     */
    HeartSPECTWTc99mTetrofosminIV = "39647-3",
    /**
     * Code: 39648-1
     */
    HeartSPECTWDipyridamoleAndWRadionuclideIV = "39648-1",
    /**
     * Code: 39649-9
     */
    HeartSPECT = "39649-9",
    /**
     * Code: 39650-7
     */
    HeartScan = "39650-7",
    /**
     * Code: 39651-5
     */
    HeartScanWAdenosineAndWTl201IV = "39651-5",
    /**
     * Code: 39652-3
     */
    HeartScanWDobutamineAndWTl201IV = "39652-3",
    /**
     * Code: 39653-1
     */
    HeartScanForInfarct = "39653-1",
    /**
     * Code: 39654-9
     */
    HeartSPECTForInfarctWTc99mPYPIV = "39654-9",
    /**
     * Code: 39655-6
     */
    HeartSPECTForInfarctWTc99mSestamibiIV = "39655-6",
    /**
     * Code: 39656-4
     */
    HeartSPECTForInfarct = "39656-4",
    /**
     * Code: 39657-2
     */
    HeartScanForInfarctWTc99mPYPIV = "39657-2",
    /**
     * Code: 39658-0
     */
    HeartSPECTAtRestAndWRadionuclideIV = "39658-0",
    /**
     * Code: 39660-6
     */
    HeartScanAtRestAndWDipyridamoleAndWRadionuclideIV = "39660-6",
    /**
     * Code: 39661-4
     */
    HeartScanAtRestAndWDobutamineAndWRadionuclideIV = "39661-4",
    /**
     * Code: 39662-2
     */
    HeartSPECTAtRestAndWStressAndWTc99mSestamibiIV = "39662-2",
    /**
     * Code: 39663-0
     */
    HeartScanAtRestAndWStressAndWRadionuclideIV = "39663-0",
    /**
     * Code: 39664-8
     */
    HeartScanForShuntDetectionWTc99mMAAIV = "39664-8",
    /**
     * Code: 39665-5
     */
    HeartScanForShuntDetection = "39665-5",
    /**
     * Code: 39666-3
     */
    HeartScanWStressAndW201ThIV = "39666-3",
    /**
     * Code: 39667-1
     */
    HeartScanWStressAndWRadionuclideIV = "39667-1",
    /**
     * Code: 39668-9
     */
    HeartSPECTWStressAndWRadionuclideIV = "39668-9",
    /**
     * Code: 39669-7
     */
    ScanWholeBodyWTc99mArcitumomabIV = "39669-7",
    /**
     * Code: 39670-5
     */
    LacrimalDuctScanWRadionuclideIntraLacrimalDuct = "39670-5",
    /**
     * Code: 39671-3
     */
    RectumScanWRadionuclidePO = "39671-3",
    /**
     * Code: 39672-1
     */
    EsophagusScanForMotilityWRadionuclidePO = "39672-1",
    /**
     * Code: 39673-9
     */
    EsophagusScanForRefluxWRadionuclidePO = "39673-9",
    /**
     * Code: 39674-7
     */
    GallbladderScanWTc99mDISIDAIV = "39674-7",
    /**
     * Code: 39675-4
     */
    SPECTForInfectionWGA67IV = "39675-4",
    /**
     * Code: 39676-2
     */
    ScanStaticForInfectionWGA67IV = "39676-2",
    /**
     * Code: 39677-0
     */
    ScanForInfectionWGA67IV = "39677-0",
    /**
     * Code: 39678-8
     */
    SPECTForTumorWGA67IV = "39678-8",
    /**
     * Code: 39679-6
     */
    ScanForTumorWGA67IV = "39679-6",
    /**
     * Code: 39680-4
     */
    SPECTWholeBodyWGA67IV = "39680-4",
    /**
     * Code: 39681-2
     */
    SPECTLimitedWGA67IV = "39681-2",
    /**
     * Code: 39682-0
     */
    SPECTWGA67IV = "39682-0",
    /**
     * Code: 39683-8
     */
    ScanWholeBodyWGA67IV = "39683-8",
    /**
     * Code: 39684-6
     */
    SPECTForAbscessWGA67IV = "39684-6",
    /**
     * Code: 39685-3
     */
    ScanForAbscessWGA67IV = "39685-3",
    /**
     * Code: 39686-1
     */
    ScanForLymphomaWGA67IV = "39686-1",
    /**
     * Code: 39687-9
     */
    ScanLimitedWGA67IV = "39687-9",
    /**
     * Code: 39688-7
     */
    ScanWGA67IV = "39688-7",
    /**
     * Code: 39689-5
     */
    GastrointestineScanWTc99mSCIV = "39689-5",
    /**
     * Code: 39690-3
     */
    LiverScanWTc99mTaggedRBCIV = "39690-3",
    /**
     * Code: 39691-1
     */
    LiverSPECTWTc99mTaggedRBCIV = "39691-1",
    /**
     * Code: 39692-9
     */
    LiverSPECT = "39692-9",
    /**
     * Code: 39693-7
     */
    LiverScan = "39693-7",
    /**
     * Code: 39694-5
     */
    LiverTransplantScan = "39694-5",
    /**
     * Code: 39695-2
     */
    LungScanLimited = "39695-2",
    /**
     * Code: 39696-0
     */
    LungScanWDepreotideAndWRadionuclideIV = "39696-0",
    /**
     * Code: 39697-8
     */
    LungScanPerfusion = "39697-8",
    /**
     * Code: 39698-6
     */
    ScanWholeBodyWI131MIBGIV = "39698-6",
    /**
     * Code: 39699-4
     */
    HeartScanPerfusionAtRestAndWTc99mSestamibiIV = "39699-4",
    /**
     * Code: 39700-0
     */
    HeartSPECTPerfusionWAdenosineAndWRadionuclideIV = "39700-0",
    /**
     * Code: 39701-8
     */
    HeartScanPerfusionWAdenosineAndWRadionuclideIV = "39701-8",
    /**
     * Code: 39702-6
     */
    HeartScanPerfusionWDobutamineAndWTc99mSestamibiIV = "39702-6",
    /**
     * Code: 39703-4
     */
    HeartScanPerfusionWDobutamineAndWRadionuclideIV = "39703-4",
    /**
     * Code: 39704-2
     */
    HeartScanPerfusionWTc99mSestamibiIV = "39704-2",
    /**
     * Code: 39705-9
     */
    HeartScanPerfusionWDipyridamoleAndWTc99mSestamibiIV = "39705-9",
    /**
     * Code: 39707-5
     */
    HeartScanPerfusionWDipyridamoleAndWTl201IV = "39707-5",
    /**
     * Code: 39708-3
     */
    HeartScanPerfusionWDipyridamoleAndWRadionuclideIV = "39708-3",
    /**
     * Code: 39709-1
     */
    HeartScanPerfusionWDipyridamoleAndWTc99mIV = "39709-1",
    /**
     * Code: 39710-9
     */
    HeartSPECTPerfusionWTc99mSestamibiIV = "39710-9",
    /**
     * Code: 39711-7
     */
    HeartSPECTPerfusionWTl201IV = "39711-7",
    /**
     * Code: 39712-5
     */
    HeartSPECTPerfusion = "39712-5",
    /**
     * Code: 39713-3
     */
    HeartScanPerfusionWTl201IVAndTc99mTetrofosminIV = "39713-3",
    /**
     * Code: 39714-1
     */
    HeartScanPerfusionWTl201IV = "39714-1",
    /**
     * Code: 39715-8
     */
    HeartScanPerfusionWStressAndWTl201IV = "39715-8",
    /**
     * Code: 39716-6
     */
    HeartScanPerfusion = "39716-6",
    /**
     * Code: 39718-2
     */
    HeartSPECTPerfusionAtRestAndWRadionuclideIV = "39718-2",
    /**
     * Code: 39719-0
     */
    HeartScanPerfusionAtRestAndWAdenosineAndWRadionuclideIV = "39719-0",
    /**
     * Code: 39720-8
     */
    HeartScanPerfusionAtRestAndWDipyridamoleAndWTc99mSestamibiIV = "39720-8",
    /**
     * Code: 39722-4
     */
    HeartScanPerfusionAtRestAndWDipyridamoleAndWRadionuclideIV = "39722-4",
    /**
     * Code: 39723-2
     */
    HeartSPECTPerfusionAtRestAndWStressAndWTl201IV = "39723-2",
    /**
     * Code: 39724-0
     */
    HeartSPECTPerfusionAtRestAndWStressAndWRadionuclideIV = "39724-0",
    /**
     * Code: 39725-7
     */
    HeartSPECTPerfusionAtRestAndWAdenosineAndWTl201IV = "39725-7",
    /**
     * Code: 39726-5
     */
    HeartScanPerfusionAtRestAndWStressAndWRadionuclideIV = "39726-5",
    /**
     * Code: 39727-3
     */
    HeartScanPerfusionAtRestAndWStressAndWTc99mSestamibiIV = "39727-3",
    /**
     * Code: 39728-1
     */
    HeartScanPerfusionAtRestAndWRadionuclideIV = "39728-1",
    /**
     * Code: 39729-9
     */
    HeartSPECTPerfusionAtRestAndWTl201IV = "39729-9",
    /**
     * Code: 39730-7
     */
    HeartScanPerfusionWStressAndWRadionuclideIV = "39730-7",
    /**
     * Code: 39731-5
     */
    HeartScanPerfusionWAdenosineAndWTc99mSestamibiIV = "39731-5",
    /**
     * Code: 39732-3
     */
    HeartScanPerfusionWStressAndWTc99mSestamibiIV = "39732-3",
    /**
     * Code: 39733-1
     */
    HeartScanPerfusionWDobutamineAndWTl201IV = "39733-1",
    /**
     * Code: 39734-9
     */
    HeartSPECTPerfusionWStressAndWRadionuclideIV = "39734-9",
    /**
     * Code: 39735-6
     */
    HeartScanPerfusionWAdenosineAndWTl201IV = "39735-6",
    /**
     * Code: 39736-4
     */
    HeartSPECTPerfusionWStressAndWTc99mSestamibiIV = "39736-4",
    /**
     * Code: 39737-2
     */
    NeckScan = "39737-2",
    /**
     * Code: 39738-0
     */
    AbdomenScanWIn111SatumomabIV = "39738-0",
    /**
     * Code: 39739-8
     */
    PancreasScan = "39739-8",
    /**
     * Code: 39740-6
     */
    ParathyroidSPECT = "39740-6",
    /**
     * Code: 39741-4
     */
    ParathyroidScanDelayed = "39741-4",
    /**
     * Code: 39742-2
     */
    ParathyroidScan = "39742-2",
    /**
     * Code: 39743-0
     */
    ProstateSPECTWTc99mCapromabPendatideIV = "39743-0",
    /**
     * Code: 39744-8
     */
    ProstateScanWTc99mCapromabPendatideIV = "39744-8",
    /**
     * Code: 39745-5
     */
    KidneyBilateralScanWTc99mDTPAIV = "39745-5",
    /**
     * Code: 39746-3
     */
    KidneyBilateralScanWTc99mMertiatideIV = "39746-3",
    /**
     * Code: 39747-1
     */
    SalivaryGlandScan = "39747-1",
    /**
     * Code: 39748-9
     */
    SPECTForTumorWTc99mSestamibiIV = "39748-9",
    /**
     * Code: 39749-7
     */
    ScanForTumorWholeBodyWTc99mSestamibiIV = "39749-7",
    /**
     * Code: 39750-5
     */
    ScanForTumorWTc99mSestamibiIV = "39750-5",
    /**
     * Code: 39751-3
     */
    SpleenScan = "39751-3",
    /**
     * Code: 39752-1
     */
    SpleenScanWRadionuclideTaggedHeatDamagedRBCIV = "39752-1",
    /**
     * Code: 39753-9
     */
    ScrotumAndTesticleScanWTc99mDTPAIV = "39753-9",
    /**
     * Code: 39754-7
     */
    ThyroidScanLimitedWI131IV = "39754-7",
    /**
     * Code: 39755-4
     */
    ThyroidSPECTWI131IV = "39755-4",
    /**
     * Code: 39756-2
     */
    ThyroidScanWTc99mSestamibiIV = "39756-2",
    /**
     * Code: 39757-0
     */
    ThyroidScanWTc99mIV = "39757-0",
    /**
     * Code: 39758-8
     */
    ScanGuidanceForLocalizationOfTumorOfBreast = "39758-8",
    /**
     * Code: 39759-6
     */
    SPECTGuidanceForLocalizationOfTumorLimited = "39759-6",
    /**
     * Code: 39760-4
     */
    ScanGuidanceForLocalizationOfTumorLimited = "39760-4",
    /**
     * Code: 39761-2
     */
    ScanGuidanceForLocalizationOfTumorLimitedWTc99mSestamibiIV = "39761-2",
    /**
     * Code: 39762-0
     */
    SPECTGuidanceForLocalizationOfTumor = "39762-0",
    /**
     * Code: 39763-8
     */
    ScanGuidanceForLocalizationOfTumor = "39763-8",
    /**
     * Code: 39764-6
     */
    VeinScanWTc99mSCIV = "39764-6",
    /**
     * Code: 39765-3
     */
    VeinScanWTc99mDTPAIV = "39765-3",
    /**
     * Code: 39766-1
     */
    VeinScanWTc99mHDPIV = "39766-1",
    /**
     * Code: 39767-9
     */
    StomachScanForGastricEmptyingLiquidPhaseWRadionuclidePO = "39767-9",
    /**
     * Code: 39768-7
     */
    StomachScanForGastricEmptyingWTc99mSCPO = "39768-7",
    /**
     * Code: 39769-5
     */
    StomachScanForGastricEmptyingWRadionuclidePO = "39769-5",
    /**
     * Code: 39770-3
     */
    GastrointestineSPECT = "39770-3",
    /**
     * Code: 39811-5
     */
    SPECTForAbscess = "39811-5",
    /**
     * Code: 39812-3
     */
    BoneScanWTc99mHMPAOIV = "39812-3",
    /**
     * Code: 39813-1
     */
    BoneSPECTLimited = "39813-1",
    /**
     * Code: 39814-9
     */
    BoneScanStaticLimited = "39814-9",
    /**
     * Code: 39815-6
     */
    BoneScanStatic = "39815-6",
    /**
     * Code: 39816-4
     */
    BoneSPECTWholeBody = "39816-4",
    /**
     * Code: 39817-2
     */
    BoneScanStaticWholeBody = "39817-2",
    /**
     * Code: 39818-0
     */
    BoneScanWholeBody = "39818-0",
    /**
     * Code: 39819-8
     */
    BoneScanDelayed = "39819-8",
    /**
     * Code: 39820-6
     */
    BoneScanWSM153IV = "39820-6",
    /**
     * Code: 39821-4
     */
    BoneMarrowSPECTLimited = "39821-4",
    /**
     * Code: 39822-2
     */
    BoneMarrowScanLimited = "39822-2",
    /**
     * Code: 39823-0
     */
    BoneMarrowSPECT = "39823-0",
    /**
     * Code: 39824-8
     */
    BoneMarrowScanStatic = "39824-8",
    /**
     * Code: 39825-5
     */
    BoneMarrowSPECTWholeBody = "39825-5",
    /**
     * Code: 39826-3
     */
    BoneMarrowScanWholeBody = "39826-3",
    /**
     * Code: 39827-1
     */
    ScanForEndocrineTumorWholeBodyWI131MIBGIV = "39827-1",
    /**
     * Code: 39828-9
     */
    ScanForEndocrineTumorWholeBodyWIn111PentetreotideIV = "39828-9",
    /**
     * Code: 39829-7
     */
    ScanForTumorWholeBodyWGA67IV = "39829-7",
    /**
     * Code: 39830-5
     */
    ScanForInfectionWholeBodyWGA67IV = "39830-5",
    /**
     * Code: 39831-3
     */
    ScanForTumorLimitedWGA67IV = "39831-3",
    /**
     * Code: 39832-1
     */
    LiverScanStatic = "39832-1",
    /**
     * Code: 39833-9
     */
    LungScanPerfusionWRadionuclideGaseousInhaled = "39833-9",
    /**
     * Code: 39834-7
     */
    LungScanVentilationWTc99mDTPAAerosolInhaled = "39834-7",
    /**
     * Code: 39835-4
     */
    LungScanVentilationWRadionuclideAerosolInhaled = "39835-4",
    /**
     * Code: 39836-2
     */
    LungScanVentilationWRadionuclideGaseousInhaled = "39836-2",
    /**
     * Code: 39837-0
     */
    LungScanVentilationWRadionuclideInhaled = "39837-0",
    /**
     * Code: 39838-8
     */
    LungSPECTVentilationAndPerfusionWRadionuclideInhaledAndWRadionuclideIV = "39838-8",
    /**
     * Code: 39839-6
     */
    SPECTWI131MIBGIV = "39839-6",
    /**
     * Code: 39840-4
     */
    ScanDelayedWI131MIBGIV = "39840-4",
    /**
     * Code: 39841-2
     */
    ScanWI131MIBGIV = "39841-2",
    /**
     * Code: 39842-0
     */
    ScanDelayedWIn111SatumomabIV = "39842-0",
    /**
     * Code: 39843-8
     */
    ScanLimitedWIn111SatumomabIV = "39843-8",
    /**
     * Code: 39844-6
     */
    SPECTWIn111SatumomabIV = "39844-6",
    /**
     * Code: 39845-3
     */
    ScanWholeBodyWIn111SatumomabIV = "39845-3",
    /**
     * Code: 39846-1
     */
    ScanWIn111SatumomabIV = "39846-1",
    /**
     * Code: 39847-9
     */
    ParotidGlandScanFlow = "39847-9",
    /**
     * Code: 39848-7
     */
    PeritoneovenousShuntScanForPatencyWIn111IT = "39848-7",
    /**
     * Code: 39849-5
     */
    PeritoneovenousShuntScanForPatencyWRadionuclideIT = "39849-5",
    /**
     * Code: 39850-3
     */
    KidneyBilateralScanWI131IV = "39850-3",
    /**
     * Code: 39851-1
     */
    KidneyBilateralSPECTWTc99mMertiatideIV = "39851-1",
    /**
     * Code: 39852-9
     */
    KidneyBilateralSPECT = "39852-9",
    /**
     * Code: 39853-7
     */
    KidneyBilateralScanStatic = "39853-7",
    /**
     * Code: 39854-5
     */
    KidneyBilateralScanStaticWTc99mDMSAIV = "39854-5",
    /**
     * Code: 39855-2
     */
    ScrotumAndTesticleScanStatic = "39855-2",
    /**
     * Code: 39856-0
     */
    ThyroidScanFlow = "39856-0",
    /**
     * Code: 39857-8
     */
    AdrenalGlandScanWI131MIBGIV = "39857-8",
    /**
     * Code: 39858-6
     */
    BoneScanFlow = "39858-6",
    /**
     * Code: 39859-4
     */
    BrainScanDelayedStatic = "39859-4",
    /**
     * Code: 39860-2
     */
    HeartScanBloodPoolWStressAndWRadionuclideIV = "39860-2",
    /**
     * Code: 39861-0
     */
    HeartScanBloodPool = "39861-0",
    /**
     * Code: 39862-8
     */
    HeartSPECTBloodPoolAtRestAndWRadionuclideIV = "39862-8",
    /**
     * Code: 39863-6
     */
    HeartScanFirstPassAtRestAndWStressAndWRadionuclideIV = "39863-6",
    /**
     * Code: 39864-4
     */
    HeartScanFirstPass = "39864-4",
    /**
     * Code: 39865-1
     */
    LeftVentricleScanFirstPass = "39865-1",
    /**
     * Code: 39866-9
     */
    HeartScanFirstPassAtRestAndWTc99mSestamibiIV = "39866-9",
    /**
     * Code: 39867-7
     */
    HeartScanFirstPassAtRestAndWRadionuclideIV = "39867-7",
    /**
     * Code: 39868-5
     */
    HeartScanFirstPassWStressAndWTc99mSestamibiIV = "39868-5",
    /**
     * Code: 39869-3
     */
    HeartScanFirstPassWStressAndWRadionuclideIV = "39869-3",
    /**
     * Code: 39870-1
     */
    HeartScanFlowWTc99mPertechnetateIV = "39870-1",
    /**
     * Code: 39871-9
     */
    HeartScanFlow = "39871-9",
    /**
     * Code: 39872-7
     */
    HeartSPECTWallMotion = "39872-7",
    /**
     * Code: 39873-5
     */
    HeartScanWallMotion = "39873-5",
    /**
     * Code: 39874-3
     */
    HeadCisternScanDelayedWRadionuclideIT = "39874-3",
    /**
     * Code: 39875-0
     */
    ScanDelayedWGA67IV = "39875-0",
    /**
     * Code: 39876-8
     */
    LiverAndSpleenSPECT = "39876-8",
    /**
     * Code: 39877-6
     */
    LiverAndSpleenScan = "39877-6",
    /**
     * Code: 39878-4
     */
    LiverAndSpleenScanStatic = "39878-4",
    /**
     * Code: 39879-2
     */
    BoneSPECT1Phase = "39879-2",
    /**
     * Code: 39880-0
     */
    BoneScan2ViewsPhase = "39880-0",
    /**
     * Code: 39881-8
     */
    BoneSPECT3PhaseWholeBody = "39881-8",
    /**
     * Code: 39882-6
     */
    BoneScan3ViewsPhaseWholeBody = "39882-6",
    /**
     * Code: 39883-4
     */
    BoneScan3ViewsPhase = "39883-4",
    /**
     * Code: 39884-2
     */
    BoneScanBloodPool = "39884-2",
    /**
     * Code: 39885-9
     */
    HeartScanFirstPassAndVentricularVolume = "39885-9",
    /**
     * Code: 39886-7
     */
    HeartScanFirstPassAndWallMotionAtRestAndWRadionuclideIV = "39886-7",
    /**
     * Code: 39887-5
     */
    HeartScanFirstPassAndEjectionFractionAtRestAndWRadionuclideIV = "39887-5",
    /**
     * Code: 39888-3
     */
    HeartScanFirstPassAndWallMotionWStressAndWRadionuclideIV = "39888-3",
    /**
     * Code: 39889-1
     */
    HeartScanFirstPassAndEjectionFraction = "39889-1",
    /**
     * Code: 39890-9
     */
    HeartScanFirstPassAndWallMotion = "39890-9",
    /**
     * Code: 39891-7
     */
    HeartScanForInfarctAndFirstPassWTc99mPYPIV = "39891-7",
    /**
     * Code: 39892-5
     */
    HeartScanForInfarctAndFirstPass = "39892-5",
    /**
     * Code: 39893-3
     */
    HeartScanFlowForShuntDetection = "39893-3",
    /**
     * Code: 39894-1
     */
    HeartScanStaticForShuntDetection = "39894-1",
    /**
     * Code: 39895-8
     */
    GallbladderScanEjectionFractionWTc99mDISIDAIV = "39895-8",
    /**
     * Code: 39896-6
     */
    ScanStaticForTumorWGA67IV = "39896-6",
    /**
     * Code: 39897-4
     */
    LiverAndLungScan = "39897-4",
    /**
     * Code: 39898-2
     */
    LungSPECTVentilationWRadionuclideAerosolInhaled = "39898-2",
    /**
     * Code: 39899-0
     */
    SalivaryGlandScanFlow = "39899-0",
    /**
     * Code: 39900-6
     */
    SalivaryGlandScanStatic = "39900-6",
    /**
     * Code: 39901-4
     */
    BoneScan3ViewsPhaseMultipleAreas = "39901-4",
    /**
     * Code: 39902-2
     */
    BoneScan3ViewsPhaseSingleArea = "39902-2",
    /**
     * Code: 39903-0
     */
    BoneScanStaticMultipleAreas = "39903-0",
    /**
     * Code: 39904-8
     */
    BoneScanMultipleAreas = "39904-8",
    /**
     * Code: 39905-5
     */
    BoneSPECTMultipleAreas = "39905-5",
    /**
     * Code: 39906-3
     */
    BoneMarrowSPECTMultipleAreas = "39906-3",
    /**
     * Code: 39907-1
     */
    BoneMarrowScanMultipleAreas = "39907-1",
    /**
     * Code: 39908-9
     */
    HeartScanFirstPassAndWallMotionAndVentricularVolumeWStressAndWRadionuclideIV = "39908-9",
    /**
     * Code: 39909-7
     */
    HeartScanFirstPassAndWallMotionAndVentricularVolumeAndEjectionFractionWStressAndWRadionuclideIV = "39909-7",
    /**
     * Code: 39910-5
     */
    HeartScanFirstPassAndWallMotionAndEjectionFraction = "39910-5",
    /**
     * Code: 39912-1
     */
    HeartScanFirstPassAndWallMotionAndVentricularVolumeAndEjectionFraction = "39912-1",
    /**
     * Code: 39913-9
     */
    HeartSPECTGatedAndEjectionFraction = "39913-9",
    /**
     * Code: 39914-7
     */
    HeartScanGatedWTc99mSestamibiIV = "39914-7",
    /**
     * Code: 39915-4
     */
    HeartScanGated = "39915-4",
    /**
     * Code: 39916-2
     */
    HeartSPECTGated = "39916-2",
    /**
     * Code: 39917-0
     */
    HeartScanGatedAndEjectionFraction = "39917-0",
    /**
     * Code: 39918-8
     */
    HeartSPECTGatedAndWallMotion = "39918-8",
    /**
     * Code: 39919-6
     */
    HeartScanGatedAndFirstPass = "39919-6",
    /**
     * Code: 39920-4
     */
    HeartScanGatedAtRestAndWTc99mSestamibiIV = "39920-4",
    /**
     * Code: 39921-2
     */
    HeartScanGatedAtRestAndWRadionuclideIV = "39921-2",
    /**
     * Code: 39922-0
     */
    HeartScanGatedAtRestAndWTc99mPertechnetateIV = "39922-0",
    /**
     * Code: 39923-8
     */
    HeartScanGatedAndEjectionFractionAtRestAndWRadionuclideIV = "39923-8",
    /**
     * Code: 39924-6
     */
    HeartScanGatedAtRestAndWStressAndWRadionuclideIV = "39924-6",
    /**
     * Code: 39925-3
     */
    HeartScanGatedAndWallMotionAndEjectionFractionAtRestAndWRadionuclideIV = "39925-3",
    /**
     * Code: 39927-9
     */
    HeartScanGatedWStressAndWTc99mPertechnetateIV = "39927-9",
    /**
     * Code: 39928-7
     */
    HeartScanGatedWStressAndWRadionuclideIV = "39928-7",
    /**
     * Code: 39929-5
     */
    HeartScanGatedAndWallMotionWStressAndWRadionuclideIV = "39929-5",
    /**
     * Code: 39930-3
     */
    HeartSPECTGatedWStressAndWRadionuclideIV = "39930-3",
    /**
     * Code: 39931-1
     */
    HeartScanGatedAndWallMotionAndEjectionFraction = "39931-1",
    /**
     * Code: 39932-9
     */
    HeartScanWallMotionAndEjectionFraction = "39932-9",
    /**
     * Code: 39933-7
     */
    ScanForInfectionMultipleAreasWGA67IV = "39933-7",
    /**
     * Code: 39934-5
     */
    ScanForTumorMultipleAreasWGA67IV = "39934-5",
    /**
     * Code: 39935-2
     */
    ScanMultipleAreasWGA67IV = "39935-2",
    /**
     * Code: 39936-0
     */
    JointScanLimited = "39936-0",
    /**
     * Code: 39937-8
     */
    JointScanMultipleAreas = "39937-8",
    /**
     * Code: 39938-6
     */
    JointSPECT = "39938-6",
    /**
     * Code: 39939-4
     */
    JointScan = "39939-4",
    /**
     * Code: 39940-2
     */
    LungScanClearanceWTc99mDTPAAerosolInhaled = "39940-2",
    /**
     * Code: 39941-0
     */
    LungScanPerfusionWParticulateRadionuclideIV = "39941-0",
    /**
     * Code: 39942-8
     */
    LungScanVentilationAndPerfusionWRadionuclideInhaledSingleBreathAndWParticulateRadionuclideIV = "39942-8",
    /**
     * Code: 39943-6
     */
    LungScanVentilationAndPerfusionWRadionuclideInhaledAndWParticulateRadionuclideIV = "39943-6",
    /**
     * Code: 39944-4
     */
    LungScanVentilationAndEquilibriumAndWashoutWRadionuclideInhaled = "39944-4",
    /**
     * Code: 39945-1
     */
    LungScanVentilationWRadionuclideGaseousInhaledSingleBreath = "39945-1",
    /**
     * Code: 39946-9
     */
    LungScanVentilationAndPerfusionAndDifferentialWRadionuclideInhaledAndWRadionuclideIV = "39946-9",
    /**
     * Code: 39947-7
     */
    LungScanVentilationAndEquilibriumWRadionuclideInhaledSingleBreath = "39947-7",
    /**
     * Code: 39948-5
     */
    LungScanVentilationAndEquilibriumAndWashoutWRadionuclideInhaledSingleBreath = "39948-5",
    /**
     * Code: 39949-3
     */
    ScanMultipleAreasWIn111SatumomabIV = "39949-3",
    /**
     * Code: 39950-1
     */
    ProstateScanMultipleAreasWTc99mCapromabPendatideIV = "39950-1",
    /**
     * Code: 39951-9
     */
    ScanForTumorMultipleAreaWTc99mSestamibiIV = "39951-9",
    /**
     * Code: 39952-7
     */
    ScrotumAndTesticleScanStaticAndFlow = "39952-7",
    /**
     * Code: 39953-5
     */
    ScanGuidanceForLocalizationOfTumorMultipleAreas = "39953-5",
    /**
     * Code: 39954-3
     */
    VeinScanForThrombosis = "39954-3",
    /**
     * Code: 40811-2
     */
    VAL11DeoxycorticosteronePresenceInSerumOrPlasma = "40811-2",
    /**
     * Code: 40816-1
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma1HourPostXXXChallenge = "40816-1",
    /**
     * Code: 40818-7
     */
    VAL11DeoxycorticosteroneMolesVolumeIn24HourUrine = "40818-7",
    /**
     * Code: 41770-9
     */
    GallbladderScanWCholecystokininAndWRadionuclideIV = "41770-9",
    /**
     * Code: 41771-7
     */
    KidneyBilateralScanWTc99mDMSAIV = "41771-7",
    /**
     * Code: 41772-5
     */
    BoneSPECTWIn111TaggedWBCIV = "41772-5",
    /**
     * Code: 41773-3
     */
    FacialBonesXRayPortable = "41773-3",
    /**
     * Code: 41774-1
     */
    NeckXRayLateralPortable = "41774-1",
    /**
     * Code: 41775-8
     */
    PelvisXRaySingleViewPortable = "41775-8",
    /**
     * Code: 41776-6
     */
    PelvisAndHipRightXRayAPAndLateralFrogPortable = "41776-6",
    /**
     * Code: 41777-4
     */
    HipRightXRayAPAndLateralPortable = "41777-4",
    /**
     * Code: 41778-2
     */
    FemurRightXRayPortable = "41778-2",
    /**
     * Code: 41779-0
     */
    KneeRightXRayPortable = "41779-0",
    /**
     * Code: 41782-4
     */
    AnkleRightXRayPortable = "41782-4",
    /**
     * Code: 41783-2
     */
    ShoulderRightXRayPortable = "41783-2",
    /**
     * Code: 41784-0
     */
    HumerusRightXRayPortable = "41784-0",
    /**
     * Code: 41785-7
     */
    ElbowRightXRayLimited = "41785-7",
    /**
     * Code: 41786-5
     */
    ElbowRightXRayPortable = "41786-5",
    /**
     * Code: 41787-3
     */
    WristRightXRayPortable = "41787-3",
    /**
     * Code: 41788-1
     */
    HandRightXRayPortable = "41788-1",
    /**
     * Code: 41789-9
     */
    HandRightXRayLimited = "41789-9",
    /**
     * Code: 41790-7
     */
    ChestXRayDuringSurgery = "41790-7",
    /**
     * Code: 41791-5
     */
    RibsRightXRayPortable = "41791-5",
    /**
     * Code: 41792-3
     */
    ChestXRayRightObliqueAndLeftOblique = "41792-3",
    /**
     * Code: 41793-1
     */
    AbdomenXRayDuringSurgery = "41793-1",
    /**
     * Code: 41795-6
     */
    UpperGastrointestineAndSmallBowelFluoroscopyWAirContrastPO = "41795-6",
    /**
     * Code: 41797-2
     */
    ColonFluoroscopyLimitedWAirAndBariumContrastPR = "41797-2",
    /**
     * Code: 41798-0
     */
    USGuidanceForDrainageOfProstate = "41798-0",
    /**
     * Code: 41799-8
     */
    FluoroscopyGuidanceForPlacementOfTubeInLiver = "41799-8",
    /**
     * Code: 41800-4
     */
    FluoroscopyGuidanceForDrainageOfPharynx = "41800-4",
    /**
     * Code: 41801-2
     */
    FluoroscopicAngiogramGuidanceForPlacementOfCatheterInPortalVeinWContrastIV = "41801-2",
    /**
     * Code: 41802-0
     */
    FluoroscopyGuidanceForBiopsyOfProstate = "41802-0",
    /**
     * Code: 41803-8
     */
    FluoroscopyGuidanceForNeedleBiopsyOfBreast = "41803-8",
    /**
     * Code: 41804-6
     */
    UnspecifiedBodyRegionCTAnd3DReconstruction = "41804-6",
    /**
     * Code: 41806-1
     */
    AbdomenCT = "41806-1",
    /**
     * Code: 41807-9
     */
    OrbitCT = "41807-9",
    /**
     * Code: 41808-7
     */
    FacialBonesAndMaxillaCT = "41808-7",
    /**
     * Code: 41809-5
     */
    USGuidanceForDrainageOfAbdomenRetroperitoneum = "41809-5",
    /**
     * Code: 41810-3
     */
    CTGuidanceForRemovalOfFluidFromAbdomen = "41810-3",
    /**
     * Code: 41811-1
     */
    RibsBilateralAndChestXRayAndPAChest = "41811-1",
    /**
     * Code: 41812-9
     */
    LowerExtremityArteryUSLimited = "41812-9",
    /**
     * Code: 41813-7
     */
    UpperExtremityArteryUSLimited = "41813-7",
    /**
     * Code: 41814-5
     */
    UpperExtremityArteryRightUS = "41814-5",
    /**
     * Code: 41815-2
     */
    LowerExtremityArteryRightUS = "41815-2",
    /**
     * Code: 41816-0
     */
    ExtremityVeinsRightUS = "41816-0",
    /**
     * Code: 41817-8
     */
    HipLeftXRayAPAndLateralPortable = "41817-8",
    /**
     * Code: 41818-6
     */
    FemurLeftXRayPortable = "41818-6",
    /**
     * Code: 41819-4
     */
    KneeLeftXRay2ViewsAndTunnel = "41819-4",
    /**
     * Code: 41820-2
     */
    KneeLeftXRayPortable = "41820-2",
    /**
     * Code: 41823-6
     */
    AnkleLeftXRayPortable = "41823-6",
    /**
     * Code: 41824-4
     */
    ShoulderLeftXRayPortable = "41824-4",
    /**
     * Code: 41825-1
     */
    HumerusLeftXRayPortable = "41825-1",
    /**
     * Code: 41826-9
     */
    ElbowLeftXRayLimited = "41826-9",
    /**
     * Code: 41827-7
     */
    ElbowLeftXRayPortable = "41827-7",
    /**
     * Code: 41828-5
     */
    WristLeftXRayPortable = "41828-5",
    /**
     * Code: 41829-3
     */
    HandLeftXRayPortable = "41829-3",
    /**
     * Code: 41830-1
     */
    HandLeftXRayLimited = "41830-1",
    /**
     * Code: 41831-9
     */
    RibsLeftXRayPortable = "41831-9",
    /**
     * Code: 41832-7
     */
    RibsLeftAndChestXRayAndPAChest = "41832-7",
    /**
     * Code: 41833-5
     */
    UpperExtremityArteryLeftUS = "41833-5",
    /**
     * Code: 41834-3
     */
    LowerExtremityArteryLeftUS = "41834-3",
    /**
     * Code: 41835-0
     */
    ExtremityVeinsLeftUS = "41835-0",
    /**
     * Code: 41836-8
     */
    BoneScanLimitedWIn111TaggedWBCIV = "41836-8",
    /**
     * Code: 41837-6
     */
    SPECTWholeBodyWTc99mArcitumomabIV = "41837-6",
    /**
     * Code: 41838-4
     */
    ProstateSPECTWIn111SatumomabIV = "41838-4",
    /**
     * Code: 42007-5
     */
    MastoidBilateralXRayLimited = "42007-5",
    /**
     * Code: 42008-3
     */
    HumerusXRayDuringSurgery = "42008-3",
    /**
     * Code: 42009-1
     */
    ChestXRay2ViewsAndApical = "42009-1",
    /**
     * Code: 42010-9
     */
    RibsRightAndChestXRayAndPAChest = "42010-9",
    /**
     * Code: 42011-7
     */
    ChestAndAbdomenXRayAPAndPAChest = "42011-7",
    /**
     * Code: 42012-5
     */
    GastrointestineUpperFluoroscopyWWaterSolubleContrastPO = "42012-5",
    /**
     * Code: 42014-1
     */
    UrinaryBladderAndUrethraFluoroscopyWContrast = "42014-1",
    /**
     * Code: 42017-4
     */
    FluoroscopyGuidanceForReplacementOfPercutaneousCholecystostomyInAbdomen = "42017-4",
    /**
     * Code: 42018-2
     */
    VeinFluoroscopicAngiogramPercutaneousTransluminalAngioplastyOfVesselWContrastIA = "42018-2",
    /**
     * Code: 42019-0
     */
    AbdomenXRayAPUprightAndLeftLateralDecubitus = "42019-0",
    /**
     * Code: 42020-8
     */
    CTGuidanceForNeedleLocalizationOfSpineLumbar = "42020-8",
    /**
     * Code: 42021-6
     */
    CTGuidanceForNeedleLocalizationOfSpineCervical = "42021-6",
    /**
     * Code: 42132-1
     */
    BreastUSScreening = "42132-1",
    /**
     * Code: 42133-9
     */
    USGuidanceForAbscessDrainageOfLiver = "42133-9",
    /**
     * Code: 42134-7
     */
    USGuidanceForAspirationOfThyroid = "42134-7",
    /**
     * Code: 42135-4
     */
    USGuidanceForBiopsyOfSuperficialBone = "42135-4",
    /**
     * Code: 42136-2
     */
    CTGuidanceForBiopsyOfHeart = "42136-2",
    /**
     * Code: 42137-0
     */
    USGuidanceForBiopsyOfMediastinum = "42137-0",
    /**
     * Code: 42139-6
     */
    USGuidanceForPercutaneousBiopsyOfMuscle = "42139-6",
    /**
     * Code: 42140-4
     */
    USGuidanceForPlacementOfTubeInChest = "42140-4",
    /**
     * Code: 42141-2
     */
    USGuidanceForRemovalOfCatheterFromCentralVeinTunneled = "42141-2",
    /**
     * Code: 42143-8
     */
    UterusAndFallopianTubesUSWSalineIntrauterine = "42143-8",
    /**
     * Code: 42144-6
     */
    ExtremityVeinRightUS = "42144-6",
    /**
     * Code: 42145-3
     */
    ExtremityVeinLeftUS = "42145-3",
    /**
     * Code: 42146-1
     */
    CarotidArteryUSDoppler = "42146-1",
    /**
     * Code: 42147-9
     */
    IliacGraftUSDoppler = "42147-9",
    /**
     * Code: 42148-7
     */
    HeartUS = "42148-7",
    /**
     * Code: 42149-5
     */
    CarotidArteryLeftUSLimited = "42149-5",
    /**
     * Code: 42150-3
     */
    IliacGraftUSDopplerLimited = "42150-3",
    /**
     * Code: 42151-1
     */
    CarotidArteryRightUSLimited = "42151-1",
    /**
     * Code: 42152-9
     */
    PelvisVesselsUSDopplerLimited = "42152-9",
    /**
     * Code: 42153-7
     */
    ExtremityXRaySingleView = "42153-7",
    /**
     * Code: 42156-0
     */
    VesselsFluoroscopicAngiogramWContrastIA = "42156-0",
    /**
     * Code: 42157-8
     */
    ExtremityVesselsFluoroscopicAngiogramWContrastIV = "42157-8",
    /**
     * Code: 42158-6
     */
    AdrenalGlandScan = "42158-6",
    /**
     * Code: 42159-4
     */
    SellaTurcicaXRay = "42159-4",
    /**
     * Code: 42160-2
     */
    ShuntXRay = "42160-2",
    /**
     * Code: 42161-0
     */
    HeartScanWDobutamineAndWRadionuclideIV = "42161-0",
    /**
     * Code: 42162-8
     */
    GastrointestineUpperFluoroscopyAndAPWWaterSolubleContrastPO = "42162-8",
    /**
     * Code: 42163-6
     */
    SpineLumbarXRayAndOblique = "42163-6",
    /**
     * Code: 42164-4
     */
    SpineCervicalXRayAndOblique = "42164-4",
    /**
     * Code: 42165-1
     */
    RibsAndChestXRayAndPAChest = "42165-1",
    /**
     * Code: 42166-9
     */
    HeartScan2ViewsAtRestAndWTl201IV = "42166-9",
    /**
     * Code: 42167-7
     */
    PelvisAndHipBilateralXRayAPAndLateralFrog = "42167-7",
    /**
     * Code: 42168-5
     */
    BreastRightFFDMammogramDiagnostic = "42168-5",
    /**
     * Code: 42169-3
     */
    BreastLeftFFDMammogramDiagnostic = "42169-3",
    /**
     * Code: 42170-1
     */
    ScanForLymphoma = "42170-1",
    /**
     * Code: 42171-9
     */
    ScanForTumorWholeBody = "42171-9",
    /**
     * Code: 42174-3
     */
    BreastBilateralFFDMammogramScreening = "42174-3",
    /**
     * Code: 42175-0
     */
    ScanWholeBody = "42175-0",
    /**
     * Code: 42227-9
     */
    FDAPackageInsertDrugAbuseAndDependenceSection = "42227-9",
    /**
     * Code: 42228-7
     */
    FDAPackageInsertPregnancySection = "42228-7",
    /**
     * Code: 42229-5
     */
    FDAPackageInsertStructuredPatientLabellingUnclassifiedSection = "42229-5",
    /**
     * Code: 42230-3
     */
    FDAPackageInsertStructuredProductLaballingPatientPackageInsertSection = "42230-3",
    /**
     * Code: 42231-1
     */
    FDAPackageInsertStructuredProductLabellingMedguideSection = "42231-1",
    /**
     * Code: 42232-9
     */
    FDAPackageInsertPrecautionsSection = "42232-9",
    /**
     * Code: 42260-0
     */
    CTGuidanceForBiopsyOfUnspecifiedBodyRegionWContrastIV = "42260-0",
    /**
     * Code: 42261-8
     */
    KidneyBilateralScanFlow = "42261-8",
    /**
     * Code: 42262-6
     */
    LiverScanFlow = "42262-6",
    /**
     * Code: 42263-4
     */
    SpleenScanFlow = "42263-4",
    /**
     * Code: 42265-9
     */
    CTGuidanceForBiopsyOfSuperficialBone = "42265-9",
    /**
     * Code: 42266-7
     */
    CTGuidanceForNeedleBiopsyOfSuperficialBone = "42266-7",
    /**
     * Code: 42267-5
     */
    CTGuidanceForNeedleBiopsyOfLymphNode = "42267-5",
    /**
     * Code: 42268-3
     */
    ExtremityCTWAndWOContrastIV = "42268-3",
    /**
     * Code: 42269-1
     */
    ChestAndAbdomenXRay = "42269-1",
    /**
     * Code: 42270-9
     */
    SpineCervicalMRIWFlexionAndWExtension = "42270-9",
    /**
     * Code: 42271-7
     */
    ThyroidScanAndUptakeWI123IV = "42271-7",
    /**
     * Code: 42272-5
     */
    ChestXRayPAAndLateral = "42272-5",
    /**
     * Code: 42273-3
     */
    AnkleBilateralXRay6Views = "42273-3",
    /**
     * Code: 42274-1
     */
    AbdomenAndPelvisCTWAndWOContrastIV = "42274-1",
    /**
     * Code: 42275-8
     */
    ChestAndAbdomenCTWContrastIV = "42275-8",
    /**
     * Code: 42276-6
     */
    ChestAndAbdomenCTWOContrast = "42276-6",
    /**
     * Code: 42277-4
     */
    ChestAndAbdomenCTWAndWOContrastIV = "42277-4",
    /**
     * Code: 42278-2
     */
    ExtremityCTWOContrast = "42278-2",
    /**
     * Code: 42279-0
     */
    CTGuidanceForBiopsyOfKidney = "42279-0",
    /**
     * Code: 42280-8
     */
    CTGuidanceForAbscessDrainageOfAppendix = "42280-8",
    /**
     * Code: 42281-6
     */
    CTGuidanceForAbscessDrainageOfChest = "42281-6",
    /**
     * Code: 42282-4
     */
    CTGuidanceForAbscessDrainageOfLiver = "42282-4",
    /**
     * Code: 42283-2
     */
    CTGuidanceForDrainageOfPancreas = "42283-2",
    /**
     * Code: 42284-0
     */
    CTGuidanceForAbscessDrainageOfPleuralSpace = "42284-0",
    /**
     * Code: 42285-7
     */
    CTGuidanceForAbscessDrainageOfKidney = "42285-7",
    /**
     * Code: 42286-5
     */
    CTGuidanceForAbscessDrainageOfPelvis = "42286-5",
    /**
     * Code: 42287-3
     */
    CTGuidanceForDrainageOfAbdomenRetroperitoneum = "42287-3",
    /**
     * Code: 42288-1
     */
    CTGuidanceForNeedleBiopsyOfAbdomen = "42288-1",
    /**
     * Code: 42289-9
     */
    CTGuidanceForNeedleBiopsyOfKidney = "42289-9",
    /**
     * Code: 42290-7
     */
    CTGuidanceForNeedleBiopsyOfPancreas = "42290-7",
    /**
     * Code: 42291-5
     */
    AbdomenRetroperitoneumCTWOContrast = "42291-5",
    /**
     * Code: 42292-3
     */
    SPECTForTumorWTl201IV = "42292-3",
    /**
     * Code: 42293-1
     */
    HeadVesselsCTAngiogramWOContrast = "42293-1",
    /**
     * Code: 42294-9
     */
    PelvisVesselsCTAngiogramWContrastIV = "42294-9",
    /**
     * Code: 42295-6
     */
    UpperExtremityVesselsCTAngiogramWContrastIV = "42295-6",
    /**
     * Code: 42296-4
     */
    MammogramGuidanceForLocalizationOfBreastLeft = "42296-4",
    /**
     * Code: 42297-2
     */
    MammogramGuidanceForLocalizationOfBreastRight = "42297-2",
    /**
     * Code: 42298-0
     */
    UnspecifiedBodyRegionMRIWAndWOContrastIV = "42298-0",
    /**
     * Code: 42299-8
     */
    ClavicleMRIWAndWOContrastIV = "42299-8",
    /**
     * Code: 42300-4
     */
    ThyroidMRI = "42300-4",
    /**
     * Code: 42301-2
     */
    UterusMRI = "42301-2",
    /**
     * Code: 42302-0
     */
    ClavicleMRIWOContrast = "42302-0",
    /**
     * Code: 42303-8
     */
    OrbitAndFaceMRI = "42303-8",
    /**
     * Code: 42304-6
     */
    HeadVesselsAndNeckVesselsMRIAngiogram = "42304-6",
    /**
     * Code: 42305-3
     */
    ScanForTumorWTl201IV = "42305-3",
    /**
     * Code: 42306-1
     */
    HeartScanGatedAndWallMotion = "42306-1",
    /**
     * Code: 42308-7
     */
    ScrotumAndTesticleScanFlow = "42308-7",
    /**
     * Code: 42309-5
     */
    HeartScanAtRestAndWStressAndWTl201IV = "42309-5",
    /**
     * Code: 42310-3
     */
    KidneySPECT = "42310-3",
    /**
     * Code: 42311-1
     */
    OrbitLeftXRayForForeignBody = "42311-1",
    /**
     * Code: 42312-9
     */
    OrbitRightXRayForForeignBody = "42312-9",
    /**
     * Code: 42313-7
     */
    RibsLeftXRaySingleView = "42313-7",
    /**
     * Code: 42314-5
     */
    RibsRightXRaySingleView = "42314-5",
    /**
     * Code: 42333-5
     */
    USGuidanceForBiopsyOfChestPleura = "42333-5",
    /**
     * Code: 42334-3
     */
    FluoroscopyGuidanceForInjectionOfMammaryArteryInternalLeft = "42334-3",
    /**
     * Code: 42335-0
     */
    SpineCervicalFluoroscopyLimitedWContrastIT = "42335-0",
    /**
     * Code: 42377-2
     */
    BrainCTWXe133Inhaled = "42377-2",
    /**
     * Code: 42378-0
     */
    SpineLumbarXRayAPSingleViewWLeftBending = "42378-0",
    /**
     * Code: 42379-8
     */
    SpineLumbarXRayAPSingleViewWRightBending = "42379-8",
    /**
     * Code: 42380-6
     */
    AnkleLeftXRayAPAndLateralStanding = "42380-6",
    /**
     * Code: 42381-4
     */
    RibsLowerPosteriorLeftXRay = "42381-4",
    /**
     * Code: 42382-2
     */
    AnkleLeftXRayLateralAndMortiseAndBrodenWManualStress = "42382-2",
    /**
     * Code: 42383-0
     */
    GallbladderXRayWDoubleDoseContrastPO = "42383-0",
    /**
     * Code: 42385-5
     */
    BrainAndPituitaryAndSellaTurcicaMRI = "42385-5",
    /**
     * Code: 42386-3
     */
    BrainMRICineForCSFFlow = "42386-3",
    /**
     * Code: 42387-1
     */
    UnspecifiedBodyRegionMRICineForCSFFlow = "42387-1",
    /**
     * Code: 42388-9
     */
    ProstateMRIWEndorectalCoil = "42388-9",
    /**
     * Code: 42389-7
     */
    PelvisMRIWEndorectalCoil = "42389-7",
    /**
     * Code: 42390-5
     */
    TransvaginalMRI = "42390-5",
    /**
     * Code: 42391-3
     */
    BrainAndPituitaryAndSellaTurcicaMRIWContrastIV = "42391-3",
    /**
     * Code: 42392-1
     */
    BrainAndPituitaryAndSellaTurcicaMRIWAndWOContrastIV = "42392-1",
    /**
     * Code: 42393-9
     */
    BrainAndPituitaryAndSellaTurcicaMRIWOContrast = "42393-9",
    /**
     * Code: 42394-7
     */
    PulmonarySystemCTWXe133Inhaled = "42394-7",
    /**
     * Code: 42395-4
     */
    FootSesamoidBonesBilateralXRayAxial = "42395-4",
    /**
     * Code: 42396-2
     */
    FootSesamoidBonesLeftXRayAxial = "42396-2",
    /**
     * Code: 42397-0
     */
    ChestXRayFrontalStereo = "42397-0",
    /**
     * Code: 42398-8
     */
    FootXRayObliqueAndAPAndLateralStanding = "42398-8",
    /**
     * Code: 42399-6
     */
    FootSesamoidBonesXRay = "42399-6",
    /**
     * Code: 42400-2
     */
    FootSesamoidBonesBilateralXRay = "42400-2",
    /**
     * Code: 42401-0
     */
    SpineLumbarXRayAPWRBendingAndWLBendingAndWOBendingAndLateral = "42401-0",
    /**
     * Code: 42402-8
     */
    UnspecifiedBodyRegionXRayPostMortem = "42402-8",
    /**
     * Code: 42403-6
     */
    SpineLumbarXRayAPWRightBendingAndWLeftBending = "42403-6",
    /**
     * Code: 42404-4
     */
    HipLeftXRayAPAndLateralAndMeasurement = "42404-4",
    /**
     * Code: 42405-1
     */
    KneeXRayAPPowerStandingAndLateralPowerWHyperextension = "42405-1",
    /**
     * Code: 42406-9
     */
    SpineLumbarXRayAPWAndWOLeftBending = "42406-9",
    /**
     * Code: 42407-7
     */
    SpineLumbarXRayAPWAndWORightBending = "42407-7",
    /**
     * Code: 42408-5
     */
    SpineLumbarXRayAPWRightBendingAndWLeftBendingAndWOBending = "42408-5",
    /**
     * Code: 42409-3
     */
    FootSesamoidBonesXRayAPAndLateral = "42409-3",
    /**
     * Code: 42410-1
     */
    SpineLumbarXRayAPAndLateralAndObliqueAndSpotStanding = "42410-1",
    /**
     * Code: 42411-9
     */
    SpineLumbarXRayAPPowerWRBendingAndWLBendingAndLateralPowerWFlexionAndWExtension = "42411-9",
    /**
     * Code: 42412-7
     */
    ShoulderLeftXRay90DegreeAbduction = "42412-7",
    /**
     * Code: 42413-5
     */
    SpineLumbarXRayWRightBendingAndWLeftBending = "42413-5",
    /**
     * Code: 42414-3
     */
    ChestXRayRightObliqueAndLeftObliqueWNippleMarkers = "42414-3",
    /**
     * Code: 42415-0
     */
    BreastBilateralMammogramPostWirePlacement = "42415-0",
    /**
     * Code: 42416-8
     */
    BreastLeftMammogramPostWirePlacement = "42416-8",
    /**
     * Code: 42417-6
     */
    AnkleBilateralXRayAPAndLateralAndObliqueWManualStress = "42417-6",
    /**
     * Code: 42418-4
     */
    AnkleLeftXRayAPAndLateralAndObliqueWManualStress = "42418-4",
    /**
     * Code: 42419-2
     */
    WristBilateralXRaySingleView = "42419-2",
    /**
     * Code: 42420-0
     */
    PelvisXRayAPSingleViewStanding = "42420-0",
    /**
     * Code: 42421-8
     */
    FluoroscopyGuidanceForPercutaneousDrainageOfAbscessOfUnspecifiedBodyRegion = "42421-8",
    /**
     * Code: 42422-6
     */
    FluoroscopyGuidanceForPercutaneousDrainageOfAbscessOfBreast = "42422-6",
    /**
     * Code: 42423-4
     */
    FluoroscopyGuidanceForPercutaneousDrainageOfAbscessOfChest = "42423-4",
    /**
     * Code: 42424-2
     */
    SpineThoracicAndLumbarXRayScoliosisAPAndLateralSitting = "42424-2",
    /**
     * Code: 42425-9
     */
    SpineThoracicAndLumbarXRayScoliosisAPStandingAndWRightBendingAndWLeftBendingAndWOBending = "42425-9",
    /**
     * Code: 42426-7
     */
    SpineThoracicAndLumbarXRayScoliosisAPSitting = "42426-7",
    /**
     * Code: 42427-5
     */
    SpineThoracicAndLumbarXRayScoliosisLateralSitting = "42427-5",
    /**
     * Code: 42428-3
     */
    SpineThoracicAndLumbarXRayScoliosisAPStandingAndInBrace = "42428-3",
    /**
     * Code: 42429-1
     */
    SpineThoracicAndLumbarXRayScoliosisAPStandingAndWRightBending = "42429-1",
    /**
     * Code: 42430-9
     */
    KneeRightXRay2ViewsAndViewsStanding = "42430-9",
    /**
     * Code: 42431-7
     */
    KneeRightXRay30DegreeStanding = "42431-7",
    /**
     * Code: 42432-5
     */
    KneeRightXRaySunriseAndViewsStanding = "42432-5",
    /**
     * Code: 42433-3
     */
    MammogramGuidanceStereotacticForCoreNeedleBiopsyOfBreastRight = "42433-3",
    /**
     * Code: 42434-1
     */
    FootSesamoidBonesRightXRay = "42434-1",
    /**
     * Code: 42435-8
     */
    SellaTurcicaXRay2Views = "42435-8",
    /**
     * Code: 42436-6
     */
    SellaTurcicaXRayLateralAndTowne = "42436-6",
    /**
     * Code: 42437-4
     */
    SellaTurcicaXRayTomograph = "42437-4",
    /**
     * Code: 42438-2
     */
    NeckXRayAPAndLateral = "42438-2",
    /**
     * Code: 42439-0
     */
    NeckXRayAPSingleView = "42439-0",
    /**
     * Code: 42441-6
     */
    NeckXRayMagnification = "42441-6",
    /**
     * Code: 42442-4
     */
    SpineXRayLateralStanding = "42442-4",
    /**
     * Code: 42443-2
     */
    SpineThoracicXRay3ViewsStanding = "42443-2",
    /**
     * Code: 42444-0
     */
    SpineThoracicXRayAPWRightBendingAndWLeftBendingAndWOBending = "42444-0",
    /**
     * Code: 42445-7
     */
    SpineThoracicXRayAPWLeftBendingAndWOBending = "42445-7",
    /**
     * Code: 42446-5
     */
    SpineThoracicXRayAPWRightBendingAndWOBending = "42446-5",
    /**
     * Code: 42447-3
     */
    USGuidanceForAspirationOfCystOfThyroid = "42447-3",
    /**
     * Code: 42448-1
     */
    USGuidanceForExcisionalBiopsyOfBreast = "42448-1",
    /**
     * Code: 42449-9
     */
    USGuidanceForBiopsyOfBreastLeft = "42449-9",
    /**
     * Code: 42450-7
     */
    USGuidanceForAspirationOfCystOfBreastLeft = "42450-7",
    /**
     * Code: 42455-6
     */
    PelvisUSTransabdominalAndTransvaginal = "42455-6",
    /**
     * Code: 42456-4
     */
    USGuidanceForPlacementOfNeedleWireInBreast = "42456-4",
    /**
     * Code: 42457-2
     */
    USGuidanceForBiopsyOfBreastRight = "42457-2",
    /**
     * Code: 42458-0
     */
    USGuidanceForAspirationOfCystOfBreastRight = "42458-0",
    /**
     * Code: 42459-8
     */
    GastrointestineUpperFluoroscopyWContrastPO = "42459-8",
    /**
     * Code: 42460-6
     */
    SubmandibularGlandLeftFluoroscopyWContrastIntraSalivaryDuct = "42460-6",
    /**
     * Code: 42461-4
     */
    LowerExtremityVesselGraftLeftUSDoppler = "42461-4",
    /**
     * Code: 42462-2
     */
    LowerExtremityVesselGraftRightUSDoppler = "42462-2",
    /**
     * Code: 42463-0
     */
    USGuidanceForBiopsyOfEndomyocardium = "42463-0",
    /**
     * Code: 42468-9
     */
    SurgicalSpecimenUS = "42468-9",
    /**
     * Code: 42469-7
     */
    GastrointestineUpperAndSmallBowelAndGallbladderFluoroscopyWContrastPO = "42469-7",
    /**
     * Code: 42470-5
     */
    GastrointestineUpperAndGallbladderFluoroscopyWContrastPO = "42470-5",
    /**
     * Code: 42471-3
     */
    PelvisXRayStereo = "42471-3",
    /**
     * Code: 42472-1
     */
    SpineThoracicAndLumbarXRayScoliosisAPInTraction = "42472-1",
    /**
     * Code: 42473-9
     */
    SinusesXRayWatersStereo = "42473-9",
    /**
     * Code: 42474-7
     */
    SkullXRayStereo = "42474-7",
    /**
     * Code: 42475-4
     */
    UpperExtremityVesselGraftLeftUSDoppler = "42475-4",
    /**
     * Code: 42476-2
     */
    UpperExtremityVesselGraftRightUSDoppler = "42476-2",
    /**
     * Code: 42477-0
     */
    KidneyVesselsTransplantUSDoppler = "42477-0",
    /**
     * Code: 42478-8
     */
    USGuidanceForDrainageOfCystOfKidney = "42478-8",
    /**
     * Code: 42566-0
     */
    ContributingFactorCommunicationDocumentationMERSTH = "42566-0",
    /**
     * Code: 42680-9
     */
    BreastMammogramXCCL = "42680-9",
    /**
     * Code: 42681-7
     */
    ColonFluoroscopyWGastrografinPR = "42681-7",
    /**
     * Code: 42683-3
     */
    GastrointestineUpperFluoroscopyWBariumContrastPO = "42683-3",
    /**
     * Code: 42684-1
     */
    GastrointestineUpperFluoroscopyWGastrografinPO = "42684-1",
    /**
     * Code: 42685-8
     */
    PelvisAndHipLeftXRay2Views = "42685-8",
    /**
     * Code: 42686-6
     */
    PelvisAndHipRightXRay2Views = "42686-6",
    /**
     * Code: 42687-4
     */
    RibsBilateralXRay2Views = "42687-4",
    /**
     * Code: 42688-2
     */
    CTGuidanceForAnestheticBlockInjectionOfSpine = "42688-2",
    /**
     * Code: 42689-0
     */
    SpineXRayObliqueSingleView = "42689-0",
    /**
     * Code: 42690-8
     */
    SpineXRayWFlexionAndWExtension = "42690-8",
    /**
     * Code: 42691-6
     */
    SpineCervicalXRay6Views = "42691-6",
    /**
     * Code: 42692-4
     */
    SpineThoracicAndLumbarXRay = "42692-4",
    /**
     * Code: 42693-2
     */
    UrinaryBladderAndUrethraMRICine = "42693-2",
    /**
     * Code: 42694-0
     */
    ClavicleMRIWContrastIV = "42694-0",
    /**
     * Code: 42695-7
     */
    LowerLegBilateralMRIWContrastIV = "42695-7",
    /**
     * Code: 42696-5
     */
    LowerLegBilateralMRI = "42696-5",
    /**
     * Code: 42697-3
     */
    LowerLegBilateralMRIWAndWOContrastIV = "42697-3",
    /**
     * Code: 42698-1
     */
    SpineCervicalAndThoracicAndLumbarMRI = "42698-1",
    /**
     * Code: 42699-9
     */
    ChestAndAbdomenXRaySingleView = "42699-9",
    /**
     * Code: 42700-5
     */
    BoneScanWTc99mTaggedWBCIV = "42700-5",
    /**
     * Code: 42701-3
     */
    CTGuidanceForLocalizationOfPlacentaOfUterus = "42701-3",
    /**
     * Code: 42702-1
     */
    UnspecifiedBodyRegionFluoroscopyGreaterThan1Hour = "42702-1",
    /**
     * Code: 42703-9
     */
    UnspecifiedBodyRegionFluoroscopyLessThan1Hour = "42703-9",
    /**
     * Code: 42705-4
     */
    USGuidanceForAbscessDrainageOfAppendix = "42705-4",
    /**
     * Code: 42706-2
     */
    USGuidanceForInjectionOfPleuralSpace = "42706-2",
    /**
     * Code: 42707-0
     */
    HeartUSLimited = "42707-0",
    /**
     * Code: 42708-8
     */
    ScanWIn111TiuxetanIV = "42708-8",
    /**
     * Code: 42709-6
     */
    LiverScanBloodPool = "42709-6",
    /**
     * Code: 42710-4
     */
    SpineCervicalXRayLimited = "42710-4",
    /**
     * Code: 42711-2
     */
    ScanWholeBodyWIn111TaggedWBCIV = "42711-2",
    /**
     * Code: 42776-5
     */
    AVShuntScan = "42776-5",
    /**
     * Code: 42796-3
     */
    ClinicalTrialProtocolTrialName = "42796-3",
    /**
     * Code: 42811-0
     */
    WristRightXRayScaphoidSingleView = "42811-0",
    /**
     * Code: 42812-8
     */
    WristXRayScaphoidSingleView = "42812-8",
    /**
     * Code: 42813-6
     */
    WristBilateralXRayScaphoidSingleView = "42813-6",
    /**
     * Code: 42814-4
     */
    WristLeftXRayScaphoidSingleView = "42814-4",
    /**
     * Code: 42855-7
     */
    VAL11DeoxycorticosteroneMassVolumeInUrine = "42855-7",
    /**
     * Code: 43444-9
     */
    CTGuidanceForPercutaneousDrainageOfAbscessOfCavity = "43444-9",
    /**
     * Code: 43445-6
     */
    PulmonarySystemCT = "43445-6",
    /**
     * Code: 43446-4
     */
    CTForTumorWholeBody = "43446-4",
    /**
     * Code: 43447-2
     */
    MammogramGuidanceForNeedleBiopsyOfBreastRight = "43447-2",
    /**
     * Code: 43448-0
     */
    LiverMRIWAndWOFerumoxidesIV = "43448-0",
    /**
     * Code: 43449-8
     */
    AnkleRightMRIDynamicWContrastIV = "43449-8",
    /**
     * Code: 43450-6
     */
    ElbowLeftMRIDynamicWContrastIV = "43450-6",
    /**
     * Code: 43451-4
     */
    ElbowRightMRIDynamicWContrastIV = "43451-4",
    /**
     * Code: 43452-2
     */
    KneeLeftMRIDynamicWContrastIV = "43452-2",
    /**
     * Code: 43453-0
     */
    KneeRightMRIDynamicWContrastIV = "43453-0",
    /**
     * Code: 43454-8
     */
    PulmonarySystemMRI = "43454-8",
    /**
     * Code: 43455-5
     */
    OropharynxMRI = "43455-5",
    /**
     * Code: 43456-3
     */
    SpineCervicalAndSpineThoracicMRIWAndWOContrastIV = "43456-3",
    /**
     * Code: 43457-1
     */
    SpineCervicalAndSpineThoracicMRI = "43457-1",
    /**
     * Code: 43458-9
     */
    OrbitVesselsMRIAngiogramWAndWOContrastIV = "43458-9",
    /**
     * Code: 43459-7
     */
    BrainScanDuringElectroconvulsiveShockTreatment = "43459-7",
    /**
     * Code: 43461-3
     */
    KidneyBilateralScanWFurosemideAndWRadionuclideIV = "43461-3",
    /**
     * Code: 43462-1
     */
    USGuidanceForNeedleBiopsyOfBreastLeft = "43462-1",
    /**
     * Code: 43463-9
     */
    ChestAndAbdomenXRayAPSupineAndUprightAndPAChest = "43463-9",
    /**
     * Code: 43464-7
     */
    RibsBilateralAndChestXRayLateralAndPAChest = "43464-7",
    /**
     * Code: 43466-2
     */
    ChestXRayAPRightLateralDecubitus = "43466-2",
    /**
     * Code: 43467-0
     */
    ChestXRay2ViewsAndRightObliqueAndLeftOblique = "43467-0",
    /**
     * Code: 43468-8
     */
    UnspecifiedBodyRegionXRay = "43468-8",
    /**
     * Code: 43469-6
     */
    UnspecifiedBodyRegionXRayOfForeignBody = "43469-6",
    /**
     * Code: 43470-4
     */
    SkullXRayLE3Views = "43470-4",
    /**
     * Code: 43471-2
     */
    UnspecifiedBodyRegionFluoroscopy2Hour = "43471-2",
    /**
     * Code: 43472-0
     */
    UnspecifiedBodyRegionFluoroscopy90Minutes = "43472-0",
    /**
     * Code: 43473-8
     */
    FluoroscopyGuidanceForEndoscopyOfBiliaryDuctsAndPancreaticDuct2HoursPostContrastRetrograde = "43473-8",
    /**
     * Code: 43474-6
     */
    FluoroscopyGuidanceForEndoscopyOfBiliaryDuctsAndPancreaticDuct15MinutesPostContrastRetrograde = "43474-6",
    /**
     * Code: 43475-3
     */
    FluoroscopyGuidanceForEndoscopyOfBiliaryDuctsAndPancreaticDuct30MinutesPostContrastRetrograde = "43475-3",
    /**
     * Code: 43476-1
     */
    FluoroscopyGuidanceForEndoscopyOfBiliaryDuctsAndPancreaticDuct45MinutesPostContrastRetrograde = "43476-1",
    /**
     * Code: 43477-9
     */
    FluoroscopyGuidanceForEndoscopyOfBiliaryDuctsAndPancreaticDuct1HourPostContrastRetrograde = "43477-9",
    /**
     * Code: 43478-7
     */
    FluoroscopyGuidanceForEndoscopyOfBiliaryDuctsAndPancreaticDuct15HoursPostContrastRetrograde = "43478-7",
    /**
     * Code: 43479-5
     */
    AortaAbdominalFluoroscopicAngiogramRunoffWContrastIA = "43479-5",
    /**
     * Code: 43480-3
     */
    JointXRayLateralWManualStress = "43480-3",
    /**
     * Code: 43481-1
     */
    JointXRayWFlexionAndWExtension = "43481-1",
    /**
     * Code: 43482-9
     */
    KneeRightXRayGE3Views = "43482-9",
    /**
     * Code: 43483-7
     */
    FootRightXRay3Or4Views = "43483-7",
    /**
     * Code: 43485-2
     */
    KidneyXRayDuringSurgeryWContrastRetrograde = "43485-2",
    /**
     * Code: 43486-0
     */
    SinusesXRayGE3Views = "43486-0",
    /**
     * Code: 43487-8
     */
    USGuidanceForPlacementOfRadiationTherapyFieldsInUnspecifiedBodyRegion = "43487-8",
    /**
     * Code: 43488-6
     */
    ThumbLeftXRayGE3Views = "43488-6",
    /**
     * Code: 43489-4
     */
    FingerSecondLeftXRayGE3Views = "43489-4",
    /**
     * Code: 43490-2
     */
    FingerThirdLeftXRayGE3Views = "43490-2",
    /**
     * Code: 43491-0
     */
    FingerFourthLeftXRayGE3Views = "43491-0",
    /**
     * Code: 43492-8
     */
    FingerFifthLeftXRayGE3Views = "43492-8",
    /**
     * Code: 43493-6
     */
    ThumbRightXRayGE3Views = "43493-6",
    /**
     * Code: 43494-4
     */
    FingerSecondRightXRayGE3Views = "43494-4",
    /**
     * Code: 43495-1
     */
    FingerThirdRightXRayGE3Views = "43495-1",
    /**
     * Code: 43496-9
     */
    FingerFourthRightXRayGE3Views = "43496-9",
    /**
     * Code: 43497-7
     */
    FingerFifthRightXRayGE3Views = "43497-7",
    /**
     * Code: 43498-5
     */
    KneeLeftXRayGE3Views = "43498-5",
    /**
     * Code: 43499-3
     */
    FootLeftXRay3Or4Views = "43499-3",
    /**
     * Code: 43500-8
     */
    VesselScanFlow = "43500-8",
    /**
     * Code: 43501-6
     */
    VesselScanStatic = "43501-6",
    /**
     * Code: 43502-4
     */
    CTGuidanceForAbscessDrainageOfSubphrenicSpace = "43502-4",
    /**
     * Code: 43503-2
     */
    AortaAndLowerExtremityVesselsCTAngiogramWContrastIV = "43503-2",
    /**
     * Code: 43504-0
     */
    AxillaLeftMRIWContrastIV = "43504-0",
    /**
     * Code: 43505-7
     */
    AxillaRightMRIWContrastIV = "43505-7",
    /**
     * Code: 43506-5
     */
    OvaryBilateralMRI = "43506-5",
    /**
     * Code: 43507-3
     */
    ThymusGlandMRI = "43507-3",
    /**
     * Code: 43508-1
     */
    AxillaLeftMRI = "43508-1",
    /**
     * Code: 43509-9
     */
    AxillaLeftMRIWAndWOContrastIV = "43509-9",
    /**
     * Code: 43510-7
     */
    AxillaRightMRI = "43510-7",
    /**
     * Code: 43511-5
     */
    AxillaRightMRIWAndWOContrastIV = "43511-5",
    /**
     * Code: 43512-3
     */
    LowerLegVesselsBilateralMRIAngiogramWContrastIV = "43512-3",
    /**
     * Code: 43513-1
     */
    LowerLegVesselsLeftMRIAngiogram = "43513-1",
    /**
     * Code: 43514-9
     */
    ThighVesselsLeftMRIAngiogramWOContrast = "43514-9",
    /**
     * Code: 43515-6
     */
    ThighVesselsRightMRIAngiogramWOContrast = "43515-6",
    /**
     * Code: 43516-4
     */
    WristVesselsLeftMRIAngiogramWOContrast = "43516-4",
    /**
     * Code: 43517-2
     */
    WristVesselsRightMRIAngiogramWOContrast = "43517-2",
    /**
     * Code: 43518-0
     */
    BonesXRaySurvey = "43518-0",
    /**
     * Code: 43519-8
     */
    BonesXRaySurveyLimited = "43519-8",
    /**
     * Code: 43521-4
     */
    MandibleXRay1Or2Views = "43521-4",
    /**
     * Code: 43522-2
     */
    PelvisXRay1Or2Views = "43522-2",
    /**
     * Code: 43523-0
     */
    SinusesXRay1Or2Views = "43523-0",
    /**
     * Code: 43524-8
     */
    SkullXRayGE5Views = "43524-8",
    /**
     * Code: 43525-5
     */
    UnspecifiedBodyRegionCTWOContrast = "43525-5",
    /**
     * Code: 43526-3
     */
    UnspecifiedBodyRegionSPECT = "43526-3",
    /**
     * Code: 43527-1
     */
    UnspecifiedBodyRegionCTDynamicWContrastIV = "43527-1",
    /**
     * Code: 43528-9
     */
    BreastUnilateralMRIWAndWOContrastIV = "43528-9",
    /**
     * Code: 43529-7
     */
    OrbitPlusFacialBonesXRay = "43529-7",
    /**
     * Code: 43530-5
     */
    OrbitAndFaceAndNeckMRI = "43530-5",
    /**
     * Code: 43532-1
     */
    ChestAndAbdomenXRayUprightAndPAChest = "43532-1",
    /**
     * Code: 43533-9
     */
    MandibleRightXRay = "43533-9",
    /**
     * Code: 43534-7
     */
    MandibleLeftXRay4Views = "43534-7",
    /**
     * Code: 43535-4
     */
    MandibleRightXRay4Views = "43535-4",
    /**
     * Code: 43536-2
     */
    SpineLumbarFluoroscopyVideo = "43536-2",
    /**
     * Code: 43537-0
     */
    FluoroscopyGuidanceForDrainageOfUnspecifiedBodyRegion = "43537-0",
    /**
     * Code: 43538-8
     */
    SpineCervicalFluoroscopyVideo = "43538-8",
    /**
     * Code: 43539-6
     */
    SpineCervicalXRay2Or3Views = "43539-6",
    /**
     * Code: 43543-8
     */
    PelvisXRayGE3Views = "43543-8",
    /**
     * Code: 43550-3
     */
    BrainScanStaticAndFlow = "43550-3",
    /**
     * Code: 43552-9
     */
    CarotidArteryUnilateralUS = "43552-9",
    /**
     * Code: 43554-5
     */
    VesselsLeftFluoroscopicAngiogramWContrastIV = "43554-5",
    /**
     * Code: 43555-2
     */
    AnkleLeftMRIDynamicWContrastIV = "43555-2",
    /**
     * Code: 43556-0
     */
    LowerLegVesselsRightMRIAngiogram = "43556-0",
    /**
     * Code: 43557-8
     */
    LiverAndBiliaryDuctsAndGallbladderScan = "43557-8",
    /**
     * Code: 43558-6
     */
    FluoroscopyGuidanceForChangeOfDialysisCatheterInUnspecifiedBodyRegionWContrastIV = "43558-6",
    /**
     * Code: 43559-4
     */
    UrinaryBladderAndUrethraFluoroscopyWContrastIntraBladderDuringVoiding = "43559-4",
    /**
     * Code: 43561-0
     */
    ChestAndAbdomenXRayAPUprightAndAPChest = "43561-0",
    /**
     * Code: 43562-8
     */
    SkeletalSystemAxialScanBoneDensity = "43562-8",
    /**
     * Code: 43563-6
     */
    SkeletalSystemPeripheralScanBoneDensity = "43563-6",
    /**
     * Code: 43564-4
     */
    USGuidanceForBiopsyOfSuperficialMuscle = "43564-4",
    /**
     * Code: 43565-1
     */
    USGuidanceForBiopsyOfDeepBone = "43565-1",
    /**
     * Code: 43566-9
     */
    HipAndThighUS = "43566-9",
    /**
     * Code: 43567-7
     */
    CTGuidanceForBiopsyOfDeepBone = "43567-7",
    /**
     * Code: 43568-5
     */
    CTGuidanceForNeedleBiopsyOfDeepBone = "43568-5",
    /**
     * Code: 43569-3
     */
    SpineThoracicAndLumbarXRayScoliosisAPUprightAndSupine = "43569-3",
    /**
     * Code: 43570-1
     */
    HandXRayPortable = "43570-1",
    /**
     * Code: 43571-9
     */
    CTGuidanceForNeedleBiopsyOfSoftBone = "43571-9",
    /**
     * Code: 43572-7
     */
    AbdominalVesselsUSDopplerLimited = "43572-7",
    /**
     * Code: 43574-3
     */
    UpperGastrointestineAndSmallBowelFluoroscopyWBariumContrastPO = "43574-3",
    /**
     * Code: 43641-0
     */
    FootSesamoidBonesLeftXRay = "43641-0",
    /**
     * Code: 43642-8
     */
    BrainScanFlowWTc99mDTPAIV = "43642-8",
    /**
     * Code: 43643-6
     */
    BrainScanFlowWTc99mGlucoheptonateIV = "43643-6",
    /**
     * Code: 43644-4
     */
    BrainScanFlowLimited = "43644-4",
    /**
     * Code: 43645-1
     */
    HeartScanForInfarctQualitative = "43645-1",
    /**
     * Code: 43646-9
     */
    HeartScanForInfarctQualitativeAndQuantitative = "43646-9",
    /**
     * Code: 43647-7
     */
    HeartScanForInfarctQuantitative = "43647-7",
    /**
     * Code: 43648-5
     */
    ScanForEndocrineTumorMultipleAreasWI131MIBGIV = "43648-5",
    /**
     * Code: 43649-3
     */
    ScanForEndocrineTumorMultipleAreasWIn111PentetreotideIV = "43649-3",
    /**
     * Code: 43650-1
     */
    LiverAndBiliaryDuctsAndGallbladderScanWCholecystokininAndWRadionuclideIV = "43650-1",
    /**
     * Code: 43651-9
     */
    LiverAndBiliaryDuctsAndGallbladderScanWSincalideAndWRadionuclideIV = "43651-9",
    /**
     * Code: 43652-7
     */
    LiverAndSpleenSPECTFlow = "43652-7",
    /**
     * Code: 43653-5
     */
    LiverAndSpleenScanFlow = "43653-5",
    /**
     * Code: 43654-3
     */
    LiverScanFlowWTc99mTaggedRBCIV = "43654-3",
    /**
     * Code: 43655-0
     */
    LiverSPECTFlow = "43655-0",
    /**
     * Code: 43656-8
     */
    LungScanPerfusionQuantitative = "43656-8",
    /**
     * Code: 43657-6
     */
    LungScanQuantitative = "43657-6",
    /**
     * Code: 43658-4
     */
    HeartScanPerfusionQuantitative = "43658-4",
    /**
     * Code: 43659-2
     */
    HeartSPECTPerfusionQualitativeAtRestAndWRadionuclideIV = "43659-2",
    /**
     * Code: 43660-0
     */
    HeartScanPerfusionQualitativeAtRestAndWRadionuclideIV = "43660-0",
    /**
     * Code: 43661-8
     */
    HeartScanPerfusionQuantitativeAtRestAndWRadionuclideIV = "43661-8",
    /**
     * Code: 43662-6
     */
    RenalVesselsSPECTFlowWTc99mGlucoheptonateIV = "43662-6",
    /**
     * Code: 43663-4
     */
    RenalVesselsScanFlowWTc99mGlucoheptonateIV = "43663-4",
    /**
     * Code: 43664-2
     */
    RenalVesselsScanFlowWTc99mDTPAIV = "43664-2",
    /**
     * Code: 43665-9
     */
    RenalVesselsScanFlowWTc99mMertiatideIV = "43665-9",
    /**
     * Code: 43666-7
     */
    KidneyBilateralAndRenalVesselsScanFlowWTc99mGlucoheptonateIV = "43666-7",
    /**
     * Code: 43667-5
     */
    KidneyBilateralAndRenalVesselsScanWTc99mDTPAIV = "43667-5",
    /**
     * Code: 43669-1
     */
    RenalVesselsScan = "43669-1",
    /**
     * Code: 43670-9
     */
    SpleenSPECTFlow = "43670-9",
    /**
     * Code: 43671-7
     */
    ThyroidScanSpot = "43671-7",
    /**
     * Code: 43672-5
     */
    ThyroidScanAndUptake = "43672-5",
    /**
     * Code: 43673-3
     */
    ThyroidSPECTFlow = "43673-3",
    /**
     * Code: 43678-2
     */
    FDAPackageInsertDosageFormsAndStrengthsSection = "43678-2",
    /**
     * Code: 43679-0
     */
    FDAPackageInsertMechanismOfActionSection = "43679-0",
    /**
     * Code: 43680-8
     */
    FDAPackageInsertNonclinicalToxicologySection = "43680-8",
    /**
     * Code: 43681-6
     */
    FDAPackageInsertPharmacodynamicsSection = "43681-6",
    /**
     * Code: 43682-4
     */
    FDAPackageInsertPharmacokineticsSection = "43682-4",
    /**
     * Code: 43683-2
     */
    FDAPackageInsertRecentMajorChangesSection = "43683-2",
    /**
     * Code: 43684-0
     */
    FDAPackageInsertUseInSpecificPopulationsSection = "43684-0",
    /**
     * Code: 43685-7
     */
    FDAPackageInsertWarningsAndPrecautionsSection = "43685-7",
    /**
     * Code: 43756-6
     */
    USGuidanceForAspirationOfBreast = "43756-6",
    /**
     * Code: 43757-4
     */
    CTGuidanceForFineNeedleAspirationOfKidney = "43757-4",
    /**
     * Code: 43758-2
     */
    USGuidanceForLocalizationOfBreastLeft = "43758-2",
    /**
     * Code: 43759-0
     */
    USGuidanceForLocalizationOfBreastBilateral = "43759-0",
    /**
     * Code: 43760-8
     */
    USGuidanceForLocalizationOfBreastRight = "43760-8",
    /**
     * Code: 43761-6
     */
    FluoroscopicAngiogramGuidanceForThrombectomyOfVeinBilateralWContrastIV = "43761-6",
    /**
     * Code: 43762-4
     */
    FluoroscopicAngiogramGuidanceForThrombectomyOfVeinLeftWContrastIV = "43762-4",
    /**
     * Code: 43763-2
     */
    FluoroscopicAngiogramGuidanceForThrombectomyOfVeinWContrastIV = "43763-2",
    /**
     * Code: 43764-0
     */
    FluoroscopicAngiogramGuidanceForThrombectomyOfVeinRightWContrastIV = "43764-0",
    /**
     * Code: 43765-7
     */
    CarotidArteryBilateralUSDoppler = "43765-7",
    /**
     * Code: 43766-5
     */
    KidneyBilateralCTWContrastIV = "43766-5",
    /**
     * Code: 43767-3
     */
    KidneyBilateralCT = "43767-3",
    /**
     * Code: 43768-1
     */
    KidneyCTWAndWOContrastIV = "43768-1",
    /**
     * Code: 43769-9
     */
    BrainAndInternalAuditoryCanalMRIWAndWOContrastIV = "43769-9",
    /**
     * Code: 43770-7
     */
    KidneyCTWOContrast = "43770-7",
    /**
     * Code: 43771-5
     */
    ExtremityVesselsUSDoppler = "43771-5",
    /**
     * Code: 43772-3
     */
    BrainAndInternalAuditoryCanalMRI = "43772-3",
    /**
     * Code: 43773-1
     */
    KidneyMRIWOContrast = "43773-1",
    /**
     * Code: 43774-9
     */
    KidneyBilateralUS = "43774-9",
    /**
     * Code: 43775-6
     */
    KidneyMRIWAndWOContrastIV = "43775-6",
    /**
     * Code: 43776-4
     */
    IliacArteryUSDopplerLimited = "43776-4",
    /**
     * Code: 43777-2
     */
    HeartScanPerfusionAtRestAndWAdenosineAndWTl201IV = "43777-2",
    /**
     * Code: 43778-0
     */
    ChestXRayAPSupinePortable = "43778-0",
    /**
     * Code: 43779-8
     */
    KneeLeftXRaySunrise = "43779-8",
    /**
     * Code: 43780-6
     */
    KneeXRaySunrise = "43780-6",
    /**
     * Code: 43781-4
     */
    SpineCervicothoracicJunctionXRay = "43781-4",
    /**
     * Code: 43782-2
     */
    IliacArteryFluoroscopicAngiogramWContrastIA = "43782-2",
    /**
     * Code: 43783-0
     */
    RenalVeinFluoroscopicAngiogramWContrastIVAndWReninSampling = "43783-0",
    /**
     * Code: 43784-8
     */
    SpineCervicalAndThoracicAndLumbarXRay2Views = "43784-8",
    /**
     * Code: 43785-5
     */
    SpineCervicothoracicJunctionXRayAPAndLateral = "43785-5",
    /**
     * Code: 43787-1
     */
    SkullAndFacialBonesAndMandibleXRayForDentalMeasurement = "43787-1",
    /**
     * Code: 43788-9
     */
    TubeFluoroscopyForPatencyWContrastViaTube = "43788-9",
    /**
     * Code: 43789-7
     */
    LiverAndBiliaryDuctsAndGallbladderScanForPatencyWTc99mIV = "43789-7",
    /**
     * Code: 43790-5
     */
    ShoulderRightXRayGrasheyAndY = "43790-5",
    /**
     * Code: 43791-3
     */
    SpineLumbarXRayOblique = "43791-3",
    /**
     * Code: 43792-1
     */
    TibioperonealArteriesRightFluoroscopicAngiogramAngioplastyWContrastIA = "43792-1",
    /**
     * Code: 43793-9
     */
    TibioperonealArteriesFluoroscopicAngiogramAngioplastyWContrastIA = "43793-9",
    /**
     * Code: 43794-7
     */
    TibioperonealArteriesBilateralFluoroscopicAngiogramAngioplastyWContrastIA = "43794-7",
    /**
     * Code: 43795-4
     */
    TibioperonealArteriesLeftFluoroscopicAngiogramAngioplastyWContrastIA = "43795-4",
    /**
     * Code: 43796-2
     */
    WristBilateralXRayTunnelCarpal = "43796-2",
    /**
     * Code: 43797-0
     */
    USGuidanceForBiopsyOfSuperficialLymphNode = "43797-0",
    /**
     * Code: 44101-4
     */
    CTGuidanceForAblationOfTissueOfLiver = "44101-4",
    /**
     * Code: 44102-2
     */
    CTGuidanceForProcedureOfJointSpace = "44102-2",
    /**
     * Code: 44103-0
     */
    CTGuidanceForFineNeedleAspirationOfLymphNode = "44103-0",
    /**
     * Code: 44104-8
     */
    CTGuidanceForFineNeedleAspirationOfMediastinum = "44104-8",
    /**
     * Code: 44105-5
     */
    CTGuidanceForFineNeedleAspirationOfMuscle = "44105-5",
    /**
     * Code: 44106-3
     */
    CTGuidanceForFineNeedleAspirationOfProstate = "44106-3",
    /**
     * Code: 44107-1
     */
    CTGuidanceForFineNeedleAspirationOfAbdomenRetroperitoneum = "44107-1",
    /**
     * Code: 44108-9
     */
    CTGuidanceForFineNeedleAspirationOfAdrenalGland = "44108-9",
    /**
     * Code: 44109-7
     */
    CTGuidanceForBiopsyOfDeepMuscle = "44109-7",
    /**
     * Code: 44110-5
     */
    CTGuidanceForNeedleLocalizationOfBreast = "44110-5",
    /**
     * Code: 44111-3
     */
    SkullBaseCTWAndWOContrastIV = "44111-3",
    /**
     * Code: 44112-1
     */
    SkullBaseCTWOContrast = "44112-1",
    /**
     * Code: 44113-9
     */
    SpineThoracicCTWAndWOContrastIT = "44113-9",
    /**
     * Code: 44114-7
     */
    SpineLumbarCTWAndWOContrastIT = "44114-7",
    /**
     * Code: 44115-4
     */
    AbdomenAndPelvisCT = "44115-4",
    /**
     * Code: 44116-2
     */
    MandibleCTLimited = "44116-2",
    /**
     * Code: 44117-0
     */
    CTGuidanceForBiopsyOfAbdomenRetroperitoneum = "44117-0",
    /**
     * Code: 44118-8
     */
    CTGuidanceForNeedleLocalizationOfBreastWAndWOContrastIV = "44118-8",
    /**
     * Code: 44119-6
     */
    BreastBilateralCTWOContrast = "44119-6",
    /**
     * Code: 44120-4
     */
    ColonCT = "44120-4",
    /**
     * Code: 44121-2
     */
    MammogramGuidanceForPercutaneousNeedleBiopsyOfBreast = "44121-2",
    /**
     * Code: 44122-0
     */
    MRIGuidanceStereotacticForLocalizationInBrainWAndWOContrastIV = "44122-0",
    /**
     * Code: 44123-8
     */
    BiliaryDuctsAndPancreaticDuctMRIWOContrast = "44123-8",
    /**
     * Code: 44124-6
     */
    AdrenalGlandMRIWContrastIV = "44124-6",
    /**
     * Code: 44125-3
     */
    BiliaryDuctsAndPancreaticDuctMRIWContrastIV = "44125-3",
    /**
     * Code: 44126-1
     */
    HeartMRICineForBloodFlowVelocityMappingWContrastIV = "44126-1",
    /**
     * Code: 44127-9
     */
    HeartMRILimitedCineForFunction = "44127-9",
    /**
     * Code: 44128-7
     */
    LowerExtremityVesselsMRIAngiogramWAndWOContrastIV = "44128-7",
    /**
     * Code: 44129-5
     */
    LowerExtremityVesselsMRIAngiogramWOContrast = "44129-5",
    /**
     * Code: 44130-3
     */
    AorticArchMRIAngiogramWOContrast = "44130-3",
    /**
     * Code: 44131-1
     */
    AortaMRIAngiogramWAndWOContrastIV = "44131-1",
    /**
     * Code: 44132-9
     */
    AortaMRIAngiogramWOContrast = "44132-9",
    /**
     * Code: 44133-7
     */
    RenalVesselsMRIAngiogramWOContrast = "44133-7",
    /**
     * Code: 44134-5
     */
    RenalVesselsMRIAngiogramWAndWOContrastIV = "44134-5",
    /**
     * Code: 44135-2
     */
    LowerExtremityVesselsBilateralMRIAngiogramWContrastIV = "44135-2",
    /**
     * Code: 44136-0
     */
    UnspecifiedBodyRegionPET = "44136-0",
    /**
     * Code: 44137-8
     */
    HeartPET = "44137-8",
    /**
     * Code: 44138-6
     */
    BrainPET = "44138-6",
    /**
     * Code: 44139-4
     */
    PETWholeBody = "44139-4",
    /**
     * Code: 44140-2
     */
    AbdomenAndPelvisScanForTumor = "44140-2",
    /**
     * Code: 44141-0
     */
    LiverAndSpleenScanWTc99mMAAIV = "44141-0",
    /**
     * Code: 44142-8
     */
    BoneScanWTc99mMedronateIV = "44142-8",
    /**
     * Code: 44143-6
     */
    HeartScanWTc99mTaggedRBCIV = "44143-6",
    /**
     * Code: 44144-4
     */
    LiverScanWXe133Inhaled = "44144-4",
    /**
     * Code: 44145-1
     */
    ParathyroidScanWTc99mSestamibiIV = "44145-1",
    /**
     * Code: 44146-9
     */
    BoneMarrowScanWTc99mSCIV = "44146-9",
    /**
     * Code: 44147-7
     */
    ThyroidScanAndUptakeWTc99mPertechnetateIV = "44147-7",
    /**
     * Code: 44148-5
     */
    BrainScanFlowWTc99mBicisateIV = "44148-5",
    /**
     * Code: 44149-3
     */
    PeritoneovenousShuntScanForPatencyWTc99mMAAInj = "44149-3",
    /**
     * Code: 44150-1
     */
    BrainScanStaticWTc99mBicisateIV = "44150-1",
    /**
     * Code: 44151-9
     */
    HeartSPECTWTc99mSestamibiIV = "44151-9",
    /**
     * Code: 44152-7
     */
    BrainSPECTWTc99mBicisateIV = "44152-7",
    /**
     * Code: 44153-5
     */
    KidneySPECTWTc99mGlucoheptonateIV = "44153-5",
    /**
     * Code: 44154-3
     */
    HeartSPECTWDipyridamoleAndWTc99mSestamibiIV = "44154-3",
    /**
     * Code: 44155-0
     */
    USGuidanceForAblationOfTissueOfLiver = "44155-0",
    /**
     * Code: 44156-8
     */
    USGuidanceForAblationOfTissueOfKidney = "44156-8",
    /**
     * Code: 44157-6
     */
    USGuidanceForFineNeedleAspirationOfPancreas = "44157-6",
    /**
     * Code: 44158-4
     */
    USGuidanceForFineNeedleAspirationOfLiver = "44158-4",
    /**
     * Code: 44159-2
     */
    USGuidanceForFineNeedleAspirationOfKidney = "44159-2",
    /**
     * Code: 44160-0
     */
    USGuidanceForFineNeedleAspirationOfBreast = "44160-0",
    /**
     * Code: 44161-8
     */
    USGuidanceForBiopsyOfLung = "44161-8",
    /**
     * Code: 44162-6
     */
    USGuidanceForBiopsyOfAbdomenRetroperitoneum = "44162-6",
    /**
     * Code: 44163-4
     */
    ThoracicOutletUS = "44163-4",
    /**
     * Code: 44164-2
     */
    HeadAndNeckUS = "44164-2",
    /**
     * Code: 44165-9
     */
    UnspecifiedBodyRegionUSAnd3DReconstruction = "44165-9",
    /**
     * Code: 44166-7
     */
    USGuidanceForAbscessDrainageOfSubphrenicSpace = "44166-7",
    /**
     * Code: 44167-5
     */
    USGuidanceForAbscessDrainageOfKidney = "44167-5",
    /**
     * Code: 44168-3
     */
    USGuidanceForAbscessDrainageOfPelvis = "44168-3",
    /**
     * Code: 44169-1
     */
    USGuidanceForAbscessDrainageOfPeritonealSpace = "44169-1",
    /**
     * Code: 44170-9
     */
    USGuidanceForNeedleBiopsyOfLiver = "44170-9",
    /**
     * Code: 44171-7
     */
    USGuidanceForNeedleBiopsyOfChestPleura = "44171-7",
    /**
     * Code: 44172-5
     */
    USGuidanceForDrainageOfPancreas = "44172-5",
    /**
     * Code: 44173-3
     */
    PeripheralArteryUSLimited = "44173-3",
    /**
     * Code: 44174-1
     */
    LowerExtremityVesselsUSDoppler = "44174-1",
    /**
     * Code: 44175-8
     */
    NeckVesselsUSDoppler = "44175-8",
    /**
     * Code: 44176-6
     */
    HipXRaySingleViewPortable = "44176-6",
    /**
     * Code: 44177-4
     */
    LowerExtremityBilateralXRayAPSingleViewStanding = "44177-4",
    /**
     * Code: 44178-2
     */
    SpineLumbarXRayObliqueViewAndViewsWRightBendingAndWLeftBending = "44178-2",
    /**
     * Code: 44179-0
     */
    SacrumAndCoccyxXRay2Views = "44179-0",
    /**
     * Code: 44181-6
     */
    SacroiliacJointXRay2Or3Views = "44181-6",
    /**
     * Code: 44182-4
     */
    HandXRay2ViewsPortable = "44182-4",
    /**
     * Code: 44183-2
     */
    RadiusAndUlnaXRay2ViewsPortable = "44183-2",
    /**
     * Code: 44184-0
     */
    ElbowXRay2ViewsPortable = "44184-0",
    /**
     * Code: 44185-7
     */
    FemurXRayAPAndLateralPortable = "44185-7",
    /**
     * Code: 44186-5
     */
    FootXRayAPAndLateralPortable = "44186-5",
    /**
     * Code: 44187-3
     */
    SpineCervicalXRayAPAndObliqueAndOdontoidAndLateralPortableWFlexionAndWExtension = "44187-3",
    /**
     * Code: 44188-1
     */
    FootXRayGE3Views = "44188-1",
    /**
     * Code: 44189-9
     */
    SacroiliacJointXRayGE3Views = "44189-9",
    /**
     * Code: 44190-7
     */
    WristXRayGE3Views = "44190-7",
    /**
     * Code: 44191-5
     */
    RibsAndChestXRayGE3AndPAChestViews = "44191-5",
    /**
     * Code: 44192-3
     */
    PelvisXRayGE3PortableViews = "44192-3",
    /**
     * Code: 44193-1
     */
    HandXRayGE3PortableViews = "44193-1",
    /**
     * Code: 44194-9
     */
    SpineXRayGE4ViewsWRightBendingAndWLeftBending = "44194-9",
    /**
     * Code: 44195-6
     */
    KneeXRayGE5Views = "44195-6",
    /**
     * Code: 44196-4
     */
    SpineLumbarXRayGE5ViewsWRightBendingAndWLeftBending = "44196-4",
    /**
     * Code: 44197-2
     */
    KneeBilateralXRayGE5ViewsStanding = "44197-2",
    /**
     * Code: 44198-0
     */
    KneeXRay1Or2Views = "44198-0",
    /**
     * Code: 44199-8
     */
    FacialBonesXRay1Or2Views = "44199-8",
    /**
     * Code: 44201-2
     */
    PelvisXRay1Or2ViewsPortable = "44201-2",
    /**
     * Code: 44202-0
     */
    KneeXRay1Or2ViewsPortable = "44202-0",
    /**
     * Code: 44203-8
     */
    SpineCervicalAndThoracicAndLumbarXRayPortable = "44203-8",
    /**
     * Code: 44204-6
     */
    FluoroscopyGuidanceForPercutaneousNeedleBiopsyOfLung = "44204-6",
    /**
     * Code: 44205-3
     */
    LowerExtremityBilateralXRayStanding = "44205-3",
    /**
     * Code: 44206-1
     */
    SpineThoracicAndLumbarXRayScoliosisSingleView = "44206-1",
    /**
     * Code: 44208-7
     */
    OrbitXRayForForeignBody = "44208-7",
    /**
     * Code: 44209-5
     */
    SinusesXRayLimited = "44209-5",
    /**
     * Code: 44210-3
     */
    AnkleXRayGE3Views = "44210-3",
    /**
     * Code: 44211-1
     */
    ChestXRayGE4Views = "44211-1",
    /**
     * Code: 44212-9
     */
    SpineCervicalXRayGE4Views = "44212-9",
    /**
     * Code: 44213-7
     */
    FluoroscopyGuidanceForEndoscopyOfPancreaticDuctWContrastRetrograde = "44213-7",
    /**
     * Code: 44214-5
     */
    FluoroscopyGuidanceForEndoscopyOfBiliaryDuctsWContrastRetrograde = "44214-5",
    /**
     * Code: 44215-2
     */
    FluoroscopyGuidanceForFineNeedleAspirationOfUnspecifiedBodyRegion = "44215-2",
    /**
     * Code: 44216-0
     */
    FluoroscopyGuidanceForFineNeedleAspirationOfThyroid = "44216-0",
    /**
     * Code: 44217-8
     */
    FluoroscopyGuidanceForFineNeedleAspirationOfKidney = "44217-8",
    /**
     * Code: 44218-6
     */
    FluoroscopyGuidanceForFineNeedleAspirationOfPancreas = "44218-6",
    /**
     * Code: 44219-4
     */
    FluoroscopyGuidanceForFineNeedleAspirationOfLymphNode = "44219-4",
    /**
     * Code: 44220-2
     */
    FluoroscopyGuidanceForFineNeedleAspirationOfLiver = "44220-2",
    /**
     * Code: 44221-0
     */
    FluoroscopyGuidanceForFineNeedleAspirationOfDeepTissue = "44221-0",
    /**
     * Code: 44222-8
     */
    FluoroscopyGuidanceForProcedureOfJointSpace = "44222-8",
    /**
     * Code: 44223-6
     */
    FluoroscopyGuidanceForPercutaneousDrainageOfAbscessOfOvary = "44223-6",
    /**
     * Code: 44224-4
     */
    FluoroscopyGuidanceForPlacementOfTubeInUnspecifiedBodyRegion = "44224-4",
    /**
     * Code: 44225-1
     */
    FluoroscopyGuidanceForNeedleBiopsyOfLiverWContrastIV = "44225-1",
    /**
     * Code: 44226-9
     */
    ColonFluoroscopyReductionWViewsWBariumContrastPR = "44226-9",
    /**
     * Code: 44227-7
     */
    ColonFluoroscopyWBariumContrastPR = "44227-7",
    /**
     * Code: 44228-5
     */
    CTGuidanceForAblationOfTissueOfKidney = "44228-5",
    /**
     * Code: 44229-3
     */
    BonesCT = "44229-3",
    /**
     * Code: 44230-1
     */
    SuperiorMesentericVesselsMRIAngiogramWOContrast = "44230-1",
    /**
     * Code: 44231-9
     */
    SuperiorMesentericVesselsMRIAngiogramWAndWOContrastIV = "44231-9",
    /**
     * Code: 44232-7
     */
    KidneyBilateralScanWAndWOTc99mMertiatideIV = "44232-7",
    /**
     * Code: 44233-5
     */
    KidneyBilateralScanWAndWOTc99mDTPAIV = "44233-5",
    /**
     * Code: 44234-3
     */
    KidneyBilateralScanWTc99mGlucoheptonateIV = "44234-3",
    /**
     * Code: 44235-0
     */
    SuperiorMesentericVesselsUSDoppler = "44235-0",
    /**
     * Code: 44236-8
     */
    UpperExtremityVesselGraftBilateralUSDoppler = "44236-8",
    /**
     * Code: 44237-6
     */
    UpperExtremityVesselGraftBilateralUSDopplerLimited = "44237-6",
    /**
     * Code: 44238-4
     */
    TracheaXRay = "44238-4",
    /**
     * Code: 44239-2
     */
    RibsUnilateralAndChestXRayGe3AndPAChestPortableViews = "44239-2",
    /**
     * Code: 44240-0
     */
    PeripheralArteriesBilateralFluoroscopicAngiogramWContrastIA = "44240-0",
    /**
     * Code: 44425-7
     */
    FDAPackageInsertStorageAndHandlingSection = "44425-7",
    /**
     * Code: 44729-2
     */
    Progesterone11DeoxycorticosteroneMassRatioInSerumOrPlasma = "44729-2",
    /**
     * Code: 44943-9
     */
    SelfManagement = "44943-9",
    /**
     * Code: 46208-5
     */
    NursingNotes = "46208-5",
    /**
     * Code: 46209-3
     */
    ProviderOrders = "46209-3",
    /**
     * Code: 46210-1
     */
    CaseManagerNote = "46210-1",
    /**
     * Code: 46213-5
     */
    TiltTableStudy = "46213-5",
    /**
     * Code: 46214-3
     */
    IntracardiacAblationStudy = "46214-3",
    /**
     * Code: 46215-0
     */
    WoundCareManagementNote = "46215-0",
    /**
     * Code: 46242-4
     */
    FetalDocumentVitalSignsMeasurements = "46242-4",
    /**
     * Code: 46264-8
     */
    HistoryOfMedicalDeviceUse = "46264-8",
    /**
     * Code: 46281-2
     */
    CTGuidanceForAspirationOrInjectionOfCystOfUnspecifiedBodyRegion = "46281-2",
    /**
     * Code: 46282-0
     */
    USGuidanceForAspirationOrInjectionOfCystOfUnspecifiedBodyRegion = "46282-0",
    /**
     * Code: 46283-8
     */
    MammogramGuidanceForFineNeedleAspirationOfBreastRight = "46283-8",
    /**
     * Code: 46284-6
     */
    MammogramGuidanceForFineNeedleAspirationOfBreastLeft = "46284-6",
    /**
     * Code: 46285-3
     */
    USGuidanceForCoreNeedleBiopsyOfThyroid = "46285-3",
    /**
     * Code: 46286-1
     */
    MammogramGuidanceForNeedleBiopsyOfBreast = "46286-1",
    /**
     * Code: 46287-9
     */
    CTGuidanceForNeedleBiopsyOfUnspecifiedBodyRegion = "46287-9",
    /**
     * Code: 46288-7
     */
    USGuidanceForNeedleBiopsyOfProstate = "46288-7",
    /**
     * Code: 46289-5
     */
    CTGuidanceForBiopsyOfUnspecifiedBodyRegionWAndWOContrastIV = "46289-5",
    /**
     * Code: 46290-3
     */
    CTGuidanceForBiopsyOfUnspecifiedBodyRegionWOContrast = "46290-3",
    /**
     * Code: 46291-1
     */
    CTGuidanceForDrainageOfUnspecifiedBodyRegionWAndWOContrastIV = "46291-1",
    /**
     * Code: 46292-9
     */
    CTGuidanceForDrainageOfUnspecifiedBodyRegionWContrastIV = "46292-9",
    /**
     * Code: 46293-7
     */
    CTGuidanceForDrainageOfUnspecifiedBodyRegionWOContrast = "46293-7",
    /**
     * Code: 46294-5
     */
    FluoroscopyGuidanceForReplacementOfPercutaneousDrainageTubeInStomach = "46294-5",
    /**
     * Code: 46295-2
     */
    MammogramGuidanceStereotacticForCoreNeedleBiopsyOfBreastLeft = "46295-2",
    /**
     * Code: 46296-0
     */
    MammogramGuidanceStereotacticForCoreNeedleBiopsyOfBreast = "46296-0",
    /**
     * Code: 46297-8
     */
    SPECT = "46297-8",
    /**
     * Code: 46298-6
     */
    MastoidBilateralCT = "46298-6",
    /**
     * Code: 46299-4
     */
    BreastUnilateralMRI = "46299-4",
    /**
     * Code: 46300-0
     */
    SinusesCTCoronal = "46300-0",
    /**
     * Code: 46301-8
     */
    ExtremityVeinBilateralUSDopplerLimited = "46301-8",
    /**
     * Code: 46302-6
     */
    UpperExtremityArteryBilateralUSDopplerLimited = "46302-6",
    /**
     * Code: 46303-4
     */
    UpperExtremityVesselsUSDopplerLimited = "46303-4",
    /**
     * Code: 46304-2
     */
    SinusesCTLimitedWOContrast = "46304-2",
    /**
     * Code: 46305-9
     */
    CTWholeBody = "46305-9",
    /**
     * Code: 46306-7
     */
    CTWholeBodyWContrastIV = "46306-7",
    /**
     * Code: 46307-5
     */
    LowerExtremityVesselsRightCTAngiogramWAndWOContrastIV = "46307-5",
    /**
     * Code: 46308-3
     */
    LowerExtremityVesselsLeftCTAngiogramWAndWOContrastIV = "46308-3",
    /**
     * Code: 46309-1
     */
    UpperExtremityVesselsRightCTAngiogramWAndWOContrastIV = "46309-1",
    /**
     * Code: 46310-9
     */
    OrbitAndFaceAndNeckMRIWAndWOContrastIV = "46310-9",
    /**
     * Code: 46311-7
     */
    ParotidGlandCTWAndWOContrastIV = "46311-7",
    /**
     * Code: 46312-5
     */
    UpperExtremityVesselsLeftCTAngiogramWAndWOContrastIV = "46312-5",
    /**
     * Code: 46313-3
     */
    PelvisCTWAndWOReducedContrastVolumeIV = "46313-3",
    /**
     * Code: 46314-1
     */
    InternalAuditoryCanalCTWAndWOReducedContrastVolumeIV = "46314-1",
    /**
     * Code: 46315-8
     */
    FacialBonesAndMaxillaCTWAndWOReducedContrastVolumeIV = "46315-8",
    /**
     * Code: 46316-6
     */
    HeadCTWAndWOReducedContrastVolumeIV = "46316-6",
    /**
     * Code: 46317-4
     */
    ChestCTWAndWOReducedContrastVolumeIV = "46317-4",
    /**
     * Code: 46318-2
     */
    AbdomenCTWAndWOReducedContrastVolumeIV = "46318-2",
    /**
     * Code: 46319-0
     */
    ElbowMRIWContrastIntraarticular = "46319-0",
    /**
     * Code: 46320-8
     */
    OrbitAndFaceCTWContrastIV = "46320-8",
    /**
     * Code: 46321-6
     */
    OrbitAndFaceAndNeckMRIWContrastIV = "46321-6",
    /**
     * Code: 46322-4
     */
    KidneyCTWContrastIV = "46322-4",
    /**
     * Code: 46323-2
     */
    BreastUnilateralMRIWContrastIV = "46323-2",
    /**
     * Code: 46324-0
     */
    LowerExtremityVesselsMRIAngiogramWContrastIV = "46324-0",
    /**
     * Code: 46325-7
     */
    InternalAuditoryCanalCTWReducedContrastVolumeIV = "46325-7",
    /**
     * Code: 46326-5
     */
    FacialBonesAndMaxillaCTWReducedContrastVolumeIV = "46326-5",
    /**
     * Code: 46327-3
     */
    ChestCTWReducedContrastVolumeIV = "46327-3",
    /**
     * Code: 46328-1
     */
    HeadCTWReducedContrastVolumeIV = "46328-1",
    /**
     * Code: 46329-9
     */
    PelvisCTWReducedContrastVolumeIV = "46329-9",
    /**
     * Code: 46330-7
     */
    AbdomenCTWReducedContrastVolumeIV = "46330-7",
    /**
     * Code: 46331-5
     */
    OrbitCTWOContrast = "46331-5",
    /**
     * Code: 46332-3
     */
    OrbitAndFaceAndNeckMRIWOContrast = "46332-3",
    /**
     * Code: 46333-1
     */
    BreastUnilateralMRIWOContrast = "46333-1",
    /**
     * Code: 46335-6
     */
    BreastBilateralMammogramSingleView = "46335-6",
    /**
     * Code: 46336-4
     */
    BreastLeftMammogramSingleView = "46336-4",
    /**
     * Code: 46337-2
     */
    BreastRightMammogramSingleView = "46337-2",
    /**
     * Code: 46338-0
     */
    BreastUnilateralMammogramSingleView = "46338-0",
    /**
     * Code: 46339-8
     */
    BreastUnilateralMammogram = "46339-8",
    /**
     * Code: 46340-6
     */
    SpineLumbosacralJunctionXRay = "46340-6",
    /**
     * Code: 46341-4
     */
    AbdomenFluoroscopy = "46341-4",
    /**
     * Code: 46342-2
     */
    BreastFFDMammogram = "46342-2",
    /**
     * Code: 46343-0
     */
    WristRightXRayGE3Views = "46343-0",
    /**
     * Code: 46344-8
     */
    ElbowLeftXRayGE3Views = "46344-8",
    /**
     * Code: 46345-5
     */
    ElbowRightXRayGE3Views = "46345-5",
    /**
     * Code: 46346-3
     */
    WristLeftXRayGE3Views = "46346-3",
    /**
     * Code: 46347-1
     */
    AnkleRightXRayGE3Views = "46347-1",
    /**
     * Code: 46348-9
     */
    ChestXRayGE2AndPAAndLateralViews = "46348-9",
    /**
     * Code: 46349-7
     */
    ShoulderBilateralXRayAPAndTransthoracic = "46349-7",
    /**
     * Code: 46350-5
     */
    BreastUnilateralMammogramDiagnostic = "46350-5",
    /**
     * Code: 46351-3
     */
    BreastImplantBilateralMammogramDisplacement = "46351-3",
    /**
     * Code: 46352-1
     */
    BreastDuctMammogramDuringSurgeryWContrastIntraDuct = "46352-1",
    /**
     * Code: 46354-7
     */
    BreastRightFFDMammogramScreening = "46354-7",
    /**
     * Code: 46355-4
     */
    BreastLeftFFDMammogramScreening = "46355-4",
    /**
     * Code: 46356-2
     */
    BreastUnilateralMammogramScreening = "46356-2",
    /**
     * Code: 46357-0
     */
    ColonFluoroscopyWAirContrastPR = "46357-0",
    /**
     * Code: 46358-8
     */
    MRIWholeBody = "46358-8",
    /**
     * Code: 46359-6
     */
    SuperiorMesentericVesselsMRIAngiogram = "46359-6",
    /**
     * Code: 46360-4
     */
    AorticArchMRIAngiogramWAndWOContrastIV = "46360-4",
    /**
     * Code: 46361-2
     */
    LungScanVentilationWXe133Inhaled = "46361-2",
    /**
     * Code: 46362-0
     */
    FootVesselsUSDoppler = "46362-0",
    /**
     * Code: 46363-8
     */
    LowerExtremityVeinUS = "46363-8",
    /**
     * Code: 46364-6
     */
    LowerExtremityVeinBilateralUS = "46364-6",
    /**
     * Code: 46365-3
     */
    CTGuidanceForAblationOfTissueOfCeliacPlexus = "46365-3",
    /**
     * Code: 46366-1
     */
    SPECTGuidanceForBiopsyOfBone = "46366-1",
    /**
     * Code: 46367-9
     */
    CTGuidanceForNeedleBiopsyOfAdrenalGland = "46367-9",
    /**
     * Code: 46368-7
     */
    CTGuidanceForNeedleBiopsyOfBreast = "46368-7",
    /**
     * Code: 46369-5
     */
    USGuidanceForNeedleBiopsyOfOvary = "46369-5",
    /**
     * Code: 46370-3
     */
    USGuidanceForNeedleBiopsyOfPelvis = "46370-3",
    /**
     * Code: 46371-1
     */
    XRayGuidanceForChangeOfPercutaneousTubeInUnspecifiedBodyRegionWContrast = "46371-1",
    /**
     * Code: 46372-9
     */
    FluoroscopyGuidanceForPercutaneousDrainageOfBiliaryDucts = "46372-9",
    /**
     * Code: 46373-7
     */
    SPECTGuidanceForPlacementOfTubeInChest = "46373-7",
    /**
     * Code: 46374-5
     */
    CerebralArteryUS = "46374-5",
    /**
     * Code: 46375-2
     */
    ArteryUS = "46375-2",
    /**
     * Code: 46376-0
     */
    KidneyBilateralFluoroscopyWContrastAntegrade = "46376-0",
    /**
     * Code: 46377-8
     */
    SkullXRayGE3Views = "46377-8",
    /**
     * Code: 46378-6
     */
    KneeBilateralXRayPAStandingAndWFlexion = "46378-6",
    /**
     * Code: 46379-4
     */
    UpperExtremityVesselsBilateralUSDoppler = "46379-4",
    /**
     * Code: 46380-2
     */
    BreastImplantUnilateralMammogram = "46380-2",
    /**
     * Code: 46381-0
     */
    ElbowPlusRadiusPlusUlnaXRay = "46381-0",
    /**
     * Code: 46382-8
     */
    HandVesselsUSDoppler = "46382-8",
    /**
     * Code: 46384-4
     */
    SPECTGuidanceForBiopsyOfSuperficialBone = "46384-4",
    /**
     * Code: 46385-1
     */
    UpperExtremityVesselGraftUSDoppler = "46385-1",
    /**
     * Code: 46386-9
     */
    TeethXRayBitewing = "46386-9",
    /**
     * Code: 46387-7
     */
    MammogramGuidanceForFineNeedleAspirationOfBreast = "46387-7",
    /**
     * Code: 46388-5
     */
    AortaUSDoppler = "46388-5",
    /**
     * Code: 46389-3
     */
    ElbowBilateralXRayAndRadialHeadCapitellar = "46389-3",
    /**
     * Code: 46390-1
     */
    AnkleLeftXRayGE3Views = "46390-1",
    /**
     * Code: 46391-9
     */
    ShoulderXRayPortable = "46391-9",
    /**
     * Code: 46392-7
     */
    FluoroscopyGuidanceForInjectionOfSinuses = "46392-7",
    /**
     * Code: 46393-5
     */
    LiverCTWXe133Inhaled = "46393-5",
    /**
     * Code: 46394-3
     */
    HeadCTDynamicWContrastIV = "46394-3",
    /**
     * Code: 46395-0
     */
    HeartSPECTGatedAndEjectionFractionAtRestAndWStressAndWRadionuclideIV = "46395-0",
    /**
     * Code: 46396-8
     */
    HeartSPECTGatedAtRestAndWTc99mSestamibiIV = "46396-8",
    /**
     * Code: 47039-3
     */
    HospitalAdmissionHistoryAndPhysicalNote = "47039-3",
    /**
     * Code: 47040-1
     */
    Consultation2ndOpinion = "47040-1",
    /**
     * Code: 47041-9
     */
    HospitalConsultation2ndOpinion = "47041-9",
    /**
     * Code: 47042-7
     */
    CounselingNote = "47042-7",
    /**
     * Code: 47043-5
     */
    GroupCounselingNote = "47043-5",
    /**
     * Code: 47044-3
     */
    HospitalInitialAssessmentNote = "47044-3",
    /**
     * Code: 47045-0
     */
    StudyReport = "47045-0",
    /**
     * Code: 47046-8
     */
    SummaryOfDeathNote = "47046-8",
    /**
     * Code: 47047-6
     */
    SupervisoryNote = "47047-6",
    /**
     * Code: 47048-4
     */
    DiagnosticInterventionalStudyReportInterventionalRadiology = "47048-4",
    /**
     * Code: 47245-6
     */
    HIVTreatmentFormDocument = "47245-6",
    /**
     * Code: 47366-0
     */
    ChestCTLimitedWOContrast = "47366-0",
    /**
     * Code: 47367-8
     */
    ChestFluoroscopyGE4Views = "47367-8",
    /**
     * Code: 47368-6
     */
    ChestXRayGE4AndPaAndLateralViews = "47368-6",
    /**
     * Code: 47370-2
     */
    HandLeftXRayGE3Views = "47370-2",
    /**
     * Code: 47371-0
     */
    HandRightXRayGE3Views = "47371-0",
    /**
     * Code: 47372-8
     */
    HipXRayDuringSurgery = "47372-8",
    /**
     * Code: 47373-6
     */
    KneeLeftXRay1Or2Views = "47373-6",
    /**
     * Code: 47374-4
     */
    KneeLeftXRayGE4Views = "47374-4",
    /**
     * Code: 47375-1
     */
    KneeRightXRay1Or2Views = "47375-1",
    /**
     * Code: 47376-9
     */
    KneeRightXRayGE4Views = "47376-9",
    /**
     * Code: 47377-7
     */
    KneeRightXRayLE4Views = "47377-7",
    /**
     * Code: 47378-5
     */
    LiverSPECTBloodPool = "47378-5",
    /**
     * Code: 47379-3
     */
    MandibleXRayGE4Views = "47379-3",
    /**
     * Code: 47380-1
     */
    MandibleXRayLE3Views = "47380-1",
    /**
     * Code: 47381-9
     */
    MastoidXRayGE3Views = "47381-9",
    /**
     * Code: 47382-7
     */
    SpineLumbarXRayGE4Views = "47382-7",
    /**
     * Code: 47420-5
     */
    FunctionalStatusAssessmentNote = "47420-5",
    /**
     * Code: 47519-4
     */
    HistoryOfProceduresDocument = "47519-4",
    /**
     * Code: 47520-2
     */
    CytologyReportOfSputumCytoStain = "47520-2",
    /**
     * Code: 47521-0
     */
    CytologyReportOfBreastFineNeedleAspirateCytoStain = "47521-0",
    /**
     * Code: 47522-8
     */
    CytologyReportOfNippleDischargeCytoStain = "47522-8",
    /**
     * Code: 47523-6
     */
    CytologyReportOfBodyFluidCytoStain = "47523-6",
    /**
     * Code: 47524-4
     */
    CytologyReportOfThyroidFineNeedleAspirateCytoStain = "47524-4",
    /**
     * Code: 47525-1
     */
    CytologyReportOfUrineCytoStain = "47525-1",
    /**
     * Code: 47526-9
     */
    CytologyReportOfUnspecifiedSpecimenCytoStain = "47526-9",
    /**
     * Code: 47527-7
     */
    CytologyReportOfCervicalOrVaginalSmearOrScrapingCytoStainThinPrep = "47527-7",
    /**
     * Code: 47528-5
     */
    CytologyReportOfCervicalOrVaginalSmearOrScrapingCytoStain = "47528-5",
    /**
     * Code: 47529-3
     */
    CytologyReportOfTissueOtherStain = "47529-3",
    /**
     * Code: 47530-1
     */
    CytologyReportOfBreastDuctalLavageCytoStain = "47530-1",
    /**
     * Code: 47983-2
     */
    MastoidBilateralXRay1Or2Views = "47983-2",
    /**
     * Code: 47984-0
     */
    PelvisAndSpineLumbarXRay = "47984-0",
    /**
     * Code: 47985-7
     */
    SpineCTWContrastIT = "47985-7",
    /**
     * Code: 47986-5
     */
    LowerExtremityArteriesLeftFluoroscopicAngiogramWContrastIA = "47986-5",
    /**
     * Code: 47987-3
     */
    LowerExtremityArteriesRightFluoroscopicAngiogramWContrastIA = "47987-3",
    /**
     * Code: 48433-7
     */
    CalcaneusBilateralXRay2Views = "48433-7",
    /**
     * Code: 48434-5
     */
    USGuidanceForAspirationOfKidney = "48434-5",
    /**
     * Code: 48435-2
     */
    FluoroscopyGuidanceForInjectionOfSalivaryGlandBilateral = "48435-2",
    /**
     * Code: 48436-0
     */
    SpineLumbarMRIWContrastIT = "48436-0",
    /**
     * Code: 48439-4
     */
    SpineThoracicMRIWContrastIT = "48439-4",
    /**
     * Code: 48440-2
     */
    SkullBaseMRIWContrastIV = "48440-2",
    /**
     * Code: 48441-0
     */
    SpineThoracicMRIWAndWOContrastIT = "48441-0",
    /**
     * Code: 48442-8
     */
    SpineCTWAndWOContrastIT = "48442-8",
    /**
     * Code: 48443-6
     */
    NasopharynxCTWAndWOContrastIV = "48443-6",
    /**
     * Code: 48444-4
     */
    BrainTemporalMRIWContrastIV = "48444-4",
    /**
     * Code: 48445-1
     */
    LarynxMRIWOContrast = "48445-1",
    /**
     * Code: 48446-9
     */
    NasopharynxCTWContrastIV = "48446-9",
    /**
     * Code: 48447-7
     */
    SpineCervicalMRIWContrastIT = "48447-7",
    /**
     * Code: 48448-5
     */
    UpperExtremityArteryUS = "48448-5",
    /**
     * Code: 48449-3
     */
    OrbitCTWContrastIV = "48449-3",
    /**
     * Code: 48450-1
     */
    SpineCervicalMRIWAndWOContrastIT = "48450-1",
    /**
     * Code: 48451-9
     */
    OrbitCTWAndWOContrastIV = "48451-9",
    /**
     * Code: 48452-7
     */
    SpineLumbarMRIWAndWOContrastIT = "48452-7",
    /**
     * Code: 48453-5
     */
    BrainTemporalMRIWOContrast = "48453-5",
    /**
     * Code: 48454-3
     */
    ClavicleRightMRIWAndWOContrastIV = "48454-3",
    /**
     * Code: 48455-0
     */
    ClavicleLeftMRIWAndWOContrastIV = "48455-0",
    /**
     * Code: 48456-8
     */
    ClavicleRightMRIWContrastIV = "48456-8",
    /**
     * Code: 48457-6
     */
    ClavicleLeftMRIWContrastIV = "48457-6",
    /**
     * Code: 48458-4
     */
    ClavicleRightMRIWOContrast = "48458-4",
    /**
     * Code: 48459-2
     */
    ClavicleLeftMRIWOContrast = "48459-2",
    /**
     * Code: 48460-0
     */
    UnspecifiedBodyRegionMRILimited = "48460-0",
    /**
     * Code: 48461-8
     */
    NeckMRILimited = "48461-8",
    /**
     * Code: 48462-6
     */
    KneeLeftXRayAPSingleView = "48462-6",
    /**
     * Code: 48463-4
     */
    KneeRightXRayAPSingleView = "48463-4",
    /**
     * Code: 48464-2
     */
    TracheaFluoroscopy = "48464-2",
    /**
     * Code: 48465-9
     */
    LarynxFluoroscopy = "48465-9",
    /**
     * Code: 48466-7
     */
    SkullXRayLimited = "48466-7",
    /**
     * Code: 48467-5
     */
    SacroiliacJointXRay1Or2Views = "48467-5",
    /**
     * Code: 48468-3
     */
    RibsBilateralAndChestXRay2ViewsAndPAChest = "48468-3",
    /**
     * Code: 48469-1
     */
    SpineLumbarXRay2Or3Views = "48469-1",
    /**
     * Code: 48470-9
     */
    MastoidLeftXRay3Views = "48470-9",
    /**
     * Code: 48471-7
     */
    MastoidRightXRay3Views = "48471-7",
    /**
     * Code: 48472-5
     */
    SpineThoracicXRay3ViewsAndSwimmers = "48472-5",
    /**
     * Code: 48473-3
     */
    SpineLumbarAndSacrumXRay4Views = "48473-3",
    /**
     * Code: 48474-1
     */
    HandBilateralXRayAPAndLateral = "48474-1",
    /**
     * Code: 48475-8
     */
    BreastImplantBilateralMammogramDiagnostic = "48475-8",
    /**
     * Code: 48476-6
     */
    FootRightXRayGE3Views = "48476-6",
    /**
     * Code: 48477-4
     */
    FootLeftXRayGE3Views = "48477-4",
    /**
     * Code: 48478-2
     */
    FootBilateralXRayGE3Views = "48478-2",
    /**
     * Code: 48479-0
     */
    FacialBonesXRayGE3Views = "48479-0",
    /**
     * Code: 48480-8
     */
    AnkleBilateralXRayGE3Views = "48480-8",
    /**
     * Code: 48481-6
     */
    ElbowBilateralXRayGE3Views = "48481-6",
    /**
     * Code: 48482-4
     */
    SternoclavicularJointsXRayGE3Views = "48482-4",
    /**
     * Code: 48483-2
     */
    WristBilateralXRayGE3Views = "48483-2",
    /**
     * Code: 48484-0
     */
    RibsRightAndChestXRayGE3AndPAChestViews = "48484-0",
    /**
     * Code: 48485-7
     */
    RibsBilateralAndChestXRayGE3AndPAChestViews = "48485-7",
    /**
     * Code: 48486-5
     */
    RibsLeftAndChestXRayGE3AndPAChestViews = "48486-5",
    /**
     * Code: 48487-3
     */
    SkullXRayGE4Views = "48487-3",
    /**
     * Code: 48488-1
     */
    MastoidRightXRay1Or2Views = "48488-1",
    /**
     * Code: 48489-9
     */
    MastoidLeftXRay1Or2Views = "48489-9",
    /**
     * Code: 48490-7
     */
    TemporomandibularJointRightXRayOpenAndClosedMouth = "48490-7",
    /**
     * Code: 48491-5
     */
    TemporomandibularJointLeftXRayOpenAndClosedMouth = "48491-5",
    /**
     * Code: 48492-3
     */
    BreastImplantBilateralMammogramScreening = "48492-3",
    /**
     * Code: 48687-8
     */
    SkullBaseMRIWOContrast = "48687-8",
    /**
     * Code: 48688-6
     */
    UpperExtremityVeinRightUS = "48688-6",
    /**
     * Code: 48689-4
     */
    UpperExtremityVeinLeftUS = "48689-4",
    /**
     * Code: 48690-2
     */
    UpperExtremityVeinBilateralUS = "48690-2",
    /**
     * Code: 48691-0
     */
    LowerExtremityVeinRightUS = "48691-0",
    /**
     * Code: 48692-8
     */
    LowerExtremityVeinLeftUS = "48692-8",
    /**
     * Code: 48693-6
     */
    LowerExtremityArteryUS = "48693-6",
    /**
     * Code: 48694-4
     */
    BrainTemporalMRIWAndWOContrastIV = "48694-4",
    /**
     * Code: 48695-1
     */
    SkullBaseXRaySingleView = "48695-1",
    /**
     * Code: 48696-9
     */
    SubmandibularGlandRightFluoroscopyWContrastIntraSalivaryDuct = "48696-9",
    /**
     * Code: 48697-7
     */
    SkullBaseXRay = "48697-7",
    /**
     * Code: 48698-5
     */
    SubmandibularGlandBilateralFluoroscopyWContrastIntraSalivaryDuct = "48698-5",
    /**
     * Code: 48699-3
     */
    TemporomandibularJointUnilateralXRayOpenAndClosedMouth = "48699-3",
    /**
     * Code: 48735-5
     */
    MammogramGuidanceForLocalizationOfBreast = "48735-5",
    /**
     * Code: 48736-3
     */
    MammogramGuidanceForSentinelLymphNodeInjectionOfBreastLeft = "48736-3",
    /**
     * Code: 48737-1
     */
    WristAndHandXRay3Views = "48737-1",
    /**
     * Code: 48738-9
     */
    WristBilateralAndHandBilateralXRay3Views = "48738-9",
    /**
     * Code: 48739-7
     */
    MammogramGuidanceForSentinelLymphNodeInjectionOfBreastRight = "48739-7",
    /**
     * Code: 48740-5
     */
    MammogramGuidanceForSentinelLymphNodeInjectionOfBreast = "48740-5",
    /**
     * Code: 48742-1
     */
    ScrotumAndTesticleUSDoppler = "48742-1",
    /**
     * Code: 48743-9
     */
    AbdomenRetroperitoneumCTWAndWOContrastIV = "48743-9",
    /**
     * Code: 48745-4
     */
    MandibleLeftXRay = "48745-4",
    /**
     * Code: 48746-2
     */
    SacroiliacJointBilateralXRayGE3Views = "48746-2",
    /**
     * Code: 48747-0
     */
    OrbitBilateralXRayGE4Views = "48747-0",
    /**
     * Code: 48748-8
     */
    SpineXRayOblique = "48748-8",
    /**
     * Code: 48749-6
     */
    SpineThoracicXRayOblique = "48749-6",
    /**
     * Code: 48764-5
     */
    SummaryPurposeCCDDocument = "48764-5",
    /**
     * Code: 48765-2
     */
    AllergiesAndAdverseReactionsDocument = "48765-2",
    /**
     * Code: 48766-0
     */
    InformationSource = "48766-0",
    /**
     * Code: 48767-8
     */
    AnnotationCommentNarrative = "48767-8",
    /**
     * Code: 48768-6
     */
    PaymentSourcesDocument = "48768-6",
    /**
     * Code: 48779-3
     */
    FDAPackageInsertStructuredProductLabellingIndexingDataElementsSection = "48779-3",
    /**
     * Code: 48780-1
     */
    FDAPackageInsertStructuredProductLabellingListingDataElementsSection = "48780-1",
    /**
     * Code: 48807-2
     */
    BoneMarrowAspirationReport = "48807-2",
    /**
     * Code: 49118-3
     */
    UnspecifiedBodyRegionScan = "49118-3",
    /**
     * Code: 49489-8
     */
    FDAPackageInsertMicrobiologySection = "49489-8",
    /**
     * Code: 49507-7
     */
    UnspecifiedBodyRegionMRIWContrastIV = "49507-7",
    /**
     * Code: 49509-3
     */
    BreastDuctRightMammogramSingleViewWContrastIntraDuct = "49509-3",
    /**
     * Code: 49510-1
     */
    BreastDuctLeftMammogramSingleViewWContrastIntraDuct = "49510-1",
    /**
     * Code: 49511-9
     */
    FemoralArteryFluoroscopicAngiogramRunoffWAndWOContrastIA = "49511-9",
    /**
     * Code: 49512-7
     */
    UnspecifiedBodyRegionFluoroscopy = "49512-7",
    /**
     * Code: 49565-5
     */
    ThoracicSpineVesselsMRIAngiogram = "49565-5",
    /**
     * Code: 49566-3
     */
    HeartSPECTAtRestAndWTc99mSestamibiIV = "49566-3",
    /**
     * Code: 49567-1
     */
    HeartSPECTPerfusionWAdenosineAndWTc99mSestamibiIV = "49567-1",
    /**
     * Code: 49568-9
     */
    HeartSPECTPerfusionAtRestAndWStressAndWTl201IVAndWTc99mSestamibiIV = "49568-9",
    /**
     * Code: 49569-7
     */
    HeartSPECTPerfusionAndWallMotionAtRestAndWStressAndWTl201IVAndWTc99mSestamibiIV = "49569-7",
    /**
     * Code: 49570-5
     */
    AnkleBilateralXRayGE6Views = "49570-5",
    /**
     * Code: 49571-3
     */
    ScanLimitedWI131MIBGIV = "49571-3",
    /**
     * Code: 50007-4
     */
    CytologyReportOfBronchoalveolarLavageCytoStain = "50007-4",
    /**
     * Code: 50081-9
     */
    VAL18HydroxydeoxycorticosteroneMolesVolumeInSerumOrPlasma = "50081-9",
    /**
     * Code: 50755-8
     */
    LowerExtremityBilateralCTWContrastIV = "50755-8",
    /**
     * Code: 50971-1
     */
    CytologyReportOfBronchialBrushCytoStain = "50971-1",
    /**
     * Code: 51387-9
     */
    KneeBilateralXRayAndAPViewStanding = "51387-9",
    /**
     * Code: 51388-7
     */
    WristRightAndHandRightXRay = "51388-7",
    /**
     * Code: 51389-5
     */
    BreastScanWTl201IV = "51389-5",
    /**
     * Code: 51391-1
     */
    FluoroscopicAngiogramGuidanceForPlacementOfTransjugularIntrahepaticPortosystemicShuntInPortalVeinAndHepaticVein = "51391-1",
    /**
     * Code: 51392-9
     */
    WristLeftAndHandLeftXRay = "51392-9",
    /**
     * Code: 51394-5
     */
    AnkleRightAndFootRightXRay = "51394-5",
    /**
     * Code: 51395-2
     */
    AnkleLeftAndFootLeftXRay = "51395-2",
    /**
     * Code: 51845-6
     */
    OutpatientConsultNote = "51845-6",
    /**
     * Code: 51846-4
     */
    EmergencyDepartmentConsultNote = "51846-4",
    /**
     * Code: 51847-2
     */
    AssessmentPlusPlanNote = "51847-2",
    /**
     * Code: 51848-0
     */
    AssessmentNote = "51848-0",
    /**
     * Code: 51849-8
     */
    AdmissionHistoryAndPhysicalNote = "51849-8",
    /**
     * Code: 51850-6
     */
    PhysicalFindingsOfHeadAndEarsAndEyesAndNoseAndThroat = "51850-6",
    /**
     * Code: 51851-4
     */
    AdministrativeNote = "51851-4",
    /**
     * Code: 51852-2
     */
    Letter = "51852-2",
    /**
     * Code: 51854-8
     */
    LongTermCareFacilityConsultNote = "51854-8",
    /**
     * Code: 51855-5
     */
    PatientNote = "51855-5",
    /**
     * Code: 51897-7
     */
    HealthcareAssociatedInfectionReportDocument = "51897-7",
    /**
     * Code: 51898-5
     */
    RiskFactorsDocument = "51898-5",
    /**
     * Code: 51899-3
     */
    DetailsDocument = "51899-3",
    /**
     * Code: 51900-9
     */
    PopulationSummaryNote = "51900-9",
    /**
     * Code: 51941-3
     */
    FDAProductLabelBackPanelOfPackage = "51941-3",
    /**
     * Code: 51942-1
     */
    FDAProductLabelSidePanelOfPackageRight = "51942-1",
    /**
     * Code: 51943-9
     */
    FDAProductLabelSidePanelOfPackageLeft = "51943-9",
    /**
     * Code: 51944-7
     */
    FDAProductLabelSidePanelOfPackage = "51944-7",
    /**
     * Code: 51945-4
     */
    FDAProductLabelPrincipalDisplayPanelOfPackage = "51945-4",
    /**
     * Code: 51946-2
     */
    FDAProductLabelTopPanelOfPackage = "51946-2",
    /**
     * Code: 51947-0
     */
    FDAProductLabelBottomPanelOfPackage = "51947-0",
    /**
     * Code: 51948-8
     */
    FDAProductLabelFlapPanelOfPackage = "51948-8",
    /**
     * Code: 51965-2
     */
    PharmacogeneticAnalysisReportInBloodOrTissueDocumentByMolecularGeneticsMethod = "51965-2",
    /**
     * Code: 51969-4
     */
    GeneticAnalysisSummaryReportInBloodOrTissueDocumentByMolecularGeneticsMethod = "51969-4",
    /**
     * Code: 52027-0
     */
    AbortionConsent = "52027-0",
    /**
     * Code: 52028-8
     */
    HysterectomyConsent = "52028-8",
    /**
     * Code: 52029-6
     */
    SterilizationConsent = "52029-6",
    /**
     * Code: 52030-4
     */
    ExplanationOfBenefits = "52030-4",
    /**
     * Code: 52031-2
     */
    ExplanationOfBenefitsToSubscriber = "52031-2",
    /**
     * Code: 52032-0
     */
    AppealDenialLetter = "52032-0",
    /**
     * Code: 52033-8
     */
    GeneralCorrespondence = "52033-8",
    /**
     * Code: 52034-6
     */
    PayerLetter = "52034-6",
    /**
     * Code: 52035-3
     */
    HomeHealthClaims = "52035-3",
    /**
     * Code: 52036-1
     */
    HomeHealthPriorAuthorization = "52036-1",
    /**
     * Code: 52037-9
     */
    MemberIDCardCopy = "52037-9",
    /**
     * Code: 52038-7
     */
    SubscriberInformationIncludingRetroactiveAndPresumptiveEligibility = "52038-7",
    /**
     * Code: 52039-5
     */
    SkilledNursingFacilitySNFRecord = "52039-5",
    /**
     * Code: 52040-3
     */
    DentalXRaysAndOtherImagesNotDICOM = "52040-3",
    /**
     * Code: 52041-1
     */
    BloodGlucoseMonitors = "52041-1",
    /**
     * Code: 52042-9
     */
    ContinuousPositiveAirwayPressureCPAP = "52042-9",
    /**
     * Code: 52043-7
     */
    EnteralNutrition = "52043-7",
    /**
     * Code: 52044-5
     */
    ExternalInfusionPump = "52044-5",
    /**
     * Code: 52045-2
     */
    GaitTrainers = "52045-2",
    /**
     * Code: 52046-0
     */
    HospitalBeds = "52046-0",
    /**
     * Code: 52047-8
     */
    ImmunosuppressiveDrugs = "52047-8",
    /**
     * Code: 52048-6
     */
    LymphedemaPumps = "52048-6",
    /**
     * Code: 52049-4
     */
    ManualWheelchair = "52049-4",
    /**
     * Code: 52050-2
     */
    MotorizedWheelchair = "52050-2",
    /**
     * Code: 52051-0
     */
    OrthoticsProsthetics = "52051-0",
    /**
     * Code: 52052-8
     */
    OsteogenesisStimulators = "52052-8",
    /**
     * Code: 52053-6
     */
    Oxygen = "52053-6",
    /**
     * Code: 52054-4
     */
    Parenteral = "52054-4",
    /**
     * Code: 52055-1
     */
    PowerOperatedVehicles = "52055-1",
    /**
     * Code: 52056-9
     */
    RepairOfDurableMedicalEquipment = "52056-9",
    /**
     * Code: 52057-7
     */
    SeatLiftMechanism = "52057-7",
    /**
     * Code: 52058-5
     */
    SeatingSystems = "52058-5",
    /**
     * Code: 52059-3
     */
    SpeechGeneratingDevice = "52059-3",
    /**
     * Code: 52060-1
     */
    StandersStandingFrames = "52060-1",
    /**
     * Code: 52061-9
     */
    SupportSurfaces = "52061-9",
    /**
     * Code: 52062-7
     */
    TranscutaneousElectricalNeuralStimulationTENS = "52062-7",
    /**
     * Code: 52063-5
     */
    PrescriptionForDurableMedicalEquipmentDME = "52063-5",
    /**
     * Code: 52064-3
     */
    FirstReportOfInjury = "52064-3",
    /**
     * Code: 52065-0
     */
    AutomobileLiability = "52065-0",
    /**
     * Code: 52066-8
     */
    NoticeOfDischargeMedicareAppealRightsNODMARForm = "52066-8",
    /**
     * Code: 52067-6
     */
    PastFilingLimitJustification = "52067-6",
    /**
     * Code: 52068-4
     */
    PropertyAndCasualtyStateMandatedForms = "52068-4",
    /**
     * Code: 52069-2
     */
    TaxIDNumberIRSFormW9 = "52069-2",
    /**
     * Code: 52070-0
     */
    WorkersCompensation = "52070-0",
    /**
     * Code: 52071-8
     */
    EmployeeAssistanceProgram = "52071-8",
    /**
     * Code: 52072-6
     */
    NonEmergencyTransportation = "52072-6",
    /**
     * Code: 52073-4
     */
    VisionAttachment = "52073-4",
    /**
     * Code: 52075-9
     */
    PurchaseInvoice = "52075-9",
    /**
     * Code: 52184-9
     */
    PulmonaryTherapyServiceAttachment = "52184-9",
    /**
     * Code: 52790-3
     */
    CTGuidanceForReplacementOfPercutaneousDrainageTubeInAbdomen = "52790-3",
    /**
     * Code: 52791-1
     */
    CTGuidanceForReplacementOfPercutaneousDrainageTubeInPelvis = "52791-1",
    /**
     * Code: 53242-4
     */
    ChargeTicketOrEncounterForm = "53242-4",
    /**
     * Code: 53243-2
     */
    AdvancedBeneficiaryNotice = "53243-2",
    /**
     * Code: 53244-0
     */
    NoticeOfPrivacyPracticesReceipt = "53244-0",
    /**
     * Code: 53245-7
     */
    DriverLicenseImage = "53245-7",
    /**
     * Code: 53246-5
     */
    NonMedicalServices = "53246-5",
    /**
     * Code: 53247-3
     */
    EligibilityAcknowledgement = "53247-3",
    /**
     * Code: 53347-1
     */
    VAL11DeoxycorticosteroneMassVolumeInDriedBloodSpot = "53347-1",
    /**
     * Code: 53348-9
     */
    VAL11DeoxycorticosteroneMolesVolumeInDriedBloodSpot = "53348-9",
    /**
     * Code: 53576-5
     */
    PersonalHealthMonitoringReportDocument = "53576-5",
    /**
     * Code: 54094-8
     */
    EmergencyDepartmentTriageNote = "54094-8",
    /**
     * Code: 54095-5
     */
    ChemotherapyEffectivenessPanelIdentifierBloodOrTissue = "54095-5",
    /**
     * Code: 54433-8
     */
    FDAPackageInsertUserSafetyWarningsSection = "54433-8",
    /**
     * Code: 55107-7
     */
    AddendumDocument = "55107-7",
    /**
     * Code: 55108-5
     */
    ClinicalPresentationDocument = "55108-5",
    /**
     * Code: 55109-3
     */
    ComplicationsDocument = "55109-3",
    /**
     * Code: 55110-1
     */
    ConclusionsDocument = "55110-1",
    /**
     * Code: 55111-9
     */
    CurrentImagingProcedureDescriptionsDocument = "55111-9",
    /**
     * Code: 55112-7
     */
    DocumentSummary = "55112-7",
    /**
     * Code: 55113-5
     */
    KeyImagesDocumentRadiology = "55113-5",
    /**
     * Code: 55114-3
     */
    PriorImagingProcedureDescriptionsDocument = "55114-3",
    /**
     * Code: 55115-0
     */
    RequestedImagingStudiesInformationDocument = "55115-0",
    /**
     * Code: 55122-6
     */
    SurgicalOperationNoteImplantsNarrative = "55122-6",
    /**
     * Code: 55182-0
     */
    QualityReportingDocumentArchitectureIncidenceReportDocument = "55182-0",
    /**
     * Code: 55183-8
     */
    QualityReportingDocumentArchitecturePatientListReportPopulationDocument = "55183-8",
    /**
     * Code: 55184-6
     */
    QualityReportingDocumentArchitectureCalculatedSummaryReportPopulationDocument = "55184-6",
    /**
     * Code: 55185-3
     */
    MeasureSetDocument = "55185-3",
    /**
     * Code: 55186-1
     */
    MeasureDocument = "55186-1",
    /**
     * Code: 55187-9
     */
    ReportingParametersDocument = "55187-9",
    /**
     * Code: 55188-7
     */
    PatientDataDocument = "55188-7",
    /**
     * Code: 55228-1
     */
    CytogeneticsStudy = "55228-1",
    /**
     * Code: 55229-9
     */
    ImmuneStainStudy = "55229-9",
    /**
     * Code: 55230-7
     */
    ImmunophenotypingStudy = "55230-7",
    /**
     * Code: 55750-4
     */
    PatientSafetyReportEventDocument = "55750-4",
    /**
     * Code: 55751-2
     */
    PublicHealthCaseReportDocument = "55751-2",
    /**
     * Code: 55808-0
     */
    VAL11DeoxycorticosteroneMolesTimeIn24HourUrine = "55808-0",
    /**
     * Code: 56444-3
     */
    HealthcareCommunicationDocument = "56444-3",
    /**
     * Code: 56445-0
     */
    MedicationSummaryDocument = "56445-0",
    /**
     * Code: 56446-8
     */
    AppointmentSummaryDocument = "56446-8",
    /**
     * Code: 56447-6
     */
    PlanOfCareNote = "56447-6",
    /**
     * Code: 56555-6
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasmaBaseline = "56555-6",
    /**
     * Code: 56556-4
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma30MinutesPostXXXChallenge = "56556-4",
    /**
     * Code: 56602-6
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma1stSpecimenPostXXXChallenge = "56602-6",
    /**
     * Code: 56603-4
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma2ndSpecimenPostXXXChallenge = "56603-4",
    /**
     * Code: 56604-2
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma3rdSpecimenPostXXXChallenge = "56604-2",
    /**
     * Code: 56605-9
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma4thSpecimenPostXXXChallenge = "56605-9",
    /**
     * Code: 56606-7
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasmaPreXXXChallenge = "56606-7",
    /**
     * Code: 56608-3
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma15MinutesPostXXXChallenge = "56608-3",
    /**
     * Code: 56609-1
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma20MinutesPostXXXChallenge = "56609-1",
    /**
     * Code: 56610-9
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma40MinutesPostXXXChallenge = "56610-9",
    /**
     * Code: 56611-7
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma15HoursPostXXXChallenge = "56611-7",
    /**
     * Code: 56612-5
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma2HoursPostXXXChallenge = "56612-5",
    /**
     * Code: 56613-3
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma25HoursPostXXXChallenge = "56613-3",
    /**
     * Code: 57016-8
     */
    PrivacyPolicyAcknowledgmentDocument = "57016-8",
    /**
     * Code: 57017-6
     */
    PrivacyPolicyOrganizationDocument = "57017-6",
    /**
     * Code: 57024-2
     */
    HealthQualityMeasureDocument = "57024-2",
    /**
     * Code: 57025-9
     */
    DataCriteriaNarrative = "57025-9",
    /**
     * Code: 57026-7
     */
    PopulationCriteriaNarrative = "57026-7",
    /**
     * Code: 57027-5
     */
    MeasureObservationsNarrative = "57027-5",
    /**
     * Code: 57053-1
     */
    NurseEmergencyDepartmentNote = "57053-1",
    /**
     * Code: 57054-9
     */
    NurseEmergencyDepartmentTriagePlusCareNote = "57054-9",
    /**
     * Code: 57055-6
     */
    AntepartumSummaryNote = "57055-6",
    /**
     * Code: 57056-4
     */
    LaborAndDeliveryAdmissionHistoryAndPhysicalNote = "57056-4",
    /**
     * Code: 57057-2
     */
    LaborAndDeliverySummaryNote = "57057-2",
    /**
     * Code: 57058-0
     */
    MaternalDischargeSummaryNote = "57058-0",
    /**
     * Code: 57059-8
     */
    PregnancyVisitSummaryNoteNarrative = "57059-8",
    /**
     * Code: 57129-9
     */
    FullNewbornScreeningSummaryReportForDisplayOrPrinting = "57129-9",
    /**
     * Code: 57133-1
     */
    ReferralNote = "57133-1",
    /**
     * Code: 57134-9
     */
    DentistryReferralNote = "57134-9",
    /**
     * Code: 57135-6
     */
    DermatologyReferralNote = "57135-6",
    /**
     * Code: 57136-4
     */
    DiabetologyReferralNote = "57136-4",
    /**
     * Code: 57137-2
     */
    EndocrinologyReferralNote = "57137-2",
    /**
     * Code: 57138-0
     */
    GastroenterologyReferralNote = "57138-0",
    /**
     * Code: 57139-8
     */
    GeneralMedicineReferralNote = "57139-8",
    /**
     * Code: 57141-4
     */
    InfectiousDiseaseReferralNote = "57141-4",
    /**
     * Code: 57142-2
     */
    KinesiotherapyReferralNote = "57142-2",
    /**
     * Code: 57143-0
     */
    MentalHealthReferralNote = "57143-0",
    /**
     * Code: 57144-8
     */
    NephrologyReferralNote = "57144-8",
    /**
     * Code: 57145-5
     */
    NeurologyReferralNote = "57145-5",
    /**
     * Code: 57146-3
     */
    NeurologicalSurgeryReferralNote = "57146-3",
    /**
     * Code: 57147-1
     */
    OccupationalMedicineReferralNote = "57147-1",
    /**
     * Code: 57148-9
     */
    OccupationalTherapyReferralNote = "57148-9",
    /**
     * Code: 57149-7
     */
    OncologyReferralNote = "57149-7",
    /**
     * Code: 57150-5
     */
    OphthalmologyReferralNote = "57150-5",
    /**
     * Code: 57151-3
     */
    OptometryReferralNote = "57151-3",
    /**
     * Code: 57152-1
     */
    PharmacyReferralNote = "57152-1",
    /**
     * Code: 57153-9
     */
    PhysicalMedicineAndRehabilitationReferralNote = "57153-9",
    /**
     * Code: 57154-7
     */
    PhysicalTherapyReferralNote = "57154-7",
    /**
     * Code: 57155-4
     */
    PlasticSurgeryReferralNote = "57155-4",
    /**
     * Code: 57156-2
     */
    PodiatryReferralNote = "57156-2",
    /**
     * Code: 57157-0
     */
    PsychiatryReferralNote = "57157-0",
    /**
     * Code: 57158-8
     */
    PsychologyReferralNote = "57158-8",
    /**
     * Code: 57159-6
     */
    RadiationOncologyReferralNote = "57159-6",
    /**
     * Code: 57160-4
     */
    RecreationalTherapyReferralNote = "57160-4",
    /**
     * Code: 57162-0
     */
    RespiratoryTherapyReferralNote = "57162-0",
    /**
     * Code: 57163-8
     */
    RheumatologyReferralNote = "57163-8",
    /**
     * Code: 57164-6
     */
    SocialWorkReferralNote = "57164-6",
    /**
     * Code: 57165-3
     */
    SpeechLanguagePathologyReferralNote = "57165-3",
    /**
     * Code: 57166-1
     */
    SurgeryReferralNote = "57166-1",
    /**
     * Code: 57167-9
     */
    ThoracicSurgeryReferralNote = "57167-9",
    /**
     * Code: 57168-7
     */
    UrologyReferralNote = "57168-7",
    /**
     * Code: 57169-5
     */
    VascularSurgeryReferralNote = "57169-5",
    /**
     * Code: 57170-3
     */
    CardiologyReferralNote = "57170-3",
    /**
     * Code: 57171-1
     */
    GeriatricMedicineReferralNote = "57171-1",
    /**
     * Code: 57172-9
     */
    HematologyPlusMedicalOncologyReferralNote = "57172-9",
    /**
     * Code: 57173-7
     */
    NutritionAndDieteticsReferralNote = "57173-7",
    /**
     * Code: 57174-5
     */
    OralAndMaxillofacialSurgeryReferralNote = "57174-5",
    /**
     * Code: 57175-2
     */
    OrthopaedicSurgeryReferralNote = "57175-2",
    /**
     * Code: 57176-0
     */
    OtolaryngologyReferralNote = "57176-0",
    /**
     * Code: 57177-8
     */
    PulmonaryReferralNote = "57177-8",
    /**
     * Code: 57178-6
     */
    CriticalCareMedicineReferralNote = "57178-6",
    /**
     * Code: 57179-4
     */
    ObstetricsAndGynecologyReferralNote = "57179-4",
    /**
     * Code: 57491-3
     */
    VAL11DeoxycorticosteroneMolesVolumeInSerumOrPlasmaPre250UgCorticotropin = "57491-3",
    /**
     * Code: 57492-1
     */
    VAL11DeoxycorticosteroneMolesVolumeInSerumOrPlasma30MinutesPost250UgCorticotropin = "57492-1",
    /**
     * Code: 57493-9
     */
    VAL11DeoxycorticosteroneMolesVolumeInSerumOrPlasma1HourPost250UgCorticotropin = "57493-9",
    /**
     * Code: 57551-4
     */
    VAL18HydroxydeoxycorticosteroneMolesVolumeInSerumOrPlasmaPreDoseCorticotropin = "57551-4",
    /**
     * Code: 57552-2
     */
    VAL18HydroxydeoxycorticosteroneMolesVolumeInSerumOrPlasma30MinutesPostDoseCorticotropin = "57552-2",
    /**
     * Code: 57553-0
     */
    VAL18HydroxydeoxycorticosteroneMolesVolumeInSerumOrPlasma1HourPostDoseCorticotropin = "57553-0",
    /**
     * Code: 57560-5
     */
    VAL21DeoxycorticosteroneMolesVolumeInSerumOrPlasmaPreDoseCorticotropin = "57560-5",
    /**
     * Code: 57561-3
     */
    VAL21DeoxycorticosteroneMolesVolumeInSerumOrPlasma30MinutesPostDoseCorticotropin = "57561-3",
    /**
     * Code: 57562-1
     */
    VAL21DeoxycorticosteroneMolesVolumeInSerumOrPlasma1HourPostDoseCorticotropin = "57562-1",
    /**
     * Code: 57822-9
     */
    LungPET = "57822-9",
    /**
     * Code: 57823-7
     */
    EsophagusPET = "57823-7",
    /**
     * Code: 57826-0
     */
    CoPaymentAmountNarrative = "57826-0",
    /**
     * Code: 57827-8
     */
    ReasonForCoPaymentExemptionNarrative = "57827-8",
    /**
     * Code: 57828-6
     */
    PrescriptionListDocument = "57828-6",
    /**
     * Code: 57829-4
     */
    PrescriptionForMedicalEquipmentOrProductDocument = "57829-4",
    /**
     * Code: 57830-2
     */
    AdmissionRequestDocument = "57830-2",
    /**
     * Code: 57831-0
     */
    PrescriptionForRehabilitationDocument = "57831-0",
    /**
     * Code: 57832-8
     */
    PrescriptionForDiagnosticOrSpecialistCareDocument = "57832-8",
    /**
     * Code: 57833-6
     */
    PrescriptionForMedicationDocument = "57833-6",
    /**
     * Code: 57834-4
     */
    PatientTransportationRequestDocument = "57834-4",
    /**
     * Code: 58477-1
     */
    PulmonaryFunctionReport = "58477-1",
    /**
     * Code: 58740-2
     */
    AbdomenMRCPWOContrast = "58740-2",
    /**
     * Code: 58741-0
     */
    HeadToThighPET = "58741-0",
    /**
     * Code: 58742-8
     */
    HeadAndNeckPET = "58742-8",
    /**
     * Code: 58743-6
     */
    USGuidanceForAblationOfTissueOfUnspecifiedBodyRegion = "58743-6",
    /**
     * Code: 58744-4
     */
    HeartCT = "58744-4",
    /**
     * Code: 58745-1
     */
    CoronaryArteriesCTAngiogramAnd3DReconstructionWContrastIV = "58745-1",
    /**
     * Code: 58746-9
     */
    AVFistulaFluoroscopicAngiogramWContrastIV = "58746-9",
    /**
     * Code: 58747-7
     */
    CTGuidanceForAblationOfTissueOfUnspecifiedBodyRegion = "58747-7",
    /**
     * Code: 58748-5
     */
    BrainFunctionalMRI = "58748-5",
    /**
     * Code: 58749-3
     */
    HeartMRIWStressAndWAndWOContrastIV = "58749-3",
    /**
     * Code: 58750-1
     */
    HeartMRIWStress = "58750-1",
    /**
     * Code: 59255-0
     */
    LeftAtriumAndPulmonaryVeinsCTAngiogramAnd3DReconstructionWContrastIV = "59255-0",
    /**
     * Code: 59258-4
     */
    EmergencyDepartmentDischargeSummary = "59258-4",
    /**
     * Code: 59259-2
     */
    PsychiatryDischargeSummary = "59259-2",
    /**
     * Code: 59268-3
     */
    NeonatalCareReport = "59268-3",
    /**
     * Code: 59281-6
     */
    TransthoracicCardiacEchoStudyReportUS = "59281-6",
    /**
     * Code: 59282-4
     */
    StressCardiacEchoStudyReportUS = "59282-4",
    /**
     * Code: 59283-2
     */
    WellChildVisitNote = "59283-2",
    /**
     * Code: 59284-0
     */
    PatientConsent = "59284-0",
    /**
     * Code: 59768-2
     */
    ProcedureIndicationsNarrative = "59768-2",
    /**
     * Code: 59769-0
     */
    PostprocedureDiagnosisNarrative = "59769-0",
    /**
     * Code: 59770-8
     */
    ProcedureEstimatedBloodLossNarrative = "59770-8",
    /**
     * Code: 59771-6
     */
    ProcedureImplantsNarrative = "59771-6",
    /**
     * Code: 59772-4
     */
    PlannedProcedureNarrative = "59772-4",
    /**
     * Code: 59773-2
     */
    ProcedureSpecimensTakenNarrative = "59773-2",
    /**
     * Code: 59774-0
     */
    ProcedureAnesthesiaNarrative = "59774-0",
    /**
     * Code: 59775-7
     */
    ProcedureDispositionNarrative = "59775-7",
    /**
     * Code: 59776-5
     */
    ProcedureFindingsNarrative = "59776-5",
    /**
     * Code: 59845-8
     */
    FDAPackageInsertInstructionsForUseSection = "59845-8",
    /**
     * Code: 59984-5
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma8thSpecimenPostXXXChallenge = "59984-5",
    /**
     * Code: 59985-2
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma7thSpecimenPostXXXChallenge = "59985-2",
    /**
     * Code: 59986-0
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma6thSpecimenPostXXXChallenge = "59986-0",
    /**
     * Code: 59987-8
     */
    VAL11DeoxycorticosteroneMassVolumeInSerumOrPlasma5thSpecimenPostXXXChallenge = "59987-8",
    /**
     * Code: 60280-5
     */
    EmergencyDepartmentDischargeInstructions = "60280-5",
    /**
     * Code: 60515-4
     */
    RectumAndColonCT3DWAirContrastPR = "60515-4",
    /**
     * Code: 60527-9
     */
    ThyroidScanAndUptakeWI123PO = "60527-9",
    /**
     * Code: 60555-0
     */
    FDAPackageInsertAccessories = "60555-0",
    /**
     * Code: 60556-8
     */
    FDAPackageInsertAssemblyOrInstallationInstructions = "60556-8",
    /**
     * Code: 60557-6
     */
    FDAPackageInsertCalibrationInstructions = "60557-6",
    /**
     * Code: 60558-4
     */
    FDAPackageInsertCleaningDisinfectingAndSterilizationInstructions = "60558-4",
    /**
     * Code: 60559-2
     */
    FDAPackageInsertComponents = "60559-2",
    /**
     * Code: 60560-0
     */
    FDAPackageInsertIntendedUseOfTheDevice = "60560-0",
    /**
     * Code: 60561-8
     */
    FDAPackageInsertOtherSafetyInformation = "60561-8",
    /**
     * Code: 60568-3
     */
    SynopticReport = "60568-3",
    /**
     * Code: 60569-1
     */
    ReportAddendumSynopticDocument = "60569-1",
    /**
     * Code: 60570-9
     */
    PathologyConsultNote = "60570-9",
    /**
     * Code: 60571-7
     */
    PathologyConsultNoteSynoptic = "60571-7",
    /**
     * Code: 60572-5
     */
    ReportTemplateID = "60572-5",
    /**
     * Code: 60573-3
     */
    ReportTemplateSource = "60573-3",
    /**
     * Code: 60574-1
     */
    ReportTemplateVersionID = "60574-1",
    /**
     * Code: 60590-7
     */
    MedicationDispensedBriefDocument = "60590-7",
    /**
     * Code: 60591-5
     */
    PatientSummaryDocument = "60591-5",
    /**
     * Code: 60592-3
     */
    PatientSummaryUnexpectedContactDocument = "60592-3",
    /**
     * Code: 60593-1
     */
    MedicationDispensedExtendedDocument = "60593-1",
    /**
     * Code: 60683-0
     */
    FDAProductLabelPlasmaDerivative = "60683-0",
    /**
     * Code: 60684-8
     */
    FDAProductLabelCellularTherapy = "60684-8",
    /**
     * Code: 60685-5
     */
    FDAPackageInsertIndexingPharmacologicClass = "60685-5",
    /**
     * Code: 61143-4
     */
    NurseSummaryNote = "61143-4",
    /**
     * Code: 61146-7
     */
    GoalsNarrative = "61146-7",
    /**
     * Code: 61147-5
     */
    ExpectedOutcomesNarrative = "61147-5",
    /**
     * Code: 61149-1
     */
    ObjectiveNarrative = "61149-1",
    /**
     * Code: 61150-9
     */
    SubjectiveNarrative = "61150-9",
    /**
     * Code: 61356-2
     */
    MedicationPharmaceuticalAdviceExtendedDocument = "61356-2",
    /**
     * Code: 61357-0
     */
    MedicationPharmaceuticalAdviceBriefDocument = "61357-0",
    /**
     * Code: 61358-8
     */
    PatientSurgicalOperationConsent = "61358-8",
    /**
     * Code: 61359-6
     */
    PatientAnesthesiaConsent = "61359-6",
    /**
     * Code: 62385-0
     */
    RecommendationInterpretationDocument = "62385-0",
    /**
     * Code: 62387-6
     */
    InterventionsNarrative = "62387-6",
    /**
     * Code: 62446-0
     */
    RenalArteryLeftFluoroscopicAngiogramWContrastIA = "62446-0",
    /**
     * Code: 62447-8
     */
    RenalArteryRightFluoroscopicAngiogramWContrastIA = "62447-8",
    /**
     * Code: 62448-6
     */
    HeadArteryLeftPlusNeckArteryLeftFluoroscopicAngiogramWContrastIA = "62448-6",
    /**
     * Code: 62449-4
     */
    HeadArteryRightPlusNeckArteryRightFluoroscopicAngiogramWContrastIA = "62449-4",
    /**
     * Code: 62450-2
     */
    FluoroscopicAngiogramGuidanceForPlacementOfIntraperitonealCatheterInAbdomen = "62450-2",
    /**
     * Code: 62451-0
     */
    ExtremityLeftUSLimited = "62451-0",
    /**
     * Code: 62452-8
     */
    ExtremityRightUSLimited = "62452-8",
    /**
     * Code: 62491-6
     */
    FluoroscopicAngiogramGuidanceForPlacementOfIlioIliacTubeEndoprosthesisInIliacArteryLeftWContrastIA = "62491-6",
    /**
     * Code: 62492-4
     */
    FluoroscopicAngiogramGuidanceForPlacementOfIlioIliacTubeEndoprosthesisInIliacArteryRightWContrastIA = "62492-4",
    /**
     * Code: 62494-0
     */
    USGuidanceForPercutaneousDrainageOfCavity = "62494-0",
    /**
     * Code: 63485-7
     */
    ComputerGeneratedRecommendationDocument = "63485-7",
    /**
     * Code: 64051-6
     */
    BreastLymphaticsLeftScanWRadionuclideIntraLymphatic = "64051-6",
    /**
     * Code: 64052-4
     */
    BreastLymphaticsRightScanWRadionuclideIntraLymphatic = "64052-4",
    /**
     * Code: 64053-2
     */
    GeneralMedicineHospitalAdmissionEvaluationNote = "64053-2",
    /**
     * Code: 64054-0
     */
    GeneralMedicineMedicalStudentHospitalAdmissionEvaluationNote = "64054-0",
    /**
     * Code: 64055-7
     */
    GeneralMedicineMedicalStudentHospitalProgressNote = "64055-7",
    /**
     * Code: 64056-5
     */
    GeneralMedicineMedicalStudentHospitalConsultNote = "64056-5",
    /**
     * Code: 64057-3
     */
    SurgeryHospitalProgressNote = "64057-3",
    /**
     * Code: 64058-1
     */
    CriticalCareMedicineHospitalAdmissionEvaluationNote = "64058-1",
    /**
     * Code: 64059-9
     */
    CriticalCareMedicineHospitalProgressNote = "64059-9",
    /**
     * Code: 64060-7
     */
    ThoracicSurgeryHospitalAdmissionEvaluationNote = "64060-7",
    /**
     * Code: 64061-5
     */
    ThoracicSurgeryHospitalProgressNote = "64061-5",
    /**
     * Code: 64062-3
     */
    PulmonaryHospitalAdmissionEvaluationNote = "64062-3",
    /**
     * Code: 64063-1
     */
    PulmonaryHospitalProgressNote = "64063-1",
    /**
     * Code: 64064-9
     */
    PastoralCareHospitalAssessmentNote = "64064-9",
    /**
     * Code: 64065-6
     */
    CaseManagerHospitalInitialAssessmentNote = "64065-6",
    /**
     * Code: 64066-4
     */
    SurgeryMedicalStudentHospitalAdmissionEvaluationNote = "64066-4",
    /**
     * Code: 64067-2
     */
    SurgeryMedicalStudentHospitalProgressNote = "64067-2",
    /**
     * Code: 64068-0
     */
    SurgeryMedicalStudentHospitalConsultNote = "64068-0",
    /**
     * Code: 64069-8
     */
    CriticalCareMedicinePhysicianAttendingHospitalNote = "64069-8",
    /**
     * Code: 64070-6
     */
    CriticalCareMedicineMedicalStudentHospitalAdmissionEvaluationNote = "64070-6",
    /**
     * Code: 64071-4
     */
    CriticalCareMedicineMedicalStudentHospitalProgressNote = "64071-4",
    /**
     * Code: 64072-2
     */
    CriticalCareMedicineMedicalStudentHospitalConsultNote = "64072-2",
    /**
     * Code: 64073-0
     */
    ThoracicSurgeryPhysicianAttendingHospitalNote = "64073-0",
    /**
     * Code: 64074-8
     */
    ThoracicSurgeryMedicalStudentHospitalAdmissionEvaluationNote = "64074-8",
    /**
     * Code: 64075-5
     */
    ThoracicSurgeryMedicalStudentHospitalProgressNote = "64075-5",
    /**
     * Code: 64076-3
     */
    ThoracicSurgeryMedicalStudentHospitalConsultNote = "64076-3",
    /**
     * Code: 64077-1
     */
    PulmonaryPhysicianAttendingHospitalNote = "64077-1",
    /**
     * Code: 64078-9
     */
    PulmonaryMedicalStudentHospitalAdmissionEvaluationNote = "64078-9",
    /**
     * Code: 64079-7
     */
    PulmonaryMedicalStudentHospitalProgressNote = "64079-7",
    /**
     * Code: 64080-5
     */
    PulmonaryMedicalStudentHospitalConsultNote = "64080-5",
    /**
     * Code: 64123-3
     */
    FDAPackageInsertIndexingAdverseReaction = "64123-3",
    /**
     * Code: 64124-1
     */
    FDAPackageInsertIndexingSubstance = "64124-1",
    /**
     * Code: 64140-7
     */
    RenalVesselsLeftFluoroscopicAngiogramWContrast = "64140-7",
    /**
     * Code: 64141-5
     */
    RenalVesselsRightFluoroscopicAngiogramWContrast = "64141-5",
    /**
     * Code: 64142-3
     */
    HospitalEvaluationAndManagementOfSmokingCessation = "64142-3",
    /**
     * Code: 64284-3
     */
    ReadinessForDutyAssessment = "64284-3",
    /**
     * Code: 64285-0
     */
    MedicalHistoryScreeningForm = "64285-0",
    /**
     * Code: 64288-4
     */
    PrescriptionForEyewear = "64288-4",
    /**
     * Code: 64289-2
     */
    HealthRecordCoverSheet = "64289-2",
    /**
     * Code: 64290-0
     */
    HealthInsuranceCard = "64290-0",
    /**
     * Code: 64291-8
     */
    HealthInsuranceRelatedForm = "64291-8",
    /**
     * Code: 64292-6
     */
    ReleaseOfInformationConsent = "64292-6",
    /**
     * Code: 64293-4
     */
    ProcedureConsent = "64293-4",
    /**
     * Code: 64294-2
     */
    ReadinessForDutyLetter = "64294-2",
    /**
     * Code: 64295-9
     */
    NursePlanOfCareNote = "64295-9",
    /**
     * Code: 64296-7
     */
    PersonalHealthMonitoringReportAutomated = "64296-7",
    /**
     * Code: 64297-5
     */
    DeathCertificate = "64297-5",
    /**
     * Code: 64298-3
     */
    PowerOfAttorney = "64298-3",
    /**
     * Code: 64299-1
     */
    LegalDocument = "64299-1",
    /**
     * Code: 64300-7
     */
    OrganDonationConsent = "64300-7",
    /**
     * Code: 64993-9
     */
    USGuidanceForPlacementOfNeedleInUnspecifiedBodyRegion = "64993-9",
    /**
     * Code: 64995-4
     */
    MammaryArteryInternalLeftFluoroscopicAngiogramWContrastIA = "64995-4",
    /**
     * Code: 64996-2
     */
    LungLeftXRayWContrastIntrabronchial = "64996-2",
    /**
     * Code: 64997-0
     */
    LungRightXRayWContrastIntrabronchial = "64997-0",
    /**
     * Code: 64998-8
     */
    FluoroscopyGuidanceForCatheterizationOfFallopianTubeLeftTranscervical = "64998-8",
    /**
     * Code: 64999-6
     */
    FluoroscopyGuidanceForCatheterizationOfFallopianTubeRightTranscervical = "64999-6",
    /**
     * Code: 65000-2
     */
    MammaryArteryInternalRightFluoroscopicAngiogramWContrastIA = "65000-2",
    /**
     * Code: 65797-3
     */
    FluoroscopicAngiogramGuidanceForPlacementOfStentInArteryLeft = "65797-3",
    /**
     * Code: 65798-1
     */
    FluoroscopicAngiogramGuidanceForPlacementOfStentInArteryRight = "65798-1",
    /**
     * Code: 65799-9
     */
    KidneyBilateralFluoroscopyViewForCystExamination = "65799-9",
    /**
     * Code: 65800-5
     */
    KidneyLeftFluoroscopyViewForCystExamination = "65800-5",
    /**
     * Code: 65801-3
     */
    KidneyRightFluoroscopyViewForCystExamination = "65801-3",
    /**
     * Code: 65802-1
     */
    SagittalSinusAndJugularVeinsLeftFluoroscopicAngiogramWContrastIV = "65802-1",
    /**
     * Code: 65803-9
     */
    SagittalSinusVeinLeftFluoroscopicAngiogramWContrastIV = "65803-9",
    /**
     * Code: 65804-7
     */
    SagittalSinusVeinRightFluoroscopicAngiogramWContrastIV = "65804-7",
    /**
     * Code: 65805-4
     */
    SagittalSinusAndJugularVeinsRightFluoroscopicAngiogramWContrastIV = "65805-4",
    /**
     * Code: 65806-2
     */
    InhalationChallengeTestReportDocumentWMethacholineInhaled = "65806-2",
    /**
     * Code: 66105-8
     */
    FDAPackageInsertLotDistributionData = "66105-8",
    /**
     * Code: 66106-6
     */
    FDAPackageInsertPharmacogenomicsSection = "66106-6",
    /**
     * Code: 67796-3
     */
    EMSPatientCareReportVersion31DocumentNEMSIS = "67796-3",
    /**
     * Code: 67851-6
     */
    AdmissionEvaluationNote = "67851-6",
    /**
     * Code: 67852-4
     */
    HospitalAdmissionEvaluationNote = "67852-4",
    /**
     * Code: 67854-0
     */
    GeriatricMedicineEducationNote = "67854-0",
    /**
     * Code: 67855-7
     */
    OutpatientEducationNote = "67855-7",
    /**
     * Code: 67856-5
     */
    NursingFacilityHistoryAndPhysicalNote = "67856-5",
    /**
     * Code: 67860-7
     */
    PostoperativeEvaluationAndManagementNote = "67860-7",
    /**
     * Code: 67861-5
     */
    OphthalmologyPostoperativeEvaluationAndManagementNote = "67861-5",
    /**
     * Code: 67862-3
     */
    PreoperativeEvaluationAndManagementNote = "67862-3",
    /**
     * Code: 67865-6
     */
    OutpatientSupervisoryNote = "67865-6",
    /**
     * Code: 68469-6
     */
    PastoralCareHospitalConsultNote = "68469-6",
    /**
     * Code: 68470-4
     */
    RespiratoryTherapyHospitalInitialAssessmentNote = "68470-4",
    /**
     * Code: 68471-2
     */
    CardiologyHospitalAdmissionEvaluationNote = "68471-2",
    /**
     * Code: 68472-0
     */
    CardiologyHospitalProgressNote = "68472-0",
    /**
     * Code: 68473-8
     */
    CriticalCareMedicinePhysicianAttendingHospitalProgressNote = "68473-8",
    /**
     * Code: 68474-6
     */
    PhysicianHospitalRestraintNote = "68474-6",
    /**
     * Code: 68475-3
     */
    GeneralMedicinePhysicianAttendingHospitalProgressNote = "68475-3",
    /**
     * Code: 68476-1
     */
    NurseHospitalRestraintNote = "68476-1",
    /**
     * Code: 68477-9
     */
    NurseHospitalEducationNote = "68477-9",
    /**
     * Code: 68478-7
     */
    PulmonaryPhysicianAttendingHospitalProgressNote = "68478-7",
    /**
     * Code: 68479-5
     */
    RespiratoryTherapyHospitalProgressNote = "68479-5",
    /**
     * Code: 68480-3
     */
    SurgeryPhysicianAttendingHospitalProgressNote = "68480-3",
    /**
     * Code: 68481-1
     */
    ThoracicSurgeryPhysicianAttendingHospitalProgressNote = "68481-1",
    /**
     * Code: 68482-9
     */
    NurseHospitalTransferSummaryNote = "68482-9",
    /**
     * Code: 68483-7
     */
    CardiologyMedicalStudentHospitalAdmissionEvaluationNote = "68483-7",
    /**
     * Code: 68484-5
     */
    CardiologyPhysicianAttendingHospitalProgressNote = "68484-5",
    /**
     * Code: 68485-2
     */
    CardiologyMedicalStudentHospitalProgressNote = "68485-2",
    /**
     * Code: 68486-0
     */
    CardiologyMedicalStudentHospitalConsultNote = "68486-0",
    /**
     * Code: 68550-3
     */
    DermatologyPreoperativeEvaluationAndManagementNote = "68550-3",
    /**
     * Code: 68551-1
     */
    DermatologyHospitalConsultNote = "68551-1",
    /**
     * Code: 68552-9
     */
    EmergencyMedicineEmergencyDepartmentAdmissionEvaluationNote = "68552-9",
    /**
     * Code: 68553-7
     */
    HematologyPlusMedicalOncologyInitialAssessmentNote = "68553-7",
    /**
     * Code: 68554-5
     */
    HematologyPlusMedicalOncologyProgressNote = "68554-5",
    /**
     * Code: 68555-2
     */
    HematologyPlusMedicalOncologyHospitalLetter = "68555-2",
    /**
     * Code: 68556-0
     */
    NeurologyDiagnosticStudyNote = "68556-0",
    /**
     * Code: 68557-8
     */
    ObstetricsAndGynecologyDiagnosticStudyNote = "68557-8",
    /**
     * Code: 68558-6
     */
    ObstetricsAndGynecologyDischargeSummary = "68558-6",
    /**
     * Code: 68560-2
     */
    ObstetricsAndGynecologyHistoryAndPhysicalNote = "68560-2",
    /**
     * Code: 68562-8
     */
    ObstetricsAndGynecologyPreoperativeEvaluationAndManagementNote = "68562-8",
    /**
     * Code: 68563-6
     */
    ObstetricsAndGynecologyProcedureNote = "68563-6",
    /**
     * Code: 68564-4
     */
    ObstetricsAndGynecologyProgressNote = "68564-4",
    /**
     * Code: 68565-1
     */
    ObstetricsAndGynecologyTransferSummaryNote = "68565-1",
    /**
     * Code: 68566-9
     */
    ObstetricsAndGynecologyHospitalConsultNote = "68566-9",
    /**
     * Code: 68567-7
     */
    ObstetricsAndGynecologyHospitalLetter = "68567-7",
    /**
     * Code: 68569-3
     */
    OccupationalTherapyTransferSummaryNote = "68569-3",
    /**
     * Code: 68570-1
     */
    OccupationalTherapyHospitalConsultNote = "68570-1",
    /**
     * Code: 68571-9
     */
    OccupationalTherapyHospitalLetter = "68571-9",
    /**
     * Code: 68572-7
     */
    OphthalmologyDischargeSummary = "68572-7",
    /**
     * Code: 68573-5
     */
    OphthalmologyHistoryAndPhysicalNote = "68573-5",
    /**
     * Code: 68574-3
     */
    OphthalmologyProgressNote = "68574-3",
    /**
     * Code: 68575-0
     */
    OphthalmologyHospitalConsultNote = "68575-0",
    /**
     * Code: 68576-8
     */
    OphthalmologyHospitalLetter = "68576-8",
    /**
     * Code: 68577-6
     */
    OrthopaedicSurgeryDiagnosticStudyNote = "68577-6",
    /**
     * Code: 68578-4
     */
    OrthopaedicSurgeryDischargeSummary = "68578-4",
    /**
     * Code: 68580-0
     */
    OrthopaedicSurgeryHistoryAndPhysicalNote = "68580-0",
    /**
     * Code: 68581-8
     */
    OrthopaedicSurgeryPreoperativeEvaluationAndManagementNote = "68581-8",
    /**
     * Code: 68582-6
     */
    OrthopaedicSurgeryProgressNote = "68582-6",
    /**
     * Code: 68583-4
     */
    OrthopaedicSurgeryTransferSummaryNote = "68583-4",
    /**
     * Code: 68585-9
     */
    OrthopaedicSurgeryHospitalLetter = "68585-9",
    /**
     * Code: 68586-7
     */
    PharmacyHospitalConsultNote = "68586-7",
    /**
     * Code: 68587-5
     */
    PharmacyHospitalMedicationManagementNote = "68587-5",
    /**
     * Code: 68590-9
     */
    PhysicalTherapyHospitalConsultNote = "68590-9",
    /**
     * Code: 68591-7
     */
    PlasticSurgeryDischargeSummary = "68591-7",
    /**
     * Code: 68592-5
     */
    PlasticSurgeryHistoryAndPhysicalNote = "68592-5",
    /**
     * Code: 68593-3
     */
    PlasticSurgeryLetter = "68593-3",
    /**
     * Code: 68594-1
     */
    PlasticSurgeryPreoperativeEvaluationAndManagementNote = "68594-1",
    /**
     * Code: 68595-8
     */
    PlasticSurgeryProgressNote = "68595-8",
    /**
     * Code: 68596-6
     */
    PlasticSurgeryTransferSummaryNote = "68596-6",
    /**
     * Code: 68597-4
     */
    PlasticSurgeryHospitalConsultNote = "68597-4",
    /**
     * Code: 68598-2
     */
    PlasticSurgeryHospitalLetter = "68598-2",
    /**
     * Code: 68599-0
     */
    PsychiatryHistoryAndPhysicalNote = "68599-0",
    /**
     * Code: 68601-4
     */
    PsychiatryOutpatientNote = "68601-4",
    /**
     * Code: 68602-2
     */
    RadiationOncologySummaryNote = "68602-2",
    /**
     * Code: 68603-0
     */
    RadiationOncologyHospitalSummaryNote = "68603-0",
    /**
     * Code: 68604-8
     */
    RadiologyDiagnosticStudyNote = "68604-8",
    /**
     * Code: 68605-5
     */
    RecreationalTherapyHospitalEducationNote = "68605-5",
    /**
     * Code: 68606-3
     */
    SurgeryHospitalPostoperativeEvaluationAndManagementNote = "68606-3",
    /**
     * Code: 68607-1
     */
    ProgressLetter = "68607-1",
    /**
     * Code: 68608-9
     */
    SummaryNote = "68608-9",
    /**
     * Code: 68609-7
     */
    HospitalLetter = "68609-7",
    /**
     * Code: 68610-5
     */
    HospitalPostoperativeEvaluationAndManagementNote = "68610-5",
    /**
     * Code: 68611-3
     */
    AdolescentMedicineDiagnosticStudyNote = "68611-3",
    /**
     * Code: 68612-1
     */
    AdolescentMedicineDischargeSummary = "68612-1",
    /**
     * Code: 68614-7
     */
    AdolescentMedicineHistoryAndPhysicalNote = "68614-7",
    /**
     * Code: 68615-4
     */
    AdolescentMedicineNote = "68615-4",
    /**
     * Code: 68616-2
     */
    AdolescentMedicinePreoperativeEvaluationAndManagementNote = "68616-2",
    /**
     * Code: 68617-0
     */
    AdolescentMedicineProgressNote = "68617-0",
    /**
     * Code: 68618-8
     */
    AdolescentMedicineTransferSummaryNote = "68618-8",
    /**
     * Code: 68619-6
     */
    AdolescentMedicineHospitalConsultNote = "68619-6",
    /**
     * Code: 68620-4
     */
    AdolescentMedicineHospitalLetter = "68620-4",
    /**
     * Code: 68621-2
     */
    AdvancedHeartFailureAndTransplantCardiologyNote = "68621-2",
    /**
     * Code: 68622-0
     */
    AdvancedHeartFailureAndTransplantCardiologyHistoryAndPhysicalNote = "68622-0",
    /**
     * Code: 68623-8
     */
    AdvancedHeartFailureAndTransplantCardiologyPreoperativeEvaluationAndManagementNote = "68623-8",
    /**
     * Code: 68624-6
     */
    AdvancedHeartFailureAndTransplantCardiologyHospitalLetter = "68624-6",
    /**
     * Code: 68625-3
     */
    AllergyAndImmunologyDiagnosticStudyNote = "68625-3",
    /**
     * Code: 68626-1
     */
    AllergyAndImmunologyDischargeSummary = "68626-1",
    /**
     * Code: 68628-7
     */
    AllergyAndImmunologyHistoryAndPhysicalNote = "68628-7",
    /**
     * Code: 68629-5
     */
    AllergyAndImmunologyNote = "68629-5",
    /**
     * Code: 68630-3
     */
    AllergyAndImmunologyProcedureNote = "68630-3",
    /**
     * Code: 68631-1
     */
    AllergyAndImmunologyProgressNote = "68631-1",
    /**
     * Code: 68632-9
     */
    AllergyAndImmunologyTransferSummaryNote = "68632-9",
    /**
     * Code: 68633-7
     */
    AllergyAndImmunologyHospitalConsultNote = "68633-7",
    /**
     * Code: 68634-5
     */
    AllergyAndImmunologyHospitalLetter = "68634-5",
    /**
     * Code: 68635-2
     */
    AudiologyDiagnosticStudyNote = "68635-2",
    /**
     * Code: 68636-0
     */
    AudiologyNote = "68636-0",
    /**
     * Code: 68637-8
     */
    AudiologyHistoryAndPhysicalNote = "68637-8",
    /**
     * Code: 68638-6
     */
    AudiologyPreoperativeEvaluationAndManagementNote = "68638-6",
    /**
     * Code: 68639-4
     */
    AudiologyHospitalConsultNote = "68639-4",
    /**
     * Code: 68640-2
     */
    AudiologyHospitalDiagnosticStudyNote = "68640-2",
    /**
     * Code: 68641-0
     */
    ChildAndAdolescentPsychiatryDiagnosticStudyNote = "68641-0",
    /**
     * Code: 68642-8
     */
    ChildAndAdolescentPsychiatryDischargeSummary = "68642-8",
    /**
     * Code: 68644-4
     */
    ChildAndAdolescentPsychiatryHistoryAndPhysicalNote = "68644-4",
    /**
     * Code: 68645-1
     */
    ChildAndAdolescentPsychiatryNote = "68645-1",
    /**
     * Code: 68646-9
     */
    ChildAndAdolescentPsychiatryProgressNote = "68646-9",
    /**
     * Code: 68647-7
     */
    ChildAndAdolescentPsychiatryTransferSummaryNote = "68647-7",
    /**
     * Code: 68648-5
     */
    ChildAndAdolescentPsychiatryHospitalConsultNote = "68648-5",
    /**
     * Code: 68649-3
     */
    ChildAndAdolescentPsychiatryHospitalLetter = "68649-3",
    /**
     * Code: 68650-1
     */
    ClinicalBiochemicalGeneticsNote = "68650-1",
    /**
     * Code: 68651-9
     */
    ClinicalBiochemicalGeneticsHospitalConsultNote = "68651-9",
    /**
     * Code: 68652-7
     */
    ClinicalGeneticsDiagnosticStudyNote = "68652-7",
    /**
     * Code: 68653-5
     */
    ClinicalGeneticsDischargeSummary = "68653-5",
    /**
     * Code: 68655-0
     */
    ClinicalGeneticsHistoryAndPhysicalNote = "68655-0",
    /**
     * Code: 68656-8
     */
    ClinicalGeneticsNote = "68656-8",
    /**
     * Code: 68657-6
     */
    ClinicalGeneticsPreoperativeEvaluationAndManagementNote = "68657-6",
    /**
     * Code: 68658-4
     */
    ClinicalGeneticsProcedureNote = "68658-4",
    /**
     * Code: 68659-2
     */
    ClinicalGeneticsProgressNote = "68659-2",
    /**
     * Code: 68660-0
     */
    ClinicalGeneticsTransferSummaryNote = "68660-0",
    /**
     * Code: 68661-8
     */
    ClinicalGeneticsHospitalConsultNote = "68661-8",
    /**
     * Code: 68662-6
     */
    ClinicalGeneticsHospitalLetter = "68662-6",
    /**
     * Code: 68663-4
     */
    DevelopmentalBehavioralPediatricsDischargeSummary = "68663-4",
    /**
     * Code: 68665-9
     */
    DevelopmentalBehavioralPediatricsHistoryAndPhysicalNote = "68665-9",
    /**
     * Code: 68666-7
     */
    DevelopmentalBehavioralPediatricsNote = "68666-7",
    /**
     * Code: 68667-5
     */
    DevelopmentalBehavioralPediatricsProcedureNote = "68667-5",
    /**
     * Code: 68668-3
     */
    DevelopmentalBehavioralPediatricsProgressNote = "68668-3",
    /**
     * Code: 68669-1
     */
    DevelopmentalBehavioralPediatricsTransferSummaryNote = "68669-1",
    /**
     * Code: 68670-9
     */
    DevelopmentalBehavioralPediatricsHospitalConsultNote = "68670-9",
    /**
     * Code: 68671-7
     */
    DevelopmentalBehavioralPediatricsHospitalLetter = "68671-7",
    /**
     * Code: 68672-5
     */
    GeriatricMedicineSkilledNursingFacilityNote = "68672-5",
    /**
     * Code: 68673-3
     */
    MultiSpecialtyProgramDiagnosticStudyNote = "68673-3",
    /**
     * Code: 68674-1
     */
    MultiSpecialtyProgramDischargeSummary = "68674-1",
    /**
     * Code: 68676-6
     */
    MultiSpecialtyProgramHistoryAndPhysicalNote = "68676-6",
    /**
     * Code: 68677-4
     */
    MultiSpecialtyProgramNote = "68677-4",
    /**
     * Code: 68678-2
     */
    MultiSpecialtyProgramPreoperativeEvaluationAndManagementNote = "68678-2",
    /**
     * Code: 68679-0
     */
    MultiSpecialtyProgramProgressNote = "68679-0",
    /**
     * Code: 68680-8
     */
    MultiSpecialtyProgramTransferSummaryNote = "68680-8",
    /**
     * Code: 68681-6
     */
    MultiSpecialtyProgramHospitalConsultNote = "68681-6",
    /**
     * Code: 68682-4
     */
    MultiSpecialtyProgramHospitalLetter = "68682-4",
    /**
     * Code: 68683-2
     */
    NeonatalPerinatalMedicineHistoryAndPhysicalNote = "68683-2",
    /**
     * Code: 68684-0
     */
    NeonatalPerinatalMedicineLetter = "68684-0",
    /**
     * Code: 68685-7
     */
    NeonatalPerinatalMedicineHospitalConsultNote = "68685-7",
    /**
     * Code: 68686-5
     */
    NeonatalPerinatalMedicineHospitalLetter = "68686-5",
    /**
     * Code: 68687-3
     */
    NeurologicalSurgeryDiagnosticStudyNote = "68687-3",
    /**
     * Code: 68688-1
     */
    NeurologicalSurgeryDischargeSummary = "68688-1",
    /**
     * Code: 68690-7
     */
    NeurologicalSurgeryHistoryAndPhysicalNote = "68690-7",
    /**
     * Code: 68691-5
     */
    NeurologicalSurgeryPreoperativeEvaluationAndManagementNote = "68691-5",
    /**
     * Code: 68692-3
     */
    NeurologicalSurgeryProcedureNote = "68692-3",
    /**
     * Code: 68693-1
     */
    NeurologicalSurgeryProgressNote = "68693-1",
    /**
     * Code: 68694-9
     */
    NeurologicalSurgeryHospitalConsultNote = "68694-9",
    /**
     * Code: 68695-6
     */
    NeurologicalSurgeryHospitalLetter = "68695-6",
    /**
     * Code: 68696-4
     */
    NeurologyWithSpecialQualificationsInChildNeurologyDiagnosticStudyNote = "68696-4",
    /**
     * Code: 68697-2
     */
    NeurologyWithSpecialQualificationsInChildNeurologyDischargeSummary = "68697-2",
    /**
     * Code: 68699-8
     */
    NeurologyWithSpecialQualificationsInChildNeurologyHistoryAndPhysicalNote = "68699-8",
    /**
     * Code: 68700-4
     */
    NeurologyWithSpecialQualificationsInChildNeurologyNote = "68700-4",
    /**
     * Code: 68701-2
     */
    NeurologyWithSpecialQualificationsInChildNeurologyPreoperativeEvaluationAndManagementNote = "68701-2",
    /**
     * Code: 68702-0
     */
    NeurologyWithSpecialQualificationsInChildNeurologyProcedureNote = "68702-0",
    /**
     * Code: 68703-8
     */
    NeurologyWithSpecialQualificationsInChildNeurologyProgressNote = "68703-8",
    /**
     * Code: 68704-6
     */
    NeurologyWithSpecialQualificationsInChildNeurologyTransferSummaryNote = "68704-6",
    /**
     * Code: 68705-3
     */
    NeurologyWithSpecialQualificationsInChildNeurologyHospitalConsultNote = "68705-3",
    /**
     * Code: 68706-1
     */
    NeurologyWithSpecialQualificationsInChildNeurologyHospitalDiagnosticStudyNote = "68706-1",
    /**
     * Code: 68707-9
     */
    NeurologyWithSpecialQualificationsInChildNeurologyHospitalLetter = "68707-9",
    /**
     * Code: 68708-7
     */
    PainMedicineDiagnosticStudyNote = "68708-7",
    /**
     * Code: 68709-5
     */
    PainMedicineDischargeSummary = "68709-5",
    /**
     * Code: 68711-1
     */
    PainMedicineHistoryAndPhysicalNote = "68711-1",
    /**
     * Code: 68713-7
     */
    PainMedicinePreoperativeEvaluationAndManagementNote = "68713-7",
    /**
     * Code: 68714-5
     */
    PainMedicineProcedureNote = "68714-5",
    /**
     * Code: 68715-2
     */
    PainMedicineTransferSummaryNote = "68715-2",
    /**
     * Code: 68716-0
     */
    PainMedicineHospitalConsultNote = "68716-0",
    /**
     * Code: 68717-8
     */
    PainMedicineHospitalLetter = "68717-8",
    /**
     * Code: 68718-6
     */
    PediatricCardiologyDiagnosticStudyNote = "68718-6",
    /**
     * Code: 68719-4
     */
    PediatricCardiologyDischargeSummary = "68719-4",
    /**
     * Code: 68721-0
     */
    PediatricCardiologyHistoryAndPhysicalNote = "68721-0",
    /**
     * Code: 68722-8
     */
    PediatricCardiologyNote = "68722-8",
    /**
     * Code: 68723-6
     */
    PediatricCardiologyPreoperativeEvaluationAndManagementNote = "68723-6",
    /**
     * Code: 68724-4
     */
    PediatricCardiologyProcedureNote = "68724-4",
    /**
     * Code: 68725-1
     */
    PediatricCardiologyProgressNote = "68725-1",
    /**
     * Code: 68726-9
     */
    PediatricCardiologyTransferSummaryNote = "68726-9",
    /**
     * Code: 68727-7
     */
    PediatricCardiologyHospitalConsultNote = "68727-7",
    /**
     * Code: 68728-5
     */
    PediatricCardiologyHospitalLetter = "68728-5",
    /**
     * Code: 68729-3
     */
    PediatricCriticalCareMedicineHospitalProcedureNote = "68729-3",
    /**
     * Code: 68731-9
     */
    PediatricDermatologyHistoryAndPhysicalNote = "68731-9",
    /**
     * Code: 68732-7
     */
    PediatricDermatologyPreoperativeEvaluationAndManagementNote = "68732-7",
    /**
     * Code: 68733-5
     */
    PediatricEndocrinologyDischargeSummary = "68733-5",
    /**
     * Code: 68735-0
     */
    PediatricEndocrinologyHistoryAndPhysicalNote = "68735-0",
    /**
     * Code: 68736-8
     */
    PediatricEndocrinologyPreoperativeEvaluationAndManagementNote = "68736-8",
    /**
     * Code: 68737-6
     */
    PediatricEndocrinologyTransferSummaryNote = "68737-6",
    /**
     * Code: 68738-4
     */
    PediatricGastroenterologyDischargeSummary = "68738-4",
    /**
     * Code: 68740-0
     */
    PediatricGastroenterologyHistoryAndPhysicalNote = "68740-0",
    /**
     * Code: 68741-8
     */
    PediatricGastroenterologyNote = "68741-8",
    /**
     * Code: 68742-6
     */
    PediatricGastroenterologyPreoperativeEvaluationAndManagementNote = "68742-6",
    /**
     * Code: 68743-4
     */
    PediatricGastroenterologyProcedureNote = "68743-4",
    /**
     * Code: 68744-2
     */
    PediatricGastroenterologyProgressNote = "68744-2",
    /**
     * Code: 68745-9
     */
    PediatricGastroenterologyTransferSummaryNote = "68745-9",
    /**
     * Code: 68746-7
     */
    PediatricGastroenterologyHospitalConsultNote = "68746-7",
    /**
     * Code: 68747-5
     */
    PediatricGastroenterologyHospitalLetter = "68747-5",
    /**
     * Code: 68748-3
     */
    PediatricHematologyOncologyDiagnosticStudyNote = "68748-3",
    /**
     * Code: 68749-1
     */
    PediatricHematologyOncologyDischargeSummary = "68749-1",
    /**
     * Code: 68751-7
     */
    PediatricHematologyOncologyHistoryAndPhysicalNote = "68751-7",
    /**
     * Code: 68752-5
     */
    PediatricHematologyOncologyNote = "68752-5",
    /**
     * Code: 68753-3
     */
    PediatricHematologyOncologyPreoperativeEvaluationAndManagementNote = "68753-3",
    /**
     * Code: 68754-1
     */
    PediatricHematologyOncologyProcedureNote = "68754-1",
    /**
     * Code: 68755-8
     */
    PediatricHematologyOncologyProgressNote = "68755-8",
    /**
     * Code: 68756-6
     */
    PediatricHematologyOncologyTransferSummaryNote = "68756-6",
    /**
     * Code: 68757-4
     */
    PediatricHematologyOncologyHospitalConsultNote = "68757-4",
    /**
     * Code: 68758-2
     */
    PediatricHematologyOncologyHospitalLetter = "68758-2",
    /**
     * Code: 68760-8
     */
    PediatricInfectiousDiseasesHistoryAndPhysicalNote = "68760-8",
    /**
     * Code: 68761-6
     */
    PediatricInfectiousDiseasesNote = "68761-6",
    /**
     * Code: 68762-4
     */
    PediatricInfectiousDiseasesPreoperativeEvaluationAndManagementNote = "68762-4",
    /**
     * Code: 68763-2
     */
    PediatricInfectiousDiseasesProgressNote = "68763-2",
    /**
     * Code: 68764-0
     */
    PediatricInfectiousDiseasesTransferSummaryNote = "68764-0",
    /**
     * Code: 68765-7
     */
    PediatricInfectiousDiseasesHospitalConsultNote = "68765-7",
    /**
     * Code: 68766-5
     */
    PediatricInfectiousDiseasesHospitalLetter = "68766-5",
    /**
     * Code: 68767-3
     */
    PediatricNephrologyDiagnosticStudyNote = "68767-3",
    /**
     * Code: 68768-1
     */
    PediatricNephrologyDischargeSummary = "68768-1",
    /**
     * Code: 68770-7
     */
    PediatricNephrologyHistoryAndPhysicalNote = "68770-7",
    /**
     * Code: 68771-5
     */
    PediatricNephrologyPreoperativeEvaluationAndManagementNote = "68771-5",
    /**
     * Code: 68772-3
     */
    PediatricNephrologyTransferSummaryNote = "68772-3",
    /**
     * Code: 68773-1
     */
    PediatricOtolaryngologyDischargeSummary = "68773-1",
    /**
     * Code: 68775-6
     */
    PediatricOtolaryngologyHistoryAndPhysicalNote = "68775-6",
    /**
     * Code: 68776-4
     */
    PediatricOtolaryngologyPreoperativeEvaluationAndManagementNote = "68776-4",
    /**
     * Code: 68777-2
     */
    PediatricOtolaryngologyTransferSummaryNote = "68777-2",
    /**
     * Code: 68778-0
     */
    PediatricPulmonologyDiagnosticStudyNote = "68778-0",
    /**
     * Code: 68779-8
     */
    PediatricPulmonologyDischargeSummary = "68779-8",
    /**
     * Code: 68781-4
     */
    PediatricPulmonologyHistoryAndPhysicalNote = "68781-4",
    /**
     * Code: 68782-2
     */
    PediatricPulmonologyNote = "68782-2",
    /**
     * Code: 68783-0
     */
    PediatricPulmonologyPreoperativeEvaluationAndManagementNote = "68783-0",
    /**
     * Code: 68784-8
     */
    PediatricPulmonologyProcedureNote = "68784-8",
    /**
     * Code: 68785-5
     */
    PediatricPulmonologyProgressNote = "68785-5",
    /**
     * Code: 68786-3
     */
    PediatricPulmonologyTransferSummaryNote = "68786-3",
    /**
     * Code: 68787-1
     */
    PediatricPulmonologyHospitalConsultNote = "68787-1",
    /**
     * Code: 68788-9
     */
    PediatricPulmonologyHospitalDiagnosticStudyNote = "68788-9",
    /**
     * Code: 68789-7
     */
    PediatricPulmonologyHospitalLetter = "68789-7",
    /**
     * Code: 68791-3
     */
    PediatricRheumatologyHistoryAndPhysicalNote = "68791-3",
    /**
     * Code: 68792-1
     */
    PediatricRheumatologyPreoperativeEvaluationAndManagementNote = "68792-1",
    /**
     * Code: 68793-9
     */
    PediatricRheumatologyTransferSummaryNote = "68793-9",
    /**
     * Code: 68794-7
     */
    PediatricSurgeryDiagnosticStudyNote = "68794-7",
    /**
     * Code: 68795-4
     */
    PediatricSurgeryDischargeSummary = "68795-4",
    /**
     * Code: 68797-0
     */
    PediatricSurgeryHistoryAndPhysicalNote = "68797-0",
    /**
     * Code: 68798-8
     */
    PediatricSurgeryPreoperativeEvaluationAndManagementNote = "68798-8",
    /**
     * Code: 68799-6
     */
    PediatricSurgeryProcedureNote = "68799-6",
    /**
     * Code: 68800-2
     */
    PediatricSurgeryProgressNote = "68800-2",
    /**
     * Code: 68801-0
     */
    PediatricSurgeryTransferSummaryNote = "68801-0",
    /**
     * Code: 68802-8
     */
    PediatricSurgeryHospitalConsultNote = "68802-8",
    /**
     * Code: 68803-6
     */
    PediatricSurgeryHospitalLetter = "68803-6",
    /**
     * Code: 68804-4
     */
    PediatricUrologyDiagnosticStudyNote = "68804-4",
    /**
     * Code: 68805-1
     */
    PediatricUrologyDischargeSummary = "68805-1",
    /**
     * Code: 68807-7
     */
    PediatricUrologyHistoryAndPhysicalNote = "68807-7",
    /**
     * Code: 68808-5
     */
    PediatricUrologyPreoperativeEvaluationAndManagementNote = "68808-5",
    /**
     * Code: 68809-3
     */
    PediatricUrologyProcedureNote = "68809-3",
    /**
     * Code: 68810-1
     */
    PediatricUrologyProgressNote = "68810-1",
    /**
     * Code: 68811-9
     */
    PediatricUrologyTransferSummaryNote = "68811-9",
    /**
     * Code: 68812-7
     */
    PediatricUrologyHospitalConsultNote = "68812-7",
    /**
     * Code: 68813-5
     */
    PediatricUrologyHospitalLetter = "68813-5",
    /**
     * Code: 68814-3
     */
    PediatricsAssessmentNote = "68814-3",
    /**
     * Code: 68815-0
     */
    PediatricsDischargeSummary = "68815-0",
    /**
     * Code: 68817-6
     */
    PediatricsHistoryAndPhysicalNote = "68817-6",
    /**
     * Code: 68818-4
     */
    PediatricsNote = "68818-4",
    /**
     * Code: 68819-2
     */
    PediatricsPreoperativeEvaluationAndManagementNote = "68819-2",
    /**
     * Code: 68820-0
     */
    PediatricsProcedureNote = "68820-0",
    /**
     * Code: 68821-8
     */
    PediatricsHospitalConsultNote = "68821-8",
    /**
     * Code: 68822-6
     */
    PediatricsHospitalDiagnosticStudyNote = "68822-6",
    /**
     * Code: 68823-4
     */
    PediatricsHospitalDischargeSummary = "68823-4",
    /**
     * Code: 68825-9
     */
    PediatricsHospitalHistoryAndPhysicalNote = "68825-9",
    /**
     * Code: 68826-7
     */
    PediatricsHospitalLetter = "68826-7",
    /**
     * Code: 68827-5
     */
    PediatricsHospitalNote = "68827-5",
    /**
     * Code: 68828-3
     */
    PediatricsHospitalPreoperativeEvaluationAndManagementNote = "68828-3",
    /**
     * Code: 68829-1
     */
    PediatricsHospitalProcedureNote = "68829-1",
    /**
     * Code: 68830-9
     */
    PediatricsHospitalProgressNote = "68830-9",
    /**
     * Code: 68831-7
     */
    PrimaryCareDischargeSummary = "68831-7",
    /**
     * Code: 68833-3
     */
    PrimaryCareHistoryAndPhysicalNote = "68833-3",
    /**
     * Code: 68834-1
     */
    PrimaryCareNote = "68834-1",
    /**
     * Code: 68835-8
     */
    PrimaryCarePreoperativeEvaluationAndManagementNote = "68835-8",
    /**
     * Code: 68836-6
     */
    PrimaryCareProcedureNote = "68836-6",
    /**
     * Code: 68837-4
     */
    PrimaryCareHospitalConsultNote = "68837-4",
    /**
     * Code: 68838-2
     */
    PrimaryCareHospitalLetter = "68838-2",
    /**
     * Code: 68839-0
     */
    ResearchNote = "68839-0",
    /**
     * Code: 68840-8
     */
    ResearchProgressNote = "68840-8",
    /**
     * Code: 68841-6
     */
    SpeechLanguagePathologyDischargeSummary = "68841-6",
    /**
     * Code: 68843-2
     */
    SpeechLanguagePathologyHistoryAndPhysicalNote = "68843-2",
    /**
     * Code: 68844-0
     */
    SpeechLanguagePathologyPreoperativeEvaluationAndManagementNote = "68844-0",
    /**
     * Code: 68846-5
     */
    SpeechLanguagePathologyHospitalConsultNote = "68846-5",
    /**
     * Code: 68847-3
     */
    SpeechLanguagePathologyHospitalLetter = "68847-3",
    /**
     * Code: 68848-1
     */
    TransplantSurgeryNote = "68848-1",
    /**
     * Code: 68849-9
     */
    TransplantSurgeryHistoryAndPhysicalNote = "68849-9",
    /**
     * Code: 68850-7
     */
    TransplantSurgeryPreoperativeEvaluationAndManagementNote = "68850-7",
    /**
     * Code: 68851-5
     */
    TransplantSurgeryProcedureNote = "68851-5",
    /**
     * Code: 68852-3
     */
    TransplantSurgeryHospitalConsultNote = "68852-3",
    /**
     * Code: 68853-1
     */
    TransplantSurgeryHospitalLetter = "68853-1",
    /**
     * Code: 68854-9
     */
    PediatricRehabilitationMedicineNote = "68854-9",
    /**
     * Code: 68855-6
     */
    PediatricTransplantHepatologyDiagnosticStudyNote = "68855-6",
    /**
     * Code: 68856-4
     */
    PediatricTransplantHepatologyDischargeSummary = "68856-4",
    /**
     * Code: 68858-0
     */
    PediatricTransplantHepatologyHistoryAndPhysicalNote = "68858-0",
    /**
     * Code: 68859-8
     */
    PediatricTransplantHepatologyNote = "68859-8",
    /**
     * Code: 68860-6
     */
    PediatricTransplantHepatologyPreoperativeEvaluationAndManagementNote = "68860-6",
    /**
     * Code: 68861-4
     */
    PediatricTransplantHepatologyProcedureNote = "68861-4",
    /**
     * Code: 68862-2
     */
    PediatricTransplantHepatologyProgressNote = "68862-2",
    /**
     * Code: 68863-0
     */
    PediatricTransplantHepatologyTransferSummaryNote = "68863-0",
    /**
     * Code: 68864-8
     */
    PediatricTransplantHepatologyHospitalConsultNote = "68864-8",
    /**
     * Code: 68865-5
     */
    PediatricTransplantHepatologyHospitalLetter = "68865-5",
    /**
     * Code: 68866-3
     */
    PediatricNephrologyLetter = "68866-3",
    /**
     * Code: 68867-1
     */
    PediatricNephrologyNote = "68867-1",
    /**
     * Code: 68868-9
     */
    PediatricNephrologyProcedureNote = "68868-9",
    /**
     * Code: 68869-7
     */
    PediatricNephrologyHospitalConsultNote = "68869-7",
    /**
     * Code: 68870-5
     */
    PediatricNephrologyHospitalLetter = "68870-5",
    /**
     * Code: 68871-3
     */
    PediatricOtolaryngologyNote = "68871-3",
    /**
     * Code: 68872-1
     */
    PediatricOtolaryngologyProcedureNote = "68872-1",
    /**
     * Code: 68873-9
     */
    PediatricOtolaryngologyProgressNote = "68873-9",
    /**
     * Code: 68874-7
     */
    PediatricOtolaryngologyHospitalConsultNote = "68874-7",
    /**
     * Code: 68875-4
     */
    PediatricOtolaryngologyHospitalLetter = "68875-4",
    /**
     * Code: 68876-2
     */
    PediatricRheumatologyNote = "68876-2",
    /**
     * Code: 68877-0
     */
    PediatricRheumatologyProcedureNote = "68877-0",
    /**
     * Code: 68878-8
     */
    PediatricRheumatologyProgressNote = "68878-8",
    /**
     * Code: 68879-6
     */
    PediatricRheumatologyHospitalConsultNote = "68879-6",
    /**
     * Code: 68880-4
     */
    PediatricRheumatologyHospitalLetter = "68880-4",
    /**
     * Code: 68881-2
     */
    PediatricSurgeryNote = "68881-2",
    /**
     * Code: 68882-0
     */
    PediatricUrologyNote = "68882-0",
    /**
     * Code: 68883-8
     */
    PediatricsTransferSummaryNote = "68883-8",
    /**
     * Code: 68884-6
     */
    PediatricsHospitalTransferSummaryNote = "68884-6",
    /**
     * Code: 68887-9
     */
    OphthalmologyTransferSummaryNote = "68887-9",
    /**
     * Code: 68889-5
     */
    PediatricDermatologyNote = "68889-5",
    /**
     * Code: 68890-3
     */
    PediatricDermatologyProcedureNote = "68890-3",
    /**
     * Code: 68891-1
     */
    PediatricDermatologyProgressNote = "68891-1",
    /**
     * Code: 68892-9
     */
    PediatricDermatologyHospitalConsultNote = "68892-9",
    /**
     * Code: 68893-7
     */
    PediatricDermatologyHospitalLetter = "68893-7",
    /**
     * Code: 68894-5
     */
    PediatricEndocrinologyNote = "68894-5",
    /**
     * Code: 68895-2
     */
    PediatricEndocrinologyProcedureNote = "68895-2",
    /**
     * Code: 68896-0
     */
    PediatricEndocrinologyProgressNote = "68896-0",
    /**
     * Code: 68897-8
     */
    PediatricEndocrinologyHospitalConsultNote = "68897-8",
    /**
     * Code: 68898-6
     */
    PediatricEndocrinologyHospitalLetter = "68898-6",
    /**
     * Code: 69054-5
     */
    AorticArchFluoroscopicAngiogramWContrastIA = "69054-5",
    /**
     * Code: 69055-2
     */
    AcromioclavicularJointBilateralXRayWOWeight = "69055-2",
    /**
     * Code: 69056-0
     */
    ElbowBilateralXRayAndObliques = "69056-0",
    /**
     * Code: 69057-8
     */
    HandBilateralXRayAPAndLateralAndOblique = "69057-8",
    /**
     * Code: 69058-6
     */
    HipBilateralXRay2Views = "69058-6",
    /**
     * Code: 69059-4
     */
    HipBilateralXRayAndLateralCrosstable = "69059-4",
    /**
     * Code: 69060-2
     */
    KneeBilateralXRay2ViewsAndSunrise = "69060-2",
    /**
     * Code: 69061-0
     */
    KneeBilateralXRay2ViewsAndTunnel = "69061-0",
    /**
     * Code: 69062-8
     */
    KneeBilateralXRay4ViewsStanding = "69062-8",
    /**
     * Code: 69063-6
     */
    KneeBilateralXRay4ViewsAndSunriseAndTunnel = "69063-6",
    /**
     * Code: 69064-4
     */
    KneeBilateralXRaySunriseAndViewsStanding = "69064-4",
    /**
     * Code: 69065-1
     */
    AbdomenXRayAPAndLateralCrosstable = "69065-1",
    /**
     * Code: 69066-9
     */
    AbdominalVesselsFluoroscopicAngiogramWContrastIV = "69066-9",
    /**
     * Code: 69067-7
     */
    UnspecifiedBodyRegionFluoroscopicAngiogramAngioplastyWContrast = "69067-7",
    /**
     * Code: 69068-5
     */
    MammogramGuidanceForNeedleLocalizationOfBreastBilateral = "69068-5",
    /**
     * Code: 69069-3
     */
    PatellaBilateralXRaySunrise = "69069-3",
    /**
     * Code: 69070-1
     */
    RibsBilateralXRayAnteriorAndLateral = "69070-1",
    /**
     * Code: 69071-9
     */
    RibsBilateralAndChestXRay = "69071-9",
    /**
     * Code: 69072-7
     */
    WristBilateralXRayUlnarDeviationAndRadialDeviation = "69072-7",
    /**
     * Code: 69073-5
     */
    FluoroscopyGuidanceForCoreNeedleBiopsyOfUnspecifiedBodyRegion = "69073-5",
    /**
     * Code: 69074-3
     */
    FluoroscopyGuidanceForBiopsyOfPelvis = "69074-3",
    /**
     * Code: 69075-0
     */
    FluoroscopyGuidanceForBiopsyOfSalivaryGland = "69075-0",
    /**
     * Code: 69076-8
     */
    FluoroscopyGuidanceForBiopsyOfBone = "69076-8",
    /**
     * Code: 69077-6
     */
    BrachiocephalicArteryFluoroscopicAngiogramWContrastIA = "69077-6",
    /**
     * Code: 69078-4
     */
    FluoroscopyGuidanceForDrainageOfChest = "69078-4",
    /**
     * Code: 69079-2
     */
    ClavicleXRay45DegreeCephalicAngle = "69079-2",
    /**
     * Code: 69080-0
     */
    SpineCervicalXRay5ViewsWFlexionAndWExtension = "69080-0",
    /**
     * Code: 69081-8
     */
    SpineCervicalXRay5ViewsAndSwimmers = "69081-8",
    /**
     * Code: 69082-6
     */
    HeadCTAnd3DReconstructionWOContrast = "69082-6",
    /**
     * Code: 69083-4
     */
    CTGuidanceForBiopsyOfAbdomenWOContrast = "69083-4",
    /**
     * Code: 69084-2
     */
    ChestVesselsCTAngiogramWOContrast = "69084-2",
    /**
     * Code: 69085-9
     */
    RenalVesselsCTAngiogramWAndWOContrast = "69085-9",
    /**
     * Code: 69086-7
     */
    AortaCTWAndWOContrast = "69086-7",
    /**
     * Code: 69087-5
     */
    AnkleBilateralCTWOContrast = "69087-5",
    /**
     * Code: 69088-3
     */
    KneeBilateralCTWContrastIV = "69088-3",
    /**
     * Code: 69089-1
     */
    KneeBilateralCTWOContrast = "69089-1",
    /**
     * Code: 69090-9
     */
    ShoulderBilateralCTWOContrast = "69090-9",
    /**
     * Code: 69091-7
     */
    WristBilateralCTWContrastIV = "69091-7",
    /**
     * Code: 69092-5
     */
    CTGuidanceForBiopsyOfLiverWOContrast = "69092-5",
    /**
     * Code: 69093-3
     */
    CTGuidanceForBiopsyOfPelvisWContrastIV = "69093-3",
    /**
     * Code: 69094-1
     */
    CTGuidanceForBiopsyOfPelvisWOContrast = "69094-1",
    /**
     * Code: 69095-8
     */
    BladderCTWContrastIV = "69095-8",
    /**
     * Code: 69096-6
     */
    ChestCTLimitedWContrastIV = "69096-6",
    /**
     * Code: 69097-4
     */
    CTGuidanceForNeedleBiopsyOfLiver = "69097-4",
    /**
     * Code: 69098-2
     */
    CTGuidanceForNeedleBiopsyOfMuscle = "69098-2",
    /**
     * Code: 69099-0
     */
    CTGuidanceForNeedleBiopsyOfChestPleura = "69099-0",
    /**
     * Code: 69100-6
     */
    CTGuidanceForNeedleBiopsyOfSalivaryGland = "69100-6",
    /**
     * Code: 69101-4
     */
    CTGuidanceForNeedleBiopsyOfThyroid = "69101-4",
    /**
     * Code: 69102-2
     */
    AnkleLeftCTWContrastIntraarticular = "69102-2",
    /**
     * Code: 69103-0
     */
    ElbowLeftCTWContrastIntraarticular = "69103-0",
    /**
     * Code: 69104-8
     */
    ExtremityLeftCTWOContrast = "69104-8",
    /**
     * Code: 69105-5
     */
    HipLeftCTWContrastIntraarticular = "69105-5",
    /**
     * Code: 69106-3
     */
    KneeLeftCTWContrastIntraarticular = "69106-3",
    /**
     * Code: 69107-1
     */
    WristLeftCTWContrastIntraarticular = "69107-1",
    /**
     * Code: 69108-9
     */
    PulmonaryVesselsCTAngiogramWAndWOContrast = "69108-9",
    /**
     * Code: 69109-7
     */
    AnkleRightCTWContrastIntraarticular = "69109-7",
    /**
     * Code: 69110-5
     */
    ElbowRightCTWContrastIntraarticular = "69110-5",
    /**
     * Code: 69111-3
     */
    ExtremityRightCTWOContrast = "69111-3",
    /**
     * Code: 69112-1
     */
    HipRightCTWContrastIntraarticular = "69112-1",
    /**
     * Code: 69113-9
     */
    KidneyRightCT = "69113-9",
    /**
     * Code: 69114-7
     */
    KneeRightCTWContrastIntraarticular = "69114-7",
    /**
     * Code: 69115-4
     */
    WristRightCTWContrastIntraarticular = "69115-4",
    /**
     * Code: 69116-2
     */
    SacrumAndCoccyxCT = "69116-2",
    /**
     * Code: 69117-0
     */
    ScapulaCT = "69117-0",
    /**
     * Code: 69118-8
     */
    ScapulaCTWOContrast = "69118-8",
    /**
     * Code: 69119-6
     */
    AortaThoracicCTAngiogramWOContrast = "69119-6",
    /**
     * Code: 69120-4
     */
    FluoroscopyGuidanceForAbscessDrainageOfNeck = "69120-4",
    /**
     * Code: 69121-2
     */
    FluoroscopyGuidanceForAspirationOfCystOfOvary = "69121-2",
    /**
     * Code: 69122-0
     */
    FluoroscopyGuidanceForAbscessDrainageOfPancreas = "69122-0",
    /**
     * Code: 69123-8
     */
    FluoroscopyGuidanceForAbscessDrainageOfPleuralSpace = "69123-8",
    /**
     * Code: 69124-6
     */
    FluoroscopyGuidanceForFineNeedleAspirationOfSuperficialTissue = "69124-6",
    /**
     * Code: 69125-3
     */
    FluoroscopyGuidanceForNeedleBiopsyOfLiver = "69125-3",
    /**
     * Code: 69126-1
     */
    FluoroscopyGuidanceForNeedleBiopsyOfPancreas = "69126-1",
    /**
     * Code: 69127-9
     */
    FluoroscopyGuidanceForNeedleBiopsyOfChestPleura = "69127-9",
    /**
     * Code: 69128-7
     */
    FluoroscopyGuidanceForNeedleBiopsyOfSalivaryGland = "69128-7",
    /**
     * Code: 69129-5
     */
    FluoroscopyGuidanceForNeedleBiopsyOfThyroid = "69129-5",
    /**
     * Code: 69130-3
     */
    HandXRayAPAndLateral = "69130-3",
    /**
     * Code: 69131-1
     */
    HipXRayAndDaneliusMiller = "69131-1",
    /**
     * Code: 69132-9
     */
    HipXRayDaneliusMiller = "69132-9",
    /**
     * Code: 69133-7
     */
    FluoroscopyGuidanceForDrainageOfHip = "69133-7",
    /**
     * Code: 69134-5
     */
    FluoroscopicAngiogramGuidanceForPlacementOfStentInIliacArtery = "69134-5",
    /**
     * Code: 69135-2
     */
    IliacArteryFluoroscopicAngiogramAtherectomyWContrast = "69135-2",
    /**
     * Code: 69136-0
     */
    KneeXRaySunriseAndTunnel = "69136-0",
    /**
     * Code: 69137-8
     */
    AnkleLeftXRayAPAndLateralAndObliqueStanding = "69137-8",
    /**
     * Code: 69138-6
     */
    AnkleLeftXRay3ViewsStanding = "69138-6",
    /**
     * Code: 69139-4
     */
    HipLeftXRayAndLateralCrosstable = "69139-4",
    /**
     * Code: 69140-2
     */
    HipLeftXRayAndDaneliusMiller = "69140-2",
    /**
     * Code: 69141-0
     */
    HipLeftXRayDaneliusMiller = "69141-0",
    /**
     * Code: 69142-8
     */
    KneeLeftXRay2ViewsAndSunrise = "69142-8",
    /**
     * Code: 69143-6
     */
    KneeLeftXRay2ViewsAndTunnelStanding = "69143-6",
    /**
     * Code: 69144-4
     */
    KneeLeftXRay4ViewsAndAPStanding = "69144-4",
    /**
     * Code: 69145-1
     */
    KneeLeftXRay4ViewsAndTunnel = "69145-1",
    /**
     * Code: 69146-9
     */
    KneeLeftXRayAPAndLateralCrosstable = "69146-9",
    /**
     * Code: 69147-7
     */
    KneeLeftXRayAPAndLateralAndRightObliqueAndLeftOblique = "69147-7",
    /**
     * Code: 69148-5
     */
    KneeLeftXRayAndTunnel = "69148-5",
    /**
     * Code: 69149-3
     */
    KneeLeftXRaySunriseAndViewsStanding = "69149-3",
    /**
     * Code: 69150-1
     */
    BreastImplantLeftMammogramDiagnostic = "69150-1",
    /**
     * Code: 69151-9
     */
    WristLeftXRay3ViewsScaphoid = "69151-9",
    /**
     * Code: 69152-7
     */
    PatellaLeftXRaySingleView = "69152-7",
    /**
     * Code: 69153-5
     */
    ShoulderLeftXRayAPAndGrasheyAndAxillary = "69153-5",
    /**
     * Code: 69154-3
     */
    ShoulderLeftXRay3ViewsAndAxillary = "69154-3",
    /**
     * Code: 69155-0
     */
    ShoulderLeftXRay3ViewsAndY = "69155-0",
    /**
     * Code: 69156-8
     */
    ShoulderLeftXRayGrasheyAndY = "69156-8",
    /**
     * Code: 69157-6
     */
    WristLeftXRayLateralWFlexionAndWExtension = "69157-6",
    /**
     * Code: 69158-4
     */
    BreastImplantXRayDiagnostic = "69158-4",
    /**
     * Code: 69159-2
     */
    BreastImplantXRayScreening = "69159-2",
    /**
     * Code: 69160-0
     */
    MammogramGuidanceStereotacticForNeedleBiopsyOfBreast = "69160-0",
    /**
     * Code: 69161-8
     */
    CircleOfWillisMRIAngiogramWAndWOContrastIV = "69161-8",
    /**
     * Code: 69162-6
     */
    PulmonaryArteryBilateralMRIAngiogramWContrastIA = "69162-6",
    /**
     * Code: 69163-4
     */
    AnkleBilateralMRIWContrastIV = "69163-4",
    /**
     * Code: 69164-2
     */
    AnkleBilateralMRIWOContrast = "69164-2",
    /**
     * Code: 69165-9
     */
    BreastImplantBilateralMRI = "69165-9",
    /**
     * Code: 69166-7
     */
    BreastImplantBilateralMRIWAndWOContrastIV = "69166-7",
    /**
     * Code: 69167-5
     */
    BreastImplantBilateralMRIWContrastIV = "69167-5",
    /**
     * Code: 69168-3
     */
    BreastImplantBilateralMRIWOContrast = "69168-3",
    /**
     * Code: 69169-1
     */
    MRIGuidanceForBiopsyOfBreastBilateral = "69169-1",
    /**
     * Code: 69170-9
     */
    ElbowBilateralMRIWContrastIV = "69170-9",
    /**
     * Code: 69171-7
     */
    ElbowBilateralMRIWOContrast = "69171-7",
    /**
     * Code: 69172-5
     */
    FemurBilateralMRIWContrastIV = "69172-5",
    /**
     * Code: 69173-3
     */
    FemurBilateralMRIWOContrast = "69173-3",
    /**
     * Code: 69174-1
     */
    ForearmBilateralMRIWAndWOContrastIV = "69174-1",
    /**
     * Code: 69175-8
     */
    ForearmBilateralMRIWContrastIV = "69175-8",
    /**
     * Code: 69176-6
     */
    ForearmBilateralMRIWOContrast = "69176-6",
    /**
     * Code: 69177-4
     */
    HandBilateralMRIWAndWOContrastIV = "69177-4",
    /**
     * Code: 69178-2
     */
    HandBilateralMRIWContrastIV = "69178-2",
    /**
     * Code: 69179-0
     */
    HandBilateralMRIWOContrast = "69179-0",
    /**
     * Code: 69180-8
     */
    UpperArmBilateralMRI = "69180-8",
    /**
     * Code: 69181-6
     */
    UpperArmBilateralMRIWAndWOContrastIV = "69181-6",
    /**
     * Code: 69182-4
     */
    UpperArmBilateralMRIWContrastIV = "69182-4",
    /**
     * Code: 69183-2
     */
    UpperArmBilateralMRIWOContrast = "69183-2",
    /**
     * Code: 69184-0
     */
    ShoulderBilateralMRIWContrastIV = "69184-0",
    /**
     * Code: 69185-7
     */
    LowerLegBilateralMRIWOContrast = "69185-7",
    /**
     * Code: 69186-5
     */
    UpperExtremityBilateralMRIWAndWOContrastIV = "69186-5",
    /**
     * Code: 69187-3
     */
    UpperExtremityBilateralMRIWContrastIV = "69187-3",
    /**
     * Code: 69188-1
     */
    UpperExtremityBilateralMRIWOContrast = "69188-1",
    /**
     * Code: 69189-9
     */
    BreastImplantMRIWAndWOContrastIV = "69189-9",
    /**
     * Code: 69190-7
     */
    BreastImplantMRIWContrastIV = "69190-7",
    /**
     * Code: 69191-5
     */
    BreastImplantMRIWOContrast = "69191-5",
    /**
     * Code: 69192-3
     */
    MRIGuidanceForAspirationOfCystOfBreast = "69192-3",
    /**
     * Code: 69193-1
     */
    ExtremityMRI = "69193-1",
    /**
     * Code: 69194-9
     */
    FingerMRIWAndWOContrastIV = "69194-9",
    /**
     * Code: 69195-6
     */
    FingerMRIWContrastIV = "69195-6",
    /**
     * Code: 69196-4
     */
    FingerMRIWOContrast = "69196-4",
    /**
     * Code: 69197-2
     */
    MRIGuidanceForNeedleBiopsyOfLiver = "69197-2",
    /**
     * Code: 69198-0
     */
    MRIGuidanceForNeedleBiopsyOfMuscle = "69198-0",
    /**
     * Code: 69199-8
     */
    MRIGuidanceForNeedleBiopsyOfPancreas = "69199-8",
    /**
     * Code: 69200-4
     */
    MRIGuidanceForNeedleBiopsyOfPleura = "69200-4",
    /**
     * Code: 69201-2
     */
    MRIGuidanceForNeedleBiopsyOfSalivaryGland = "69201-2",
    /**
     * Code: 69202-0
     */
    MRIGuidanceForNeedleBiopsyOfThyroid = "69202-0",
    /**
     * Code: 69203-8
     */
    MRIGuidanceForBiopsyOfBreastLeft = "69203-8",
    /**
     * Code: 69204-6
     */
    FingerLeftMRIWAndWOContrastIV = "69204-6",
    /**
     * Code: 69205-3
     */
    FingerLeftMRIWContrastIV = "69205-3",
    /**
     * Code: 69206-1
     */
    FingerLeftMRIWOContrast = "69206-1",
    /**
     * Code: 69207-9
     */
    HipLeftMRIWAndWOContrastIntraarticular = "69207-9",
    /**
     * Code: 69208-7
     */
    ShoulderLeftMRIWAndWOContrastIntraarticular = "69208-7",
    /**
     * Code: 69209-5
     */
    WristLeftAndHandLeftMRI = "69209-5",
    /**
     * Code: 69210-3
     */
    LowerExtremityJointMRIWContrastIntraarticular = "69210-3",
    /**
     * Code: 69211-1
     */
    NasalBonesMRI = "69211-1",
    /**
     * Code: 69212-9
     */
    PelvisMRILimited = "69212-9",
    /**
     * Code: 69213-7
     */
    MRIGuidanceForBiopsyOfBreastRight = "69213-7",
    /**
     * Code: 69214-5
     */
    FingerRightMRIWAndWOContrastIV = "69214-5",
    /**
     * Code: 69215-2
     */
    FingerRightMRIWContrastIV = "69215-2",
    /**
     * Code: 69216-0
     */
    FingerRightMRIWOContrast = "69216-0",
    /**
     * Code: 69217-8
     */
    HipRightMRIWAndWOContrastIntraarticular = "69217-8",
    /**
     * Code: 69218-6
     */
    ShoulderRightMRIWAndWOContrastIntraarticular = "69218-6",
    /**
     * Code: 69219-4
     */
    WristRightAndHandRightMRI = "69219-4",
    /**
     * Code: 69220-2
     */
    SkullBaseMRIWAndWOContrastIV = "69220-2",
    /**
     * Code: 69221-0
     */
    ScrotumAndTesticleMRIWContrastIV = "69221-0",
    /**
     * Code: 69222-8
     */
    VenaCavaMRI = "69222-8",
    /**
     * Code: 69223-6
     */
    UnspecifiedBodyRegionMRIWOContrast = "69223-6",
    /**
     * Code: 69224-4
     */
    FluoroscopyGuidanceForNeedleBiopsyOfAbdomen = "69224-4",
    /**
     * Code: 69225-1
     */
    FluoroscopyGuidanceForNeedleBiopsyOfChest = "69225-1",
    /**
     * Code: 69226-9
     */
    FluoroscopyGuidanceForNeedleBiopsyOfMuscle = "69226-9",
    /**
     * Code: 69227-7
     */
    FluoroscopyGuidanceForNeedleBiopsyOfPleura = "69227-7",
    /**
     * Code: 69228-5
     */
    FluoroscopyGuidanceForNeedleBiopsyOfProstate = "69228-5",
    /**
     * Code: 69229-3
     */
    LiverSPECTWTc99mSCIV = "69229-3",
    /**
     * Code: 69230-1
     */
    LiverScanWTc99mSCIV = "69230-1",
    /**
     * Code: 69231-9
     */
    HeartScanWStressAndWTc99mIV = "69231-9",
    /**
     * Code: 69232-7
     */
    HeartScanWStressAndWTc99mSestamibiIV = "69232-7",
    /**
     * Code: 69233-5
     */
    ParotidGlandScanWTc99mPertechnetateIV = "69233-5",
    /**
     * Code: 69234-3
     */
    SpleenSPECTWTc99mTaggedRBCIV = "69234-3",
    /**
     * Code: 69235-0
     */
    ScrotumAndTesticleSPECTFlow = "69235-0",
    /**
     * Code: 69236-8
     */
    ThyroidScanAndUptakeWI131PO = "69236-8",
    /**
     * Code: 69237-6
     */
    SPECTForTumorWholeBody = "69237-6",
    /**
     * Code: 69238-4
     */
    UrinaryBladderAndUrethraSPECTWContrastIntraBladderDuringVoiding = "69238-4",
    /**
     * Code: 69239-2
     */
    PatellaXRaySunrise = "69239-2",
    /**
     * Code: 69240-0
     */
    FluoroscopyGuidanceForPercutaneousBiopsyOfAbdomen = "69240-0",
    /**
     * Code: 69241-8
     */
    FluoroscopyGuidanceForPercutaneousDrainageOfAbscessOfAbdomen = "69241-8",
    /**
     * Code: 69242-6
     */
    FluoroscopyGuidanceForPercutaneousDrainageOfAbscessOfAppendix = "69242-6",
    /**
     * Code: 69243-4
     */
    FluoroscopyGuidanceForPercutaneousDrainageOfAbscessOfLung = "69243-4",
    /**
     * Code: 69244-2
     */
    FluoroscopyGuidanceForPercutaneousDrainageOfAbscessOfPelvis = "69244-2",
    /**
     * Code: 69245-9
     */
    FluoroscopyGuidanceForPercutaneousNeedleBiopsyOfKidney = "69245-9",
    /**
     * Code: 69246-7
     */
    FluoroscopyGuidanceForPercutaneousNeedleBiopsyOfLiver = "69246-7",
    /**
     * Code: 69247-5
     */
    FluoroscopyGuidanceForPercutaneousNeedleBiopsyOfSalivaryGland = "69247-5",
    /**
     * Code: 69248-3
     */
    RenalArteryFluoroscopicAngiogramPercutaneousTransluminalAngioplastyOfVesselWContrastIA = "69248-3",
    /**
     * Code: 69249-1
     */
    PoplitealArteryFluoroscopicAngiogramWContrastIA = "69249-1",
    /**
     * Code: 69250-9
     */
    PortalVeinFluoroscopicAngiogramWContrastIV = "69250-9",
    /**
     * Code: 69251-7
     */
    BreastMammogramPostWirePlacement = "69251-7",
    /**
     * Code: 69252-5
     */
    PulmonaryArteryFluoroscopicAngiogramPercutaneousTransluminalAngioplastyOfVesselWContrastIA = "69252-5",
    /**
     * Code: 69253-3
     */
    RenalVesselsFluoroscopicAngiogramAtherectomyWContrast = "69253-3",
    /**
     * Code: 69254-1
     */
    AnkleRightXRay3ViewsStanding = "69254-1",
    /**
     * Code: 69255-8
     */
    KneeRightXRaySunriseAndTunnelStanding = "69255-8",
    /**
     * Code: 69256-6
     */
    KneeRightXRaySunrise = "69256-6",
    /**
     * Code: 69257-4
     */
    LowerExtremityRightXRay2Views = "69257-4",
    /**
     * Code: 69258-2
     */
    LowerExtremityRightXRayAPAndLateral = "69258-2",
    /**
     * Code: 69259-0
     */
    BreastImplantRightMammogramDiagnostic = "69259-0",
    /**
     * Code: 69260-8
     */
    PatellaRightXRaySingleView = "69260-8",
    /**
     * Code: 69261-6
     */
    PatellaRightXRay3Views = "69261-6",
    /**
     * Code: 69262-4
     */
    ShoulderRightXRayAPAndGrasheyAndAxillary = "69262-4",
    /**
     * Code: 69263-2
     */
    WristRightXRayPAWClenchedFist = "69263-2",
    /**
     * Code: 69264-0
     */
    SacrumXRayStanding = "69264-0",
    /**
     * Code: 69265-7
     */
    ShoulderXRay4Views = "69265-7",
    /**
     * Code: 69266-5
     */
    ShoulderXRayAPAndY = "69266-5",
    /**
     * Code: 69267-3
     */
    ShoulderXRayGrasheyAndAxillaryAndY = "69267-3",
    /**
     * Code: 69268-1
     */
    BreastDuctMammogramSingleViewWContrastIntraDuct = "69268-1",
    /**
     * Code: 69269-9
     */
    SkullXRayAPSingleView = "69269-9",
    /**
     * Code: 69270-7
     */
    SkullXRayPA = "69270-7",
    /**
     * Code: 69271-5
     */
    SkullXRayPAAndLateralAndWatersAndTowne = "69271-5",
    /**
     * Code: 69272-3
     */
    SmallBowelFluoroscopyWContrastViaIleostomy = "69272-3",
    /**
     * Code: 69273-1
     */
    SpineThoracolumbarJunctionXRay2Views = "69273-1",
    /**
     * Code: 69274-9
     */
    SpineThoracicXRay2ViewsStanding = "69274-9",
    /**
     * Code: 69275-6
     */
    SpineThoracicXRayStanding = "69275-6",
    /**
     * Code: 69276-4
     */
    AortaAbdominalUS = "69276-4",
    /**
     * Code: 69277-2
     */
    AdrenalGlandUS = "69277-2",
    /**
     * Code: 69278-0
     */
    USGuidanceForAspirationOfBreastBilateral = "69278-0",
    /**
     * Code: 69279-8
     */
    USGuidanceForCoreNeedleBiopsyOfLymphNode = "69279-8",
    /**
     * Code: 69280-6
     */
    BladderUSLimited = "69280-6",
    /**
     * Code: 69281-4
     */
    ChestUSLimited = "69281-4",
    /**
     * Code: 69282-2
     */
    UnspecifiedBodyRegionUSDopplerLimited = "69282-2",
    /**
     * Code: 69283-0
     */
    ExtremityVeinsBilateralUSDoppler = "69283-0",
    /**
     * Code: 69284-8
     */
    PortalVeinAndHepaticVeinUSDoppler = "69284-8",
    /**
     * Code: 69285-5
     */
    UmbilicalArteryUSDoppler = "69285-5",
    /**
     * Code: 69286-3
     */
    EyeUSLimited = "69286-3",
    /**
     * Code: 69287-1
     */
    USGuidanceForAspirationOfLymphNode = "69287-1",
    /**
     * Code: 69288-9
     */
    USGuidanceForNeedleBiopsyOfMuscle = "69288-9",
    /**
     * Code: 69289-7
     */
    USGuidanceForNeedleBiopsyOfPancreas = "69289-7",
    /**
     * Code: 69290-5
     */
    USGuidanceForNeedleBiopsyOfBreastRight = "69290-5",
    /**
     * Code: 69291-3
     */
    USGuidanceForNeedleBiopsyOfSalivaryGland = "69291-3",
    /**
     * Code: 69292-1
     */
    USGuidanceForAspirationOfBreastLeft = "69292-1",
    /**
     * Code: 69293-9
     */
    ExtremityArteryLeftUS = "69293-9",
    /**
     * Code: 69294-7
     */
    RenalArteryUS = "69294-7",
    /**
     * Code: 69295-4
     */
    RenalVesselsUS = "69295-4",
    /**
     * Code: 69296-2
     */
    USGuidanceForAspirationOfBreastRight = "69296-2",
    /**
     * Code: 69297-0
     */
    ExtremityArteryRightUS = "69297-0",
    /**
     * Code: 69298-8
     */
    SalivaryGlandUS = "69298-8",
    /**
     * Code: 69299-6
     */
    ScrotumAndTesticleUSLimited = "69299-6",
    /**
     * Code: 69300-2
     */
    KidneyTransplantUSLimited = "69300-2",
    /**
     * Code: 69301-0
     */
    UpperExtremityVeinFluoroscopicAngiogramPercutaneousTransluminalAngioplastyOfVesselWContrastIV = "69301-0",
    /**
     * Code: 69302-8
     */
    WristXRayWClenchedFist = "69302-8",
    /**
     * Code: 69303-6
     */
    WristXRayUlnarDeviationAndRadialDeviation = "69303-6",
    /**
     * Code: 69304-4
     */
    WristXRayUlnarDeviation = "69304-4",
    /**
     * Code: 69305-1
     */
    ZygomaticArchXRay2Views = "69305-1",
    /**
     * Code: 69306-9
     */
    FluoroscopyGuidanceForAspirationOfCystOfBone = "69306-9",
    /**
     * Code: 69307-7
     */
    AnkleLeftXRaySingleView = "69307-7",
    /**
     * Code: 69308-5
     */
    ElbowLeftXRaySingleView = "69308-5",
    /**
     * Code: 69309-3
     */
    FootLeftXRaySingleView = "69309-3",
    /**
     * Code: 69310-1
     */
    HandLeftXRaySingleView = "69310-1",
    /**
     * Code: 69311-9
     */
    CalcaneusLeftXRaySingleView = "69311-9",
    /**
     * Code: 69312-7
     */
    HumerusLeftXRaySingleView = "69312-7",
    /**
     * Code: 69313-5
     */
    TibiaLeftAndFibulaLeftXRaySingleView = "69313-5",
    /**
     * Code: 69314-3
     */
    AnkleRightXRaySingleView = "69314-3",
    /**
     * Code: 69315-0
     */
    ElbowRightXRaySingleView = "69315-0",
    /**
     * Code: 69316-8
     */
    FootRightXRaySingleView = "69316-8",
    /**
     * Code: 69317-6
     */
    RadiusRightAndUlnaRightXRaySingleView = "69317-6",
    /**
     * Code: 69318-4
     */
    HandRightXRaySingleView = "69318-4",
    /**
     * Code: 69319-2
     */
    CalcaneusRightXRaySingleView = "69319-2",
    /**
     * Code: 69320-0
     */
    HumerusRightXRaySingleView = "69320-0",
    /**
     * Code: 69321-8
     */
    TibiaRightAndFibulaRightXRaySingleView = "69321-8",
    /**
     * Code: 69385-3
     */
    LowerExtremityVeinsBilateralUS = "69385-3",
    /**
     * Code: 69387-9
     */
    USGuidanceForBiopsyOfEpididymis = "69387-9",
    /**
     * Code: 69388-7
     */
    UrinaryBladderUSPostVoid = "69388-7",
    /**
     * Code: 69389-5
     */
    FemoralArteryAndPoplitealArteryUS = "69389-5",
    /**
     * Code: 69390-3
     */
    OvaryUS = "69390-3",
    /**
     * Code: 69391-1
     */
    USGuidanceForCordocentesis = "69391-1",
    /**
     * Code: 69392-9
     */
    LowerExtremityVeinsLeftUS = "69392-9",
    /**
     * Code: 69393-7
     */
    SpineLumbarUS = "69393-7",
    /**
     * Code: 69394-5
     */
    MesentericArteryUS = "69394-5",
    /**
     * Code: 69395-2
     */
    UpperExtremityVeinsUS = "69395-2",
    /**
     * Code: 69396-0
     */
    USGuidanceForBiopsyOfSpinalCord = "69396-0",
    /**
     * Code: 69397-8
     */
    BreastVesselsUSDoppler = "69397-8",
    /**
     * Code: 69398-6
     */
    ExtremityVesselsLeftUSDoppler = "69398-6",
    /**
     * Code: 69399-4
     */
    FemoralVeinAndPoplitealVeinUS = "69399-4",
    /**
     * Code: 69400-0
     */
    USGuidanceForChorionicVillusSampling = "69400-0",
    /**
     * Code: 69401-8
     */
    USGuidanceForNeedleBiopsyOfSpinalCord = "69401-8",
    /**
     * Code: 69402-6
     */
    KidneyBilateralAndBladderUS = "69402-6",
    /**
     * Code: 69409-1
     */
    USStandardCertificateOfDeath2003Revision = "69409-1",
    /**
     * Code: 69438-0
     */
    ReferralNoteForensicMedicine = "69438-0",
    /**
     * Code: 69669-0
     */
    PopulationStratificationDescriptionNarrative = "69669-0",
    /**
     * Code: 69670-8
     */
    HealthQualityMeasureSupplementalDataNarrative = "69670-8",
    /**
     * Code: 69718-5
     */
    FDAProductLabelStatementOfIdentitySection = "69718-5",
    /**
     * Code: 69719-3
     */
    FDAProductLabelHealthClaimSection = "69719-3",
    /**
     * Code: 69730-0
     */
    InstructionsTextNarrative = "69730-0",
    /**
     * Code: 69758-1
     */
    FDAPackageInsertDiagramOfDevice = "69758-1",
    /**
     * Code: 69759-9
     */
    FDAPackageInsertRisks = "69759-9",
    /**
     * Code: 69760-7
     */
    FDAPackageInsertCompatibleAccessories = "69760-7",
    /**
     * Code: 69761-5
     */
    FDAPackageInsertAlarms = "69761-5",
    /**
     * Code: 69762-3
     */
    FDAPackageInsertTroubleshooting = "69762-3",
    /**
     * Code: 69763-1
     */
    FDAPackageInsertDisposalAndWasteHandling = "69763-1",
    /**
     * Code: 69764-9
     */
    DocumentType = "69764-9",
    /**
     * Code: 69799-5
     */
    VAL21DeoxycorticosteroneMolesVolumeInSerumOrPlasma = "69799-5",
    /**
     * Code: 69908-2
     */
    AbdominalVesselsAndPelvisVesselsCTAngiogramWContrastIV = "69908-2",
    /**
     * Code: 69981-9
     */
    AsthmaActionPlan = "69981-9",
    /**
     * Code: 70004-7
     */
    DiagnosticStudyNote = "70004-7",
    /**
     * Code: 70005-4
     */
    EvaluationAndManagementOfSmokingCessation = "70005-4",
    /**
     * Code: 70006-2
     */
    MedicationManagementNote = "70006-2",
    /**
     * Code: 70007-0
     */
    RestraintNote = "70007-0",
    /**
     * Code: 70238-1
     */
    TransplantSurgeryHospitalProgressNote = "70238-1",
    /**
     * Code: 70915-4
     */
    USGuidanceForCSFAspirationOfSpineCervical = "70915-4",
    /**
     * Code: 70916-2
     */
    USGuidanceForCSFAspirationOfSpineLumbar = "70916-2",
    /**
     * Code: 70917-0
     */
    USGuidanceForCSFAspirationOfSpineThoracic = "70917-0",
    /**
     * Code: 70918-8
     */
    FluoroscopyGuidanceForInjectionOfSpineCervical = "70918-8",
    /**
     * Code: 70919-6
     */
    FluoroscopyGuidanceForInjectionOfSpineLumbar = "70919-6",
    /**
     * Code: 70920-4
     */
    FluoroscopyGuidanceForInjectionOfSpineThoracic = "70920-4",
    /**
     * Code: 70921-2
     */
    CTGuidanceForNerveBlockOfSpineCervical = "70921-2",
    /**
     * Code: 70922-0
     */
    CTGuidanceForNerveBlockOfSpineThoracic = "70922-0",
    /**
     * Code: 70923-8
     */
    FluoroscopyGuidanceForPercutaneousVertebroplastyOfSpineCervical = "70923-8",
    /**
     * Code: 70924-6
     */
    FluoroscopyGuidanceForPercutaneousVertebroplastyOfSpineLumbar = "70924-6",
    /**
     * Code: 70925-3
     */
    FluoroscopyGuidanceForPercutaneousVertebroplastyOfSpineThoracic = "70925-3",
    /**
     * Code: 70926-1
     */
    SpineCervicalUS = "70926-1",
    /**
     * Code: 70927-9
     */
    SpineThoracicUS = "70927-9",
    /**
     * Code: 70928-7
     */
    SpineLumbarCTStereotactic = "70928-7",
    /**
     * Code: 70929-5
     */
    SpineCervicalCTStereotactic = "70929-5",
    /**
     * Code: 70930-3
     */
    SpineThoracicCTStereotactic = "70930-3",
    /**
     * Code: 70931-1
     */
    SpineThoracicCTWContrastIntradisc = "70931-1",
    /**
     * Code: 70932-9
     */
    SpineThoracicXRaySingleViewPortable = "70932-9",
    /**
     * Code: 70933-7
     */
    SpineThoracicFluoroscopyWContrastIntradisc = "70933-7",
    /**
     * Code: 70934-5
     */
    OcularHistoryNarrative = "70934-5",
    /**
     * Code: 70935-2
     */
    OphthalmicMedicationsNarrative = "70935-2",
    /**
     * Code: 70936-0
     */
    VisionTestingNarrative = "70936-0",
    /**
     * Code: 70938-6
     */
    RefractiveMeasurementsNarrative = "70938-6",
    /**
     * Code: 70939-4
     */
    LensometryMeasurementsNarrative = "70939-4",
    /**
     * Code: 70940-2
     */
    ConfrontationVisualFieldNarrative = "70940-2",
    /**
     * Code: 70941-0
     */
    EyeExternalNarrative = "70941-0",
    /**
     * Code: 70942-8
     */
    OcularAlignmentAndMotilityNarrative = "70942-8",
    /**
     * Code: 70943-6
     */
    EyeAnteriorSegmentNarrative = "70943-6",
    /**
     * Code: 70944-4
     */
    EyePosteriorSegmentNarrative = "70944-4",
    /**
     * Code: 70945-1
     */
    LacrimalNarrative = "70945-1",
    /**
     * Code: 70946-9
     */
    AncillaryEyeTestsNarrative = "70946-9",
    /**
     * Code: 70948-5
     */
    OcularPhysicalExamNarrative = "70948-5",
    /**
     * Code: 70949-3
     */
    PathologyReportSectionHeading = "70949-3",
    /**
     * Code: 71230-7
     */
    BirthCertificateDocument = "71230-7",
    /**
     * Code: 71388-3
     */
    CMSPhysicalExamPanel = "71388-3",
    /**
     * Code: 71406-3
     */
    CMSReviewOfSystemsPanel = "71406-3",
    /**
     * Code: 71421-2
     */
    CMSPastFamilySocialHistoryPanel = "71421-2",
    /**
     * Code: 71428-7
     */
    CMSHistoryOfPresentIllnessPanel = "71428-7",
    /**
     * Code: 71446-9
     */
    FDAPackageInsertIndexingBillingUnit = "71446-9",
    /**
     * Code: 71482-4
     */
    RiskAssessmentDocument = "71482-4",
    /**
     * Code: 71681-1
     */
    FDAPackageInsertPMICommonSideEffectsSection = "71681-1",
    /**
     * Code: 71682-9
     */
    FDAPackageInsertPMIGetEmergencyMedicalHelpSection = "71682-9",
    /**
     * Code: 71683-7
     */
    FDAPackageInsertPMIStopTakingAndCallYourDoctorSection = "71683-7",
    /**
     * Code: 71684-5
     */
    FDAPackageInsertPMIDirectionsForUseSection = "71684-5",
    /**
     * Code: 71685-2
     */
    FDAPackageInsertPMITellYourDoctorBeforeTakingSection = "71685-2",
    /**
     * Code: 71686-0
     */
    FDAPackageInsertPMIDoNotTakeSection = "71686-0",
    /**
     * Code: 71687-8
     */
    FDAPackageInsertPMIImportantInformationSection = "71687-8",
    /**
     * Code: 71688-6
     */
    FDAPackageInsertPMIUsesSection = "71688-6",
    /**
     * Code: 71743-9
     */
    FDAProductLabelGenericDrugFacilityIdentificationSubmission = "71743-9",
    /**
     * Code: 71744-7
     */
    FDAPackageInsertHealthCareProviderLetter = "71744-7",
    /**
     * Code: 72090-4
     */
    FDAProductLabelIdentificationOfCBERRegulatedGenericDrugFacility = "72090-4",
    /**
     * Code: 72134-0
     */
    CancerEventReport = "72134-0",
    /**
     * Code: 72135-7
     */
    CancerDiagnosisNarrative = "72135-7",
    /**
     * Code: 72137-3
     */
    BreastRightFFDMammogramTomosynthesisDiagnostic = "72137-3",
    /**
     * Code: 72138-1
     */
    BreastLeftFFDMammogramTomosynthesisDiagnostic = "72138-1",
    /**
     * Code: 72139-9
     */
    BreastBilateralFFDMammogramTomosynthesisDiagnostic = "72139-9",
    /**
     * Code: 72140-7
     */
    BreastRightFFDMammogramTomosynthesisScreening = "72140-7",
    /**
     * Code: 72141-5
     */
    BreastLeftFFDMammogramTomosynthesisScreening = "72141-5",
    /**
     * Code: 72142-3
     */
    BreastBilateralFFDMammogramTomosynthesisScreening = "72142-3",
    /**
     * Code: 72169-6
     */
    PermissionToReleaseImmunizationDataFromSchoolRecord = "72169-6",
    /**
     * Code: 72170-4
     */
    PhotographicImageUnspecifiedBodyRegionDocument = "72170-4",
    /**
     * Code: 72238-9
     */
    ToesRightMRIWAndWOContrastIV = "72238-9",
    /**
     * Code: 72239-7
     */
    ToesRightMRIWOContrast = "72239-7",
    /**
     * Code: 72240-5
     */
    ToesRightMRIWContrastIV = "72240-5",
    /**
     * Code: 72241-3
     */
    ToesLeftMRIWAndWOContrastIV = "72241-3",
    /**
     * Code: 72242-1
     */
    ToesLeftMRIWOContrast = "72242-1",
    /**
     * Code: 72243-9
     */
    ToesLeftMRIWContrastIV = "72243-9",
    /**
     * Code: 72244-7
     */
    PelvisMRIWAndWOContrastIVAndWEndorectalCoil = "72244-7",
    /**
     * Code: 72245-4
     */
    PelvisMRIWContrastPRAtRestAndMaxmalSphincterContractionDuringStrainingAndDefecation = "72245-4",
    /**
     * Code: 72246-2
     */
    AbdomenAndPelvisMRIWContrastPOAndWAndWOContrastIV = "72246-2",
    /**
     * Code: 72247-0
     */
    AbdomenAndPelvisMRIWContrastPOAndWOContrastIV = "72247-0",
    /**
     * Code: 72248-8
     */
    AbdomenMRCPWithAndWithoutContrastIV = "72248-8",
    /**
     * Code: 72249-6
     */
    FacialBonesAndSinusesCTWOContrast = "72249-6",
    /**
     * Code: 72250-4
     */
    AbdomenAndPelvisCTWContrastPOAndWContrastIV = "72250-4",
    /**
     * Code: 72251-2
     */
    ChestVesselsCTMultisectionForPulmonaryEmbolus = "72251-2",
    /**
     * Code: 72252-0
     */
    ChestAndAbdomenAndPelvisCTWAndWOContrastIV = "72252-0",
    /**
     * Code: 72253-8
     */
    ChestAndAbdomenAndPelvisCTWOContrast = "72253-8",
    /**
     * Code: 72254-6
     */
    ChestAndAbdomenAndPelvisCTWContrastIV = "72254-6",
    /**
     * Code: 72255-3
     */
    AortaAndFemoralArteryBilateralCTAngiogramWContrastIV = "72255-3",
    /**
     * Code: 72256-1
     */
    AbdomenXRayForMotilityWithRadioopaqueMarkers = "72256-1",
    /**
     * Code: 72267-8
     */
    EvaluationOfMentalAndPhysicalIncapacityCertificateDocument = "72267-8",
    /**
     * Code: 72509-3
     */
    ReportingRateReportingPeriodPopulationCalculated = "72509-3",
    /**
     * Code: 72510-1
     */
    PerformanceRateReportingPeriodPopulationCalculated = "72510-1",
    /**
     * Code: 72528-3
     */
    AxillaRightUS = "72528-3",
    /**
     * Code: 72529-1
     */
    AxillaLeftUS = "72529-1",
    /**
     * Code: 72530-9
     */
    USGuidanceForInjectionOfJoint = "72530-9",
    /**
     * Code: 72531-7
     */
    RectumAndColonCT3DWContrastIVAndWAirContrastPR = "72531-7",
    /**
     * Code: 72532-5
     */
    USGuidanceForAmbulatoryPhlebectomyOfExtremityVeinRight = "72532-5",
    /**
     * Code: 72533-3
     */
    USGuidanceForAmbulatoryPhlebectomyOfExtremityVeinLeft = "72533-3",
    /**
     * Code: 72534-1
     */
    USGuidanceForLaserAblationOfVeinSOfExtremityVeinRight = "72534-1",
    /**
     * Code: 72535-8
     */
    USGuidanceForLaserAblationOfVeinSOfExtremityVeinLeft = "72535-8",
    /**
     * Code: 72536-6
     */
    USGuidanceForInjectionOfSclerosingAgentOfExtremityVeinsBilateral = "72536-6",
    /**
     * Code: 72537-4
     */
    USGuidanceForInjectionOfSclerosingAgentOfExtremityVeinBilateral = "72537-4",
    /**
     * Code: 72538-2
     */
    FluoroscopicAngiogramGuidanceForRemovalOfLongtermPeripheralCatheterFromCentralVein = "72538-2",
    /**
     * Code: 72539-0
     */
    FluoroscopyGuidanceForPeripheralNerveDenervationOfUnspecifiedBodyRegion = "72539-0",
    /**
     * Code: 72540-8
     */
    FluoroscopyGuidanceForFacetJointDenervationOfSpine = "72540-8",
    /**
     * Code: 72541-6
     */
    FluoroscopyGuidanceForFacetJointDenervationOfSpineCervical = "72541-6",
    /**
     * Code: 72542-4
     */
    FluoroscopyGuidanceForFacetJointDenervationOfSpineLumbar = "72542-4",
    /**
     * Code: 72543-2
     */
    FluoroscopyGuidanceForIntercostalNerveDevervationOfSpineThoracic = "72543-2",
    /**
     * Code: 72544-0
     */
    FluoroscopyGuidanceForRemovalOfPercutaneousNephrostomyTubeFromKidneyBilateralWContrast = "72544-0",
    /**
     * Code: 72545-7
     */
    FluoroscopyGuidanceForReplacementOfPercutaneousDrainageTubeInBiliaryDuctsAndGallbladder = "72545-7",
    /**
     * Code: 72546-5
     */
    FluoroscopyGuidanceForRemovalOfCVALumenObstructionFromCentralVein = "72546-5",
    /**
     * Code: 72547-3
     */
    FluoroscopyGuidanceForRemovalOfCVADeviceObstructionFromCentralVein = "72547-3",
    /**
     * Code: 72548-1
     */
    FluoroscopicAngiogramGuidanceForRemovalOfCatheterFromCentralVeinWContrastIV = "72548-1",
    /**
     * Code: 72549-9
     */
    FluoroscopyGuidanceForRemovalOfCatheterFromCentralVeinTunneled = "72549-9",
    /**
     * Code: 72550-7
     */
    FluoroscopyGuidanceForRepairOfCVACatheterWithPortOrPumpOfCentralVein = "72550-7",
    /**
     * Code: 72551-5
     */
    FluoroscopyGuidanceForRepairOfCVACatheterWithoutPortOrPumpOfCentralVein = "72551-5",
    /**
     * Code: 72552-3
     */
    FluoroscopyGuidanceForKyphoplastyOfSpineLumbar = "72552-3",
    /**
     * Code: 72553-1
     */
    FluoroscopyGuidanceForKyphoplastyOfSpineThoracic = "72553-1",
    /**
     * Code: 72554-9
     */
    FluoroscopyGuidanceForTriggerPointInjectionOfMuscle = "72554-9",
    /**
     * Code: 72555-6
     */
    InterventionalRadiologyConsultNote = "72555-6",
    /**
     * Code: 72556-4
     */
    InterventionalRadiologyProgressNote = "72556-4",
    /**
     * Code: 72642-2
     */
    USGuidanceForInjectionOfSclerosingAgentOfExtremityVeinsRight = "72642-2",
    /**
     * Code: 72643-0
     */
    USGuidanceForInjectionOfSclerosingAgentOfExtremityVeinsLeft = "72643-0",
    /**
     * Code: 72644-8
     */
    USGuidanceForInjectionOfSclerosingAgentOfExtremityVeinRight = "72644-8",
    /**
     * Code: 72645-5
     */
    USGuidanceForInjectionOfSclerosingAgentOfExtremityVeinLeft = "72645-5",
    /**
     * Code: 72830-3
     */
    ExtremityArteriesBilateralUSDopplerMultisectionAndPhysiologicArteryStudy = "72830-3",
    /**
     * Code: 72831-1
     */
    ExtremityArteriesBilateralUSDopplerMultisectionLimitedAndPhysiologicArteryStudy = "72831-1",
    /**
     * Code: 72832-9
     */
    ExtremityArteriesBilateralUSDopplerMultisectionAndPhysiologicArteryStudyAtRestAndWithExercise = "72832-9",
    /**
     * Code: 72876-6
     */
    SurgicalSpecimenXRay = "72876-6",
    /**
     * Code: 73568-8
     */
    CommunicationOfCriticalResultsDescriptionDocument = "73568-8",
    /**
     * Code: 73569-6
     */
    RadiationExposureAndProtectionInformationDescriptionDocumentDiagnosticImaging = "73569-6",
    /**
     * Code: 73575-3
     */
    RadiologyConsultNote = "73575-3",
    /**
     * Code: 73709-8
     */
    PrescriptionRequestPharmacyDocumentFromPharmacist = "73709-8",
    /**
     * Code: 73815-3
     */
    FDAPackageInsertIndexingProductConcept = "73815-3",
    /**
     * Code: 73983-9
     */
    ReportSectionHeadingUnspecifiedBodyRegion = "73983-9",
    /**
     * Code: 74030-8
     */
    PeriodontalServiceAttachment = "74030-8",
    /**
     * Code: 74045-6
     */
    MeasureDescriptionNarrative = "74045-6",
    /**
     * Code: 74144-7
     */
    ComplexMedicalConditionsActionPlan = "74144-7",
    /**
     * Code: 74145-4
     */
    MultipleSclerosisActionPlan = "74145-4",
    /**
     * Code: 74146-2
     */
    HeartDiseaseActionPlan = "74146-2",
    /**
     * Code: 74147-0
     */
    MuscularDystrophyActionPlan = "74147-0",
    /**
     * Code: 74148-8
     */
    CysticFibrosisActionPlan = "74148-8",
    /**
     * Code: 74149-6
     */
    InflammatoryBowelDiseaseActionPlan = "74149-6",
    /**
     * Code: 74150-4
     */
    DiabetesTypeIActionPlan = "74150-4",
    /**
     * Code: 74151-2
     */
    DiabetesTypeIIActionPlan = "74151-2",
    /**
     * Code: 74152-0
     */
    AnaphylaxisActionPlan = "74152-0",
    /**
     * Code: 74153-8
     */
    SeizureDisorderActionPlan = "74153-8",
    /**
     * Code: 74154-6
     */
    AutismActionPlan = "74154-6",
    /**
     * Code: 74155-3
     */
    ADHDActionPlan = "74155-3",
    /**
     * Code: 74156-1
     */
    OncologyTreatmentPlanAndSummaryDocument = "74156-1",
    /**
     * Code: 74166-0
     */
    OccupationalSummaryNote = "74166-0",
    /**
     * Code: 74187-6
     */
    InterRAIEmergencyScreenerForPsychiatryESPDocument = "74187-6",
    /**
     * Code: 74188-4
     */
    InterRAIAcuteCareACHospitalDocument = "74188-4",
    /**
     * Code: 74189-2
     */
    InterRAIPalliativeCarePCDocument = "74189-2",
    /**
     * Code: 74190-0
     */
    InterRAICommunityHealthAssessmentDeafblindSupplementCHADbDocument = "74190-0",
    /**
     * Code: 74191-8
     */
    InterRAICommunityHealthAssessmentAssistedLivingSupplementCHAALDocument = "74191-8",
    /**
     * Code: 74192-6
     */
    InterRAICommunityHealthAssessmentMentalHealthSupplementCHAMHDocument = "74192-6",
    /**
     * Code: 74193-4
     */
    InterRAICommunityHealthAssessmentFunctionalSupplementCHAFSDocument = "74193-4",
    /**
     * Code: 74194-2
     */
    InterRAICommunityHealthAssessmentCHADocument = "74194-2",
    /**
     * Code: 74195-9
     */
    InterRAILongTermCareFacilityLTCFDocument = "74195-9",
    /**
     * Code: 74196-7
     */
    InterRAIHomeCareHCDocument = "74196-7",
    /**
     * Code: 74197-5
     */
    InterRAIContactAssessmentCADocument = "74197-5",
    /**
     * Code: 74198-3
     */
    TraumaSummaryRegistryReportDocument = "74198-3",
    /**
     * Code: 74207-2
     */
    PrehospitalSummaryDocument = "74207-2",
    /**
     * Code: 74208-0
     */
    DemographicInformationPlusHistoryOfOccupationDocument = "74208-0",
    /**
     * Code: 74209-8
     */
    InjuryEventSummaryDocument = "74209-8",
    /**
     * Code: 74211-4
     */
    SummaryOfEpisodeNoteEmergencyDepartmentPlusHospital = "74211-4",
    /**
     * Code: 74213-0
     */
    DischargeInstructions = "74213-0",
    /**
     * Code: 74264-3
     */
    HIVSummaryRegistryReportDocument = "74264-3",
    /**
     * Code: 74282-5
     */
    IndividualCounselingNote = "74282-5",
    /**
     * Code: 74465-6
     */
    QuestionnaireResponseSectionDocument = "74465-6",
    /**
     * Code: 74468-0
     */
    QuestionnaireFormDefinitionSectionDocument = "74468-0",
    /**
     * Code: 74476-3
     */
    ClinicalDocumentSettingFromLOINCDocumentOntology = "74476-3",
    /**
     * Code: 74477-1
     */
    ClinicalDocumentKindOfDocumentFromLOINCDocumentOntology = "74477-1",
    /**
     * Code: 74478-9
     */
    ClinicalDocumentTypeOfServiceFromLOINCDocumentOntology = "74478-9",
    /**
     * Code: 74479-7
     */
    ClinicalDocumentRoleFromLOINCDocumentOntology = "74479-7",
    /**
     * Code: 74480-5
     */
    ClinicalDocumentSubjectMatterDomainFromLOINCDocumentOntology = "74480-5",
    /**
     * Code: 8653-8
     */
    HospitalDischargeInstructions = "8653-8"
}
//# sourceMappingURL=C80DocTypecodesValueSetEnum.d.ts.map