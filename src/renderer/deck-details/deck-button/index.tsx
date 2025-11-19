import { Button, Group, Text } from '@mantine/core';
import * as style from './deck-button.module.css';
import { StatusIndicators } from './status-indicators';

export const DeckButton = ({button}) => {
  const {appearance} = button;
  const {color, text, image} = appearance;

  return (
    <Button className={style['deck-button']} color={color}>
      <Group className={style['status-indicators']} p="xs" gap={0}>
        <StatusIndicators button={button} />
      </Group>
      <Text>{text}</Text>
    </Button>
  );
};
