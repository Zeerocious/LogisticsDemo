import { FormControlLabel,TextField, Checkbox, Box, Typography } from "@mui/material";

export default function Agreement(props) {
  const { agree, setAgree } = props;

  const handleAgree = (event) => {
    setAgree(event.target.checked);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        mt: 2,
        width: "100%",
      }}
    >
      <Typography sx={{ mt: 2 }} variant="h4">
        Terms of Agreement
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 600,
          p: 2,
        }}
      >
        <TextField
          sx={{ m: 1 }}
          focused
          multiline
          maxRows={20}
          color="white"
          defaultValue="The term of this Agreement shall commence as of the Effective Date and shall continue thereafter for a period of two (2) years. Commencing on the first anniversary date of this Agreement (the “Anniversary Date”) and continuing on each Anniversary Date thereafter, the term of this Agreement shall renew for an additional year such that the remaining term of this Agreement is always two (2) years provided, however, that in order for this Agreement to renew, the disinterested members of the Board of Directors of the Bank (the “Board”) must take the following actions within the time frames set forth below prior to each Anniversary Date: (i) at least sixty (60) days prior to the Anniversary Date, conduct a comprehensive performance evaluation and review of Executive for purposes of determining whether to extend this Agreement; and (ii) affirmatively approve the renewal or non-renewal of this Agreement, which decision shall be included in the minutes of the Board’s meeting. If the decision of such disinterested members of the Board is not to renew this Agreement, then the Board shall provide Executive with a written notice of non-renewal (“Non-Renewal Notice”) at least thirty (30) days and not more than sixty (60) days prior to any Anniversary Date, such that this Agreement shall terminate at the end of twenty-four (24) months following such Anniversary Date. Notwithstanding the foregoing, in the event that the Company or the Bank has entered into an agreement to effect a transaction which would be considered a Change in Control as defined below, then the term of this Agreement shall be extended and shall terminate twenty-four (24) months following the date on which the Change in Control occurs."
          InputProps={{
            readOnly: true,
          }}
        />
        </Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={agree}
              onChange={handleAgree}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Check this box to agree"
        />
      
    </Box>
  );
}
