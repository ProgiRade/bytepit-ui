import { RegisterRole } from "."

export default interface FormDataRegister {
    username: string,
    email: string,
    password: string,
    name: string,
    surname: string,
    role: RegisterRole,
}
