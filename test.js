function benchmark(iterator, array) {
  const start = performance.now();
  switch (iterator) {
    case 'for':
      for (let i = 0; i < array.length; i++) {}
      break;
    case 'for of':
      for (const i of array) {
      }
      break;
    case 'forEach':
      array.forEach((e) => {});
      break;
    case 'for in':
      for (const i in array) {
      }
      break;
    case 'map':
      array.map((e) => {});
      break;
    case 'while':
      let i = 0;
      while (i < array.length) {
        i++;
      }
    default:
      break;
  }
  const end = performance.now();

  console.log(`👉 iterator: '${iterator}' 🚀 time: ${(end - start).toFixed(2)}ms`);
  return;
}

const arrays = [
  Array(100).fill('x'), //0 while
  Array(1_000).fill('x'), //1 while || forEach
  Array(10_000).fill('x'), //2 while || forEach
  Array(100_000).fill('x'), //3 forEach
  Array(1_000_000).fill('x'), //4 while || for
  Array(10_000_000).fill('x'), //5 while || for
  Array(100_000_000).fill('x'), //6 for
];

//Node v18.17.0
benchmark('for', arrays[0]); // sorprendente, la vieja confiable.
benchmark('for of', arrays[0]); // desepcionante... nativo al pedo
benchmark('forEach', arrays[0]); // lindo para array < 100 mil elementos
benchmark('while', arrays[0]); // lo hace bastante bien, pero no es el mejor
benchmark('map', arrays[0]); // nefasto para recorrer array
benchmark('for in', arrays[0]); // extremadamente nefasto para recorrer array