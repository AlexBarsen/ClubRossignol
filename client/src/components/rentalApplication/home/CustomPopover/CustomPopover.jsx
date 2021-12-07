import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";
import "./CustomPopover.scss";

const CustomPopover = ({ label, ColorlibStepIcon }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <StepLabel onClick={handleClick} StepIconComponent={ColorlibStepIcon}>
        <span className="step-label">{label}</span>
      </StepLabel>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
        }}
      >
        <Typography sx={{ p: 2 }}>{label}</Typography>
      </Popover>
    </>
  );
};

export default CustomPopover;
