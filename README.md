# redux-hypercube

Redux state machine backed by a hypercube

### Modelling UI State

Hypothesis: The state of user interfaces can be modelled with a hypercube.

<u>Example - User login flow</u>

Dimensions: login status, login request, validations
Members: [LOGGED_OUT,LOGGED_IN], [LOGIN_IDLE,LOGIN_PENDING], [VALID,INVALID]

this results in a 3D cube with 16 possibilities:

LOGGED_OUT / LOGIN_IDLE / VALID
LOGGED_OUT / LOGIN_IDLE / INVALID
LOGGED_OUT / LOGIN_PENDING / VALID
LOGGED_OUT / LOGIN_PENDING / INVALID
LOGGED_IN / LOGIN_IDLE / VALID
LOGGED_IN / LOGIN_IDLE / INVALID
LOGGED_IN / LOGIN_PENDING / VALID
LOGGED_IN / LOGIN_PENDING / INVALID

Each of these possibilities corresponds to a certain UI state, for example:

LOGGED_OUT / LOGIN_IDLE / VALID - shows a standard login screen.
LOGGED_OUT / LOGIN_PENDING / VALID - shows a spinner indicating login in progress.

Clearly, there are impossible states, so we'll need to have the ability to label
entire slices of the hypercube with state trees as intersection values.

The advantage of modelling UI state in this way is to easily track all possible
UI states in an application, and ensure that there is a corresponding entry in
the state machine if appropriate.

### Building a state machine

The next step after modelling state is to build a state machine. The advantage of
modelling UI state in a hypercube is that we can easily generate boilerplate for
a state machine that we can then implement.

By implementing a UI around dimensionality, we can simply do an intersection lookup
in the hypercube and return the app state.

### Automated testing

In Redux, state changes are handled in the action / reducer dispatch cycle. App
state possibilities are tightly coupled with application logic so it is not a simple
task to determine which state combinations are possible. If we spend the time up-front
to model the application using a hypercube it allows us to identify all possible
state combinations, which can lead to trivial implementation of snapshot tests and
(relatively) bug-free user interfaces.
