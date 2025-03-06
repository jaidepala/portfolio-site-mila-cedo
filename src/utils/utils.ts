import { MultiSelectProps, Text } from "@mantine/core";

export const replaceAll = (str: string, find: string, replace: string) => {
  return str.toLowerCase().replace(new RegExp(find, "g"), replace); // g is for global
};
