## start project commands
`
 npm i
 npm run start
`



## Inflow Coding Test

This coding test is designed to test your skills for transforming and manipulating data in Javascript. There is also a bonus question on managing state in React. The expected time taken to complete the test is 2 hours.

The starting code is a simple React app which displays some hardcoded values. Run it now with `npm start`.

The content in this example app consists of many exercises a member can complete. Because there are many exercises we group the exercises into Modules, for example there may be a module on "Organization Skills" containing exercises that will help a member become more organized. Within that module we break this down further into levels which provide an order for the user to complete the exercises in.

A Module has many Levels and each Level has many Exercises.

`Module -> Level -> Exercise`

### 1. Display The Data

Rewrite the `Module` component to use the data from `./src/data/module-data.json`. In this example there is only one module.

### 2. Collapsable Levels

Make it so that when you click on a level title it toggles the visibility of the exercises contained in the level. If the exercises are shown, tapping on the level title makes them hidden, if they are hidden tapping on the level title makes them shown.

### 3. Level Completion

You will find data for which exercises a member (user) has completed in `./src/data/user-data.json` Given that a Level is complete when all the exercises in that level are complete make a level collapsed by default if it is completed.

### 4. Exercise Timing

Display at the top of the module, above all the levels and below the module title the last exercise the user completed yesterday. You may want to create a modified version of the sample data to test this functionality.

### 5. Database Schema

Given the structure of the sample data, design a database schema for storing modules, levels, exercises and user exercise completion. You can do this on a piece of paper, using a diagram, in text format or pseudo code. However you choose to do it please attach your representation of the schema in your submission as a separate file outside of the code directory.

### Bonus Question: React State Management

Inside the src directory you will find a component named `Switcher`. Unfortunately this component was written by a rogue developer who never tested the feature before merging and it has a few bugs. There is also a `SwitcherClassBased` component if you are unfamiliar with hooks.

This component is designed to animate between three inputs, showing one at a time and going to the next input when the "Next" button is pressed. When on the last input the button text should change to ‘Submit’ and pressing the button should console log the values of the inputs and not animate further. The component should focus the active input as it comes into view.

See if you can find the bugs in this component and fix them.

