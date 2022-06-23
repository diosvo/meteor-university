import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

export default LoadingProgress = ({ linear = true }) => {
  return linear ? <LinearProgress /> : <CircularProgress />;
};
