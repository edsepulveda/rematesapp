export const DummyData = [
  {
    id: 1,
    title: "Departamento",
    category: "Casas",
    info: 2,
    more_info: 3,
    image: require("../assets/img/coche.png"),
  },
  {
    id: 2,
    title: "Camiseta Escolar",
    category: "Ropa",
    info: 'Baziani',
    more_info: 'XL',
    image: require("../assets/img/casa.png"),
    photos: [
      {
        id: 1,
        name: "prueba",
        image: require("../assets/img/cheese.png"),
      },
      {
        id: 2,
        name: "prueba2",
        image: require("../assets/img/cheese.png"),
      },
      {
        id: 3,
        name: "prueba3",
        image: require("../assets/img/cheese.png"),
      },
      
    ],
  },
  {
    id: 3,
    title: "Sandalias",
    category: "Retail",
    info: 'Baziani',
    more_info: 42,
    image: require("../assets/img/resaltador.png"),
  },
];
