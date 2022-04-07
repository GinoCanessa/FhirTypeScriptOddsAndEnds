/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 */
export var ProcedureNotPerformedReason = {
    ProcedureNotPerformedReason_ColonoscopyRefused: {
        code: "116101000119100",
        display: "Colonoscopy refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RadiographicImagingProcedureNotCarriedOut: {
        code: "168497006",
        display: "Radiographic imaging procedure not carried out",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RadiologyRefused: {
        code: "168499009",
        display: "Radiology refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RadiotherapyStopped: {
        code: "168533005",
        display: "Radiotherapy stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ContraceptionContraindicated: {
        code: "169551000",
        display: "Contraception contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NoAntenatalCare: {
        code: "169607004",
        display: "No antenatal care",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalCareNotOffered: {
        code: "169608009",
        display: "Antenatal care: not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalCareNotWanted: {
        code: "169609001",
        display: "Antenatal care: not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalCareNotAttended: {
        code: "169610006",
        display: "Antenatal care: not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NoAntenatalCareNotKnownPregnant: {
        code: "169611005",
        display: "No antenatal care: not known pregnant",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ParentCraftNotWanted: {
        code: "169635000",
        display: "Parent craft not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ANAmniocentesisNotWanted: {
        code: "169649009",
        display: "A/N amniocentesis - not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ANUSScanNotWanted: {
        code: "169660000",
        display: "A/N U/S scan not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AlphaFetoproteinGeneAFPBloodTestNotWanted: {
        code: "169687001",
        display: "Alpha-fetoprotein gene (AFP) blood test not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RubellaScreeningNotWanted: {
        code: "169693009",
        display: "Rubella screening not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalSyphilisScreeningNotDone: {
        code: "169699008",
        display: "Antenatal syphilis screening not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalBloodGroupScreeningNotDone: {
        code: "169704000",
        display: "Antenatal blood group screening not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalSickleScreeningNotDone: {
        code: "169708002",
        display: "Antenatal sickle screening not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TripleTestNotWanted: {
        code: "169795009",
        display: "Triple test not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DoubleTestNotWanted: {
        code: "169796005",
        display: "Double test not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ChildNotExaminedAtBirth: {
        code: "170100005",
        display: "Child not examined at birth",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ChildNotExaminedAt10Days: {
        code: "170108003",
        display: "Child not examined at 10 days",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child6WeekExaminationNotOffered: {
        code: "170115006",
        display: "Child 6 week examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child6WeekExaminationNotWanted: {
        code: "170116007",
        display: "Child 6 week examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child6WeekExaminationNotAttended: {
        code: "170117003",
        display: "Child 6 week examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL89MonthExamNotOffered: {
        code: "170124002",
        display: "8-9 month exam not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL89MonthExamNotWanted: {
        code: "170125001",
        display: "8-9 month exam not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL89MonthExamNotAttended: {
        code: "170126000",
        display: "8-9 month exam not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL18MonthExaminationNotOffered: {
        code: "170133000",
        display: "18 month examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL18MonthExaminationNotWanted: {
        code: "170134006",
        display: "18 month examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL18MonthExaminationNotAttended: {
        code: "170135007",
        display: "18 month examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL25YearExaminationNotOffered: {
        code: "170142007",
        display: "2.5 year examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL25YearExaminationNotWanted: {
        code: "170143002",
        display: "2.5 year examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL25YearExaminationNotAttended: {
        code: "170144008",
        display: "2.5 year examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL35YearExaminationNotOffered: {
        code: "170151004",
        display: "3.5 year examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL35YearExaminationNotWanted: {
        code: "170152006",
        display: "3.5 year examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL35YearExaminationNotAttended: {
        code: "170153001",
        display: "3.5 year examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL45YearExaminationNotOffered: {
        code: "170160007",
        display: "4.5 year examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL45YearExaminationNotWanted: {
        code: "170161006",
        display: "4.5 year examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL45YearExaminationNotAttended: {
        code: "170162004",
        display: "4.5 year examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL10YearExaminationNotOffered: {
        code: "170169008",
        display: "10 year examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL10YearExaminationNotWanted: {
        code: "170170009",
        display: "10 year examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL10YearExaminationNotAttended: {
        code: "170171008",
        display: "10 year examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL15YearExaminationNotOffered: {
        code: "170178002",
        display: "15 year examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL15YearExaminationNotWanted: {
        code: "170179005",
        display: "15 year examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL15YearExaminationNotAttended: {
        code: "170180008",
        display: "15 year examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child1YearExaminationNotOffered: {
        code: "170255003",
        display: "Child 1 year examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child1YearExaminationNotWanted: {
        code: "170256002",
        display: "Child 1 year examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child1YearExaminationNotAttended: {
        code: "170257006",
        display: "Child 1 year examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child6MonthExaminationNotOffered: {
        code: "170264008",
        display: "Child 6 month examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child6MonthExaminationNotWanted: {
        code: "170265009",
        display: "Child 6 month examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child6MonthExaminationNotAttended: {
        code: "170266005",
        display: "Child 6 month examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child21MonthExaminationNotOffered: {
        code: "170273000",
        display: "Child 21 month examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child21MonthExaminationNotWanted: {
        code: "170274006",
        display: "Child 21 month examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child21MonthExaminationNotAttended: {
        code: "170275007",
        display: "Child 21 month examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child3YearExamNotOffered: {
        code: "170282006",
        display: "Child 3 year exam not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child3YearExamNotWanted: {
        code: "170283001",
        display: "Child 3 year exam not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child3YearExamNotAttended: {
        code: "170284007",
        display: "Child 3 year exam not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child39MonthExaminationNotOffered: {
        code: "170291005",
        display: "Child 39 month examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child39MonthExaminationNotWanted: {
        code: "170292003",
        display: "Child 39 month examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child39MonthExaminationNotAttended: {
        code: "170293008",
        display: "Child 39 month examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child8WeekExaminationNotOffered: {
        code: "170301000",
        display: "Child 8 week examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child8WeekExaminationNotWanted: {
        code: "170302007",
        display: "Child 8 week examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child8WeekExaminationNotAttended: {
        code: "170304008",
        display: "Child 8 week examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CardiacDiseaseTreatmentStopped: {
        code: "170585007",
        display: "Cardiac disease treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TreatmentForHypertensionStopped: {
        code: "170588009",
        display: "Treatment for hypertension stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RespiratoryDiseaseTreatmentStopped: {
        code: "170620005",
        display: "Respiratory disease treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HomeOxygenSupplyStopped: {
        code: "170621009",
        display: "Home oxygen supply stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_OralSteroidsStopped: {
        code: "170624001",
        display: "Oral steroids stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_GastrointestinalTractTreatmentStopped: {
        code: "170675003",
        display: "Gastrointestinal tract treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PsychiatricTreatmentStopped: {
        code: "170687005",
        display: "Psychiatric treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_LithiumStopped: {
        code: "170688000",
        display: "Lithium stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_InjectablePhenothiazineStopped: {
        code: "170689008",
        display: "Injectable phenothiazine stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NeurologicalDisorderTreatmentStopped: {
        code: "170700002",
        display: "Neurological disorder treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_EpilepsyTreatmentStopped: {
        code: "170712003",
        display: "Epilepsy treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_OphthalmologicalTreatmentStopped: {
        code: "170725006",
        display: "Ophthalmological treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TreatmentOfObesityStopped: {
        code: "170800007",
        display: "Treatment of obesity stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_EndocrineDiseaseTreatmentStopped: {
        code: "170816009",
        display: "Endocrine disease treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_B12InjectionsStopped: {
        code: "170826002",
        display: "B12 injections stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BloodDisorderTreatmentStopped: {
        code: "170834008",
        display: "Blood disorder treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AllergicDisorderTreatmentStopped: {
        code: "170843004",
        display: "Allergic disorder treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RheumatologyDisorderTreatmentStopped: {
        code: "170854009",
        display: "Rheumatology disorder treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SkinDisorderTreatmentStopped: {
        code: "170863006",
        display: "Skin disorder treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_GynecologicalDisorderTreatmentStopped: {
        code: "170872003",
        display: "Gynecological disorder treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_UrinaryDisorderTreatmentStopped: {
        code: "170882002",
        display: "Urinary disorder treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ENTDiseaseTreatmentStopped: {
        code: "170894006",
        display: "ENT disease treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_OstomyTreatmentStopped: {
        code: "170904002",
        display: "Ostomy - treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HighRiskTreatmentStopped: {
        code: "170912005",
        display: "High risk treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_WarfarinTherapyStopped: {
        code: "170919001",
        display: "Warfarin therapy stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RepeatPrescriptionTreatmentStopped: {
        code: "170929008",
        display: "Repeat prescription treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HormoneReplacementTherapyHRTContraindicated: {
        code: "170954008",
        display: "Hormone replacement therapy (HRT) contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HormonalReplacementTherapyHRTStopped: {
        code: "170958006",
        display: "Hormonal replacement therapy (HRT) stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HealthEducationNotWanted: {
        code: "171034000",
        display: "Health education not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ScreeningNotWanted: {
        code: "171103002",
        display: "Screening not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CancerOfCervixScreeningNotWanted: {
        code: "171152003",
        display: "Cancer of cervix screening not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SensitivityCIImmunization: {
        code: "171277005",
        display: "Sensitivity C/I - immunization",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PertussisVaccineContraindicated: {
        code: "171284002",
        display: "Pertussis vaccine contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_OperationAborted: {
        code: "180863000",
        display: "Operation aborted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugTreatmentStoppedMedicalAdvice: {
        code: "182840001",
        display: "Drug treatment stopped - medical advice",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrStoppedDrugsIneffective: {
        code: "182841002",
        display: "Dr stopped drugs - ineffective",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DoctorStoppedDrugsSideEffect: {
        code: "182842009",
        display: "Doctor stopped drugs - side effect",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrStoppedDrugsInconvenient: {
        code: "182843004",
        display: "Dr stopped drugs -inconvenient",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DoctorStoppedDrugsPatientDislikes: {
        code: "182844005",
        display: "Doctor stopped drugs - patient dislikes",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DoctorStoppedDrugsAvoidInteraction: {
        code: "182845006",
        display: "Doctor stopped drugs - avoid interaction",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DoctorStoppedDrugsMedicalAimAchieved: {
        code: "182846007",
        display: "Doctor stopped drugs - medical aim achieved",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NoDrugTherapyPrescribed: {
        code: "182849000",
        display: "No drug therapy prescribed",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugDeclinedByPatient: {
        code: "182895007",
        display: "Drug declined by patient",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugDeclinedByPatientDislikesTaste: {
        code: "182896008",
        display: "Drug declined by patient - dislikes taste",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugDeclinedByPatientSideEffects: {
        code: "182897004",
        display: "Drug declined by patient - side effects",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugDeclinedByPatientInconvenient: {
        code: "182898009",
        display: "Drug declined by patient - inconvenient",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugDeclinedByPatientProblemSwallowing: {
        code: "182899001",
        display: "Drug declined by patient - problem swallowing",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugDeclinedByPatientPatientBeliefs: {
        code: "182900006",
        display: "Drug declined by patient - patient beliefs",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugDeclinedByPatientAlternativeTherapy: {
        code: "182901005",
        display: "Drug declined by patient - alternative therapy",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugDeclinedByPatientCannotPayScript: {
        code: "182902003",
        display: "Drug declined by patient - cannot pay script",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugDeclinedByPatientReasonUnknown: {
        code: "182903008",
        display: "Drug declined by patient - reason unknown",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ResidenceRemoteFromMedicalCare: {
        code: "183928007",
        display: "Residence remote from medical care",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NoHomeMedicalServices: {
        code: "183929004",
        display: "No home medical services",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AwaitingAdmissionElsewhere: {
        code: "183930009",
        display: "Awaiting admission elsewhere",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SensitivityContraindicationToProcedure: {
        code: "183934000",
        display: "Sensitivity contraindication to procedure",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ContraindicationToLiveImmunization: {
        code: "183936003",
        display: "Contraindication to live immunization",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ProcedureRefusedForReligiousReason: {
        code: "183945002",
        display: "Procedure refused for religious reason",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ProcedureRefusedUncooperative: {
        code: "183946001",
        display: "Procedure refused - uncooperative",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RefusedProcedureAfterThought: {
        code: "183947005",
        display: "Refused procedure - after thought",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RefusedProcedureParentQuoteSWish: {
        code: "183948000",
        display: "Refused procedure - parent's wish",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AssessmentExaminationRefused: {
        code: "183949008",
        display: "Assessment examination refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CareHelpRefusedByPatient: {
        code: "183956002",
        display: "Care/help refused by patient",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PatientRefusesDayHospital: {
        code: "183957006",
        display: "Patient refuses day hospital",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RefusesMealsOnWheels: {
        code: "183958001",
        display: "Refuses meals on wheels",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SocialServicesHelpRefused: {
        code: "183959009",
        display: "Social Services help refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PatientRefusesHospitalAdmit: {
        code: "183960004",
        display: "Patient refuses hospital admit",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PartIIIAccommodationRefused: {
        code: "183961000",
        display: "Part III accommodation refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PatientNonCompliantWithSpecificAdvice: {
        code: "183962007",
        display: "Patient non-compliant with specific advice",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TreatmentNotIndicated: {
        code: "183964008",
        display: "Treatment not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SurgeryNotIndicated: {
        code: "183965009",
        display: "Surgery not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugTreatmentNotIndicated: {
        code: "183966005",
        display: "Drug treatment not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ChildSurveillanceNotWanted: {
        code: "184163005",
        display: "Child surveillance not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RefusesDiabetesMonitoring: {
        code: "185754009",
        display: "Refuses diabetes monitoring",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicalCareUnavailable: {
        code: "266756008",
        display: "Medical care unavailable",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicalContraindicationToProcedure: {
        code: "266757004",
        display: "Medical contraindication to procedure",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ImmunizationContraindicated: {
        code: "266758009",
        display: "Immunization contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NoHistoryTaken: {
        code: "266881002",
        display: "No history taken",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ThyroidDiseaseTreatmentStopped: {
        code: "268521004",
        display: "Thyroid disease treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicalCIImmunization: {
        code: "268560002",
        display: "Medical C/I - immunization",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugTherapyDiscontinued: {
        code: "274512008",
        display: "Drug therapy discontinued",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SurgeryContraindicated: {
        code: "275935009",
        display: "Surgery contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PatientNoncomplianceGeneral: {
        code: "275936005",
        display: "Patient noncompliance - general",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MeaslesMumpsRubellaVaccineContraindicated: {
        code: "275974002",
        display: "Measles/mumps/rubella vaccine contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_OperationAbandonedBeforeOnset: {
        code: "288120003",
        display: "Operation abandoned before onset",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ThyroxineTreatmentStopped: {
        code: "309841001",
        display: "Thyroxine treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TreatmentNotAvailable: {
        code: "309846006",
        display: "Treatment not available",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MammographyNotAttended: {
        code: "310352003",
        display: "Mammography not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AspirinProphylaxisContraIndicated: {
        code: "312451002",
        display: "Aspirin prophylaxis contra-indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VAL360DegreeSweepOfCervixNotPerformed: {
        code: "314374001",
        display: "360 degree sweep of cervix not performed",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DecidedToWaitForASpecificProvider: {
        code: "314553311000087102",
        display: "Decided to wait for a specific provider",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BetaBlockerTherapyRefused: {
        code: "315020006",
        display: "Beta blocker therapy refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RefusesCHDMonitoring: {
        code: "315021005",
        display: "Refuses CHD monitoring",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NicotineReplacementTherapyRefused: {
        code: "315022003",
        display: "Nicotine replacement therapy refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AspirinProphylaxisRefused: {
        code: "315023008",
        display: "Aspirin prophylaxis refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_WarfarinContraindicated: {
        code: "315061006",
        display: "Warfarin contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BetaBlockerContraindicated: {
        code: "315062004",
        display: "Beta blocker contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BetaBlockerNotIndicated: {
        code: "315214003",
        display: "Beta blocker not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_StatinsContraindicated: {
        code: "315363002",
        display: "Statins contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AngiotensinConvertingEnzymeInhibitorsContraindicated: {
        code: "315364008",
        display: "Angiotensin converting enzyme inhibitors contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_FibratesContraindicated: {
        code: "315591006",
        display: "Fibrates contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_InfluenzaVaccinationDeclined: {
        code: "315640000",
        display: "Influenza vaccination declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RefusalOfTreatmentByParents: {
        code: "371138003",
        display: "Refusal of treatment by parents",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicationNotAdministered: {
        code: "371900001",
        display: "Medication not administered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicationNotAdministeredBecauseContraindicated: {
        code: "373147003",
        display: "Medication not administered because contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ThrombolyticAgentNotAdministeredBecauseContraindicated: {
        code: "373148008",
        display: "Thrombolytic agent not administered because contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PneumococcalVaccinationContraindicated: {
        code: "390795005",
        display: "Pneumococcal vaccination contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_InfluenzaVaccinationContraindicated: {
        code: "390796006",
        display: "Influenza vaccination contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RetinaeNotExamined: {
        code: "390848004",
        display: "Retinae not examined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ThrombolysisContraindicated: {
        code: "390910005",
        display: "Thrombolysis contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ThrombolyticTherapyRefused: {
        code: "390914001",
        display: "Thrombolytic therapy refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_OsteoporosisRiskAssessmentRefused: {
        code: "391015007",
        display: "Osteoporosis risk assessment refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_OsteoporosisRiskAssessmentDefaulted: {
        code: "391016008",
        display: "Osteoporosis risk assessment defaulted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_OsteoporosisTreatmentStopped: {
        code: "391021006",
        display: "Osteoporosis treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SyringeDriverDiscontinued: {
        code: "394909009",
        display: "Syringe driver discontinued",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_UrineLeukocyteTestNotDone: {
        code: "394965000",
        display: "Urine leukocyte test not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AngiotensinIIReceptorAntagonistsContraindicated: {
        code: "394987009",
        display: "Angiotensin II receptor antagonists contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicationStoppedInteraction: {
        code: "395006008",
        display: "Medication stopped - interaction",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicationStoppedIneffective: {
        code: "395007004",
        display: "Medication stopped - ineffective",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicationStoppedContraIndication: {
        code: "395008009",
        display: "Medication stopped - contra-indication",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicationStoppedSideEffect: {
        code: "395009001",
        display: "Medication stopped - side effect",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NicotineReplacementTherapyContraindicated: {
        code: "395174005",
        display: "Nicotine replacement therapy contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BupropionContraindicated: {
        code: "395175006",
        display: "Bupropion contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BupropionRefused: {
        code: "395176007",
        display: "Bupropion refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_OralContraceptivePillContraindicated: {
        code: "395675007",
        display: "Oral contraceptive pill contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MeningitisCImmunizationRefused: {
        code: "395703005",
        display: "Meningitis C immunization refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NoChemotherapyANDORRadiationTherapyPriorToLymphadenectomy: {
        code: "396781004",
        display: "No chemotherapy AND/OR radiation therapy prior to lymphadenectomy",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ImmunophenotypicAnalysisNotPerformed: {
        code: "397004005",
        display: "Immunophenotypic analysis not performed",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_OperationNotCompleted: {
        code: "397023003",
        display: "Operation not completed",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CellPhenotypingNotPerformed: {
        code: "397399004",
        display: "Cell phenotyping not performed",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CytogeneticStudyNotPerformed: {
        code: "399538001",
        display: "Cytogenetic study not performed",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HypertensionTreatmentRefused: {
        code: "401047000",
        display: "Hypertension treatment refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AngiotensinIIReceptorAntagonistDeclined: {
        code: "401084003",
        display: "Angiotensin II receptor antagonist declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PneumococcalVaccinationDeclined: {
        code: "401086001",
        display: "Pneumococcal vaccination declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ShuttleWalkingTestNotDone: {
        code: "401318002",
        display: "Shuttle walking test not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicationRefused: {
        code: "406149000",
        display: "Medication refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ClopidogrelNotIndicated: {
        code: "407571005",
        display: "Clopidogrel not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AngiotensinIIReceptorAntagonistNotIndicated: {
        code: "407572003",
        display: "Angiotensin II receptor antagonist not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_InfluenzaVaccinationNotIndicated: {
        code: "407573008",
        display: "Influenza vaccination not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ClopidogrelContraindicated: {
        code: "407582002",
        display: "Clopidogrel contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ClopidogrelDeclined: {
        code: "407583007",
        display: "Clopidogrel declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ThrombolysisTherapyNotIndicated: {
        code: "408339001",
        display: "Thrombolysis therapy not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DiabeticRetinopathyScreeningNotIndicated: {
        code: "408396006",
        display: "Diabetic retinopathy screening not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DiabeticFootExaminationNotIndicated: {
        code: "408397002",
        display: "Diabetic foot examination not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SmokingReviewNotIndicated: {
        code: "408398007",
        display: "Smoking review not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child7MonthExaminationNotAttended: {
        code: "408504000",
        display: "Child 7 month examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child7MonthExaminationNotWanted: {
        code: "408505004",
        display: "Child 7 month examination not wanted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Child7MonthExaminationNotOffered: {
        code: "408506003",
        display: "Child 7 month examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MagneticResonanceImagingScanDeclined: {
        code: "408548005",
        display: "Magnetic resonance imaging scan declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AngiocardiographyDeclined: {
        code: "408549002",
        display: "Angiocardiography declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ExerciseToleranceTestRefused: {
        code: "408551003",
        display: "Exercise tolerance test refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MultidisciplinaryTeamFallsAssessmentDeclined: {
        code: "408558009",
        display: "Multidisciplinary team falls assessment declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PrimaryHealthCareTeamFallsAssessmentDeclined: {
        code: "408559001",
        display: "Primary health care team falls assessment declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_EchocardiogramDeclined: {
        code: "408566000",
        display: "Echocardiogram declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CTScanBrainDeclined: {
        code: "408567009",
        display: "CT scan brain declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DiagnosticProcedureDeclined: {
        code: "408569007",
        display: "Diagnostic procedure declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CarotidArteryDopplerDeclined: {
        code: "408572000",
        display: "Carotid artery doppler declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HepatitisBImmunizationDeclined: {
        code: "408778004",
        display: "Hepatitis B immunization declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BCGVaccinationDeclined: {
        code: "408791003",
        display: "BCG vaccination declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VitaminKProphylaxisDeclined: {
        code: "408795007",
        display: "Vitamin K prophylaxis declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SampleNotObtained: {
        code: "408836004",
        display: "Sample not obtained",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AmniocentesisSampleNotObtained: {
        code: "408837008",
        display: "Amniocentesis sample not obtained",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CoronaryArteriographyDeclined: {
        code: "412713002",
        display: "Coronary arteriography declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ChlamydiaScreeningDeclined: {
        code: "412718006",
        display: "Chlamydia screening declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicationReviewDeclined: {
        code: "412725004",
        display: "Medication review declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DiabeticFootExaminationDeclined: {
        code: "412752009",
        display: "Diabetic foot examination declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_InappropriateMedicationStopped: {
        code: "412782003",
        display: "Inappropriate medication stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DiabeticRetinopathyScreeningRefused: {
        code: "413122001",
        display: "Diabetic retinopathy screening refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BloodPressureProcedureRefused: {
        code: "413123006",
        display: "Blood pressure procedure refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CompressionBandagingNotIndicated: {
        code: "413167008",
        display: "Compression bandaging not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PatientNonCompliantRefusedAccessToServices: {
        code: "413310006",
        display: "Patient non-compliant - refused access to services",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PatientNonCompliantRefusedInterventionSupport: {
        code: "413311005",
        display: "Patient non-compliant - refused intervention / support",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PatientNonCompliantRefusedService: {
        code: "413312003",
        display: "Patient non-compliant - refused service",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AnticoagulationContraindicated: {
        code: "413558003",
        display: "Anticoagulation contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AnticoagulationDeclined: {
        code: "413559006",
        display: "Anticoagulation declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AnticoagulationNotIndicated: {
        code: "413560001",
        display: "Anticoagulation not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CardiacRehabilitationDeclined: {
        code: "413756001",
        display: "Cardiac rehabilitation declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CervicalSmearNotIndicated: {
        code: "413812009",
        display: "Cervical smear not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugDependenceHomeDetoxificationContraindicated: {
        code: "414055003",
        display: "Drug dependence home detoxification contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ERCPNotCompletedDueToAnatomicalDerangementsFromPreviousSurgery: {
        code: "414120003",
        display: "ERCP not completed due to anatomical derangements from previous surgery",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ExerciseToleranceTestContraindicated: {
        code: "414159007",
        display: "Exercise tolerance test contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MetforminContraindicated: {
        code: "414677003",
        display: "Metformin contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PneumococcalVaccinationNotIndicated: {
        code: "415119001",
        display: "Pneumococcal vaccination not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SpirometryNotIndicated: {
        code: "415570002",
        display: "Spirometry not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SpirometryReversibilityTestingContraindicated: {
        code: "415571003",
        display: "Spirometry reversibility testing contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SpirometryTestDeclined: {
        code: "415572005",
        display: "Spirometry test declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AdministrationOfSulfonylureaContraindicated: {
        code: "415666001",
        display: "Administration of sulfonylurea contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AdministrationOfSulfonylureaNotIndicated: {
        code: "415667005",
        display: "Administration of sulfonylurea not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_GlitazonesContraindicated: {
        code: "416091008",
        display: "Glitazones contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BisphosphonatesDeclined: {
        code: "416126007",
        display: "Bisphosphonates declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NoPastHistoryOfProcedure: {
        code: "416128008",
        display: "No past history of procedure",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CombinedCalciumAndVitaminD3PreparationContraindicated: {
        code: "416475003",
        display: "Combined calcium and vitamin D3 preparation contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_StrontiumRanelateDeclined: {
        code: "416522000",
        display: "Strontium ranelate declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SelectiveEstrogenReceptorModulatorNotIndicated: {
        code: "416664005",
        display: "Selective estrogen receptor modulator not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_GlitazonesNotIndicated: {
        code: "416670004",
        display: "Glitazones not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CombinedCalciumAndVitaminD3PreparationNotIndicated: {
        code: "416678006",
        display: "Combined calcium and vitamin D3 preparation not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DXAScanContraindicated: {
        code: "416704001",
        display: "DXA scan contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_StrontiumRanelateNotIndicated: {
        code: "416741000",
        display: "Strontium ranelate not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NonSteroidalAntiInflammatoryDrugsContraindicated: {
        code: "416759002",
        display: "Non-steroidal anti-inflammatory drugs contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DXAScanDeclined: {
        code: "416888009",
        display: "DXA scan declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_StrontiumRanelateContraindicated: {
        code: "416996000",
        display: "Strontium ranelate contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DXAScanNotIndicated: {
        code: "417013004",
        display: "DXA scan not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CombinedCalciumAndVitaminD3PreparationDeclined: {
        code: "417045009",
        display: "Combined calcium and vitamin D3 preparation declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SelectiveEstrogenReceptorModulatorContraindicated: {
        code: "417101006",
        display: "Selective estrogen receptor modulator contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RefusedReferralToMinorAilmentsClinic: {
        code: "417114007",
        display: "Refused referral to minor ailments clinic",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BisphosphonatesContraindicated: {
        code: "417128001",
        display: "Bisphosphonates contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CarotidUltrasoundNotIndicated: {
        code: "417218000",
        display: "Carotid ultrasound not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BisphosphonatesNotIndicated: {
        code: "417434004",
        display: "Bisphosphonates not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SelectiveEstrogenReceptorModulatorDeclined: {
        code: "417512003",
        display: "Selective estrogen receptor modulator declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ProcedureNotOrdered: {
        code: "418014008",
        display: "Procedure not ordered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NoStainApplied: {
        code: "418731009",
        display: "No stain applied",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CardiopulmonaryResuscitationDiscontinuedDueToMedicalControlOrder: {
        code: "425519007",
        display: "Cardiopulmonary resuscitation discontinued due to medical control order",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CardiopulmonaryResuscitationDiscontinuedDueToDoNotResuscitateOrder: {
        code: "425921008",
        display: "Cardiopulmonary resuscitation discontinued due to do not resuscitate order",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HistoryRefused: {
        code: "426544006",
        display: "History refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CardiopulmonaryResuscitationDiscontinuedDueToReturnOfSpontaneousCirculation: {
        code: "426970003",
        display: "Cardiopulmonary resuscitation discontinued due to return of spontaneous circulation",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CardiopulmonaryResuscitationDiscontinuedDueToSignsOfDeath: {
        code: "426999008",
        display: "Cardiopulmonary resuscitation discontinued due to signs of death",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CardiopulmonaryResuscitationDiscontinuedAsPerProtocol: {
        code: "427569000",
        display: "Cardiopulmonary resuscitation discontinued as per protocol",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MediumChainAcylCoenzymeADehydrogenaseDeficiencyScreeningTestDeclined: {
        code: "428042006",
        display: "Medium-chain acyl-coenzyme A dehydrogenase deficiency screening test declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AlcoholConsumptionScreeningTestDeclined: {
        code: "428073005",
        display: "Alcohol consumption screening test declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SickleCellScreeningDeclined: {
        code: "428299008",
        display: "Sickle cell screening declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CardiopulmonaryResuscitationNotAttempted: {
        code: "428348004",
        display: "Cardiopulmonary resuscitation not attempted",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CongenitalHypothyroidismScreeningDeclined: {
        code: "428650003",
        display: "Congenital hypothyroidism screening declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CysticFibrosisScreeningDeclined: {
        code: "428841003",
        display: "Cystic fibrosis screening declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CVDRiskAssessmentDeclined: {
        code: "429284000",
        display: "CVD risk assessment declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NurseTriageDeclined: {
        code: "429688007",
        display: "Nurse triage declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PhenylketonuriaScreeningDeclined: {
        code: "429726000",
        display: "Phenylketonuria screening declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PatientRefusedTransportation: {
        code: "429739001",
        display: "Patient refused transportation",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DrugTreatmentStoppedAtEndOfClinicalTrial: {
        code: "430279008",
        display: "Drug treatment stopped at end of clinical trial",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VascularDiseaseRiskAssessmentDeclined: {
        code: "438370008",
        display: "Vascular disease risk assessment declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PeritonealDialysisTherapyDiscontinued: {
        code: "438604008",
        display: "Peritoneal dialysis therapy discontinued",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HumanPapillomavirusVaccinationDeclined: {
        code: "438765003",
        display: "Human papillomavirus vaccination declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TerminationOfPregnancyContraindicated: {
        code: "438767006",
        display: "Termination of pregnancy contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AdministrationOfDrugOrMedicamentContraindicated: {
        code: "438833006",
        display: "Administration of drug or medicament contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CounselingDeclined: {
        code: "439495000",
        display: "Counseling declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HemodialysisTherapyDiscontinued: {
        code: "439516000",
        display: "Hemodialysis therapy discontinued",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DeterminationOfPatternOfResistanceToAntiviralAgentNotDone: {
        code: "439867009",
        display: "Determination of pattern of resistance to antiviral agent not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ReferralDeclinedByPatient: {
        code: "440621003",
        display: "Referral declined by patient",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DelayedHypersensitivitySkinTestForHistoplasminNotDone: {
        code: "441989008",
        display: "Delayed hypersensitivity skin test for histoplasmin not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalScreeningDeclined: {
        code: "442324008",
        display: "Antenatal screening declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AmbulanceTransportToHospitalDeclined: {
        code: "442392002",
        display: "Ambulance transport to hospital declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ReferralToSpecialistAlcoholTreatmentServiceDeclinedByPatient: {
        code: "442444001",
        display: "Referral to specialist alcohol treatment service declined by patient",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MaternalPostnatalExaminationNotAttended: {
        code: "443788002",
        display: "Maternal postnatal examination not attended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MaternalPostnatalExaminationRefused: {
        code: "444020006",
        display: "Maternal postnatal examination refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MaternalPostnatalExaminationNotOffered: {
        code: "444062004",
        display: "Maternal postnatal examination not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AsthmaActionPlanNotDone: {
        code: "4451000175106",
        display: "Asthma action plan not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CervicalCancerScreeningNotDone: {
        code: "4461000175108",
        display: "Cervical cancer screening not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ColorectalCancerScreeningNotDone: {
        code: "4471000175100",
        display: "Colorectal cancer screening not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HemoglobinA1CTestNotDone: {
        code: "4501000175108",
        display: "Hemoglobin A1C test not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SpirometryNotDone: {
        code: "4541000175105",
        display: "Spirometry not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DiabeticFootExamNotDone: {
        code: "4551000175107",
        display: "Diabetic foot exam not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BoneDensityScreeningNotDone: {
        code: "4591000175100",
        display: "Bone density screening not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_LongActingReversibleContraceptionDeclined: {
        code: "473149004",
        display: "Long acting reversible contraception declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VaccineRefusedByPatient: {
        code: "591000119102",
        display: "Vaccine refused by patient",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PeakExpiratoryFlowNotDone: {
        code: "5991000175105",
        display: "Peak expiratory flow not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VaccinationForDiphtheriaPertussisAndTetanusNotDone: {
        code: "6021000175100",
        display: "Vaccination for diphtheria, pertussis, and tetanus not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VaricellaVaccinationNotDone: {
        code: "6031000175102",
        display: "Varicella vaccination not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HepatitisAVaccinationNotDone: {
        code: "6041000175108",
        display: "Hepatitis A vaccination not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HepatitisBVaccinationNotDone: {
        code: "6051000175105",
        display: "Hepatitis B vaccination not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AbdominalAorticAneurysmScreeningDeclined: {
        code: "698357006",
        display: "Abdominal aortic aneurysm screening declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AnkleBrachialPressureIndexTestDeclined: {
        code: "698451006",
        display: "Ankle brachial pressure index test declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntidepressantDrugTreatmentStopped: {
        code: "698459008",
        display: "Antidepressant drug treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntiviralTherapyDeclined: {
        code: "698460003",
        display: "Antiviral therapy declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BisoprololContraindicated: {
        code: "698468005",
        display: "Bisoprolol contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BloodGlucoseTestDeclined: {
        code: "698473004",
        display: "Blood glucose test declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_WeightManagementAdviceDeclined: {
        code: "698483000",
        display: "Weight management advice declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MeasurementOfWaistCircumferenceDeclined: {
        code: "698484006",
        display: "Measurement of waist circumference declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_UrineDipstickTestDeclined: {
        code: "698490005",
        display: "Urine dipstick test declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_SimvastatinContraindicated: {
        code: "698521002",
        display: "Simvastatin contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PostnatalDepressionNotDiscussed: {
        code: "698569004",
        display: "Postnatal depression not discussed",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NeverHadCervicalSmear: {
        code: "698753008",
        display: "Never had cervical smear",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NebivololTherapyRefused: {
        code: "698758004",
        display: "Nebivolol therapy refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_InfluenzaAVirusSubtypeH1N1VaccinationDeclined: {
        code: "698950001",
        display: "Influenza A virus subtype H1N1 vaccination declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HomeOxygenTherapyDeclined: {
        code: "699034004",
        display: "Home oxygen therapy declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HepatitisBVaccinationContraindicated: {
        code: "699037006",
        display: "Hepatitis B vaccination contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HistoryTakingOfSexualOrientationDeclined: {
        code: "699042003",
        display: "History taking of sexual orientation declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ExerciseToleranceTestNotIndicated: {
        code: "699048004",
        display: "Exercise tolerance test not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_FootPulseCheckDeclined: {
        code: "699053009",
        display: "Foot pulse check declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AdministrationOfBloodProductDeclined: {
        code: "699054003",
        display: "Administration of blood product declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BloodTransfusionDeclined: {
        code: "699128009",
        display: "Blood transfusion declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_CarvedilolTherapyDeclined: {
        code: "699137009",
        display: "Carvedilol therapy declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DomesticAbuseNotDiscussed: {
        code: "699231000",
        display: "Domestic abuse not discussed",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BisphosphonateProphylaxisSuspended: {
        code: "700110004",
        display: "Bisphosphonate prophylaxis suspended",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BoosterMeningitisCVaccinationDeclined: {
        code: "700359005",
        display: "Booster meningitis C vaccination declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntibioticProphylaxisNotIndicated: {
        code: "700384008",
        display: "Antibiotic prophylaxis not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RoutineEnquiryAboutDomesticAbuseDeclined: {
        code: "700411009",
        display: "Routine enquiry about domestic abuse declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RefusalOfTreatmentByPatientAgainstDentalAdvice: {
        code: "703427001",
        display: "Refusal of treatment by patient against dental advice",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NeverHadMammogram: {
        code: "703942005",
        display: "Never had mammogram",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HepatitisAVaccinationNotIndicated: {
        code: "703971006",
        display: "Hepatitis A vaccination not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TeriparatideTherapyDeclined: {
        code: "703989007",
        display: "Teriparatide therapy declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RaloxifeneTherapyDeclined: {
        code: "703991004",
        display: "Raloxifene therapy declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BreastfeedingSupportDeclined: {
        code: "703992006",
        display: "Breastfeeding support declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TeriparatideNotIndicated: {
        code: "703996009",
        display: "Teriparatide not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TeriparatideContraindicated: {
        code: "703997000",
        display: "Teriparatide contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RaloxifeneContraindicated: {
        code: "703999002",
        display: "Raloxifene contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RaloxifeneNotIndicated: {
        code: "704000000",
        display: "Raloxifene not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Phosphodiesterase5InhibitorNotIndicated: {
        code: "704033005",
        display: "Phosphodiesterase 5 inhibitor not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MentalHealthAssessmentDeclined: {
        code: "704046000",
        display: "Mental health assessment declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Phosphodiesterase5InhibitorDeclined: {
        code: "704047009",
        display: "Phosphodiesterase 5 inhibitor declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ReferralToErectileDysfunctionClinicDeclined: {
        code: "704049007",
        display: "Referral to erectile dysfunction clinic declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ReferralToCardiacRehabilitationProgramDeclined: {
        code: "704051006",
        display: "Referral to cardiac rehabilitation program declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ReferralToCardiacRehabilitationProgramNotIndicated: {
        code: "704052004",
        display: "Referral to cardiac rehabilitation program not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ReferralToHeartFailureExerciseProgramNotIndicated: {
        code: "704096004",
        display: "Referral to heart failure exercise program not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ReferralToHeartFailureExerciseProgramDeclined: {
        code: "704097008",
        display: "Referral to heart failure exercise program declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_PhysicalHealthAssessmentDeclined: {
        code: "705140004",
        display: "Physical health assessment declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VaginalBirthAfterPreviousCesareanSectionRefused: {
        code: "706890009",
        display: "Vaginal birth after previous cesarean section refused",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HepatitisBVaccinationNotIndicated: {
        code: "707287001",
        display: "Hepatitis B vaccination not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Phosphodiesterase5InhibitorContraindicated: {
        code: "707298000",
        display: "Phosphodiesterase-5 inhibitor contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TuberculosisScreeningDeclined: {
        code: "707745004",
        display: "Tuberculosis screening declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ScreeningChestXRayDeclined: {
        code: "707746003",
        display: "Screening chest X-ray declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TestingForEbolaVirusNotIndicated: {
        code: "707853004",
        display: "Testing for Ebola virus not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_InsulinTreatmentStopped: {
        code: "708000007",
        display: "Insulin treatment stopped",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TransfusionOfBloodProductRefusedForReligiousReason: {
        code: "708129006",
        display: "Transfusion of blood product refused for religious reason",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_EducationNotIndicated: {
        code: "709198003",
        display: "Education not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_WoundDrainDiscontinued: {
        code: "710765004",
        display: "Wound drain discontinued",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_MedicationMonitoringNotIndicated: {
        code: "712740006",
        display: "Medication monitoring not indicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RadiationTherapyNotDone: {
        code: "712751006",
        display: "Radiation therapy not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_TripleTestNotOffered: {
        code: "712790005",
        display: "Triple test not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AdministrationOfAntiDGlobulinNotOffered: {
        code: "712803007",
        display: "Administration of Anti-D globulin not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalUltrasoundScanNotOffered: {
        code: "712812009",
        display: "Antenatal ultrasound scan not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AlphaFetoproteinBloodTestNotOffered: {
        code: "712851004",
        display: "Alpha-fetoprotein blood test not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AmniocentesisNotOffered: {
        code: "712852006",
        display: "Amniocentesis not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalScreeningForViralHepatitisTypeBNotOffered: {
        code: "712854007",
        display: "Antenatal screening for viral hepatitis type B not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalHIVHumanImmunodeficiencyVirusScreeningNotOffered: {
        code: "712869008",
        display: "Antenatal HIV (human immunodeficiency virus) screening not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalRhesusAntibodyScreeningNotOffered: {
        code: "712870009",
        display: "Antenatal Rhesus antibody screening not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AntenatalThalassemiaScreeningNotOffered: {
        code: "712872001",
        display: "Antenatal thalassemia screening not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ChemotherapyNotDone: {
        code: "712985002",
        display: "Chemotherapy not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ParentingEducationNotOffered: {
        code: "712996005",
        display: "Parenting education not offered",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_Over75YearsOfAgeHealthCheckDeclined: {
        code: "713068007",
        display: "Over 75 years of age health check declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_NeckDissectionNotDone: {
        code: "713207007",
        display: "Neck dissection not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ProcedureDiscontinuedByHealthcareProfessional: {
        code: "713246009",
        display: "Procedure discontinued by healthcare professional",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ProcedureDiscontinuedByPatient: {
        code: "713247000",
        display: "Procedure discontinued by patient",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ProcedureDiscontinuedByDoctor: {
        code: "713248005",
        display: "Procedure discontinued by doctor",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AdvanceCarePlanningDeclined: {
        code: "713615000",
        display: "Advance care planning declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DiscussionAboutAdvanceCarePlanningDeclined: {
        code: "714747005",
        display: "Discussion about advance care planning declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_DiphtheriaVaccinationContraindicated: {
        code: "715163003",
        display: "Diphtheria vaccination contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_BacillusCalmetteGuerinVaccinationContraindicated: {
        code: "715166006",
        display: "Bacillus Calmette-Guerin vaccination contraindicated",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_AssessmentUsingGeneralizedAnxietyDisorder7ItemScaleDeclined: {
        code: "715508000",
        display: "Assessment using Generalized Anxiety Disorder 7 item scale declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_HeartFailureEducationNotDone: {
        code: "715621003",
        display: "Heart failure education not done",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_WarfarinNotPrescribed: {
        code: "715622005",
        display: "Warfarin not prescribed",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_ReviewOfAdvanceCarePlanDeclined: {
        code: "716048005",
        display: "Review of advance care plan declined",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_RequestProcedureDeferral: {
        code: "914933391000087108",
        display: "Request procedure deferral",
        system: "http://snomed.info/sct"
    },
    ProcedureNotPerformedReason_VaccineRefusedByParent: {
        code: "921000119109",
        display: "Vaccine refused by parent",
        system: "http://snomed.info/sct"
    }
};
