import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

export const PodcastCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <div />
        <NumberInput step={1} label="Cost" source="cost" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Episode Count" source="episodeCount" />
        <BooleanInput label="Explicit" source="explicit" />
        <TextInput label="Feed URL" source="feedUrl" />
        <TextInput label="image URL" source="imageURL" />
        <TextInput label="Index ID" source="indexId" />
        <TextInput label="Itunes ID" source="itunesId" />
        <SelectArrayInput
          label="Language"
          source="language"
          choices={[
            { label: "English", value: "English" },
            { label: "Hindi", value: "Hindi" },
            { label: "Telgu", value: "Telgu" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Last Crawl Time" source="lastCrawlTime" />
        <DateTimeInput label="Last Parse Time" source="lastParseTime" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Podcast GUID" source="podcastGuid" />
        <TextInput label="Podcast Name" source="podcastName" />
        <TextInput label="Publisher" source="publisher" />
        <BooleanInput label="Verified" source="verified" />
      </SimpleForm>
    </Create>
  );
};
