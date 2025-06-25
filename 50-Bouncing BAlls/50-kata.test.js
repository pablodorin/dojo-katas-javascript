const bouncingBall = require('./50-kata.js');

describe('Bouncing Ball', () => {
  test('Debe retornar 3 cuando h = 3, bounce = 0.66, window = 1.5', () => {
    expect(bouncingBall(3, 0.66, 1.5)).toBe(3);
  });

  test('Debe retornar -1 si bounce no está entre 0 y 1 (por ejemplo bounce = 1)', () => {
    expect(bouncingBall(3, 1, 1.5)).toBe(-1);
  });

  test('Debe retornar -1 si h <= 0', () => {
    expect(bouncingBall(0, 0.66, 1.5)).toBe(-1);
    expect(bouncingBall(-5, 0.66, 1.5)).toBe(-1);
  });

  test('Debe retornar -1 si window >= h', () => {
    expect(bouncingBall(3, 0.66, 3)).toBe(-1);
    expect(bouncingBall(3, 0.66, 3.1)).toBe(-1);
  });

  test('Debe retornar 15 para h = 30.0, bounce = 0.66, window = 1.5', () => {
    expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15);
  });

  test('Debe retornar -1 si bounce <= 0', () => {
    expect(bouncingBall(10, 0, 1.5)).toBe(-1);
    expect(bouncingBall(10, -0.5, 1.5)).toBe(-1);
  });
});
