export type Roles = 'Administrador' | 'Empleado' | 'Persona Particular' | null;
export interface Admi{
    User_Name: string;
    User_Email: string;
    User_password: string;
    rol: string;
}
export interface Emp{
    Cod_Emp?: number;
    Nombre_Emp?: string;
    Celular?: number;
    Direccion?: string;
    Cod_Dep?: string;
    Cod_Rol?: string;
    Cod_Sueldo?: string;
}
export interface AdmiResponse extends Admi{
    token : string;
}
