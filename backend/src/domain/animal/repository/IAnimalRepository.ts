interface IAnimalRepository {
    getAll(): Promise<Animal[]>
    getByAnimalId(animalId: String): Promise<Animal>
    getByUserId(userId: String): Promise<Animal>
}