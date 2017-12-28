# redux-freeze-tag

A tiny, tiny library that adds customizable immutability to redux. It does this by using <link>freeze-tag</link> to enhance the reducer(s) you use to create your redux store. The great part is that you can use it once when you create the store, and not have to change any of the rest of your code in any way to gain immutability.

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

redux-freeze-tag will return an enhanced reducer that immutablizes state. No more accidental reducer mutations!

It's recommended not to use this during production, as it will slow state changes down some.

You can customize the internal freeze-tag behavior by passing in an options object as a second argument. It's the same options object that regular freeze-tag uses. (See the <link>freeze-tag README</link> for more info on customizations available.)

```javascript
const options = {delete: true};
const store = createStore(reduxFreeze(reducer, options));
```

You can even use it on specific reducers only, if you wish.

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

Enjoy!
