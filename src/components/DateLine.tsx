import React, { FC } from 'react';
import dayjs from 'dayjs';
import StyledPublicationDate from '../styles/DateLine.style';
import { ReactComponent as PlusIcon } from '../assets/icons/plus.svg';

interface PublicationDateProps {
  publicationDate: string | undefined
}

const PublicationDate: FC<PublicationDateProps> = ({ publicationDate }) => {
  const time = dayjs(publicationDate).format('ddd, DD MMMM YYYY hh:mm A');
  return (
    <StyledPublicationDate>
      <time dateTime={publicationDate}>{time}</time>
      <PlusIcon />
    </StyledPublicationDate>
  );
}

export default PublicationDate;