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
export interface AdmiResponse  extends Admi{
    token : string;
    id : any;
    Rol : string;
}
export interface Sueldo{
    Cod_Sueldo?: number;
    Cant_Sueldo_Dia?: number;
    Cant_Sueldo_Horas_Extras?: number;
}

export interface Dep{
    Cod_Dep?: number;
    Nombre_Dep?: string;
}
export interface Des{
    Cod_Descuento?: number;
    Nombre_Des?: string;
    Porcentaje_Des?: number;
}
export interface Imp{
    Cod_Imp?: number;
    Nombre_Imp?: string;
    Porcentaje_Imp?: number;
}
export interface Rol{
    Cod_Rol?: number;
    Nombre_Rol?: string;
}
export interface Admi{
    Cod_Admi?: number;
    user_Name?: string;
    user_Email?: string;
    user_password?: string;
    Cod_Emp?: number;
}