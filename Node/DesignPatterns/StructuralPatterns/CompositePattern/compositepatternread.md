https://www.educative.io/collection/page/5429798910296064/5725579815944192/6597912462098432

The composite pattern is used to structure objects in a tree-like hierarchy. Here, each node of the tree can be composed of either child node(s) or be a leaf (no children objects). This pattern allows the client to work with these components uniformly; that is, a single object can be treated exactly how a group of objects is treated.

This pattern allows the formation of deeply nested structures. If a leaf object receives the request sent by the client, it will handle it. However, if the recipient is composed of children, the request is forwarded to the child components.

eat(grape)
eat(grapes)
Both the methods should work the same way.
