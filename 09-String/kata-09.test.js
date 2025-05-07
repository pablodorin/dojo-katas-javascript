const noSpaceStr = require('./kata-09'); // Asegúrate de que tu función esté exportada correctamente

describe('', () => {
  test('remueve espacios de la cadena con espacios simples', () => {
    expect(noSpaceStr("8 j 8   mBliB8g  imjB8B8  jl  B")).toBe("8j8mBliB8gimjB8B8jlB");
  });

  test('remueve muchos espacios entre letras', () => {
    expect(noSpaceStr("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"))
      .toBe("88Bifk8hB8BB8BBBB888chl8BhBfd");
  });

  test('funciona con espacios al final', () => {
    expect(noSpaceStr("8aaaaa dddd r     ")).toBe("8aaaaaddddr");
  });

  test('devuelve string vacío si hay solo espacios', () => {
    expect(noSpaceStr("     ")).toBe("");
  });

  test('devuelve la misma cadena si no hay espacios', () => {
    expect(noSpaceStr("sinEspacios")).toBe("sinEspacios");
  });
});
