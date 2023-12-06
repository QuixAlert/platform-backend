export function mapUserData(userData: any): AppUser {
    return {
        email: userData.email,
        id: userData.id,
        name: userData.nome,
        picturePath: userData.caminhoFoto
    }
}