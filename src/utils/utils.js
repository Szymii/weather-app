export const round = (value) => {
  return Math.floor(value);
};

export const getDateFromUnix = (unix) => {
  const milliseconds = unix * 1000;
  const dateObject = new Date(milliseconds);

  return dateObject.toLocaleString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const extractHour = (unix) => {
  const milliseconds = unix * 1000;
  const dateObject = new Date(milliseconds);

  return dateObject.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const extractDay = (unix) => {
  const milliseconds = unix * 1000;
  const dateObject = new Date(milliseconds);

  return dateObject.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
  });
};
