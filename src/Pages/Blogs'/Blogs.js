import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>1.How will you improve the performance of a React Application?</h1>
      <p>
        ans:Keeping component state local where necessary. Memoizing React
        components to prevent unnecessary re-renders. Code-splitting in React
        using dynamic import() Windowing or list virtualization in React. Lazy
        loading images in React.
      </p>
      <h1>
        2.What are the different ways to manage a state in a React application?
      </h1>
      <p>ans:1.Local state. 2.Global state. 3.Server state. 4.URL state.</p>

      <h1>3.How does prototypical inheritance work?</h1>
      <p>
        ans:The Prototypal Inheritance is a feature in javascript used to add
        methods and properties in objects. It is a method by which an object can
        inherit the properties and methods of another object. Traditionally, in
        order to get and set the [[Prototype]] of an object, we use Object.
        getPrototypeOf and Object.
      </p>
      <h1>
        4.You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h1>
      <p>
        ans:In this task you should implement an imaginary shop’s bookkeping
        system in two different ways. The products of the shop are given in a
        Product struct array. In one product element, there exists the product’s
        name, price and the quantity of products in stock (see the header file
        for struct implementation). As said before, the accounting is done by an
        array of these Product elements. The last element of the array has a
        name whose first character is the terminating null character (\0). You
        should implement four functions
      </p>
      <h1>5.What is a unit test? Why should write unit tests?</h1>
      <p>
        ans:1.UNIT TESTING is a type of software testing where individual units
        or components of a software are tested.{" "}
      </p>
      <p>
        ans:2.Unit testing allows software developers to actually think through
        the design of the software and what has to be done before they write the
        code. This can help them to stay focused and can also help them to
        create much better designs.
      </p>
    </div>
  );
};

export default Blogs;
