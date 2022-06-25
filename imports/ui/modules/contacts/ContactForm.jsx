import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

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
    <>
      {error && (
        <Box mt={2}>
          <BannerMessage message={error} severity={MessageEnum.ERROR} />
        </Box>
      )}
      {snackbar && (
        <AlertMessage
          open={snackbar}
          setOpen={showSnackbar}
          message="The contact has been created."
        />
      )}

      <Box sx={{ my: 2, flexGrow: 1, maxWidth: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <FormControl variant="outlined" fullWidth required={true}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <OutlinedInput
                id="name"
                value={name}
                label="Name"
                onChange={(event) => setName(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <FormControl variant="outlined" fullWidth required={true}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                type="email"
                value={email}
                label="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="imageUrl">Image URL</InputLabel>
              <OutlinedInput
                id="imageUrl"
                value={imageUrl}
                label="Image URL"
                onChange={(event) => setImageUrl(event.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12} md={12} lg={12} required={true}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="walletId">Wallet ID</InputLabel>
              <OutlinedInput
                id="walletId"
                value={walletId}
                label="Wallet ID"
                onChange={(event) => setWalletId(event.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" onClick={onSave}>
          Save Contact
        </Button>
      </Box>
    </>
  );
};
