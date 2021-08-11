export const light = {
  colors: {
    black: '#000000',
    middle: '#616161',
    white: '#ffffff',
  },
  fs: {
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    xm: '1.25rem',
    l: '1.5rem',
    xl: '1.75rem',
  },
  media: {
    desktop: '970px',
  },
  contrast: 'contrast(500%)',
};

export const dark = {
  colors: {
    black: light.colors.white,
    middle: light.colors.middle,
    white: light.colors.black,
  },
  fs: light.fs,
  media: light.media,
  contrast: 'contrast(0%)',
};
