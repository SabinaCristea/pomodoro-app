function SettingsBtn({ onClick }) {
  return (
    <div className="flex justify-center">
      <button onClick={onClick}>
        <img
          src="/assets/icon-settings.svg"
          alt="Settings icon"
          className="opacity-50 hover:opacity-100"
        />
      </button>
    </div>
  );
}

export default SettingsBtn;
