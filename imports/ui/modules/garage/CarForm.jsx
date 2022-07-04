export default CarForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());

    Meteor.call("cars.create", data, (errorResponse) => {
      if (errorResponse) {
        console.log(errorResponse.message);
      } else {
        console.log("hi");
      }
    });
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input name="make" type="text" />
      <input name="model" type="text" />
      <input name="image" type="text" />
      <input name="description" type="text" />
      <button type="submit">Create</button>
    </form>
  );
};
