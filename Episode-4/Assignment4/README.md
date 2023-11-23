# Assignment-4 (Namaste-React 🚀)


# Theory

- Is JSX mandatory for react?

  No, JSX is not mandatory for react. We can also work in react using React.createElement() but for building large scale applications JSX is highly suggested as it     reduces lines of code and allows writing HTML in JS.


- Is ES6 mandatory for react?

  ES6 is the standardization of javascript for making code more readable and more accessible.If we don’t use ES6 in react, there is an alternative to perform. We     use create-react-class instead of ES6.


- What are the differences between React.Fragment vs <>?

  <> is quick and easy but you can’t add attributes to it, and React.Fragment takes slightly longer to type out but will enable you to include attributes such as     the key field.

  The main use case for when you might want to use the longhand version, React.Fragment, is when mapping an array into components in your JSX so that you can pass    a key to the React.Fragment.

  
- What is Virtual DOM in react?

  A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and   content as Objects and their properties. It make the updation process of UI much more faster and also reduces costs and time.  

- What is Reconciliation in react?

  Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that        React uses to determine how to update the UI in the most efficient way possible.

  React uses a virtual DOM (Document Object Model) to update the UI.

  The reconciliation algorithm works by comparing the current virtual DOM tree to the updated virtual DOM tree, and making the minimum number of changes necessary    to bring the virtual DOM in line with the updated state.

  The algorithm uses two main techniques to optimize updates:

  🚀 Tree diffing: React compares the current virtual DOM tree with the updated virtual DOM tree, and identifies the minimum number of changes necessary to bring    the virtual DOM in line with the updated state.

  🚀 Batching: React batches multiple changes into a single update, reducing the number of updates to the virtual DOM and, in turn, the real DOM.
  
