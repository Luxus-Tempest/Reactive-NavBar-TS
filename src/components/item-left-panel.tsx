export interface ItemLeftPanelProps {
  title: string;
  description?: string;
  image?: string;
  onMouseOver: (e: any) => void;
}

export const ItemLeftPanel = (props: ItemLeftPanelProps) => {
  return (
    <div className="item-left-panel" onMouseOver={props.onMouseOver}>
      <strong>{props.title}</strong>
      {props.description && <p>{props.description}</p>}
    </div>
  );
};
