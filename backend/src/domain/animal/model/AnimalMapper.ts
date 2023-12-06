export function mapAnimalData(animalData: any): Animal {
    return {
        id: animalData.idAnimal,
        userId: animalData.idUsuario,
        name: animalData.nome,
        race: animalData.racaAnimal,
        type: animalData.tipoAnimal,
        gender: animalData.generoAnimal,
        picturePath: animalData.caminhoFotoAnimal,
        locationAddress: animalData.localAnimal,
        description: animalData.descricaoAnimal
    }
}