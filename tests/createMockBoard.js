const createMockBoard = () => {
  return [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, 'D', 'D', 'D', null, null, null],
    [null, null, 'C', null, null, null, null, null, null, null],
    [null, null, 'C', null, null, null, null, null, null, null],
    [null, null, 'C', null, null, null, 'B', null, null, null],
    [null, null, 'C', null, null, null, 'B', 'P', null, null],
    [null, null, 'C', null, null, null, 'B', 'P', null, 'S'],
    [null, null, null, null, null, null, 'B', null, null, 'S'],
    [null, null, null, null, null, null, null, null, null, 'S'],
    [null, null, null, null, null, null, null, null, null, null],
  ];
};

export default createMockBoard;
