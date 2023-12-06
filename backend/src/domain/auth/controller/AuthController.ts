import {Body, Controller, HttpException, HttpStatus, Injectable, Post, UseGuards} from "@nestjs/common";
import {AuthRepositoryImpl} from "../repository/AuthRepositoryImpl";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {JWTToken} from "../model/JWTToken";
import {RefreshTokenDto} from "../model/RefreshTokenDto";
import {User, UserRole} from "../model/User";
import {PassportTokenGuard} from "../guard/PassportTokenGuard";
import {AuthGuard} from "../guard/AuthGuard";
import {Role} from "../decorators/Role";
require('dotenv').config()

@Controller("auth")
@Injectable()
export class AuthController {
    constructor(
        private authRepository : AuthRepositoryImpl,
        private jwtService: JwtService,
        private configService: ConfigService
    ) {}


    @Role(UserRole.ADMIN)
    @UseGuards(PassportTokenGuard, AuthGuard)
    @Post("/register")
    async register(@Body() registerDto: RegisterDto) {
        if(await this.authRepository.register(registerDto)){
            return HttpStatus.CREATED
        } else {
            throw new HttpException(`The user with email ${registerDto.email} already exists`, HttpStatus.FORBIDDEN)
        }
    }

    @Post("/login")
    async login(@Body() loginDto: LoginDto): Promise<JWTToken> {
        if(await this.authRepository.login(loginDto)){
            const user = await this.authRepository.getUserByEmail(loginDto.email)

            return this.getTokens(user)
        } else {
            throw new HttpException(`The password for the user with email ${loginDto.email} is incorrect`, HttpStatus.FORBIDDEN)
        }
    }

    @Post("/refresh-token")
    async getRefreshToken(@Body() token: RefreshTokenDto): Promise<JWTToken> {
        try {
            const { sub: email } = await this.jwtService.verifyAsync(token.refreshToken, {
                secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET')
            })

            const user = await this.authRepository.getUserByEmail(email)

            return this.getTokens(user)

        } catch (err){
            throw new HttpException('Invalid credentials', 400)
        }
    }

    private async getTokens(user: User): Promise<JWTToken> {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(
                {
                    sub: user.email,
                    role: user.role
                },
                {
                    secret: this.configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
                    expiresIn: this.configService.get<string>('JWT_ACCESS_TOKEN_EXPIRATION')
                }
            ),
            this.jwtService.signAsync(
                {
                    sub: user.email,
                    role: user.role
                },
                {
                    secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
                    expiresIn: this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION')
                }
            )
        ])

        return {token: accessToken, refreshToken: refreshToken}
    }

}