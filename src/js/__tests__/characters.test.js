import sortCharactersByHealth from '../characters.js';

describe('sortCharactersByHealth', () => {
  test('сортирует героев по убыванию здоровья', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortCharactersByHealth(input)).toEqual(expected);
  });

  test('корректно работает с пустым массивом', () => {
    const input = [];
    const expected = [];

    expect(sortCharactersByHealth(input)).toEqual(expected);
  });

  test('корректно работает с одним героем', () => {
    const input = [{ name: 'воин', health: 50 }];
    const expected = [{ name: 'воин', health: 50 }];

    expect(sortCharactersByHealth(input)).toEqual(expected);
  });

  test('корректно работает при равном здоровье', () => {
    const input = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
    ];

    const expected = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
    ];

    expect(sortCharactersByHealth(input)).toEqual(expected);
  });
});
