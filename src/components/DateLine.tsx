import React, { FC } from 'react';
import dayjs from 'dayjs';
import StyledPublicationDate from '../styles/DateLine.style';
import { ReactComponent as PlusIcon } from '../assets/icons/plus.svg';

interface IPublicationDateProps {
  publicationDate: string
}

const PublicationDate: FC<IPublicationDateProps> = ({ publicationDate }) => {
  const time = publicationDate && dayjs(publicationDate).format('ddd, DD MMMM YYYY hh:mm A');
  return (
    <StyledPublicationDate>
      <time dateTime={publicationDate}>{time}</time>
      <PlusIcon />
    </StyledPublicationDate>
  );
}

export default PublicationDate;