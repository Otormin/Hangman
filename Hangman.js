let playAgain = document.getElementById("playAgain")
let quitBtn = document.getElementById("quitBtn")
let randomWordUl = document.getElementById("randomWord-Ul")
let pole = document.getElementById("pole")
let suspension = document.getElementById("suspension")
let rope = document.getElementById("rope")
let head = document.getElementById("head")
let upperBody = document.getElementById("upperBody")
let stomach = document.getElementById("stomach")
let lowerBody = document.getElementById("lowerBody")
let wordReveal = document.getElementById("wordReveal")
let correctWords = document.getElementById("correctWords")
let wrongWords = document.getElementById("wrongWords")

let guessInput = document.getElementById("guessInput")
let guessButton = document.getElementById("guessButton")

let countingWrongWords = 0
let countingRightWords = 0
let correctGuesses = 0
let guessedLetters = []
let livesLost = 0
let word = ""

let words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla",
    "watermelon", "xigua", "yuzu", "zucchini", "avocado", "blackberry", "cantaloupe", "dragonfruit", "eggplant", "fennel",
    "guava", "jalapeno", "kumquat", "lime", "mulberry", "nectar", "olive", "passionfruit", "quinoa", "rhubarb",
    "soursop", "tamarind", "ugli", "velvet", "walnut", "xylophone", "yarrow", "zinnia", "aloe", "butterfly",
    "cactus", "daffodil", "eucalyptus", "forsythia", "gardenia", "hibiscus", "iris", "jasmine", "kelp", "lavender",
    "magnolia", "nightshade", "orchid", "petunia", "quince", "rose", "sunflower", "tulip", "violet", "willow",
    "zinnia", "armadillo", "buffalo", "chinchilla", "dolphin", "elephant", "flamingo", "giraffe", "hippopotamus", "iguana",
    "jaguar", "kangaroo", "lemur", "monkey", "narwhal", "octopus", "panda", "quokka", "raccoon", "sloth",
    "turtle", "urchin", "vulture", "whale", "xerus", "yak", "zebra", "anemone", "barnacle", "clam",
    "dolphin", "eel", "fish", "grouper", "haddock", "imitation", "jellyfish", "kettle", "lobster", "mackerel",
    "nectar", "octopus", "pufferfish", "quahog", "rockfish", "sardine", "tuna", "urchin", "viperfish", "wrasse",
    "xiphias", "yellowtail", "zander", "archaeopteryx", "bat", "cardinal", "dove", "eagle", "falcon", "goose",
    "heron", "ibis", "jay", "kingfisher", "lark", "macaw", "nightingale", "owl", "penguin", "quail",
    "robin", "sparrow", "toucan", "vulture", "wren", "xerus", "yarn", "zebra", "alkali", "bacteria",
    "cobalt", "dynamite", "element", "fluorine", "gold", "helium", "iodine", "jupiter", "krypton", "lithium",
    "manganese", "neon", "osmium", "plutonium", "quartz", "radium", "sodium", "titanium", "uranium", "vanadium",
    "water", "xenon", "yttrium", "zinc", "alchemy", "biology", "chemistry", "dynamics", "ecology", "fossil",
    "geology", "herbology", "ichthyology", "jungle", "kinesiology", "limnology", "mycology", "neuroscience", "ornithology", "psychology",
    "quantum", "radiation", "sediment", "taxonomy", "urethra", "vortex", "wavelength", "x-ray", "yoke", "zoology",
    "apricot", "basil", "cinnamon", "dill", "endive", "fennel", "ginger", "horseradish", "jalapeno", "kale",
    "leek", "mushroom", "nutmeg", "oregano", "parsley", "quinoa", "rosemary", "sage", "thyme", "vanilla",
    "watercress", "yam", "zucchini", "allspice", "blackcurrant", "cabbage", "dandelion", "endive", "fenugreek", "garlic",
    "harissa", "iceberg", "jicama", "kohlrabi", "lime", "miso", "nori", "olive", "pepper", "quince",
    "raspberry", "saffron", "tomato", "udon", "vanilla", "wasabi", "yarrow", "zucchini", "asparagus", "broccoli",
    "carrot", "daikon", "eggplant", "fiddlehead", "greenbean", "hubbard", "iceplant", "jalapeno", "kohlrabi", "leek",
    "mushroom", "napa", "okra", "parsnip", "quinoa", "rutabaga", "squash", "taro", "ukoy", "vichyssoise",
    "watermelon", "xigua", "yarrow", "zucchini", "abacus", "baboon", "cabbage", "dachshund", "elephant", "ferret",
    "giraffe", "hamster", "iguana", "jaguar", "kangaroo", "lemur", "monkey", "narwhal", "octopus", "parakeet",
    "quokka", "raccoon", "salamander", "tapir", "urchin", "viper", "walrus", "xerus", "yak", "zebra",
    "alligator", "bison", "cheetah", "dolphin", "emu", "flamingo", "gorilla", "hummingbird", "impala", "jellyfish",
    "koala", "lynx", "marmoset", "newt", "otter", "penguin", "quail", "rhinoceros", "seal", "turtle",
    "antelope", "bear", "crocodile", "donkey", "elephant", "ferret", "gecko", "hippopotamus", "impala", "jaguar",
    "kangaroo", "lemur", "meerkat", "narwhal", "ocelot", "puma", "quokka", "raccoon", "sloth", "tapir",
    "unicorn", "vulture", "whale", "xerus", "yak", "zebra", "airplane", "bicycle", "caravan", "drone", "elephant",
    "firetruck", "gondola", "helicopter", "iceberg", "jet", "kayak", "limo", "minivan", "nurse", "orbiter",
    "pickup", "quadcopter", "recreational", "snowmobile", "trailer", "utility", "van", "wagon", "xerox", "yacht",
    "zeppelin", "ant", "beetle", "caterpillar", "dragonfly", "echidna", "firefly", "grasshopper", "honeybee", "ladybug",
    "mosquito", "newt", "octopus", "prayingmantis", "quokka", "rolypoly", "scorpion", "tarantula", "urchin", "viper",
    "wasp", "xenops", "yellowjacket", "zebra", "abstract", "balance", "canvas", "dream", "earth", "fantasy",
    "gesture", "horizon", "illusion", "journey", "kaleidoscope", "landscape", "momentum", "nature", "ocean", "paradox",
    "quest", "reflection", "serenity", "time", "universe", "vortex", "whisper", "x-ray", "yonder", "zenith",
    "adventure", "beauty", "challenge", "daring", "exploration", "freedom", "growth", "harmony", "innovation", "joy",
    "knowledge", "legacy", "mystery", "nurture", "opportunity", "passion", "quest", "resilience", "success", "transformation",
    "unity", "vision", "wonder", "excitement", "gusto", "zeal", "apple", "banana", "cherry", "date", "elderberry",
    "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yuzu", "zucchini", "avocado", "blackberry",
    "cantaloupe", "dragonfruit", "eggplant", "fennel", "guava", "jalapeno", "kumquat", "lime", "mulberry", "nectar",
    "olive", "passionfruit", "quinoa", "rhubarb", "soursop", "tamarind", "ugli", "velvet", "walnut", "xylophone",
    "yarrow", "zebra", "aloe", "butterfly", "cactus", "daffodil", "eucalyptus", "forsythia", "gardenia", "hibiscus",
    "iris", "jasmine", "kelp", "lavender", "magnolia", "nightshade", "orchid", "petunia", "quince", "rose",
    "sunflower", "tulip", "violet", "willow", "zinnia", "armadillo", "buffalo", "chinchilla", "dolphin", "elephant",
    "flamingo", "giraffe", "hippopotamus", "iguana", "jaguar", "kangaroo", "lemur", "monkey", "narwhal", "octopus",
    "panda", "quokka", "raccoon", "sloth", "turtle", "urchin", "vulture", "whale", "xerus", "yak",
    "zebra", "anemone", "barnacle", "clam", "dolphin", "eel", "fish", "grouper", "haddock", "imitation",
    "jellyfish", "kettle", "lobster", "mackerel", "nectar", "octopus", "pufferfish", "quahog", "rockfish", "sardine",
    "tuna", "urchin", "viperfish", "wrasse", "xiphias", "yellowtail", "zander", "archaeopteryx", "bat", "cardinal",
    "dove", "eagle", "falcon", "goose", "heron", "ibis", "jay", "kingfisher", "lark", "macaw",
    "nightingale", "owl", "penguin", "quail", "robin", "sparrow", "toucan", "vulture", "wren", "xerus",
    "yarn", "zebra", "alkali", "bacteria", "cobalt", "dynamite", "element", "fluorine", "gold", "helium",
    "iodine", "jupiter", "krypton", "lithium", "manganese", "neon", "osmium", "plutonium", "quartz", "radium",
    "sodium", "titanium", "uranium", "vanadium", "water", "xenon", "yttrium", "zinc", "alchemy", "biology",
    "chemistry", "dynamics", "ecology", "fossil", "geology", "herbology", "ichthyology", "jungle", "kinesiology", "limnology",
    "mycology", "neuroscience", "ornithology", "psychology", "quantum", "radiation", "sediment", "taxonomy", "urethra", "vortex",
    "wavelength", "x-ray", "yoke", "zoology", "apricot", "basil", "cinnamon", "dill", "endive", "fennel", 
    "ginger", "horseradish", "jalapeno", "kale", "leek", "mushroom", "nutmeg", "oregano", "parsley", "quinoa", 
    "rosemary", "sage", "thyme", "vanilla", "watercress", "yam", "zucchini", "allspice", "blackcurrant", 
    "cabbage", "dandelion", "endive", "fenugreek", "garlic", "harissa", "iceberg", "jicama", "kohlrabi", "lime", 
    "miso", "nori", "olive", "pepper", "quince", "raspberry", "saffron", "tomato", "udon", "vanilla", 
    "wasabi", "yarrow", "zucchini", "asparagus", "broccoli", "carrot", "daikon", "eggplant", "fiddlehead", 
    "greenbean", "hubbard", "iceplant", "jalapeno", "kohlrabi", "leek", "mushroom", "napa", "okra", 
    "parsnip", "quinoa", "rutabaga", "squash", "taro", "ukoy", "vichyssoise", "watermelon", "xigua", "yarrow", 
    "zucchini", "abacus", "baboon", "caterpillar", "dragonfly", "echidna", "firefly", "grasshopper", "honeybee", 
    "ladybug", "mosquito", "newt", "octopus", "prayingmantis", "quokka", "rolypoly", "scorpion", "tarantula", 
    "urchin", "viper", "wasp", "xenops", "yellowjacket", "zebra", "abstract", "balance", "canvas", 
    "dream", "earth", "fantasy", "gesture", "horizon", "illusion", "journey", "kaleidoscope", "landscape", 
    "momentum", "nature", "ocean", "paradox", "quest", "reflection", "serenity", "time", "universe", 
    "vortex", "whisper", "x-ray", "yonder", "zenith", "adventure", "beauty", "challenge", "daring", "exploration", 
    "freedom", "growth", "harmony", "innovation", "joy", "knowledge", "legacy", "mystery", "nurture", "opportunity", 
    "passion", "quest", "resilience", "success", "transformation", "unity", "vision", "wonder", "excitement", 
    "gusto", "zeal", "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", 
    "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", 
    "ugli", "vanilla", "watermelon", "xigua", "yuzu", "zucchini", "avocado", "blackberry", "cantaloupe", 
    "dragonfruit", "eggplant", "fennel", "guava", "jalapeno", "kumquat", "lime", "mulberry", "nectar", 
    "olive", "passionfruit", "quinoa", "rhubarb", "soursop", "tamarind", "ugli", "velvet", "walnut", 
    "xylophone", "yarrow", "zebra", "aloe", "butterfly", "cactus", "daffodil", "eucalyptus", "forsythia", 
    "gardenia", "hibiscus", "iris", "jasmine", "kelp", "lavender", "magnolia", "nightshade", "orchid", 
    "petunia", "quince", "rose", "sunflower", "tulip", "violet", "willow", "zinnia", "armadillo", "buffalo", 
    "chinchilla", "dolphin", "elephant", "flamingo", "giraffe", "hippopotamus", "iguana", "jaguar", 
    "kangaroo", "lemur", "monkey", "narwhal", "octopus", "panda", "quokka", "raccoon", "sloth", "turtle", 
    "urchin", "vulture", "whale", "xerus", "yak", "zebra", "anemone", "barnacle", "clam", "dolphin", 
    "eel", "fish", "grouper", "haddock", "imitation", "jellyfish", "kettle", "lobster", "mackerel", 
    "nectar", "octopus", "pufferfish", "quahog", "rockfish", "sardine", "tuna", "urchin", "viperfish", 
    "wrasse", "xiphias", "yellowtail", "zander", "archaeopteryx", "bat", "cardinal", "dove", "eagle", 
    "falcon", "goose", "heron", "ibis", "jay", "kingfisher", "lark", "macaw", "nightingale", "owl", 
    "penguin", "quail", "robin", "sparrow", "toucan", "vulture", "wren", "xerus", "yarn", "zebra", 
    "alkali", "bacteria", "cobalt", "dynamite", "element", "fluorine", "gold", "helium", "iodine", 
    "jupiter", "krypton", "lithium", "manganese", "neon", "osmium", "plutonium", "quartz", "radium", 
    "sodium", "titanium", "uranium", "vanadium", "water", "xenon", "yttrium", "zinc", "alchemy", 
    "biology", "chemistry", "dynamics", "ecology", "fossil", "geology", "herbology", "ichthyology", 
    "jungle", "kinesiology", "limnology", "mycology", "neuroscience", "ornithology", "psychology", 
    "quantum", "radiation", "sediment", "taxonomy", "urethra", "vortex", "wavelength", "x-ray", 
    "yoke", "zoology", "apricot", "basil", "cinnamon", "dill", "endive", "fennel", "ginger", "horseradish", 
    "jalapeno", "kale", "leek", "mushroom", "nutmeg", "oregano", "parsley", "quinoa", "rosemary", 
    "sage", "thyme", "vanilla", "watercress", "yam", "zucchini", "allspice", "blackcurrant", 
    "cabbage", "dandelion", "endive", "fenugreek", "garlic", "harissa", "iceberg", "jicama", 
    "kohlrabi", "lime", "miso", "nori", "olive", "pepper", "quince", "raspberry", "saffron", "tomato", 
    "udon", "vanilla", "wasabi", "yarrow", "zucchini", "asparagus", "broccoli", "carrot", "daikon", 
    "eggplant", "fiddlehead", "greenbean", "hubbard", "iceplant", "jalapeno", "kohlrabi", "leek", 
    "mushroom", "napa", "okra", "parsnip", "quinoa", "rutabaga", "squash", "taro", "ukoy", 
    "vichyssoise", "watermelon", "xigua", "yarrow", "zucchini"
];

document.addEventListener("DOMContentLoaded", function() {
  pickNewWord()
})

function pickNewWord() {
  guessedLetters = []
  correctGuesses = 0
  livesLost = 0

  pole.style.display = "none"
  suspension.style.display = "none"
  rope.style.display = "none"
  head.style.display = "none"
  upperBody.style.display = "none"
  stomach.style.display = "none"
  lowerBody.style.display = "none"
  playAgain.style.display = "none"
  quitBtn.style.display = "none"
  wordReveal.style.display = "none"

  let randomNumber = Math.floor(Math.random() * words.length)
  word = words[randomNumber]

  let list = ""
  for (let i = 0; i < word.length; i++) {
    list += `<li class="unselectable">
      <p style="color: transparent;" id="letter-El-${i}" class="letters">${word[i]}</p>
    </li>`
  }
  randomWordUl.innerHTML = list
}

function handleGuess(guess) {
  guess = guess.toLowerCase()
  if (!guess || guess.length !== 1) return
  if (guessedLetters.includes(guess)) return

  if (!word.includes(guess)) {
    livesLost++
    if (livesLost === 1) pole.style.display = "block"
    else if (livesLost === 2) suspension.style.display = "block"
    else if (livesLost === 3) {
      rope.style.display = "block"
      head.style.display = "block"
    }
    else if (livesLost === 4) upperBody.style.display = "block"
    else if (livesLost === 5) stomach.style.display = "block"
    else if (livesLost === 6) {
      lowerBody.style.display = "block"
      quitBtn.style.display = "block"
      playAgain.style.display = "block"
      wordReveal.innerHTML = `The word was: ${word}`
      wordReveal.style.display = "block"
      countingWrongWords++
      wrongWords.innerHTML = `Amount of words gotten wrong: ${countingWrongWords}`
      word = ""
    }
  } else {
    for (let i = 0; i < word.length; i++) {
      if (guess === word[i]) {
        let letterElement = document.getElementById(`letter-El-${i}`)
        letterElement.style.color = "white"
        correctGuesses++
      }
    }
    if (correctGuesses === word.length) {
      playAgain.style.display = "block"
      quitBtn.style.display = "block"
      countingRightWords++
      correctWords.innerHTML = `Amount of words gotten correctly: ${countingRightWords}`
      word = ""
    }
  }

  guessedLetters.push(guess)
}

document.addEventListener("keydown", function(e) {
  handleGuess(e.key)
})

guessButton.addEventListener("click", function() {
  handleGuess(guessInput.value.trim())
  guessInput.value = ""
})

guessInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    guessButton.click()
  }
})

playAgain.addEventListener("click", function() {
  pickNewWord()
})
