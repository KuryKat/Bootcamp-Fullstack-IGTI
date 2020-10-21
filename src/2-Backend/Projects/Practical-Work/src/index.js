import { promises as fs } from "fs"


const globalStates = [
  'AC', 'AL', 'AM', 'AP', 'BA',
  'CE', 'DF', 'ES', 'GO', 'MA',
  'MG', 'MS', 'MT', 'PA', 'PB',
  'PE', 'PI', 'PR', 'RJ', 'RN',
  'RO', 'RR', 'RS', 'SC', 'SE',
  'SP', 'TO'
]


async function loadData(fileLocation) {
  try {
    const data = await fs.readFile(fileLocation)
    const json = await JSON.parse(data)
    return json
  } catch(err) {
    console.log(err)
  }
}

async function getUnifiedData() {
  const states = await loadData("./data/Estados.json")
  const cities = await loadData("./data/Cidades.json")

  const unifiedData = states.map(estate => {
    const {ID, Sigla, Nome} = estate
    const Cidades = cities.filter(citie => {
      return citie.Estado === ID
    })

    return {
      ID,
      Sigla,
      Nome,
      Cidades
    }
  })

  return unifiedData
}


async function createStatesFiles() {
  const unifiedData = await getUnifiedData()
  unifiedData.forEach(state => {
    createStateFile(state)
  });
}


async function createStateFile(state) {
  try {
    const data = JSON.stringify(state.Cidades, null, 2)
    const fileLocation = `./data/${state.Sigla}.json`
    await fs.writeFile(fileLocation, data)
  } catch(err) {
    console.log(err)
  }
}


async function getNumberOfCities(state) {
  const fileLocation = `./data/${state}.json`
  try {
    const cities = await loadData(fileLocation)
    return cities.length
  } catch(err) {
    console.log(err)
  }
}

async function getStatesWithNumberOfCities() {
  let statesWithNumberOfCities = []
  for(let i = 0; i < globalStates.length; i++) {
    const state = globalStates[i]
    const numberOfCities = await getNumberOfCities(state)
    statesWithNumberOfCities.push({
      Sigla: state,
      NumeroDeCidades: numberOfCities
    })
  }

  return statesWithNumberOfCities
}

async function getBiggestStates(count) {
  let statesWithNumberOfCities = await getStatesWithNumberOfCities()

  statesWithNumberOfCities.sort((a, b) => b.NumeroDeCidades - a.NumeroDeCidades)
  return statesWithNumberOfCities.slice(0, 5).map(state => {
    return `${state.Sigla} - ${state.NumeroDeCidades}`
  })
}

async function getSmallestStates(count) {
  let statesWithNumberOfCities = await getStatesWithNumberOfCities()

  statesWithNumberOfCities.sort((a, b) => a.NumeroDeCidades - b.NumeroDeCidades)
  return statesWithNumberOfCities.slice(0, 5).map(state => {
    return `${state.Sigla} - ${state.NumeroDeCidades}`
  })
}


async function getCitiesWithStateAndLength() {
  const cities = await loadData("./data/Cidades.json")
  const states = await loadData("./data/Estados.json")

  let citiesWithStateAndLength = []
  for(let i = 0; i < cities.length; i++) {
    const state = states.find(state => state.ID === cities[i].ID)
    const citieLength = cities[i].Nome.length
    citiesWithStateAndLength.push({
      Nome: cities[i].Nome,
      TamanhoNome: citieLength,
      Estado: state
    })
  }

  citiesWithStateAndLength.sort((a, b) => a.Nome.localeCompare(b.Nome))

  return citiesWithStateAndLength
}


async function getBiggestCityName() {
  let cities = await loadData("./data/Cidades.json")
  let states = await loadData("./data/Estados.json")

  cities.sort((a, b) => a.Nome.localeCompare(b.Nome))
  cities.sort((a, b) => b.Nome.length - a.Nome.length)

  const state = states.find(state => state.ID === cities[0].Estado)

  return `${cities[0].Nome} - ${state.Sigla}`
}

async function getSmallestCityName() {
  let cities = await loadData("./data/Cidades.json")
  let states = await loadData("./data/Estados.json")

  cities.sort((a, b) => a.Nome.localeCompare(b.Nome))
  cities.sort((a, b) => a.Nome.length - b.Nome.length)

  const state = states.find(state => state.ID === cities[0].Estado)

  return `${cities[0].Nome} - ${state.Sigla}`
}

function getBiggestCityNamePerState(state) {
  let cities = state.Cidades

  cities.sort((a, b) => a.Nome.localeCompare(b.Nome))
  cities.sort((a, b) => b.Nome.length - a.Nome.length)

  return cities[0]
}

function getSmallestCityNamePerState(state) {
  let cities = state.Cidades

  cities.sort((a, b) => a.Nome.localeCompare(b.Nome))
  cities.sort((a, b) => a.Nome.length - b.Nome.length)

  return cities[0]
}

async function getAllSmallestCityNamePerState() {
  const unifiedData = await getUnifiedData()

  let cityNames = []

  unifiedData.forEach(state => {
    let smallestCityName = getSmallestCityNamePerState(state)
    cityNames.push(`${smallestCityName.Nome} - ${state.Sigla}`)
  })

  return cityNames
}

async function getAllBigestCityNamePerState() {
  const unifiedData = await getUnifiedData()

  let cityNames = []

  unifiedData.forEach(state => {
    let smallestCityName = getBiggestCityNamePerState(state)
    cityNames.push(`${smallestCityName.Nome} - ${state.Sigla}`)
  })

  return cityNames
}



createStatesFiles().then(() => console.log("Criou os arquivos"))
getNumberOfCities("PI").then(result => console.log(result))
getBiggestStates(5).then(result => console.log(result))
getSmallestStates(5).then(result => console.log(result))
getAllSmallestCityNamePerState().then(result => console.log(result))
getAllBigestCityNamePerState().then(result => console.log(result))
getBiggestCityName().then(result => console.log(result))
getSmallestCityName().then(result => console.log(result))
