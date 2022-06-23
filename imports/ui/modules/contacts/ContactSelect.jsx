import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default ContactSelect = ({ contacts, contact, setContact }) => {
  return (
    <Autocomplete
      id="contact-select"
      value={contact}
      options={contacts}
      onChange={(event, value) => {
        event.preventDefault();
        setContact(value);
      }}
      noOptionsText={"No options found"}
      sx={{ width: "100%", marginBlock: 2 }}
      getOptionLabel={(option) => option.name || "Select a contact"}
      renderInput={(params) => (
        <TextField {...params} label="Destination contact" />
      )}
      renderOption={(props, option) => (
        <Box
          key={option._id}
          component="li"
          sx={{ "& > span": { ml: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.imageUrl && (
            <Avatar alt={option.name} src={option.imageUrl} />
          )}
          <span>{option.name}</span>
        </Box>
      )}
    />
  );
};
