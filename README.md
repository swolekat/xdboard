# XDBoard

With the future of my current favorite stream automation software looking bleak I decided I wanted to do something about it. I can't guarantee I'll get it all the way but I figured the best course of action is to at least give it a go. The purpose of this project is to make an open source stream automation software suite that follows roughly the same conventions as the other app. I'll be creating this app without the use of Generative AI and I'd ask future contributors to do the same.

## TODO:

Stuff to get working to demo:
* deck screen (needs to be always backedup and saved to json)
* 


* write a hell of a lot more in the readme XD
* Basic scaffolding
  * ESLint Setup and GHA
  * Typecheck setup and GHA
* Core Systems
  * Account Authentication
  * Inputs
    *
  * Commands
  * Buttons (and sizing)
    * Queueing
    * Instance
  * Decks (and sizing)
  * Deck Import/Export (including from other program)
  * Variable Viewer
  * Active Buttons
* Platform Integrations
  * Twitch
    * Authenticate to Twitch
  * Youtube
    * Authenticate to Youtube
* Much later
  * Voice integration
  * Extensions
  * Testing Inputs
  * Logging
  * HTTP Server
  * Bot accounts



## Desired First Demo
* Log into twitch
* make new deck
* Add button to deck
* Have input for button be "twitch chat" with "!laugh"
* Have commands send a message back that says "haha"


## Tech Stack
I want XDBoard to be written in electron as the main technology. Using electron should help the project get more help since it is more widely known. For the UI, I'm planning on using React with the Mantine component library. Everything will be in typescript.

Used https://github.com/electron-react-boilerplate/electron-react-boilerplate as a starting point.

All command processing should be done on the electron side NOT the client side

## General Notes
* Because it's in electron, I don't think we need a bridge.
* Get rid of yellow box/ white box (everything should be white box)
* IMO should try to follow general javascript conventions (for example String Position should return -1 if nothing matches). Should probably extend this to naming conventions
* We should UNIFY the contract for all platforms. Would make stuff like combining "chat" and having a checkbox work better.
* Arrays are A NIGHTMARE in sammi and should be reworked.
* Need to make sure the threading performance isn't bad (one action or http call should NOT tank the app)
* Remove all async commands
* Should actually have a "PLATFORM PLUGIN" concept and use that for twitch and youtube (should help simplify adding new ones)
* Since we're in electron we can probably move stuff to the top menu instead of having stuff at the bottom
* I think there's a lot of shit in the header for decks and buttons that I want to simplify
