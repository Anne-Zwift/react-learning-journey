import { useState } from 'react';

type TextProps = {
  text: string;
};

type TextEditorProps = TextProps & {
  onTextChange: (newText: string) => void;
};

function TextViewer({ text }: TextProps) {
  return <p>{text.toUpperCase(/*  */)}</p>;
}

function TextEditor({ text, onTextChange }: TextEditorProps) {
  return (
    <textarea
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
      rows={4}
      cols={40}
    />
  );
}

function SharedTextApp() {
  const [sharedText, setSharedText] = useState('This is My Shared Text.');

  function handleTextChange(newText: string) {
    setSharedText(newText);
  }

  return (
    <div>
      <h2>Shared Text</h2>
      <TextViewer text={sharedText} />
      <TextEditor text={sharedText} onTextChange={handleTextChange} />
    </div>
  );
}

export default SharedTextApp;
