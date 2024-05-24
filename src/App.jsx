import SettingsBtn from "./components/SettingsBtn";
import Timer from "./components/Timer";
import TimerType from "./components/TimerType";
import Title from "./components/Title";

function App() {
  return (
    <div className="flex flex-col align-middle justify-center">
      <Title />
      <TimerType />
      <Timer />
      <SettingsBtn />
    </div>
  );
}

export default App;
