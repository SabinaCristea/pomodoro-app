function SettingsBtn({ onClick }) {
  return (
    <div className="flex justify-center">
      <button onClick={onClick}>
        <img
          src="../public/assets/icon-settings.svg"
          alt="Settings icon"
          className="opacity-50"
        />
      </button>
    </div>
  );
}

export default SettingsBtn;
