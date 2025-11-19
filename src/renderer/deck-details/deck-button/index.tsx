import { Button, Group, Text } from '@mantine/core';
import * as style from './deck-button.module.css';
import { StatusIndicators } from './status-indicators';

export const DeckButton = ({button}) => {

  return (
    <Button className={style['deck-button']}>
      <Group className={style['status-indicators']} p="xs" gap={0}>
        <StatusIndicators button={button} />
      </Group>
      <Text>{button.text.trim()}</Text>
    </Button>
  );
};
