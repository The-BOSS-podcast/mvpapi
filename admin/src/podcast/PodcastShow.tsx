import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const PodcastShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Author" source="author" />
        <TextField label="Categories" source="categories" />
        <TextField label="Cost" source="cost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Episode Count" source="episodeCount" />
        <BooleanField label="Explicit" source="explicit" />
        <TextField label="Feed URL" source="feedUrl" />
        <TextField label="ID" source="id" />
        <TextField label="image URL" source="imageURL" />
        <TextField label="Index ID" source="indexId" />
        <TextField label="Itunes ID" source="itunesId" />
        <TextField label="Language" source="language" />
        <TextField label="Last Crawl Time" source="lastCrawlTime" />
        <TextField label="Last Parse Time" source="lastParseTime" />
        <TextField label="Owner" source="owner" />
        <TextField label="Podcast GUID" source="podcastGuid" />
        <TextField label="Podcast Name" source="podcastName" />
        <TextField label="Publisher" source="publisher" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="Verified" source="verified" />
      </SimpleShowLayout>
    </Show>
  );
};
