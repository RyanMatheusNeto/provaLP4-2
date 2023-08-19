import { useLocation } from 'react-router-dom'
import { Photo } from '../../models/Photo'
import {
  BackButton,
  BackLink,
  BackLinkPanel,
  Container,
  Image,
  InfoPanel,
  PhotoCreationDate,
  PhotoDescription,
  PhotoPanel,
} from './styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type Location = {
  state: {
    photo: Photo
  }
}

const PhotoView = () => {
  const location: Location = useLocation()
  const { photo } = location.state
  const { t, i18n: {changeLanguage, language} } = useTranslation()


    

  return (
    <Container>
      <PhotoPanel>
        <Image src={photo.regularUrl} alt={photo.description} />

        <InfoPanel>
          {photo.description && (
            <PhotoDescription>{photo.description}</PhotoDescription>
          )}

          <PhotoCreationDate>
            {t('create')} {photo.creationDate.toLocaleDateString()}
          </PhotoCreationDate>

        </InfoPanel>
      </PhotoPanel>

      <BackLinkPanel>
        <BackLink to='/'>
          <BackButton>{t('back')}</BackButton>
        </BackLink>
      </BackLinkPanel>
    </Container>
  )
}

export default PhotoView
