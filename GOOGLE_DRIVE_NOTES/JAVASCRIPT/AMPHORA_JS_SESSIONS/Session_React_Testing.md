React testing lib tutorials  : https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ
Documentation : https://testing-library.com/docs/react-testing-library/intro/

Unit Testing F.I.R.S.T Principles : https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6

Why we need to Test?
--> Catch Bugs
--> Speeds up QA Time
--> Confidence related to robustness of the application
--> Serves as Documentation .

Types of Tests :
Unit Tests 
Integration Tests 
End-To-End Tests 

Principles of Unit Tests : F.I.R.S.T Principles
-->  Fast.Isolated.Repeatable.Self-Validating.Through
Fast: 
======
The developer shouldn’t hesitate to run the run the unit tests at any point of their development cycle, even if there are thousands of unit tests. They should run and show you the desired output in a matter of seconds.

Isolated: 
=========
For any given unit test, for its environment variables or for its setup. It should be independent of everything else should so that it results is not influenced by any other factor.
Should follow the 3 A’s of testing: Arrange, Act, Assert
In some literature, it’s also called as Given, when, then.
	Arrange: All data should be provided, should not depend on environment you are running tests 
	Act:  Invoke actual method under Test
	Assert: a unit test should only assert one logical outcome, if multiple aall assertions should point to state of the same object
	
Repeatable:
===========
Tests should be deterministic, values should not change based on environment. Tests should be self-contained should not depend on external factors

Self-validating:
================
The principle of “self-validating” in unit testing emphasizes that unit tests should have a clear and unambiguous pass or fail outcome. In other words, when you run a unit test, you should be able to determine whether the code being tested behaves correctly without manual interpretation or judgment

Through:
	should cover all the happy paths
	try covering all the edge cases, where the author would feel the function would fail.
	test for illegal arguments and variables.
	test for security and other issues
	test for large values, what would a large input do their program.
	should try to cover every use case scenario and not just aim for 100% code coverage.
 


JS Mocking Frameworks : Jest, Sinon.JS, mock 

Can we spy using Jest?
Yes we can https://medium.com/@patryk.nather/testing-local-functions-in-react-components-with-jest-55fe50a9032b#:~:text=In%20Jest%2C%20jest.,accessible%20in%20the%20module's%20exports.

Why do we use jest.spyOn?
jest.spyOn() is a powerful tool that allows us to monitor the calls to a specific function, checking how many times it was called, what arguments it was called with, and more.

Eg:
import React from 'react';
import { render, act } from '@testing-library/react';
import MyComponent from './MyComponent';
import * as utils from '../utils/doubleNumber';  

describe('MyComponent', () => {
  it('renders doubled result correctly and calls the doubleNumber function', async () => {
    const spy = jest.spyOn(utils, 'doubleNumber');  

    let container;
    await act(async () => {
      const { getByText } = render(<MyComponent />);
      container = getByText('10');
    });

    expect(container).toBeInTheDocument();
    expect(spy).toHaveBeenCalledWith(5);  
    spy.mockRestore(); 
  });
});

Why do we use act-async in Jest?
The act() function provided by the React Testing Library is used to wrap around code that changes or updates a component's state to ensure that all updates related to these "actions" have been processed and applied to the DOM before making any assertions about components. This makes your tests run closer to how React works in the browser.

However, when you’re testing a component that contains async functions (like fetching data from an API), you’d need to use the async version of act() along with await.

Here's a simple example of a test using the async version of act():

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import MyComponent from "./MyComponent";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it("renders component data", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: "12345" })
    })
  );
  
  await act(async () => {
    render(<MyComponent />, container);
  });

  expect(container.textContent).toBe("12345");

  global.fetch.mockRestore();
});

In the test above MyComponent might be requesting some data from an API on mount. By using act(async () => {}) we're making sure that all potential state updates, including those coming from async operations, are done before we make our assertions. This allows us to test our component in the state we'd expect them to be in actually running in a browser.

RTL render Vs Screen?

Packages of react-testing-library : @testing-library/jest-dom(5v), @testing-library/react(11v), @testing-library/user-event(12v)
import {render,screen, waitFor, fireEvent} from testing-library/react

Test case should contain:
--> Render Component we Test
--> Finde elements we want to interact with
--> Interact with the elements 
--> Assert the results that are expected 

Different Queries in React Testing Library?
https://testing-library.com/docs/queries/about/
getBy : Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found (use getAllBy instead if more than one element is expected). 1000ms default time out
findBy : return promise , resolves when element is found 
queryBy:  Returns the matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found (use queryAllBy instead if this is OK).

Jest current version: 29.7  https://jestjs.io/docs/asynchronous

How to test API call?
We have a package to mock fetch :  npm install --save-dev jest-fetch-mock , this is used for fetch 
// package.json
{
  "jest": {
    "setupFiles": ["jest-fetch-mock"]
  }
}

 it('fetches and displays data', async () => {
    fetch.mockResponseOnce(JSON.stringify({ message: 'Hello, world!' }));

    await act(async () => {
      render(<MyComponent />);
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data');

    expect(screen.getByText('Hello, world!')).toBeDefined();
}

https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
1. Import the module you want to mock into your test file.
2. jest.mock() the module.
3. Use .mockResolvedValue(<mocked response>) to mock the response.
Example: 
// index.test.js
const getFirstAlbumTitle = require('./index');
const axios = require('axios');

jest.mock('axios');

it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album'
      },
      {
        userId: 1,
        id: 2,
        title: 'Album: The Sequel'
      }
    ]
  });

  const title = await getFirstAlbumTitle();
  expect(title).toEqual('My First Album');
});


useEffect: https://cultivate.software/useeffect/
 https://www.taniarascia.com/how-to-test-useeffect-api-call/
 
 Install: jest-fetch-mock library
 // src/setupTests.js
// ...

// fetch mock
global.fetch = require('jest-fetch-mock')


beforeEach(() => {
  fetch.resetMocks()
})
 
 //You mock the API calls 
 test('renders users when API call succeeds', async () => {
  const fakeUsers = [
    { id: 1, name: 'Joe' },
    { id: 2, name: 'Tony' },
  ]
  fetchMock.mockResolvedValue({ status: 200, json: jest.fn(() => fakeUsers) })

  render(<App />)

  expect(screen.getByRole('heading')).toHaveTextContent('List of Users')

  expect(await screen.findByText('Joe')).toBeInTheDocument()
  expect(await screen.findByText('Tony')).toBeInTheDocument()

  expect(screen.queryByText('No users found')).not.toBeInTheDocument()
})
 
 
 
 test('renders error when API call fails', async () => {
  fetchMock.mockReject(() => Promise.reject('API error'))

  render(<App />)

  expect(await screen.findByText('Something went wrong!')).toBeInTheDocument()
  expect(await screen.findByText('No users found')).toBeInTheDocument()
})



jest.fn()
jest.mock()
jest.spyOn(utils,'someMethod')


How to test React Components using Jest?


Mock Vs Spy Vs Stub ?
Mocking: A mock object is a dummy implementation of an interface or class in which the method outputs are pre-programmed to return specific values. The main aim here is not to involve objects that have complex behavior, like database interaction, filesystem modules, etc. Mocks are used to create repeatable tests that are isolated and faster.
javascript


jest.mock('axios');

// in your test
axios.get.mockResolvedValue({ data: "Mocked data" });
Spying: A spy in testing is an object that records its interaction with other objects throughout the code base. A spy can be an anonymous function or it can wrap an existing function. Spies are often used to assess whether a function was called, how many times it was called, and with what arguments it was called.
javascript


const mySpy = jest.spyOn(myModule, 'myFunction');
myModule.myFunction('Hello');
expect(mySpy).toHaveBeenCalledWith('Hello');


Stubbing: A stub is like a mock object but its behaviors have pre-programmed responses. It's used when we want to simulate a specific behavior or output of a function. Stubs are usually simple.
javascript

test("stub function example", () => {
  const myStub = jest.fn();

  // You can set specific return values
  myStub.mockReturnValue("stub value");

  const result = myStub("some parameter");

  // Test if the stub was called correctly
  expect(myStub).toHaveBeenCalledWith("some parameter");
  // Test if the stub returned the expected value
  expect(result).toBe("stub value");
});

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return MyAPI.getUsers().then(data => expect(data).toEqual(users));
});

In simple terms, mocks set expectations i.e., the test fails if the mock object doesn't get called correctly. Stubs can be thought as 'placeholders' - they don't fail the test if they aren't called. Spies sit between Mocks and Stubs - they record information about how they were called so they can be inspected afterwards.

Example : 
import React, { useState, useEffect } from 'react';
import { fetchUsername } from './apiService';

function UserGreeting() {
  const [username, setUsername] = useState('');

  const handleClick = async () => {
    const fetchedUsername = await fetchUsername();
    setUsername(fetchedUsername);
  };

  return (
    <div>
      <h1>Hello, {username}!</h1>
      <button onClick={handleClick}>Load Username</button>
    </div>
  );
}

export default UserGreeting;

import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import UserGreeting from './UserGreeting';
import { fetchUsername } from './apiService';

jest.mock('./apiService');

describe('UserGreeting', () => {
  test('username is fetched and displayed after the Load Username button is clicked', async () => {
    fetchUsername.mockResolvedValue('John Doe');

    render(<UserGreeting />);

    fireEvent.click(screen.getByText('Load Username'));

    // Wait for the useEffect to complete and re-render the component
    await act(() => Promise.resolve());

    expect(screen.getByText('Hello, John Doe!')).toBeDefined();
  });
});