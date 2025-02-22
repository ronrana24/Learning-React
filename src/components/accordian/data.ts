interface AccordionItem {
    id: number;
    title: string;
    content: string;
  }
  
  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and manage the state efficiently."
    },
    {
      id: 2,
      title: "How does the virtual DOM work?",
      content:
        "The virtual DOM is a lightweight copy of the real DOM. React updates the virtual DOM first, then calculates the difference (diffing), and finally updates only the changed elements in the real DOM (reconciliation)."
    },
    {
      id: 3,
      title: "What are React Hooks?",
      content:
        "React Hooks are functions that let you use state and lifecycle features in functional components. Examples include useState, useEffect, and useContext."
    },
    {
      id: 4,
      title: "What is JSX?",
      content:
        "JSX stands for JavaScript XML. It allows writing HTML-like syntax within JavaScript files, making React components more readable and expressive."
    },
    {
      id: 5,
      title: "What is the difference between state and props?",
      content:
        "Props are read-only and used to pass data between components, whereas state is mutable and managed within the component to handle dynamic behavior."
    }
  ];
  
  export default accordionData;
  