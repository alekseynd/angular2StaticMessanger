let repliesArray = [
  'Hello, how are you?',
  'Wow!',
  'How is your son?',
  'Watched last match?',
  'No :('
];

export function getRandomReply() {
  return repliesArray[Math.floor(Math.random() * repliesArray.length)];
}


