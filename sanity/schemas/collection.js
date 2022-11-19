export default {
  name: "collection",
  title: "Collection",
  type: "document",
  fields: [
    {
      name: "title",
      desctription: "Enter the title of NFT Drop here",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "nftCollectionName",
      title: "Name of NFT Collection",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "creator",
      title: "Creator",
      type: "reference",
      to: { type: "creator" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "previewImage",
      title: "Preview image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
