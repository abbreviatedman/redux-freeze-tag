# redux-freeze-tag

A tiny, tiny library that adds customizable immutability to [Redux][Redux]. It does this by using [freeze-tag][freeze-tag] to enhance the reducer(s) you use to create your Redux store.

**It's recommended you delete redux-freeze-tag in any production build.**. It will slow state changes down some, especially if you configure the method to handle mutations other than `set`. But it's plenty fast enough for development!


### Features

* **Recursive** - Begins at your state object and goes all the way down. No data structure left behind.
* **Fast** - Places a mutation handler on objects, which is way faster than the recursive`Object.freeze`-ing solution you normally see.
* **Simple API** - One line of code in your Redux store setup. Then use your objects normally!
* **Configurable** - A simple options parameter allows you to set rules for mutations.


### Usage

```shell
npm install redux-freeze-tag
```

Then, in your JavaScript:

```javascript
import reduxFreeze from 'redux-freeze-tag';
import {createStore} from 'redux';

const store = createStore(reduxFreeze(reducer));
```

`reduxFreeze` will return an enhanced reducer that immutablizes state, which you use to create your store and never worry about again. No more accidental reducer mutations or crazy immutability APIs!

### Configuration

You can configure the internal freeze-tag behavior by passing in an options object as a second argument. It's the same options object that regular freeze-tag uses. (See the [configuration section of the freeze-tag README][configuration section of the freeze-tag README] for more info on this feature.)

```javascript
const options = {delete: true};
const store = createStore(reduxFreeze(reducer, options));
```

You can even configure which reducers to use `redux-freeze-tag` on.

```javascript
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  todoReducer: reduxFreeze(todoReducer),
  calendarReducer: calendarReducer,
  chatReducer: chatReducer,
  reviewsReducer: reduxFreeze(reviewsReducer)
}); // WHAT UNHOLY HYBRID APP ABOMINATION IS THIS.
```

And, of course, you can pass in an options object to any of those `reduxFreeze` calls as well.

### How Does One Play the Actual Game of Freeze Tag?

Like this:

![alt text][freeze tag gif]

Except usually without soccer balls. But that sounds cool! Hit me up if you wanna play.

[Redux]: https://redux.js.org/
[freeze-tag]: https://github.com/abbreviatedman/freeze-tag
[configuration section of the freeze-tag README]: https://github.com/abbreviatedman/freeze-tag#configuration
[freeze tag gif]: http://www.footy4kids.co.uk/wp-content/uploads/2015/09/freeze.gif "how to play freeze tag?"
