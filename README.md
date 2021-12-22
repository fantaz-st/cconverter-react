# CConverter made in REACT

![CConverter app by Čedomir Babić](./cconverter.jpg?raw=true 'CConverter')

## Resources

The app is using an api provided from https://exchangerate.host/ to fetch current rates.
After it fetches the rates it requests valute information from https://gist.github.com/QuentinBens/d0c040d6cc0d6987ae0afa8ab1defcda

## Functionality

The valutes and rates are acquired from API-s and custom dropboxes are populated with valute names, flags and codes.
Favorites are stored in local storage and are acquired at app initialisation.
User can swap between input values with a switch.

## Method

The app fetches valutes and rates with an async-await fetch function, on it's initialisation. This was done using a custom use-http hook. The state is managed using useReducer hook.
I wanted to use as fewer as possible state passing and state lifting using props, which is why useContext hook is used.
Style was added using CSS modules.
Custom dropdown is used as default html dropdowns don't support images (flags).

## TO-DO-s

Implement a search for valute functionality when a dropbox is active.

## Running

The app isn't using any global packages. Fork it, use commands npm install and npm start.

## Author

Made by Čedomir Babić in September 2021.
cbabic.st@gmail.com
