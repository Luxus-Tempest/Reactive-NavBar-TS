import { forwardRef, useRef } from "react";
import { ItemLeftPanel, ItemLeftPanelProps } from "./item-left-panel";
import { Product } from "./products";

const PanelProducts = forwardRef<HTMLDivElement, {}>(function (props, ref) {
  const onMouseOver = (e: any) => {
    console.log(e.target);
  };

  const mainPanelRefs = useRef<Array<HTMLDivElement | null>>([]);

  const itemLeft: ItemLeftPanelProps[] = [
    {
      title: "Nos Best Sellers",
      onMouseOver,
    },
    {
      title: "Je souhaite",
      onMouseOver,
    },
    {
      title: "Noms de domaine",
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
        <div className="panel-search">
          <input type="text" placeholder="Rechercher un produit" />
        </div>

        <div className="panel-columns">
          <div className="panel-center">
            <p>Nos produits phares en ce moments</p>

            <div className="panel-products">
              <div>
                <p className="subtitle">Ksuite</p>
                <Product
                  title="Ksuite"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="KDrive"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="KMail"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
              </div>

              <div>
                <p className="subtitle">Grand public</p>
                <Product
                  title="Nom de domaine"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="Hebergement web"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="Hebergement Wordpresse"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
              </div>

              <div>
                <p className="subtitle">Cloud computing</p>
                <Product
                  title="Public cloud"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="Jelastic cloud"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="VPS Cloud"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
              </div>
            </div>
          </div>
          <div className="panel-right">
            <p className="subtitle">Actions rapides</p>
            <ul>
              <li>Renouveler un produit →</li>
              <li>Renouveler un produit →</li>
              <li>Renouveler un produit →</li>
              <li>Renouveler un produit →</li>
            </ul>

            <div>
              <p className="subtitle">Etude de cas</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={(el) => (mainPanelRefs.current[1] = el)} className="panel-main">
        <div className="panel-search">
          <input type="text" placeholder="Rechercher un produit" />
        </div>

        <div className="panel-columns">
          <div className="panel-center">
            <p>Nos produits de saison</p>

            <div className="panel-products">
              <div>
                <p className="subtitle">Ksuite</p>
                <Product
                  title="Ksuite"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="KDrive"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="KMail"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
              </div>

              <div>
                <p className="subtitle">Grand public</p>
                <Product
                  title="Nom de domaine"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="Hebergement web"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="Hebergement Wordpresse"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
              </div>

              <div>
                <p className="subtitle">Cloud computing</p>
                <Product
                  title="Public cloud"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="Jelastic cloud"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
                <Product
                  title="VPS Cloud"
                  description="Stocker, collaborer, et partager vos fichiers"
                />
              </div>
            </div>
          </div>
          <div className="panel-right">
            <p className="subtitle">Actions rapides</p>
            <ul>
              <li>Renouveler un produit →</li>
              <li>Renouveler un produit →</li>
              <li>Renouveler un produit →</li>
              <li>Renouveler un produit →</li>
            </ul>

            <div>
              <p className="subtitle">Etude de cas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PanelProducts;
