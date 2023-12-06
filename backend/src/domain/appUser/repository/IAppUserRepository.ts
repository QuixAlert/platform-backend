interface IAppUserRepository {
    getAll(): Promise<AppUser[]>
    getById(userId: String): Promise<AppUser>
}
