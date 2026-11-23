// Enseña los tres estados de casilla solicitados: desmarcada, marcada e indeterminada.
function CheckItem({ state, children }) {
  return (
    <label className="check-item">
      <input type="checkbox" checked={state === 'checked'} readOnly ref={el => {
        if (el) el.indeterminate = state === 'indeterminate';
      }} />
      <span>{children}</span>
    </label>
  );
}

export default function CheckOptions() {
  return (
    <section className="checks" aria-label="Ejemplos de casillas">
      {[0, 1].map(column => (
        <div className="check-column" key={column}>
          <CheckItem state="unchecked">not selected</CheckItem>
          <CheckItem state="checked">selected</CheckItem>
          <CheckItem state="indeterminate">indeterminate</CheckItem>
        </div>
      ))}
    </section>
  );
}
