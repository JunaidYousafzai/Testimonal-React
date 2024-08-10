import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      quote: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier",
      author: "Mother Teresa",
    },
    {
      quote: "The only thing we have to fear is fear itself.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.",
      author: "Martin Luther King Jr.",
    },
    {
      quote: "Do one thing every day that scares you.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Well done is better than well said.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      author: "Helen Keller",
    },
  ];
  const prevhandle = () => {
    setIndex((index + testimonials.length - 1) % testimonials.length);
    console.log((index + testimonials.length - 1) % testimonials.length)
  };
  const nexthandle = () => {
    setIndex((index + 1) % testimonials.length);
    console.log((index + 1) % testimonials.length)
  };

  return (
    <>
    <h1>Quote Generator Using React</h1>
      <div className="testimonial">
        <div className="testimonial-quote">
          <h4>Quote</h4>
          {`" ${testimonials[index].quote} "`}
        </div>
        <div className="testimonial-author">
          <h4>Author</h4>

          {`" ${testimonials[index].author} "`}
        </div>
        <br />
        <br />
        <div className="nav">
          <button onClick={prevhandle}>Previous</button>
          <button onClick={nexthandle}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
