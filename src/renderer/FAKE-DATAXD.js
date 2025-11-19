export const FAKEDATA = {
  decks: [
    {
      id: '20251118182554562761953', // this would be a guid
      name: 'Deck 3',
      dimensions: {
        x: 2,
        y: 2,
      },
      backgroundColor: '#404040',
      on: true,
      createdWithVersion: '0.0.1',
      buttons: [
        {
          buttonId: 'ID6',
          appearance: {
            color: '#C0C0C0',
            text: '!laugh',
            image: '',
          },
          buttonSettings: {
            persistent: true,
            queueable: false,
            overlappable: false,
          },
          commands: [
            {
              commandId: 'twitch.sendMessage',
              on: true,
              commandData: {
                message: 'hahahahaha!',
              },
            },
          ],
          inputs: [
            {
              inputId: 'twitch.receiveMessage',
              inputData: {
                message: '!laugh',
                username: '',
                caseSensitive: false,
                allowEmptyWildcard: false,
                permissions: {
                  broadcaster: false,
                  mod: false,
                  vip: false,
                  sub: false,
                  founder: false,
                },
              },
            },
          ],
          position: {
            gridX: 0,
            gridY: 0,
            gridWidth: 1,
            gridHeight: 1,
          },
        },
        {
          buttonId: 'ID7',
          appearance: {
            color: '#C0C0C0',
            text: '!fart',
            image: '',
          },
          buttonSettings: {
            persistent: true,
            queueable: false,
            overlappable: false,
          },
          commands: [
            {
              commandId: 'core.playSound',
              on: true,
              commandData: {
                volume: 0.2,
                file: 'E:\\swolekat\\scene stuff\\neco check\\mp3s\\necoCheckSounds\\explosion.ogg',
              },
            },
          ],
          inputs: [
            {
              inputId: 'twitch.receiveMessage',
              inputData: {
                message: '!fart',
                username: '',
                caseSensitive: false,
                allowEmptyWildcard: false,
                permissions: {
                  broadcaster: false,
                  mod: false,
                  vip: false,
                  sub: false,
                  founder: false,
                },
              },
            },
          ],
          position: {
            gridX: 0,
            gridY: 0,
            gridWidth: 1,
            gridHeight: 1,
          },
        },
      ],
    },
    {
      id: '20251118182554562761954', // this would be a guid
      name: 'Deck 4',
      dimensions: {
        x: 10,
        y: 10,
      },
      backgroundColor: '#f00',
      on: true,
      createdWithVersion: '0.0.1',
      buttons: [
        {
          buttonId: 'ID6',
          appearance: {
            color: '#C0C0C0',
            text: '!laugh',
            image: '',
          },
          buttonSettings: {
            persistent: true,
            queueable: false,
            overlappable: false,
          },
          commands: [
            {
              commandId: 'twitch.sendMessage',
              on: true,
              commandData: {
                message: 'hahahahaha!',
              },
            },
          ],
          inputs: [
            {
              inputId: 'twitch.recieveMessage',
              inputData: {
                message: '!laugh',
                username: '',
                caseSensitive: false,
                allowEmptyWildcard: false,
                permissions: {
                  broadcaster: false,
                  mod: false,
                  vip: false,
                  sub: false,
                  founder: false,
                },
              },
            },
          ],
          position: {
            gridX: 0,
            gridY: 0,
            gridWidth: 1,
            gridHeight: 1,
          },
        },
        {
          buttonId: 'ID7',
          appearance: {
            color: '#C0C0C0',
            text: '!fart',
            image: '',
          },
          buttonSettings: {
            persistent: true,
            queueable: false,
            overlappable: false,
          },
          commands: [
            {
              commandId: 'core.playSound',
              on: true,
              commandData: {
                volume: 0.2,
                file: 'E:\\swolekat\\scene stuff\\neco check\\mp3s\\necoCheckSounds\\explosion.ogg',
              },
            },
          ],
          inputs: [
            {
              inputId: 'twitch.recieveMessage',
              inputData: {
                message: '!fart',
                username: '',
                caseSensitive: false,
                allowEmptyWildcard: false,
                permissions: {
                  broadcaster: false,
                  mod: false,
                  vip: false,
                  sub: false,
                  founder: false,
                },
              },
            },
          ],
          position: {
            gridX: 0,
            gridY: 0,
            gridWidth: 1,
            gridHeight: 1,
          },
        },
      ],
    },
  ],
};
