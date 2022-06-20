import { Meteor } from "meteor/meteor";
import { useState } from "react";
import BannerMessage from "./libs/BannerMessage";
import MessageEnum from "./utils/MessageModel";

export default ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSave = () => {
    Meteor.call(
      "contacts.insert",
      { name, email, imageUrl },
      (errorResponse) => {
        if (errorResponse) {
          setError(errorResponse.error);
        } else {
          setName("");
          setEmail("");
          setImageUrl("");
          setSuccess("Contact is created successfully.");
        }
      }
    );
  };

  return (
    <form>
      {error && <BannerMessage message={error} />}
      {success && (
        <BannerMessage message={success} severity={MessageEnum.SUCCESS} />
      )}

      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          type="text"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={onSave}>
          Save
        </button>
      </div>
    </form>
  );
};
