function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Ladataan...!")}>Download Image</Button>;
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="BullStack" />
      <UploadButton />
    </div>
  );
}
