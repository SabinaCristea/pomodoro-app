import { createContext, useContext, useReducer } from "react";

const SettingsContext = createContext();

const initialState = {
  timers: {
    normal: 25 * 60,
    shortPause: 5 * 60,
    longPause: 15 * 60,
  },
  themeColor: "#f87070",
  font: "sans",
  activeTimer: { type: "pomodoro", duration: 25 * 60 },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TIMERS": {
      const { normal, shortPause, longPause } = action.payload;
      let activeTimerDuration = state.activeTimer.duration;
      if (state.activeTimer.type === "pomodoro") {
        activeTimerDuration = normal;
      } else if (state.activeTimer.type === "short break") {
        activeTimerDuration = shortPause;
      } else if (state.activeTimer.type === "long break") {
        activeTimerDuration = longPause;
      }
      return {
        ...state,
        timers: action.payload,
        activeTimer: { ...state.activeTimer, duration: activeTimerDuration },
      };
    }
    case "SET_THEME_COLOR":
      return { ...state, themeColor: action.payload };
    case "SET_FONT":
      return { ...state, font: action.payload };
    case "SET_ACTIVE_TIMER":
      return { ...state, activeTimer: action.payload };
    default:
      return state;
  }
};

function SettingsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}

function useSettings() {
  const context = useContext(SettingsContext);

  if (context === undefined)
    throw new Error("SettingsContext was used outside of the SettingsProvider");

  return context;
}

export { SettingsProvider, useSettings };
