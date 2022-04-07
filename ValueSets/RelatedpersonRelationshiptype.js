/**
 * A set of codes that can be used to indicate the relationship between a Patient and a Related Person.
 */
export var RelatedpersonRelationshiptype = {
    /**
     * PersonalRelationshipRoleType
     */
    v3_RoleCode_PersonalRelationshipRoleType: {
        code: "_PersonalRelationshipRoleType",
        display: "PersonalRelationshipRoleType",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role (father) is a male who has taken the scoper (child) into their family through legal means and raises them as his own child.
     */
    v3_RoleCode_AdoptiveFather: {
        code: "ADOPTF",
        display: "adoptive father",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role (father) is a female who has taken the scoper (child) into their family through legal means and raises them as her own child.
     */
    v3_RoleCode_AdoptiveMother: {
        code: "ADOPTM",
        display: "adoptive mother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role (parent) has taken the scoper (child) into their family through legal means and raises them as his or her own child.
     */
    v3_RoleCode_AdoptiveParent: {
        code: "ADOPTP",
        display: "adoptive parent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a sister of the scoping person's mother or father.
     */
    v3_RoleCode_Aunt: {
        code: "AUNT",
        display: "aunt",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a male sharing one or both parents in common with the scoping entity.
     */
    v3_RoleCode_Brother: {
        code: "BRO",
        display: "brother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is: (1) a brother of the scoping person's spouse, or (2) the husband of the scoping person's sister, or (3) the husband of a sister of the scoping person's spouse.
     */
    v3_RoleCode_BrotherInLaw: {
        code: "BROINLAW",
        display: "brother-in-law",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a child of the scoping entity.
     */
    v3_RoleCode_Child: {
        code: "CHILD",
        display: "child",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    v3_RoleCode_AdoptedChild: {
        code: "CHLDADOPT",
        display: "adopted child",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    v3_RoleCode_FosterChild: {
        code: "CHLDFOST",
        display: "foster child",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the spouse of scoping person's child.
     */
    v3_RoleCode_ChildInLaw: {
        code: "CHLDINLAW",
        display: "child-in-law",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a relative of the scoping person descended from a common ancestor, such as a 	grandparent, by two or more steps in a diverging line.
     */
    v3_RoleCode_Cousin: {
        code: "COUSN",
        display: "cousin",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a female offspring of the scoping entity (parent).
     */
    v3_RoleCode_NaturalDaughter: {
        code: "DAU",
        display: "natural daughter",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a female child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    v3_RoleCode_AdoptedDaughter: {
        code: "DAUADOPT",
        display: "adopted daughter",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description: The player of the role is a female child (of any type) of scoping entity (parent)
     */
    v3_RoleCode_Daughter: {
        code: "DAUC",
        display: "daughter",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a female child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    v3_RoleCode_FosterDaughter: {
        code: "DAUFOST",
        display: "foster daughter",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the wife of scoping person's son.
     */
    v3_RoleCode_DaughterInLaw: {
        code: "DAUINLAW",
        display: "daughter in-law",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role cohabits with the scoping person but is not the scoping person's spouse.
     */
    v3_RoleCode_DomesticPartner: {
        code: "DOMPART",
        display: "domestic partner",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description: A family member not having an immediate genetic or legal relationship e.g. Aunt, cousin, great grandparent, grandchild, grandparent, niece, nephew or uncle.
     */
    v3_RoleCode_ExtendedFamilyMember: {
        code: "EXT",
        display: "extended family member",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A relationship between two people characterizing their "familial" relationship
     */
    v3_RoleCode_FamilyMember: {
        code: "FAMMEMB",
        display: "family member",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Player of the role was previously joined to the scoping person in marriage and this marriage is now dissolved and inactive.
     *
     *
     *                            Usage Note: This is significant to indicate as some jurisdictions have different legal requirements for former spouse to access the patient's record, from a general friend.
     */
    v3_RoleCode_FormerSpouse: {
        code: "FMRSPS",
        display: "former spouse",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a person who is known, liked, and trusted by the scoping person.
     */
    v3_RoleCode_UnrelatedFriend: {
        code: "FRND",
        display: "unrelated friend",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a male who begets or raises or nurtures the scoping entity (child).
     */
    v3_RoleCode_Father: {
        code: "FTH",
        display: "father",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role (parent) who is a male state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    v3_RoleCode_FosterFather: {
        code: "FTHFOST",
        display: "foster father",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the father of the scoping person's husband or wife.
     */
    v3_RoleCode_FatherInLaw: {
        code: "FTHINLAW",
        display: "father-in-law",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The scoper and player were carried in the same womb and share common biological parents but are the product of distinct egg/sperm pairs.
     */
    v3_RoleCode_FraternalTwin: {
        code: "FTWIN",
        display: "fraternal twin",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The scoper was carried in the same womb as the male player and shares common biological parents but is the product of a distinct egg/sperm pair.
     */
    v3_RoleCode_FraternalTwinBrother: {
        code: "FTWINBRO",
        display: "fraternal twin brother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The scoper was carried in the same womb as the female player and shares common biological parents but is the product of a distinct egg/sperm pair.
     */
    v3_RoleCode_FraternalTwinSister: {
        code: "FTWINSIS",
        display: "fraternal twin sister",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player is a female whose womb carries the fetus of the scoper.  Generally used when the gestational mother and natural mother are not the same.
     */
    v3_RoleCode_GestationalMother: {
        code: "GESTM",
        display: "gestational mother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the father of the scoping person's grandparent.
     */
    v3_RoleCode_GreatGrandfather: {
        code: "GGRFTH",
        display: "great grandfather",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the mother of the scoping person's grandparent.
     */
    v3_RoleCode_GreatGrandmother: {
        code: "GGRMTH",
        display: "great grandmother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a parent of the scoping person's grandparent.
     */
    v3_RoleCode_GreatGrandparent: {
        code: "GGRPRN",
        display: "great grandparent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the father of the scoping person's mother or father.
     */
    v3_RoleCode_Grandfather: {
        code: "GRFTH",
        display: "grandfather",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the mother of the scoping person's mother or father.
     */
    v3_RoleCode_Grandmother: {
        code: "GRMTH",
        display: "grandmother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a child of the scoping person's son or daughter.
     */
    v3_RoleCode_Grandchild: {
        code: "GRNDCHILD",
        display: "grandchild",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a daughter of the scoping person's son or daughter.
     */
    v3_RoleCode_Granddaughter: {
        code: "GRNDDAU",
        display: "granddaughter",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a son of the scoping person's son or daughter.
     */
    v3_RoleCode_Grandson: {
        code: "GRNDSON",
        display: "grandson",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a parent of the scoping person's mother or father.
     */
    v3_RoleCode_Grandparent: {
        code: "GRPRN",
        display: "grandparent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a male related to the scoping entity by sharing only one biological parent.
     */
    v3_RoleCode_HalfBrother: {
        code: "HBRO",
        display: "half-brother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is related to the scoping entity by sharing only one biological parent.
     */
    v3_RoleCode_HalfSibling: {
        code: "HSIB",
        display: "half-sibling",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a female related to the scoping entity by sharing only one biological parent.
     */
    v3_RoleCode_HalfSister: {
        code: "HSIS",
        display: "half-sister",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a man joined to a woman (scoping person) in marriage.
     */
    v3_RoleCode_Husband: {
        code: "HUSB",
        display: "husband",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A relationship between an individual and a member of their spousal partner's immediate family.
     */
    v3_RoleCode_Inlaw: {
        code: "INLAW",
        display: "inlaw",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The scoper and player are offspring of the same egg-sperm pair.
     */
    v3_RoleCode_IdenticalTwin: {
        code: "ITWIN",
        display: "identical twin",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The male scoper is an offspring of the same egg-sperm pair as the male player.
     */
    v3_RoleCode_IdenticalTwinBrother: {
        code: "ITWINBRO",
        display: "identical twin brother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The female scoper is an offspring of the same egg-sperm pair as the female player.
     */
    v3_RoleCode_IdenticalTwinSister: {
        code: "ITWINSIS",
        display: "identical twin sister",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is a biological sister of the scoping person's biological mother.
     */
    v3_RoleCode_MaternalAunt: {
        code: "MAUNT",
        display: "maternal aunt",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's mother's side, such as a grandparent, by two or more steps in a diverging line.
     */
    v3_RoleCode_MaternalCousin: {
        code: "MCOUSN",
        display: "maternal cousin",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is the biological father of the scoping person's biological mother's parent.
     */
    v3_RoleCode_MaternalGreatGrandfather: {
        code: "MGGRFTH",
        display: "maternal great-grandfather",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is the biological mother of the scoping person's biological mother's parent.
     */
    v3_RoleCode_MaternalGreatGrandmother: {
        code: "MGGRMTH",
        display: "maternal great-grandmother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is a biological parent of the scoping person's biological mother's parent.
     */
    v3_RoleCode_MaternalGreatGrandparent: {
        code: "MGGRPRN",
        display: "maternal great-grandparent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is the biological father of the scoping person's biological mother.
     */
    v3_RoleCode_MaternalGrandfather: {
        code: "MGRFTH",
        display: "maternal grandfather",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is the biological mother of the scoping person's biological mother.
     */
    v3_RoleCode_MaternalGrandmother: {
        code: "MGRMTH",
        display: "maternal grandmother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is the biological parent of the scoping person's biological mother.
     */
    v3_RoleCode_MaternalGrandparent: {
        code: "MGRPRN",
        display: "maternal grandparent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a female who conceives, gives birth to, or raises and nurtures the scoping entity (child).
     */
    v3_RoleCode_Mother: {
        code: "MTH",
        display: "mother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role (parent) who is a female state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    v3_RoleCode_FosterMother: {
        code: "MTHFOST",
        display: "foster mother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the mother of the scoping person's husband or wife.
     */
    v3_RoleCode_MotherInLaw: {
        code: "MTHINLAW",
        display: "mother-in-law",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is a biological brother of the scoping person's biological mother.
     */
    v3_RoleCode_MaternalUncle: {
        code: "MUNCLE",
        display: "maternal uncle",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role lives near or next to the 	scoping person.
     */
    v3_RoleCode_Neighbor: {
        code: "NBOR",
        display: "neighbor",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a male having the same biological parents as the scoping entity.
     */
    v3_RoleCode_NaturalBrother: {
        code: "NBRO",
        display: "natural brother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is an offspring of the scoping entity as determined by birth.
     */
    v3_RoleCode_NaturalChild: {
        code: "NCHILD",
        display: "natural child",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a son of the scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    v3_RoleCode_Nephew: {
        code: "NEPHEW",
        display: "nephew",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a male who begets the scoping entity (child).
     */
    v3_RoleCode_NaturalFather: {
        code: "NFTH",
        display: "natural father",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Indicates the biologic male parent of a fetus.
     */
    v3_RoleCode_NaturalFatherOfFetus: {
        code: "NFTHF",
        display: "natural father of fetus",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a daughter of the scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    v3_RoleCode_Niece: {
        code: "NIECE",
        display: "niece",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a child of scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    v3_RoleCode_NieceNephew: {
        code: "NIENEPH",
        display: "niece/nephew",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a female who conceives or gives birth to the scoping entity (child).
     */
    v3_RoleCode_NaturalMother: {
        code: "NMTH",
        display: "natural mother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player is the biologic female parent of the scoping fetus.
     */
    v3_RoleCode_NaturalMotherOfFetus: {
        code: "NMTHF",
        display: "natural mother of fetus",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * natural parent
     */
    v3_RoleCode_NaturalParent: {
        code: "NPRN",
        display: "natural parent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role has both biological parents in common with the scoping entity.
     */
    v3_RoleCode_NaturalSibling: {
        code: "NSIB",
        display: "natural sibling",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a female having the same biological parents as the scoping entity.
     */
    v3_RoleCode_NaturalSister: {
        code: "NSIS",
        display: "natural sister",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    v2_0131_Other: {
        code: "O",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/v2-0131"
    },
    /**
     * The relationship that a person has with his or her self.
     */
    v3_RoleCode_Self: {
        code: "ONESELF",
        display: "self",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is a biological sister of the scoping person's biological father.
     */
    v3_RoleCode_PaternalAunt: {
        code: "PAUNT",
        display: "paternal aunt",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's father's side, such as a grandparent, by two or more steps in a diverging line.
     */
    v3_RoleCode_PaternalCousin: {
        code: "PCOUSN",
        display: "paternal cousin",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is the biological father of the scoping person's biological father's parent.
     */
    v3_RoleCode_PaternalGreatGrandfather: {
        code: "PGGRFTH",
        display: "paternal great-grandfather",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is the biological mother of the scoping person's biological father's parent.
     */
    v3_RoleCode_PaternalGreatGrandmother: {
        code: "PGGRMTH",
        display: "paternal great-grandmother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is a biological parent of the scoping person's biological father's parent.
     */
    v3_RoleCode_PaternalGreatGrandparent: {
        code: "PGGRPRN",
        display: "paternal great-grandparent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is the biological father of the scoping person's biological father.
     */
    v3_RoleCode_PaternalGrandfather: {
        code: "PGRFTH",
        display: "paternal grandfather",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is the biological mother of the scoping person's biological father.
     */
    v3_RoleCode_PaternalGrandmother: {
        code: "PGRMTH",
        display: "paternal grandmother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is the biological parent of the scoping person's biological father.
     */
    v3_RoleCode_PaternalGrandparent: {
        code: "PGRPRN",
        display: "paternal grandparent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is one who begets, gives birth to, or nurtures and raises the scoping entity (child).
     */
    v3_RoleCode_Parent: {
        code: "PRN",
        display: "parent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role (parent) who is a state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    v3_RoleCode_FosterParent: {
        code: "PRNFOST",
        display: "foster parent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the parent of scoping person's husband or wife.
     */
    v3_RoleCode_ParentInLaw: {
        code: "PRNINLAW",
        display: "parent in-law",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description:The player of the role is a biological brother of the scoping person's biological father.
     */
    v3_RoleCode_PaternalUncle: {
        code: "PUNCLE",
        display: "paternal uncle",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * One who shares living quarters with the subject.
     */
    v3_RoleCode_Roommate: {
        code: "ROOM",
        display: "Roommate",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role shares one or both parents in common with the scoping entity.
     */
    v3_RoleCode_Sibling: {
        code: "SIB",
        display: "sibling",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is: (1) a sibling of the scoping person's spouse, or (2) the spouse of the scoping person's sibling, or (3) the spouse of a sibling of the scoping person's spouse.
     */
    v3_RoleCode_SiblingInLaw: {
        code: "SIBINLAW",
        display: "sibling in-law",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A person who is important to one's well being; especially a spouse or one in a similar relationship.  (The player is the one who is important)
     */
    v3_RoleCode_SignificantOther: {
        code: "SIGOTHR",
        display: "significant other",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a female sharing one or both parents in common with the scoping entity.
     */
    v3_RoleCode_Sister: {
        code: "SIS",
        display: "sister",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is: (1) a sister of the scoping person's spouse, or (2) the wife of the scoping person's brother, or (3) the wife of a brother of the scoping person's spouse.
     */
    v3_RoleCode_SisterInLaw: {
        code: "SISINLAW",
        display: "sister-in-law",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a male offspring of the scoping entity (parent).
     */
    v3_RoleCode_NaturalSon: {
        code: "SON",
        display: "natural son",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a male child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    v3_RoleCode_AdoptedSon: {
        code: "SONADOPT",
        display: "adopted son",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description: The player of the role is a male child (of any type) of scoping entity (parent)
     */
    v3_RoleCode_Son: {
        code: "SONC",
        display: "son",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a male child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    v3_RoleCode_FosterSon: {
        code: "SONFOST",
        display: "foster son",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the husband of scoping person's daughter.
     */
    v3_RoleCode_SonInLaw: {
        code: "SONINLAW",
        display: "son in-law",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a marriage partner of the scoping person.
     */
    v3_RoleCode_Spouse: {
        code: "SPS",
        display: "spouse",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a son of the scoping person's stepparent.
     */
    v3_RoleCode_Stepbrother: {
        code: "STPBRO",
        display: "stepbrother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a child of the scoping person's spouse by a previous union.
     */
    v3_RoleCode_StepChild: {
        code: "STPCHLD",
        display: "step child",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a daughter of the scoping person's spouse by a previous union.
     */
    v3_RoleCode_Stepdaughter: {
        code: "STPDAU",
        display: "stepdaughter",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the husband of scoping person's mother and not the scoping person's natural father.
     */
    v3_RoleCode_Stepfather: {
        code: "STPFTH",
        display: "stepfather",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the wife of scoping person's father and not the scoping person's natural mother.
     */
    v3_RoleCode_Stepmother: {
        code: "STPMTH",
        display: "stepmother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is the spouse of the scoping person's parent and not the scoping person's natural parent.
     */
    v3_RoleCode_StepParent: {
        code: "STPPRN",
        display: "step parent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a child of the scoping person's stepparent.
     */
    v3_RoleCode_StepSibling: {
        code: "STPSIB",
        display: "step sibling",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a daughter of the scoping person's stepparent.
     */
    v3_RoleCode_Stepsister: {
        code: "STPSIS",
        display: "stepsister",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a son of the scoping person's spouse by a previous union.
     */
    v3_RoleCode_Stepson: {
        code: "STPSON",
        display: "stepson",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The scoper and player were carried in the same womb and shared common biological parents.
     */
    v3_RoleCode_Twin: {
        code: "TWIN",
        display: "twin",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The scoper was carried in the same womb as the male player and shares common biological parents.
     */
    v3_RoleCode_TwinBrother: {
        code: "TWINBRO",
        display: "twin brother",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The scoper was carried in the same womb as the female player and shares common biological parents.
     */
    v3_RoleCode_TwinSister: {
        code: "TWINSIS",
        display: "twin sister",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a brother of the scoping person's mother or father.
     */
    v3_RoleCode_Uncle: {
        code: "UNCLE",
        display: "uncle",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The player of the role is a woman joined to a man (scoping person) in marriage.
     */
    v3_RoleCode_Wife: {
        code: "WIFE",
        display: "wife",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    }
};
