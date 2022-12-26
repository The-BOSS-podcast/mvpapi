import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CampaignEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Associated Campaigns" source="associatedCampaigns" />
        <TextInput label="Associated Socials" source="associatedSocials" />
        <TextInput label="Camapign Brief" source="camapignBrief" />
        <TextInput label="Campaign Cost" source="campaignCost" />
        <TextInput label="Campaign Name" source="campaignName" />
        <TextInput label="Content" source="content" />
      </SimpleForm>
    </Edit>
  );
};
