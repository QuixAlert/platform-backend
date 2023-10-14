export function mapUserData(userData: any): User {
    return {
        email: userData.email,
        id: userData.id,
        name: userData.nome,
        picturePath: userData.caminhoFoto
    }
}