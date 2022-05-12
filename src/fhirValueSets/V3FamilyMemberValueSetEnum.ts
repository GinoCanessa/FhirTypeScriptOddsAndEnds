// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://terminology.hl7.org/ValueSet/v3-FamilyMember|2014-03-26

/**
 *  A relationship between two people characterizing their "familial" relationship
 */
export enum V3FamilyMemberValueSetEnum {
  /**
   * ADOPTF: The player of the role (father) is a male who has taken the scoper (child) into their family through legal means and raises them as his own child.
   */
  AdoptiveFather = "ADOPTF",
  /**
   * ADOPTM: The player of the role (father) is a female who has taken the scoper (child) into their family through legal means and raises them as her own child.
   */
  AdoptiveMother = "ADOPTM",
  /**
   * ADOPTP: The player of the role (parent) has taken the scoper (child) into their family through legal means and raises them as his or her own child.
   */
  AdoptiveParent = "ADOPTP",
  /**
   * AUNT: The player of the role is a sister of the scoping person's mother or father.
   */
  Aunt = "AUNT",
  /**
   * BRO: The player of the role is a male sharing one or both parents in common with the scoping entity.
   */
  Brother = "BRO",
  /**
   * BROINLAW: The player of the role is: (1) a brother of the scoping person's spouse, or (2) the husband of the scoping person's sister, or (3) the husband of a sister of the scoping person's spouse.
   */
  BrotherInLaw = "BROINLAW",
  /**
   * CHILD: The player of the role is a child of the scoping entity.
   */
  Child = "CHILD",
  /**
   * CHLDADOPT: The player of the role is a child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
   */
  AdoptedChild = "CHLDADOPT",
  /**
   * CHLDFOST: The player of the role is a child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
   */
  FosterChild = "CHLDFOST",
  /**
   * CHLDINLAW: The player of the role is the spouse of scoping person's child.
   */
  ChildInLaw = "CHLDINLAW",
  /**
   * COUSN: The player of the role is a relative of the scoping person descended from a common ancestor, such as a 	grandparent, by two or more steps in a diverging line.
   */
  Cousin = "COUSN",
  /**
   * DAU: The player of the role is a female offspring of the scoping entity (parent).
   */
  NaturalDaughter = "DAU",
  /**
   * DAUADOPT: The player of the role is a female child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
   */
  AdoptedDaughter = "DAUADOPT",
  /**
   * DAUC: Description: The player of the role is a female child (of any type) of scoping entity (parent)
   */
  Daughter = "DAUC",
  /**
   * DAUFOST: The player of the role is a female child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
   */
  FosterDaughter = "DAUFOST",
  /**
   * DAUINLAW: The player of the role is the wife of scoping person's son.
   */
  DaughterInLaw = "DAUINLAW",
  /**
   * DOMPART: The player of the role cohabits with the scoping person but is not the scoping person's spouse.
   */
  DomesticPartner = "DOMPART",
  /**
   * EXT: Description: A family member not having an immediate genetic or legal relationship e.g. Aunt, cousin, great grandparent, grandchild, grandparent, niece, nephew or uncle.
   */
  ExtendedFamilyMember = "EXT",
  /**
   * FAMMEMB: A relationship between two people characterizing their "familial" relationship
   */
  FamilyMember = "FAMMEMB",
  /**
   * FMRSPS: Player of the role was previously joined to the scoping person in marriage and this marriage is now dissolved and inactive.
   * 
   *                         
   *                            Usage Note: This is significant to indicate as some jurisdictions have different legal requirements for former spouse to access the patient's record, from a general friend.
   */
  FormerSpouse = "FMRSPS",
  /**
   * FTH: The player of the role is a male who begets or raises or nurtures the scoping entity (child).
   */
  Father = "FTH",
  /**
   * FTHFOST: The player of the role (parent) who is a male state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
   * 
   *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
   */
  FosterFather = "FTHFOST",
  /**
   * FTHINLAW: The player of the role is the father of the scoping person's husband or wife.
   */
  FatherInLaw = "FTHINLAW",
  /**
   * FTWIN: The scoper and player were carried in the same womb and share common biological parents but are the product of distinct egg/sperm pairs.
   */
  FraternalTwin = "FTWIN",
  /**
   * FTWINBRO: The scoper was carried in the same womb as the male player and shares common biological parents but is the product of a distinct egg/sperm pair.
   */
  FraternalTwinBrother = "FTWINBRO",
  /**
   * FTWINSIS: The scoper was carried in the same womb as the female player and shares common biological parents but is the product of a distinct egg/sperm pair.
   */
  FraternalTwinSister = "FTWINSIS",
  /**
   * GESTM: The player is a female whose womb carries the fetus of the scoper.  Generally used when the gestational mother and natural mother are not the same.
   */
  GestationalMother = "GESTM",
  /**
   * GGRFTH: The player of the role is the father of the scoping person's grandparent.
   */
  GreatGrandfather = "GGRFTH",
  /**
   * GGRMTH: The player of the role is the mother of the scoping person's grandparent.
   */
  GreatGrandmother = "GGRMTH",
  /**
   * GGRPRN: The player of the role is a parent of the scoping person's grandparent.
   */
  GreatGrandparent = "GGRPRN",
  /**
   * GRFTH: The player of the role is the father of the scoping person's mother or father.
   */
  Grandfather = "GRFTH",
  /**
   * GRMTH: The player of the role is the mother of the scoping person's mother or father.
   */
  Grandmother = "GRMTH",
  /**
   * GRNDCHILD: The player of the role is a child of the scoping person's son or daughter.
   */
  Grandchild = "GRNDCHILD",
  /**
   * GRNDDAU: The player of the role is a daughter of the scoping person's son or daughter.
   */
  Granddaughter = "GRNDDAU",
  /**
   * GRNDSON: The player of the role is a son of the scoping person's son or daughter.
   */
  Grandson = "GRNDSON",
  /**
   * GRPRN: The player of the role is a parent of the scoping person's mother or father.
   */
  Grandparent = "GRPRN",
  /**
   * HBRO: The player of the role is a male related to the scoping entity by sharing only one biological parent.
   */
  HalfBrother = "HBRO",
  /**
   * HSIB: The player of the role is related to the scoping entity by sharing only one biological parent.
   */
  HalfSibling = "HSIB",
  /**
   * HSIS: The player of the role is a female related to the scoping entity by sharing only one biological parent.
   */
  HalfSister = "HSIS",
  /**
   * HUSB: The player of the role is a man joined to a woman (scoping person) in marriage.
   */
  Husband = "HUSB",
  /**
   * INLAW: A relationship between an individual and a member of their spousal partner's immediate family.
   */
  Inlaw = "INLAW",
  /**
   * ITWIN: The scoper and player are offspring of the same egg-sperm pair.
   */
  IdenticalTwin = "ITWIN",
  /**
   * ITWINBRO: The male scoper is an offspring of the same egg-sperm pair as the male player.
   */
  IdenticalTwinBrother = "ITWINBRO",
  /**
   * ITWINSIS: The female scoper is an offspring of the same egg-sperm pair as the female player.
   */
  IdenticalTwinSister = "ITWINSIS",
  /**
   * MAUNT: Description:The player of the role is a biological sister of the scoping person's biological mother.
   */
  MaternalAunt = "MAUNT",
  /**
   * MCOUSN: Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's mother's side, such as a grandparent, by two or more steps in a diverging line.
   */
  MaternalCousin = "MCOUSN",
  /**
   * MGGRFTH: Description:The player of the role is the biological father of the scoping person's biological mother's parent.
   */
  MaternalGreatGrandfather = "MGGRFTH",
  /**
   * MGGRMTH: Description:The player of the role is the biological mother of the scoping person's biological mother's parent.
   */
  MaternalGreatGrandmother = "MGGRMTH",
  /**
   * MGGRPRN: Description:The player of the role is a biological parent of the scoping person's biological mother's parent.
   */
  MaternalGreatGrandparent = "MGGRPRN",
  /**
   * MGRFTH: Description:The player of the role is the biological father of the scoping person's biological mother.
   */
  MaternalGrandfather = "MGRFTH",
  /**
   * MGRMTH: Description:The player of the role is the biological mother of the scoping person's biological mother.
   */
  MaternalGrandmother = "MGRMTH",
  /**
   * MGRPRN: Description:The player of the role is the biological parent of the scoping person's biological mother.
   */
  MaternalGrandparent = "MGRPRN",
  /**
   * MTH: The player of the role is a female who conceives, gives birth to, or raises and nurtures the scoping entity (child).
   */
  Mother = "MTH",
  /**
   * MTHFOST: The player of the role (parent) who is a female state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
   * 
   *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
   */
  FosterMother = "MTHFOST",
  /**
   * MTHINLAW: The player of the role is the mother of the scoping person's husband or wife.
   */
  MotherInLaw = "MTHINLAW",
  /**
   * MUNCLE: Description:The player of the role is a biological brother of the scoping person's biological mother.
   */
  MaternalUncle = "MUNCLE",
  /**
   * NBRO: The player of the role is a male having the same biological parents as the scoping entity.
   */
  NaturalBrother = "NBRO",
  /**
   * NCHILD: The player of the role is an offspring of the scoping entity as determined by birth.
   */
  NaturalChild = "NCHILD",
  /**
   * NEPHEW: The player of the role is a son of the scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
   */
  Nephew = "NEPHEW",
  /**
   * NFTH: The player of the role is a male who begets the scoping entity (child).
   */
  NaturalFather = "NFTH",
  /**
   * NFTHF: Indicates the biologic male parent of a fetus.
   */
  NaturalFatherOfFetus = "NFTHF",
  /**
   * NIECE: The player of the role is a daughter of the scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
   */
  Niece = "NIECE",
  /**
   * NIENEPH: The player of the role is a child of scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
   */
  NieceNephew = "NIENEPH",
  /**
   * NMTH: The player of the role is a female who conceives or gives birth to the scoping entity (child).
   */
  NaturalMother = "NMTH",
  /**
   * NMTHF: The player is the biologic female parent of the scoping fetus.
   */
  NaturalMotherOfFetus = "NMTHF",
  /**
   * NPRN: natural parent
   */
  NaturalParent = "NPRN",
  /**
   * NSIB: The player of the role has both biological parents in common with the scoping entity.
   */
  NaturalSibling = "NSIB",
  /**
   * NSIS: The player of the role is a female having the same biological parents as the scoping entity.
   */
  NaturalSister = "NSIS",
  /**
   * PAUNT: Description:The player of the role is a biological sister of the scoping person's biological father.
   */
  PaternalAunt = "PAUNT",
  /**
   * PCOUSN: Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's father's side, such as a grandparent, by two or more steps in a diverging line.
   */
  PaternalCousin = "PCOUSN",
  /**
   * PGGRFTH: Description:The player of the role is the biological father of the scoping person's biological father's parent.
   */
  PaternalGreatGrandfather = "PGGRFTH",
  /**
   * PGGRMTH: Description:The player of the role is the biological mother of the scoping person's biological father's parent.
   */
  PaternalGreatGrandmother = "PGGRMTH",
  /**
   * PGGRPRN: Description:The player of the role is a biological parent of the scoping person's biological father's parent.
   */
  PaternalGreatGrandparent = "PGGRPRN",
  /**
   * PGRFTH: Description:The player of the role is the biological father of the scoping person's biological father.
   */
  PaternalGrandfather = "PGRFTH",
  /**
   * PGRMTH: Description:The player of the role is the biological mother of the scoping person's biological father.
   */
  PaternalGrandmother = "PGRMTH",
  /**
   * PGRPRN: Description:The player of the role is the biological parent of the scoping person's biological father.
   */
  PaternalGrandparent = "PGRPRN",
  /**
   * PRN: The player of the role is one who begets, gives birth to, or nurtures and raises the scoping entity (child).
   */
  Parent = "PRN",
  /**
   * PRNFOST: The player of the role (parent) who is a state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
   * 
   *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
   */
  FosterParent = "PRNFOST",
  /**
   * PRNINLAW: The player of the role is the parent of scoping person's husband or wife.
   */
  ParentInLaw = "PRNINLAW",
  /**
   * PUNCLE: Description:The player of the role is a biological brother of the scoping person's biological father.
   */
  PaternalUncle = "PUNCLE",
  /**
   * SIB: The player of the role shares one or both parents in common with the scoping entity.
   */
  Sibling = "SIB",
  /**
   * SIBINLAW: The player of the role is: (1) a sibling of the scoping person's spouse, or (2) the spouse of the scoping person's sibling, or (3) the spouse of a sibling of the scoping person's spouse.
   */
  SiblingInLaw = "SIBINLAW",
  /**
   * SIGOTHR: A person who is important to one's well being; especially a spouse or one in a similar relationship.  (The player is the one who is important)
   */
  SignificantOther = "SIGOTHR",
  /**
   * SIS: The player of the role is a female sharing one or both parents in common with the scoping entity.
   */
  Sister = "SIS",
  /**
   * SISINLAW: The player of the role is: (1) a sister of the scoping person's spouse, or (2) the wife of the scoping person's brother, or (3) the wife of a brother of the scoping person's spouse.
   */
  SisterInLaw = "SISINLAW",
  /**
   * SON: The player of the role is a male offspring of the scoping entity (parent).
   */
  NaturalSon = "SON",
  /**
   * SONADOPT: The player of the role is a male child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
   */
  AdoptedSon = "SONADOPT",
  /**
   * SONC: Description: The player of the role is a male child (of any type) of scoping entity (parent)
   */
  Son = "SONC",
  /**
   * SONFOST: The player of the role is a male child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
   */
  FosterSon = "SONFOST",
  /**
   * SONINLAW: The player of the role is the husband of scoping person's daughter.
   */
  SonInLaw = "SONINLAW",
  /**
   * SPS: The player of the role is a marriage partner of the scoping person.
   */
  Spouse = "SPS",
  /**
   * STPBRO: The player of the role is a son of the scoping person's stepparent.
   */
  Stepbrother = "STPBRO",
  /**
   * STPCHLD: The player of the role is a child of the scoping person's spouse by a previous union.
   */
  StepChild = "STPCHLD",
  /**
   * STPDAU: The player of the role is a daughter of the scoping person's spouse by a previous union.
   */
  Stepdaughter = "STPDAU",
  /**
   * STPFTH: The player of the role is the husband of scoping person's mother and not the scoping person's natural father.
   */
  Stepfather = "STPFTH",
  /**
   * STPMTH: The player of the role is the wife of scoping person's father and not the scoping person's natural mother.
   */
  Stepmother = "STPMTH",
  /**
   * STPPRN: The player of the role is the spouse of the scoping person's parent and not the scoping person's natural parent.
   */
  StepParent = "STPPRN",
  /**
   * STPSIB: The player of the role is a child of the scoping person's stepparent.
   */
  StepSibling = "STPSIB",
  /**
   * STPSIS: The player of the role is a daughter of the scoping person's stepparent.
   */
  Stepsister = "STPSIS",
  /**
   * STPSON: The player of the role is a son of the scoping person's spouse by a previous union.
   */
  Stepson = "STPSON",
  /**
   * TWIN: The scoper and player were carried in the same womb and shared common biological parents.
   */
  Twin = "TWIN",
  /**
   * TWINBRO: The scoper was carried in the same womb as the male player and shares common biological parents.
   */
  TwinBrother = "TWINBRO",
  /**
   * TWINSIS: The scoper was carried in the same womb as the female player and shares common biological parents.
   */
  TwinSister = "TWINSIS",
  /**
   * UNCLE: The player of the role is a brother of the scoping person's mother or father.
   */
  Uncle = "UNCLE",
  /**
   * WIFE: The player of the role is a woman joined to a man (scoping person) in marriage.
   */
  Wife = "WIFE",
}