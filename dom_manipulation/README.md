# Dom Manipulation and Events

## 1)

### Simple DOM manipulation and Event handling

### Exercises

1. Add three div's to an HTML page, each with a unique id

2. All div's should be given a color of your choice.

   Hints: use either **document.querySelectorAll("div").forEach(el)** to loop through each div element. (will return an array of Dom Nodes) or **document.getElementsByTagName("div")**

3. Add a button to each div. Then create one click handler and assign it to all three buttons. Like this:

```JS
    <div id="div1">
      DIV 1
      <button id="btn1" class="btn">Click me!</button>
    </div>
    ....
```

For each button that is clicked, the div next to it, should get a new color.

</br>

<figure>
    <img src ="./images/divs.png"
         alt ="div's"
         width ="150"
         height ="150">
</figure>

</br>

## 2)

### Event Bubbling and event arguments

### Exercises

1. In a new HTML page add two div’s, each with a unique id. Style both id’s with this class:

```JS
    .mydiv {
       width: 25px;
       height: 25px;
       background-color:yellow;
       margin:1px;
    }
```

2. Add a click handler to each id and write some code, so when clicked, each div will write to the console "Hi from id nr: \_ ".

3. Now, using cut and paste, add 10 more div´s (still each with a unique id).

4. Adding an event handler to each div would be cumbersome and non-efficient (what if you had been asked to add 100 or thousands of new id’s). We will use JavaScripts event bubbling mechanism to solve this with only a single event handler. Add a new div with the **id="outer"** around all our div’s and assign a single click eventhandler (with the event argument) to this div.

5. Implement some code that can printout the value of the id pointed to by the target property (which you get from the event argument).

**Hint:**

```JS
function (e) { const id = e.target.id}
```

1. Add an empty paragraph tag, with an id, to your HTML and change the code for both exercises above, so that output is not written to the console, but into this paragraph.

**Hint:**

Use the **innerText** property of an Element

## 3)

### Using map to create a list

**Use table.html for solving the next two exercises. It includes Bootstrap in the html header for html Table styling.**

## Link

- [Html table](https://www.w3schools.com/html/html_tables.asp)

### Exercises

Yesterday you used the array types map and join methods to create a \<ul>\</ul> (unsorted list) with a number of names.

1. Use that function and DOM manipulation to insert the \<ul>\</ul> in an HTML page.

2. Create a FORM with an input field and add a submit button as sketched here.

</br>

<figure>
    <img src ="./images/form.png"
         alt ="js form"
         width ="250"
         height ="250">
</figure>

</br>

1. Write the necessary code to add a new name to the array of names, and regenerate the \<ul> with the updated list.

**Hint:**

You will probably see, very shortly that the name is added, the screen flickers and it's gone again.
The problem is that it submits to the server, so the full page is reloaded.To prevent this you can call preventDefault() on the event argument which will prevent the default behavior (submit) and it should work.

You can also use **preventDefault()** to prevent a link from actually forwarding to the link-address.

1. Add two more buttons to the form with the text: **“remove first”** and **“remove last”**.

## 4)

### Using map and filter to create dynamic table-rows

```JS
    var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
    ];
```

Use this array, with map and filter as outlined in the following:

### Exercises

1. Use the map method to create a table with all data. Write a function which, given this array, will return an HTML string with the array formatted as a Table as sketched in this figure.

</br>

<figure>
    <img src ="images/cararray.png"
         alt ="cras table"
         width ="380"
         height ="250">
    <!-- <figcaption><em>Cars Table</em></figcaption> -->
</figure>

</br>

1. Write a filter method, to filter out items from the list. Add an input field and a button (provide each with an id), as sketched in this figure below. Write the necessary code so when the button is clicked, the list changes accordantly.

</br>

<figure>
    <img src ="images/filterCars.png"
         alt ="filter cars"
         width ="380"
         height ="250">
    <!-- <figcaption><em>Filter Cars Table</em></figcaption> -->
</figure>

</br>

## 5)

## Implement a simple calculator

Implement a calculator with the functionality given below.

### Exercises

1. When a button is clicked the value should be appended to the display div (middle figure).
2. When the equal sign is clicked, the result of the calculation must be presented. (last figure).

</br>

<figure>
    <img src ="images/calc.png"
         alt ="calculator"
         width ="550"
         height ="250">
    <!-- <figcaption><em>Calculator</em></figcaption> -->
</figure>

</br>

3. Go to calculator.html to get started:

**Hints**
(and these are just hints, there are many ways to solve this problem)

- Assign a single click event handler to the div with the buttons id to handle anything but the “=” button.
- Use your knowledge about event bubbling and the events target property to get the text in the div that was clicked (via the innerText property).
- Assign a new event handler to the div with the “calculate” id. Use the event arguments .stopPropagation() method, to prevent this event from bubbling up to your “outer” event handler.
- To the calculation:
  - Use the indexOff(..) method to test whether a string contains \*, /, + or -.
  - Use split(..) (with one of the four operators) to get the two numeric values and use Number(..) to convert a numeric string into a number before you do the calculation.
  - Alternatively, use the eval() function to evaluate the expression