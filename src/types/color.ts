export const color = {
  black: '#454545',
  white: '#FFFFFF',
  gray:  '#808080',
  primaryMain: '#F99959',
} as const;

export type Color = keyof typeof color;