import { forwardRef, useRef } from "react";
import { ItemLeftPanel, ItemLeftPanelProps } from "./item-left-panel";
import { Product } from "./products";
import Quote from "./quote";

const PanelAbout = forwardRef<HTMLDivElement, {}>(function (props, ref) {
  const onMouseOver = (e: any) => {
    console.log(e.target);
  };

  const mainPanelRefs = useRef<Array<HTMLDivElement | null>>([]);

  const itemLeft: ItemLeftPanelProps[] = [
    {
      title: "visions and values",
      description: "Notre vision, nos valeurs, notre histoire",
      onMouseOver,
    },
    {
      title: "The team",
      description: "Notre équipe",
      onMouseOver,
    },
    {
      title: "Blog and news",
      description: "Nos dernières actualités",
      onMouseOver,
    },
    {
      title: "Blog and news",
      description: "Nos dernières actualités",
      onMouseOver,
    },
    {
      title: "Partenaires and resellers",
      description: "Nos partenaires et revendeurs",
      onMouseOver,
    },
  ];
  return (
    <div className="panel" ref={ref}>
      <div className="panel-left">
        {itemLeft.map((item, index) => (
          <ItemLeftPanel
            {...item}
            onMouseOver={() => {
              mainPanelRefs.current.forEach((el) =>
                el?.classList.remove("visible")
              );
              mainPanelRefs.current[index]?.classList.add("visible");
            }}
            key={item.title}
          />
        ))}
      </div>

      <div
        ref={(el) => (mainPanelRefs.current[0] = el)}
        className="panel-main visible"
      >
        <Quote
          quote="Citons n'importe qui "
          author="Moi"
          image="testi-cul.jpeg"
        />
      </div>

      <div ref={(el) => (mainPanelRefs.current[1] = el)} className="panel-main">
        <Quote
          quote="MERDE ALORS GROS "
          author="Moi"
          image="testi-1.webp"
        />
      </div>
    </div>
  );
});

export default PanelAbout;
