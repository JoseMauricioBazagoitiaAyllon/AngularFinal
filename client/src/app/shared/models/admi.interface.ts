export type Roles = 'Administrador' | 'Empleado' | 'Persona Particular' | null;
export interface Admi{
    User_Name?: string;
    User_Email?: string;
    User_password?: any;
    rol: string;
}
export interface AdmiResponse{
    token : string;
}
