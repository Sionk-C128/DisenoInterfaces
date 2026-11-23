// Carrusel visual de emojis. La selección es decorativa.
export default function EmojiCarousel() {
  const emojis = ['😮‍💨', '😃', '🤠', '😈', '🤖'];

  return (
    <section className="emoji-carousel" aria-label="Selector visual de emojis">
      {emojis.map((emoji, index) => (
        <div
          className={`emoji-card emoji-position-${index} ${
            index === 2 ? 'selected' : ''
          }`}
          key={emoji}
        >
          <span className="emoji">{emoji}</span>
        </div>
      ))}
    </section>
  );
}