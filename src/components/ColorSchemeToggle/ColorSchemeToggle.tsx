import { Button, Text, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Button
      onClick={() => toggleColorScheme()}
      size="md"
      variant="filled"
      leftIcon={
        colorScheme === 'dark' ? (
          <SunIcon width={20} height={20} />
        ) : (
          <MoonIcon width={20} height={20} />
        )
      }
    >
      {colorScheme === 'dark' ? <Text>Dark Mode</Text> : <Text>Light Mode</Text>}
    </Button>
  );
}
