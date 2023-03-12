//https://dev.to/tomekbuszewski/facade-pattern-in-javascript-3on4

Facade Pattern :

When building an application, we often face problems with external APIs. One has simple methods, other has them very complicated. Unifying them under one common interface is one of uses of the facade pattern.

Let's imagine we're building an application that displays information about movies, TV shows, music and books. For each of these we have a different vendor. They are implemented using various methods, have various requirements etc. We have to remember or keep noted how to query each type.

Or do we?

Facade pattern solves such problems. This is a common interface that have the same methods no matter what it used underneath.

In Jquery we use, This is a Facade
$.get(...) ==> Jquery will prepare $.ajax({method:'GET',...params})
$.post(....) ==> Jquery will prepare $.ajax({method:'POST',...params})