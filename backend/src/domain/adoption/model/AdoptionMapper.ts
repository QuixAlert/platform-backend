export function mapAdoptionData(adoptionData: any): Adoption {
    return {
        id: adoptionData.idAdocao,
        userId: adoptionData.idUsuario,
        animalType: adoptionData.tipoAnimal,
        personResponsible: adoptionData.nomeResponsavel,
        addressResponsible: adoptionData.enderecoResponsavel,
        documentResponsible: adoptionData.documentoResponsavel,
        houseDescription: adoptionData.descricaoCasa,
        animalDescription: adoptionData.descricaoAnimal
    }
}