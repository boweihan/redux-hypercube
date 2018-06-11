# redux-hypercube

<img src='./hypercube.png' width=300 />

A state machine library for Redux that is backed by a hypercube.

<a>https://en.wikipedia.org/wiki/Hypercube</a>

Commonly used in BI as an OLAP cube:
<a>https://en.wikipedia.org/wiki/OLAP_cube</a>

### Modelling all possible UI states

In theory, all possible states of a user interface can be modelled as a hypercube with a finite number of dimensions.

<b><u>Example: User Login Flow</u></b>

Dimensions: [status, request, validations]<br/>
Members: [ <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[LOGGED_OUT,LOGGED_IN],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[LOGIN_IDLE,LOGIN_PENDING],<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[VALID,INVALID],<br/>
]

this results in a 3D cube with 16 possibilities:

* LOGGED_OUT / LOGIN_IDLE / VALID
* LOGGED_OUT / LOGIN_IDLE / INVALID
* LOGGED_OUT / LOGIN_PENDING / VALID
* LOGGED_OUT / LOGIN_PENDING / INVALID
* LOGGED_IN / LOGIN_IDLE / VALID
* LOGGED_IN / LOGIN_IDLE / INVALID
* LOGGED_IN / LOGIN_PENDING / VALID
* LOGGED_IN / LOGIN_PENDING / INVALID

Each of these possibilities corresponds to a certain UI state.

* LOGGED_OUT / LOGIN_IDLE / VALID - shows a standard login screen.
* LOGGED_OUT / LOGIN_PENDING / VALID - shows a spinner indicating login in progress.

In typical front-end applications it's a challenge to identify all possible application states - forgetting to handle a certain state is often one of the main causes of UI bugs. This is where a hypercube representation of application state comes in quite handy. Modelling application state (along with their possible transitions) as intersections in a hypercube gives us:

1. The ability to identify and query all possible application states in an application with varying levels of granularity.
2. The ability to model application state and their transitions as a graph.
3. Hypercube slice operations
4. Basis for a data visualization framework.
5. A state-first viewpoint that translates directly into mockups.
6. The potential for auto-generated snapshot tests

Once we have populated a hypercube with application states and their transitions as intersections, we can simply generate a state machine.

### Generating a state machine

The next step after creating a hypercube is to generate a (Mealy) state machine with it. The implementation of a state machine can be framework agnostic but this experiment aims to provide a Redux adaptation.

This process, in theory, would be fully automated because we have all the states and their transitions already specified in the hypercube.

Implementing a state machine in Redux may involve generating appropriate Redux actions creators to be consumed by a view layer (i.e. using a framework such as React). Reducers, rather than returning their own state slices, will query the in-memory hypercube for app state.

### Vision

I have a dream that one day we will be further empowered to spend most of our time building beautiful user experiences - as bugs will be much harder to write.

This project is currently in the "fun thought experiment" phase. Implementation ideas are always welcome!
