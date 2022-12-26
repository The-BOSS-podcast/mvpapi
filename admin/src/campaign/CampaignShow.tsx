import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CampaignShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Associated Campaigns" source="associatedCampaigns" />
        <TextField label="Associated Socials" source="associatedSocials" />
        <TextField label="Camapign Brief" source="camapignBrief" />
        <TextField label="Campaign Cost" source="campaignCost" />
        <TextField label="Campaign Name" source="campaignName" />
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
