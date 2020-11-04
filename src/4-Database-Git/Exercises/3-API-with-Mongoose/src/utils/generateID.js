import { writeFile, readFile } from 'fs/promises'

export async function generateID() {
    const currentID = JSON.parse(await readFile('./src/utils/id.json'))
    const nextID = {
        value: currentID.value + 1,
    }

    await writeFile('./src/utils/id.json', JSON.stringify(nextID, null, 4))
    return nextID.value
}
