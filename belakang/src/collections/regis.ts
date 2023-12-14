import { CollectionConfig } from "payload/types";

const regis: CollectionConfig = {
  slug: "regis",
  admin: {
    useAsTitle: "nama",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "nama",
      type: "text",
      label: "Nama",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      required: true,
      unique: true,
    },
    {
      name: "asal_sekolah",
      type: "text",
      label: "Asal Sekolah",
      required: true,
    },
    {
      name: "status",
      type: "select",
      label: "Status",
      required: true,
      options: [
        { label: "Waiting", value: "waiting" },
        { label: "Rejected", value: "rejected" },
        { label: "Accepted", value: "accepted" },
      ],
      defaultValue: "waiting",
    },
    {
      name: "tanggal_pendaftaran",
      type: "date",
      label: "Tanggal Pendaftaran",
      required: true,
    },
  ],
};

export default regis;
