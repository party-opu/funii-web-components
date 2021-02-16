import React from 'react'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { ArtboardSize, DESKTOP_MIN_WIDTH } from '../props'
import styled from 'styled-components'
import Spacer from '../../core/spacer'
import CircleProgress from '../../core/circleProgress'
import FilledButton from '../../core/filledButton'
import Modal from '../../core/modal'
import { useMediaQuery } from 'react-responsive'

type ContactFetchModalProps = {
  fetching: boolean
  success: boolean
  error?: string
  open?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose?: (e: any) => void
  artboardSize: ArtboardSize
}

const ContactFetchModal = ({ fetching, success, error, open = true, onClose, artboardSize }: ContactFetchModalProps) => {
  const useIsDesktop = () => {
    const isDesktop = useMediaQuery({ minWidth: DESKTOP_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'desktop' ? true : false) : isDesktop
  }

  const isDesktop = useIsDesktop()
  return (
    <Modal open={open} onClose={onClose}>
      <Inner>
        {fetching && (
          <Body>
            <CircleProgress />
            <Spacer size="l" />
            <MessageText is-desktop={isDesktop}>送信中</MessageText>
          </Body>
        )}
        {!fetching && success && (
          <React.Fragment>
            <Body>
              <AiOutlineCheckCircle size={120} color="#4cd984" />
              <Spacer size="l" />
              <MessageText>送信に成功しました</MessageText>
            </Body>
            <ActionArea>
              <FilledButton text="閉じる" size="l" color="#4cd984" onClick={onClose} />
            </ActionArea>
          </React.Fragment>
        )}
        {!fetching && !success && (
          <React.Fragment>
            <Body>
              <AiOutlineCloseCircle size={120} color="#ff6753" />
              <Spacer size="l" />
              <MessageText>{error}</MessageText>
            </Body>
            <ActionArea>
              <FilledButton text="閉じる" size="l" color="#ff6753" onClick={onClose} />
            </ActionArea>
          </React.Fragment>
        )}
      </Inner>
    </Modal>
  )
}

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 24px;
`

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ActionArea = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MessageText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.system.gray};

  &[is-desktop='false'] {
    font-size: 18px;
  }
`

MessageText.defaultProps = {
  theme: {
    system: {
      gray: '#8e8e93',
    },
  },
}

export default ContactFetchModal
