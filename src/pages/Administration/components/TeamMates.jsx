import { Box, styled, Typography } from "@mui/material";
import { useState } from "react";

import SearchInput from "../../../components/SearchInput";
import CustomBlueButton from "../../../components/CustomBlueButton";
import TableToDisplayData from "../../../components/TableToDisplayData";
import {
  administrationTeamMateCols,
  administrationTeamMateRows,
} from "../../../data/administrationTeamMateDetails";
import InviteTeamMateModal from "./TeamComps/InviteTeamMateModal";
import SummaryDetails from "./TeamComps/SummaryDetails";

let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "154px",
    height: "30px",
    fontSize: "24px",
    color: "#1A1C1F",
  };
});

let BoxForSearchAndAddTeamMate = styled(Box)(() => {
  return {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    boxSizing: "border-box",
  };
});

export default function TeamMates() {
  let [inviteTeamModalState, setInviteTeamModal] = useState(false);
  let [summaryModalState, setSummaryModal] = useState(false);
  let [summaryDetails, setSummaryDetaisls] = useState(null);

  function onMoreDetailsClick({row}) {
    setSummaryDetaisls(row)
    setSummaryModal(true)
  }

  return (
    <Box>
      <BoxForSearchAndAddTeamMate>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <UserWelComeComponent>Team mates</UserWelComeComponent>
          <SearchInput />
        </Box>
        <CustomBlueButton
          width={"169px"}
          height={"48px"}
          onClick={() => {
            console.log("i got here")
            setInviteTeamModal(true);
          }}
        >
          Invite Team Mate
        </CustomBlueButton>
      </BoxForSearchAndAddTeamMate>
      <TableToDisplayData
        columnsInTable={administrationTeamMateCols}
        rowsInTable={administrationTeamMateRows}
        moreDetailsAction={onMoreDetailsClick}
      />
      <InviteTeamMateModal
        isModalOpen={inviteTeamModalState}
        setModalState={setInviteTeamModal}
      />
      <SummaryDetails isModalOpen={summaryModalState}
      setModalState={setSummaryModal}
      details={summaryDetails}
      setDetails={setSummaryDetaisls}/>
    </Box>
  );
}
