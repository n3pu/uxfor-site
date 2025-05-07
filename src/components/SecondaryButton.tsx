export function SecondaryButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button className="secondary-button" onClick={onClick}>
      {text}
    </button>
  );
}