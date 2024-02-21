import React from "react";

export interface QuoteProps {
  quote: string;
  author: string;
  image: string;
}

const quote = (props: QuoteProps) => {
  return (
    <div className="quote" style={{ backgroundImage: `url(/${props.image})` }}>
      <div>
        <p>{props.quote}</p>
        <strong>{props.author}</strong>
      </div>
    </div>
  );
};

export default quote;
