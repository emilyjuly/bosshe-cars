export type FormDataProp<T> = {
    value: T;
    error: string;
}

export type FormData = {
    fullname: FormDataProp<string>;
    phone: FormDataProp<string>;
    simular: FormDataProp<boolean>;
    cpf: FormDataProp<string>;
    valorEntrada: FormDataProp<number | string>;
    cnh: FormDataProp<boolean>;
}