var progress = [];
var guessWord = [];
var isWon = false;
var remainingAttempts = 13;

var hundredWords = [
  "climate",
  "confuse",
  "secretary",
  "architecture",
  "general",
  "property",
  "insistence",
  "freckle",
  "democratic",
  "critical",
  "rotation",
  "crosswalk",
  "terrify",
  "divorce",
  "tradition",
  "freedom",
  "falsify",
  "helpless",
  "perforate",
  "compensation",
  "occasion",
  "permanent",
  "excavate",
  "printer",
  "epicalyx",
  "grimace",
  "material",
  "intention",
  "eternal",
  "response",
  "confine",
  "mention",
  "allocation",
  "protest",
  "volunteer",
  "contrary",
  "appreciate",
  "manufacturer",
  "achievement",
  "favourite",
  "decoration",
  "pumpkin",
  "professional",
  "article",
  "gravity",
  "consumer",
  "selection",
  "interface",
  "grandmother",
  "radiation",
  "sickness",
  "presence",
  "affinity",
  "colleague",
  "ambiguity",
  "advantage",
  "dynamic",
  "formulate",
  "circulate",
  "discrimination",
  "fantasy",
  "protection",
  "cooperation",
  "graduate",
  "comfortable",
  "hostility",
  "control",
  "contemporary",
  "restaurant",
  "volcano",
  "advocate",
  "transform",
  "pension",
  "realize",
  "different",
  "explode",
  "gallery",
  "magnitude",
  "gesture",
  "economic",
  "articulate",
  "surface",
  "workout",
  "mainstream",
  "district",
  "electronics",
  "diameter",
  "executrix",
  "distribute",
  "language",
  "pleasant"
];

var userIneract = [
  "Nice work!",
  "Ops Wrong!",
  "Congratulations, WIN!!!",
  "Sorry you lost :(!!"
];
function updateDisplay(classID = String) {
  const guessScreen = document.querySelector(".guess-screen");
  const attemptsScreen = document.querySelector(".attempts");
  const progressScreen = document.querySelector(".guess-progress");

  if (classID === ".guess-screen") {
    var wordProgress = progress.join(" ");
    guessScreen.value = wordProgress;
  } else if (classID === ".attempts") {
    attemptsScreen.value = remainingAttempts;
  } else if (classID === ".progress") {
    progressScreen.value = userIneract[0];
  } else if (classID === ".no-progress") {
    progressScreen.value = userIneract[1];
  } else if (classID === ".won") {
    progressScreen.value = userIneract[2];
  } else if (classID === ".lost") {
    progressScreen.value = userIneract[3];
  } else if (classID === ".clear") {
    progressScreen.value = "";
  }
}

function resetGame() {
  guessWord = [];
  progress = [];
  isWon = false;
  remainingAttempts = 13;
  document.addEventListener("keydown", startGame);
}
function winCheck() {
  var count = progress.length;
  for (var i = 0; i < progress.length; i++) {
    if (progress[i] === "-" && remainingAttempts === 0) {
      updateDisplay(".lost");
      document.removeEventListener("keydown", keyPress);
      resetGame();
    } else if (progress[i] !== "-" && remainingAttempts > 0) {
      count = count - 1;
    }
  }
  if (count === 0) {
    updateDisplay(".won");
    document.removeEventListener("keydown", keyPress);
    resetGame();
  }
}
function randomPick() {
  var rand = Math.floor(Math.random() * hundredWords.length);
  var pickedWord = hundredWords[rand];
  guessWord = Object.values(pickedWord);
}
function startGame() {
  document.removeEventListener("keydown", startGame);
  randomPick();
  for (var i = 0; i < guessWord.length; i++) {
    progress.push("-");
  }
  updateDisplay(".guess-screen");
  updateDisplay(".attempts");
  updateDisplay(".clear");

  document.addEventListener("keydown", keyPress);
}
function keyPress(event) {
  var x = event.keyCode;
  var y = String.fromCharCode(x);
  var isMatch = false;
  for (var i = 0; i < guessWord.length; i++) {
    if (y.toLowerCase() === guessWord[i]) {
      progress[i] = guessWord[i];
      isMatch = true;
      updateDisplay(".guess-screen");
      updateDisplay(".attempts");
      updateDisplay(".progress");
    }
  }
  if (!isMatch) {
    remainingAttempts = remainingAttempts - 1;
    updateDisplay(".attempts");
    updateDisplay(".no-progress");
  }
  winCheck();
}
document.addEventListener("keydown", startGame);

// "account
// "delicate
// "horseshoe
// "application
// "arrogant
// "interactive
// "establish
// "handicap
// "fireplace
// "visible
// "generate
// "promise
// "squeeze
// "ostracize
// "achieve
// "limited
// "precedent
// "biscuit
// "student
// "cemetery
// "spokesperson
// "addition
// "mastermind
// "disorder
// "performer
// "tragedy
// "battlefield
// "publish
// "difficult
// "current
// "trolley
// "prevent
// "calendar
// "examination
// "biology
// "baseball
// "neutral
// "contraction
// "clothes
// "proposal
// "litigation
// "stadium
// "staircase
// "functional
// "initial
// "triangle
// "headquarters
// "engagement
// "defendant
// "texture
// "alcohol
// "incredible
// "unaware
// "deviation
// "paragraph
// "classify
// "break in
// "paradox
// "composer
// "represent
// "infrastructure
// "overeat
// "romantic
// "journal
// "inquiry
// "civilian
// "inflate
// "tribute
// "strength
// "request
// "century
// "railcar
// "displace
// "sculpture
// "contrast
// "timetable
// "quarter
// "density
// "perfume
// "uncertainty
// "convict
// "horizon
// "prediction
// "applaud
// "dictate
// "laboratory
// "conservative
// "hallway
// "welcome
// "girlfriend
// "prosper
// "garbage
// "indulge
// "snuggle
// "predict
// "undermine
// "brilliance
// "secular
// "exposure
// "fragment
// "strategic
// "inspiration
// "highway
// "message
// "excavation
// "champion
// "practical
// "president
// "buttocks
// "workshop
// "classroom
// "exhibition
// "photocopy
// "permission
// "talkative
// "majority
// "broadcast
// "opposite
// "minimum
// "charity
// "transport
// "sustain
// "loyalty
// "dialect
// "recommend
// "patience
// "commerce
// "suffering
// "scramble
// "situation
// "disability
// "compose
// "consultation
// "recording
// "environment
// "solution
// "display
// "remunerate
// "attitude
// "inspector
// "assignment
// "wedding
// "partner
// "tolerate
// "training
// "uniform
// "innovation
// "producer
// "wisecrack
// "witness
// "academy
// "allowance
// "hostile
// "embarrassment
// "responsible
// "drawing
// "color-blind
// "facility
// "instruction
// "correction
// "organisation
// "important
// "necklace
// "feminine
// "machinery
// "testify
// "realism
// "fixture
// "distort
// "citizen
// "motivation
// "chimney
// "fragrant
// "pasture
// "notorious
// "society
// "homosexual
// "conductor
// "quotation
// "skilled
// "interest
// "laborer
// "mathematics
// "admiration
// "disaster
// "impound
// "discover
// "incentive
// "reverse
// "endorse
// "laundry
// "parachute
// "indirect
// "railroad
// "implication
// "balance
// "pleasure
// "astonishing
// "perfect
// "relevance
// "depression
// "notebook
// "expectation
// "prisoner
// "shareholder
// "professor
// "attention
// "microphone
// "combine
// "dilemma
// "present
// "reproduce
// "feather
// "chocolate
// "develop
// "federation
// "human body
// "interference
// "revenge
// "essential
// "equation
// "continuation
// "contradiction
// "fortune
// "pneumonia
// "disposition
// "manager
// "quality
// "characteristic
// "approve
// "graphic
// "particular
// "preference
// "personality
// "lineage
// "advertising
// "background
// "prosecution
// "residence
// "variant
// "elegant
// "production
// "dressing
// "mutation
// "unlikely
// "regular
// "football
// "qualify
// "convert
// "certain
// "obligation
// "command
// "version
// "hunting
// "circulation
// "dialogue
// "priority
// "trouser
// "wording
// "qualified
// "employee
// "requirement
// "mislead
// "pursuit
// "shallow
// "percent
// "thought
// "agreement
// "entitlement
// "financial
// "reflection
// "exclusive
// "spectrum
// "marriage
// "intelligence
// "exchange
// "cupboard
// "evaluate
// "illusion
// "decrease
// "banquet
// "decorative
// "pressure
// "sausage
// "simplicity
// "species
// "dangerous
// "kinship
// "threshold
// "mistreat
// "participate
// "deserve
// "complex
// "reluctance
// "competition
// "convulsion
// "officer
// "fitness
// "psychology
// "exaggerate
// "descent
// "preparation
// "profession
// "distant
// "satisfaction
// "recognize
// "conventional
// "intervention
// "bargain
// "release
// "diagram
// "agriculture
// "orientation
// "explicit
// "accident
// "syndrome
// "disappointment
// "incongruous
// "crossing
// "opposition
// "teacher
// "lighter
// "opponent
// "security
// "accessible
// "traffic
// "potential
// "stomach
// "relationship
// "business
// "admission
// "particle
// "intermediate
// "dimension
// "bathtub
// "attract
// "observer
// "seminar
// "authority
// "separate
// "cultivate
// "finished
// "ceremony
// "reasonable
// "multimedia
// "activate
// "wilderness
// "discreet
// "serious
// "revolution
// "satisfied
// "miserable
// "charter
// "meaning
// "tendency
// "determine
// "increase
// "eyebrow
// "survival
// "dividend
// "describe
// "entertain
// "consciousness
// "rehearsal
// "fool around
// "reaction
// "highlight
// "judicial
// "economist
// "athlete
// "vehicle
// "mixture
// "overwhelm
// "cassette
// "vertical
// "constituency
// "demonstrate
// "abridge
// "swallow
// "passion
// "publication
// "overcharge
// "paralyzed
// "emergency
// "biography
// "approval
// "hemisphere
// "continuous
// "infinite
// "elaborate
// "routine
// "archive
// "deprive
// "coalition
// "organize
// "bathroom
// "criminal
// "marketing
// "sandwich
// "concert
// "provide
// "artificial
// "overall
// "illness
// "average
// "construct
// "receipt
// "umbrella
// "sweater
// "chimpanzee
// "network
// "superior
// "liberty
// "glacier
// "destruction
// "circumstance
// "candidate
// "royalty
// "faithful
// "committee
// "hypothesis
// "ancestor
// "related
// "tolerant
// "adoption
// "appoint
// "absolute
// "assessment
// "charismatic
// "opposed
// "habitat
// "password
// "revival
// "applied
// "miscarriage
// "steward
// "conservation
// "frighten
// "venture
// "guideline
// "conscience
// "provincial
// "acquaintance
// "definition
// "hypothesize
// "ignorance
// "casualty
// "cooperative
// "pedestrian
// "scenario
// "comprehensive
// "injection
// "convince
// "formula
// "attachment
// "familiar
// "company
// "maximum
// "commission
// "benefit
// "distributor
// "joystick
// "fluctuation
// "clearance
// "attractive
// "countryside
// "multiply
// "genetic
// "presidency
// "support
// "retailer
// "contempt
// "costume
// "operation
// "auction
// "judgment
// "expression
// "chapter
// "nonsense
// "compete
// "beneficiary
// "premature
// "retreat
// "original
// "instinct
// "despair
// "anniversary
// "momentum
// "offensive
// "surround
// "nomination
// "designer
// "terrace
// "inhibition
// "provoke
// "enhance
// "nominate
// "liability
// "revolutionary
// "communication
// "hesitate
// "enlarge
// "nervous
// "ambiguous
// "landowner
// "addicted
// "indication
// "harmful
// "crackpot
// "index finger
// "eliminate
// "posture
// "sensation
// "extract
// "physical
// "corruption
// "resource
// "progressive
// "fiction
// "survivor
// "constraint
// "wrestle
// "mosquito
// "weakness
// "reservoir
// "country
// "deliver
// "overlook
// "feeling
// "negotiation
// "grounds
// "education
// "assertive
// "imperial
// "provision
// "sensitive
// "reputation
// "old age
// "straight
// "regulation
// "advertise
// "ecstasy
// "criticism
// "hostage
// "courtship
// "mourning
// "customer
// "condition
// "approach
// "shatter
// "cruelty
// "integrated
// "absorption
// "salesperson
// "apology
// "grandfather
// "neighborhood
// "demonstration
// "technology
// "freight
// "flexible
// "sympathetic
// "tension
// "disagree
// "goalkeeper
// "theater
// "cell phone
// "audience
// "section
// "lecture
// "earthquake
// "dismiss
// "pattern
// "urgency
// "leftovers
// "champagne
// "genuine
// "craftsman
// "catalogue
// "emphasis
// "director
// "cucumber
// "auditor
// "reflect
// "conspiracy
// "hospital
// "brother
// "calculation
// "unlawful
// "veteran
// "appearance
// "village
// "identification
// "dribble
// "cylinder
// "strikebreaker
// "context
// "challenge
// "eavesdrop
// "dignity
// "session
// "sunrise
// "speaker
// "liberal
// "product
// "intensify
// "dramatic
// "ice cream
// "overview
// "straighten
// "discount
// "hardship
// "conversation
// "captain
// "preoccupation
// "improve
// "vegetarian
// "abolish
// "executive
// "adviser
// "representative
// "proclaim
// "frequency
// "omission
// "definite
// "shortage
// "credit card
// "willpower
// "edition
// "looting
// "deposit
// "concentration
// "consideration
// "practice
// "leadership
// "argument
// "element
// "purpose
// "proportion
// "distance
// "promote
// "effective
// "creation
// "summary
// "nuclear
// "temptation
// "profound
// "stumble
// "building
// "exemption
// "skeleton
// "stimulation
// "location
// "monstrous
// "offense
// "harvest
// "disappear
// "combination
// "cutting
// "plagiarize
// "responsibility
// "pavement
// "dentist
// "restrain
// "information
// "battery
// "chauvinist
// "ideology
// "resignation
// "confusion
// "cigarette
// "election
// "station
// "withdrawal
// "elephant
// "qualification
// "discourage
// "restless
// "obscure
// "deprivation
// "medicine
// "process
// "aluminium
// "cabinet
// "commitment
// "scandal
// "complication
// "digital
// "distortion
// "strange
// "reactor
// "suspect
// "repetition
// "movement
// "struggle
// "guerrilla
// "competence
// "introduction
// "depressed
// "improvement
// "apparatus
// "compound
// "address
// "blackmail
// "monarch
// "mushroom
// "accurate
// "activity
// "freighter
// "bloodshed
// "welfare
// "beautiful
// "objective
// "scholar
// "reliable
// "literature
// "jealous
// "glasses
// "magazine
// "culture
// "isolation
// "cottage
// "confession
// "attraction
// "prosecute
// "question
// "telephone
// "redundancy
// "collection
// "extinct
// "economy
// "correspond
// "college
// "innocent
// "plaintiff
// "recovery
// "flourish
// "announcement
// "broccoli
// "settlement
// "industry
// "presidential
