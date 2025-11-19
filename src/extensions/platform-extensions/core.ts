const corePlugin = {
  name: 'core',
  inputs: [
    {
      id: 'core.testInput',
      name: 'Test Input',
      ui: [],
    },
  ],
  commands: [
    {
      id: 'core.testCommand',
      name: 'Test Command',
      ui: [],
      execution: (xdBoard) => {
        console.log('This is a test');
        xdBoard.addEvent({
          id: 'core.testInput',
        });
      },
    },
    {
      id: 'core.playSound',
      name: 'Play Sound',
      ui: [
        {
          type: 'fileInput',
          fileType: 'audio',
          label: 'Audio File Path',
          valueName: 'audioPath',
        },
        {
          type: 'slider',
          max: 1,
          min: 0,
          label: 'Volume',
          valueName: 'volume',
        },
      ],
      execution: (xdBoard, uiValues) => {
        xdBoard.playSound(uiValues.audioPath, uiValues.volume);
        console.log('This is a test');
      },
    },
  ],
};

export default corePlugin;
