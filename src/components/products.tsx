export interface ProductProps {
    title: string;
    description: string;
    image?: string;
  }
  
  export const Product = (props: ProductProps) => {
    return (
      <div className="product" >
        <strong>{props.title}</strong>
        <p>{props.description}</p>
      </div>
    );
  };
  