import { Routes } from '@angular/router';
import { Inicio } from './enlaces/inicio/inicio';
import { Producto } from './enlaces/producto/producto';
import { Registro } from './enlaces/registro/registro';

export const routes: Routes = [
    {path:"inicio", component: Inicio},
    {path:"producto", component: Producto},
    {path:"registro", component: Registro}
];
