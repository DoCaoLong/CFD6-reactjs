import Bottom from "./component/Bottom"
import Inner from "./component/Inner"

export default function Email() {
  return (
    <div className="container">
      <div
        className="emailform"
        style={{
          backgroundColor: "#f4f7f6",
          maxWidth: "590px",
          margin: "20px auto",
          fontFamily: "arial",
          lineHeight: "24px",
        }}
      >
        <Inner/>
        <Bottom/>
      </div>
    </div>
  );
}
