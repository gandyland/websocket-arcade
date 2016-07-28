GitHub:
https://github.com/gandyland/websocket-arcade/tree/solution

# Websocket Arcade

Pick some fun, simple game for two (or more?) players.

Then, turn it into a Websocket-based app that the players can play from different computers!

## Hard Requirements

- The app has to incorporate Node/Express, MongoDB, and Backbone
- The data must persist: a user can leave the page in which the game is being played, return, and resume playing where they left off
- There should be *one* master version of the app, stored in a single Github repository. (Remember all teammates can fork the repository to add it to their Github portfolios.)

## Suggestions

- Tic Tac Toe
- Connect 4
- Battleship
- Checkers
- Reversi
- High Card
- Dueling cursors
- Hangman (Think: Pixel Art)
- Pictionary

## How do you start?

#### Elect a leader... Maybe!
Some groups work well when they designate a person whose job isn't to be The Decider, nor The Do-er of Stuff, but rather to be the Official Checker of Whether Everyone's Contributing Equally -- a role which requires no coding experience whatsoever. Some groups don't work well this way. The important thing is to not be afraid to talk about it.

#### Agree on Github
Whose repository will be the master? Who will be working on which files, to prevent merge conflicts? Will you be branching, forking, or both?

#### Scope the game
Begin by assuming the players will play by the rules, and that they'll know when the game is over. Don't worry about, say, preventing players from going out of turn or putting their pieces in the wrong places until later on, when you have something that works.

#### Set a timeline
We'd suggest aiming to have a working user interface by the end of Thursday, and to add in rules and errors and persistence on Friday.

#### Divide and conquer
The main interactions to consider in this app are:
- The interactions between the browser and Node
- The interactions between Node and Mongo
- The interactions between the user and the browser (Backbone)
- The user experience (HTML and CSS)

You may want to try assigning a point-person to cover each relationship.

#### Start by refactoring!

If you look at the "Solution" branch of this repo, there's a Tic Tac Toe game already completed in there! It's about as basic as you can get, and doesn't enforce any rules. You might start with that and build on it.

https://github.com/ga-dc/websocket-arcade/tree/solution

Things to try:
- Have someone un-suck the styling of Tic Tac Toe -- or rather, add in any styling at all, because it literally has no HTML/CSS.
- Make it so that players can only enter either 'X' or 'O'. There are two ways to do that: you could use front-end Javascript to clear any inputs in which they write an 'X' or 'O'. You could also modify the database to not accept anything but 'X' and 'O'.
- Make it so that Player 2 can't go until Player 1 has gone.
- Create usernames.
- Create a little chat box so players can trash-talk each other while playing.

Make something that works! Then you can refactor it and make it "better".

## Playing from different computers

If you option-click on the wifi symbol in your menu bar, you should be able to see your current IP address. It'll be something like 172.20.3.229

Someone else can access the server running on your computer by typing into their address bar that IP address followed by the port number, which is probably 3000.

So, for example:

`http://172.20.3.229:3000`

## Bonus

Make a game that MORE than two people can play! Create a "waiting room" in which visitors can see who's available to play a game.

## Some Thoughts

I think a big source of the difficulty people are having with this is thinking of Express and Backbone as just that: Express and Backbone. Instead, it might be helpful to think of it like this:

You have:

- A database
- A back-end framework
- A front-end framework
- A quick way of shuttling stuff from the back-end framework to the front-end framework

That could describe a lot of different things! For instance:

- PostgreSQL
- Rails (or Sinatra, more appropriately)
- jQuery
- AJAX

...the only difference is that the things we're working with now happen to be written in Javascript instead of Ruby. They do exactly the same things as their Ruby-er counterparts, should be used the exact same way, and tend to look pretty similar too!

So instead of thinking, "How do I connect Express to Backbone?", try, "How do I connect this back-end framework to this front-end framework?"

- Ruby is to Sinatra as Javascript is to Express.
- Rails is to Sinatra as Node is to Express.
- Rails is to PostgreSQL as Express is to MongoDB.
- ActiveRecord is to PostgreSQL as Mongoose is to MongoDB.
- Rails is to jQuery as Node is to Backbone (sorta-kinda, because you can use jQuery in Node and Backbone in Rails and vice-versa).

Really, you don't need all four of these things to have an app.

You COULD make Tic Tac Toe just using Backbone and HTML/CSS. That would be fine... as long as your users didn't leave the page, because nothing would be saving their data.

You COULD make Tic Tac Toe just using Mongo and Express. That would be fine... as long as your users don't mind having to refresh the page every time they want it to update.

In fact, it may even be helpful to follow one of these tracks to begin with, and then when you start finding yourself saying, "Man, I wish I could save this data," start building in Mongo/Express.

As for Backbone, its a little hard to see its value when your app is so small. You COULD just start writing Vanilla Javascript the old-fashioned way. That would be fine... until you have 300 lines of code and it's a pain in the finger to scroll through it all the time.

## Group BreakDown

| Group 1 | Group 2  | Group 3 | Group 4 | Group 5 |
|---------|----------|---------|---------|---------|
| eltahir | zakk     | nic     | ryan    | lindsey |
| tammy   | allyson  | kevin   | tyler   | damon   |
| aaron   | biboy    | enoch   | dj      | brad    |
| isa     | brittany | don     | ali     | gwen    |

| Group 6 | Group 7 | Group 8 | Group 9 | Group 10 |
|---------|---------|---------|---------|----------|
| p-man   | phil    | matt    | noah    | nabil    |
| preston | haleigh | sarah   | jocelyn | karen    |
| michael | janice  | adrian  | ammie   | keith    |
| john    | nick b  | chad    | jared   | toby     |
|         |         | rodger  | alif    | julia    |
