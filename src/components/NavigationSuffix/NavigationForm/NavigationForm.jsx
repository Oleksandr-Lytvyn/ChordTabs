export const NavigationForm = ({ k, s }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const key = e.target.key.value;
    const suffix = e.target.suffix.value;
    k(key);
    s(suffix);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={onSubmit} action="">
        <label htmlFor="">
          KEY
          <input type="text" name="key" />
        </label>

        <label htmlFor="">
          SUFFIX
          <input type="text" name="suffix" />
        </label>
        <button type="submit">O</button>
      </form>
    </>
  );
};
