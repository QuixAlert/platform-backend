interface IAdoptionRepository {
    getAll(): Promise<Adoption[]>
    getByAdoptionId(adoptionId: String): Promise<Adoption>
    getByUserId(userId: String): Promise<Adoption>
}