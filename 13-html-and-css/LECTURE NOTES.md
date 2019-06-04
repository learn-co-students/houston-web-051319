# HTML & CSS


### Resources
* _


### Learning Goals

* Identify Common HTML and CSS Elements
* Create basic layouts with flexbox
* Use EJS to interpolate Ruby variables into HTML pages


### Activation
* 


### Learning Goal 1: Identify Common HTML and CSS Elements
##### Timestamp: _

##### Demonstrate
* 

##### Vocabulary
* 

##### Questions 

##### Check for Understanding
* *Kahoot Quiz:* [1-3] 

##### Cue
* 



### Learning Goal 2: Create basic layouts with flexbox

##### Timestamp: _

##### Demonstrate

- Divs
- Display inline & block

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [1-3] 

##### Cue

- 



### Learning Goal 3: Use EJS to interpolate Ruby variables into HTML pages

##### Timestamp: _

##### Demonstrate

- 

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Kahoot Quiz:* [1-3] 

### 

### Conclusion 

* 





```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  min-width: 200px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
</head>
<body>
<h1>Flexible Boxes</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
  <div>4</div>
  <div>5</div>
  <div>6</div>  
  <div>7</div>
  <div>8</div>
</div>

<p>Try to resize the browser window.</p>
<p>A container with "flex-wrap: nowrap;" will never wrap its items.</p>
<p><strong>Note:</strong> Flexbox is not supported in Internet Explorer 10 or earlier versions.</p>

</body>
</html>
```

