import { useState } from "react";
import SettingsBtn from "./components/SettingsBtn";
import Timer from "./components/Timer";
import TimerType from "./components/TimerType";
import Title from "./components/Title";
import SettingsModal from "./components/SettingsModal";

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="flex flex-col align-middle justify-center">
      <Title />
      <TimerType />
      <Timer />
      <SettingsBtn onClick={() => setShowSettings((prev) => !prev)} />
      {showSettings && <SettingsModal onClick={() => setShowSettings(false)} />}
    </div>
  );
}

export default App;
