import ReactDom from "react-dom";
export function LazyLoad() {
  return ReactDom.createPortal(
    <div className="lazy-load">
      <div className="cicles">
        <div className="circle-item"></div>
        <div className="circle-item"></div>
      </div>
    </div>,
    document.getElementById("root2")
  );
}
