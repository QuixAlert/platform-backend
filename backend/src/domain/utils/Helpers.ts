
export class Helpers {
    public static extractTokenFromHeader(request: Request): string | undefined {
        const [_, token] = request.headers["authorization"].split("Bearer ")
        return token;
    }
}
