import { useTranslation } from 'react-i18next'
import { Photo } from '../../models/Photo'

import {
  CardContainer,
  InfoPanel,
  PhotoCreationDate,
  PhotoDescription,
  PhotoImage,
  PhotoLink,
} from './styles'

type Props = {
  photo: Photo
}

const PhotoCard = ({ photo }: Props) => {
  const { t, i18n: {changeLanguage, language} } = useTranslation()
  return (
    <PhotoLink to='/view' state={{ photo }}>
      <CardContainer>
        <PhotoImage src={photo.smallUrl} alt={photo.description} />

        <InfoPanel>
          {photo.description && (
            <PhotoDescription>
              {photo.description.length > 50
                ? `${photo.description.slice(0, 50)}(...).`
                : photo.description}
            </PhotoDescription>
          )}
          <PhotoCreationDate>
          {t('create')} 
          {photo.creationDate.toLocaleDateString()}
          </PhotoCreationDate>
        </InfoPanel>
      </CardContainer>
    </PhotoLink>
  )
}

export default PhotoCard
