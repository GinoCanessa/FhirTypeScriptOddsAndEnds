import { Coding } from '../fhir.js';
/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export declare const ProcedureNotPerformedReasonValueSet: {
    /**
     * Code: 105480006
     */
    readonly RefusalOfTreatmentByPatient: Coding;
    /**
     * Code: 116101000119100
     */
    readonly ColonoscopyRefused: Coding;
    /**
     * Code: 134385008
     */
    readonly ReferralToDieticianDeclined: Coding;
    /**
     * Code: 134386009
     */
    readonly ReferralToChiropodistDeclined: Coding;
    /**
     * Code: 134390006
     */
    readonly AngiotensinConvertingEnzymeInhibitorNotIndicated: Coding;
    /**
     * Code: 134391005
     */
    readonly StatinNotIndicated: Coding;
    /**
     * Code: 134392003
     */
    readonly WarfarinNotIndicated: Coding;
    /**
     * Code: 134394002
     */
    readonly AspirinNotIndicated: Coding;
    /**
     * Code: 134396000
     */
    readonly StatinDeclined: Coding;
    /**
     * Code: 134397009
     */
    readonly AngiotensinConvertingEnzymeInhibitorDeclined: Coding;
    /**
     * Code: 134398004
     */
    readonly WarfarinDeclined: Coding;
    /**
     * Code: 135805008
     */
    readonly NitrateNotIndicated: Coding;
    /**
     * Code: 135806009
     */
    readonly CalciumChannelBlockerNotIndicated: Coding;
    /**
     * Code: 135807000
     */
    readonly LipidLoweringTherapyNotIndicated: Coding;
    /**
     * Code: 135808005
     */
    readonly DiureticNotIndicated: Coding;
    /**
     * Code: 135809002
     */
    readonly NitrateContraindicated: Coding;
    /**
     * Code: 135811006
     */
    readonly DiureticContraindicated: Coding;
    /**
     * Code: 135812004
     */
    readonly NitrateDeclined: Coding;
    /**
     * Code: 135814003
     */
    readonly DiureticDeclined: Coding;
    /**
     * Code: 135822005
     */
    readonly LipidLoweringTherapyContraindicated: Coding;
    /**
     * Code: 135823000
     */
    readonly CalciumChannelBlockerContraindicated: Coding;
    /**
     * Code: 135825007
     */
    readonly CalciumChannelBlockerDeclined: Coding;
    /**
     * Code: 135826008
     */
    readonly LipidLoweringTherapyDeclined: Coding;
    /**
     * Code: 146922001
     */
    readonly RubellaScreeningNotOffered: Coding;
    /**
     * Code: 147022006
     */
    readonly DoubleTestNotOffered: Coding;
    /**
     * Code: 148324002
     */
    readonly ScreeningNotOffered: Coding;
    /**
     * Code: 148477008
     */
    readonly ImmunizationNotOffered: Coding;
    /**
     * Code: 162650008
     */
    readonly PatientNotExamined: Coding;
    /**
     * Code: 162675007
     */
    readonly GeneralExaminationNotDone: Coding;
    /**
     * Code: 162882008
     */
    readonly RespiratorySystemNotExamined: Coding;
    /**
     * Code: 162980001
     */
    readonly CVSNotExamined: Coding;
    /**
     * Code: 163128002
     */
    readonly GITNotExamined: Coding;
    /**
     * Code: 163348001
     */
    readonly GUSystemNotExamined: Coding;
    /**
     * Code: 163582008
     */
    readonly NervousSystemNotExamined: Coding;
    /**
     * Code: 163628001
     */
    readonly SensorySystemNotExamined: Coding;
    /**
     * Code: 163900009
     */
    readonly OECNSNotExamined: Coding;
    /**
     * Code: 164176006
     */
    readonly ENTExaminationNotPerformed: Coding;
    /**
     * Code: 164286000
     */
    readonly OETemperatureNotTaken: Coding;
    /**
     * Code: 164321005
     */
    readonly OESkinNotExamined: Coding;
    /**
     * Code: 164445005
     */
    readonly OEExtremitiesNotExamined: Coding;
    /**
     * Code: 164503006
     */
    readonly OrthopedicExamNotDone: Coding;
    /**
     * Code: 164713001
     */
    readonly NeurologicalDiagnosticProcedureNotDone: Coding;
    /**
     * Code: 164725003
     */
    readonly VisualTestingNotDone: Coding;
    /**
     * Code: 164746007
     */
    readonly AuditoryVestibularTestNotDone: Coding;
    /**
     * Code: 164766003
     */
    readonly SpecialENTProcedureNotDone: Coding;
    /**
     * Code: 164776000
     */
    readonly SpecialCVSTestNotDone: Coding;
    /**
     * Code: 164786004
     */
    readonly SpecialGITTestNotDone: Coding;
    /**
     * Code: 164795007
     */
    readonly SpecialUrinaryTestNotDone: Coding;
    /**
     * Code: 164808009
     */
    readonly SpecialFemaleTestNotDone: Coding;
    /**
     * Code: 164823004
     */
    readonly SpecialMaleTestNotDone: Coding;
    /**
     * Code: 164831009
     */
    readonly MusculoskeletalTestNotDone: Coding;
    /**
     * Code: 164853006
     */
    readonly ECGNotDone: Coding;
    /**
     * Code: 164964005
     */
    readonly SusceptibilitySkinTestNotDone: Coding;
    /**
     * Code: 164978006
     */
    readonly MantouxTestNotDone: Coding;
    /**
     * Code: 164985005
     */
    readonly KveimTestNotDone: Coding;
    /**
     * Code: 164997006
     */
    readonly HypersensitivitySkinTestNotDone: Coding;
    /**
     * Code: 165008002
     */
    readonly AllergyTestingNotDone: Coding;
    /**
     * Code: 165017002
     */
    readonly LungFunctionTestingNotDone: Coding;
    /**
     * Code: 165026004
     */
    readonly LungVolumeTestNotDone: Coding;
    /**
     * Code: 165035006
     */
    readonly RespiratoryFlowRateNotMeasured: Coding;
    /**
     * Code: 165074004
     */
    readonly CardiacFunctionTestNotDone: Coding;
    /**
     * Code: 165081006
     */
    readonly ExerciseToleranceTestNotDone: Coding;
    /**
     * Code: 165104002
     */
    readonly MetabolicFunctionNotTested: Coding;
    /**
     * Code: 165122004
     */
    readonly NonSurgicalBiopsyNotDone: Coding;
    /**
     * Code: 165139002
     */
    readonly EndoscopyNotCarriedOut: Coding;
    /**
     * Code: 165342003
     */
    readonly PatientRefusedLaboratoryTest: Coding;
    /**
     * Code: 165343008
     */
    readonly LaboratoryTestRequestedNotDone: Coding;
    /**
     * Code: 165376007
     */
    readonly PatientRefusedHematologyTest: Coding;
    /**
     * Code: 165377003
     */
    readonly HematologyTestRequestNotDone: Coding;
    /**
     * Code: 165393007
     */
    readonly HemoglobinNotEstimated: Coding;
    /**
     * Code: 167219008
     */
    readonly UrineNotExamined: Coding;
    /**
     * Code: 167260001
     */
    readonly UrineGlucoseTestNotDone: Coding;
    /**
     * Code: 167272007
     */
    readonly UrineProteinTestNotDone: Coding;
    /**
     * Code: 167286006
     */
    readonly UrineKetoneTestNotDone: Coding;
    /**
     * Code: 167296002
     */
    readonly UrineBloodTestNotDone: Coding;
    /**
     * Code: 167306007
     */
    readonly UrinePHTestNotDone: Coding;
    /**
     * Code: 167317008
     */
    readonly UrineBacteriaTestNotDone: Coding;
    /**
     * Code: 167322008
     */
    readonly UrineUrobilinogenNotTested: Coding;
    /**
     * Code: 167594003
     */
    readonly FecesNotExamined: Coding;
    /**
     * Code: 167701000
     */
    readonly CSFNotExamined: Coding;
    /**
     * Code: 167728005
     */
    readonly CSFChemistryNotTested: Coding;
    /**
     * Code: 168497006
     */
    readonly RadiographicImagingProcedureNotCarriedOut: Coding;
    /**
     * Code: 168499009
     */
    readonly RadiologyRefused: Coding;
    /**
     * Code: 168533005
     */
    readonly RadiotherapyStopped: Coding;
    /**
     * Code: 169551000
     */
    readonly ContraceptionContraindicated: Coding;
    /**
     * Code: 169607004
     */
    readonly NoAntenatalCare: Coding;
    /**
     * Code: 169608009
     */
    readonly AntenatalCareNotOffered: Coding;
    /**
     * Code: 169609001
     */
    readonly AntenatalCareNotWanted: Coding;
    /**
     * Code: 169610006
     */
    readonly AntenatalCareNotAttended: Coding;
    /**
     * Code: 169611005
     */
    readonly NoAntenatalCareNotKnownPregnant: Coding;
    /**
     * Code: 169635000
     */
    readonly ParentCraftNotWanted: Coding;
    /**
     * Code: 169649009
     */
    readonly ANAmniocentesisNotWanted: Coding;
    /**
     * Code: 169660000
     */
    readonly ANUSScanNotWanted: Coding;
    /**
     * Code: 169687001
     */
    readonly AlphaFetoproteinGeneAFPBloodTestNotWanted: Coding;
    /**
     * Code: 169693009
     */
    readonly RubellaScreeningNotWanted: Coding;
    /**
     * Code: 169699008
     */
    readonly AntenatalSyphilisScreeningNotDone: Coding;
    /**
     * Code: 169704000
     */
    readonly AntenatalBloodGroupScreeningNotDone: Coding;
    /**
     * Code: 169708002
     */
    readonly AntenatalSickleScreeningNotDone: Coding;
    /**
     * Code: 169795009
     */
    readonly TripleTestNotWanted: Coding;
    /**
     * Code: 169796005
     */
    readonly DoubleTestNotWanted: Coding;
    /**
     * Code: 170100005
     */
    readonly ChildNotExaminedAtBirth: Coding;
    /**
     * Code: 170108003
     */
    readonly ChildNotExaminedAt10Days: Coding;
    /**
     * Code: 170115006
     */
    readonly Child6WeekExaminationNotOffered: Coding;
    /**
     * Code: 170116007
     */
    readonly Child6WeekExaminationNotWanted: Coding;
    /**
     * Code: 170117003
     */
    readonly Child6WeekExaminationNotAttended: Coding;
    /**
     * Code: 170124002
     */
    readonly VAL89MonthExamNotOffered: Coding;
    /**
     * Code: 170125001
     */
    readonly VAL89MonthExamNotWanted: Coding;
    /**
     * Code: 170126000
     */
    readonly VAL89MonthExamNotAttended: Coding;
    /**
     * Code: 170133000
     */
    readonly VAL18MonthExaminationNotOffered: Coding;
    /**
     * Code: 170134006
     */
    readonly VAL18MonthExaminationNotWanted: Coding;
    /**
     * Code: 170135007
     */
    readonly VAL18MonthExaminationNotAttended: Coding;
    /**
     * Code: 170142007
     */
    readonly VAL25YearExaminationNotOffered: Coding;
    /**
     * Code: 170143002
     */
    readonly VAL25YearExaminationNotWanted: Coding;
    /**
     * Code: 170144008
     */
    readonly VAL25YearExaminationNotAttended: Coding;
    /**
     * Code: 170151004
     */
    readonly VAL35YearExaminationNotOffered: Coding;
    /**
     * Code: 170152006
     */
    readonly VAL35YearExaminationNotWanted: Coding;
    /**
     * Code: 170153001
     */
    readonly VAL35YearExaminationNotAttended: Coding;
    /**
     * Code: 170160007
     */
    readonly VAL45YearExaminationNotOffered: Coding;
    /**
     * Code: 170161006
     */
    readonly VAL45YearExaminationNotWanted: Coding;
    /**
     * Code: 170162004
     */
    readonly VAL45YearExaminationNotAttended: Coding;
    /**
     * Code: 170169008
     */
    readonly VAL10YearExaminationNotOffered: Coding;
    /**
     * Code: 170170009
     */
    readonly VAL10YearExaminationNotWanted: Coding;
    /**
     * Code: 170171008
     */
    readonly VAL10YearExaminationNotAttended: Coding;
    /**
     * Code: 170178002
     */
    readonly VAL15YearExaminationNotOffered: Coding;
    /**
     * Code: 170179005
     */
    readonly VAL15YearExaminationNotWanted: Coding;
    /**
     * Code: 170180008
     */
    readonly VAL15YearExaminationNotAttended: Coding;
    /**
     * Code: 170255003
     */
    readonly Child1YearExaminationNotOffered: Coding;
    /**
     * Code: 170256002
     */
    readonly Child1YearExaminationNotWanted: Coding;
    /**
     * Code: 170257006
     */
    readonly Child1YearExaminationNotAttended: Coding;
    /**
     * Code: 170264008
     */
    readonly Child6MonthExaminationNotOffered: Coding;
    /**
     * Code: 170265009
     */
    readonly Child6MonthExaminationNotWanted: Coding;
    /**
     * Code: 170266005
     */
    readonly Child6MonthExaminationNotAttended: Coding;
    /**
     * Code: 170273000
     */
    readonly Child21MonthExaminationNotOffered: Coding;
    /**
     * Code: 170274006
     */
    readonly Child21MonthExaminationNotWanted: Coding;
    /**
     * Code: 170275007
     */
    readonly Child21MonthExaminationNotAttended: Coding;
    /**
     * Code: 170282006
     */
    readonly Child3YearExamNotOffered: Coding;
    /**
     * Code: 170283001
     */
    readonly Child3YearExamNotWanted: Coding;
    /**
     * Code: 170284007
     */
    readonly Child3YearExamNotAttended: Coding;
    /**
     * Code: 170291005
     */
    readonly Child39MonthExaminationNotOffered: Coding;
    /**
     * Code: 170292003
     */
    readonly Child39MonthExaminationNotWanted: Coding;
    /**
     * Code: 170293008
     */
    readonly Child39MonthExaminationNotAttended: Coding;
    /**
     * Code: 170301000
     */
    readonly Child8WeekExaminationNotOffered: Coding;
    /**
     * Code: 170302007
     */
    readonly Child8WeekExaminationNotWanted: Coding;
    /**
     * Code: 170304008
     */
    readonly Child8WeekExaminationNotAttended: Coding;
    /**
     * Code: 170585007
     */
    readonly CardiacDiseaseTreatmentStopped: Coding;
    /**
     * Code: 170588009
     */
    readonly TreatmentForHypertensionStopped: Coding;
    /**
     * Code: 170620005
     */
    readonly RespiratoryDiseaseTreatmentStopped: Coding;
    /**
     * Code: 170621009
     */
    readonly HomeOxygenSupplyStopped: Coding;
    /**
     * Code: 170624001
     */
    readonly OralSteroidsStopped: Coding;
    /**
     * Code: 170675003
     */
    readonly GastrointestinalTractTreatmentStopped: Coding;
    /**
     * Code: 170687005
     */
    readonly PsychiatricTreatmentStopped: Coding;
    /**
     * Code: 170688000
     */
    readonly LithiumStopped: Coding;
    /**
     * Code: 170689008
     */
    readonly InjectablePhenothiazineStopped: Coding;
    /**
     * Code: 170700002
     */
    readonly NeurologicalDisorderTreatmentStopped: Coding;
    /**
     * Code: 170712003
     */
    readonly EpilepsyTreatmentStopped: Coding;
    /**
     * Code: 170725006
     */
    readonly OphthalmologicalTreatmentStopped: Coding;
    /**
     * Code: 170800007
     */
    readonly TreatmentOfObesityStopped: Coding;
    /**
     * Code: 170816009
     */
    readonly EndocrineDiseaseTreatmentStopped: Coding;
    /**
     * Code: 170826002
     */
    readonly B12InjectionsStopped: Coding;
    /**
     * Code: 170834008
     */
    readonly BloodDisorderTreatmentStopped: Coding;
    /**
     * Code: 170843004
     */
    readonly AllergicDisorderTreatmentStopped: Coding;
    /**
     * Code: 170854009
     */
    readonly RheumatologyDisorderTreatmentStopped: Coding;
    /**
     * Code: 170863006
     */
    readonly SkinDisorderTreatmentStopped: Coding;
    /**
     * Code: 170872003
     */
    readonly GynecologicalDisorderTreatmentStopped: Coding;
    /**
     * Code: 170882002
     */
    readonly UrinaryDisorderTreatmentStopped: Coding;
    /**
     * Code: 170894006
     */
    readonly ENTDiseaseTreatmentStopped: Coding;
    /**
     * Code: 170904002
     */
    readonly OstomyTreatmentStopped: Coding;
    /**
     * Code: 170912005
     */
    readonly HighRiskTreatmentStopped: Coding;
    /**
     * Code: 170919001
     */
    readonly WarfarinTherapyStopped: Coding;
    /**
     * Code: 170929008
     */
    readonly RepeatPrescriptionTreatmentStopped: Coding;
    /**
     * Code: 170954008
     */
    readonly HormoneReplacementTherapyHRTContraindicated: Coding;
    /**
     * Code: 170958006
     */
    readonly HormonalReplacementTherapyHRTStopped: Coding;
    /**
     * Code: 171034000
     */
    readonly HealthEducationNotWanted: Coding;
    /**
     * Code: 171103002
     */
    readonly ScreeningNotWanted: Coding;
    /**
     * Code: 171152003
     */
    readonly CancerOfCervixScreeningNotWanted: Coding;
    /**
     * Code: 171277005
     */
    readonly SensitivityCIImmunization: Coding;
    /**
     * Code: 171284002
     */
    readonly PertussisVaccineContraindicated: Coding;
    /**
     * Code: 180863000
     */
    readonly OperationAborted: Coding;
    /**
     * Code: 182840001
     */
    readonly DrugTreatmentStoppedMedicalAdvice: Coding;
    /**
     * Code: 182841002
     */
    readonly DrStoppedDrugsIneffective: Coding;
    /**
     * Code: 182842009
     */
    readonly DoctorStoppedDrugsSideEffect: Coding;
    /**
     * Code: 182843004
     */
    readonly DrStoppedDrugsInconvenient: Coding;
    /**
     * Code: 182844005
     */
    readonly DoctorStoppedDrugsPatientDislikes: Coding;
    /**
     * Code: 182845006
     */
    readonly DoctorStoppedDrugsAvoidInteraction: Coding;
    /**
     * Code: 182846007
     */
    readonly DoctorStoppedDrugsMedicalAimAchieved: Coding;
    /**
     * Code: 182849000
     */
    readonly NoDrugTherapyPrescribed: Coding;
    /**
     * Code: 182895007
     */
    readonly DrugDeclinedByPatient: Coding;
    /**
     * Code: 182896008
     */
    readonly DrugDeclinedByPatientDislikesTaste: Coding;
    /**
     * Code: 182897004
     */
    readonly DrugDeclinedByPatientSideEffects: Coding;
    /**
     * Code: 182898009
     */
    readonly DrugDeclinedByPatientInconvenient: Coding;
    /**
     * Code: 182899001
     */
    readonly DrugDeclinedByPatientProblemSwallowing: Coding;
    /**
     * Code: 182900006
     */
    readonly DrugDeclinedByPatientPatientBeliefs: Coding;
    /**
     * Code: 182901005
     */
    readonly DrugDeclinedByPatientAlternativeTherapy: Coding;
    /**
     * Code: 182902003
     */
    readonly DrugDeclinedByPatientCannotPayScript: Coding;
    /**
     * Code: 182903008
     */
    readonly DrugDeclinedByPatientReasonUnknown: Coding;
    /**
     * Code: 183928007
     */
    readonly ResidenceRemoteFromMedicalCare: Coding;
    /**
     * Code: 183929004
     */
    readonly NoHomeMedicalServices: Coding;
    /**
     * Code: 183930009
     */
    readonly AwaitingAdmissionElsewhere: Coding;
    /**
     * Code: 183934000
     */
    readonly SensitivityContraindicationToProcedure: Coding;
    /**
     * Code: 183936003
     */
    readonly ContraindicationToLiveImmunization: Coding;
    /**
     * Code: 183945002
     */
    readonly ProcedureRefusedForReligiousReason: Coding;
    /**
     * Code: 183946001
     */
    readonly ProcedureRefusedUncooperative: Coding;
    /**
     * Code: 183947005
     */
    readonly RefusedProcedureAfterThought: Coding;
    /**
     * Code: 183948000
     */
    readonly RefusedProcedureParentQuoteSWish: Coding;
    /**
     * Code: 183949008
     */
    readonly AssessmentExaminationRefused: Coding;
    /**
     * Code: 183956002
     */
    readonly CareHelpRefusedByPatient: Coding;
    /**
     * Code: 183957006
     */
    readonly PatientRefusesDayHospital: Coding;
    /**
     * Code: 183958001
     */
    readonly RefusesMealsOnWheels: Coding;
    /**
     * Code: 183959009
     */
    readonly SocialServicesHelpRefused: Coding;
    /**
     * Code: 183960004
     */
    readonly PatientRefusesHospitalAdmit: Coding;
    /**
     * Code: 183961000
     */
    readonly PartIIIAccommodationRefused: Coding;
    /**
     * Code: 183962007
     */
    readonly PatientNonCompliantWithSpecificAdvice: Coding;
    /**
     * Code: 183964008
     */
    readonly TreatmentNotIndicated: Coding;
    /**
     * Code: 183965009
     */
    readonly SurgeryNotIndicated: Coding;
    /**
     * Code: 183966005
     */
    readonly DrugTreatmentNotIndicated: Coding;
    /**
     * Code: 184163005
     */
    readonly ChildSurveillanceNotWanted: Coding;
    /**
     * Code: 185754009
     */
    readonly RefusesDiabetesMonitoring: Coding;
    /**
     * Code: 266756008
     */
    readonly MedicalCareUnavailable: Coding;
    /**
     * Code: 266757004
     */
    readonly MedicalContraindicationToProcedure: Coding;
    /**
     * Code: 266758009
     */
    readonly ImmunizationContraindicated: Coding;
    /**
     * Code: 266881002
     */
    readonly NoHistoryTaken: Coding;
    /**
     * Code: 268521004
     */
    readonly ThyroidDiseaseTreatmentStopped: Coding;
    /**
     * Code: 268560002
     */
    readonly MedicalCIImmunization: Coding;
    /**
     * Code: 274512008
     */
    readonly DrugTherapyDiscontinued: Coding;
    /**
     * Code: 275935009
     */
    readonly SurgeryContraindicated: Coding;
    /**
     * Code: 275936005
     */
    readonly PatientNoncomplianceGeneral: Coding;
    /**
     * Code: 275974002
     */
    readonly MeaslesMumpsRubellaVaccineContraindicated: Coding;
    /**
     * Code: 288120003
     */
    readonly OperationAbandonedBeforeOnset: Coding;
    /**
     * Code: 309841001
     */
    readonly ThyroxineTreatmentStopped: Coding;
    /**
     * Code: 309846006
     */
    readonly TreatmentNotAvailable: Coding;
    /**
     * Code: 310352003
     */
    readonly MammographyNotAttended: Coding;
    /**
     * Code: 312451002
     */
    readonly AspirinProphylaxisContraIndicated: Coding;
    /**
     * Code: 314374001
     */
    readonly VAL360DegreeSweepOfCervixNotPerformed: Coding;
    /**
     * Code: 314553311000087102
     */
    readonly DecidedToWaitForASpecificProvider: Coding;
    /**
     * Code: 315020006
     */
    readonly BetaBlockerTherapyRefused: Coding;
    /**
     * Code: 315021005
     */
    readonly RefusesCHDMonitoring: Coding;
    /**
     * Code: 315022003
     */
    readonly NicotineReplacementTherapyRefused: Coding;
    /**
     * Code: 315023008
     */
    readonly AspirinProphylaxisRefused: Coding;
    /**
     * Code: 315061006
     */
    readonly WarfarinContraindicated: Coding;
    /**
     * Code: 315062004
     */
    readonly BetaBlockerContraindicated: Coding;
    /**
     * Code: 315214003
     */
    readonly BetaBlockerNotIndicated: Coding;
    /**
     * Code: 315363002
     */
    readonly StatinsContraindicated: Coding;
    /**
     * Code: 315364008
     */
    readonly AngiotensinConvertingEnzymeInhibitorsContraindicated: Coding;
    /**
     * Code: 315591006
     */
    readonly FibratesContraindicated: Coding;
    /**
     * Code: 315640000
     */
    readonly InfluenzaVaccinationDeclined: Coding;
    /**
     * Code: 371138003
     */
    readonly RefusalOfTreatmentByParents: Coding;
    /**
     * Code: 371900001
     */
    readonly MedicationNotAdministered: Coding;
    /**
     * Code: 373147003
     */
    readonly MedicationNotAdministeredBecauseContraindicated: Coding;
    /**
     * Code: 373148008
     */
    readonly ThrombolyticAgentNotAdministeredBecauseContraindicated: Coding;
    /**
     * Code: 390795005
     */
    readonly PneumococcalVaccinationContraindicated: Coding;
    /**
     * Code: 390796006
     */
    readonly InfluenzaVaccinationContraindicated: Coding;
    /**
     * Code: 390848004
     */
    readonly RetinaeNotExamined: Coding;
    /**
     * Code: 390910005
     */
    readonly ThrombolysisContraindicated: Coding;
    /**
     * Code: 390914001
     */
    readonly ThrombolyticTherapyRefused: Coding;
    /**
     * Code: 391015007
     */
    readonly OsteoporosisRiskAssessmentRefused: Coding;
    /**
     * Code: 391016008
     */
    readonly OsteoporosisRiskAssessmentDefaulted: Coding;
    /**
     * Code: 391021006
     */
    readonly OsteoporosisTreatmentStopped: Coding;
    /**
     * Code: 394909009
     */
    readonly SyringeDriverDiscontinued: Coding;
    /**
     * Code: 394965000
     */
    readonly UrineLeukocyteTestNotDone: Coding;
    /**
     * Code: 394987009
     */
    readonly AngiotensinIIReceptorAntagonistsContraindicated: Coding;
    /**
     * Code: 395006008
     */
    readonly MedicationStoppedInteraction: Coding;
    /**
     * Code: 395007004
     */
    readonly MedicationStoppedIneffective: Coding;
    /**
     * Code: 395008009
     */
    readonly MedicationStoppedContraIndication: Coding;
    /**
     * Code: 395009001
     */
    readonly MedicationStoppedSideEffect: Coding;
    /**
     * Code: 395174005
     */
    readonly NicotineReplacementTherapyContraindicated: Coding;
    /**
     * Code: 395175006
     */
    readonly BupropionContraindicated: Coding;
    /**
     * Code: 395176007
     */
    readonly BupropionRefused: Coding;
    /**
     * Code: 395675007
     */
    readonly OralContraceptivePillContraindicated: Coding;
    /**
     * Code: 395703005
     */
    readonly MeningitisCImmunizationRefused: Coding;
    /**
     * Code: 396781004
     */
    readonly NoChemotherapyANDORRadiationTherapyPriorToLymphadenectomy: Coding;
    /**
     * Code: 397004005
     */
    readonly ImmunophenotypicAnalysisNotPerformed: Coding;
    /**
     * Code: 397023003
     */
    readonly OperationNotCompleted: Coding;
    /**
     * Code: 397399004
     */
    readonly CellPhenotypingNotPerformed: Coding;
    /**
     * Code: 399538001
     */
    readonly CytogeneticStudyNotPerformed: Coding;
    /**
     * Code: 401047000
     */
    readonly HypertensionTreatmentRefused: Coding;
    /**
     * Code: 401084003
     */
    readonly AngiotensinIIReceptorAntagonistDeclined: Coding;
    /**
     * Code: 401086001
     */
    readonly PneumococcalVaccinationDeclined: Coding;
    /**
     * Code: 401318002
     */
    readonly ShuttleWalkingTestNotDone: Coding;
    /**
     * Code: 406149000
     */
    readonly MedicationRefused: Coding;
    /**
     * Code: 407571005
     */
    readonly ClopidogrelNotIndicated: Coding;
    /**
     * Code: 407572003
     */
    readonly AngiotensinIIReceptorAntagonistNotIndicated: Coding;
    /**
     * Code: 407573008
     */
    readonly InfluenzaVaccinationNotIndicated: Coding;
    /**
     * Code: 407582002
     */
    readonly ClopidogrelContraindicated: Coding;
    /**
     * Code: 407583007
     */
    readonly ClopidogrelDeclined: Coding;
    /**
     * Code: 408339001
     */
    readonly ThrombolysisTherapyNotIndicated: Coding;
    /**
     * Code: 408396006
     */
    readonly DiabeticRetinopathyScreeningNotIndicated: Coding;
    /**
     * Code: 408397002
     */
    readonly DiabeticFootExaminationNotIndicated: Coding;
    /**
     * Code: 408398007
     */
    readonly SmokingReviewNotIndicated: Coding;
    /**
     * Code: 408504000
     */
    readonly Child7MonthExaminationNotAttended: Coding;
    /**
     * Code: 408505004
     */
    readonly Child7MonthExaminationNotWanted: Coding;
    /**
     * Code: 408506003
     */
    readonly Child7MonthExaminationNotOffered: Coding;
    /**
     * Code: 408548005
     */
    readonly MagneticResonanceImagingScanDeclined: Coding;
    /**
     * Code: 408549002
     */
    readonly AngiocardiographyDeclined: Coding;
    /**
     * Code: 408551003
     */
    readonly ExerciseToleranceTestRefused: Coding;
    /**
     * Code: 408558009
     */
    readonly MultidisciplinaryTeamFallsAssessmentDeclined: Coding;
    /**
     * Code: 408559001
     */
    readonly PrimaryHealthCareTeamFallsAssessmentDeclined: Coding;
    /**
     * Code: 408566000
     */
    readonly EchocardiogramDeclined: Coding;
    /**
     * Code: 408567009
     */
    readonly CTScanBrainDeclined: Coding;
    /**
     * Code: 408569007
     */
    readonly DiagnosticProcedureDeclined: Coding;
    /**
     * Code: 408572000
     */
    readonly CarotidArteryDopplerDeclined: Coding;
    /**
     * Code: 408778004
     */
    readonly HepatitisBImmunizationDeclined: Coding;
    /**
     * Code: 408791003
     */
    readonly BCGVaccinationDeclined: Coding;
    /**
     * Code: 408795007
     */
    readonly VitaminKProphylaxisDeclined: Coding;
    /**
     * Code: 408836004
     */
    readonly SampleNotObtained: Coding;
    /**
     * Code: 408837008
     */
    readonly AmniocentesisSampleNotObtained: Coding;
    /**
     * Code: 412713002
     */
    readonly CoronaryArteriographyDeclined: Coding;
    /**
     * Code: 412718006
     */
    readonly ChlamydiaScreeningDeclined: Coding;
    /**
     * Code: 412725004
     */
    readonly MedicationReviewDeclined: Coding;
    /**
     * Code: 412752009
     */
    readonly DiabeticFootExaminationDeclined: Coding;
    /**
     * Code: 412782003
     */
    readonly InappropriateMedicationStopped: Coding;
    /**
     * Code: 413122001
     */
    readonly DiabeticRetinopathyScreeningRefused: Coding;
    /**
     * Code: 413123006
     */
    readonly BloodPressureProcedureRefused: Coding;
    /**
     * Code: 413167008
     */
    readonly CompressionBandagingNotIndicated: Coding;
    /**
     * Code: 413310006
     */
    readonly PatientNonCompliantRefusedAccessToServices: Coding;
    /**
     * Code: 413311005
     */
    readonly PatientNonCompliantRefusedInterventionSupport: Coding;
    /**
     * Code: 413312003
     */
    readonly PatientNonCompliantRefusedService: Coding;
    /**
     * Code: 413558003
     */
    readonly AnticoagulationContraindicated: Coding;
    /**
     * Code: 413559006
     */
    readonly AnticoagulationDeclined: Coding;
    /**
     * Code: 413560001
     */
    readonly AnticoagulationNotIndicated: Coding;
    /**
     * Code: 413756001
     */
    readonly CardiacRehabilitationDeclined: Coding;
    /**
     * Code: 413812009
     */
    readonly CervicalSmearNotIndicated: Coding;
    /**
     * Code: 414055003
     */
    readonly DrugDependenceHomeDetoxificationContraindicated: Coding;
    /**
     * Code: 414120003
     */
    readonly ERCPNotCompletedDueToAnatomicalDerangementsFromPreviousSurgery: Coding;
    /**
     * Code: 414159007
     */
    readonly ExerciseToleranceTestContraindicated: Coding;
    /**
     * Code: 414677003
     */
    readonly MetforminContraindicated: Coding;
    /**
     * Code: 415119001
     */
    readonly PneumococcalVaccinationNotIndicated: Coding;
    /**
     * Code: 415570002
     */
    readonly SpirometryNotIndicated: Coding;
    /**
     * Code: 415571003
     */
    readonly SpirometryReversibilityTestingContraindicated: Coding;
    /**
     * Code: 415572005
     */
    readonly SpirometryTestDeclined: Coding;
    /**
     * Code: 415666001
     */
    readonly AdministrationOfSulfonylureaContraindicated: Coding;
    /**
     * Code: 415667005
     */
    readonly AdministrationOfSulfonylureaNotIndicated: Coding;
    /**
     * Code: 416091008
     */
    readonly GlitazonesContraindicated: Coding;
    /**
     * Code: 416126007
     */
    readonly BisphosphonatesDeclined: Coding;
    /**
     * Code: 416128008
     */
    readonly NoPastHistoryOfProcedure: Coding;
    /**
     * Code: 416475003
     */
    readonly CombinedCalciumAndVitaminD3PreparationContraindicated: Coding;
    /**
     * Code: 416522000
     */
    readonly StrontiumRanelateDeclined: Coding;
    /**
     * Code: 416664005
     */
    readonly SelectiveEstrogenReceptorModulatorNotIndicated: Coding;
    /**
     * Code: 416670004
     */
    readonly GlitazonesNotIndicated: Coding;
    /**
     * Code: 416678006
     */
    readonly CombinedCalciumAndVitaminD3PreparationNotIndicated: Coding;
    /**
     * Code: 416704001
     */
    readonly DXAScanContraindicated: Coding;
    /**
     * Code: 416741000
     */
    readonly StrontiumRanelateNotIndicated: Coding;
    /**
     * Code: 416759002
     */
    readonly NonSteroidalAntiInflammatoryDrugsContraindicated: Coding;
    /**
     * Code: 416888009
     */
    readonly DXAScanDeclined: Coding;
    /**
     * Code: 416996000
     */
    readonly StrontiumRanelateContraindicated: Coding;
    /**
     * Code: 417013004
     */
    readonly DXAScanNotIndicated: Coding;
    /**
     * Code: 417045009
     */
    readonly CombinedCalciumAndVitaminD3PreparationDeclined: Coding;
    /**
     * Code: 417101006
     */
    readonly SelectiveEstrogenReceptorModulatorContraindicated: Coding;
    /**
     * Code: 417114007
     */
    readonly RefusedReferralToMinorAilmentsClinic: Coding;
    /**
     * Code: 417128001
     */
    readonly BisphosphonatesContraindicated: Coding;
    /**
     * Code: 417218000
     */
    readonly CarotidUltrasoundNotIndicated: Coding;
    /**
     * Code: 417434004
     */
    readonly BisphosphonatesNotIndicated: Coding;
    /**
     * Code: 417512003
     */
    readonly SelectiveEstrogenReceptorModulatorDeclined: Coding;
    /**
     * Code: 418014008
     */
    readonly ProcedureNotOrdered: Coding;
    /**
     * Code: 418731009
     */
    readonly NoStainApplied: Coding;
    /**
     * Code: 425519007
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToMedicalControlOrder: Coding;
    /**
     * Code: 425921008
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToDoNotResuscitateOrder: Coding;
    /**
     * Code: 426544006
     */
    readonly HistoryRefused: Coding;
    /**
     * Code: 426970003
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToReturnOfSpontaneousCirculation: Coding;
    /**
     * Code: 426999008
     */
    readonly CardiopulmonaryResuscitationDiscontinuedDueToSignsOfDeath: Coding;
    /**
     * Code: 427569000
     */
    readonly CardiopulmonaryResuscitationDiscontinuedAsPerProtocol: Coding;
    /**
     * Code: 428042006
     */
    readonly MediumChainAcylCoenzymeADehydrogenaseDeficiencyScreeningTestDeclined: Coding;
    /**
     * Code: 428073005
     */
    readonly AlcoholConsumptionScreeningTestDeclined: Coding;
    /**
     * Code: 428299008
     */
    readonly SickleCellScreeningDeclined: Coding;
    /**
     * Code: 428348004
     */
    readonly CardiopulmonaryResuscitationNotAttempted: Coding;
    /**
     * Code: 428650003
     */
    readonly CongenitalHypothyroidismScreeningDeclined: Coding;
    /**
     * Code: 428841003
     */
    readonly CysticFibrosisScreeningDeclined: Coding;
    /**
     * Code: 429284000
     */
    readonly CVDRiskAssessmentDeclined: Coding;
    /**
     * Code: 429688007
     */
    readonly NurseTriageDeclined: Coding;
    /**
     * Code: 429726000
     */
    readonly PhenylketonuriaScreeningDeclined: Coding;
    /**
     * Code: 429739001
     */
    readonly PatientRefusedTransportation: Coding;
    /**
     * Code: 430279008
     */
    readonly DrugTreatmentStoppedAtEndOfClinicalTrial: Coding;
    /**
     * Code: 438370008
     */
    readonly VascularDiseaseRiskAssessmentDeclined: Coding;
    /**
     * Code: 438604008
     */
    readonly PeritonealDialysisTherapyDiscontinued: Coding;
    /**
     * Code: 438765003
     */
    readonly HumanPapillomavirusVaccinationDeclined: Coding;
    /**
     * Code: 438767006
     */
    readonly TerminationOfPregnancyContraindicated: Coding;
    /**
     * Code: 438833006
     */
    readonly AdministrationOfDrugOrMedicamentContraindicated: Coding;
    /**
     * Code: 439495000
     */
    readonly CounselingDeclined: Coding;
    /**
     * Code: 439516000
     */
    readonly HemodialysisTherapyDiscontinued: Coding;
    /**
     * Code: 439867009
     */
    readonly DeterminationOfPatternOfResistanceToAntiviralAgentNotDone: Coding;
    /**
     * Code: 440621003
     */
    readonly ReferralDeclinedByPatient: Coding;
    /**
     * Code: 441989008
     */
    readonly DelayedHypersensitivitySkinTestForHistoplasminNotDone: Coding;
    /**
     * Code: 442324008
     */
    readonly AntenatalScreeningDeclined: Coding;
    /**
     * Code: 442392002
     */
    readonly AmbulanceTransportToHospitalDeclined: Coding;
    /**
     * Code: 442444001
     */
    readonly ReferralToSpecialistAlcoholTreatmentServiceDeclinedByPatient: Coding;
    /**
     * Code: 443788002
     */
    readonly MaternalPostnatalExaminationNotAttended: Coding;
    /**
     * Code: 444020006
     */
    readonly MaternalPostnatalExaminationRefused: Coding;
    /**
     * Code: 444062004
     */
    readonly MaternalPostnatalExaminationNotOffered: Coding;
    /**
     * Code: 4451000175106
     */
    readonly AsthmaActionPlanNotDone: Coding;
    /**
     * Code: 4461000175108
     */
    readonly CervicalCancerScreeningNotDone: Coding;
    /**
     * Code: 4471000175100
     */
    readonly ColorectalCancerScreeningNotDone: Coding;
    /**
     * Code: 4501000175108
     */
    readonly HemoglobinA1CTestNotDone: Coding;
    /**
     * Code: 4541000175105
     */
    readonly SpirometryNotDone: Coding;
    /**
     * Code: 4551000175107
     */
    readonly DiabeticFootExamNotDone: Coding;
    /**
     * Code: 4591000175100
     */
    readonly BoneDensityScreeningNotDone: Coding;
    /**
     * Code: 473149004
     */
    readonly LongActingReversibleContraceptionDeclined: Coding;
    /**
     * Code: 591000119102
     */
    readonly VaccineRefusedByPatient: Coding;
    /**
     * Code: 5991000175105
     */
    readonly PeakExpiratoryFlowNotDone: Coding;
    /**
     * Code: 6021000175100
     */
    readonly VaccinationForDiphtheriaPertussisAndTetanusNotDone: Coding;
    /**
     * Code: 6031000175102
     */
    readonly VaricellaVaccinationNotDone: Coding;
    /**
     * Code: 6041000175108
     */
    readonly HepatitisAVaccinationNotDone: Coding;
    /**
     * Code: 6051000175105
     */
    readonly HepatitisBVaccinationNotDone: Coding;
    /**
     * Code: 698357006
     */
    readonly AbdominalAorticAneurysmScreeningDeclined: Coding;
    /**
     * Code: 698451006
     */
    readonly AnkleBrachialPressureIndexTestDeclined: Coding;
    /**
     * Code: 698459008
     */
    readonly AntidepressantDrugTreatmentStopped: Coding;
    /**
     * Code: 698460003
     */
    readonly AntiviralTherapyDeclined: Coding;
    /**
     * Code: 698468005
     */
    readonly BisoprololContraindicated: Coding;
    /**
     * Code: 698473004
     */
    readonly BloodGlucoseTestDeclined: Coding;
    /**
     * Code: 698483000
     */
    readonly WeightManagementAdviceDeclined: Coding;
    /**
     * Code: 698484006
     */
    readonly MeasurementOfWaistCircumferenceDeclined: Coding;
    /**
     * Code: 698490005
     */
    readonly UrineDipstickTestDeclined: Coding;
    /**
     * Code: 698521002
     */
    readonly SimvastatinContraindicated: Coding;
    /**
     * Code: 698569004
     */
    readonly PostnatalDepressionNotDiscussed: Coding;
    /**
     * Code: 698753008
     */
    readonly NeverHadCervicalSmear: Coding;
    /**
     * Code: 698758004
     */
    readonly NebivololTherapyRefused: Coding;
    /**
     * Code: 698950001
     */
    readonly InfluenzaAVirusSubtypeH1N1VaccinationDeclined: Coding;
    /**
     * Code: 699034004
     */
    readonly HomeOxygenTherapyDeclined: Coding;
    /**
     * Code: 699037006
     */
    readonly HepatitisBVaccinationContraindicated: Coding;
    /**
     * Code: 699042003
     */
    readonly HistoryTakingOfSexualOrientationDeclined: Coding;
    /**
     * Code: 699048004
     */
    readonly ExerciseToleranceTestNotIndicated: Coding;
    /**
     * Code: 699053009
     */
    readonly FootPulseCheckDeclined: Coding;
    /**
     * Code: 699054003
     */
    readonly AdministrationOfBloodProductDeclined: Coding;
    /**
     * Code: 699128009
     */
    readonly BloodTransfusionDeclined: Coding;
    /**
     * Code: 699137009
     */
    readonly CarvedilolTherapyDeclined: Coding;
    /**
     * Code: 699231000
     */
    readonly DomesticAbuseNotDiscussed: Coding;
    /**
     * Code: 700110004
     */
    readonly BisphosphonateProphylaxisSuspended: Coding;
    /**
     * Code: 700359005
     */
    readonly BoosterMeningitisCVaccinationDeclined: Coding;
    /**
     * Code: 700384008
     */
    readonly AntibioticProphylaxisNotIndicated: Coding;
    /**
     * Code: 700411009
     */
    readonly RoutineEnquiryAboutDomesticAbuseDeclined: Coding;
    /**
     * Code: 703427001
     */
    readonly RefusalOfTreatmentByPatientAgainstDentalAdvice: Coding;
    /**
     * Code: 703942005
     */
    readonly NeverHadMammogram: Coding;
    /**
     * Code: 703971006
     */
    readonly HepatitisAVaccinationNotIndicated: Coding;
    /**
     * Code: 703989007
     */
    readonly TeriparatideTherapyDeclined: Coding;
    /**
     * Code: 703991004
     */
    readonly RaloxifeneTherapyDeclined: Coding;
    /**
     * Code: 703992006
     */
    readonly BreastfeedingSupportDeclined: Coding;
    /**
     * Code: 703996009
     */
    readonly TeriparatideNotIndicated: Coding;
    /**
     * Code: 703997000
     */
    readonly TeriparatideContraindicated: Coding;
    /**
     * Code: 703999002
     */
    readonly RaloxifeneContraindicated: Coding;
    /**
     * Code: 704000000
     */
    readonly RaloxifeneNotIndicated: Coding;
    /**
     * Code: 704033005
     */
    readonly Phosphodiesterase5InhibitorNotIndicated: Coding;
    /**
     * Code: 704046000
     */
    readonly MentalHealthAssessmentDeclined: Coding;
    /**
     * Code: 704047009
     */
    readonly Phosphodiesterase5InhibitorDeclined: Coding;
    /**
     * Code: 704049007
     */
    readonly ReferralToErectileDysfunctionClinicDeclined: Coding;
    /**
     * Code: 704051006
     */
    readonly ReferralToCardiacRehabilitationProgramDeclined: Coding;
    /**
     * Code: 704052004
     */
    readonly ReferralToCardiacRehabilitationProgramNotIndicated: Coding;
    /**
     * Code: 704096004
     */
    readonly ReferralToHeartFailureExerciseProgramNotIndicated: Coding;
    /**
     * Code: 704097008
     */
    readonly ReferralToHeartFailureExerciseProgramDeclined: Coding;
    /**
     * Code: 705140004
     */
    readonly PhysicalHealthAssessmentDeclined: Coding;
    /**
     * Code: 706890009
     */
    readonly VaginalBirthAfterPreviousCesareanSectionRefused: Coding;
    /**
     * Code: 707287001
     */
    readonly HepatitisBVaccinationNotIndicated: Coding;
    /**
     * Code: 707298000
     */
    readonly Phosphodiesterase5InhibitorContraindicated: Coding;
    /**
     * Code: 707745004
     */
    readonly TuberculosisScreeningDeclined: Coding;
    /**
     * Code: 707746003
     */
    readonly ScreeningChestXRayDeclined: Coding;
    /**
     * Code: 707853004
     */
    readonly TestingForEbolaVirusNotIndicated: Coding;
    /**
     * Code: 708000007
     */
    readonly InsulinTreatmentStopped: Coding;
    /**
     * Code: 708129006
     */
    readonly TransfusionOfBloodProductRefusedForReligiousReason: Coding;
    /**
     * Code: 709198003
     */
    readonly EducationNotIndicated: Coding;
    /**
     * Code: 710765004
     */
    readonly WoundDrainDiscontinued: Coding;
    /**
     * Code: 712740006
     */
    readonly MedicationMonitoringNotIndicated: Coding;
    /**
     * Code: 712751006
     */
    readonly RadiationTherapyNotDone: Coding;
    /**
     * Code: 712790005
     */
    readonly TripleTestNotOffered: Coding;
    /**
     * Code: 712803007
     */
    readonly AdministrationOfAntiDGlobulinNotOffered: Coding;
    /**
     * Code: 712812009
     */
    readonly AntenatalUltrasoundScanNotOffered: Coding;
    /**
     * Code: 712851004
     */
    readonly AlphaFetoproteinBloodTestNotOffered: Coding;
    /**
     * Code: 712852006
     */
    readonly AmniocentesisNotOffered: Coding;
    /**
     * Code: 712854007
     */
    readonly AntenatalScreeningForViralHepatitisTypeBNotOffered: Coding;
    /**
     * Code: 712869008
     */
    readonly AntenatalHIVHumanImmunodeficiencyVirusScreeningNotOffered: Coding;
    /**
     * Code: 712870009
     */
    readonly AntenatalRhesusAntibodyScreeningNotOffered: Coding;
    /**
     * Code: 712872001
     */
    readonly AntenatalThalassemiaScreeningNotOffered: Coding;
    /**
     * Code: 712985002
     */
    readonly ChemotherapyNotDone: Coding;
    /**
     * Code: 712996005
     */
    readonly ParentingEducationNotOffered: Coding;
    /**
     * Code: 713068007
     */
    readonly Over75YearsOfAgeHealthCheckDeclined: Coding;
    /**
     * Code: 713207007
     */
    readonly NeckDissectionNotDone: Coding;
    /**
     * Code: 713246009
     */
    readonly ProcedureDiscontinuedByHealthcareProfessional: Coding;
    /**
     * Code: 713247000
     */
    readonly ProcedureDiscontinuedByPatient: Coding;
    /**
     * Code: 713248005
     */
    readonly ProcedureDiscontinuedByDoctor: Coding;
    /**
     * Code: 713615000
     */
    readonly AdvanceCarePlanningDeclined: Coding;
    /**
     * Code: 714747005
     */
    readonly DiscussionAboutAdvanceCarePlanningDeclined: Coding;
    /**
     * Code: 715163003
     */
    readonly DiphtheriaVaccinationContraindicated: Coding;
    /**
     * Code: 715166006
     */
    readonly BacillusCalmetteGuerinVaccinationContraindicated: Coding;
    /**
     * Code: 715508000
     */
    readonly AssessmentUsingGeneralizedAnxietyDisorder7ItemScaleDeclined: Coding;
    /**
     * Code: 715621003
     */
    readonly HeartFailureEducationNotDone: Coding;
    /**
     * Code: 715622005
     */
    readonly WarfarinNotPrescribed: Coding;
    /**
     * Code: 716048005
     */
    readonly ReviewOfAdvanceCarePlanDeclined: Coding;
    /**
     * Code: 914933391000087108
     */
    readonly RequestProcedureDeferral: Coding;
    /**
     * Code: 921000119109
     */
    readonly VaccineRefusedByParent: Coding;
};
/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export declare type ProcedureNotPerformedReasonValueSetType = typeof ProcedureNotPerformedReasonValueSet;
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
//# sourceMappingURL=ProcedureNotPerformedReasonValueSet.d.ts.map