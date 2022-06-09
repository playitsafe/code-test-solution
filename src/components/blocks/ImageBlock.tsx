import React, { FC } from 'react';
import StyledImageBlock from '../../styles/ImageBlock.styled';
import { ReactComponent as CameraIcon } from '../../assets/icons/camera.svg';

import type { IImageBlock } from '../../interfaces/article';
interface IImageBlockProps {
  item: IImageBlock
}

const ImageBlock: FC<IImageBlockProps> = ({ item }) => {
  return (
    <StyledImageBlock>
      <img src={item.url} alt={item.captionText} />
      <figcaption>
        <CameraIcon />
        {item.captionText}
      </figcaption>
    </StyledImageBlock>
  );
}

export default ImageBlock;