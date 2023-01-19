https://blog.bitsrc.io/the-observer-pattern-in-javascript-the-key-to-a-reactive-behavior-f28236e50e10

** https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/

That being said, the pattern shows how to structure an observer-observed type of relationship when a set of objects (the observers) are interested in any type of change in the state of another, single object (the observed).

The key here though, is that the “observers” are not actively watching the observed object, instead they’re subscribing to get notified and they’re letting the observed element notify them once something happens

If you’re still struggling, think about it like going yourself to get your daily newspaper vs subscribing to it and getting it delivered on your doorstep.

"When the state is updated, components will re-render accordingly"

Actors:
Observable/Subject class
    observers – This class property holds an array of observers.
    addObserver() – Will push an observer on to the observer’s array
    removeObserver() – Will remove an observer from the observer’s array
    notify() – Will notify all observers that a change has happened

Observer Class
The purpose of the observer class is to implement an update() method that will be called by the subjects notify() method

Example: https://medium.com/@Aether7/the-observer-pattern-in-javascript-6b317bbc7ecd 