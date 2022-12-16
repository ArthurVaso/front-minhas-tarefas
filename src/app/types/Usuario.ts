export interface Usuario {
    id?: string;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    ativo?: boolean;
}

export interface UsuarioLogin {
    email: string;
    senha: string;
}

export interface SignUpReturn {
    usuario: Usuario;
    refresh_token: string;
}
