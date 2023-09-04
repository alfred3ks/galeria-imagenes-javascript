'use strict';

// Simulamos la BD de fotos:
var dataFotos = {
  fotos: {
    america: [
      {
        id: 1,
        nombre: 'America 1',
        descripcion:
          'America 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/1.jpg',
      },
      {
        id: 2,
        nombre: 'America 2',
        descripcion:
          'America 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/2.jpg',
      },
      {
        id: 3,
        nombre: 'America 3',
        descripcion:
          'America 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/3.jpg',
      },
      {
        id: 4,
        nombre: 'America 4',
        descripcion:
          'America 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/4.jpg',
      },
      {
        id: 5,
        nombre: 'America 5',
        descripcion:
          'America 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/5.jpg',
      },
      {
        id: 6,
        nombre: 'America 6',
        descripcion:
          'America 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/6.jpg',
      },
      {
        id: 7,
        nombre: 'America 7',
        descripcion:
          'America 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/7.jpg',
      },
      {
        id: 8,
        nombre: 'America 8',
        descripcion:
          'America 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/8.jpg',
      },
      {
        id: 9,
        nombre: 'America 9',
        descripcion:
          'America 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/9.jpg',
      },
      {
        id: 10,
        nombre: 'America 10',
        descripcion:
          'America 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/america/10.jpg',
      },
    ],
    europa: [
      {
        id: 11,
        nombre: 'Europa 1',
        descripcion:
          'Europa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/1.jpg',
      },
      {
        id: 12,
        nombre: 'Europa 2',
        descripcion:
          'Europa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/2.jpg',
      },
      {
        id: 13,
        nombre: 'Europa 3',
        descripcion:
          'Europa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/3.jpg',
      },
      {
        id: 14,
        nombre: 'Europa 4',
        descripcion:
          'Europa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/4.jpg',
      },
      {
        id: 15,
        nombre: 'Europa 5',
        descripcion:
          'Europa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/5.jpg',
      },
      {
        id: 16,
        nombre: 'Europa 6',
        descripcion:
          'Europa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/6.jpg',
      },
      {
        id: 17,
        nombre: 'Europa 7',
        descripcion:
          'Europa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/7.jpg',
      },
      {
        id: 18,
        nombre: 'Europa 8',
        descripcion:
          'Europa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/8.jpg',
      },
      {
        id: 19,
        nombre: 'Europa 9',
        descripcion:
          'Europa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/9.jpg',
      },
      {
        id: 20,
        nombre: 'Europa 10',
        descripcion:
          'Europa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/europa/10.jpg',
      },
    ],
    africa: [
      {
        id: 21,
        nombre: 'África 1',
        descripcion:
          'África 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/1.jpg',
      },
      {
        id: 22,
        nombre: 'África 2',
        descripcion:
          'África 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/2.jpg',
      },
      {
        id: 23,
        nombre: 'África 3',
        descripcion:
          'África 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/3.jpg',
      },
      {
        id: 24,
        nombre: 'África 4',
        descripcion:
          'África 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/4.jpg',
      },
      {
        id: 25,
        nombre: 'África 5',
        descripcion:
          'África 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/5.jpg',
      },
      {
        id: 26,
        nombre: 'África 6',
        descripcion:
          'África 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/6.jpg',
      },
      {
        id: 27,
        nombre: 'África 7',
        descripcion:
          'África 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/7.jpg',
      },
      {
        id: 28,
        nombre: 'África 8',
        descripcion:
          'África 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/8.jpg',
      },
      {
        id: 29,
        nombre: 'África 9',
        descripcion:
          'África 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/9.jpg',
      },
      {
        id: 30,
        nombre: 'África 10',
        descripcion:
          'África 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/africa/10.jpg',
      },
    ],
    asia: [
      {
        id: 31,
        nombre: 'Asia 1',
        descripcion:
          'Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/1.jpg',
      },
      {
        id: 32,
        nombre: 'Asia 2',
        descripcion:
          'Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/2.jpg',
      },
      {
        id: 33,
        nombre: 'Asia 3',
        descripcion:
          'Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/3.jpg',
      },
      {
        id: 34,
        nombre: 'Asia 4',
        descripcion:
          'Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/4.jpg',
      },
      {
        id: 35,
        nombre: 'Asia 5',
        descripcion:
          'Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/5.jpg',
      },
      {
        id: 36,
        nombre: 'Asia 6',
        descripcion:
          'Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/6.jpg',
      },
      {
        id: 37,
        nombre: 'Asia 7',
        descripcion:
          'Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/7.jpg',
      },
      {
        id: 38,
        nombre: 'Asia 8',
        descripcion:
          'Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/8.jpg',
      },
      {
        id: 39,
        nombre: 'Asia 9',
        descripcion:
          'Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/9.jpg',
      },
      {
        id: 40,
        nombre: 'Asia 10',
        descripcion:
          'Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/asia/10.jpg',
      },
    ],
    oceania: [
      {
        id: 41,
        nombre: 'Oceania 1',
        descripcion:
          'Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/1.jpg',
      },
      {
        id: 42,
        nombre: 'Oceania 2',
        descripcion:
          'Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/2.jpg',
      },
      {
        id: 43,
        nombre: 'Oceania 3',
        descripcion:
          'Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/3.jpg',
      },
      {
        id: 44,
        nombre: 'Oceania 4',
        descripcion:
          'Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/4.jpg',
      },
      {
        id: 45,
        nombre: 'Oceania 5',
        descripcion:
          'Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/5.jpg',
      },
      {
        id: 46,
        nombre: 'Oceania 6',
        descripcion:
          'Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/6.jpg',
      },
      {
        id: 47,
        nombre: 'Oceania 7',
        descripcion:
          'Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/7.jpg',
      },
      {
        id: 48,
        nombre: 'Oceania 8',
        descripcion:
          'Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/8.jpg',
      },
      {
        id: 49,
        nombre: 'Oceania 9',
        descripcion:
          'Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/9.jpg',
      },
      {
        id: 50,
        nombre: 'Oceania 10',
        descripcion:
          'Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/oceania/10.jpg',
      },
    ],
    antartida: [
      {
        id: 51,
        nombre: 'Antártida 1',
        descripcion:
          'Antártida 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/1.jpg',
      },
      {
        id: 52,
        nombre: 'Antártida 2',
        descripcion:
          'Antártida 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/2.jpg',
      },
      {
        id: 53,
        nombre: 'Antártida 3',
        descripcion:
          'Antártida 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/3.jpg',
      },
      {
        id: 54,
        nombre: 'Antártida 4',
        descripcion:
          'Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/4.jpg',
      },
      {
        id: 55,
        nombre: 'Antártida 5',
        descripcion:
          'Antártida 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/5.jpg',
      },
      {
        id: 56,
        nombre: 'Antártida 6',
        descripcion:
          'Antártida 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/6.jpg',
      },
      {
        id: 57,
        nombre: 'Antártida 7',
        descripcion:
          'Antártida 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/7.jpg',
      },
      {
        id: 58,
        nombre: 'Antártida 8',
        descripcion:
          'Antártida 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/8.jpg',
      },
      {
        id: 59,
        nombre: 'Antártida 9',
        descripcion:
          'Antártida 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
        ruta: './img/antartida/9.jpg',
      },
    ],
  },
};

const { fotos } = dataFotos;

var dataCategorias = {
  categorias: [
    {
      id: 'america',
      nombre: 'America',
      numeroFotos: fotos['america'].length,
      imagenPortada: './img/america.jpg',
    },
    {
      id: 'europa',
      nombre: 'Europa',
      numeroFotos: fotos['europa'].length,
      imagenPortada: './img/europa.jpg',
    },
    {
      id: 'africa',
      nombre: 'África',
      numeroFotos: fotos['africa'].length,
      imagenPortada: './img/africa.jpg',
    },
    {
      id: 'asia',
      nombre: 'Asia',
      numeroFotos: fotos['asia'].length,
      imagenPortada: './img/asia.jpg',
    },
    {
      id: 'oceania',
      nombre: 'Oceania',
      numeroFotos: fotos['oceania'].length,
      imagenPortada: './img/oceania.jpg',
    },
    {
      id: 'antartida',
      nombre: 'Antártida',
      numeroFotos: fotos['antartida'].length,
      imagenPortada: './img/antartida.jpg',
    },
  ],
};

// Obtenemos la data a mostrar, nuestra BD:
// Hacemos destructuring para aceder mas facil a la información:
const { categorias } = dataCategorias;

// Obtenemos del HTMl donde vamos a mostrar la data:
const contenedorCategorias$1 = document.getElementById('categorias');

// Iteramos para mostrar la información:
categorias.forEach((categoria) => {
  // Vamos a crear un elemento recuerda los tres pasos:
  const a = document.createElement('a');
  const plantilla = `
            <img class="categoria__img" src="${categoria.imagenPortada}" alt="${categoria.imagenPortada}" />
            <div class="categoria__datos">
              <p class="categoria__nombre">${categoria.nombre}</p>
              <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
            </div>`;

  a.innerHTML = plantilla;
  a.classList.add('categoria');
  a.href = '#';
  // Asi creamos la categoria personalizada
  a.dataset.categoria = categoria.id;

  // Agregamos al contenedor todas las categorias:
  contenedorCategorias$1.append(a);
});

/*
NOTAS:

Aquí vemos como crear un atributo personalizado, con ese atributo es que vamos a a acceder con js para poder mostrar las imagenes en el carucel cuando se haga click sobre cada categoria. La propiedad se llama dataset.

  a.dataset.categoria = categoria.id;

*/

// Creamos funcion para cargar imagen activa:
const galeria$3 = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) => {
  // Agregamos un id personalizado a la imagen:
  const idImagenGaleria = galeria$3.querySelector('.galeria__imagen');
  idImagenGaleria.dataset.idImagen = id;

  // Buscamos dentro de la galeria la imagen activa:
  const imagenActiva = galeria$3.querySelector('.galeria__imagen');
  imagenActiva.src = ruta;

  // Cargamos titulo imagen:
  const tituloImagen = galeria$3.querySelector('.galeria__titulo');
  tituloImagen.innerText = nombre;

  // Cargamos la descripcion de la imagen:
  const descriptionImagen = galeria$3.querySelector(
    '.galeria__descripcion-imagen-activa'
  );
  descriptionImagen.innerText = descripcion;
};

/*
Creamos el evento para al hacer click sobre las categorias.
OJO Aqui vemos como podemos delegar eventos, vamos desde el contenedor padre a los hijos
*/

const contenedorCategorias = document.getElementById('categorias');
const galeria$2 = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', (e) => {
  e.preventDefault();

  // Vamos a comprobar que hagamos click sobre la imagen: Para eso vamos a usar el metodo .closest() el cual nos permite buscar elementos:
  // console.log(e.target.closest('a'));
  if (e.target.closest('a')) {
    // Aplicamos esta clase a la galeria:
    galeria$2.classList.add('galeria--active');
    // Quitamos el scroll: OJO Ponerlo en el portfolio:
    document.body.style.overflow = 'hidden';

    // Asi capturamos la categoria del data-set al hacer click:
    const categoriaActiva = e.target.closest('a').dataset.categoria;

    // Colocamos un atributo personalizado a la imagen activa:
    galeria$2.dataset.categoria = categoriaActiva;

    // Asi sacamos las fotos desde data:
    const fotos = dataFotos.fotos[categoriaActiva];
    console.log(fotos);

    // Cargamos la imagen activa a la galeria:
    const { id, nombre, ruta, descripcion } = fotos[0];
    cargarImagen(id, nombre, ruta, descripcion);

    // Limpiamos el carussel para cargar solo la cateria:
    const carrousel = galeria$2.querySelector('.galeria__carousel-slides');
    carrousel.innerHTML = '';

    // Ahora ya recorremos las BD para mostrar esa fotos en el carrusel:
    fotos.forEach((foto) => {
      const slide = `
        <a href="#" class="galeria__carousel-slide">
          <img
            class="galeria__carousel-image"
            src="${foto.ruta}"
            data-id="${foto.id}"
            alt="${foto.nombre}"
          />
        </a>`;
      // Accedemos al carussel: Buscamos con querySelector una clase:
      const carrusel = galeria$2.querySelector('.galeria__carousel-slides');
      carrusel.innerHTML += slide;

      // A la primera imagen de la galeria ponemos esta clase:
      galeria$2
        .querySelector('.galeria__carousel-slide')
        .classList.add('galeria__carousel-slide--active');
    });
  }
});

// Accedemos a la galeria:
const galeria$1 = document.getElementById('galeria');

// Creamos una funcion para cerrar la galeria:
const cerrarGaleria = () => {
  galeria$1.classList.remove('galeria--active');
  // Devolvemos el scroll a la página:
  document.body.style.overflow = '';
};

// Funcion para cargar la imagen del slice en la galeria:
const sliceClick = (id, categoriaActiva) => {
  // console.log(id);
  // console.log(categoriaActiva);

  let idBD, nombre, descripcion, ruta;

  dataFotos.fotos[categoriaActiva].forEach((foto) => {
    // Muestra todas las fotos de la categoria activa:
    // console.log(foto);
    // console.log(foto.id);

    if (foto.id === id) {
      // console.log(foto.id);
      // console.log(foto.nombre);
      // console.log(foto.descripcion);
      // console.log(foto.ruta);
      idBD = foto.id;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
      ruta = foto.ruta;

      // Usamos la funcion de cargar imagen:
      cargarImagen(idBD, nombre, ruta, descripcion);
    }
  });
};

/*
Eventos de la Galeria:
*/
// Accedemos a la galeria:
const galeria = document.getElementById('galeria');

// Creamos el evento:
galeria.addEventListener('click', (e) => {
  // Vemos toda la galeria:
  // console.log(e.target);

  // Vamos a detectar el boton: Cada boton tiene un atributo personalizado asi accederemos a el:
  // Usamos el método closest()
  // El método closest() busca de abajo hacia arriba hasta que encuentra lo que le pasamos por parametro.
  // console.log(e.target.closest('button'));
  const botonPulsado = e.target.closest('button');

  // Con dataset podemos acceder a los atributos personalizados que comienzan con el nombre data-algo:
  // Aqui vemos algo interesante, el ?, si ese elemento tiene la propiedad dataset, lo pongo porque da error si no lo lleva al pulsar sobre otro elemento que no tiene esa propiedad:
  if (botonPulsado?.dataset?.accion === 'cerrar-galeria') {
    console.log(botonPulsado.dataset.accion);

    // Buscamos dentro de la galeria un boton que tenga esa clase:
    // Aplicamos el estilos para cerrar la galeria: Dos formas aqui directamente o por medio de una función externa:
    // galeria.classList.remove('galeria--active');
    // document.body.style.overflow = ('');
    cerrarGaleria();
  }

  // 📌 Agregamos detectamos cuando hacemos click al corousel:
  // console.log(e.target.dataset.id);
  if (e.target.dataset.id) {
    // console.log(e.target.dataset.id);
    const id = parseInt(e.target.dataset.id);
    // Atributo personalizado agregado en eventoCategorias.js:
    const categoriaActiva = galeria.dataset.categoria;
    // Cargamos la imagen: Con una nueva funcion:
    sliceClick(id, categoriaActiva);
  }
});
