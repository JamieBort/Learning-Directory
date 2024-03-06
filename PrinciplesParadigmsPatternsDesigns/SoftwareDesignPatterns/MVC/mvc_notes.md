# MVC Notes

## Findings

### [Components](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller#Components) Wikipedia

#### Model

The central component of the pattern. It is the application's dynamic data structure, independent of the user interface.[5] It directly manages the data, logic and rules of the application.

#### View

Any representation of information such as a chart, diagram or table. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.

#### Controller

Accepts input and converts it to commands for the model or view.[6]
In addition to dividing the application into these components, the model–view–controller design defines the interactions between them.[7]

The model is responsible for managing the data of the application. It receives user input from the controller.
The view renders presentation of the model in a particular format.
The controller responds to the user input and performs interactions on the data model objects. The controller receives the input, optionally validates it and then passes the input to the model.
As with other software patterns, MVC expresses the "core of the solution" to a problem while allowing it to be adapted for each system.[8] Particular MVC designs can vary significantly from the traditional description here.[9]

### [MVC: Model, View, Controller](https://www.codecademy.com/articles/mvc) CodeAcademy

The parts of MVC

#### Model:

Model code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app. For instance, if you were building a To-do app, the model code would define what a “task” is and what a “list” is – since those are the main components of a todo app.

#### View:

View code is made up of all the functions that directly interact with the user. This is the code that makes your app look nice, and otherwise defines how your user sees and interacts with it.

#### Controller:

Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view.
