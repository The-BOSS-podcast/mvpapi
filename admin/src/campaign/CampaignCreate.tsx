import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CampaignCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Associated Campaigns" source="associatedCampaigns" />
        <TextInput label="Associated Socials" source="associatedSocials" />
        <TextInput label="Camapign Brief" source="camapignBrief" />
        <TextInput label="Campaign Cost" source="campaignCost" />
        <TextInput label="Campaign Name" source="campaignName" />
        <TextInput label="Content" source="content" />
      </SimpleForm>
    </Create>
  );
};
