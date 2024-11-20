import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Amigurumi hamster',
      descripcion: 'Hamsters de distintos colores y objetos adheridos',
      precio: 29.99,
      imagen: '/hamster.jpeg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Amigurumi llama',
      descripcion: 'incluye gorro y lentes',
      precio: 89.99,
      imagen: '/llama.jpeg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: false
    },
    {
      id: 3,
      nombre: 'Amigurumi conejo',
      descripcion: 'Conejito blanco',
      precio: 29.99,
      imagen: '/conejo.jpeg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Amigurumi cisne',
      descripcion: '',
      precio: 39.99,
      imagen: '/cisne.jpeg',
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Amigurumi dragón',
      descripcion: '',
      precio: 29.99,
      imagen: '/dragon.jpeg',
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Amigurumi serpiente',
      descripcion: 'puedes posicionarla a gusto',
      precio: 29.99,
      imagen: '/serpiente.jpeg',
      disponibilidad: false
    },
    {
      id: 7,
      nombre: 'Amigurumi cocodrilo',
      descripcion: '',
      precio: 29.99,
      imagen: '/cocodrilo.jpeg',
      disponibilidad: true
    },
    {
      id: 8,
      nombre: 'Amigurumi buho',
      descripcion: '',
      precio: 39.99,
      imagen: '/buho.jpeg',
      disponibilidad: true
    },
    {
      id: 9,
      nombre: 'Amigurumi gato',
      descripcion: 'con collar de cascabel',
      precio: 39.99,
      imagen: '/gato.jpeg',
      disponibilidad: false
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }

}
