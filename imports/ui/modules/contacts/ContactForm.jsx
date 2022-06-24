import { Meteor } from "meteor/meteor";
import { useState } from "react";
import AlertMessage from "../../libs/AlertMessage";
import BannerMessage from "../../libs/BannerMessage";
import MessageEnum from "../../utils/MessageModel";

export default ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [walletId, setWalletId] = useState("");

  const [error, setError] = useState("");
  const [snackbar, showSnackbar] = useState(false);

  const onSave = () => {
    Meteor.call(
      "contacts.insert",
      { name, email, imageUrl, walletId },
      (errorResponse) => {
        if (errorResponse) {
          setError(errorResponse.message);
        } else {
          setName("");
          setEmail("");
          setImageUrl("");
          setWalletId("");
          showSnackbar(true);
        }
      }
    );
    showSnackbar(false);
  };

  return (
    <form>
      {error && <BannerMessage message={error} severity={MessageEnum.ERROR} />}
      {snackbar && (
        <AlertMessage
          open={snackbar}
          setOpen={showSnackbar}
          message="The contact has been created."
        />
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
        <label htmlFor="walletId">Wallet Id</label>
        <input
          id="walletId"
          type="text"
          value={walletId}
          onChange={(event) => setWalletId(event.target.value)}
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
