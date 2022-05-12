/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export declare enum ProcedureNotPerformedReasonValueSetEnum {
    /**
     * Code: 105480006
     */
    RefusalOfTreatmentByPatient = "105480006",
    /**
     * Code: 116101000119100
     */
    ColonoscopyRefused = "116101000119100",
    /**
     * Code: 134385008
     */
    ReferralToDieticianDeclined = "134385008",
    /**
     * Code: 134386009
     */
    ReferralToChiropodistDeclined = "134386009",
    /**
     * Code: 134390006
     */
    AngiotensinConvertingEnzymeInhibitorNotIndicated = "134390006",
    /**
     * Code: 134391005
     */
    StatinNotIndicated = "134391005",
    /**
     * Code: 134392003
     */
    WarfarinNotIndicated = "134392003",
    /**
     * Code: 134394002
     */
    AspirinNotIndicated = "134394002",
    /**
     * Code: 134396000
     */
    StatinDeclined = "134396000",
    /**
     * Code: 134397009
     */
    AngiotensinConvertingEnzymeInhibitorDeclined = "134397009",
    /**
     * Code: 134398004
     */
    WarfarinDeclined = "134398004",
    /**
     * Code: 135805008
     */
    NitrateNotIndicated = "135805008",
    /**
     * Code: 135806009
     */
    CalciumChannelBlockerNotIndicated = "135806009",
    /**
     * Code: 135807000
     */
    LipidLoweringTherapyNotIndicated = "135807000",
    /**
     * Code: 135808005
     */
    DiureticNotIndicated = "135808005",
    /**
     * Code: 135809002
     */
    NitrateContraindicated = "135809002",
    /**
     * Code: 135811006
     */
    DiureticContraindicated = "135811006",
    /**
     * Code: 135812004
     */
    NitrateDeclined = "135812004",
    /**
     * Code: 135814003
     */
    DiureticDeclined = "135814003",
    /**
     * Code: 135822005
     */
    LipidLoweringTherapyContraindicated = "135822005",
    /**
     * Code: 135823000
     */
    CalciumChannelBlockerContraindicated = "135823000",
    /**
     * Code: 135825007
     */
    CalciumChannelBlockerDeclined = "135825007",
    /**
     * Code: 135826008
     */
    LipidLoweringTherapyDeclined = "135826008",
    /**
     * Code: 146922001
     */
    RubellaScreeningNotOffered = "146922001",
    /**
     * Code: 147022006
     */
    DoubleTestNotOffered = "147022006",
    /**
     * Code: 148324002
     */
    ScreeningNotOffered = "148324002",
    /**
     * Code: 148477008
     */
    ImmunizationNotOffered = "148477008",
    /**
     * Code: 162650008
     */
    PatientNotExamined = "162650008",
    /**
     * Code: 162675007
     */
    GeneralExaminationNotDone = "162675007",
    /**
     * Code: 162882008
     */
    RespiratorySystemNotExamined = "162882008",
    /**
     * Code: 162980001
     */
    CVSNotExamined = "162980001",
    /**
     * Code: 163128002
     */
    GITNotExamined = "163128002",
    /**
     * Code: 163348001
     */
    GUSystemNotExamined = "163348001",
    /**
     * Code: 163582008
     */
    NervousSystemNotExamined = "163582008",
    /**
     * Code: 163628001
     */
    SensorySystemNotExamined = "163628001",
    /**
     * Code: 163900009
     */
    OECNSNotExamined = "163900009",
    /**
     * Code: 164176006
     */
    ENTExaminationNotPerformed = "164176006",
    /**
     * Code: 164286000
     */
    OETemperatureNotTaken = "164286000",
    /**
     * Code: 164321005
     */
    OESkinNotExamined = "164321005",
    /**
     * Code: 164445005
     */
    OEExtremitiesNotExamined = "164445005",
    /**
     * Code: 164503006
     */
    OrthopedicExamNotDone = "164503006",
    /**
     * Code: 164713001
     */
    NeurologicalDiagnosticProcedureNotDone = "164713001",
    /**
     * Code: 164725003
     */
    VisualTestingNotDone = "164725003",
    /**
     * Code: 164746007
     */
    AuditoryVestibularTestNotDone = "164746007",
    /**
     * Code: 164766003
     */
    SpecialENTProcedureNotDone = "164766003",
    /**
     * Code: 164776000
     */
    SpecialCVSTestNotDone = "164776000",
    /**
     * Code: 164786004
     */
    SpecialGITTestNotDone = "164786004",
    /**
     * Code: 164795007
     */
    SpecialUrinaryTestNotDone = "164795007",
    /**
     * Code: 164808009
     */
    SpecialFemaleTestNotDone = "164808009",
    /**
     * Code: 164823004
     */
    SpecialMaleTestNotDone = "164823004",
    /**
     * Code: 164831009
     */
    MusculoskeletalTestNotDone = "164831009",
    /**
     * Code: 164853006
     */
    ECGNotDone = "164853006",
    /**
     * Code: 164964005
     */
    SusceptibilitySkinTestNotDone = "164964005",
    /**
     * Code: 164978006
     */
    MantouxTestNotDone = "164978006",
    /**
     * Code: 164985005
     */
    KveimTestNotDone = "164985005",
    /**
     * Code: 164997006
     */
    HypersensitivitySkinTestNotDone = "164997006",
    /**
     * Code: 165008002
     */
    AllergyTestingNotDone = "165008002",
    /**
     * Code: 165017002
     */
    LungFunctionTestingNotDone = "165017002",
    /**
     * Code: 165026004
     */
    LungVolumeTestNotDone = "165026004",
    /**
     * Code: 165035006
     */
    RespiratoryFlowRateNotMeasured = "165035006",
    /**
     * Code: 165074004
     */
    CardiacFunctionTestNotDone = "165074004",
    /**
     * Code: 165081006
     */
    ExerciseToleranceTestNotDone = "165081006",
    /**
     * Code: 165104002
     */
    MetabolicFunctionNotTested = "165104002",
    /**
     * Code: 165122004
     */
    NonSurgicalBiopsyNotDone = "165122004",
    /**
     * Code: 165139002
     */
    EndoscopyNotCarriedOut = "165139002",
    /**
     * Code: 165342003
     */
    PatientRefusedLaboratoryTest = "165342003",
    /**
     * Code: 165343008
     */
    LaboratoryTestRequestedNotDone = "165343008",
    /**
     * Code: 165376007
     */
    PatientRefusedHematologyTest = "165376007",
    /**
     * Code: 165377003
     */
    HematologyTestRequestNotDone = "165377003",
    /**
     * Code: 165393007
     */
    HemoglobinNotEstimated = "165393007",
    /**
     * Code: 167219008
     */
    UrineNotExamined = "167219008",
    /**
     * Code: 167260001
     */
    UrineGlucoseTestNotDone = "167260001",
    /**
     * Code: 167272007
     */
    UrineProteinTestNotDone = "167272007",
    /**
     * Code: 167286006
     */
    UrineKetoneTestNotDone = "167286006",
    /**
     * Code: 167296002
     */
    UrineBloodTestNotDone = "167296002",
    /**
     * Code: 167306007
     */
    UrinePHTestNotDone = "167306007",
    /**
     * Code: 167317008
     */
    UrineBacteriaTestNotDone = "167317008",
    /**
     * Code: 167322008
     */
    UrineUrobilinogenNotTested = "167322008",
    /**
     * Code: 167594003
     */
    FecesNotExamined = "167594003",
    /**
     * Code: 167701000
     */
    CSFNotExamined = "167701000",
    /**
     * Code: 167728005
     */
    CSFChemistryNotTested = "167728005",
    /**
     * Code: 168497006
     */
    RadiographicImagingProcedureNotCarriedOut = "168497006",
    /**
     * Code: 168499009
     */
    RadiologyRefused = "168499009",
    /**
     * Code: 168533005
     */
    RadiotherapyStopped = "168533005",
    /**
     * Code: 169551000
     */
    ContraceptionContraindicated = "169551000",
    /**
     * Code: 169607004
     */
    NoAntenatalCare = "169607004",
    /**
     * Code: 169608009
     */
    AntenatalCareNotOffered = "169608009",
    /**
     * Code: 169609001
     */
    AntenatalCareNotWanted = "169609001",
    /**
     * Code: 169610006
     */
    AntenatalCareNotAttended = "169610006",
    /**
     * Code: 169611005
     */
    NoAntenatalCareNotKnownPregnant = "169611005",
    /**
     * Code: 169635000
     */
    ParentCraftNotWanted = "169635000",
    /**
     * Code: 169649009
     */
    ANAmniocentesisNotWanted = "169649009",
    /**
     * Code: 169660000
     */
    ANUSScanNotWanted = "169660000",
    /**
     * Code: 169687001
     */
    AlphaFetoproteinGeneAFPBloodTestNotWanted = "169687001",
    /**
     * Code: 169693009
     */
    RubellaScreeningNotWanted = "169693009",
    /**
     * Code: 169699008
     */
    AntenatalSyphilisScreeningNotDone = "169699008",
    /**
     * Code: 169704000
     */
    AntenatalBloodGroupScreeningNotDone = "169704000",
    /**
     * Code: 169708002
     */
    AntenatalSickleScreeningNotDone = "169708002",
    /**
     * Code: 169795009
     */
    TripleTestNotWanted = "169795009",
    /**
     * Code: 169796005
     */
    DoubleTestNotWanted = "169796005",
    /**
     * Code: 170100005
     */
    ChildNotExaminedAtBirth = "170100005",
    /**
     * Code: 170108003
     */
    ChildNotExaminedAt10Days = "170108003",
    /**
     * Code: 170115006
     */
    Child6WeekExaminationNotOffered = "170115006",
    /**
     * Code: 170116007
     */
    Child6WeekExaminationNotWanted = "170116007",
    /**
     * Code: 170117003
     */
    Child6WeekExaminationNotAttended = "170117003",
    /**
     * Code: 170124002
     */
    VAL89MonthExamNotOffered = "170124002",
    /**
     * Code: 170125001
     */
    VAL89MonthExamNotWanted = "170125001",
    /**
     * Code: 170126000
     */
    VAL89MonthExamNotAttended = "170126000",
    /**
     * Code: 170133000
     */
    VAL18MonthExaminationNotOffered = "170133000",
    /**
     * Code: 170134006
     */
    VAL18MonthExaminationNotWanted = "170134006",
    /**
     * Code: 170135007
     */
    VAL18MonthExaminationNotAttended = "170135007",
    /**
     * Code: 170142007
     */
    VAL25YearExaminationNotOffered = "170142007",
    /**
     * Code: 170143002
     */
    VAL25YearExaminationNotWanted = "170143002",
    /**
     * Code: 170144008
     */
    VAL25YearExaminationNotAttended = "170144008",
    /**
     * Code: 170151004
     */
    VAL35YearExaminationNotOffered = "170151004",
    /**
     * Code: 170152006
     */
    VAL35YearExaminationNotWanted = "170152006",
    /**
     * Code: 170153001
     */
    VAL35YearExaminationNotAttended = "170153001",
    /**
     * Code: 170160007
     */
    VAL45YearExaminationNotOffered = "170160007",
    /**
     * Code: 170161006
     */
    VAL45YearExaminationNotWanted = "170161006",
    /**
     * Code: 170162004
     */
    VAL45YearExaminationNotAttended = "170162004",
    /**
     * Code: 170169008
     */
    VAL10YearExaminationNotOffered = "170169008",
    /**
     * Code: 170170009
     */
    VAL10YearExaminationNotWanted = "170170009",
    /**
     * Code: 170171008
     */
    VAL10YearExaminationNotAttended = "170171008",
    /**
     * Code: 170178002
     */
    VAL15YearExaminationNotOffered = "170178002",
    /**
     * Code: 170179005
     */
    VAL15YearExaminationNotWanted = "170179005",
    /**
     * Code: 170180008
     */
    VAL15YearExaminationNotAttended = "170180008",
    /**
     * Code: 170255003
     */
    Child1YearExaminationNotOffered = "170255003",
    /**
     * Code: 170256002
     */
    Child1YearExaminationNotWanted = "170256002",
    /**
     * Code: 170257006
     */
    Child1YearExaminationNotAttended = "170257006",
    /**
     * Code: 170264008
     */
    Child6MonthExaminationNotOffered = "170264008",
    /**
     * Code: 170265009
     */
    Child6MonthExaminationNotWanted = "170265009",
    /**
     * Code: 170266005
     */
    Child6MonthExaminationNotAttended = "170266005",
    /**
     * Code: 170273000
     */
    Child21MonthExaminationNotOffered = "170273000",
    /**
     * Code: 170274006
     */
    Child21MonthExaminationNotWanted = "170274006",
    /**
     * Code: 170275007
     */
    Child21MonthExaminationNotAttended = "170275007",
    /**
     * Code: 170282006
     */
    Child3YearExamNotOffered = "170282006",
    /**
     * Code: 170283001
     */
    Child3YearExamNotWanted = "170283001",
    /**
     * Code: 170284007
     */
    Child3YearExamNotAttended = "170284007",
    /**
     * Code: 170291005
     */
    Child39MonthExaminationNotOffered = "170291005",
    /**
     * Code: 170292003
     */
    Child39MonthExaminationNotWanted = "170292003",
    /**
     * Code: 170293008
     */
    Child39MonthExaminationNotAttended = "170293008",
    /**
     * Code: 170301000
     */
    Child8WeekExaminationNotOffered = "170301000",
    /**
     * Code: 170302007
     */
    Child8WeekExaminationNotWanted = "170302007",
    /**
     * Code: 170304008
     */
    Child8WeekExaminationNotAttended = "170304008",
    /**
     * Code: 170585007
     */
    CardiacDiseaseTreatmentStopped = "170585007",
    /**
     * Code: 170588009
     */
    TreatmentForHypertensionStopped = "170588009",
    /**
     * Code: 170620005
     */
    RespiratoryDiseaseTreatmentStopped = "170620005",
    /**
     * Code: 170621009
     */
    HomeOxygenSupplyStopped = "170621009",
    /**
     * Code: 170624001
     */
    OralSteroidsStopped = "170624001",
    /**
     * Code: 170675003
     */
    GastrointestinalTractTreatmentStopped = "170675003",
    /**
     * Code: 170687005
     */
    PsychiatricTreatmentStopped = "170687005",
    /**
     * Code: 170688000
     */
    LithiumStopped = "170688000",
    /**
     * Code: 170689008
     */
    InjectablePhenothiazineStopped = "170689008",
    /**
     * Code: 170700002
     */
    NeurologicalDisorderTreatmentStopped = "170700002",
    /**
     * Code: 170712003
     */
    EpilepsyTreatmentStopped = "170712003",
    /**
     * Code: 170725006
     */
    OphthalmologicalTreatmentStopped = "170725006",
    /**
     * Code: 170800007
     */
    TreatmentOfObesityStopped = "170800007",
    /**
     * Code: 170816009
     */
    EndocrineDiseaseTreatmentStopped = "170816009",
    /**
     * Code: 170826002
     */
    B12InjectionsStopped = "170826002",
    /**
     * Code: 170834008
     */
    BloodDisorderTreatmentStopped = "170834008",
    /**
     * Code: 170843004
     */
    AllergicDisorderTreatmentStopped = "170843004",
    /**
     * Code: 170854009
     */
    RheumatologyDisorderTreatmentStopped = "170854009",
    /**
     * Code: 170863006
     */
    SkinDisorderTreatmentStopped = "170863006",
    /**
     * Code: 170872003
     */
    GynecologicalDisorderTreatmentStopped = "170872003",
    /**
     * Code: 170882002
     */
    UrinaryDisorderTreatmentStopped = "170882002",
    /**
     * Code: 170894006
     */
    ENTDiseaseTreatmentStopped = "170894006",
    /**
     * Code: 170904002
     */
    OstomyTreatmentStopped = "170904002",
    /**
     * Code: 170912005
     */
    HighRiskTreatmentStopped = "170912005",
    /**
     * Code: 170919001
     */
    WarfarinTherapyStopped = "170919001",
    /**
     * Code: 170929008
     */
    RepeatPrescriptionTreatmentStopped = "170929008",
    /**
     * Code: 170954008
     */
    HormoneReplacementTherapyHRTContraindicated = "170954008",
    /**
     * Code: 170958006
     */
    HormonalReplacementTherapyHRTStopped = "170958006",
    /**
     * Code: 171034000
     */
    HealthEducationNotWanted = "171034000",
    /**
     * Code: 171103002
     */
    ScreeningNotWanted = "171103002",
    /**
     * Code: 171152003
     */
    CancerOfCervixScreeningNotWanted = "171152003",
    /**
     * Code: 171277005
     */
    SensitivityCIImmunization = "171277005",
    /**
     * Code: 171284002
     */
    PertussisVaccineContraindicated = "171284002",
    /**
     * Code: 180863000
     */
    OperationAborted = "180863000",
    /**
     * Code: 182840001
     */
    DrugTreatmentStoppedMedicalAdvice = "182840001",
    /**
     * Code: 182841002
     */
    DrStoppedDrugsIneffective = "182841002",
    /**
     * Code: 182842009
     */
    DoctorStoppedDrugsSideEffect = "182842009",
    /**
     * Code: 182843004
     */
    DrStoppedDrugsInconvenient = "182843004",
    /**
     * Code: 182844005
     */
    DoctorStoppedDrugsPatientDislikes = "182844005",
    /**
     * Code: 182845006
     */
    DoctorStoppedDrugsAvoidInteraction = "182845006",
    /**
     * Code: 182846007
     */
    DoctorStoppedDrugsMedicalAimAchieved = "182846007",
    /**
     * Code: 182849000
     */
    NoDrugTherapyPrescribed = "182849000",
    /**
     * Code: 182895007
     */
    DrugDeclinedByPatient = "182895007",
    /**
     * Code: 182896008
     */
    DrugDeclinedByPatientDislikesTaste = "182896008",
    /**
     * Code: 182897004
     */
    DrugDeclinedByPatientSideEffects = "182897004",
    /**
     * Code: 182898009
     */
    DrugDeclinedByPatientInconvenient = "182898009",
    /**
     * Code: 182899001
     */
    DrugDeclinedByPatientProblemSwallowing = "182899001",
    /**
     * Code: 182900006
     */
    DrugDeclinedByPatientPatientBeliefs = "182900006",
    /**
     * Code: 182901005
     */
    DrugDeclinedByPatientAlternativeTherapy = "182901005",
    /**
     * Code: 182902003
     */
    DrugDeclinedByPatientCannotPayScript = "182902003",
    /**
     * Code: 182903008
     */
    DrugDeclinedByPatientReasonUnknown = "182903008",
    /**
     * Code: 183928007
     */
    ResidenceRemoteFromMedicalCare = "183928007",
    /**
     * Code: 183929004
     */
    NoHomeMedicalServices = "183929004",
    /**
     * Code: 183930009
     */
    AwaitingAdmissionElsewhere = "183930009",
    /**
     * Code: 183934000
     */
    SensitivityContraindicationToProcedure = "183934000",
    /**
     * Code: 183936003
     */
    ContraindicationToLiveImmunization = "183936003",
    /**
     * Code: 183945002
     */
    ProcedureRefusedForReligiousReason = "183945002",
    /**
     * Code: 183946001
     */
    ProcedureRefusedUncooperative = "183946001",
    /**
     * Code: 183947005
     */
    RefusedProcedureAfterThought = "183947005",
    /**
     * Code: 183948000
     */
    RefusedProcedureParentQuoteSWish = "183948000",
    /**
     * Code: 183949008
     */
    AssessmentExaminationRefused = "183949008",
    /**
     * Code: 183956002
     */
    CareHelpRefusedByPatient = "183956002",
    /**
     * Code: 183957006
     */
    PatientRefusesDayHospital = "183957006",
    /**
     * Code: 183958001
     */
    RefusesMealsOnWheels = "183958001",
    /**
     * Code: 183959009
     */
    SocialServicesHelpRefused = "183959009",
    /**
     * Code: 183960004
     */
    PatientRefusesHospitalAdmit = "183960004",
    /**
     * Code: 183961000
     */
    PartIIIAccommodationRefused = "183961000",
    /**
     * Code: 183962007
     */
    PatientNonCompliantWithSpecificAdvice = "183962007",
    /**
     * Code: 183964008
     */
    TreatmentNotIndicated = "183964008",
    /**
     * Code: 183965009
     */
    SurgeryNotIndicated = "183965009",
    /**
     * Code: 183966005
     */
    DrugTreatmentNotIndicated = "183966005",
    /**
     * Code: 184163005
     */
    ChildSurveillanceNotWanted = "184163005",
    /**
     * Code: 185754009
     */
    RefusesDiabetesMonitoring = "185754009",
    /**
     * Code: 266756008
     */
    MedicalCareUnavailable = "266756008",
    /**
     * Code: 266757004
     */
    MedicalContraindicationToProcedure = "266757004",
    /**
     * Code: 266758009
     */
    ImmunizationContraindicated = "266758009",
    /**
     * Code: 266881002
     */
    NoHistoryTaken = "266881002",
    /**
     * Code: 268521004
     */
    ThyroidDiseaseTreatmentStopped = "268521004",
    /**
     * Code: 268560002
     */
    MedicalCIImmunization = "268560002",
    /**
     * Code: 274512008
     */
    DrugTherapyDiscontinued = "274512008",
    /**
     * Code: 275935009
     */
    SurgeryContraindicated = "275935009",
    /**
     * Code: 275936005
     */
    PatientNoncomplianceGeneral = "275936005",
    /**
     * Code: 275974002
     */
    MeaslesMumpsRubellaVaccineContraindicated = "275974002",
    /**
     * Code: 288120003
     */
    OperationAbandonedBeforeOnset = "288120003",
    /**
     * Code: 309841001
     */
    ThyroxineTreatmentStopped = "309841001",
    /**
     * Code: 309846006
     */
    TreatmentNotAvailable = "309846006",
    /**
     * Code: 310352003
     */
    MammographyNotAttended = "310352003",
    /**
     * Code: 312451002
     */
    AspirinProphylaxisContraIndicated = "312451002",
    /**
     * Code: 314374001
     */
    VAL360DegreeSweepOfCervixNotPerformed = "314374001",
    /**
     * Code: 314553311000087102
     */
    DecidedToWaitForASpecificProvider = "314553311000087102",
    /**
     * Code: 315020006
     */
    BetaBlockerTherapyRefused = "315020006",
    /**
     * Code: 315021005
     */
    RefusesCHDMonitoring = "315021005",
    /**
     * Code: 315022003
     */
    NicotineReplacementTherapyRefused = "315022003",
    /**
     * Code: 315023008
     */
    AspirinProphylaxisRefused = "315023008",
    /**
     * Code: 315061006
     */
    WarfarinContraindicated = "315061006",
    /**
     * Code: 315062004
     */
    BetaBlockerContraindicated = "315062004",
    /**
     * Code: 315214003
     */
    BetaBlockerNotIndicated = "315214003",
    /**
     * Code: 315363002
     */
    StatinsContraindicated = "315363002",
    /**
     * Code: 315364008
     */
    AngiotensinConvertingEnzymeInhibitorsContraindicated = "315364008",
    /**
     * Code: 315591006
     */
    FibratesContraindicated = "315591006",
    /**
     * Code: 315640000
     */
    InfluenzaVaccinationDeclined = "315640000",
    /**
     * Code: 371138003
     */
    RefusalOfTreatmentByParents = "371138003",
    /**
     * Code: 371900001
     */
    MedicationNotAdministered = "371900001",
    /**
     * Code: 373147003
     */
    MedicationNotAdministeredBecauseContraindicated = "373147003",
    /**
     * Code: 373148008
     */
    ThrombolyticAgentNotAdministeredBecauseContraindicated = "373148008",
    /**
     * Code: 390795005
     */
    PneumococcalVaccinationContraindicated = "390795005",
    /**
     * Code: 390796006
     */
    InfluenzaVaccinationContraindicated = "390796006",
    /**
     * Code: 390848004
     */
    RetinaeNotExamined = "390848004",
    /**
     * Code: 390910005
     */
    ThrombolysisContraindicated = "390910005",
    /**
     * Code: 390914001
     */
    ThrombolyticTherapyRefused = "390914001",
    /**
     * Code: 391015007
     */
    OsteoporosisRiskAssessmentRefused = "391015007",
    /**
     * Code: 391016008
     */
    OsteoporosisRiskAssessmentDefaulted = "391016008",
    /**
     * Code: 391021006
     */
    OsteoporosisTreatmentStopped = "391021006",
    /**
     * Code: 394909009
     */
    SyringeDriverDiscontinued = "394909009",
    /**
     * Code: 394965000
     */
    UrineLeukocyteTestNotDone = "394965000",
    /**
     * Code: 394987009
     */
    AngiotensinIIReceptorAntagonistsContraindicated = "394987009",
    /**
     * Code: 395006008
     */
    MedicationStoppedInteraction = "395006008",
    /**
     * Code: 395007004
     */
    MedicationStoppedIneffective = "395007004",
    /**
     * Code: 395008009
     */
    MedicationStoppedContraIndication = "395008009",
    /**
     * Code: 395009001
     */
    MedicationStoppedSideEffect = "395009001",
    /**
     * Code: 395174005
     */
    NicotineReplacementTherapyContraindicated = "395174005",
    /**
     * Code: 395175006
     */
    BupropionContraindicated = "395175006",
    /**
     * Code: 395176007
     */
    BupropionRefused = "395176007",
    /**
     * Code: 395675007
     */
    OralContraceptivePillContraindicated = "395675007",
    /**
     * Code: 395703005
     */
    MeningitisCImmunizationRefused = "395703005",
    /**
     * Code: 396781004
     */
    NoChemotherapyANDORRadiationTherapyPriorToLymphadenectomy = "396781004",
    /**
     * Code: 397004005
     */
    ImmunophenotypicAnalysisNotPerformed = "397004005",
    /**
     * Code: 397023003
     */
    OperationNotCompleted = "397023003",
    /**
     * Code: 397399004
     */
    CellPhenotypingNotPerformed = "397399004",
    /**
     * Code: 399538001
     */
    CytogeneticStudyNotPerformed = "399538001",
    /**
     * Code: 401047000
     */
    HypertensionTreatmentRefused = "401047000",
    /**
     * Code: 401084003
     */
    AngiotensinIIReceptorAntagonistDeclined = "401084003",
    /**
     * Code: 401086001
     */
    PneumococcalVaccinationDeclined = "401086001",
    /**
     * Code: 401318002
     */
    ShuttleWalkingTestNotDone = "401318002",
    /**
     * Code: 406149000
     */
    MedicationRefused = "406149000",
    /**
     * Code: 407571005
     */
    ClopidogrelNotIndicated = "407571005",
    /**
     * Code: 407572003
     */
    AngiotensinIIReceptorAntagonistNotIndicated = "407572003",
    /**
     * Code: 407573008
     */
    InfluenzaVaccinationNotIndicated = "407573008",
    /**
     * Code: 407582002
     */
    ClopidogrelContraindicated = "407582002",
    /**
     * Code: 407583007
     */
    ClopidogrelDeclined = "407583007",
    /**
     * Code: 408339001
     */
    ThrombolysisTherapyNotIndicated = "408339001",
    /**
     * Code: 408396006
     */
    DiabeticRetinopathyScreeningNotIndicated = "408396006",
    /**
     * Code: 408397002
     */
    DiabeticFootExaminationNotIndicated = "408397002",
    /**
     * Code: 408398007
     */
    SmokingReviewNotIndicated = "408398007",
    /**
     * Code: 408504000
     */
    Child7MonthExaminationNotAttended = "408504000",
    /**
     * Code: 408505004
     */
    Child7MonthExaminationNotWanted = "408505004",
    /**
     * Code: 408506003
     */
    Child7MonthExaminationNotOffered = "408506003",
    /**
     * Code: 408548005
     */
    MagneticResonanceImagingScanDeclined = "408548005",
    /**
     * Code: 408549002
     */
    AngiocardiographyDeclined = "408549002",
    /**
     * Code: 408551003
     */
    ExerciseToleranceTestRefused = "408551003",
    /**
     * Code: 408558009
     */
    MultidisciplinaryTeamFallsAssessmentDeclined = "408558009",
    /**
     * Code: 408559001
     */
    PrimaryHealthCareTeamFallsAssessmentDeclined = "408559001",
    /**
     * Code: 408566000
     */
    EchocardiogramDeclined = "408566000",
    /**
     * Code: 408567009
     */
    CTScanBrainDeclined = "408567009",
    /**
     * Code: 408569007
     */
    DiagnosticProcedureDeclined = "408569007",
    /**
     * Code: 408572000
     */
    CarotidArteryDopplerDeclined = "408572000",
    /**
     * Code: 408778004
     */
    HepatitisBImmunizationDeclined = "408778004",
    /**
     * Code: 408791003
     */
    BCGVaccinationDeclined = "408791003",
    /**
     * Code: 408795007
     */
    VitaminKProphylaxisDeclined = "408795007",
    /**
     * Code: 408836004
     */
    SampleNotObtained = "408836004",
    /**
     * Code: 408837008
     */
    AmniocentesisSampleNotObtained = "408837008",
    /**
     * Code: 412713002
     */
    CoronaryArteriographyDeclined = "412713002",
    /**
     * Code: 412718006
     */
    ChlamydiaScreeningDeclined = "412718006",
    /**
     * Code: 412725004
     */
    MedicationReviewDeclined = "412725004",
    /**
     * Code: 412752009
     */
    DiabeticFootExaminationDeclined = "412752009",
    /**
     * Code: 412782003
     */
    InappropriateMedicationStopped = "412782003",
    /**
     * Code: 413122001
     */
    DiabeticRetinopathyScreeningRefused = "413122001",
    /**
     * Code: 413123006
     */
    BloodPressureProcedureRefused = "413123006",
    /**
     * Code: 413167008
     */
    CompressionBandagingNotIndicated = "413167008",
    /**
     * Code: 413310006
     */
    PatientNonCompliantRefusedAccessToServices = "413310006",
    /**
     * Code: 413311005
     */
    PatientNonCompliantRefusedInterventionSupport = "413311005",
    /**
     * Code: 413312003
     */
    PatientNonCompliantRefusedService = "413312003",
    /**
     * Code: 413558003
     */
    AnticoagulationContraindicated = "413558003",
    /**
     * Code: 413559006
     */
    AnticoagulationDeclined = "413559006",
    /**
     * Code: 413560001
     */
    AnticoagulationNotIndicated = "413560001",
    /**
     * Code: 413756001
     */
    CardiacRehabilitationDeclined = "413756001",
    /**
     * Code: 413812009
     */
    CervicalSmearNotIndicated = "413812009",
    /**
     * Code: 414055003
     */
    DrugDependenceHomeDetoxificationContraindicated = "414055003",
    /**
     * Code: 414120003
     */
    ERCPNotCompletedDueToAnatomicalDerangementsFromPreviousSurgery = "414120003",
    /**
     * Code: 414159007
     */
    ExerciseToleranceTestContraindicated = "414159007",
    /**
     * Code: 414677003
     */
    MetforminContraindicated = "414677003",
    /**
     * Code: 415119001
     */
    PneumococcalVaccinationNotIndicated = "415119001",
    /**
     * Code: 415570002
     */
    SpirometryNotIndicated = "415570002",
    /**
     * Code: 415571003
     */
    SpirometryReversibilityTestingContraindicated = "415571003",
    /**
     * Code: 415572005
     */
    SpirometryTestDeclined = "415572005",
    /**
     * Code: 415666001
     */
    AdministrationOfSulfonylureaContraindicated = "415666001",
    /**
     * Code: 415667005
     */
    AdministrationOfSulfonylureaNotIndicated = "415667005",
    /**
     * Code: 416091008
     */
    GlitazonesContraindicated = "416091008",
    /**
     * Code: 416126007
     */
    BisphosphonatesDeclined = "416126007",
    /**
     * Code: 416128008
     */
    NoPastHistoryOfProcedure = "416128008",
    /**
     * Code: 416475003
     */
    CombinedCalciumAndVitaminD3PreparationContraindicated = "416475003",
    /**
     * Code: 416522000
     */
    StrontiumRanelateDeclined = "416522000",
    /**
     * Code: 416664005
     */
    SelectiveEstrogenReceptorModulatorNotIndicated = "416664005",
    /**
     * Code: 416670004
     */
    GlitazonesNotIndicated = "416670004",
    /**
     * Code: 416678006
     */
    CombinedCalciumAndVitaminD3PreparationNotIndicated = "416678006",
    /**
     * Code: 416704001
     */
    DXAScanContraindicated = "416704001",
    /**
     * Code: 416741000
     */
    StrontiumRanelateNotIndicated = "416741000",
    /**
     * Code: 416759002
     */
    NonSteroidalAntiInflammatoryDrugsContraindicated = "416759002",
    /**
     * Code: 416888009
     */
    DXAScanDeclined = "416888009",
    /**
     * Code: 416996000
     */
    StrontiumRanelateContraindicated = "416996000",
    /**
     * Code: 417013004
     */
    DXAScanNotIndicated = "417013004",
    /**
     * Code: 417045009
     */
    CombinedCalciumAndVitaminD3PreparationDeclined = "417045009",
    /**
     * Code: 417101006
     */
    SelectiveEstrogenReceptorModulatorContraindicated = "417101006",
    /**
     * Code: 417114007
     */
    RefusedReferralToMinorAilmentsClinic = "417114007",
    /**
     * Code: 417128001
     */
    BisphosphonatesContraindicated = "417128001",
    /**
     * Code: 417218000
     */
    CarotidUltrasoundNotIndicated = "417218000",
    /**
     * Code: 417434004
     */
    BisphosphonatesNotIndicated = "417434004",
    /**
     * Code: 417512003
     */
    SelectiveEstrogenReceptorModulatorDeclined = "417512003",
    /**
     * Code: 418014008
     */
    ProcedureNotOrdered = "418014008",
    /**
     * Code: 418731009
     */
    NoStainApplied = "418731009",
    /**
     * Code: 425519007
     */
    CardiopulmonaryResuscitationDiscontinuedDueToMedicalControlOrder = "425519007",
    /**
     * Code: 425921008
     */
    CardiopulmonaryResuscitationDiscontinuedDueToDoNotResuscitateOrder = "425921008",
    /**
     * Code: 426544006
     */
    HistoryRefused = "426544006",
    /**
     * Code: 426970003
     */
    CardiopulmonaryResuscitationDiscontinuedDueToReturnOfSpontaneousCirculation = "426970003",
    /**
     * Code: 426999008
     */
    CardiopulmonaryResuscitationDiscontinuedDueToSignsOfDeath = "426999008",
    /**
     * Code: 427569000
     */
    CardiopulmonaryResuscitationDiscontinuedAsPerProtocol = "427569000",
    /**
     * Code: 428042006
     */
    MediumChainAcylCoenzymeADehydrogenaseDeficiencyScreeningTestDeclined = "428042006",
    /**
     * Code: 428073005
     */
    AlcoholConsumptionScreeningTestDeclined = "428073005",
    /**
     * Code: 428299008
     */
    SickleCellScreeningDeclined = "428299008",
    /**
     * Code: 428348004
     */
    CardiopulmonaryResuscitationNotAttempted = "428348004",
    /**
     * Code: 428650003
     */
    CongenitalHypothyroidismScreeningDeclined = "428650003",
    /**
     * Code: 428841003
     */
    CysticFibrosisScreeningDeclined = "428841003",
    /**
     * Code: 429284000
     */
    CVDRiskAssessmentDeclined = "429284000",
    /**
     * Code: 429688007
     */
    NurseTriageDeclined = "429688007",
    /**
     * Code: 429726000
     */
    PhenylketonuriaScreeningDeclined = "429726000",
    /**
     * Code: 429739001
     */
    PatientRefusedTransportation = "429739001",
    /**
     * Code: 430279008
     */
    DrugTreatmentStoppedAtEndOfClinicalTrial = "430279008",
    /**
     * Code: 438370008
     */
    VascularDiseaseRiskAssessmentDeclined = "438370008",
    /**
     * Code: 438604008
     */
    PeritonealDialysisTherapyDiscontinued = "438604008",
    /**
     * Code: 438765003
     */
    HumanPapillomavirusVaccinationDeclined = "438765003",
    /**
     * Code: 438767006
     */
    TerminationOfPregnancyContraindicated = "438767006",
    /**
     * Code: 438833006
     */
    AdministrationOfDrugOrMedicamentContraindicated = "438833006",
    /**
     * Code: 439495000
     */
    CounselingDeclined = "439495000",
    /**
     * Code: 439516000
     */
    HemodialysisTherapyDiscontinued = "439516000",
    /**
     * Code: 439867009
     */
    DeterminationOfPatternOfResistanceToAntiviralAgentNotDone = "439867009",
    /**
     * Code: 440621003
     */
    ReferralDeclinedByPatient = "440621003",
    /**
     * Code: 441989008
     */
    DelayedHypersensitivitySkinTestForHistoplasminNotDone = "441989008",
    /**
     * Code: 442324008
     */
    AntenatalScreeningDeclined = "442324008",
    /**
     * Code: 442392002
     */
    AmbulanceTransportToHospitalDeclined = "442392002",
    /**
     * Code: 442444001
     */
    ReferralToSpecialistAlcoholTreatmentServiceDeclinedByPatient = "442444001",
    /**
     * Code: 443788002
     */
    MaternalPostnatalExaminationNotAttended = "443788002",
    /**
     * Code: 444020006
     */
    MaternalPostnatalExaminationRefused = "444020006",
    /**
     * Code: 444062004
     */
    MaternalPostnatalExaminationNotOffered = "444062004",
    /**
     * Code: 4451000175106
     */
    AsthmaActionPlanNotDone = "4451000175106",
    /**
     * Code: 4461000175108
     */
    CervicalCancerScreeningNotDone = "4461000175108",
    /**
     * Code: 4471000175100
     */
    ColorectalCancerScreeningNotDone = "4471000175100",
    /**
     * Code: 4501000175108
     */
    HemoglobinA1CTestNotDone = "4501000175108",
    /**
     * Code: 4541000175105
     */
    SpirometryNotDone = "4541000175105",
    /**
     * Code: 4551000175107
     */
    DiabeticFootExamNotDone = "4551000175107",
    /**
     * Code: 4591000175100
     */
    BoneDensityScreeningNotDone = "4591000175100",
    /**
     * Code: 473149004
     */
    LongActingReversibleContraceptionDeclined = "473149004",
    /**
     * Code: 591000119102
     */
    VaccineRefusedByPatient = "591000119102",
    /**
     * Code: 5991000175105
     */
    PeakExpiratoryFlowNotDone = "5991000175105",
    /**
     * Code: 6021000175100
     */
    VaccinationForDiphtheriaPertussisAndTetanusNotDone = "6021000175100",
    /**
     * Code: 6031000175102
     */
    VaricellaVaccinationNotDone = "6031000175102",
    /**
     * Code: 6041000175108
     */
    HepatitisAVaccinationNotDone = "6041000175108",
    /**
     * Code: 6051000175105
     */
    HepatitisBVaccinationNotDone = "6051000175105",
    /**
     * Code: 698357006
     */
    AbdominalAorticAneurysmScreeningDeclined = "698357006",
    /**
     * Code: 698451006
     */
    AnkleBrachialPressureIndexTestDeclined = "698451006",
    /**
     * Code: 698459008
     */
    AntidepressantDrugTreatmentStopped = "698459008",
    /**
     * Code: 698460003
     */
    AntiviralTherapyDeclined = "698460003",
    /**
     * Code: 698468005
     */
    BisoprololContraindicated = "698468005",
    /**
     * Code: 698473004
     */
    BloodGlucoseTestDeclined = "698473004",
    /**
     * Code: 698483000
     */
    WeightManagementAdviceDeclined = "698483000",
    /**
     * Code: 698484006
     */
    MeasurementOfWaistCircumferenceDeclined = "698484006",
    /**
     * Code: 698490005
     */
    UrineDipstickTestDeclined = "698490005",
    /**
     * Code: 698521002
     */
    SimvastatinContraindicated = "698521002",
    /**
     * Code: 698569004
     */
    PostnatalDepressionNotDiscussed = "698569004",
    /**
     * Code: 698753008
     */
    NeverHadCervicalSmear = "698753008",
    /**
     * Code: 698758004
     */
    NebivololTherapyRefused = "698758004",
    /**
     * Code: 698950001
     */
    InfluenzaAVirusSubtypeH1N1VaccinationDeclined = "698950001",
    /**
     * Code: 699034004
     */
    HomeOxygenTherapyDeclined = "699034004",
    /**
     * Code: 699037006
     */
    HepatitisBVaccinationContraindicated = "699037006",
    /**
     * Code: 699042003
     */
    HistoryTakingOfSexualOrientationDeclined = "699042003",
    /**
     * Code: 699048004
     */
    ExerciseToleranceTestNotIndicated = "699048004",
    /**
     * Code: 699053009
     */
    FootPulseCheckDeclined = "699053009",
    /**
     * Code: 699054003
     */
    AdministrationOfBloodProductDeclined = "699054003",
    /**
     * Code: 699128009
     */
    BloodTransfusionDeclined = "699128009",
    /**
     * Code: 699137009
     */
    CarvedilolTherapyDeclined = "699137009",
    /**
     * Code: 699231000
     */
    DomesticAbuseNotDiscussed = "699231000",
    /**
     * Code: 700110004
     */
    BisphosphonateProphylaxisSuspended = "700110004",
    /**
     * Code: 700359005
     */
    BoosterMeningitisCVaccinationDeclined = "700359005",
    /**
     * Code: 700384008
     */
    AntibioticProphylaxisNotIndicated = "700384008",
    /**
     * Code: 700411009
     */
    RoutineEnquiryAboutDomesticAbuseDeclined = "700411009",
    /**
     * Code: 703427001
     */
    RefusalOfTreatmentByPatientAgainstDentalAdvice = "703427001",
    /**
     * Code: 703942005
     */
    NeverHadMammogram = "703942005",
    /**
     * Code: 703971006
     */
    HepatitisAVaccinationNotIndicated = "703971006",
    /**
     * Code: 703989007
     */
    TeriparatideTherapyDeclined = "703989007",
    /**
     * Code: 703991004
     */
    RaloxifeneTherapyDeclined = "703991004",
    /**
     * Code: 703992006
     */
    BreastfeedingSupportDeclined = "703992006",
    /**
     * Code: 703996009
     */
    TeriparatideNotIndicated = "703996009",
    /**
     * Code: 703997000
     */
    TeriparatideContraindicated = "703997000",
    /**
     * Code: 703999002
     */
    RaloxifeneContraindicated = "703999002",
    /**
     * Code: 704000000
     */
    RaloxifeneNotIndicated = "704000000",
    /**
     * Code: 704033005
     */
    Phosphodiesterase5InhibitorNotIndicated = "704033005",
    /**
     * Code: 704046000
     */
    MentalHealthAssessmentDeclined = "704046000",
    /**
     * Code: 704047009
     */
    Phosphodiesterase5InhibitorDeclined = "704047009",
    /**
     * Code: 704049007
     */
    ReferralToErectileDysfunctionClinicDeclined = "704049007",
    /**
     * Code: 704051006
     */
    ReferralToCardiacRehabilitationProgramDeclined = "704051006",
    /**
     * Code: 704052004
     */
    ReferralToCardiacRehabilitationProgramNotIndicated = "704052004",
    /**
     * Code: 704096004
     */
    ReferralToHeartFailureExerciseProgramNotIndicated = "704096004",
    /**
     * Code: 704097008
     */
    ReferralToHeartFailureExerciseProgramDeclined = "704097008",
    /**
     * Code: 705140004
     */
    PhysicalHealthAssessmentDeclined = "705140004",
    /**
     * Code: 706890009
     */
    VaginalBirthAfterPreviousCesareanSectionRefused = "706890009",
    /**
     * Code: 707287001
     */
    HepatitisBVaccinationNotIndicated = "707287001",
    /**
     * Code: 707298000
     */
    Phosphodiesterase5InhibitorContraindicated = "707298000",
    /**
     * Code: 707745004
     */
    TuberculosisScreeningDeclined = "707745004",
    /**
     * Code: 707746003
     */
    ScreeningChestXRayDeclined = "707746003",
    /**
     * Code: 707853004
     */
    TestingForEbolaVirusNotIndicated = "707853004",
    /**
     * Code: 708000007
     */
    InsulinTreatmentStopped = "708000007",
    /**
     * Code: 708129006
     */
    TransfusionOfBloodProductRefusedForReligiousReason = "708129006",
    /**
     * Code: 709198003
     */
    EducationNotIndicated = "709198003",
    /**
     * Code: 710765004
     */
    WoundDrainDiscontinued = "710765004",
    /**
     * Code: 712740006
     */
    MedicationMonitoringNotIndicated = "712740006",
    /**
     * Code: 712751006
     */
    RadiationTherapyNotDone = "712751006",
    /**
     * Code: 712790005
     */
    TripleTestNotOffered = "712790005",
    /**
     * Code: 712803007
     */
    AdministrationOfAntiDGlobulinNotOffered = "712803007",
    /**
     * Code: 712812009
     */
    AntenatalUltrasoundScanNotOffered = "712812009",
    /**
     * Code: 712851004
     */
    AlphaFetoproteinBloodTestNotOffered = "712851004",
    /**
     * Code: 712852006
     */
    AmniocentesisNotOffered = "712852006",
    /**
     * Code: 712854007
     */
    AntenatalScreeningForViralHepatitisTypeBNotOffered = "712854007",
    /**
     * Code: 712869008
     */
    AntenatalHIVHumanImmunodeficiencyVirusScreeningNotOffered = "712869008",
    /**
     * Code: 712870009
     */
    AntenatalRhesusAntibodyScreeningNotOffered = "712870009",
    /**
     * Code: 712872001
     */
    AntenatalThalassemiaScreeningNotOffered = "712872001",
    /**
     * Code: 712985002
     */
    ChemotherapyNotDone = "712985002",
    /**
     * Code: 712996005
     */
    ParentingEducationNotOffered = "712996005",
    /**
     * Code: 713068007
     */
    Over75YearsOfAgeHealthCheckDeclined = "713068007",
    /**
     * Code: 713207007
     */
    NeckDissectionNotDone = "713207007",
    /**
     * Code: 713246009
     */
    ProcedureDiscontinuedByHealthcareProfessional = "713246009",
    /**
     * Code: 713247000
     */
    ProcedureDiscontinuedByPatient = "713247000",
    /**
     * Code: 713248005
     */
    ProcedureDiscontinuedByDoctor = "713248005",
    /**
     * Code: 713615000
     */
    AdvanceCarePlanningDeclined = "713615000",
    /**
     * Code: 714747005
     */
    DiscussionAboutAdvanceCarePlanningDeclined = "714747005",
    /**
     * Code: 715163003
     */
    DiphtheriaVaccinationContraindicated = "715163003",
    /**
     * Code: 715166006
     */
    BacillusCalmetteGuerinVaccinationContraindicated = "715166006",
    /**
     * Code: 715508000
     */
    AssessmentUsingGeneralizedAnxietyDisorder7ItemScaleDeclined = "715508000",
    /**
     * Code: 715621003
     */
    HeartFailureEducationNotDone = "715621003",
    /**
     * Code: 715622005
     */
    WarfarinNotPrescribed = "715622005",
    /**
     * Code: 716048005
     */
    ReviewOfAdvanceCarePlanDeclined = "716048005",
    /**
     * Code: 914933391000087108
     */
    RequestProcedureDeferral = "914933391000087108",
    /**
     * Code: 921000119109
     */
    VaccineRefusedByParent = "921000119109"
}
//# sourceMappingURL=ProcedureNotPerformedReasonValueSetEnum.d.ts.map