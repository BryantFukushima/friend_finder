# Common Connections

Common Connections is a Friend Finder nodeJS application. This application connects the user to other users based on a "common connection" points.

## Getting Started

```
npm install

node server.js
```

## How it works

Fill out the connections survey. The survey consists of 10 questions, all based off of a 1-5 scale (disagree to agree). Once the form is submitted, all ratings from each question are referenced to all the previous users' ratings. Whichever user with the most similar ratings becomes your connection match.