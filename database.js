let prayers = [
  {
    id: '"Prayer should be the key of the day and the lock of the night."'
  },
  {
    id:
      '"You do not look out there for God, something in the sky, you look in you."'
  },
  {
    id:
      '"No valid plans for the future can be made by those who have no capacity for living now."'
  },
  {
    id:
      '"You can have everything in life you want, if you will just help other people get what they want"'
  },
  {
    id:
      '"Faith is taking the first step even when you do not see the whole staircase."'
  }
];

export const prayersCopy = () => {
  return prayers.map((pray) => ({ ...prayers }));
};
