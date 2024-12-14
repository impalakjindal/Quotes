import React from "react";
import Card from "./card";
import{motion} from "framer-motion";

function Foreground() {
  const data = [
    {
      desc: "The only way to do great work is to love what you do.",
      filesize: "– Steve Jobs",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    },
    {
      desc: "Believe you can and you're halfway there",
      filesize: "– Theodore Roosevelt",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" },
    },
    {
      desc: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      filesize: "-Winston Churchill",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "What lies behind us and what lies before us are tiny matters compared to what lies within us",
      filesize: "– Henry Stanley Haskins",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Life isn’t about waiting for the storm to pass; it’s about learning to dance in the rain",
      filesize: " – Vivian Greene",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Love is composed of a single soul inhabiting two bodies",
      filesize: "– Aristotle",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },

    {
      desc: "Creativity is intelligence having fun",
      filesize: " – Albert Einstein",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Opportunities don’t happen. You create them.",
      filesize: "  – Chris Grosser",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Don’t be afraid to give up the good to go for the great.",
      filesize: " – John D. Rockefeller",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "The only true wisdom is in knowing you know nothing",
      filesize: " – Socrates",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "Knowing yourself is the beginning of all wisdom",
      filesize: " – Aristotle",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];
  return (
    
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5 overflow-y-auto">
      {data.map((item,index)=>(
        <Card data={item}/>
      ))}
    </div>
  );
}

export default Foreground;
