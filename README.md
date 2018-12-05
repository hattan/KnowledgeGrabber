# KnowledgeGrabber

## A sample JavaScript object to fetch data from Azure Functions.

```javascript
let question = 'how are you?';
let request = new KnowledgeGrabber().getAnswer(question);
request.then(function(answer){
  console.log(answer); //42 
}); 
```