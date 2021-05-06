export default function AccodionItem({ date, content }) {
  return (
    <div className="accordion">
      <div className="accordion__title">
        <div className="date">{date}</div>
        <h3>CSS, CSS3, Flexbox, Grid</h3>
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  );
}
