import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CampaignList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Campaigns"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Associated Campaigns" source="associatedCampaigns" />
        <TextField label="Associated Socials" source="associatedSocials" />
        <TextField label="Camapign Brief" source="camapignBrief" />
        <TextField label="Campaign Cost" source="campaignCost" />
        <TextField label="Campaign Name" source="campaignName" />
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
