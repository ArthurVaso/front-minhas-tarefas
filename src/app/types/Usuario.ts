export interface Usuario {
    id?: string;
    nome?: string;
    sobrenome?: string;
    email: string;
    senha?: string;
    ativo?: boolean;
}

export interface SignUpReturn {
    usuario: Usuario;
    token: string;
    refreshToken: string;
}
