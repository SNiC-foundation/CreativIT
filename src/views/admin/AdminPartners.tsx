import React from 'react';
import { CardContent, Paper } from '@mui/material';
import { Client, Partner } from '../../clients/server.generated';
import AdminTable from '../../components/admin/AdminTable';
import { AdminPropField } from '../../components/admin/AdminProps';
import { notEmptyString } from '../../components/admin/defaultValidators';
import InfoItem from '../../components/layout/InfoItem';

function AdminPartners() {
  const [partners, setPartners] = React.useState<Partner[] | undefined>(
    undefined,
  );
  const [loading, setLoading] = React.useState(true);

  const getPartners = () => {
    const client = new Client();
    client.getAllPartners().then((p) => {
      setPartners(p);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    getPartners();
  }, []);

  const entityColumns: AdminPropField<Partner>[] = [
    {
      attribute: 'logoFilename',
      label: '',
      width: 50,
      fieldType: 'image',
      canBeUpdated: false,
      initial: '',
    },
    {
      attribute: 'name',
      label: 'Name',
      width: 150,
      fieldType: 'string',
      initial: '',
      validationError: notEmptyString,
      canBeUpdated: true,
    },
    {
      attribute: 'package',
      label: 'Package',
      width: 90,
      fieldType: 'dropdown',
      initial: 'bronze',
      options: [
        {
          key: 'copper',
          value: 'Copper',
        },
        {
          key: 'bronze',
          value: 'Bronze',
        },
        {
          key: 'silver',
          value: 'Silver',
        },
        {
          key: 'gold',
          value: 'Gold',
        },
        {
          key: 'platinum',
          value: 'Platinum',
        },
      ],
      canBeUpdated: true,
    },
    {
      attribute: 'location',
      label: 'Location',
      width: 120,
      fieldType: 'string',
      initial: '',
      validationError: notEmptyString,
      canBeUpdated: true,
    },
    {
      attribute: 'specialization',
      label: 'Specialization',
      width: 180,
      fieldType: 'string',
      initial: '',
      validationError: notEmptyString,
      canBeUpdated: true,
    },
    {
      attribute: 'shortDescription',
      label: 'Description (short)',
      width: 300,
      fieldType: 'text',
      initial: '',
      canBeUpdated: true,
    },
    {
      attribute: 'description',
      label: 'Description',
      width: 300,
      fieldType: 'text',
      initial: '',
      canBeUpdated: true,
    },
    {
      attribute: 'url',
      label: 'URL',
      width: 200,
      fieldType: 'string',
      initial: '',
      validationError: notEmptyString,
      canBeUpdated: true,
    },
  ];

  const handleCreate = async (partner: Partner) => {
    setLoading(true);
    const client = new Client();
    await client.createPartner(partner);
    getPartners();
  };

  const handleUpdate = async (partner: Partner) => {
    setLoading(true);
    const client = new Client();
    await client.updatePartner(partner.id, {
      ...partner,
      // @ts-ignore
      id: undefined,
    });
    getPartners();
  };

  const handleDelete = async (partner: Partner) => {
    setLoading(true);
    const client = new Client();
    await client.deletePartner(partner.id);
    getPartners();
  };

  return (
    <InfoItem title="All Partners" purple inverse>
      <Paper elevation={3}>
        <CardContent>
          <AdminTable
            entityColumns={entityColumns}
            entityName="partner"
            loading={loading}
            entities={partners}
            handleCreate={handleCreate}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </CardContent>
      </Paper>
    </InfoItem>
  );
}

export default AdminPartners;
